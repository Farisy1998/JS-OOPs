// Two types of inheritance:
// 1. Classical Inheritance - on classes.
// 2. Prototypical Inheritance - on prototype property or __proto__ property
// of an object.

// Also, an object will have 2 types of properties in JS. ie,
// 1. Instance Property - self property
// 2. Prototype Property - __proto__ object property

// In JS every objetct has a property called __proto__ or Proptotype property.
// except the root object. And the Prototype property is a regular object
// in memory and nothing special.
// Note: root object will be the Prototype object.

// Let me show,

let x = {};
console.log(x); // shows Prototype property of x

let y = {};
console.log(y); // also shows Prototype property of y

// The Proptotype property is a base object or an object base for every object
// in JS. So whenever an object is created in JS, that object will implicitly
// or explicitly inherits the Prototype base object or the Prototype 
// property(__proto__). That's why it is called Prototypical Inheritance.

console.log(x.get__proto__ === y.get__proto__); // returns true. Means every
// object inherits a same Prototype property or object.
// OR
console.log(Object.getPrototypeOf(x) === Object.getPrototypeOf(y)); // returns true.

// Some properties and methods of the Prototype base object:
console.log(x.toString());
console.log(x.__proto__); // shows the Prototype properties of object x.

// This Prototypical inheritance will be a Single Prototypical inheritance.
// Let me show,
//
//                                          _________ x(actual x obj)
//                                         |
//      objectBase(__proto__ obj) <--------|
//                                         |
//                                         |_________ y(actual y obj)


// Note: The Prototype property (__proto__) is the base or parent property
// of every object in JS. And this __proto__ object doesn't have any parent.
// ie, the __proto__ object or the Prototype object doesn't have Prototype
// property or a property name __proto__.

// So, whenever we tries to access any method or property of an object. Then
// the JS will first look that in that object itself. If JS is unable find the
// property or method in that object. Then it will goes to it's partent or base
// object and if the JS is failed to find the property or method in its parent
// object. Then JS will look on parent object of that parent and this process
// will continue to it's root parent. If the property or the method is found.
// JS will return it.