module.exports = {
    isLogin : (req, res, next) => {
        if (req.isAuthenticated()) return next()
        res.render('/login', {message:req.flash("error")})
    },
}
