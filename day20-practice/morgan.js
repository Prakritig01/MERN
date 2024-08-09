const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3030;

app.listen(port,(req,res)=>{
    console.log('server chaaaaaluuuu ho gya hai 3030 vaaala');
});

// app.use(morgan('dev'));
//iska output kuch aaaisa aaeyga
// GET / 200 8.803 ms - 23
// GET /favicon.ico 404 2.337 ms - 150

app.use(morgan('tiny'));
//iska output aaaisa
// GET / 304 - - 4.572 ms aaeyga     thoda short meiii


app.use(morgan('short'));


app.get('/',(req,res)=>{
    res.send("This is the textttttt!!");
});