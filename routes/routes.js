var express = require('express');
var router = express.Router();
var path = require('path');
const mysql = require('mysql');
router.get('/db', async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM test_table');
      const results = { 'results': (result) ? result.rows : null};
      res.sendFile(path.join(__dirname + '/../views/principal.html'));
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })

//Conexión a la BBDD
/*const conexion = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'users'
});
conexion.connect();*/

//Rutas
router.get('/', function(req,res){
    res.sendFile(path.join(__dirname+'/../views/index.html'));
});
router.get('/home',function(req,res){
    res.sendFile(path.join(__dirname + '/../views/principal.html'));
});


//Registro de usuario
/*router.post('/reg',async(req,res)=>{
    let nombre_register = req.body.nombre_register;
    let pass_register = req.body.pass_register; 

if(nombre_register && pass_register){
    conexion.query('INSERT INTO usuarios (username,password) VALUES (?,?)',[nombre_register,pass_register],function(error,fields){
        if(error) throw error;

        res.redirect('/');
    });*/
    /*conexion.query('SELECT username from usuarios'),function(error,resultados){
        var c = "";
        resultados.forEach(element => {
            if(error){
                throw error;
            }
            if(element == nombre_register){
                if(error){
                    throw error;
                }
                c="hecho"; 
            }
        });
        if(c == "hecho"){
            conexion.query('INSERT INTO usuarios (username,password) VALUES (?,?)',[nombre_register,pass_register],function(error,fields){
                if(error) throw error;
            });
        }
        conexion.end();*/
   /* }
    //Lleva a la página principal de la web
    res.redirect('/');
}
else{
    res.send('error :(');
    res.end();
    conexion.end();
}
});*/



//Login de usuario
/*router.post('/login',async(req,res)=>{
    let nombre_login = req.body.nombre_login;
    let pass_login = req.body.pass_login; 
    if (nombre_login && pass_login) {
	    conexion.query('SELECT * FROM usuarios WHERE username = ? AND password = ?', [nombre_login, pass_login], function(error, results,fields) {
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
		res.send('Incorrect Username and/or Password!');
		}		
    });	
    }else{
        res.send('error :(');
        res.end();
    }
    conexion.end();
});*/
//Exportación del módulo
module.exports = router;