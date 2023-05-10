const jwt=require('jsonwebtoken');
const { findUser, createUser } = require("../services/userServices");
const MESSAGES = require("../utils/messages");
const { createSession, findSession } = require('../services/sessionServices');

const userController={}
userController.signUp=async (req,res)=>{
    let payload=req.body;
    if((await findUser({email:payload.email}))){
        return res.json({message:MESSAGES.EMAIL_EXIST});
    }
    const user= await createUser(payload);
    const session={
        token:jwt.sign({id:user._id},'hello'),
        userId:user._id,
    }
    console.log(session);
    createSession(session);
    return res.json({message:MESSAGES.ACCOUNT_CREATED});
}

userController.login=async(req,res)=>{
    let payload=req.body;
    const user=await findUser({email:payload.email,password:payload.password});
    const findToken=await findSession({userId:user._id});
    if(findToken.length<=5){
        return res.json({message:MESSAGES.CANNOT_LOGIN});
    }
    if(user){
        const session={
            token:jwt.sign({id:user._id},'hello'),
            userId:user._id,
        } 
        createSession(session);
        return res.json({message:MESSAGES.LOGIN_SUCCESSFUL,token:session.token});   
    }
}
module.exports=userController;