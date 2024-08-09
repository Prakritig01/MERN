// const newDivElem  = document.createElement('div');
// const bodyElem = document.body;
// bodyElem.appendChild(newDivElem);
// newDivElem.textContent = 'this is a new div element';


// const bodyElemFromNewDiv = newDivElem.parentElement;
// const firstChildOfBody = bodyElemFromNewDiv.firstElementChild;
// firstChildOfBody.appendChild(newDivElem);


// // const para = document.createElement('p');
// // para.textContent = 'this is the new para which will be inside a div';

// // newDivElem.appendChild(para);


const newElement = document.createElement('p');
newElement.textContent = 'this is the newly created para';

// const para = document.body.children[1].children[1];
// console.log(para.textContent);

// document.body.children[1].insertBefore(newElement,para);

const parent = document.querySelector('div.container');
const adjacent  = parent.querySelector('.container > p');
parent.insertBefore(newElement,adjacent);
// document.body.children[1].insertBefore(newElement,para);