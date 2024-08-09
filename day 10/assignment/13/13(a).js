document.title = 'box using JS';
let container = document.querySelector('.container');
// container.classList.add('containers');

container.style.width = '20vw';
container.style.height = '35vw';
container.style.margin = '60px auto';
container.style.border = '5px solid black';
container.style.display = 'flex';


// for13(b)
container.style.justifyContent = 'space-evenly';
//for13(c)
// container.style.justifyContent = 'space-around';

// for13(d)
// container.style.justifyContent = 'space-between';

//for13(e)
// container.style.justifyContent = 'space-around';
// container.style.alignItems = 'flex-end';

//for13(f)
// container.style.justifyContent = 'space-around';
// container.style.alignItems = 'center';

//for13(g)
// container.style.alignItems = 'space-around';
// container.style.alignContent = 'space-around';   
// container.style.flexWrap = 'wrap';
// container.style.gap = '2px';

// for13(h)
// container.style.alignContent = 'flex-start';
// container.style.flexWrap = 'wrap';


// for13(i)
// container.style.alignContent = 'flex-end';
// container.style.flexWrap = 'wrap';


// for13(j)
// container.style.alignContent = 'center';
// container.style.flexWrap = 'wrap';

// for13(k)
// container.style.alignContent = 'center';
// container.style.flexWrap = 'wrap';
// container.style.gap = '5px';


// for13(l)
// container.style.alignContent = 'flex-start';
// container.style.flexWrap = 'wrap';
// container.style.gap = '5px';

//for13(m)
// container.style

for(let i = 0; i< 3; i++)
{
    let box = document.createElement('div');

    box.style.width = '60px';
    box.style.height = '60px';
    box.style.border = '6px solid rgb(104,71,78)';
    box.style.backgroundColor = 'rgb(195,182,184)';
    box.style.borderRadius = '6px';
    box.textContent = 'b' + i;
    box.style.color = 'white';
    box.style.display = 'flex';
    box.style.alignItems = 'center';
    box.style.justifyContent = 'center';
    box.classList.add('dabba')

    
    container.appendChild(box);

}


let selBox = document.querySelector(".dabba:nth-child(2)");
selBox.style.flexGrow = '3';
selBox.style.alignSelf = 'center';

