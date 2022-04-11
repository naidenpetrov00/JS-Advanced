const Person = require('../Person/solution.js');

function personPacker() {
    const firstPerson = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
    const secondPerson = new Person('Softuni');
    const thirdPerson = new Person('Stephan', 'Johnson', 25);
    const fourthPerson = new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com');

    const arrOfPerson = [
        firstPerson,
        secondPerson,
        thirdPerson,
        fourthPerson
    ];

    return arrOfPerson;
}

console.log(personPacker());