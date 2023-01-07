function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function () {
    console.log('duplicate');
}

function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Circle(radius, color) {
    Shape.call(this, color);
    this.radius = radius;
}

extend(Circle, Shape);

Circle.prototype.duplicate = function () {
    console.log('duplicate circle');
}

function Squre(size, color) {
    Shape.call(this, color);
    this.size = size;
}

extend(Squre, Shape);

Squre.prototype.duplicate = function () {
    console.log('duplicate squre');
}

function Triangle(base, height, color) {
    Shape.call(this, color);
    this.base = base;
    this.height = height;
}

extend(Triangle, Shape);

Triangle.prototype.duplicate = function () {
    console.log('duplicate triangle');
}

const shapes = [
    new Circle(2, 'green'),
    new Squre(4, 'red'),
    new Triangle(3, 4, 'blue')
];

for (let shape of shapes) {
    console.log(shape.duplicate()); // Polymorphism takes place here. ie, 
    // object specific duplicate method is called.
}

