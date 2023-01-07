function Person() {
  let name = "";

  let age = 0;

  Object.defineProperty(this, "name", {
    set: function (value) {
      name = value;
    },
    get: function () {
      return name;
    },
  });

  Object.defineProperty(this, "age", {
    set: function (value) {
      age = value;
    },
    get: function () {
      return age;
    },
  });

  this.walk = function () {
    console.log("walk");
  };
}

const person1 = new Person();
person1.name = "Farisy";
person1.age = 24;
console.log(person1.name);
console.log(person1.age);
console.log(person1.walk());

const person2 = new Person();
person2.name = 'John';
person2.age = 25;
console.log(person2.name);
console.log(person2.age);
console.log(person2.walk());