const mongoose=require('mongoose');
const sessionSchema=mongoose.Schema({
    userId:{type:mongoose.Types.ObjectId,required:true},
    token:{type:String,required:true}
},{timestamps:true});
const sessionModel=mongoose.model("sessions",sessionSchema);
module.exports=sessionModel;