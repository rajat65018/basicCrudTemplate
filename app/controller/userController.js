const jwt=require('jsonwebtoken');
const { findUser, createUser, updateOneUser } = require("../services/userServices");
const MESSAGES = require("../utils/messages");
const { createSession, findSession, findOneSession } = require('../services/sessionServices');

const userController={}
/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
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

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
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

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
userController.update=async(req,res)=>{
    const payload=req.body;
    const findToken=await findOneSession({token:payload.token});
    if(!findToken){
        return res.status(404).json({message:MESSAGES.USER_NOT_FOUND});
    }
    const user=await updateOneUser({_id:findToken.userId,isDeleted:false},{$set:
        {name:payload.name,contact:payload.contact}});
    if(!user){
        return res.status(404).json({message:MESSAGES.USER_NOT_FOUND});
    }
    return res.status(200).json({message:MESSAGES.USER_UPDATED_SUCCESSFULLY});
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
userController.delete=async(req,res)=>{
    const payload=req.headers;
    console.log(payload);
    const findToken=await findOneSession({token:payload.authorization});
    if(!findToken){
        return res.status(404).json({message:MESSAGES.USER_NOT_FOUND});
    }
    // const findUser=await findOneUser({_id:findToken.userId,isDeleted:false});
    const deleteUser=await updateOneUser({_id:findToken.userId},{$set:
    {isDeleted:true},
    });
    if(!deleteUser){
        return res.status(404).json({message:MESSAGES.USER_NOT_FOUND});
    }
    return res.status(200).json({message:MESSAGES.ACCOUNT_DELETED});
}
module.exports=userController;