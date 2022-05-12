const mysql = require('mysql');

const express = require('express');
const session = require('express-session');
const path = require('path');
const { request } = require('http');
const Growl = require('node-notifier').Growl;
var notifier= new Growl({
    name : 'Growl Name Used',
    host: 'localhost',
    port : 23053
})
const conexion = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'users'
});
conexion.connect();
var app = express();

app.use(session({
    secret : 'secret',
    resave : true,
    saveUninitialized : true
}));
app.use(express.static(__dirname + '/public/'));
app.use(express.static(__dirname + '/controllers/'));
app.use(express.static(__dirname +'public/img'));
app.use(express.static(__dirname +'public/music'));
app.use(express.static(__dirname + '/routes/'));
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use(express.static('controllers'));

const routes = require('./routes/routes.js');
app.use(routes);

app.post('/reg',async(req,res)=>{
    let nombre_register = req.body.nombre_register;
    let pass_register = req.body.pass_register; 

if(nombre_register && pass_register){
    /*conexion.query('INSERT INTO usuarios (username,password) VALUES (?,?)',[nombre_register,pass_register],function(error,fields){
        if(error) throw error;

        res.redirect('/');
    });*/
    conexion.query('SELECT username from usuarios'),function(error,resultados){
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
        conexion.end();
    }
    res.redirect('/');
}
else{
    //res.send('error :(');
    //res.end();
    notifier.notify({
        title: 'Asies',
        message : 'Holaa',
        icon: undefined,
        wait: false 
    },
    function(error,response){
        console.log(response);
    });
    conexion.end();
}
});

app.post('/login',async(req,res)=>{
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
            app.use('/home',routes);
        }
        else {
		res.send('Incorrect Username and/or Password!');
		}		
    });	
    }else{
        //res.send('error :(');
        //res.end();
        notifier.notify({
            title: 'Asies',
            message : 'Holaa',
            icon: undefined,
            wait: false 
        },
        function(error,response){
            console.log(response);
        });
        
    }
    conexion.end();
});
app.listen(3000);
