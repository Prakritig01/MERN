let container = document.getElementById('container');

container.style.border = '4px solid black';
container.style.width = '30vw';
container.style.height = '40vw';
container.style.margin = 'auto auto';
container.style.display ='flex';
// container.style.gap = '2px';

for(let i = 0; i< 3 ; i++){
    let box = document.createElement('div');

    // box.classList.add(dibba);
    box.style.backgroundColor = 'rgb(195,182,184)';
    box.style.width = '65px';
    box.style.height = '65px';
    box.style.border = '6px solid rgb(104,71,78)';
    box.style.borderRadius = '6px';
    box.textContent = 'b'+i;
    box.style.color = 'white';
    box.style.display = 'flex';
    box.style.justifyContent = 'center';
    box.style.alignItems= 'center';
    
    container.appendChild(box);
}
