let  array1 = [1,2,3,4,5];

function isEven(num){
    return num%2 == 0;
}
function square(num){
    return num*num;
}
// let evenArray = array1.filter(num => num%2==0);
// console.log(evenArray);


let evenSquare = array1.filter( x => x%2 == 0).map( x => x*x);
console.log(evenSquare);

let newArr = array1.filter(x => x%2).map(x => x*x).filter(x => x<10);
console.log(newArr);


//