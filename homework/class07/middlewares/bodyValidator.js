const usernamePasswordPresence = (userInfo)=>{
    if(!userInfo.username){
        const usernamePresence = "Missing username";
        return [usernamePresence, false];
    }
    else if(!userInfo.password){
        const passwordPresence = "Missing password";
        return [passwordPresence, false];
    }
    else{
        return true;
    }
};

const usernamePasswordLength = (userInfo)=>{
    if(userInfo.username.length < 5){
        const usernameLength = "Username to short";
        return [usernameLength, false];
    }
    else if(userInfo.password.length < 8){
        const passwordLength = "Password to short";
        return [passwordLength, false];
    }
    else{
        return true;
    }

    
};


module.exports = {
    usernamePasswordPresence,
    usernamePasswordLength
}