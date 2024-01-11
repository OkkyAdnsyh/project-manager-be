const { check } = require("express-validator");
const AsyncHandler = require('async-handler');
const token = require("../models/token.model");
const user = require("../models/user.model");

const loginSanitizer = [
    check('email').notEmpty().trim().isEmail().escape(),
    check('password').notEmpty().escape()
];

const generateToken = async (user, accessToken) => {
    let expiredAt = new Date();
    expiredAt.setSeconds(expiredAt.getSeconds() + 900);
    let refreshToken = await token.create({
        accessToken : accessToken,
        userId : user,
        expiryDate : expiredAt,
    })
    return refreshToken;
}

module.exports = {
    generateToken
};