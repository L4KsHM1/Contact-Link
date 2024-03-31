const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const ContactModel = require('./Models/contact')

const app = express;
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/test')