var decisionAssembler = require('../dataAssemblers/decision.js');
var seminarModel = require('../models/marksimos/seminar.js');
var Q = require('q');
var utility = require('../../common/utility.js');
var consts = require('../consts.js');
var gameParameters = require('../gameParameters.js').parameters;
var simulationResultModel = require('../models/marksimos/simulationResult.js');

/**
* @param {Number} currentPeriod 
*/
exports.getSpendingDetails = function(seminarId, currentPeriod, companyId){
    return Q.all([
        decisionAssembler.getDecision(seminarId, currentPeriod, companyId),
        seminarModel.findOneQ({seminarId: seminarId}),
        simulationResultModel.findOne(seminarId, currentPeriod - 1)
    ])
    .spread(function(decision, seminar, lastPeriodResult){
        var brandData = [];
        var companyData = {}

        //assemble brand data
        for(var i=0; i<decision.d_BrandsDecisions.length; i++){
            var brandDecision = decision.d_BrandsDecisions[i];
            var brandDataRow = {};
            brandDataRow.brandName = brandDecision.d_BrandName;
            brandDataRow.salesForce = brandDecision.d_SalesForce;
            brandDataRow.consumerCommunication = 0;
            brandDataRow.consumerPromotion = 0;
            brandDataRow.tradeExpenses = 0;
            brandDataRow.estimatedAdditionalTradeMarginCost =0;
            brandDataRow.estimatedWholesaleBonusCost = 0;

            for(var j=0; j<brandDecision.d_SKUsDecisions.length; j++){
                var SKUDecision = brandDecision.d_SKUsDecisions[j];
                brandDataRow.consumerCommunication += SKUDecision.d_Advertising;
                brandDataRow.consumerPromotion += SKUDecision.d_PromotionalBudget;
                brandDataRow.tradeExpenses += SKUDecision.d_TradeExpenses;
                brandDataRow.estimatedAdditionalTradeMarginCost += SKUDecision.d_AdditionalTradeMargin;
                brandDataRow.estimatedWholesaleBonusCost += SKUDecision.d_WholesalesBonusRate;
            }

            brandDataRow.estimatedAdditionalTradeMarginCost = brandDataRow.estimatedAdditionalTradeMarginCost;
            brandDataRow.estimatedWholesaleBonusCost = brandDataRow.estimatedWholesaleBonusCost;

            brandData.push(brandDataRow);
        }

        //calculate total value
        var total = {};
        total.brandName = "Total";
        total.salesForce = brandData.reduce(function(lastResult, nextValue){
            return lastResult + nextValue.salesForce;
        }, 0);
        total.consumerCommunication = brandData.reduce(function(lastResult, nextValue){
            return lastResult + nextValue.consumerCommunication;
        }, 0);
        total.consumerPromotion = brandData.reduce(function(lastResult, nextValue){
            return lastResult + nextValue.consumerPromotion;
        }, 0);
        total.tradeExpenses = brandData.reduce(function(lastResult, nextValue){
            return lastResult + nextValue.tradeExpenses;
        }, 0);
        total.estimatedAdditionalTradeMarginCost = brandData.reduce(function(lastResult, nextValue){
            return lastResult + parseFloat(nextValue.estimatedAdditionalTradeMarginCost);
        }, 0)
        total.estimatedWholesaleBonusCost = brandData.reduce(function(lastResult, nextValue){
            return lastResult + parseFloat(nextValue.estimatedWholesaleBonusCost);
        }, 0)
        brandData.push(total);

        //assemble company data
        companyData.investmentInProductionEfficiency = decision.d_InvestmentInEfficiency;
        companyData.investmentInProcessingTechnology = decision.d_InvestmentInTechnology;

        companyData.totalInvestment = total.salesForce + total.consumerCommunication + total.consumerPromotion
        + total.tradeExpenses + total.estimatedAdditionalTradeMarginCost + total.estimatedWholesaleBonusCost + companyData.investmentInProductionEfficiency + companyData.investmentInProcessingTechnology;


        var companyDataInAllResults = utility.findCompany(lastPeriodResult, companyId)
        
        //average budget per period
        companyData.averageBudgetPerPeriod = companyDataInAllResults.c_TotalInvestmentBudget / (seminar.simulationSpan);

        companyData.totalInvestmentBudget = companyDataInAllResults.c_TotalInvestmentBudget;

        companyData.cumulatedPreviousInvestments = companyDataInAllResults.c_CumulatedInvestments;

        companyData.availableBudget = companyDataInAllResults.c_TotalInvestmentBudget - companyDataInAllResults.c_CumulatedInvestments 
            - companyData.totalInvestment;

        //normal capacity
        companyData.normalCapacity = companyDataInAllResults.c_Capacity - utility.calculateTotalVolume(decision)
        if(companyData.normalCapacity < 0){
            companyData.normalCapacity = 0;
        }

        //company data in all results
        if(companyDataInAllResults.c_Capacity - utility.calculateTotalVolume(decision) < 0){
            companyData.availableOvertimeCapacityExtension = companyDataInAllResults.c_Capacity * gameParameters.pgen.firm_OvertimeCapacity + (companyDataInAllResults.c_Capacity - utility.calculateTotalVolume(decision));
        }else{
            companyData.availableOvertimeCapacityExtension = companyDataInAllResults.c_Capacity * gameParameters.pgen.firm_OvertimeCapacity;
        }
        

        companyData.acquiredEfficiency = companyDataInAllResults.c_AcquiredEfficiency*100;
        companyData.acquiredProductionVolumeFlexibility = companyDataInAllResults.c_AcquiredFlexibility * 100;
        companyData.acquiredTechnologyLevel = companyDataInAllResults.c_AcquiredTechnologyLevel;

        
        return {
            brandData: brandData,
            companyData: companyData
        };
    });
}
























