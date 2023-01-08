var express = require('express');
var router = express.Router();
const multer = require ('multer')
const upload = multer()


var usersController = require('../Controllers/usersController')  

router.get('/getOneUser/:userId',(req,res)=>{
    usersController.getOneUserById(req,res) 
})

router.post('/addOneUser',upload.none(),(req,res)=>{ //not uploading file, just multer to pass the form data and put it into req.body
    usersController.addOneUser(req,res)
})

router.post('/login',upload.none(),(req,res)=>{
    usersController.login(req,res)
})

router.put('/updateEmail',(req,res)=>{
    usersController.updateEmail(req,res)
})

router.put('/updatePassword',(req,res)=>{
    usersController.updatePassword(req,res)
})

router.put('/updateAddress',(req,res)=>{
    usersController.updateAddress(req,res)
})

router.put('/deleteAccount',(req,res)=>{
    usersController.deleteAccount(req,res)
})

module.exports = router;


