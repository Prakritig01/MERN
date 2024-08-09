let array1 =['html', 'css', 'javascript', 'react', 'node', 'postgres'];
console.log(array1.length);
console.log(array1[2]);
array1.pop();
array1.push('sql');
// console.log(array1);
let result = array1.join('-');
console.log(result);
// console.log(array1);

// let newCopy = Object.assign([],array1);
// let newCopy = array1.slice();
let newCopy = [...array1];
console.log(newCopy);
newCopy.sort();
console.log(newCopy);

let index = array1.findIndex(x => x==='node');
// console.log(index);
// array1.push(index);
// console.log(array1);

let indexReact = array1.findIndex(x => x==='react');
// array1.push(indexReact);
// console.log(array1);


let newResult = array1.join('-');
console.log(newResult);

console.log(array1);

let str = "";
for(let i = 0; i< array1.length;i++){
    str = str + array1[i].charAt(0).toUpperCase() + array1[i].slice(1) + ' ';
}
console.log(str);