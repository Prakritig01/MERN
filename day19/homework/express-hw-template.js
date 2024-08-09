// 1.create an express server 
// 2. start the server 
const express = require('express');
const ejs = require('ejs');
const app = express();
const port = 3040;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});


//set the view engine as ejs
app.set('view engine','ejs');

//set the directory for ejs template
app.set('views','views_1');

const blogs = [
    {
      title: "The Basics of HTML",
      author: "John Doe",
      content: "HTML stands for HyperText Markup Language. It is the standard language for creating webpages...",
      date: "2024-08-08",
      tags: ["HTML", "Web Development", "Beginner"]
    },
    {
      title: "Getting Started with CSS",
      author: "Jane Smith",
      content: "CSS, or Cascading Style Sheets, is a style sheet language used for describing the presentation of a document written in HTML...",
      date: "2024-08-07",
      tags: ["CSS", "Web Design", "Beginner"]
    },
    {
      title: "Introduction to JavaScript",
      author: "Alice Johnson",
      content: "JavaScript is a programming language that is commonly used to create interactive effects within web browsers...",
      date: "2024-08-06",
      tags: ["JavaScript", "Programming", "Beginner"]
    },
    {
      title: "Understanding the DOM",
      author: "Bob Brown",
      content: "The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content...",
      date: "2024-08-05",
      tags: ["JavaScript", "DOM", "Web Development"]
    },
    {
      title: "A Guide to Responsive Design",
      author: "Charlie Davis",
      content: "Responsive design is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes...",
      date: "2024-08-04",
      tags: ["CSS", "Responsive Design", "Web Design"]
    }
  ];
  

app.use(express.static('public'));
app.get('/',(req,res) =>{
    res.render('index',{blogs,title : 'INDEX'});
});

app.get('/about' ,(req,res) =>{
    res.render('about');
});

app.get('/newblog' ,(req,res) =>{
    res.render('newblog');
});

app.get('/contact',(req,res)=>{
    res.render('contact');
});

app.use((req,res)=>{
    res.status(404);
    res.render('error');
})

