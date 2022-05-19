const express = require('express');
const session = require('express-session');
const path = require('path');
const { request } = require('http');

var app = express();
app.use(session({
    cookie:{
        secure: true,
        maxAge:60000
           },
    store: new RedisStore(),
    secret: 'secret',
    saveUninitialized: true,
    resave: false
    }));


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

app.listen(3000);
