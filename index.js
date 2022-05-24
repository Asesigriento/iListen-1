const express = require('express');
const session = require('express-session');
const path = require('path');
const { request } = require('http');
const {Pool} = require('pg');
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl:{
        rejectUnauthorized : false
    }
});

var app = express();
/*app.use(session({
    secret : 'secret',
    resave : true,
    saveUninitialized : true
}));
*/

//Middleware que te permite cargar archivos de imagenes, musica, css etc.
app.use(express.static(__dirname + '/public/'));
app.use(express.static(__dirname + '/controllers/'));
app.use(express.static(__dirname +'public/img'));
app.use(express.static(__dirname +'public/music'));
app.use(express.static('controllers'));
app.use(express.json());
app.use(express.urlencoded({extended : true}));


//Importación de un módulo para obtener las rutas
const routes = require('./routes/routes.js');
app.use(routes);

app.listen(process.env.PORT || 5000);
