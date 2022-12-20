const sql = require("../index")


////////////Users


let dbGetOneUserById = async (req, res)=>{
    console.log("db services here")
    let id = req.params.userId

    return new Promise((resolve, reject) => {
        let sqlQuery = `Select * from Users WHERE userId= "${id}"`;
        sql.query(sqlQuery, (err, result, field) => {
            if(err) return reject(err);
            resolve(Object.values((result)));
        });
    });   
};

let dbAddOneUser = async (req, res)=>{
    console.log("db services here")

    let userId = req.body.userId
    let firstName = req.body.firstName
    let lastname = req.body.lastname
    let address = req.body.address
    let email = req.body.email
    let userPassword = req.body.userPassword
    let postcode = req.body.postcode

    return new Promise((resolve, reject) => {
        let sqlQuery = `INSERT INTO Users VALUES("${userId}", "${firstName}", "${lastname}","${address}","${email}","${userPassword}","${postcode}")`;
        sql.query(sqlQuery, (err, result, field) => {
            if(err) return reject(err);
            resolve(Object.values((result)));
        });
    });   
};


/////////////Products


let dbGetOneProductById = async (req, res)=>{
    console.log("db services here")
    let id = req.params.productId

    return new Promise((resolve, reject) => {
        let sqlQuery = `Select * from Products WHERE productId= "${id}"`;
        sql.query(sqlQuery, (err, result, field) => {
            if(err) return reject(err);
            resolve(Object.values((result)));
        });
    });   
};





module.exports = { dbGetOneUserById, dbAddOneUser, dbGetOneProductById }
