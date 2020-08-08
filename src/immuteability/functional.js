console.log("Hello World!");

function sayHello() {
  return "Hello World";
}

// fn is an alias for sayHello
let fn = sayHello;
// we can call just like sayHello
fn();

// we can pass functions into other functions as reference
function greet(fnMessage) {
  console.log(fnMessage());
}

// greet executes sayHello
greet(sayHello);

// functions can also return functions
function sayHelloFn() {
  return function () {
    return "Hello World";
  };
}

let fn2 = sayHelloFn();
let message = fn();

// greet and sayHello are higher order funciton
let numbers = [1, 2, 3];

// examples of higher order functions
numbers.map((number) => number * 2);
setTimeout(() => console.log("hi"), 200);

// non functional programming
let input = "  JavaScript:   ";
let output = "<div>" + input.trim() + "</div>";

// functional
const trim = (str) => str.trim();
const wrapInDiv = (str) => `<div>${str}</div>`;
const toLowerCase = (str) => str.toLowerCase();
// function composition, but unreadable and many brackets
const result = wrapInDiv(wrapInDiv(trim(input)));

// 12
// lodash
import { compose, pipe } from "lodash/fp";

// compose is an higher order fucntion
const transform = compose(wrapInDiv, toLowerCase, trim);
transform(input);
console.log(input);
// or in the way how the code is executed
const transform_pipe = pipe(trim, toLowerCase, wrapInDiv);
transform_pipe(input);

// 13 currying
// function much like wrap in div => parametrise
const wrapInSpan = (str) => `<span>${str}</span>`;
const wrap = (type, str) => `<${type}>${str}</${type}>`;

const transform_wrap = pipe(trim, toLowerCase, wrap);
console.log(transform_wrap(input));

// currying example
function add(a) {
  return function (b) {
    return a + b;
  };
}
console.log(add(1)(5));
// currying ES6
const add2 = (a) => (b) => a + b;

const wrapCurry = (type) => (str) => `<${type}>${str}</${type}>`;

const transform_curry = pipe(trim, toLowerCase, wrapCurry("div"));
console.log(transform_curry(input));

// Pure fucntions
// Same args => same results
// no radnom values, data/time, no global state (DOM, files. db, etc)
// benefits
// self documenting, easily testable, concurrency, cacheable

// Immuteability
// once created cannot be changed
// object are mutable
// const prevents reassignment
// benefits:
// predicatbility, faster change detection, concurrency
// cons performance, memory, overhead,
