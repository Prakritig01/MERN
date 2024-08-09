// let variable =10;
// console.log(variable);


// try{
//     console.log(variable2);
// }
// catch(err){
//     console.log("error occurred");
//     console.log(err);
//     console.log(typeof err);
//     console.log(err.name);
//     console.log(err.message);
// }


function divide(a,b){
    if(b === 0)
    {
        throw new Error ("divide by 0");
    }

    return a/b;
}

console.log(1);

let num1 = 10;
let num2 = 0;
try{
    console.log(divide(num1,num2));
}
catch(err){
    console.log("error occurred");
     console.log(err);
     console.log(typeof err);
     console.log(err.name);
     console.log(err.message);
}

console.log(2);
