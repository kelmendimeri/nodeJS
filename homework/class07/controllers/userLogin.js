const User = require('../models/User');
const bcrypt = require('bcrypt');
const bodyValidator = require('../middlewares/bodyValidator');
const { createToken } = require('../middlewares/jwt');

const loginUser = async(req, res, next)=>{
    const userInfo = req.body;
    try{
        const userInDb = await User.findOne({username: userInfo.username});
        if(!userInDb){
            return res.status(400).json("User does not exist");
        }
        
        const passwordCompare = await bcrypt.compare(userInfo.password, userInDb.password);
        if(passwordCompare){
            const newToken = createToken(userInfo.username);
            await User.findOne({username: userInfo.username}).update({token: newToken});
            return res.status(200).json(newToken);            
        }
        else{
            console.log(bodyValidator[1]);
            return res.status(401).json("Wrong password");
        }
    }catch(err){
        console.log(err);
        return res.status(500).json(err);
    }
};

module.exports = {loginUser};