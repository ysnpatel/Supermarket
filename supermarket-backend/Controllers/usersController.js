let DBServices = require('../Services/DBServices.js')

const getOneUserById = async (req,res)=>{
    console.log("user controller here")

    let data = await DBServices.dbGetOneUserById(req,res)
    res.send(data)
}

const addOneUser = async (req,res)=>{
    console.log("user controller here")

    let data = await DBServices.dbAddOneUser(req,res)
    res.send(data)
}


module.exports = { getOneUserById, addOneUser }