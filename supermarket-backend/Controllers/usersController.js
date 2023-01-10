let DBServices = require('../Services/DBServices.js')
const bcrypt = require('bcrypt') 


const getOneUserById = async (req,res)=>{
    console.log("user controller here")

    let data = await DBServices.dbGetOneUserById(req,res)
    res.send(data)
}

const addOneUser = async (req,res)=>{
    console.log("user controller here")

    try {
        console.log(req.body)
        const salt = await bcrypt.genSalt()
        const hash = await bcrypt.hash(req.body.password, salt)
        console.log(salt)
        console.log(hash)
        const user = { ...req.body, password: hash}
        let data = await DBServices.dbAddOneUser(user,res)
        res.send(data)

    } catch (error) {
        console.log(error)
        res.status(500).send()
    }
}

const login = async (req, res)=>{
        console.log(req.body)
        const user = await DBServices.dbGetOneUserByEmail(req.body.email)
        console.log(user)

        if (user === null){
            return res.status(400).send('Cannot find user')
        }
        try {
            if(await bcrypt.compare(req.body.password, user.userPassword)) {
                res.status(200).send({
                    isAuthenticated: true,
                    currentUser: user
                })
            } else {
                res.status(401).send('Not allowed')
            }
        } catch(error) {
            console.log(error)
            res.status(500).send()
        }
}

const updateEmail = async (req,res)=>{
    let data = await DBServices.dbUpdateEmail(req,res)
    res.send(data)
}

//full process not completed. add bcrypt etc
const updatePassword = async (req,res)=>{
    let data = await DBServices.dbUpdatePassword(req,res)
    res.send(data)
}

//full process not completed
const updateAddress = async (req,res)=>{
    let data = await DBServices.dbUpdateAddress(req,res)
    res.send(data)
}

//full process not completed
const deleteAccount = async (req,res)=>{
    let data = await DBServices.dbDeleteAccount(req,res)
    res.send(data)
}

module.exports = { getOneUserById, addOneUser, login, updateEmail, updatePassword, updateAddress, deleteAccount }