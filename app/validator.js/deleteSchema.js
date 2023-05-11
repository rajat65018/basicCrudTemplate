const Joi=require('joi');
const deleteSchema={
    headers:{
        authorization:Joi.string().required().description('User JWT token'),
    }
}
module.exports=deleteSchema;