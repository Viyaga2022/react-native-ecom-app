const express = require('express')
const dotenv = require('dotenv').config()
const bodyParser = require('body-parser')
const nodeMailer = require('nodemailer')
const cors = require('cors')
const jwt = require('jsonwebtoken')

const connectDB = require('./Data/db');

const app = express()
const port = process.env.PORT
connectDB();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(port, () => {
    console.log(`app listening to the port ${port}`)
});