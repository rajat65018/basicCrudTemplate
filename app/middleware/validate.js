const Joi=require('joi');
function validateJoiSchema(schema){
    return (req,res,next)=>{
        // console.log(req.headers);
        if(schema.body){
            console.log('body');
            const result=Joi.object(schema.body).validate(req.body);
            if(result.error){
                return res.json({message:result.error.message});
            }
            next();
        }
        if(schema.headers){
            const result=Joi.object(schema.headers).unknown([allow=true]).validate(req.headers);
            if(result.error){
                console.log('error');
                return res.json({message:result.error.message});
            }
            console.log('hello');
            next();
        }
        if(schema.params){
            console.log('params');
            const result=Joi.object(schema.params).validate(req.params);
            if(result.error){
                return res.json({message:result.error.message});
            }
            next();
        }
        
    }
}
module.exports=validateJoiSchema;