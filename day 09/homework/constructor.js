function perInfo(first,last,age,hobby,eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.hobby = hobby;
    this.eye = eye;
}

const father = new perInfo('Gagan' , 'Gupta' , 47, 'nothing', 'black');
// console.log(father);

const mother = new perInfo('Poonam' , 'Gupta' , 46, 'reading', 'black');

// console.log(mother);
// console.log(me);

perInfo.prototype.nationality = "Indian";
const me = new perInfo('Prakriti' , 'Gupta' , 21, 'sleep', 'black');
// console.log(me);
// console.log(me.nationality);