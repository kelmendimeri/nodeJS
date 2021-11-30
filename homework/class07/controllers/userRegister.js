const User = require('../models/User');
const bcrypt = require('bcrypt');
const validator = require('../middlewares/bodyValidator');

const registerUser = async(req, res, next)=>{
    const userInfo = req.body;
    if(validator.usernamePasswordPresence(userInfo) && validator.usernamePasswordLength(userInfo)){
        try{
            const userExist = await User.findOne({username: userInfo.username});
            if(userExist){
                return res.status(409).json("User already exist");    
            }
            const encryptPassword = await bcrypt.hash(
            userInfo.password, +process.env.SALT_ROUNDS
            );
            const newUser={
                username: userInfo.username,
                password: encryptPassword
            };
            await User.create(newUser);
            return res.status(200).json("User registered");
        }catch(err){
            console.log(err);
            return res.status(500).json(err);
        }    
    }
    if(validator.usernamePasswordPresence(userInfo)[1]){
        return res.status(400).json(validator.usernamePasswordPresence(userInfo)[0]);
    }
    return res.status(400).json(validator.usernamePasswordLength(userInfo)[0]);
};

module.exports = {registerUser};