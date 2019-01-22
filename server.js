var express = require('express');
var app = express('app');
var port = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.listen(port, function(){
    console.log('We are listening for incoming requests')
})