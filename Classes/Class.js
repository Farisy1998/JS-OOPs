// Classes are syntactic sugar over constructors in JS.

class Circle{
    constructor(radius) {
        // Instance members
        this.radius = radius;
        this.duplicate = function () {
            console.log('duplicate')
        }
    }

    // Prototype members
    draw() {
        console.log('draw')
    }
}

const circle = new Circle(2); // classes enforce to use 'new' operator