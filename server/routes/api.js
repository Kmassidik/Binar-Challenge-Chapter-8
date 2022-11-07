const express = require('express');
const router = express.Router();
const apiControllers = require('../controllers/apiControllers');
const restrictJWT = require('../middlewares/restrictJWT')

router.get('/',apiControllers.dashboard)
router.get('/all',apiControllers.allData)
router.post('/signup',apiControllers.actionSignup)
router.post('/login',apiControllers.actionLogin)
router.get('/authorization',restrictJWT,apiControllers.isAuthorization)
router.post('/create-room',restrictJWT,apiControllers.createRoom)
router.post('/fight/room-id',apiControllers.roomId)


module.exports = router;
