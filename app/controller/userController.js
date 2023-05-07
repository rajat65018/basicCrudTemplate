const { findUser, createUser } = require("../services/userServices");
const MESSAGES = require("../utils/messages");

const userController={}
userController.signUp=async (req,res)=>{
    let payload=req.body;
    if(!(await findUser({email:payload.email}))){
        return res.json({message:MESSAGES.EMAIL_EXIST});
    }
    createUser(payload);
    return res.json({message:MESSAGES.ACCOUNT_CREATED});
}
module.exports=userController;