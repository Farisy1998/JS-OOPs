
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

// Overriding duplicate method from Shape
Circle.prototype.duplicate = function () {
    Shape.prototype.duplicate(); // calling shapeBase duplicate method
    console.log('duplicate circle');
}

function Rectangle(size, color) {
    Shape.call(this, color);
    this.size = size;
}

extend(Rectangle, Shape);

// Overriding duplicate method from Shape
Rectangle.prototype.duplicate = function () {
    console.log('duplicate rectangle');
}

const circle = new Circle(2, 'red');

const rectangle = new Rectangle(4, 'magenta');