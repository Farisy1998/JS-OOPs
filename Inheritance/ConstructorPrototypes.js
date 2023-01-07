
// Circle constructor
// -------------------------
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    };
}

// In JS, a function is an object. So it has peroperties and methods. Becuz 
// of a function is an object. It will also have a prototype property. 
// Let me show,
console.log(Circle.prototype); // So the prototype property of a constructor
// function will be the prototype object (ie, parent object) for object
// created using this Circle constructor function.
// ie,

const circle = new Circle(2);

console.log(Circle.prototype === circle.__proto__); // returns true. Becuz
// the prototype obj of the Circle constructor function and prototype obj
// of the circle obj are equal.

// Similarlly
const array = []; // JS transilate into -> const array = new Array();
// So whenever we create an array, the JS will generate a call to Array
// constructor.
// So,
console.log(Array.prototype === array.__proto__); // returns true.

// Constructor prototypes are accessed like -> Function.prototype
// Object prototypes are accessed like -> obj.__proto__