const bodyElem = document.querySelector(".container");

bodyElem.addEventListener("click",function(event){
    const xPosition = event.x;
    const yPosition  = event.y;
    createBox(xPosition,yPosition);
})
function createBox(x,y){
    const newBox = document.createElement('div');
    newBox.classList.add("nayaDibba");
    newBox.style.position = 'absolute';
    newBox.style.left = x+'px';
    newBox.style.top = y+'px';

    bodyElem.appendChild(newBox);
}