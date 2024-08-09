const express = require('express');

//server ke steps
// 1.create server 
// 2. listen server 
// 3. handle  requests 

const app = express();
const port = 3050;
app.listen(port,(req,res) =>{
    console.log('server chaalu ho chuka haiii');
});

app.set('view engine' , 'ejs');
app.set('views','views');

app.use(express.static('public'));

app.get('/' ,(req,res)=>{
    // res.send('<h1> This is the headinggggg!!!! </h1>');                //heading banke hi aaaeyga bhayi
    res.render('./sample.ejs', {root:__dirname,title : 'my_first_page'});
});

app.get('/about' ,(req,res) =>{
    res.render('./about' , {root:__dirname});
    console.log('about section');
});

app.get('/blog' ,(req,res)=>{
    res.render('./blog' ,{root : __dirname});
    console.log(('blog block'));
});


