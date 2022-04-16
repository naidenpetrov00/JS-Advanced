class Rat {
    constructor(name) {
        this._name = name;
        this._unitedRats = [];
    };

    get() {
        return this._name;
    };

    getRats() {
        return this._unitedRats;
    };

    unite(otherRat) {
        if (otherRat instanceof Rat) {
            this._unitedRats.push(otherRat);
        }
    };

    toString() {
        let output = `${this._name}`;

        this._unitedRats.forEach((rat) => {
            output = output.concat(`\n##${rat.get()}`);
        });

        return output;
    };
}

let firstRat = new Rat("Peter");
console.log(firstRat.toString()); // Peter

console.log(firstRat.getRats()); // []

firstRat.unite(new Rat("George"));
firstRat.unite(new Rat("Alex"));
console.log(firstRat.getRats());
// [ Rat { name: 'George', unitedRats: [] },
//  Rat { name: 'Alex', unitedRats: [] } ]

console.log(firstRat.toString());
// Peter
// ##George
// ##Alex
