//a basic template  in EJS

const express = require("express");
const middleware = require('./middleware-package')
const ejs = require("ejs");
const app = express();
const port = 3010;

app.listen(port, (req, res) => {
  console.log("Server chaluuu.....");
});

app.set("view engine", "ejs");
app.set("views", "views");



//rendering kya hoti hai?
// Rendering allows you to create dynamic web pages where content can change based on user interaction, data from a database, or other factors. This makes websites interactive and more personalized.

// Imagine you're making a website for a school, and you want to show a list of students. Instead of manually writing HTML for each student, you can create a template and use Express to render that template with the student data. If new students are added, the page automatically updates without needing to change the HTML manually.

// app.use((req, res, next) => {
//   console.log("this is my middleware");
//   next();
// });

// //middlewares are used for logging only

// app.use(function (req, res,next) {
//   console.log("this  is my second middleware");
//   next();
// });


// function middleware3(req,res,next){
//     console.log('this is my third middleware');
//     next();
// }
// app.use(middleware3);

app.use(middleware.middleware1);
app.use(middleware.middleware2);
app.get("/", (req, res) => {
  console.log("basic ke andar aaagya huuuu");
  res.render("sample", { title: "mera naya sample" });
});


