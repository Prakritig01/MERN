let lists = document.querySelectorAll(".list");
// console.log(lists);

let rightBox = document.querySelector("#right");
let leftBox = document.querySelector("#left");


for (const i of lists) {
    i.addEventListener("dragstart" , function(event){
        let selected = event.target;

        rightBox.addEventListener("dragover",function(event){
            // event.preventDefault();
        });

        rightBox.addEventListener("drop",function(event){
            rightBox.appendChild(selected);
            selected = null;
        });
        leftBox.addEventListener("dragover",function(event){
            // event.preventDefault();
        });

        leftBox.addEventListener("drop",function(event){
            leftBox.appendChild(selected);
            selected = null;
        });



    })
}