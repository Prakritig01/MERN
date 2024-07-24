let personInfo = {
    "firstName" : " Pratham",
    "lastName" : "Gupta",
    "age" :21,
    "address" : {
        "city" : "Delhi",
        "state" : "Delhi"
    }
}

let personInfo_1 = {
    "firstName" : " Pratham",
    "lastName" : "Gupta",
    "age" :21,
    "address" : {
        "city" : "Delhi",
        "state" : "Delhi"
    }
}

//map ek saath mei hum return bhi karte hai toh uskaalga new array baneyga
// let newArray = [personInfo,personInfo_1];
// const firstName = newArray.map(function(personInfo){

//     return personInfo.firstName;
// }

let year = 400;
if( (year%4) == 0  && (year %100 != 0))
{
    console.log(year +" is a leap year");
}
else
{
    if(year%400 == 0)
    {
        console.log(`${year}  is a leap year`);
    }
    else
    {
        console.log(`${year}] not a leap year`);
    }
}

