const express = require('express')
const router = express.Router()

const { registerUser, verifyEmail, loginUser, saveAddress, getMyAccountId } = require('../controllers/userController')
const { protect } = require('../middlewares/authMiddleware')

router.post('/login', loginUser)
router.post('/register', registerUser)
router.get('/verify/:token', verifyEmail)
router.get('/myAccount', protect, getMyAccountId)
router.post('/address/',protect, saveAddress)

module.exports = router