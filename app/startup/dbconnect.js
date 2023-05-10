const mongoose=require('mongoose');
async function dbconnect(){
    await mongoose.connect(`mongodb+srv://rb465629:Priceless65018@rajat.jqsamga.mongodb.net/?retryWrites=true&w=majority`, {
        connectTimeoutMS: 9999999,
    });
    console.log("database connected");
}
module.exports=dbconnect;