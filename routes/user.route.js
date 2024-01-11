const { check } = require('express-validator');
const express = require('express');
const router = express.Router();

const {
    registerUser,
    userloginByCredentials
} = require("../controllers/user.controller");

const registValidator = [
    check('email').notEmpty().trim().isEmail().escape(),
    check('username').notEmpty().escape(),
    check('password').notEmpty().escape()
]

const loginValidator = [
    check('email').notEmpty().trim().isEmail().escape(),
    check('password').notEmpty().escape()
]

// register user route
router.post('/user-register', registValidator, registerUser);

// user login by credentials
router.post('/user-login', loginValidator, userloginByCredentials);

module.exports = router;