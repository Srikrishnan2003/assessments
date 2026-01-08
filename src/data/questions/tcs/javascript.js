// TCS Prime Interview - JavaScript & TypeScript Questions

export const javascriptQuestions = [
    {
        id: 'tcs006',
        question: 'Explain the difference between let, const, and var',
        answer: `• **var**: Function-scoped, hoisted, can be redeclared
• **let**: Block-scoped, hoisted but not initialized (temporal dead zone), cannot be redeclared
• **const**: Block-scoped, must be initialized, cannot be reassigned (but objects/arrays can be mutated)

\`\`\`javascript
if (true) {
  var x = 1;  // accessible outside block
  let y = 2;  // only accessible in block
  const z = 3; // only accessible in block
}
console.log(x); // 1
console.log(y); // ReferenceError
\`\`\``
    },
    {
        id: 'tcs007',
        question: 'What are closures in JavaScript?',
        answer: `A closure is a function that has access to variables in its outer (enclosing) lexical scope, even after the outer function has returned.

\`\`\`javascript
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  }
}
const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
\`\`\``
    },
    {
        id: 'tcs008',
        question: 'Explain promises and async/await',
        answer: `• **Promises**: Objects representing eventual completion/failure of an asynchronous operation
• **async/await**: Syntactic sugar for working with promises, making async code look synchronous

\`\`\`javascript
// Promise
fetch('/api/data')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

// Async/Await
async function fetchData() {
  try {
    const res = await fetch('/api/data');
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
\`\`\``
    },
    {
        id: 'tcs009',
        question: 'What is the event loop in JavaScript?',
        answer: `The event loop is JavaScript's mechanism for handling asynchronous operations. It continuously checks the call stack and task queue, executing callbacks when the stack is empty.

**Order:** Call Stack → Microtasks (Promises) → Macrotasks (setTimeout, setInterval)`
    },
    {
        id: 'tcs010',
        question: 'Explain "this" keyword in JavaScript',
        answer: `\`this\` refers to the context in which a function is called:
• **In methods:** refers to the object
• **Alone:** refers to global object (window in browsers)
• **In arrow functions:** inherits from parent scope
• **In events:** refers to the element that received the event`
    },
    {
        id: 'tcs011',
        question: 'What are the differences between TypeScript and JavaScript?',
        answer: `• TypeScript is a superset of JavaScript with **static typing**
• Provides type checking at **compile time**
• Better IDE support with autocomplete and refactoring
• Supports **interfaces**, **enums**, and **generics**
• Catches errors **before runtime**`
    },
    {
        id: 'tcs012',
        question: 'Explain map, filter, and reduce',
        answer: `• **map**: Transforms each element and returns new array
• **filter**: Returns array with elements that pass a test
• **reduce**: Reduces array to single value

\`\`\`javascript
const nums = [1, 2, 3, 4];
const doubled = nums.map(n => n * 2);        // [2,4,6,8]
const even = nums.filter(n => n % 2 === 0);  // [2,4]
const sum = nums.reduce((acc, n) => acc + n, 0); // 10
\`\`\``
    },
    {
        id: 'tcs058',
        question: 'What is the difference between Promise.all() and Promise.race()?',
        answer: `• **Promise.all()**: Waits for all promises to resolve. Returns array of results. Fails if any promise rejects.
• **Promise.race()**: Returns as soon as first promise settles (resolves or rejects)

\`\`\`javascript
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);

Promise.all([p1, p2]).then(values => console.log(values)); // [1, 2]
Promise.race([p1, p2]).then(value => console.log(value));  // 1
\`\`\``
    },
    {
        id: 'tcs059',
        question: 'Explain debouncing and throttling',
        answer: `• **Debouncing**: Delays function execution until after a wait period. Use for search input.
• **Throttling**: Limits function execution to once per time period. Use for scroll events.

\`\`\`javascript
// Debounce
function debounce(func, delay) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
}

// Throttle
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
\`\`\``
    },
    {
        id: 'tcs060',
        question: 'What is hoisting in JavaScript?',
        answer: `Hoisting is JavaScript's behavior of moving declarations to the top of their scope during compilation.
• Variables declared with \`var\` are hoisted and initialized with \`undefined\`
• Functions are fully hoisted
• \`let\` and \`const\` are hoisted but not initialized (temporal dead zone)

\`\`\`javascript
console.log(x); // undefined (hoisted)
var x = 5;

console.log(y); // ReferenceError (temporal dead zone)
let y = 10;

greet(); // "Hello" (function hoisted)
function greet() { console.log("Hello"); }
\`\`\``
    },
    {
        id: 'tcs061',
        question: 'Explain prototype and prototypal inheritance',
        answer: `JavaScript uses prototypal inheritance where objects inherit from other objects. Every object has a hidden \`[[Prototype]]\` property. When accessing a property, JS looks up the prototype chain.

\`\`\`javascript
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
  return \`Hello, I'm \${this.name}\`;
};

const john = new Person('John');
console.log(john.greet()); // "Hello, I'm John"
\`\`\``
    },
    {
        id: 'tcs062',
        question: 'What are JavaScript modules? Explain import/export',
        answer: `Modules allow splitting code into reusable pieces. ES6 introduced \`import\` and \`export\`.

\`\`\`javascript
// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export default function multiply(a, b) { return a * b; }

// app.js
import multiply, { add, subtract } from './math.js';
import * as math from './math.js';
\`\`\``
    },
    {
        id: 'tcs063',
        question: 'Explain call, apply, and bind',
        answer: `Methods to change the \`this\` context:
• **call**: Invokes function with specific \`this\` and arguments separately
• **apply**: Same as call but arguments as array
• **bind**: Returns new function with bound \`this\`

\`\`\`javascript
const person = { name: 'John' };
function greet(age, city) {
  console.log(\`\${this.name}, \${age}, \${city}\`);
}

greet.call(person, 25, 'NYC');      // John, 25, NYC
greet.apply(person, [25, 'NYC']);   // John, 25, NYC
const boundGreet = greet.bind(person);
boundGreet(25, 'NYC');               // John, 25, NYC
\`\`\``
    },
    {
        id: 'tcs064',
        question: 'What is event delegation?',
        answer: `Event delegation uses event bubbling to handle events at a higher level rather than individual elements. Attach one listener to parent instead of multiple to children.

\`\`\`javascript
document.getElementById('parent').addEventListener('click', (e) => {
  if (e.target.matches('.child')) {
    console.log('Child clicked');
  }
});
\`\`\``
    },
    {
        id: 'tcs065',
        question: 'Explain shallow copy vs deep copy',
        answer: `• **Shallow copy**: Copies first level only. Nested objects are referenced.
• **Deep copy**: Copies all levels recursively. Nested objects are cloned.

\`\`\`javascript
const obj = { a: 1, b: { c: 2 } };

// Shallow copy
const shallow = { ...obj };
shallow.b.c = 3; // Original also changes!

// Deep copy
const deep = JSON.parse(JSON.stringify(obj));
// Or use structuredClone(obj)
\`\`\``
    },
    {
        id: 'tcs149',
        question: 'Explain event bubbling and capturing',
        answer: `Event propagation in DOM has three phases:
1. **Capturing**: Event travels from root to target
2. **Target**: Event reaches target element
3. **Bubbling**: Event bubbles up from target to root

\`\`\`javascript
element.addEventListener('click', handler, false); // Bubbling (default)
element.addEventListener('click', handler, true);  // Capturing

// Stop propagation
event.stopPropagation();
\`\`\``
    },
    {
        id: 'tcs150',
        question: 'What is the difference between == and ===?',
        answer: `• **==** (loose equality): Compares values after type coercion
• **===** (strict equality): Compares values and types, no coercion

\`\`\`javascript
5 == '5'   // true (string coerced to number)
5 === '5'  // false (different types)
null == undefined  // true
null === undefined // false
\`\`\`

Always prefer **===** to avoid unexpected behavior.`
    },
];

export default javascriptQuestions;
