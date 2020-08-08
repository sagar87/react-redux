const person = { name: "john" };
const updated = Object({}, person, { name: "bob", age: 40 });
console.log(updated);
// spread operator
const updated2 = { ...person, name: "Bob" };
console.log(updated2);
