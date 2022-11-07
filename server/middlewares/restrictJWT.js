const passport = require('../middlewares/passportJWT')

module.exports = passport.authenticate('jwt',{
    session:false
})