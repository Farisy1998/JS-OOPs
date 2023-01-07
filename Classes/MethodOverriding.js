class Shape{
    move() {
        console.log('move');
    }
}

class Circle extends Shape{
    move() {
        super.move(); // calling super class move() method
        console.log('circle move');
    }
}

const c = new Circle();
c.move();
