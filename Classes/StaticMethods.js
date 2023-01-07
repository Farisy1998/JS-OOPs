

class Circle{
    constructor(radius) {
        // Instance members
        this.radius = radius;
    }

    // Prototype member
    draw() {
        console.log('draw');
    }

    // Static method
    static parse(str) {
        const radius = JSON.parse(str).radius;
        return new Circle(radius);
    }
    // static methods are used to create utility functions that are not typed
    // to a purticular object.
    // The static methods cannot taked to the object level. Means, the static
    // methods can't access with an object. It can only be accessed with the 
    // class name.
}

const circle = Circle.parse('{"radius": 2}');
console.log(circle);