var express = require('express');
var router = express.Router();
var path = require('path');
const mysql = require('mysql');
const {Pool, Client} = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl:{
        rejectUnauthorized : false
    }
});

//Conexión a la BBDD
/*const conexion = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'users'
});
conexion.connect();*/

//middleware
//Rutas
router.post('/connect',async(req,res)=>{
    try{
        const client = await pool.connect();
        const result = await client.query('DELETE FROM usuarios');
        const results = {'results':(result)?result.rows: null};
        res.send(results);
        client.release()
    }
    catch(err){
        console.error(err);
        res.send("Error"+err);
    }
});
router.get('/', function(req,res){
    res.sendFile(path.join(__dirname+'/../views/index.html'));
});
router.get('/home',function(req,res){
    res.sendFile(path.join(__dirname + '/../views/principal.html'));
});

//Registro de usuario
router.post('/reg',async(req,res)=>{
    let nombre_register = req.body.nombre_register;
    let pass_register = req.body.pass_register; 

    try{
if(nombre_register && pass_register){
    /*try{
        const text = "INSERT INTO usuarios(nombre,password) VALUES($1,$2) RETURNING *";
        const values = [nombre_register,pass_register];
        const client = await pool.connect();
        client.query(text,values,(err,res)=>{
            if(err){
                console.log(err.stack);
            }
            else{
                console.log(res.rows[0]);
            }
        });*/
        try{
        const client = await pool.connect();
        const result = await client.query("INSERT INTO usuarios(nombre,password) VALUES('{"+nombre_register+"}','{"+pass_register+"}');",(err,rest)=>{
           if(err){
               console.log("No se ha introducido nada");
               console.log(err);
               pool.end();
               client.release();
               res.send(err);
           }
           else{
            //Lleva a la página principal de la web
            console.log("registro exitoso");
            pool.end();
            client.release();
            res.redirect("/");
           }
        });
        
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
router.post('/login',async(req,res)=>{
    let nombre_login = req.body.nombre_login;
    let pass_login = req.body.pass_login; 
    if (nombre_login && pass_login) {
        const client = await pool.connect();
	    const result = await client.query("SELECT nombre,password FROM usuarios WHERE nombre= '{"+nombre_login+"}'AND password='{"+pass_login+"}' ",function(error) {
	    if (error) {
            console.log("Login no funciona");
            throw error;
        }
        else {
        pool.end();
		res.redirect("/home");
		}		
    });	
    }else{
        res.send('error :(');
        res.end();
    }
});
//Exportación del módulo
module.exports = router;