let DBServices = require('../Services/DBServices.js')

const getOneProductById = async (req,res)=>{
    console.log("product controller here")

    let data = await DBServices.dbGetOneProductById(req,res)
    res.send(data)
}

const getAllProducts = async (req,res)=>{

    let data = await DBServices.dbGetAllProducts(req,res)
    res.send(data)
}

module.exports = { getOneProductById, getAllProducts }