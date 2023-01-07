// Note: Every function in JS is an object.

// Shape Constructor.
function Shape(color) {
  // parent is objectBase (ie, Object.prototype)
  this.color = color;
}

// Setting duplicate method as prototypical method of Shape.
Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

// Intermediate function for inheritance.
function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype); // before this
    // assignment the parent of Child was objectBase (ie, Object.prototype). 
    // Now the parent of Child is the actual Parent (ie, Parent.prototype).

    // Here is a problem comes.
    // When we set the Child.prototype to Parent.prototype. The Child's 
    // constructor function is no longer accessible from Child.prototype.constructor, 
    // insted the Parent constructor function is get accessed. To solve this 
    // problem, we reset the Child.prototype.constructor to the Child's 
    // constructor function.
    // So,
    Child.prototype.constructor = Child;
}


// Circle Constructor.
function Circle(radius, color) { // parent is objectBase (ie, Object.prototype)

  // Shape(color); // this call won't work properly. Becuz, when we call the
  // Shape constructor like this a problem will happen. ie,
  // when we call the Shape constructor with a color, inside the Shape
  // constructor the this won't points to the current object. ie, the
  // circle object. Insted it will points to the global object (ie, window
  // object in browser or global object in node), and set the color property
  // to the window object. ie, the 'this' inside the Shape constructor will
  // points to the global object.

    Shape.call(this, color); // calling the super constructor. When we call 
    // the Shape constructor with a call method. 'this' will points to the 
    // current object. ie, the circle object.

  this.radius = radius;
}

extend(Circle, Shape);

// Setting draw method as prototypical method of Circle.
Circle.prototype.draw = function () {
  console.log("draw");
};

// Squre Constructor.
function Squre(size) {
    this.size = size;
}

extend(Squre, Shape);

const circle = new Circle(2, "green"); // parent is circleBase (ie, Circle.prototype)
// Actually the 'circle' object inheritance look like,
//
// circle <----- circleBase <------- shapeBase <-------- objectBase

const shape = new Shape(); // parent is shapeBase (ie, Shape.prototype);
// 'shape' object inheritance look like,
//
// shape <----- shapeBase <------- objectBase

// Note: Every object in JS has a or inherits a prototype object or prototype
// property.And the root prototype or root inheritance of every object is
// objectBase prototype.

const squre = new Squre(4);