const ash = require('express-async-handler')
const nodeMailer = require('nodemailer')
const jwt = require('jsonwebtoken')

const User = require('../models/userModel')

const registerUser = ash(async (req,res) => {
    console.log('user Register controller')
    throw new Error("error from controller")
    res.status(200).json({message: "Register User"})
})

const loginUser = ash(async (req, res) => {
    res.status(200).json({message: "Login User"})
})

module.exports = {
    registerUser,
    loginUser,
}