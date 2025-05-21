const mysql= require('mysql2');

require('dotenv').config();

const pool=mysql.createPool({
host:process.env.DB_HOST,
user:process.env.DB_USER,
pasword:process.env.DB_PASS,
database:process.env.DB_NAME


});
module.exports=pool.promise();