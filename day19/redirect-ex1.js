const express = require('express');

const server = express();
server.listen(3012,'localhost',()=>{
    console.log("chaaluuuuuuuu");
});

server.get('/',(req,res)=>{
    console.log(req.url,req.method);
    res.sendFile('./files/index.html' , {root: __dirname});
});
server.get('/about',(req,res)=>{
    console.log(req.url,req.method);
    res.sendFile('./files/about.html' , {root: __dirname});
});
server.get('/aboutme',(req,res)=>{
    // console.log(req.url,req.method);
    res.redirect('./files/about.html');
});
server.use((req,res)=>{
    res.sendFile('./files/error.html' , {root: __dirname});
});
