const express = require('express')
const router = express.Router()

const { registerUser } = require('../controllers/userController')
const printRouter = (req,res,next) => {
    console.log('Router page')
    next()
}

router.post('/register', printRouter, registerUser)

module.exports = router