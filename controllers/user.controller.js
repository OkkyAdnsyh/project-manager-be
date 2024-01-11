const user = require("../models/user.model");
const token = require("../models/token.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {generateToken} = require('../middlewares/auth.middleware')

// method POST
// route /api/v1/user-register
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
    let salt = await bcrypt.genSaltSync(16);
    let hashedPassword = await bcrypt.hashSync(password, salt);
    // create new user
    await user.create({
        username : username,
        email : email,
        password : hashedPassword
    });
    return res.status(200).json({message : 'Register new user success'});
}

// method POST
// route /api/v1/user-login
// desc user login by credentials
const userloginByCredentials = async (req,res) => {
    try{
        const {email, password} = req.body;
        if(!email || !password) return res.status(400).json({message : 'Please fill out all field'});
    
        // check if user already registered
        const existsUser = await user.findOne({
            where : {
                email : email
            }
        });
        if(!existsUser) return res.status(400).json({message : "User not exist"});
        
        // check if password is similar
        if(!bcrypt.compareSync(password, existsUser.password)) return res.status(400).json({message : "Incorrect password"});
    
        // generate JWT
        const accessToken = await jwt.sign({id : existsUser.uuid}, process.env.JWT_SECRET, {
            expiresIn : '15m'
        })
    
        // save token to token table
        const generateNewToken = await generateToken(existsUser.id, accessToken);
        
        return res.status(200).json({message : 'Login success', accessToken : generateNewToken.accessToken, refreshToken : generateNewToken.refreshToken});
    }catch(err){
        console.error(err);
        res.status(500).json({message : err})
    }

}


module.exports = {
    registerUser,
    userloginByCredentials
}