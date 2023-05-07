const mongoose=require('mongoose');
async function dbconnect(){
    await mongoose.connect("mongodb+srv://Rajat2:Priceless65018@@cluster0.gaseprf.mongodb.net/?retryWrites=true&w=majority", {
        connectTimeoutMS: 9999999,
    });
    console.log("database connected");
}
module.exports=dbconnect;