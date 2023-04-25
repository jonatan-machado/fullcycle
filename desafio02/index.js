const { response } = require('express');
const express = require('express');
const app = express();
const port = 3000;
const config = {
    host: 'dbapp',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql');

app.get("/",(req, res)=>{
    let sql = `insert into people (name) values ('Deivid Cardoso ${new Date().toISOString()}');`;
    let connection = mysql.createConnection(config);
    connection.query(sql, function (err, rows, fields) {
        if (err)
            console.log(`Insert -> ${err}\nCode:${err.code}\nSQL:${err.sql}\n\n\n`);
    });
    connection.query(`select id,name from people`, function (err, rows, fields) {
        res.send({title:'<h1>Shazam</h1>', data:rows});
        if(err)
        console.log('Connection result error ->' + err.code);
        // console.log('num of records is ' + rows.length);
    });
    connection.end();
});

app.listen(port,()=>{
    console.log(`Rodando na porta ${port}`)
});
