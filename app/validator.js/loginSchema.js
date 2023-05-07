const Joi=require('joi');
const loginSchema={
    body:{
        email:Joi.string().email().required().description('User email'),
        password:Joi.string().min(8).max(20).required().description('User password'),
    }
}
module.exports=loginSchema;