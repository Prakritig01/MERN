let a = -8;
if(a > 0)
{
    console.log('a is +ve');
}
else if( a < 0)
{
    console.log('a is -ve');
}
else
{
    console.log('a is 0');
}


let year = 100;
return (year%4 == 0) && (year%100 != 0) || (year%400)? console.log("leap year") :console.log('not a leap year'); 