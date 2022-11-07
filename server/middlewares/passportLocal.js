const passport = require('passport')
const localStrategy =  require('passport-local')
const { Users } = require('../models')
const { checkPassword } = require('../middlewares/passsworHash')

async function authenticate(username,password,done) {
    try {
        const user = await Users.findOne({ where: {username,username}})
        if (!user) return done(null,false, {message : "user not found"})
        const isPassword = checkPassword(password, user.password)
        if (!isPassword) return done(null,false, {message : "password wrong"})
        return done(null,user)
    } catch (error) {
        return done(null,false, {message : error.message})
    }
}

passport.use(
    new localStrategy({ usernameField:'username', passwordField: 'password'}, authenticate)
)
passport.serializeUser(
    (user, done) => done(null, user.id)
)
passport.deserializeUser(
    async (id,done) => done(null, await Users.findOne({ where : {id:id}}))
)

module.exports = passport