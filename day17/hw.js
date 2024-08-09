//1. create   a server

const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) =>{
    console.log(req.url,req.method);
    const fileName = './calculator3.0/index.html';
    fs.readFile(fileName,(err,data) =>{
        if(err){
            console.log(err);
            res.statusCode = 404;
            res.end('Error while reading the file')
        }
        else{
            res.statusCode = 200;
            res.setHeader('Content-Type','text/html');
            res.end(data);
        }
    });

});

server.listen(3010,'localhost' , ()=>{
    console.log('server is listening on port 3010');
});