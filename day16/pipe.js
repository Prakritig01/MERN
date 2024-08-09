const fs = require("fs");
const fileName = './day16/files/write_file1.txt';
const readstream  = fs.createReadStream(fileName,{encoding:'utf-8'});
const writeStream =fs.createWriteStream('./day16/files/write_file_new.txt');
readstream.pipe(writeStream);