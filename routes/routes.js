var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(req,res){
    res.sendFile(path.join(__dirname+'/../views/index.html'));
});

router.get('/home',function(req,res){
    res.sendFile(path.join(+__dirname + '/../views/principal.html'));
});

module.exports = router;