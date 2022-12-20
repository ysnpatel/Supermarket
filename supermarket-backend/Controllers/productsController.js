let DBServices = require('../Services/DBServices.js')

const getOneProductById = async (req,res)=>{
    console.log("product controller here")

    let data = await DBServices.dbGetOneProductById(req,res)
    res.send(data)
}

module.exports = { getOneProductById }