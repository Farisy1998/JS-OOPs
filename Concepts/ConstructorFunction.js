function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(2); // {}, pointing 'this' to the {}.
console.log(circle);
console.log(circle.draw());
console.log(circle.constructor); // Every obejct has a constructor property.
// which refers to the actual constructor function used to create or construct 
// that object.

// Adding properties
// ----------------------------------
// circle.location = { x: 2, y: 2 };
// OR
const propertyName = "location";
circle[propertyName] = { x: 2, y: 2 };
console.log(circle);

// Removing properties
// ------------------------
// delete circle.location;
// OR
delete circle["location"];
console.log(circle);
