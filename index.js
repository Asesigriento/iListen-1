const express = require('express');
const session = require('express-session');
const path = require('path');
const { request } = require('http');

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

router.get('/', function(req,res){
    res.sendFile(path.join(__dirname+'/views/index.html'));
});
//Importación de un módulo para obtener las rutas
/*const routes = require('./routes/routes.js');
app.use(routes);
*/
app.listen(3000);
