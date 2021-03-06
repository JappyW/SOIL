import Router from 'express';
import UserController from '../controllers/UserController';
const passport = require('passport');
const passportConf = require('../passport');
const VALIDATION = require('../constants/controller.env');
const SIGN_UP = require("../constants/server.env").SIGN_UP;
const SIGN_IN = require("../constants/server.env").SIGN_IN;
const SIGN_OUT = require("../constants/server.env").SIGN_OUT;
const OAUTHGOOGLE = require("../constants/server.env").OAUTHGOOGLE;
const OAUTHFACEBOOK = require("../constants/server.env").OAUTHFACEBOOK;
const EDITPROFILE = require("../constants/server.env").EDITPROFILE;
const CHANGEPASSWORD = require("../constants/server.env").CHANGEPASSWORD;
const VERIFY_AUTH_TOKEN = require("../constants/server.env").VERIFY_AUTH_TOKEN;
const SEND_EMAIL = require("../constants/server.env").SEND_EMAIL;
const DECODEGIVENTOKEN = require("../constants/server.env").DECODEGIVENTOKEN;
const SEND_RECOVERY_EMAIL = require("../constants/server.env").SEND_RECOVERY_EMAIL;
const RECOVER_PASSWORD = require("../constants/server.env").RECOVER_PASSWORD;
const passportSignIn = passport.authenticate('local', { session: false });
const router = Router();

router.get('/', UserController.getAllUsers);
router.post(`${SIGN_UP}`,UserController.validate(VALIDATION.REGISTRATION_DATA), UserController.signUp);
router.post(`${SIGN_IN}`,UserController.validate(VALIDATION.LOGIN_DATA),passportSignIn, UserController.signIn);
router.get(`${SIGN_OUT}`, UserController.signOut);
router.post(`${VERIFY_AUTH_TOKEN}`, UserController.verifyEmail);
router.post(`${SEND_EMAIL}`, UserController.sendVerificationEmail);
router.post(`${SEND_RECOVERY_EMAIL}`, UserController.sendRecoverEmail);
router.put(`${RECOVER_PASSWORD}`, UserController.recoverPassword);
router.post(`${OAUTHGOOGLE}`,passport.authenticate('googleToken', { session: false }), UserController.oauthGoogle);
router.post(`${OAUTHFACEBOOK}`,passport.authenticate('facebook'), UserController.oauthFacebook);
router.put(`${EDITPROFILE}`, UserController.editProfile);
router.put(`${CHANGEPASSWORD}`, UserController.changePassword);
router.post(`${DECODEGIVENTOKEN}`, UserController.getUserData);


export default router;
