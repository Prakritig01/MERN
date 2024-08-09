let todo = function(title,description,status){
    this.title = title;
    this.description = description;
    this.status = status;
}

let newarr = [
 todo1 = new todo('stranger' ,'horror' ,'done'),
 todo2 = new todo('sherlock' ,'mystery' ,'not done'),
 todo3 = new todo('GOT' ,'nowords' ,'done'),
 todo4 = new todo('noname' ,'xyz','done'),
 todo5 = new todo('abc' ,'def','not done'),
];

for(let i = 0; i<newarr.length;i++){
    console.log(newarr[i]['title'] + " " + newarr[i]['description']);
};

let array2 = newarr.map(x=> x.title);
console.log(array2);

let array3 = newarr.filter(x=> x.status==='not done').map(x=>x.title);
console.log(array3);

