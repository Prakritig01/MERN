class PersonClass{
    constructor(firstName,lastName,dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear(){
        return this.dob.getFullYear();
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

class Teacher extends PersonClass{
    constructor(firstName,lastName,dob,job){
        super(firstName,lastName,dob);
        this.job = job;
    }

    getJob(){
        return this.job;
    }
}

let teacherObject = new Teacher("Prakriti" ,'gupta', '01-11-2002' , 'teacher');
console.log(teacherObject);
console.log(teacherObject.getBirthYear());
console.log(teacherObject.getFullName());