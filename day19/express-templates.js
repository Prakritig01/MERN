const express = require('express');
const ejs  = require('ejs');
const app = express();
const port = 3040;

let students = [];

app.listen(port,()=>{
    console.log('Server is running on port 3040');
});

app.set('view engine' ,'ejs');

app.set('views','views');


app.get('/' , (req,res) =>{
    res.render('index_1' ,{title : 'New index'});
});

app.get('/about' ,(req,res) =>{
    res.render('about' ,{title : 'About'});
});

app.get('/index_1' ,(req,res) =>{
    res.render('index_1');
});


app.get('/students' ,(req,res) =>{
    res.render('students' ,{title : 'studentssssssss'});
});

app.use((req,res)=>{
    res.status(404);
    res.render('error' ,{title : 'error'});
});
