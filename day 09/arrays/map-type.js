let obj1 = {'name' : 'Prakriti'};
let obj2 = {'name' : 'rahul'};


let mapOfNumber = new Map();
mapOfNumber[1] = 'a';
mapOfNumber[obj1] = 'key-1';
console.log(mapOfNumber[55]);

// console.log(mapOfNumber); 
// console.log(typeof mapOfNumber);
// console.log(mapOfNumber.size);

mapOfNumber.set(5,'b');
mapOfNumber.set(2,'p')
// console.log(mapOfNumber.size);

if(mapOfNumber.has(2)){
   console.log(mapOfNumber.get(2)); 
}
else{
console.log("NO");
};

// console.log(mapOfNumber);