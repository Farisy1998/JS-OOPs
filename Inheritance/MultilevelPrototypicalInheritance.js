let myArray = [];

console.log(myArray); // returns the actual myArray object.
console.log(myArray.__proto__); // returns the myArray prototype object.
// which contains all the methods and properties in-build to the array object.
// Like, find(), fill(), map() etc...

console.log(myArray.__proto__.__proto__); // returns the root prototype
// object of the myArray object. Which will be the __proto__ property of the
// __proto__ property of myArray object.

// Which will be a Multi-level prototypical inheritance. Let me show,
//
//  objectBase(myArray.__proto__.__proto__) <------- arrayBase(myArray.__proto__) <------ myArray(actual myArray obj)

// Eg:
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    };
}

const circle = new Circle(2);
console.log(circle); // returns actual circle object.
console.log(circle.__proto__); // returns the prototype object or peroperty
// of the circle object.
console.log(circle.__proto__.__proto__); // returns the prototype object of
// the prototype object of actual circle object.

// Which will be represented as:
//
// objectBase(circle.__proto__.__proto__) <------ circleBase(circle.__proto__) <------ circle(actual circle obj)