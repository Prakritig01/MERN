//1. create a express server
//2.start the server

const express = require('express');
const server = express();

server.listen(3040,'localhost' ,()=>{
    console.log('server started');
});

server.get('/' , (req,res) =>{
    console.log(req.url,req.method);
    res.sendFile('./files/index.html' ,{root : __dirname});

});

server.get('/about' ,(req,res) =>{
    console.log((req.url,req.method));
    res.sendFile('./files/about.html' , {root : __dirname});
});

server.get('/aboutme' , (req,res) =>{
    // console.log((req.url,req.method));
    //res.redirect('/about');                         //it will give status as 302(temporary redirect) 
    res.redirect(301,'/about');                     //it will give permanent as 301 (permanent)
});

server.use((req,res) =>{
    res.sendFile('./files/error.html' , {root : __dirname});
});
