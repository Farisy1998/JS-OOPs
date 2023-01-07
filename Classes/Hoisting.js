
// Hoisting: the mechanism of moving all functions which is declared using 
// function declaration syntax to the top of the JS file.

sayHello(); // hoisting feature

// Function declaration syntax
function sayHello() {
    console.log('hello!');
}

// Function expression syntax
const greet = function () {
    console.log('good morning');
}

// Class declaration syntax
class Circle{
    // ...
}

// Class expression syntax
const Squre = class {
    // ...
}

// Note: functions are hoisted in JS. But not classes.