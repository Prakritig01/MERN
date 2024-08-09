const express = require('express');
const ejs = require('ejs');
const app = express();
const port = 3010;

const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape", "Honeydew", "Kiwi", "Lemon", "Mango", "Nectarine", "Orange", "Papaya", "Quince", "Raspberry", "Strawberry", "Tangerine", "Ugli fruit", "Watermelon"];

const users = [
    { name: "Aarav", age: 25 },
    { name: "Bhavna", age: 30 },
    { name: "Chirag", age: 35 },
    { name: "Divya", age: 28 },
    { name: "Esha", age: 22 },
    { name: "Farhan", age: 27 },
    { name: "Gauri", age: 32 },
    { name: "Harsha", age: 29 },
    { name: "Ishaan", age: 24 },
    { name: "Jaya", age: 31 }
];


const isLoggedIn = false;
const num =2;
app.listen(port,()=>{
    console.log(`server chaaaalu ho gya haiiiiii ${port} number par`);
});

app.set('view engine' ,'ejs');
app.set('views','views_1');

app.get('/',(req,res)=>{
    // res.render('practice-ejs-questions' ,{users});
    res.render('practice-ejs-questions',{num});
});


app.use((req,res)=>{
    res.render('error');
});