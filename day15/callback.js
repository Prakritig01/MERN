// function f1(callback){                                                             ------------------- type I
//     console.log("i am inside f1");
//     callback();
// }

// function sayHello(){
//     console.log('hello');
// }

// f1(() => console.log('hello'));

// f1(() => console.log("this is the secnd line"));





//call back function with inputs                                          -----------------type II

// function f2(name,callback){
//     console.log('I am inside function f2');
//     callback(name);
// };

// f2("alice",(name)=>console.log(`hello ${name}`));


// f2("Bob" ,(name) => console.log(`goodbye ${name}`));
//                                                                                 --------------typeIII


function f3(name,callback){
    console.log('I am inside function f3');
    //checl if a string
    if(typeof name === 'string'){
        const data = `hello ${name}`;
        callback(null,data);
    }
    else{
        const error = new Error('Error : Name is a number');
        callback(error,null);
    }
}

// function greet(error,data){
//     if(error){
//         console.log(error.message);
//     }
//     else{
//         console.log(data);
//     }
//}
f3(123,(error,data) => (error)?console.log(error.message) : console.log(data));

f3 ("Prakriti",(error,data)=> {
    if(error){
        console.log(error.message);
    }
    else{
        console.log(data);
    }
});

