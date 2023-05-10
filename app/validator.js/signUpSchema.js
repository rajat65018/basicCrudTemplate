const Joi=require('joi');
const signUpSchema={
    body:{
        name:Joi.string().min(3).max(20).required().description('User name'),
        email:Joi.string().email().required().description('User email'),
        password:Joi.string().required().description('User password'),
        contact:Joi.string().length(10).required().description('User Contact no')
    }
}
module.exports=signUpSchema;