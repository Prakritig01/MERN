//get reference to form
const formElement =  document.querySelector("#weather-form");

//add event listener for submit event

// function getInputAndPrintTemp(){
//     console.log("getInputAndPrintTemp");
// }
// formElement.addEventListener('submit',getInputAndPrintTemp);

// function getInputAndPrintTemp(event){
   
// }

formElement.addEventListener('submit',function(event){
    event.preventDefault();
    console.log(event);

    //get reference to the input field
    const inputField = document.querySelector("#city");

    const city = inputField.value;
    console.log(city);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=44de12b8de9e7d6ab1a241504f6b1366`;
    console.log(url);
    getCity(url,city)
});







//const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=44de12b8de9e7d6ab1a241504f6b1366";
async function getWeather(){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Moradabad&appid=5aad59a746bec23d65194d32609c2639&units=metric%60`
    
    try {
        // console.log(1);
        
        const responseVar = await fetch(url);
        // console.log(2);
        // console.log(responseVar);
        if(responseVar.ok){
            // console.log(3);
            const jsonData = await responseVar.json();
            // console.log(4);
            //display

        }
        else
        {
            throw new Error("Data not fetched");
        }

        //console.log(2);
        // console.log(jsonData);
        // console.log(3);
        // const main = jsonData.main;
        // console.log(main.temp);
        // console.log(4);
        // const temp = main.temp;

        // console.log(temp);
    }
    catch(err){
        console.log("Error occured");
        console.log(err);
        console.log(err.name);
        console.log(err.message);
    }

}
getWeather();

