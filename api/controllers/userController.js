const ash = require('express-async-handler')
const nodeMailer = require('nodemailer')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const bcrypt = require('bcryptjs')

const User = require('../models/userModel')

// Register User =======================================

const registerUser = ash(async (req, res) => {
    console.log("Registration request")
    try {
        const { name, email, password } = req.body
        const existingUser = await User.findOne({ email })

        // validation
        if (!name || !email || !password) {
            return res.status(200).json({ message: "Please Enter The Required Field", isRegistered: false })
        } else if (existingUser) {
            return res.status(200).json({ message: "Email Already Registered", isRegistered: false })
        }

        const verificationToken = crypto.randomBytes(20).toString('hex')
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
            verificationToken
        })

        sendVerificationEmail(email, verificationToken)
        return res.status(200).json({ message: "You have registered successfully", isRegistered:true })

    } catch (e) {
        console.log(e)
        res.status(500).json({ message: "Registration Failed" })
    }
})

// Login User =============================================

const loginUser = ash(async (req, res) => {
    console.log("Login Request")
    const { email, password } = req.body
    const user = await User.findOne({ email })

    if (!user) {
        console.log("user not found")
        return res.status(200).json({ message: "Sorry, we couldn't find account with this email and password.", loginStatus: false })
    }

    const passwordValidation = bcrypt.compare(password, user.password)

    if (passwordValidation) {
        const jwtToken = generateJwt(user.id)
        return res.status(200).json({ message: "Login Successfull", jwtToken, loginStatus: true })
    } else {
        return res.status(200).json({ message: "Sorry, we couldn't find account with this email and password.", loginStatus: false })
    }
})

// Verify Email
const verifyEmail = ash(async (req, res) => {
    const verificationToken = req.params.token
    const user = await User.findOne({ verificationToken })

    if (!user) {
        return res.status(400).json({ message: "Invalid Token" })
    }

    user.verificationToken = undefined
    user.verified = true
    await user.save()

    res.status(200).json({ message: "email verified" })
})

//get myaccount 

const getMyAccountId = (req,res) => {
    res.status(200).json({userId:req.user._id, isAuthorized:true})
}

// Save User Address
const saveAddress = ash(async (req, res) => {
    
    const { fullName, mobileNo, pincode,
        state, city, houseNo, street, landmark } = req.body

    if (!fullName || !mobileNo || !pincode || !state || !city ||
        !houseNo || !street || !landmark) {
           return res.status(200).json({ message: "Please Enter The Required Field", isSaved:false})
    } else {
        const address = {name:fullName, mobileNo, houseNo, street, landmark, city, state, pincode}
        req.user.address.push(address)
        await req.user.save()
        console.log(req.user);
        return res.status(200).json({ message: "Address Saved Successfully", isSaved:true})
    }
})

// Common Functions ======================

const sendVerificationEmail = ash(async (email, verificationToken) => {

    //create a email transport
    const emailTransport = nodeMailer.createTransport({
        service: "gmail",
        auth: {
            user: "mohan2609kumar@gmail.com",
            pass: "zmbq whob pzrn gnto"
        }
    })

    const emailStructure = {
        from: "viyaga.com",
        to: email,
        subject: "Email Verification",
        text: `Please click the following link to verify your email: http://localhost:6000/api/user/verify/${verificationToken}`,
    }

    try {
        emailTransport.sendMail(emailStructure)
        console.log('email sended')
    } catch (e) {
        console.log({ sendVerificationEmail: e })
    }

})

const generateJwt = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}

module.exports = {
    registerUser,
    loginUser,
    verifyEmail,
    getMyAccountId,
    saveAddress,
}