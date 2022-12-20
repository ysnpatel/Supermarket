var express = require('express');
var router = express.Router();

var productsController = require('../Controllers/productsController')  

router.get('/getOneProduct/:productId',(req,res)=>{
    console.log("get one product router here")
    productsController.getOneProductById(req,res)
})

router.post('/addOneProduct',(req,res)=>{
    console.log("add one product router here")
    productsController.addOneProduct(req,res)
})

router.put('/updateProductById',(req,res)=>{
    console.log("update product by id router here")
    productsController.updateProductById(req,res)
})


module.exports = router;
