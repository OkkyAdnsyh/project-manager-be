const user = require("../models/user.model");
const token = require("../models/token.model");
const bcrypt = require('bcrypt');

// method POST
// route /api/v1/user
// desc user registration
const registerUser = async (req, res) => {
    // validate field
    const {email, username, password} = req.body;
    if(!email || !username || !password) return res.status(400).json({message : 'Please fill out all field'});
    // validate if user email already exists
    const existsUser = await user.findOne({
        where : {
            email : email
        }
    });
    if(existsUser) return res.status(400).json({message : 'User already exists'});
    // hashing password
    let salt = bcrypt.genSaltSync(16);
    let hashedPassword = bcrypt.hashSync(password, salt);
    // create new user
    const createUser = await user.create({
        username : username,
        email : email,
        password : hashedPassword
    });
    return res.status(200).json({message : 'Register new user success'});
}

module.exports = {
    registerUser
}