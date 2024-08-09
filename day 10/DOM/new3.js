// const elem = document.querySelector('ul li');

// elem.style.color ='hotpink';
// elem.style.backgroundColor = 'olive';


// const spanElement = document.querySelector('#span-id');
// spanElement.style.color = 'hotpink';

// const item = document.querySelector('.list-item:last-child');
// item.style.color = 'hotpink';


const submitElem = document.querySelector("input[type ='submit']");
submitElem.value = "New value"

const oddElem = document.querySelectorAll('li:nth-child(odd)');
console.log(typeof oddElem);

oddElem.forEach(element => { element.style.color = 'hotpink'
    
});
