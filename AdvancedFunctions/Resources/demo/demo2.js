let person = {
    name: 'Peter',
    sayHi: function () {
        console.log(`${this.name} says hi!`);
    }
};

let secondPerson = {
    name: 'George'
};

//context fixing
person.sayHi.call(secondPerson);

const georgeHi = person.sayHi.bind(secondPerson);
georgeHi();

person.sayHi.apply(secondPerson);

//Math.max working with array
//null or {} is for context
console.log(Math.max.apply(null, [1, 2, 3, 4]));