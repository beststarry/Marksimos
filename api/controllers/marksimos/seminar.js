var seminarModel = require('../../models/marksimos/seminar.js');
var gameTokenModel = require('../../models/user/gameauthtoken.js');
var userModel = require('../../models/user/user.js');
var userRoleModel = require('../../models/user/userrole.js');
var teamModel = require('../../models/user/team.js');

var logger = require('../../../common/logger.js');
var consts = require('../../consts.js');
var utility = require('../../../common/utility.js');




/**
 * Seminar API for Facilitator
 */


exports.addSeminar = function(req, res, next){
    var checkRequiredFieldResult = checkRequiredField(req);

    if(checkRequiredFieldResult){
        return res.status(400).send( {message: checkRequiredFieldResult});
    }

    var validateResult = validateSeminar(req);

    if(validateResult){
        return res.send(400, {message: validateResult});
    }

    var seminar = {};

    var facilitatorId = req.user.id;

    seminar.description = req.body.description;
    seminar.country = req.body.country;
    seminar.state = req.body.state;
    seminar.city = req.body.city;
    seminar.venue = req.body.venue;
    seminar.facilitatorId = facilitatorId;
    seminar.simulationSpan = req.body.simulation_span;
    seminar.companyNum = req.body.company_num;
    
    seminar.companyAssignment = [];

    var companyNameList = utility.createCompanyArray(seminar.companyNum);
    for(var i = 0; i<seminar.companyNum; i++){

        seminar.companyAssignment.push({
            companyId: i + 1,
            companyName: companyNameList[i],
            studentList : [],
            teamList : []
        });
    }

    userModel.findOneQ({_id: facilitatorId})
    .then(function(dbFacilitator){
        if(!dbFacilitator){
            throw new Error("Cancel promise chains. Can't find facilitator.");
        }

        if(dbFacilitator.numOfLicense <= 0){
            throw new Error("Cancel promise chains. You don't have enough licenses.");
        }

        return userModel.updateQ({_id: facilitatorId}, {
            numOfLicense: dbFacilitator.numOfLicense - 1,
            numOfUsedLicense: dbFacilitator.numOfUsedLicense + 1
        })
    }).then(function(numAffected){
        if(numAffected === 0 || numAffected > 1){
            throw new Error( "Cancel promise chains. update facilitator failed, or update more than one facilitator.");
        }

        //get all seminar, create the next seminar id
        return seminarModel.find({}).sort({seminarId: "desc"}).execQ();
    }).then(function(allSeminars){
        if(!allSeminars || allSeminars.length === 0){
            seminar.seminarId = "10000";
        }else{
            seminar.seminarId = parseInt(allSeminars[0].seminarId) + 1;
        }

        return seminarModel.createQ(seminar);
    }).then(function(result){
        if(!result){
            throw new Error( "Cancel promise chains. save seminar to db failed.");
        }

        return res.status(200).send(result);
    }).fail(function(err){
        next(err);
    }).done();
};




exports.assignStudentToSeminar = function(req, res, next){

    req.checkBody('seminar_id', 'Invalid seminar id.').notEmpty().isInt();
    req.checkBody('company_id', 'Invalid company id.').notEmpty().isInt();

    var email;

    if(req.body.studentemail !== ''){
        req.checkBody('studentemail', 'Invalid email.').notEmpty().isEmail();
        email = req.body.studentemail;
    }else{
        req.checkBody('teamcreatoremail', 'Invalid email.').notEmpty().isEmail();
        email = req.body.teamcreatoremail;
    }

    var seminarId = req.body.seminar_id;
    var companyId = +req.body.company_id;


    var validationErrors = req.validationErrors();

    if(validationErrors){
        return res.status(400).send( {message: validationErrors} );
    }


    var userData;

    userModel.findOneQ({email: email}).then(function(resultUser){

        if(!resultUser){
            throw new Error('Cancel promise chains. Because User not found !');
        }

        userData = resultUser;

        return seminarModel.findOneQ({seminarId: seminarId});
    }).then(function(resultSeminar){
        if (!resultSeminar) {
            throw new Error('Cancel promise chains. Because Seminar not found !');
        }

        var companyAssignment = resultSeminar.companyAssignment;
        var isStudentAssignedToSeminar = false;
        var isTeamAssignedToSeminar = false;

        if(req.body.studentemail !== ''){

            for(var i=0; i < companyAssignment.length; i++){
                if(companyAssignment[i].studentList.indexOf(userData.email) > -1){
                    isStudentAssignedToSeminar = true;
                    throw new Error('Cancel promise chains. Because email have already assigned to this seminar!');
                }
            }

            //if this student has not been added to this seminar, add it
            if(!isStudentAssignedToSeminar){
                seminarModel.findOneAndUpdateQ({ 'seminarId': seminarId, 'companyAssignment.companyId': companyId }, {
                    '$addToSet': { 'companyAssignment.$.studentList': userData.email }

                }).then(function(saveDoc){
                    if(!saveDoc){
                        throw new Error('Cancel promise chains. Because Update seminar failed. More or less than 1 record is updated. it should be only one !');
                    }
                    return res.send({message: "assign student to seminar success."});
                }).fail(function(err){
                    next (err);
                }).done();
            }

        }else{
            teamModel.findOne({creator : userData._id}).populate('memberList').execQ().then(function(resultTeam) {

                if (!resultTeam) {
                    throw new Error('Cancel promise chains. Because Team not found !');
                }

                companyAssignment.forEach(function(company){

                    if(typeof company.teamList !== 'undefined'){
                        if(company.teamList.indexOf(resultTeam._id) > -1){
                            isTeamAssignedToSeminar = true;
                            throw new Error('Cancel promise chains. Because team have already assigned to this seminar!');
                        }
                    }

                });

                if(!isTeamAssignedToSeminar){

                    companyAssignment.forEach(function(company){
                        if(company.companyId == companyId) {

                            resultTeam.memberList.forEach(function(student) {

                                if(company.studentList.indexOf(student.email) === -1){
                                    company.studentList.push(student.email);
                                }

                            });

                            if(typeof company.teamList !== 'undefined'){
                                company.teamList.push(resultTeam._id);
                            }

                        }

                    });
                    return seminarModel.findOneAndUpdateQ({ 'seminarId': seminarId }, {
                        companyAssignment : companyAssignment
                    });
                }

            }).then(function(saveDoc){
                if(!saveDoc){
                    throw new Error('Cancel promise chains. Because Update seminar failed. More or less than 1 record is updated. it should be only one !');
                }
                return res.send({message: "assign team to seminar success."})
            }).fail(function(err){
                next (err);
            }).done();

        }

    }).fail(function(err){
        next (err);
    }).done();
};




exports.removeStudentFromSeminar = function(req, res, next){
    var email = req.body.email;
    var seminarId = req.body.seminar_id;

    if(!email){
        return res.send(400, {message: "Invalid email."});
    }

    if(!seminarId){
        return res.send(400, {message: "You don't choose a seminar."})
    }


    seminarModel.findOneQ({seminarId: seminarId}).then(function(dbSeminar){
        if(!dbSeminar){
            throw {httpStatus: 400, message: "seminar "+ seminarId + " doesn't exist."}
        }

        var companyAssignment = dbSeminar.companyAssignment;


        for(var i=0; i<companyAssignment.length; i++){
            //if this student is in this company
            if(companyAssignment[i].studentList.indexOf(email) > -1){

                for(var j=0; j<companyAssignment[i].studentList.length; j++){
                    if(companyAssignment[i].studentList[j] === email){
                        companyAssignment[i].studentList.splice(j, 1);
                    }
                }
            }
        }


        return seminarModel.updateQ({seminarId: seminarId}, {
            companyAssignment: companyAssignment
        });
    })
    .then(function(numAffected){
        if(numAffected!==1){
            return res.send({message: "there's error during update seminar."});
        }
        return res.send({message: "remove student from seminar success."})
    })
    .fail(function(err){
        logger.error(err);
        if(err.httpStatus){
            return res.send(err.httpStatus, {message: err.message});
        }
        return res.send(500, {message: "remove student from seminar failed."})
    })
    .done();
};





exports.getSeminarOfFacilitator = function(req, res, next){

    var facilitatorId = req.user._id;

    var keywordFilter = req.query.filterKey || '';
    var status = req.query.status || 'all';

    var query = {};
    query.$and = [
        { facilitatorId: facilitatorId }
    ];

    if (status !== 'all') {
        query.$and.push({ 'isInitialized': status });
    }

    if (keywordFilter) {
        var strRegex = ".*[" + keywordFilter.split('').join('][') + "].*";
        var regex = { $regex: strRegex , $options: 'i' }; // $options : 'i' Means case insensitivity to match upper and lower cases. 不区分大小写

        query.$or = [
            { 'description': regex },
            { 'seminarId': regex },
            { 'venue': regex }
        ];
    }

    seminarModel.find(query).sort({seminarId:-1}).execQ().then(function(allSeminars){

        // 处理兼容老版本
        if(allSeminars.length > 0 ){
            allSeminars.forEach(function(seminarOld){

                if(seminarOld.companyAssignment.length > 0){
                    if(typeof seminarOld.companyAssignment[0].companyId == 'undefined'){

                        var companyList = [];

                        for(var j=0; j<seminarOld.companyAssignment.length; j++){

                            if( typeof seminarOld.companyAssignment[j] !== 'undefined'){

                                var companyNew = {
                                    companyId : j + 1,
                                    companyName : String.fromCharCode('A'.charCodeAt(0) + j ),
                                    studentList : []
                                };

                                for(var k=0; k<seminarOld.companyAssignment[j].length; k++) {
                                    companyNew.studentList.push(seminarOld.companyAssignment[j][k]);
                                }

                                companyList.push(companyNew);
                            }


                        }

                        seminarModel.updateQ({seminarId: seminarOld.seminarId}, { $set: { companyAssignment: companyList }}).then(function(result){
                        }).done();

                    }
                }
            })
        }

        res.send(allSeminars);
    }).fail(function(err){
        next(err);
    }).done();
};



exports.seminarInfoForFacilitator = function(req, res, next){
    var seminarId = req.params.seminar_id;

    if(!seminarId){
        return res.send(400, {message: "Invalid seminar_id"});
    }

    seminarModel.findOneQ({seminarId: seminarId}).then(function(dbSeminar){
        if(!dbSeminar){
            return res.send(400, {message: "seminar " + seminarId + " doesn't exist."});
        }

        return res.render('marksimosadmin/adminmarksimosreport.ejs',{
            title : 'Admin | Report',
            seminarId: seminarId
        });
    }).fail(function(err){
        logger.error(err);
        return res.send(500, {message: "choose seminar fails."})
    }).done();

};






/**
 * Seminar API for Student
 */


exports.getSeminarList = function(req, res, next){
    var email = req.user.email;
    var assignedSeminars = [];

    seminarModel.find({
        companyAssignment : {$elemMatch : {studentList: { $in: [email] }} },
        isInitialized :true
    }).sort({isSimulationFinished : 1 , seminarId: -1}).execQ().then(function(allSeminars){

        for(var i=0; i<allSeminars.length; i++){

            var seminar = allSeminars[i];

            for(var j=0; j<seminar.companyAssignment.length; j++){

                if( typeof seminar.companyAssignment[j].studentList  !== 'undefined'){
                    if(seminar.companyAssignment[j].studentList.indexOf(email) > -1){
                        if(seminar.isInitialized ){
                            assignedSeminars.push(seminar);
                            break;
                        }
                    }
                }
            }
        }

        return res.status(200).send(assignedSeminars);
    }).fail(function(err){
        err.message = "get seminar list failed.";
        next(err);
    }).done();
};




exports.chooseSeminarForStudent = function(req, res, next){
    var seminarId = req.query.seminar_id;

    req.checkQuery('seminar_id', 'Invalid seminar_id').isInt();

    var errors = req.validationErrors();
    if (errors) {
        return res.status(400).send('There have been validation errors: ' + util.inspect(errors), 400);
    }

    seminarModel.findOneQ({seminarId: seminarId}).then(function(dbSeminar){
        if(!dbSeminar){
            return res.status(400).send( {message: "seminar " + seminarId + " doesn't exist."});
        }else{

            var newGameToken = {
                userId: req.user.id,
                gameId: userRoleModel.gameList.marksimos.id,
                seminarId: dbSeminar.seminarId
            };

            gameTokenModel.findOneAndUpdateQ({ userId: req.user.id }, newGameToken, { upsert : true } ).then(function(gameToken){

                return res.status(200).send({message: "choose seminar success."});

            }).fail(function(err){
                err.message = "save game token failed!";
                next(err);
            }).done();
        }

    }).fail(function(err){
        err.message = "choose seminar failed !";
        next(err);
    }).done();
};




function checkRequiredField(req){
    if(!req.body.description) return "description can't be empty.";

    if(!req.body.country) return "country can't be empty";

    if(!req.body.state) return "state can't be empty";

    if(!req.body.city) return "city can't be empty";

    if(!req.body.venue) return "venue can't be empty";

    if(!req.body.simulation_span) return "simulation_span can't be empty";

    if(!req.body.company_num) return "company_num can't be empty.";
}

function validateSeminar(req){
    if(req.body.simulation_span){
        var span = parseInt(req.body.simulation_span);
        if(span <= 0 || span > consts.Period_Max){
            return "Invalid simulation_span";
        }
    }

    if(req.body.company_num){
        var companyNum = parseInt(req.body.company_num);
        if(companyNum <= 0 || companyNum > consts.CompaniesMax){
            return "Invalid company_num";
        }
    }
}



















