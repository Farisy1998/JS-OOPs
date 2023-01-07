// use weak maps to store private members
const _radius = new WeakMap();
const _draw = new WeakMap();
const _duplicate = new WeakMap();

 // We can also use a sungle map to set all properties and methods in a
 // class with key as the current object and value as an object holding
 // all properties and methods. But it will be a bad practies and make
 // the code more polluted. So, we prefer to use the above approch.

class Circle{
    constructor(radius) {
        _radius.set(this, radius);
        
        // using regular function as value
        _draw.set(this, function () {
            console.log('draw', this);
        });

        // using arrow function as value
        _duplicate.set(this, () => {
            console.log('duplicate', this);
        });
    }

    getProperties() {
        console.log(_draw.get(this)()); // shows undefined. Becuz, by default
        // ES6 class bodies are executed in strict mode. Whether we declared
        // strict mode at the top of the file or not.

        console.log(_duplicate.get(this)()); // shows circle object. Becuz,
        // while using arrow function. The arrow function allows to inherits 
        // the 'this' from the containing function or class or object.
    }
}
const c = new Circle(2);
c.getProperties();