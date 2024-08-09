// function functionName(){
//     console.log("hello world");
// };

// functionName();

// function printName(firstName,lastName)
// {
//     console.log(`hello  ${firstName }  ${lastName}`);
// };

// printName('Prakriti','Gupta');


// function addNumm(num1,num2){
//     return num1+num2;
// }

// let result = addNumm(4,5);
// console.log(result);


//function ko variable mei store karna 
// const sumFunction = function addNumm(num1,num2){
//     return num1+num2;
// }

// const sum2 = sumFunction(2,4);
// console.log(sum2);



// ques1
// function mult(num1,num2){
//     return num1*num2;
// };

// const product = function mult(num1,num2){
//     return num1*num2;
// };

// console.log(product(5,4));

// function checkEvenOdd(num1){
//     return num1%2;
// }

// object ke andar function ka return
// const objects = {
//     firstName : "Prakriti",
//     lastName : "Gupta",
//     age : 22,
//     getFullName : function(){
//         return(`${this.firstName} ${this.lastName}`);
//     },
//     getYearOfBirth: function(currentYear){
//         return currentYear-this.age
//     },
// };

// let ans = objects.getFullName();
// console.log(ans);


//objct ke andar function ka input
//method which return year of birth given todays year
// ;

// let ans = objects.getYearOfBirth(2024);
// console.log(ans);



// objects["hobby"] = "coding";
// console.log(objects);


//object ->firstName,lastName,age
//---------------------------------------------------------------------------------------------------------------------------factory function
// let personInfoForm = function (fName ,lName,age){
//     const person = {
//         'firstName' : fName,
//         'lastName' : lName,
//         'age' : age
//     }
//     return person;
// }
// let pikiInfo = personInfoForm("Prakriti" , "gupta" , 21);
// console.log(pikiInfo);
// let aliInfo = personInfoForm("Ali" , "sher" ,22);
// console.log(aliInfo);


//another way -----------------------------------------------------------------------------------------------------(construction Functions)

function person(firstName, lastName,age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
};
console.log(typeof person);
var pikiInfo =  new person("Prakriti" , "gupta" ,22);
console.log(typeof pikiInfo);





