const Joi=require('joi');
const loginSchema={
    body:{
        email:Joi.string().email().required().description('User email'),
        password:Joi.string().required().description('User password'),
    }
}
module.exports=loginSchema;