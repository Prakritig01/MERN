// const s = "hello world";
// console.log(s.length);

// var name = "Hello123 World";
// var age = 21;
// console.log(`My Name is: ${name} and age is: ${age}`)

// console.log(name.toUpperCase());
// console.log(name.substring(1,4));
// console.log(name.substring(5));
// console.log(name.split("1234"));

// const check= ["hi" , "my","name","is","Prakriti"];
// console.log(typeof(check));
// // check[5] = "hello";
// // console.log(check[5]);
// check.push("yo");
// console.log(check);
// check.unshift("last");
// console.log(check);

//remove elements from middle
// check.splice(1,2);
// console.log(check);

// check.reverse();
// console.log(check);

// function sumOfNumbers(num1, num2)
// {
//     return num1+num2
// }

// let val = sumOfNumbers(5,4);
// console.log(val);


//sort an array based on custom logic
let arrayNum = [0,1,-1,-4,-2,9,-7];
// console.log(arrayNum.sort(function (num1,num2){ if(num1 < num2){
//     return -1;
// }
// else {
//     return 1;
// }
// }));

console.log(arrayNum.sort(
    function (num1,num2){
        return num1-num2;
    }
))

// if(-1)
// {
//     console.log("true");
// }

// console.log(arrayNum.sort(
//     function(num1,num2){
//         return num1*num1 - num2*num2;
//     }
// ))

