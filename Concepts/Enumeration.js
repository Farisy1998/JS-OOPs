const person = {
  name: "Farisy",
  age: 24,
  single: true,
  city: "Kochi",
  walk() {
    console.log("walk");
  },
};

for (let key in person)
    if (typeof person[key] !== "function")
        console.log(key + ": " + person[key]);

// To get all the keys in an object
// ---------------------------------------
const keys = Object.keys(person);
console.log(keys);

// Check if a peroperty is exist in an object
// ------------------------------------------------
if ("city" in person)
    console.log("person has a city");
