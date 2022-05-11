const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const path = require('path');
const { request } = require('http');


const conexion = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'users'
});
const app = express();

app.use(session({
    secret : 'secret',
    resave : true,
    saveUninitialized : true
}));
app.use(express.static(__dirname + '/public/'));
app.use(express.static(__dirname + '/controllers/'));
app.use(express.static(__dirname +'public/img'));
app.use(express.static(__dirname +'public/music'));
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use(express.static('controllers'));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname + '/views/index.html'));
});
app.get('/home',function(req,res){
    res.sendFile(path.join(__dirname + '/views/principal.html'));
});

app.post('/auth',function(req,res){
    let nombre_register = req.body.nombre_register;
    let pass_register = req.body.pass_register; 

if(nombre_register && pass_register){
    conexion.query('INSERT INTO usuarios (username,password) VALUES (?,?)',[nombre_register,pass_register],function(error,fields){
        if(error) throw error;

        res.redirect('/');
    });
   
}
else{
    res.send('error :(');
    res.end();

}
});

app.post('/login',function(req,res){
    let nombre_login = req.body.nombre_login;
    let pass_login = req.body.pass_login; 
    

    if (nombre_login && pass_login) {
	    conexion.query('SELECT * FROM usuarios WHERE username = ? AND password = ?', [nombre_login, pass_login], function(error, results,fields) {
		
	    if (error) {
            throw error;
        }
    	if (results.length > 0) {
            // Authenticate the user
            req.session.loggedin = true;
            req.session.nombre_login = nombre_login;
            // Redirect to home page
            res.redirect('/home');
        }
        else {
		res.send('Incorrect Username and/or Password!');
		}		
    });	
    }else{
        res.send('error :(');
        res.end();
        
    }
    
	

});
app.listen(3000);
