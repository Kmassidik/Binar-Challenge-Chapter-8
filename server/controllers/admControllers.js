const { Users, Profiles, Histories} = require('../models')
const { hashPassword } = require('../middlewares/passsworHash')

class adminController {
    static home(req,res){
        res.redirect('/dashboard')
    }
    
    static async login(req,res){ 
        if (req.user != undefined || req.user != null) return res.redirect('/biodata')
        req.flash()
        res.render('login', { title:"Login"})
    }

    static async signup(req,res){ 
        res.render('signup/signup', { title:"Sign Up", validationUser:false, isDone:false })
    }
    static async actionSignUp(req,res){
        try {
            const { username, password, role } = req.body
            const users = await Users.findOne({ where:{ username:username}})
            if (username == null || username == undefined || 
                username == "" || username == " " || password == null || 
                password == undefined || password == "" || password == " ") {
                    return res.render('signup/signup',{ title:"Sign Up", validationUser:true, isDone:false})
                }
                if (users) return res.render('signup/signup',{ title:"Sign Up",validationUser: false,isDone:true})
                console.log(username,hashPassword(password),role);
                Users.create({
                    username,
                    password: hashPassword(password),
                    role
                })
                res.redirect("/login")
            } catch (error) {
            res.redirect('/signup')
        }
    }

    static async biodata(req,res){ 
        try {
            const profile = await Profiles.findOne({ where: { UserId:req.user.dataValues.id }})
            if (profile) return res.redirect('/dashboard') 
            res.render('biodata/biodata', { title:"Biodata" })
        } catch (error) {
            res.redirect('/login')
        }
    }
    static async actionBiodata(req,res){ 
        try {
            const { fullname, age, email, birth, address } = req.body
            Profiles.create({
                fullName : fullname,
                email: email,
                birthDate: birth,
                address: address,
                UserId: req.user.dataValues.id 
            })
            res.redirect('/dashboard')
        } catch (error) {
            res.redirect('/login')
        }
    }

    static async profile(req,res){ 
        const user = await Profiles.findOne({ where: { UserId: req.user.dataValues.id }})
        const histori = await Histories.findAll({ where: { UserId: req.user.dataValues.id }})

        res.render('profile/dashboard/view_dashboard', { 
            title: "Profile",
            name : user.fullName,
            email : user.email,
            date : user.birthDate,
            address : user.address,
            users: histori
        })
    }
    static async actionProfile(req,res){ 
        try {
            const { fullName, email, address, birthDate } = req.body
            const user = await Profiles.findOne({ where: { UserId: req.user.dataValues.id }})
            user.fullName = fullName
            user.email = email
            user.birthDate = birthDate
            user.address = address
            await user.save()
            res.redirect('/profile')
        } catch (error) {
            res.redirect('/profile')
        }
    }

    static async dashboard(req,res){ 
        const user = await Profiles.findOne({ where: { UserId: req.user.dataValues.id }})
        res.render('dashboard/dashboard/view_dashboard',{ title:"Dashboard", name:user.fullName })
    }

    static async game(req,res){ 
        const user = await Profiles.findOne({ where: { UserId: req.user.dataValues.id }})
        res.render('game/dashboard/view_dashboard',{ title:"game", name:user.fullName })
    }
    static async actionGame(req,res){ 
        try {
            let { user, otherUser, result } = req.body
            let data = {
                user,
                otherUser,
                result,
                UserId: req.user.dataValues.id
            }
            Histories.create(data)
        } catch (error) {
            res.redirect("/game")
        }
    }

    static async logout(req,res){ 
        req.session.destroy(function (err) {
            res.redirect('/login');
        });
    }
}

module.exports = adminController