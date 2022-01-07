const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo ={
    host:"localhost",
    user:"root",
    password:"root",
    database:"project"
};

const connection = mysql.createConnection(dbinfo);
connection.connect();

async function addUser(user) {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    let sql = `insert into user(username , password) values(?,?)`;
    await connection.queryAsync(sql,[user.username,user.password]);
    console.log("connection Success")
await connection.endAsync();

}
async function selectUser(){
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    let sql =`select * from user`;
    const list = await connection.queryAsync(sql,[]);
    await connection.endAsync();
    console.log(list);
    return list;
}

const user = {username:"sujit patil", password:"sujit patil"};
//selectUser();
addUser(user);

module.exports = {selectUser,addUser};