const express = require('express');
const passport = require('../middlewares/passportLocal');
const router = express.Router();
const admControllers = require('../controllers/admControllers');
const restrict = require('../middlewares/restrict');

// router.get('/',restrict.isLogin,admControllers.dashboard)

router.get('/',admControllers.login)
router.get('/login',admControllers.login)
router.post('/login', passport.authenticate('local',{
    successRedirect: '/biodata',
    failureRedirect: '/login',
    failureFlash: true
}))

router.get('/signup',admControllers.signup)
router.post('/signup',admControllers.actionSignUp)

router.get('/biodata',restrict.isLogin,admControllers.biodata)
router.post('/biodata',admControllers.actionBiodata)

router.get('/profile',restrict.isLogin,admControllers.profile)
router.post('/profile',admControllers.actionProfile)

router.get('/dashboard',restrict.isLogin,admControllers.dashboard)

router.get('/game',restrict.isLogin,admControllers.game)
router.post('/game',admControllers.actionGame)

router.get('/logout',admControllers.logout)

module.exports = router;
