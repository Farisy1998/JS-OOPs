const _radius = new WeakMap();

class Circle{
    constructor(radius) {
        _radius.set(this, radius);
    }

    set radius(value) {
        if (value <= 0) throw new Error('Invalid radius');
        _radius.set(this, value);
    }

    get radius() {
        return _radius.get(this);
    }
}

const c = new Circle(2);
console.log(c.radius);
c.radius = 10;
console.log(c.radius);