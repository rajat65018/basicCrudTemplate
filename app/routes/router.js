const express=require('express');
const validateJoiSchema = require('../middleware/validate');
const signUpSchema = require('../validator.js/signUpSchema');
const loginSchema = require('../validator.js/loginSchema');
const userController = require('../controller/userController');
const router=express.Router();

router.post('/signup',validateJoiSchema(signUpSchema),userController.signUp);
router.post('/login',validateJoiSchema(loginSchema),userController.login);
router.put('/update',validateJoiSchema());
// router.delete('/delete',validateJoiSchema());

module.exports=router;