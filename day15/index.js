// console.log("hi i am node8/");

// console.log(typeof global);

// setTimeout(()=> {
//     console.log('setTimeOut');
// },1000);

// console.log(global.process.cwd());
// console.log('cureent working directory ', process.cwd());
// console.log("dirname  = " ,__dirname); 
// console.log(__filename);

// console.log(document);
// let varname;
// console.log(varname);




// const importedFileObj = require('./index2');
// // console.log(importedFileObj);
// // console.log(typeof importedFileObj);

// // console.log(module);
// console.log(importedFileObj);
// console.log(typeof importedFileObj);

// importedFileObj.sayHello();
// // console.log(typeof importedFileObj);                            ---doubt


  
// const importedFileObj = require('./index2');                  //deconstructor
// // console.log(importedFileObj);
// const {people,ages} = importedFileObj;
// console.log(people);
// console.log(ages);

const os = require('os');

console.log(os.userInfo());
console.log(os.platform());

