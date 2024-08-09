const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) =>{
    console.log(req.url,req.method);
    res.setHeader('Content-Type','text/html');
    let path = './files/error.html';
    switch(req.url){
        case '/':
            path = './files/index.html';
            res.statusCode = 200;
            break;
        case '/about' :
            path = './files/about.html';
            res.statusCode = 200;
            break;

        case '/aboutme' :
            res.statusCode = 301;
            res.setHeader('Location','/about');
            res.end();

        default:
            path = './files/error.html';
            res.statusCode = 404;
    }

    fs.readFile(path ,(error,data) =>{
        if(error){
            console.log(err);
            res.statusCode = 404;
            res.end(err.message);
        }
        else{
            res.end(data);
        }
    });
});

server.listen(3010, 'localhost' , ()=>{
    console.log('server is running on 3010');
})