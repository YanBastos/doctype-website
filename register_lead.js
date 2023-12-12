// CONNECTION 
const { process_params } = require('express/lib/router');
const mysql = require('mysql2/promise');

require('dotenv').config();

const connection = mysql.createPool({
    host: process.params.env.MYSQL_HOST,
    user: process.params.MYSQL_USER,
    password: process.params.MYSQL_PASSWORD,
    database: process.params.DB,
})

// REGISTER LEAD

const registerLead = (req, res) => {

    const name = document.querySelector('.nameID');
    const email = document.querySelector('.emailID');
    const telephone = document.querySelector('.telID');

    const query = 'INSERT INTO Leads(name, telephone, created_at) VALUES (?,?,?)';
}