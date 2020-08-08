const person = { name: "john" };
const updated = Object.assign({}, person, { name: "bob", age: 40 });
console.log(updated);
// spread operator
const updated2 = { ...person, name: "Bob" };
console.log(updated2);
// shallow copy
const person2 = {
  name: "John",
  address: {
    country: "US",
    city: "San francisco",
  },
};
// same address
const updated3 = { ...person2, name: "Bob" };
updated3.address.city = "New York";
console.log(person2);

const person3 = {
  name: "John",
  address: {
    country: "US",
    city: "San francisco",
  },
};

const updated4 = {
  ...person3,
  name: "Bob",
  address: { ...person.address, city: "New york" },
};

console.log(person3);
