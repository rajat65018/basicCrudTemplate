const Joi=require('joi');
const updateSchema={
    body:{
        name:Joi.string().required().description('User name'),
        contact:Joi.string().required().description('User contact'),
    },
    headers:{
        authorization:Joi.string().required().description('User Jwt token'),
    }
};
module.exports=updateSchema;