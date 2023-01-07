// Symbol is a primitive type in JS. To generate unique value

const _radius = Symbol(); // Symbol() is not a constructor, it is just a regular
// function. We cannot call the Symbol() using 'new' operator.
const _draw = Symbol();
const _duplicate = Symbol();

// Here we use symbols to create private properties for a class or object
class Circle {
  constructor(radius) {
    // Instance Public property
    // this.radius = radius;

    // Instance Private property (unique symbol)
    this[_radius] = radius;

    // Instance Private method (unique symbol)
    this[_duplicate] = function () {
      console.log("duplicate");
    };
  }

  // Prototypical public method
  move() {
    console.log("move");
  }

  // Prototypical Private method
  // The expression inside the '[]' will be evaluated. And the result will
  // be used as the name of that property or method.
  [_draw]() {
    console.log("draw");
  }
}

const c = new Circle(2);
console.log(c);
// to get symbols in an object
const keys = Object.getOwnPropertySymbols(c);
console.log(keys);

// Note: '_' is just used as convention for representing private members