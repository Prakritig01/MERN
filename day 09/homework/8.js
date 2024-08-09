// let num = 10;

// let checkEvenOdd = (num) => (num%2 == 0)?  "true" :  "false";
   
// console.log(checkEvenOdd(num));




//ques9
let color  = "blue";
let checkcolor = function(color){
    switch(color){
        case 'red' : return 0;
        case 'yellow' :return 1;
        case 'green' : return 2;
        default : return -1;
    }
};

let newColor = checkcolor(color);
console.log(newColor);
