const mysql = require('mysql');
const conn =  mysql.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password:'root',
    database:'b0322'
});
conn.connect(function(err){
    console.log(err);
});
module.exports = conn;