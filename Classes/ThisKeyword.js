// 'use strict'; // To use strict mode

// Constructor function
const Circle = function () {
    this.draw = function () {
        console.log(this);
    }
}

const circle = new Circle();

// Method call
circle.draw(); // Inside the draw(), this will points to actual circle obj. 
// So, here shows the actual circle obj.

const draw = circle.draw; // shoring reference of draw (ie, the entire function)
console.log(draw);

// Function call
draw(); // Inside draw(), this will points to the global object. So, here
// shows the global object or window object.

// But if we use strict mode. The 'this' will no longer points to the global
// object. Instead it will set to undefined. And the reason for this is to
// prevent us from accidently modifying the global object or window object.

// On class declaration syntax
class Squre{
    duplicate() {
        console.log(this);
    }
}

const squre = new Squre();
squre.duplicate();

// By default all ES6 class body are executed in strict mode. Whether the 
// strict mode is explicitly declared on or not.
const duplicate = squre.duplicate;
duplicate(); // this shows undefined even we are not in stric mode