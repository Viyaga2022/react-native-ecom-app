const express = require('express')
const router = express.Router()

const { registerUser, verifyEmail, loginUser } = require('../controllers/userController')

router.post('/login', loginUser)
router.post('/register', registerUser)
router.get('/verify/:token', verifyEmail)

module.exports = router