let  array1 = ['apple','mango','banana','grapes' ,'pomegranate','prakriti' , 'ali'];

let obj1 = {};
// for(let i = 0; i< array1.length; i++){
//     let size = array1[i].length;
//     if(obj1[size]) // exist
//     {

//     }

// }

let ans = array1.reduce(function(acc,curr){
    let obj ={};
    let len = curr.length;
    let str = curr;

    if(acc[len] != undefined){ //exist
        acc.curr[len].push(str); 
    }else
    {
        acc[len] = [str];
    }

    return acc;

},[])

// console.log(ans);