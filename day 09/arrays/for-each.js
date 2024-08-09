let  array1 = [1,2,3,4,5];

function printElem(num){
    console.log(num);
}

// printElem(array1);          //will print in  a single line

// array1.forEach(printElem);          //will print evry element in another line

// function printSquare(num){
//     console.log(num*num);
// }

// array1.forEach(printSquare);

//arrow function

array1.forEach(num => console.log(num*num)); 