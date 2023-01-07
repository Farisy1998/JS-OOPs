// Value types or primitive type
// ------------------------------------
// number, string, boolean, symbol, undefined, null.

// Reference types
// ----------------------
// Objects, Functions, Arrays.

// Copy by value
// ------------------
let x = 10;
let y = x; // value is copied

x = 20;

console.log(x);
console.log(y);

// Copy by reference
// -------------------------
let a = { value: 10 };
let b = a; // reference is copied

a.value = 20;

console.log(a);
console.log(b);