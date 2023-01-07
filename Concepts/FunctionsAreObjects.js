function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

console.log(Circle.name);
console.log(Circle.length);
console.log(Circle.constructor); // returns - Function() { [code...] }

// When the JS calls the Circle constructor function, the call will
// transilated into a call to the actual in-build Function().
// Like,
const Circle1 = new Function(
  "radius",
  `this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };`
);

// Now we can create an object for the Circle1
const circle = new Circle1(1);
console.log(circle);
console.log(circle.draw());
