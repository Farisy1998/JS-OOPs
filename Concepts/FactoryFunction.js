function createCircle(radius, x, y) {
  return {
    radius,
    location: {
      x,
      y,
    },
    draw() {
      console.log("draw");
    },
  };
}

const circle = createCircle(2, 2, 2);
console.log(circle);
console.log(circle.draw());
console.log(circle.constructor);