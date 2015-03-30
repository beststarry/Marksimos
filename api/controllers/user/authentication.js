var userModel = require('../../models/user/user.js');
var userRoleModel = require('../../models/user/userrole.js');
var teamModel = require('../../models/user/team.js');
var seminarModel = require('../../models/marksimos/seminar.js');
var Token = require('../../models/user/authenticationtoken.js');
var emailModel = require('../../models/user/emailContent.js');
var Captcha = require('../../models/user/Captcha.js');
var _ = require('lodash');


var mailProvider = require('../../../common/sendCloud.js');
var mailSender = mailProvider.createEmailSender();

var uuid = require('node-uuid');
var logger = require('../../../common/logger.js');
var util = require('util');
var utility = require('../../../common/utility.js');


var expiresTime = 1000 * 60 * 60 * 24; // 1 days


//Passport
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;


/**
 * Passport LocalStrategy For Login and Generate Token.
 */

Token.clearToken();

exports.initAuth = function () {
    passport.use(new LocalStrategy({
        usernameField: 'username',
        passReqToCallback: true
    }, function (req, username, password, done) {
        //登录参数验证 (用户名和邮箱都可以验证)

        req.assert('password', '6 to 20 characters required').len(6, 20);

        if(req.body.username.indexOf('@') > -1 ){
            req.body.email = req.body.username;
            req.checkBody('email', 'Invalid email').notEmpty().isEmail();
        }else{
            req.checkBody('username', 'Username should be 6-20 characters').notEmpty().len(6, 20);
        }

        var errors = req.validationErrors();
        if (errors) {
            return done(null, false, { message: util.inspect(errors) });
        }

        var rememberMe = false;
        if(req.body.rememberMe){
            rememberMe = true;
        };


        //查找用户
        userModel.findOne( {$or : [
            { username: req.body.username},
            { email: req.body.email}

        ]}, function (err, user) {
            if (err) { return done(err); }
            
            if (!user) {
                return done(null, false, { message: 'User does not exist.' });
            }

            if (!userModel.verifyPassword(password, user.password)) {
                return done(null, false, { message: 'Username or password wrong.' });
            }

            //为用户分配token
            Token.createToken({ userId: user._id, rememberMe : rememberMe }).then(function (tokenInfo) {
                user.token = tokenInfo.token;
                user.tokenExpires = tokenInfo.expires;

                done(null, user);
            }).fail(function (err) {
                done({ message: util.inspect(err) }, false);
            }).done();
        });

    }));

};




exports.studentLogin = function (req, res, next) {
    passport.authenticate('local', function (err, user, info) {
        if (err) { return next(err) }
        if (!user) {
            return res.status(401).send( { message: info.message })
        }
        if (user.role === userRoleModel.roleList.student.id) {
            //res.cookie('x-access-token', user.token, { maxAge: 12 * 60 * 60 * 1000, httpOnly: true });
            res.cookie('x-access-token', user.token, { maxAge: user.tokenExpires, httpOnly: true });
            return res.status(200).send({ message: 'Login success.' , token: user.token });

        }else {
            return res.status(403).send({ message: 'Your account is a ' + user.roleName + ' account, you need a student account login' });
        }
    })(req, res, next);
};

exports.adminLogin = function (req, res, next) {
    passport.authenticate('local', function (err, user, info) {
        if (err) { return next(err) }
        if (!user) {
            return res.status(401).send( { message: info.message })
        }
        if (user.role === userRoleModel.roleList.admin.id || user.role === userRoleModel.roleList.distributor.id || user.role === userRoleModel.roleList.facilitator.id) {
            //res.cookie('x-access-token', user.token, { maxAge: 12 * 60 * 60 * 1000, httpOnly: true });
            res.cookie('x-access-token', user.token, { maxAge: user.tokenExpires, httpOnly: true });
            return res.status(200).send({ message: 'Login success.' , token: user.token });

        }else {
            return res.status(403).send({ message: 'Your account is a ' + user.roleName + ' account, you need a admin account login' });
        }
    })(req, res, next);
};



exports.logout = function(req, res, next){
    req.logout();
    res.clearCookie('x-access-token');

    res.status(200).send({message: 'Logout success'});
};




/**
 * Authenticate Token  For LocalStrategy.
 *
 *  * Examples:
 *
 *    authLoginToken( { successRedirect: '/',  failureRedirect: '/login',  failureFlash: true });
 *
 */


exports.authLoginToken = function (options) {
    return function (req, res, next) {
        options = options || {};
        if(typeof options.failureRedirect === 'undefined'){
            options.failureRedirect = false;
        }

        function lookup(obj, field) {
            if (!obj) { return null; }
            var chain = field.split(']').join('').split('[');
            for (var i = 0, len = chain.length; i < len; i++) {
                var prop = obj[chain[i]];
                if (typeof (prop) === 'undefined') { return null; }
                if (typeof (prop) !== 'object') { return prop; }
                obj = prop;
            }
            return null;
        }

        function sendFailureResponse(options, next){

            if(typeof options.successRedirect !== 'undefined'){
                return next();
            }

            if (options.failureRedirect) {
                return res.redirect(options.failureRedirect);
            }else{
                return res.status(401).send( {message: options.message });
            }
        }

        function sendSuccessResponse(options, next){
            if (typeof options.successRedirect !== 'undefined') {
                return res.redirect(options.successRedirect);
            }
            return next();
        }

        var tokenName = 'x-access-token';
        var token = req.headers[tokenName] || lookup(req.body, tokenName) || lookup(req.query, tokenName) || req.cookies[tokenName];

        if (token) {
            Token.verifyToken(token, function(err, user) {
                if (err) {
                    options.message = err;
                    return sendFailureResponse(options, next);
                }
                req.user = user;

                // 同时查询改用户当前所玩的Seminar
                seminarModel.findSeminarByUserId(user.id).then(function(seminarResult){
                    if(seminarResult){

                        req.gameMarksimos = {
                            currentStudent : user,
                            currentStudentSeminar : seminarResult
                        };

                        var company = _.find(seminarResult.companyAssignment, function(company) {
                            return company.studentList.indexOf(user.email) > -1;
                        });
                        if (company != undefined) {
                            req.gameMarksimos.socketRoomName = seminarResult.seminarId + company.companyId;
                        }
                        else {
                            req.gameMarksimos.socketRoomName = false;
                        }

                        // very important, after seminar finished currentPeriod is last round
                        if(req.gameMarksimos.currentStudentSeminar.currentPeriod > req.gameMarksimos.currentStudentSeminar.simulationSpan){
                            req.gameMarksimos.currentStudentSeminar.currentPeriod =  req.gameMarksimos.currentStudentSeminar.simulationSpan;
                        }
                    }else{
                        req.gameMarksimos = {
                            currentStudent : false,
                            currentStudentSeminar : false,
                            socketRoomName : false
                        };
                    }

                    return sendSuccessResponse(options, next);

                }).fail(function(err){
                    next(err);
                }).done();
            });
        }else {
            options.message = 'Token not found, pls login .';
            sendFailureResponse(options, next);
        }


    }
};




/**
 * Middleware that will authorize a UserRole  with optional `options`.
 *
 * Examples:
 *
 *    authRole('twitter-authz', { successRedirect: '/',  failureRedirect: '/login',  failureFlash: true });
 *
 * @param {Object} options
 */


exports.authRole = function (permission, options) {
    return function (req, res, next) {
        permission = permission || "";
        options = options || {};

        if (userRoleModel.authRolePermission(permission, req.user.roleId) ){
            return next();
        }else{
            if (options.failureRedirect) {
                return res.redirect(options.failureRedirect);
            }else{
                return res.status(403).send( {message: 'You are not authorized. Need ' + permission + ' permission !'});
            }
        }

    };
};







exports.getUserInfo = function (req, res, next){
    var userResult;

    if(req.gameMarksimos.currentStudent){
        userResult = req.gameMarksimos.currentStudent.toObject();

        userResult.currentMarksimosSeminar = req.gameMarksimos.currentStudentSeminar.toObject();

        // very important, after seminar finished currentPeriod is last round
        if(userResult.currentMarksimosSeminar.currentPeriod > userResult.currentMarksimosSeminar.simulationSpan){
            userResult.currentMarksimosSeminar.currentPeriod =  userResult.currentMarksimosSeminar.simulationSpan;
        }

        userResult.currentMarksimosSeminar.numOfCompany = userResult.currentMarksimosSeminar.companyNum;
        userResult.currentMarksimosSeminar.maxPeriodRound = userResult.currentMarksimosSeminar.simulationSpan;


        for(var i=0; i<userResult.currentMarksimosSeminar.companyAssignment.length; i++){
            //if this student is in this company
            if(userResult.currentMarksimosSeminar.companyAssignment[i].studentList.indexOf(userResult.email) > -1){

                userResult.currentMarksimosSeminar.currentCompany = {
                    companyId : userResult.currentMarksimosSeminar.companyAssignment[i].companyId,
                    companyName : userResult.currentMarksimosSeminar.companyAssignment[i].companyName,
                    numOfTeamMember : userResult.currentMarksimosSeminar.companyAssignment[i].studentList.length
                };
            }
        }
    }else{
        userResult = req.user.toObject();
    }

    userResult.roleName = req.user.roleName;

    teamModel.findOne({ creator: userResult._id }).populate('memberList', userModel.selectFields()).execQ().then(function(resultTeam){
        userResult.team = resultTeam || [];
        res.status(200).send(userResult);

    }).fail(function(err){
        next(err);
    }).done();


};






/**
 * Registration .
 *
 *  * Examples:
 *
 *
 *
 */


exports.registerB2CStudent = function(req, res, next){

    var validationErrors = userModel.registerValidations(req, userRoleModel.roleList.student.id, userModel.getStudentType().B2C);

    if(validationErrors){
        return res.status(400).send( {message: validationErrors} );
    }


    var newUser = {
        username : req.body.username,
        email: req.body.email,
        password: req.body.password,

        gender : req.body.gender,
        //firstName : req.body.firstName,
        //lastName : req.body.lastName,
        //birthday : req.body.birthday,
        //idcardNumber : req.body.idcardNumber,
        //mobilePhone : req.body.mobilePhone,
        //qq : req.body.qq,


        //majorsDegree : req.body.majorsDegree,
        //organizationOrUniversity : req.body.university,
        //dateOfGraduation : req.body.dateOfGraduation,

        facilitatorId: "54d834bdeaf05dbd048120f8", // fixed for b2c_facilitator

        role : userRoleModel.roleList.student.id,
        studentType : userModel.getStudentType().B2C,

        emailActivateTokenExpires : new Date(new Date().getTime() + expiresTime * 30)
    };


    userModel.register(newUser).then(function(resultUser) {
        if (!resultUser) {
            throw new Error('Cancel promise chains. Because Save new user to database error.');
        }

        var mailContent = emailModel.registration();
        //mailContent.to = resultUser.email;

        mailContent.substitution_vars.to.push(resultUser.email);
        mailContent.substitution_vars.sub['%username%'].push(resultUser.username);
        mailContent.substitution_vars.sub['%useremail%'].push(resultUser.email);
        mailContent.substitution_vars.sub['%token%'].push(resultUser.emailActivateToken);

        //mailContent.html = mailContent.html1 + resultUser.username + mailContent.html2 + resultUser.email + mailContent.html3 + resultUser.emailActivateToken + mailContent.html4 + resultUser.email + mailContent.html5 + resultUser.emailActivateToken + mailContent.htmlend;

        mailSender.sendMailQ(mailContent).then(function(resultSendEmail){
            if (!resultSendEmail) {
                throw new Error('Cancel promise chains. Because Send email of new user failed !');
            }else{
                logger.log(resultSendEmail);
            }
        }).fail(function(err){
            next(err);
        }).done();

        return res.status(200).send({message: 'Register new user success'});

    }).fail(function(err){
        next(err);
    }).done();

};


exports.registerB2CEnterprise = function(req, res, next){

    var validationErrors = userModel.registerValidations(req, userRoleModel.roleList.enterprise.id);

    if(validationErrors){
        return res.status(400).send( {message: validationErrors} );
    }

    var newUser = {
        username : req.body.username,
        email: req.body.email,
        password: req.body.password,


        companyName : req.body.companyName,
        companyAddress : req.body.companyAddress,
        companyContactPerson : req.body.companyContactPerson,
        companyContactMobileNumber: req.body.companyContactMobileNumber,
        companyOfficeTelephone: req.body.companyOfficeTelephone,

        facilitatorId: "54d834bdeaf05dbd048120f8", // fixed for b2c_facilitator

        role : userRoleModel.roleList.enterprise.id,
        studentType : userModel.getStudentType().B2C,

        emailActivateTokenExpires : new Date(new Date().getTime() + expiresTime * 30)
    };


    userModel.register(newUser).then(function(result){
        if(!result){
            throw new Error('Cancel promise chains. Because Save new company to database error.');
        }

        return res.status(200).send({message: 'Register new company success'});

    }).fail(function(err){
        next(err);
    }).done();


};


// http://www.hcdlearning.com/e4e/emailverify/registration?email=jinwyp@163.com&emailtoken=f70c16b5-2cf1-42d1-90ba-b2fa1bcd3db8

exports.activateRegistrationEmail = function(req, res, next){
    var validationErrors = userModel.emailVerifyRegistrationValidations(req, userRoleModel.roleList.student.id, userModel.getStudentType().B2C);

    if(validationErrors){
        return next(new Error('Cancel Email Activate ! ' + validationErrors[0].msg) );
    }

    var nowDate = new Date();

    userModel.findOneQ({
        email: req.query.email,
        emailActivateToken: req.query.emailtoken,
        emailActivated: false
    }).then(function(resultUser){

        if(!resultUser) {
            throw new Error('Cancel promise chains. Because User Email Activate Token not found!');
        }

        if( resultUser.emailActivateTokenExpires < nowDate){
            throw new Error('Cancel promise chains. Because Email Activate Token Expire !');
        }

        resultUser.emailActivated = true;
        resultUser.activated = true;

        return resultUser.saveQ();

    }).then(function(savedDoc, numberAffectedRows){

        //if(numberAffectedRows !== 1){
        //    throw new Error('Cancel promise chains. Because Update user emailActivated status failed. more or less than 1 record is updated. it should be only one !');
        //}

        if(!savedDoc ){
            throw new Error('Cancel promise chains. Because Update user emailActivated status failed. more or less than 1 record is updated. it should be only one !');
        }

        return res.render('b2c/registration/indexregsuccess.ejs', {
            title     : ' Email Activate Success ! | HCD Learning',
            username  : savedDoc.username,
            useremail : savedDoc.email
        });

    }).fail(function(err){
        next(err);
    }).done();
};








exports.sendResetPasswordEmail = function(req, res, next){

    var validationErrors = userModel.resetForgotPasswordValidations(req, userRoleModel.roleList.student.id, userModel.getStudentType().B2C, 1);

    if(validationErrors){
        return res.status(400).send( {message: validationErrors} );
    }

    userModel.findOneQ({ email: req.body.email }).then(function(resultUser) {

        if (!resultUser) {
            throw new Error('Cancel promise chains. Because User Email does not exist.');
        }


        resultUser.resetPasswordTokenExpires = new Date(new Date().getTime() + expiresTime * 2);
        resultUser.resetPasswordToken = uuid.v4();
        resultUser.resetPasswordVerifyCode = Math.floor(Math.random() * (999999 - 100000) + 100000 );


        return resultUser.saveQ();
    }).then(function(resultUser){

        if(!resultUser){
            throw new Error('Cancel promise chains. Because Update user resetPasswordToken failed. More or less than 1 record is updated. it should be only one !');
        }

        var mailContent = emailModel.resetPassword();

        mailContent.substitution_vars.to.push(resultUser.email);
        mailContent.substitution_vars.sub['%username%'].push(resultUser.username);
        mailContent.substitution_vars.sub['%useremail%'].push(resultUser.email);
        mailContent.substitution_vars.sub['%token%'].push(resultUser.resetPasswordToken);
        mailContent.substitution_vars.sub['%verifycode%'].push(resultUser.resetPasswordVerifyCode);

        //mailContent.to = resultUser.email;
        //mailContent.html = mailContent.html1 + resultUser.username + mailContent.html2 + resultUser.email + mailContent.html3 + resultUser.emailActivateToken + mailContent.html4 + resultUser.email + mailContent.html5 + resultUser.emailActivateToken + mailContent.htmlend ;

        mailSender.sendMailQ(mailContent).then(function(resultSendEmail){
            if (!resultSendEmail) {
                throw new Error('Cancel promise chains. Because Send resetPassword email failed !');
            }else{
                logger.log(resultSendEmail);
            }
        }).fail(function(err){
            next(err);
        }).done();

        return res.status(200).send({message: 'Reset Password Email Send'});

    }).fail(function(err){
        next(err);
    }).done();
};



exports.verifyResetPasswordCode = function(req, res, next){

    var validationErrors = userModel.resetForgotPasswordValidations(req, userRoleModel.roleList.student.id, userModel.getStudentType().B2C, 2);

    if(validationErrors){
        return res.status(400).send( {message: validationErrors} );
    }

    userModel.findOneQ({
        resetPasswordVerifyCode: req.body.passwordResetVerifyCode
    }).then(function(resultUser){

        if(!resultUser) {
            throw new Error('Cancel promise chains. Because User Reset Password Verify Code wrong!');
        }

        //resultUser.resetPasswordVerifyCode = ''; // remove PasswordVerifyCode after reset

        return resultUser.saveQ();


    }).then(function(resultUser){

        if(!resultUser){
            throw new Error('Cancel promise chains. Because Update reset Password Verify Code failed. More or less than 1 record is updated. it should be only one !');
        }

        return res.status(200).send({message: 'Reset Password Token valid'});

    }).fail(function(err){
        next(err);
    }).done();
};



exports.resetNewPassword = function(req, res, next){

    var validationErrors = userModel.resetForgotPasswordValidations(req, userRoleModel.roleList.student.id, userModel.getStudentType().B2C, 3);

    if(validationErrors){
        return res.status(400).send( {message: validationErrors} );
    }

    userModel.findOneQ({
        resetPasswordVerifyCode: req.body.passwordResetVerifyCode
    }).then(function(resultUser){

        if(!resultUser) {
            throw new Error('Cancel promise chains. Because User Reset Password Verify Code wrong!');
        }

        resultUser.resetPasswordVerifyCode = ''; // remove PasswordVerifyCode after reset
        resultUser.password = req.body.password;

        return resultUser.saveQ();

    }).then(function(savedDoc, numberAffectedRows){
        //console.log('reset password : ', savedDoc, numberAffectedRows);

        if(!savedDoc ){
            throw new Error('Cancel promise chains. Because Update reset Password failed. More or less than 1 record is updated. it should be only one !');
        }

        return res.status(200).send({message: 'Reset New Password Success.'});

    }).fail(function(err){
        next(err);
    }).done();
};






// http://www.hcdlearning.com/e4e/e4e/emailverify/changepassword?username=jinwyp&passwordtoken=799731

exports.forgotPasswordStep2 = function(req, res, next){
    var validationErrors = userModel.emailVerifyResetPasswordValidations(req, userRoleModel.roleList.student.id, userModel.getStudentType().B2C);

    if(validationErrors){
        return next(new Error('Cancel Reset password! ' + validationErrors[0].msg) );
    }

    var nowDate = new Date();

    userModel.findOneQ({
        username: req.query.username,
        resetPasswordToken: req.query.passwordtoken
    }).then(function(resultUser){

        if(!resultUser) {
            throw new Error('Cancel promise chains. Because User Reset Password Token not found!');
        }

        if( resultUser.resetPasswordTokenExpires < nowDate){
            throw new Error('Cancel promise chains. Because Reset Password Token Expire !');
        }

        return res.render('b2c/forgotpassword/step2enterpassword.ejs', {
            title     : ' Reset your password ! | HCD Learning',
            username  : resultUser.username,
            useremail : resultUser.email
        });

    }).fail(function(err){
        next(err);
    }).done();
};



var ccap = require('ccap')();//Instantiated ccap class
exports.generateCaptcha = function(req, res, next) {

    var ary = ccap.get();
    var txt = ary[0];
    var buf = ary[1];
    Captcha.createQ({txt: txt})
    .then(function(captcha) {
        res.cookie('captcha-id', captcha._id.toString());
        res.removeHeader('content-type');
        res.end(buf);
        console.log(txt);
    })
    .fail(next)
    .done();
};







