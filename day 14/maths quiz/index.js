const formElem  =document.querySelector("form");
const containerElem = document.querySelector(".container");
let answer = [4,2,9];
let selected = [];

let score = 0;

formElem.addEventListener("submit" ,function(event){
    event.preventDefault();
    const selected1 = document.querySelector('input[name = "ques1"]:checked').value;
    selected.push(selected1);
    
    const selected2 = document.querySelector('input[name = "ques2"]:checked').value;
    selected.push(selected2);

    const selected3 = document.querySelector('input[name = "ques3"]:checked').value;
    selected.push(selected3);

    for(let i = 0; i<answer.length;i++){
        if(answer[i] == selected[i]){
            score = score +1;
        }
    }
    
    const result  = document.createElement('div');
    result.classList.add("results");
    result.innerHTML = "Your score is " + score;

    containerElem.appendChild(result);

});




