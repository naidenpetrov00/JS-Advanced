class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return Math.pow(this.radius, 2);
    }

    set diameter(diameter) {
        this.radius = Math.log(diameter) / Math.log(2);
    }

    get area() {
        const area = Math.PI * this.diameter;
        return area;
    }
}

let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
