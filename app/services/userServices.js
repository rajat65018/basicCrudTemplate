const userModel = require("../models/userModel");

const userServices={};
userServices.createUser=async (payload)=>{
    return await new userModel(payload).save();
}
userServices.findUser=async (searchQuery,projectionQuery)=>{
    return await userModel.findOne(searchQuery,projectionQuery);
}
userServices.updateOneUser=async(searchQuery,updateQuery)=>{
    return await userModel.findOneAndUpdate(searchQuery,updateQuery);
}
module.exports=userServices