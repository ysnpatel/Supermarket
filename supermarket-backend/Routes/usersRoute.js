var express = require('express');
var router = express.Router();

var usersController = require('../Controllers/usersController')  

router.get('/getOneUser/:userId',(req,res)=>{
    console.log("get one user router here")
    usersController.getOneUserById(req,res) 
})

router.post('/addOneUser',(req,res)=>{
    console.log("add one user router here")
    usersController.addOneUser(req,res)
})

router.put('/updateUserById',(req,res)=>{
    console.log("update user by id router here")
    usersController.updateById(req,res) //change method
})


module.exports = router;

