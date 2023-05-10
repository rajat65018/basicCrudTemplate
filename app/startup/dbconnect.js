const mongoose=require('mongoose');
async function dbconnect(){
    await mongoose.connect(`mongodb+srv://rb465629:@rajat.jqsamga.mongodb.net/`, {
        connectTimeoutMS: 9999999,
    });
    console.log("database connected");
}
module.exports=dbconnect;