
// Favor Composition or Mixins over Inheritance. Means, it is better to use
// mixins or composition over inheritance. Becuz, complexity of the application
// or program considerablly increases with increasing inheritance hierarchy.
const canEat = {
    eat: function () {
        console.log('eating');
    }
};

const canWalk = {
    walk: function () {
        console.log('walking');
    }
};

const canSwim = {
    swim: function () {
        console.log('swiming');
    }
};

// Mixing or Composing function
function mixin(Target, ...sources) {
  // composing to target constructor's prototype
  Object.assign(Target.prototype, ...sources);
}

// If we diorectlly copying the objects to another object. Use this syntax,
// const person = Object.assign({}, canEat, canWalk); // composing to a new object
// console.log(person);

// OR with constructors
function Person() {
    // ...
}

mixin(Person, canEat, canWalk); 
const person = new Person();
console.log(person);


function Goldfish() {
    // ...
}

mixin(Goldfish, canEat, canSwim);
const goldfish = new Goldfish();
console.log(goldfish);