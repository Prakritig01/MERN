let  array1 = [1,2,3,4,5];

let newArray = array1.map(function(num1){
    return num1*num1;
});

console.log(newArray);


let array2 = array1.map(num =>num**3);

console.log(array2);