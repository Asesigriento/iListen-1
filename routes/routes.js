var express = require('express');
var router = express.Router();
var path = require('path');
const mysql = require('mysql');
const {Pool} = require('pg');
const bodyParser = require('body-parser');
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl:{
        rejectUnauthorized : false
    }
});

var app1= express();
//Conexión a la BBDD
/*const conexion = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'users'
});
conexion.connect();*/

//middleware
var urlencodedParser = bodyParser.urlencoded({extended:false})
//Rutas
router.get('/', function(req,res){
    res.sendFile(path.join(__dirname+'/../views/index.html'));
});
router.get('/home',function(req,res){
    res.sendFile(path.join(__dirname + '/../views/principal.html'));
});

//Registro de usuario
router.post('/reg',urlencodedParser,async(req,res)=>{
    let nombre_register = req.body.nombre_register;
    let pass_register = req.body.pass_register; 

    try{
if(nombre_register && pass_register){
    try{
        const client = await pool.connect();
        const result = await client.query("INSERT INTO usuarios (nombre,password) VALUES(?,?)",[nombre_register,pass_register],(err,rest)=>{
           if(err){
               console.log("No se ha introducido nada");
               console.log(err);
           }
           else{
            console.log(rest);
            pool.end();
            rest.send("registro exitoso")
           }
        });
        client.release();
        //Lleva a la página principal de la web
        res.redirect('/');
      }
    catch (error){
        console.error(error);
        res.send("Error " + error);
    }
}
    }
catch(error){console.log(error);}

});

//Login de usuario
/*router.post('/login',async(req,res)=>{
    let nombre_login = req.body.nombre_login;
    let pass_login = req.body.pass_login; 
    if (nombre_login && pass_login) {
        const client = await pool.connect();
	    const result = await client.query("SELECT * FROM usuarios ",function(error, results,fields) {
	    if (error) {
            throw error;
        }
    	if (results.length > 0) {
            // Autentica el usuario
            req.session.loggedin = true;
            req.session.nombre_login = nombre_login;
            // Redirecciona la pagina principal del usuario
            res.redirect('/home')
        }
        else {
        
		res.send("mostrando");
		}		
    });	
    }else{
        res.send('error :(');
        res.end();
    }
});*/
//Exportación del módulo
module.exports = router;