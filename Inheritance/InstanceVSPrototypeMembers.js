

function Circle(radius) {
    // Instance members
    this.radius = radius;
    this.move = function () {
        this.draw(); // Becuz the draw() method is not an instance method, it
        // will find the method in it's parent object. ie, __proto__ object.
        console.log('move');
    }
}

// Prototype members
Circle.prototype.location = { x: 1, y: 1 };
// setting draw function as prototype member of Circle.
Circle.prototype.draw = function () {
    // calling instance member inside prototype member
    // this.move();
    console.log('draw');
}

// Overriding a prototype method
Circle.prototype.toString = function () {
    console.log('Circle with radius: ' + this.radius);
}

const c1 = new Circle(1);
const c2 = new Circle(2);

console.log(c1);
console.log(c1.move());
console.log(c1.draw());
console.log(c1.toString());
console.log(c2.toString());

// Iterates over instance and protoype properties
// --------------------------------------------------------

// Returns only instance members
console.log(Object.keys(c1));

// Returns all members(instance + prototype)
for (let key in c1)
    console.log(key);

// Instance members are also called own members or own properties.

// hasOwnProperty() of prototype object - return true if the given property
// is an instance property or own property. Else return false.
// Let me show,
console.log(c1.hasOwnProperty('radius'));
console.log(c1.hasOwnProperty('draw'));

// Note: Premature optimization is the root of all evils.
// That means, dealing with prototype members will lead to some bad behaviour
// of objects in certain senario.

console.log(Object.prototype);