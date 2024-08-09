const express = require('express');
const server = express();
server.listen(3040,'localhost',()=>{
    console.log("server started");
});

server.get('/',(req,res) =>{
    console.log(req.url,req.method);
    res.sendFile('./files/first.html' ,{root:__dirname});
})

server.get('/about' ,(req,res) =>{
    console.log(req.url,req.method);
})