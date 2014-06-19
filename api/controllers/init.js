var request = require('../promises/request.js');
var util = require('util');
var url = require('url');
var config = require('../config.js');
var Q = require('q');

var decisionCleaner = require('../convertors/decisionCleaner.js');
var allResultsCleaner = require('../convertors/allResultsCleaner.js');

var companyDecisionModel = require('../models/companyDecision.js');
var brandDecisionModel = require('../models/brandDecision.js');
var SKUDecisionModel = require('../models/SKUDecision.js');
var seminarModel = require('../models/seminar.js');
var reportModel = require('../models/report.js');
var simulationResultModel = require('../models/simulationResult.js');
var chartModel = require('../models/chart.js');
var dbutility = require('../models/dbutility.js');

var cgiapi = require('../cgiapi.js');

var decisionAssembler = require('../dataAssemblers/decision.js');
var companyStatusReportAssembler = require('../dataAssemblers/companyStatusReport.js');
var chartAssembler = require('../dataAssemblers/chart.js');

/**
 * Initialize game data, only certain perople can call this method
 *
 * @method init
 *
 */
exports.init = function(req, res, next) {
    var seminarId = 'TTT'; //this parameter should be posted from client
    var simulationSpan = 6; //should be posted from client

    if(!seminarId){
        return next(new Error("seminarId cannot be empty."));
    }

    Q.all([
        simulationResultModel.removeAll(seminarId),
        dbutility.removeExistedDecisions(seminarId),
        seminarModel.remove(seminarId),
        chartModel.remove(seminarId),
        reportModel.remove(seminarId)
    ])
    .then(function(){
        //insert empty data into mongo, so that we can update them
        return Q.all([
            //add a new seminar
            seminarModel.insert(seminarId, {
                seminarId: seminarId,
                simulationSpan: simulationSpan
            })
        ]);
    })
    .then(function(){
        return Q.all([
            initSimulationResult(seminarId),
            initDecision(seminarId)
        ])
    })
    .then(function(){
        return Q.all([
            simulationResultModel.findAll(seminarId)
        ])
        .spread(function(allResults){
            return Q.all([
                initChartData(seminarId, allResults),
                //initCompanyReport(seminarId, allResults)
            ]);
        });
    })
    .then(function(){
        //when init is called, current period is 1
        return dbutility.insertEmptyDecision(seminarId, 1);
    })
    .then(function(){
        res.send('initialize success');
    })
    .fail(function(err){
        next(err);
    })
    .done();
};


function initDecision(seminarId){
    var periods = config.initPeriods

    var queries = [];
    periods.forEach(function(period) {
        queries.push(cgiapi.queryDecisionsInOnePeriod(seminarId, period));
    });

    return Q.all(queries)
    .then(function(decisions){
        //decisions: [[decision1, decision2], [decision3, decision4]]
        //tempDecisions: [decisoon1, decison2, decision3, decision4]
        var tempDecisions = [];
        decisions.forEach(function(a){
            a.forEach(function(b){
                tempDecisions.push(b);
            })
        })

        //this function modify allDecisions directly
        cleanDecisions(tempDecisions);

        return dbutility.saveDecision(seminarId, tempDecisions);
    });
}

function cleanDecisions(allDecisions){
    allDecisions.forEach(function(decision){
        decisionCleaner.clean(decision);
    })
}

/**
 * @param {Object} allResults allResults of all periods
 */
function initChartData(seminarId, allResults){
    var period = allResults[allResults.length-1].period;

    return Q.all([
        seminarModel.findOne(seminarId),
        //get exogenous of period:0, FMCG and GENERIC market
        cgiapi.getExogenous(period)
    ])
    .spread(function(seminar, exogenous){
        //generate charts from allResults
        var chartData = chartAssembler.extractChartData(allResults, {
            simulationSpan: seminar.simulationSpan,
            exogenous: exogenous
        });

        return chartModel.insert({
            seminarId: seminarId,
            charts: chartData
        })
    });
}


function initSimulationResult(seminarId){
    var periods = config.initPeriods;

    //allResults contains data of several periods
    var queries = [];
    periods.forEach(function(period) {
        queries.push(cgiapi.queryOnePeriodResult(seminarId, period));
    });

    return Q.all(queries)
    .then(function(allResults){
        cleanAllResults(allResults);

        var saveOperations = []
        for(var i=0; i<allResults.length; i++){
            allResults[i].seminarId = seminarId;
            allResults[i].period = periods[i];
            saveOperations.push(simulationResultModel.insert(allResults[i]))
        }
        return Q.all(saveOperations);
    });
}

function cleanAllResults(allResults){
    allResults.forEach(function(onePeriodResult){
        //remove useless data like empty SKU, company
        allResultsCleaner.clean(onePeriodResult);
    })
}





































