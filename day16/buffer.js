// read streammmm
const fs = require("fs");

// const fileName1 = './day16/files/file1.txt';
// const readStream1 = fs.createReadStream(fileName1); // creating connection
// console.log(typeof readStream1);

// let counter = 0;
// readStream1.on('data',(chunk) => {

//     console.log("\n\n    content received");
//     console.log(chunk);
//     console.log("counter " ,++counter);
// });

//write stream
//create a file using stream
// const writeFile = './files/write_file.txt';
// const writeStream = fs.createWriteStream(writeFile); // creating connection
// writeStream.write('heloo this is a write streams.\n');
// writeStream.write('hello, this is another line.\n');
// writeStream.write('this is nayi line \n');





// const fileName = './files/file1.txt';
// const readStream = fs.createReadStream(fileName,{encoding :'utf-8' , highWaterMark :1024});
// let counter = 0;
// readStream.on('data',(chunk) => {

//     console.log("\n\n    content received");
//     console.log(chunk);
    
    
//     console.log("counter " ,++counter);
// });

let readFile = './day16/files/file1.txt';
let readStreamCon = fs.createReadStream(readFile);           //connection


let writeFile = './day16/files/new_test3.txt';
let writeStreamCon = fs.createWriteStream(writeFile);

readStreamCon.on('data', (chunk)=>{
    writeStreamCon.write(chunk)
})

// readStreamCon.pipe(writeStreamCon)