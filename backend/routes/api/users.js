require('dotenv').config();
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');
const passport = require('passport')
const JWT_SECRET = process.env.JWT_SECRET;

//load user model
const User = require('../../models/User');

//Get api user
router.get('/test', (req,res) =>{
    res.json({msg: 'User endpoint OK'});
})

module.exports = router;