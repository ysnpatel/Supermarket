const sql = require("../index")

////////////Users
//Read
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
//Create
let dbAddOneUser = async (user, res)=>{
    console.log("db services here")

    const {firstName, lastname, email, password: userPassword} = user

    return new Promise((resolve, reject) => {
        let sqlQuery = `INSERT INTO Users(firstName, lastname, email, userPassword) VALUES("${firstName}", "${lastname}","${email}","${userPassword}")`;
        sql.query(sqlQuery, (err, result, field) => {
            if(err) return reject(err);
            resolve(Object.values((result)));
        });
    });   
};
//Post
let dbGetOneUserByEmail = async (email)=>{
    console.log("db services here")

    return new Promise((resolve, reject) => {
        let sqlQuery = `Select * from Users WHERE email= "${email}"`;
        sql.query(sqlQuery, (err, result, field) => {
            if(err) {
                return reject(err)
            };
            resolve(Object.values((result))[0]);
        });
    });   
};

//Update
let dbUpdateEmail = async (req, res)=>{

    let email = req.body.email
    let newEmail = req.body.newEmail

    return new Promise((resolve, reject) => {
        let sqlQuery = `Update Users set email = "${newEmail}" where email = "${email}";`;
        sql.query(sqlQuery, (err, result, field) => {
            if(err) return reject(err);
            console.log(result)
            console.log(Object.values(result))
            resolve(Object.values((result)));
        });
    });   
};

let dbUpdatePassword = async (req, res)=>{
 
    let newPassword = req.body.newPassword
    let email = req.body.email

    return new Promise((resolve, reject) => {
        let sqlQuery = `Update Users set userPassword = "${newPassword}" where email= "${email}";`;
        sql.query(sqlQuery, (err, result, field) => {
            if(err) return reject(err);
            resolve(Object.values((result))[0]);
        });
    });   
};



//add address to sign up form, and database table
let dbUpdateAddress = async (req, res)=>{

    return new Promise((resolve, reject) => {
        let sqlQuery = `Update Users set userPassword = "${newPassword}" where email= "${email}";`;
        sql.query(sqlQuery, (err, result, field) => {
            if(err) return reject(err);
            resolve(Object.values((result))[0]);
        });
    });   
};


//delete
let dbDeleteAccount = async (req, res)=>{

    let email = req.params.email

    return new Promise((resolve, reject) => {
        let sqlQuery = `Delete from Users where email= "${email}"`;
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

let dbGetAllProducts = async (req, res)=>{

    return new Promise((resolve, reject) => {
        let sqlQuery = `Select * from Products`;
        sql.query(sqlQuery, (err, result, field) => {
            if(err) return reject(err);
            resolve(Object.values((result)));
        });
    });   
};





module.exports = { dbGetOneUserById, dbAddOneUser, dbGetOneProductById, dbGetOneUserByEmail, dbUpdateEmail, dbUpdatePassword, dbUpdateAddress, dbDeleteAccount, dbGetAllProducts }
