//1. create a server
//2.run a server

const http = require('http');
const fs = require('fs');

// const server = http.createServer((req,res)=>{
//     console.log(req.url,req.method);
//     res.setHeader('Content-Type','text/html');
//     res.statusCode = 200;
//     res.write('<h1> hello,this is a response from the server.</h1>');
//     res.end();
// });

// server.listen(3010,'localhost',()=>{
//     console.log('Server is listening on port 3010');
// })




//sending a html file 
const server = http.createServer((req,res) =>{
    console.log(req.url,req.method);
    const fileName = './files/temp.html';
    fs.readFile(fileName,(err,data) =>{
        if(err){
            console.log(err);
            res.statusCode = 404;
            res.end('Error reading the file');
        }
        else{
            res.statusCode =200;
            res.setHeader('Content-Type','text/html');
            res.end(data);
        }
    });
});


server.listen(3001,'localhost',()=>{
    console.log("server is listening on port");
});