const { check } = require("express-validator");

const loginSanitizer = [
    check('email').notEmpty().trim().isEmail().escape(),
    check('password').notEmpty().escape()
];

module.exports = loginSanitizer;