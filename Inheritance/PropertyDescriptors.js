

let person = { name: 'Farisy' };
console.log(person);
console.log(person.toString());

// if we iterates over the person obj. we can't see the toString(), only name
// key will display. Or the object Base properties will not show.
for (let key in person)
    console.log(key);
//OR
console.log(Object.keys(person));

// So, how we can iterates over the object base properties or methods of an
// object.
// So, how it is,

let objectBase = Object.getPrototypeOf(person);
console.log(objectBase); // shows the person.__proto__
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');
for (let key in descriptor)
    console.log(key, descriptor[key]);

// we can also set these descriptor properties to our own object. Let me
// show,

Object.defineProperty(person, 'name', {
    writable: false
}); // we cannot change or write to the name property. It is only readable.

person.name = 'John';
console.log(person.name);

Object.defineProperty(person, 'name', {
    // enumerable: false,
    enumerable: true
}); // we cannot iterates over the name property.

console.log(Object.keys(person));

Object.defineProperty(person, 'name', {
    configurable: false
}); // we cannot delete this name property.

delete person.name;

console.log(person);