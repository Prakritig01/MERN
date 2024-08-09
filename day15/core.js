const { error } = require('console');
const fs = require('fs');
const{ readFile } = require('fs');


const existingFileName = './files/existing_files.txt';
// read files
fs.readFile(existingFileName,'utf-8',(err,data) =>{
    console.log('inside callback function');
    if(err){
        console.log("error",err);
        console.log(error.name);
        console.log(error.message);
    }
    else{

        console.log("data:" );
        // console.log(data);
        console.log(data.toString());
        console.log(typeof data);

    }
})

console.log(__dirname);
console.log('after reading the file');



//write file
// const content = ' again im backkkkkkkkkkkkkkkkk'
// const fileName  = './files/new_file.txt';
// fs.writeFile(fileName,content,(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log('file written succcessfully');
//     }
// });



// //file hai ya nai
// (fs.existsSync())
// fs.exists
