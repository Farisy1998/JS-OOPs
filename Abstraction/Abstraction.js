function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 1, y: 1 }; // hidden property

  let computeOptimumLocation = function (factor) { // hidden method
    // ...
      console.log("Inside computeOptimumLocation()");
  };
  this.draw = function () {
    let x, y; // scope to this draw function (temperory)

    computeOptimumLocation(1.0); /// closure of the draw function (life of parent function)

    console.log("draw");
  };
}

const circle = new Circle(2);
console.log(circle.draw());