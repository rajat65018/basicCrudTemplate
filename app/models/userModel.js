const mongoose=require('mongoose');
const { isDeleted } = require('../utils/constants');
const userSchema=new mongoose.Schema({
    name:{type:String,required:true,},
    email:{type:String,required:true},
    password:{type:String,required:true},
    contact:{type:Number,required:true},
    isDeleted:{type:Boolean,required:true,default:isDeleted}
},{timestamps:true});
const userModel=mongoose.model("users",userSchema);
module.exports=userModel;