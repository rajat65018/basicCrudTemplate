const express=require('express');
const validateJoiSchema = require('../middleware/validate');
const signUpSchema = require('../validator.js/signUpSchema');
const loginSchema = require('../validator.js/loginSchema');
const userController = require('../controller/userController');
const updateSchema = require('../validator.js/updateSchema');
const deleteSchema = require('../validator.js/deleteSchema');
const router=express.Router();

router.post('/signup',validateJoiSchema(signUpSchema),userController.signUp);
router.post('/login',validateJoiSchema(loginSchema),userController.login);
router.put('/update',validateJoiSchema(updateSchema),userController.update);
router.delete('/delete',validateJoiSchema(deleteSchema),userController.delete);

module.exports=router;