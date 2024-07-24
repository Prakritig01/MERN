// let obj = {"key1": "value1"};
// console.log(typeof obj);

let perInfo = { "firstName" : "Prakriti",
    "LastName" : "Gupta",
    "age" : 22,
    "hobbies" : ["coding","reading","swimming"],
    "address" : {
        "city" : "Moradabad",
        "state" : "UP"
    }
}

// console.log(perInfo);
// console.log(perInfo["firstName"]);

// var keyVar = "firstName";
// console.log(perInfo[keyVar]);

// console.log(perInfo["hobbies"]);



//modify array in the object
// var hobbiesArray = perInfo["hobbies"];

// hobbiesArray.push("singing");
// perInfo["hobbies"].push("dancing");
// console.log(perInfo["hobbies"]);



//to add new key value pair 
perInfo["Phone"] = "133456789";
// console.log(perInfo);



//we can add objects to array also
// let newArray = [perInfo,perInfo1]

// let perInfo1= { "firstName" : "aditi",
//     "LastName" : "Gupta",
//     "age" : 24,
//     "hobbies" : ["coding","reading","swimming"],
//     "address" : {
//         "city" : "Rampur",
//         "state" : "UP"
//     }
// }

// let newArray = [perInfo,perInfo1];
// console.log(newArray);



//access through dot notation
// console.log(perInfo.address.city);


//to change values
// perInfo.LastName = "Gupta_01";
// console.log(perInfo);




//access multiple values in an object
// console.log(perInfo.firstName,perInfo.LastName);
//destructure
// const{ firstName, LastName} = perInfo;
// console.log(firstName,LastName);

// ex 

// let perInfo = { "firstName" : "Prakriti",
//     "LastName" : "Gupta",
//     "age" : 22,
//     "hobbies" : ["coding","reading","swimming"],
//     "address" : {
//         "city" : "Moradabad",
//         "state" : "UP"
//     }
// }
// const{address} = perInfo                             
// const{address : {city}} = perInfo;
// console.log(city);
// // console.log(address);                                  --------------------error




// let array_1 = [ {"obj1" : [1,2,3,4] } , {"obj2" : [5,6,7,8] } , {"obj3" : [ 9,10,11] }];

// let array_3 = [ {"key_1" : [{"key_2" : "value_2" } ] } ]
// console.log(array_3);


const todos = [
    {
        id : 1,
        text :"coding",
        isCompleted : true
    },
    {
        id :2,
        text : "reading",
        isCompleted : false
    },
    {
        id: 3,
        text : "writing",
        isCompleted : true
    }
];

// console.log(todos);
// console.log(todos[1]);
console.log(todos[0]["id"]);

