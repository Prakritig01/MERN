let count = 0;
function myGreetings(){
    console.log('heeelo');
     myTnterval = setInterval(printing,1000);      
}


setTimeout(myGreetings,2000);


function printing(){
    console.log("running function");
    count++;
    console.log("count :" , count);
    if(count == 5){
        clearInterval(myTnterval);
    }
}
