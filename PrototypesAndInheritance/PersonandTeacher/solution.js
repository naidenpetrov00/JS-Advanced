class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    toString() {
        const className = this.constructor.name;
        return `${className} (name: ${this.name}, email: ${this.email})`;
    }
}

class Teacher extends Person {
    constructor(name, email, subject) {
        super(name, email)
        this.subject = subject;
    }

    toString() {
        const baseString = super.toString().slice(0, -1);
        return baseString + `, subject: ${this.subject})`;
    }
}

class Student extends Person {
    constructor(name, email, course) {
        super(name, email)
        this.course = course;
    }

    toString() {
        const baseString = super.toString().slice(0, -1);
        return baseString + `, course: ${this.course})`;
    }
}

let teacher = new Teacher('Alex', 'alex@gmail.com', 'History');
let student = new Student('Ivan', 'ivan@gmail.com', 'OOP')
console.log(teacher.toString());
console.log(student.toString());

function extendClass(classToExtend) {
    const speciesType = {
        Human: 'Human',
    }
    classToExtend.prototype.species = speciesType.Human;
    classToExtend.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`
    }
}

extendClass(Teacher);
console.log(teacher.toSpeciesString());