const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3020;

app.listen(port,()=>{
    console.log(`server is runnning on port ${port}`);
});

// app.use(morgan('dev'));

app.use(express.static('public'));
app.get('/',(req,res)=>{
    console.log("ABCD");
    res.sendFile('./index.html', {root : __dirname});
});