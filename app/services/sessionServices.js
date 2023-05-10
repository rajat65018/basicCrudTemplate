const sessionModel = require("../models/sessionModel");

const sessionServices={};
sessionServices.createSession=async(payload)=>{
    return await new sessionModel(payload).save();
}
sessionServices.findOneSession=async(searchQuery,projectionQuery)=>{
    return await sessionModel.findOne(searchQuery,projectionQuery);
}
module.exports=sessionServices;