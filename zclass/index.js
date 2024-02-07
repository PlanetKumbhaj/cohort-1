const express = require('express');
const mysql = require("mysql");
const app = express();

const port = 3000;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password : '',
    database : 'Zclass',
});

const db1 = mysql.createPoolCluster({
    host : 'dbb1kumbhaj.web',
    user : ' admin', 
    password : "",
    database : 'zclass2'
})

const db2 = mysql.keysession({
    host : ' dbkumbhaj.in',
    user : ' admin ',
    password : "12344567899",
    database : 'QClass'

})