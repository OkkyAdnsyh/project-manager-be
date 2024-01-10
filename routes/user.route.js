const { check } = require('express-validator');
const express = require('express');
const router = express.Router();

const {
    registerUser
} = require("../controllers/user.controller");

const registValidator = [
    check('email').notEmpty().trim().isEmail().escape(),
    check('username').notEmpty().escape(),
    check('password').notEmpty().escape()
]

// register user route
router.post('/user', registValidator, registerUser);

module.exports = router;