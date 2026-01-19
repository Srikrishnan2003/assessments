// TCS Prime Interview - JavaScript & TypeScript Questions

export const javascriptQuestions = [
  {
    id: 'tcs006',
    question: 'Explain the difference between let, const, and var',
    answer: `### Simple Explanation
Think of variables as labeled boxes where you store data. \`var\`, \`let\`, and \`const\` are three types of boxes with different rules about where they can be accessed and whether their contents can change.

### Real-World Analogy
- **var** is like a company-wide announcement board - everyone in the building (function) can see it, even from different rooms
- **let** is like a private whiteboard in your office room (block) - only people in that room can see it
- **const** is like a framed certificate on the wall - once hung, you can't replace it with a different certificate

### Technical Details
| Feature | var | let | const |
|---------|-----|-----|-------|
| **Scope** | Function-scoped | Block-scoped | Block-scoped |
| **Hoisting** | Hoisted with \`undefined\` | Hoisted but in Temporal Dead Zone | Hoisted but in TDZ |
| **Re-declaration** | ✅ Allowed | ❌ Not allowed | ❌ Not allowed |
| **Re-assignment** | ✅ Allowed | ✅ Allowed | ❌ Not allowed |

### Code Example
\`\`\`javascript
function example() {
  // var is function-scoped
  if (true) {
    var x = 10;  // Accessible outside this block!
    let y = 20;  // Only accessible inside this block
    const z = 30; // Only accessible inside this block, cannot be reassigned
  }
  console.log(x); // 10 - var ignores block boundaries
  // console.log(y); // ReferenceError - let respects block scope
  // console.log(z); // ReferenceError - const respects block scope
}

// const with objects - contents can be modified, but not reassigned
const person = { name: 'John' };
person.name = 'Jane';  // ✅ This works! Modifying property
// person = { name: 'Jane' }; // ❌ Error! Cannot reassign const
\`\`\`

### Why It Matters
Using the right variable declaration prevents bugs. Use \`const\` by default (most restrictive), \`let\` when you need to reassign, and avoid \`var\` in modern code to prevent scope-related bugs.`
  },
  {
    id: 'tcs007',
    question: 'What are closures in JavaScript?',
    answer: `### Simple Explanation
A closure is when a function "remembers" the variables from the place where it was created, even after that place has finished executing. It's like a function carrying a backpack of variables with it wherever it goes.

### Real-World Analogy
Imagine you're at a birthday party (outer function) where you learn a secret password (variable). When you leave the party (function ends), you still remember the password. Later, whenever someone asks you (inner function is called), you can tell them the password because you "closed over" that memory.

### Technical Details
A closure is created when:
1. You have a function inside another function
2. The inner function uses variables from the outer function
3. The inner function is returned or passed elsewhere

The inner function maintains a reference to its lexical environment (the variables available where it was defined).

### Code Example
\`\`\`javascript
// Example 1: Basic closure
function createGreeter(greeting) {
  // 'greeting' is in the outer function's scope
  return function(name) {
    // This inner function "closes over" the greeting variable
    return \`\${greeting}, \${name}!\`;
  };
}

const sayHello = createGreeter('Hello');  // greeting = 'Hello' is remembered
const sayHi = createGreeter('Hi');        // greeting = 'Hi' is remembered

console.log(sayHello('John'));  // "Hello, John!"
console.log(sayHi('Jane'));     // "Hi, Jane!"

// Example 2: Counter using closure (data privacy)
function createCounter() {
  let count = 0;  // Private variable - cannot be accessed directly
  
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount());  // 2
// console.log(count); // Error! 'count' is private, protected by closure
\`\`\`

### Why It Matters
Closures enable:
- **Data privacy** - Create private variables that can't be accessed from outside
- **Function factories** - Create specialized functions with pre-configured values
- **Callbacks** - Maintain state in asynchronous operations
- **Module pattern** - Encapsulate code and expose only what's needed`
  },
  {
    id: 'tcs008',
    question: 'Explain promises and async/await',
    answer: `### Simple Explanation
Promises and async/await are ways to handle operations that take time (like fetching data from a server). Instead of waiting and blocking everything, JavaScript says "I promise to give you the result later" and continues with other work.

### Real-World Analogy
**Promise**: Ordering food at a restaurant. The waiter gives you a "promise" (order ticket). You don't wait at the kitchen - you chat with friends. When food is ready, the waiter either:
- ✅ **Resolves** - Brings your food (success)
- ❌ **Rejects** - Tells you the item is unavailable (failure)

**Async/Await**: Same restaurant, but now you have a VIP buzzer. You \`await\` the buzzer, and when it rings, you get your food. It feels like waiting, but you're not blocking others.

### Technical Details
**Promise States:**
1. **Pending** - Initial state, operation in progress
2. **Fulfilled** - Operation completed successfully
3. **Rejected** - Operation failed

**Async/Await** is syntactic sugar over promises, making asynchronous code look synchronous.

### Code Example
\`\`\`javascript
// Creating a Promise
const orderFood = (dish) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (dish === 'pizza') {
        resolve('🍕 Here is your pizza!');  // Success
      } else {
        reject('Sorry, we only serve pizza');  // Failure
      }
    }, 2000);  // Takes 2 seconds
  });
};

// Using Promise with .then/.catch
orderFood('pizza')
  .then(result => console.log(result))   // "🍕 Here is your pizza!"
  .catch(error => console.log(error));

// Using async/await (cleaner syntax)
async function getFood() {
  try {
    const result = await orderFood('pizza');  // Wait for promise to resolve
    console.log(result);  // "🍕 Here is your pizza!"
  } catch (error) {
    console.log(error);   // Handle rejection
  }
}

// Parallel execution with Promise.all
async function orderMultiple() {
  const [pizza, pasta] = await Promise.all([
    fetchPizza(),
    fetchPasta()
  ]);
  // Both requests run simultaneously, not one after another
}
\`\`\`

### Why It Matters
- Prevents "callback hell" (deeply nested callbacks)
- Makes asynchronous code readable and maintainable
- Essential for API calls, file operations, and any I/O operations
- async/await is the modern standard for handling async operations`
  },
  {
    id: 'tcs009',
    question: 'What is the event loop in JavaScript?',
    answer: `### Simple Explanation
JavaScript is single-threaded (can only do one thing at a time), but the event loop is a mechanism that allows it to handle multiple operations without blocking. It continuously checks if there's work to do and manages the order of execution.

### Real-World Analogy
Imagine a **single waiter at a restaurant** (JavaScript):
1. **Call Stack** = The waiter's hands - can only carry one order at a time
2. **Web APIs** = The kitchen - cooking happens in the background
3. **Callback Queue** = Ready orders on the counter waiting to be served
4. **Event Loop** = The waiter's eyes constantly checking if hands are free AND if there are ready orders

The waiter (event loop) keeps looking: "Are my hands empty? Is there food ready? If yes to both, pick it up and serve!"

### Technical Details
**Execution Order:**
1. **Call Stack** - Synchronous code executes immediately
2. **Microtask Queue** - Promises, queueMicrotask() (higher priority)
3. **Macrotask Queue** - setTimeout, setInterval, I/O, UI rendering

The event loop checks: Call Stack empty? → Process ALL microtasks → Process ONE macrotask → Repeat

### Code Example
\`\`\`javascript
console.log('1: Start');  // Synchronous - runs first

setTimeout(() => {
  console.log('4: setTimeout');  // Macrotask - runs last
}, 0);

Promise.resolve().then(() => {
  console.log('3: Promise');  // Microtask - runs before setTimeout
});

console.log('2: End');  // Synchronous - runs second

// Output order:
// 1: Start
// 2: End
// 3: Promise    (microtask has priority over macrotask)
// 4: setTimeout  (macrotask runs after all microtasks)

// Even with 0ms delay, setTimeout goes to macrotask queue
// and waits for call stack AND microtasks to be empty
\`\`\`

### Why It Matters
Understanding the event loop helps you:
- Predict the order of code execution
- Debug timing-related bugs
- Write efficient asynchronous code
- Avoid blocking the main thread (which freezes the UI)`
  },
  {
    id: 'tcs010',
    question: 'Explain "this" keyword in JavaScript',
    answer: `### Simple Explanation
\`this\` is a special keyword that refers to the "owner" or "context" of the currently executing code. Its value depends on **how** and **where** a function is called, not where it's defined.

### Real-World Analogy
Think of \`this\` as the word "I" in a conversation:
- When **you** say "I am hungry" → "I" refers to you
- When **your friend** says "I am hungry" → "I" refers to your friend
The same word, but different meaning based on who's speaking (context).

### Technical Details
| Context | Value of \`this\` |
|---------|------------------|
| Global scope | \`window\` (browser) / \`global\` (Node.js) |
| Object method | The object that owns the method |
| Regular function | \`window\` or \`undefined\` (strict mode) |
| Arrow function | Inherits from parent scope (lexical) |
| Event handler | The element that received the event |
| \`call/apply/bind\` | Explicitly set by you |

### Code Example
\`\`\`javascript
// 1. Object method - 'this' refers to the object
const person = {
  name: 'John',
  greet() {
    console.log(\`Hello, I am \${this.name}\`);  // this = person
  }
};
person.greet();  // "Hello, I am John"

// 2. Arrow function - inherits 'this' from parent scope
const team = {
  name: 'Dev Team',
  members: ['Alice', 'Bob'],
  showMembers() {
    this.members.forEach(member => {
      // Arrow function inherits 'this' from showMembers
      console.log(\`\${member} is in \${this.name}\`);
    });
  }
};
team.showMembers();  // "Alice is in Dev Team", "Bob is in Dev Team"

// 3. Explicit binding with call/apply/bind
function introduce(greeting) {
  console.log(\`\${greeting}, I am \${this.name}\`);
}
const user = { name: 'Jane' };
introduce.call(user, 'Hi');   // "Hi, I am Jane"
introduce.apply(user, ['Hello']); // "Hello, I am Jane"
const boundIntro = introduce.bind(user);
boundIntro('Hey');  // "Hey, I am Jane"

// 4. Common pitfall - losing 'this'
const obj = {
  name: 'Test',
  delayedLog() {
    setTimeout(function() {
      console.log(this.name);  // undefined! 'this' is window
    }, 100);
    
    // Fix with arrow function
    setTimeout(() => {
      console.log(this.name);  // "Test" - arrow inherits 'this'
    }, 100);
  }
};
\`\`\`

### Why It Matters
Understanding \`this\` is crucial for:
- Working with object-oriented JavaScript
- Event handling in the DOM
- Callbacks and higher-order functions
- Avoiding common bugs in React class components`
  },
  {
    id: 'tcs011',
    question: 'What are the differences between TypeScript and JavaScript?',
    answer: `### Simple Explanation
TypeScript is JavaScript with an extra layer of protection. It adds **type checking** that catches errors before your code runs, like a spell-checker for your code that prevents typos and wrong data types.

### Real-World Analogy
- **JavaScript** is like writing a letter by hand - fast, flexible, but you might make spelling mistakes that readers will notice later
- **TypeScript** is like writing with autocorrect and grammar check - it catches errors as you type, before you send the letter

### Technical Details
| Feature | JavaScript | TypeScript |
|---------|------------|------------|
| **Type System** | Dynamic (runtime) | Static (compile-time) |
| **Error Detection** | At runtime | At compile time |
| **IDE Support** | Basic | Excellent autocomplete |
| **Learning Curve** | Lower | Slightly higher |
| **Compilation** | Runs directly | Compiles to JavaScript |

**TypeScript Exclusive Features:**
- Interfaces and Type aliases
- Enums
- Generics
- Access modifiers (public, private, protected)
- Decorators

### Code Example
\`\`\`typescript
// JavaScript - No type safety, errors found at runtime
function greet(name) {
  return "Hello, " + name.toUpperCase();
}
greet(123);  // Runtime error! 123.toUpperCase() fails

// TypeScript - Errors caught before running
function greet(name: string): string {
  return "Hello, " + name.toUpperCase();
}
greet(123);  // ❌ Compile error: Argument must be string

// Interface - Define object shapes
interface User {
  id: number;
  name: string;
  email?: string;  // Optional property
}

function createUser(user: User): void {
  console.log(user.name);
}

createUser({ id: 1, name: 'John' });  // ✅ Valid
createUser({ id: 1 });  // ❌ Error: 'name' is required

// Generics - Reusable type-safe components
function getFirst<T>(arr: T[]): T {
  return arr[0];
}
getFirst<number>([1, 2, 3]);    // Returns number
getFirst<string>(['a', 'b']);   // Returns string
\`\`\`

### Why It Matters
TypeScript is essential for:
- **Large codebases** - Easier to refactor and maintain
- **Team collaboration** - Clear contracts between modules
- **Bug prevention** - Catch errors before deployment
- **Better developer experience** - Autocomplete and documentation
- **Industry standard** - Used by Angular, React, Next.js`
  },
  {
    id: 'tcs012',
    question: 'Explain map, filter, and reduce',
    answer: `### Simple Explanation
These are array methods that transform data without changing the original array:
- **map** - Transform each item into something new
- **filter** - Keep only items that pass a test
- **reduce** - Combine all items into a single value

### Real-World Analogy
Imagine a **basket of apples**:
- **map** = Paint each apple red → Still have same number of apples, just different color
- **filter** = Remove rotten apples → Fewer apples, only fresh ones remain
- **reduce** = Make apple juice → Many apples become one thing (juice)

### Technical Details
| Method | Returns | Use Case |
|--------|---------|----------|
| **map** | New array of same length | Transform each element |
| **filter** | New array (potentially shorter) | Select elements meeting criteria |
| **reduce** | Single value (any type) | Aggregate/combine elements |

### Code Example
\`\`\`javascript
const products = [
  { name: 'Laptop', price: 1000, inStock: true },
  { name: 'Phone', price: 500, inStock: false },
  { name: 'Tablet', price: 300, inStock: true },
  { name: 'Watch', price: 200, inStock: true }
];

// MAP - Transform each product to just its name
const productNames = products.map(product => product.name);
// ['Laptop', 'Phone', 'Tablet', 'Watch']

// MAP - Apply 10% discount to all prices
const discountedProducts = products.map(product => ({
  ...product,
  price: product.price * 0.9
}));

// FILTER - Get only products in stock
const availableProducts = products.filter(product => product.inStock);
// [{ name: 'Laptop'... }, { name: 'Tablet'... }, { name: 'Watch'... }]

// FILTER - Get products under $400
const affordableProducts = products.filter(product => product.price < 400);
// [{ name: 'Tablet'... }, { name: 'Watch'... }]

// REDUCE - Calculate total value of all products
const totalValue = products.reduce((sum, product) => sum + product.price, 0);
// 2000 (1000 + 500 + 300 + 200)

// REDUCE - Group products by availability
const groupedByStock = products.reduce((groups, product) => {
  const key = product.inStock ? 'available' : 'outOfStock';
  groups[key] = groups[key] || [];
  groups[key].push(product);
  return groups;
}, {});
// { available: [...], outOfStock: [...] }

// CHAINING - Combine methods
const totalInStockValue = products
  .filter(p => p.inStock)         // Keep only in-stock
  .map(p => p.price)              // Extract prices
  .reduce((sum, price) => sum + price, 0);  // Sum them
// 1500 (1000 + 300 + 200)
\`\`\`

### Why It Matters
- **Functional programming** - Write cleaner, more declarative code
- **Immutability** - Original array is never modified
- **Chainability** - Combine operations elegantly
- **Readability** - Code describes what, not how`
  },
  {
    id: 'tcs058',
    question: 'What is the difference between Promise.all() and Promise.race()?',
    answer: `### Simple Explanation
Both methods handle multiple promises, but with different strategies:
- **Promise.all()** - Waits for ALL promises to finish (like waiting for everyone to finish eating before leaving)
- **Promise.race()** - Returns as soon as ANY promise finishes (like a race - first one to finish wins)

### Real-World Analogy
**Promise.all()**: Group project submission - You can only submit when ALL team members have completed their parts. If one person fails, the whole submission fails.

**Promise.race()**: Ordering food from multiple restaurants - You eat from whichever arrives first. You don't wait for all of them.

### Technical Details
| Method | Resolves When | Rejects When |
|--------|---------------|--------------|
| **Promise.all()** | ALL promises resolve | ANY promise rejects |
| **Promise.race()** | FIRST promise settles | FIRST promise settles (if rejected) |
| **Promise.allSettled()** | ALL promises settle | Never rejects |
| **Promise.any()** | FIRST promise resolves | ALL promises reject |

### Code Example
\`\`\`javascript
const fast = new Promise(resolve => setTimeout(() => resolve('Fast'), 100));
const slow = new Promise(resolve => setTimeout(() => resolve('Slow'), 500));
const fails = new Promise((_, reject) => setTimeout(() => reject('Error'), 200));

// Promise.all - Wait for all to complete
Promise.all([fast, slow])
  .then(results => console.log(results));  // ['Fast', 'Slow'] after 500ms

// Promise.all with a failure - Fails fast
Promise.all([fast, slow, fails])
  .catch(error => console.log(error));  // 'Error' - One failure fails all

// Promise.race - First to finish wins
Promise.race([fast, slow])
  .then(result => console.log(result));  // 'Fast' after 100ms

// Practical Example: API with timeout
function fetchWithTimeout(url, timeout) {
  const fetchPromise = fetch(url);
  const timeoutPromise = new Promise((_, reject) => 
    setTimeout(() => reject('Request timed out'), timeout)
  );
  
  return Promise.race([fetchPromise, timeoutPromise]);
}

// Usage: Fetch must complete within 5 seconds
fetchWithTimeout('/api/data', 5000)
  .then(response => response.json())
  .catch(error => console.log(error));  // 'Request timed out' if slow

// Promise.allSettled - Get all results, even failures
Promise.allSettled([fast, fails])
  .then(results => console.log(results));
// [{ status: 'fulfilled', value: 'Fast' }, { status: 'rejected', reason: 'Error' }]
\`\`\`

### Why It Matters
- **Promise.all** - Loading multiple resources that are all required
- **Promise.race** - Implementing timeouts, getting fastest response
- **Promise.allSettled** - When you need all results regardless of failures
- **Promise.any** - When you need just one success from multiple attempts`
  },
  {
    id: 'tcs059',
    question: 'Explain debouncing and throttling',
    answer: `### Simple Explanation
Both are techniques to control how often a function runs:
- **Debouncing** - Wait until user STOPS doing something, then execute once
- **Throttling** - Execute at regular intervals while user is doing something

### Real-World Analogy
**Debouncing**: Elevator doors - They don't close while people keep pressing the button. They wait until no one has pressed for a few seconds, then close.

**Throttling**: Heartbeat monitor - It updates every second, regardless of how many heartbeats occur. It doesn't update on every single heartbeat.

### Technical Details
| Technique | When to Use | Example |
|-----------|-------------|---------|
| **Debounce** | Wait for user to finish | Search input, form validation |
| **Throttle** | Limit execution rate | Scroll events, window resize |

### Code Example
\`\`\`javascript
// DEBOUNCE - Delays execution until user stops typing
function debounce(func, delay) {
  let timeoutId;
  
  return function(...args) {
    // Clear previous timer
    clearTimeout(timeoutId);
    
    // Set new timer - only executes if no new calls for 'delay' ms
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Usage: Search only after user stops typing for 300ms
const searchInput = document.getElementById('search');
const handleSearch = (query) => {
  console.log('Searching for:', query);
  // API call here
};

const debouncedSearch = debounce(handleSearch, 300);
searchInput.addEventListener('input', (e) => debouncedSearch(e.target.value));
// User types "hello" quickly → Only ONE search for "hello"


// THROTTLE - Executes at most once per time period
function throttle(func, limit) {
  let inThrottle = false;
  
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

// Usage: Track scroll position at most every 100ms
const handleScroll = () => {
  console.log('Scroll position:', window.scrollY);
  // Update UI here
};

const throttledScroll = throttle(handleScroll, 100);
window.addEventListener('scroll', throttledScroll);
// Rapid scrolling → Logs every 100ms, not on every pixel


// Comparison visualization:
// User action: |---*-*-**-*---*-*--|  (* = event)
// Debounce:    |---------------X---|  (X = execution after pause)
// Throttle:    |--X----X----X---X--|  (X = execution every interval)
\`\`\`

### Why It Matters
- **Performance** - Prevents excessive function calls
- **API efficiency** - Reduces unnecessary server requests
- **User experience** - Prevents UI lag from rapid events
- **Cost reduction** - Fewer API calls = lower costs`
  },
  {
    id: 'tcs060',
    question: 'What is hoisting in JavaScript?',
    answer: `### Simple Explanation
Hoisting is JavaScript's behavior of moving declarations to the top of their scope before code execution. It's like JavaScript reads your code twice - first to note all declarations, then to execute.

### Real-World Analogy
Imagine a teacher taking attendance before class starts. Even if a student's name is at the bottom of the list, the teacher knows they exist from the beginning. Similarly, JavaScript "knows" about your variables and functions before reaching their actual line.

### Technical Details
| Declaration Type | Hoisted? | Initialized? | Accessible Before Declaration? |
|------------------|----------|--------------|--------------------------------|
| **var** | ✅ Yes | \`undefined\` | ✅ Yes (as undefined) |
| **let/const** | ✅ Yes | ❌ No (TDZ) | ❌ No (ReferenceError) |
| **function declaration** | ✅ Yes | ✅ Yes | ✅ Yes (fully usable) |
| **function expression** | Depends on var/let/const | ❌ No | ❌ No |

**TDZ (Temporal Dead Zone)**: The period between entering scope and the actual declaration where \`let\`/\`const\` variables exist but cannot be accessed.

### Code Example
\`\`\`javascript
// What you write:
console.log(a);  // undefined (var is hoisted and initialized)
console.log(b);  // ReferenceError (let is in TDZ)
sayHello();      // "Hello!" (function is fully hoisted)

var a = 5;
let b = 10;
function sayHello() {
  console.log('Hello!');
}

// How JavaScript interprets it (after hoisting):
var a;                          // Declaration hoisted
function sayHello() {           // Function fully hoisted
  console.log('Hello!');
}
// let b; exists but in TDZ

console.log(a);  // undefined
console.log(b);  // ReferenceError: Cannot access before initialization
sayHello();      // "Hello!"

a = 5;           // Assignment stays in place
let b = 10;      // Declaration and initialization together


// Function Expression vs Function Declaration
sayHi();         // "Hi!" - works
sayBye();        // TypeError: sayBye is not a function

function sayHi() {        // Function declaration - fully hoisted
  console.log('Hi!');
}
var sayBye = function() {  // Function expression - only var is hoisted
  console.log('Bye!');
};

// After hoisting:
var sayBye;  // undefined
function sayHi() { console.log('Hi!'); }  // fully hoisted
// ...
sayBye = function() { console.log('Bye!'); };  // assignment later
\`\`\`

### Why It Matters
- **Avoid bugs** - Understand why code might behave unexpectedly
- **Best practice** - Declare variables at the top of their scope
- **Interview essential** - Common topic to test JavaScript understanding
- **Use let/const** - They have more predictable behavior than var`
  },
  {
    id: 'tcs061',
    question: 'Explain prototype and prototypal inheritance',
    answer: `### Simple Explanation
Every JavaScript object has a hidden link to another object called its "prototype." When you access a property that doesn't exist on an object, JavaScript looks for it in the prototype. This chain of lookups is called prototypal inheritance.

### Real-World Analogy
Think of a **family tree**. If you don't know how to cook (property), you ask your mother. If she doesn't know, she asks her mother (grandmother). This chain continues up the family tree until someone knows or you reach the end. Objects work the same way with prototypes.

### Technical Details
- Every object has \`[[Prototype]]\` (internal property accessed via \`__proto__\`)
- Functions have a \`prototype\` property used when creating objects with \`new\`
- Property lookup goes: Object → Prototype → Prototype's prototype → ... → null

### Code Example
\`\`\`javascript
// Every object inherits from Object.prototype
const obj = { name: 'John' };
console.log(obj.toString());  // Works! Inherited from Object.prototype

// Creating inheritance with constructor functions
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function() {
  console.log(\`\${this.name} makes a sound\`);
};

function Dog(name, breed) {
  Animal.call(this, name);  // Call parent constructor
  this.breed = breed;
}
// Set up prototype chain
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  console.log(\`\${this.name} barks!\`);
};

const myDog = new Dog('Buddy', 'Golden Retriever');
myDog.bark();   // "Buddy barks!" - own method
myDog.speak();  // "Buddy makes a sound" - inherited from Animal

// Prototype chain:
// myDog → Dog.prototype → Animal.prototype → Object.prototype → null


// Modern ES6 Class Syntax (same thing, cleaner syntax)
class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }
  
  start() {
    console.log(\`\${this.brand} is starting\`);
  }
}

class Car extends Vehicle {
  constructor(brand, model) {
    super(brand);  // Call parent constructor
    this.model = model;
  }
  
  drive() {
    console.log(\`\${this.brand} \${this.model} is driving\`);
  }
}

const myCar = new Car('Toyota', 'Camry');
myCar.start();  // "Toyota is starting" - inherited
myCar.drive();  // "Toyota Camry is driving" - own method


// Checking prototype relationships
console.log(myCar instanceof Car);      // true
console.log(myCar instanceof Vehicle);  // true
console.log(Car.prototype.isPrototypeOf(myCar));  // true
\`\`\`

### Why It Matters
- **Memory efficiency** - Methods are shared via prototype, not copied to each instance
- **Inheritance** - Create object hierarchies and extend functionality
- **Understanding classes** - ES6 classes are just syntactic sugar over prototypes
- **Core JavaScript concept** - Essential for understanding how the language works`
  },
  {
    id: 'tcs062',
    question: 'What are JavaScript modules? Explain import/export',
    answer: `### Simple Explanation
Modules are a way to split code into separate files, each with its own scope. You can choose what to share (export) and what to use from other files (import). This keeps code organized and prevents name conflicts.

### Real-World Analogy
Think of modules like different departments in a company:
- **Export** = What each department offers to others (services, products)
- **Import** = What each department needs from others
- Each department has its own private operations (internal code), but shares specific things.

### Technical Details
| Export Type | Syntax | Import Syntax |
|-------------|--------|---------------|
| **Named** | \`export const x = 1\` | \`import { x } from './file'\` |
| **Default** | \`export default func\` | \`import func from './file'\` |
| **Mixed** | Both together | \`import def, { named } from './file'\` |

### Code Example
\`\`\`javascript
// ===== math.js - Exporting =====

// Named exports (can have multiple)
export const PI = 3.14159;
export const E = 2.71828;

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

// Default export (only one per file)
export default function multiply(a, b) {
  return a * b;
}


// ===== app.js - Importing =====

// Import default export (can use any name)
import multiply from './math.js';
import customName from './math.js';  // Same as above, different name

// Import named exports (must use exact names or rename)
import { PI, add } from './math.js';
import { subtract as minus } from './math.js';  // Rename

// Import everything as namespace object
import * as MathUtils from './math.js';
console.log(MathUtils.PI);       // 3.14159
console.log(MathUtils.add(2,3)); // 5
console.log(MathUtils.default(2,3)); // 6 (default export)

// Import both default and named
import multiply, { PI, add } from './math.js';


// ===== Practical Example: React Component =====

// Button.js
export const BUTTON_SIZES = {
  small: 'sm',
  medium: 'md',
  large: 'lg'
};

export function Button({ size, children }) {
  return <button className={BUTTON_SIZES[size]}>{children}</button>;
}

export default Button;  // Common pattern: export component as default


// App.js
import Button, { BUTTON_SIZES } from './Button';
// or
import Button from './Button';  // Just the component


// ===== Dynamic Import (Code Splitting) =====
async function loadFeature() {
  const module = await import('./heavyFeature.js');
  module.default();  // Use the default export
  module.namedFunc(); // Use named export
}
\`\`\`

### Why It Matters
- **Code organization** - Split large apps into manageable pieces
- **Reusability** - Import shared utilities across files
- **Encapsulation** - Keep internal details private
- **Tree shaking** - Bundlers can remove unused named exports
- **Code splitting** - Load modules on demand for better performance`
  },
  {
    id: 'tcs063',
    question: 'Explain call, apply, and bind',
    answer: `### Simple Explanation
These are methods to control what \`this\` refers to when calling a function:
- **call** - Invoke function immediately with specified \`this\` and arguments one by one
- **apply** - Same as call, but arguments as an array
- **bind** - Create a new function with \`this\` permanently set (doesn't invoke immediately)

### Real-World Analogy
Imagine you're an actor who can play different roles:
- **call** - "Become this character and say these lines NOW"
- **apply** - "Become this character and say these lines (from this script page) NOW"
- **bind** - "Create a version of yourself that's ALWAYS this character" (for later use)

### Technical Details
| Method | Invokes Immediately? | Arguments Format | Returns |
|--------|---------------------|------------------|---------|
| **call** | ✅ Yes | Comma-separated | Function result |
| **apply** | ✅ Yes | Array | Function result |
| **bind** | ❌ No | Comma-separated | New function |

### Code Example
\`\`\`javascript
const person = {
  name: 'John',
  age: 30
};

const anotherPerson = {
  name: 'Jane',
  age: 25
};

function introduce(greeting, punctuation) {
  console.log(\`\${greeting}, I am \${this.name} and I am \${this.age}\${punctuation}\`);
}

// CALL - Invoke immediately, arguments comma-separated
introduce.call(person, 'Hello', '!');
// "Hello, I am John and I am 30!"

introduce.call(anotherPerson, 'Hi', '.');
// "Hi, I am Jane and I am 25."


// APPLY - Invoke immediately, arguments as array
introduce.apply(person, ['Hey', '?']);
// "Hey, I am John and I am 30?"

// Useful for spreading array into function arguments
const args = ['Hello', '!'];
introduce.apply(person, args);
// Same as: introduce.call(person, ...args) in modern JS


// BIND - Create new function, doesn't invoke immediately
const johnsIntro = introduce.bind(person);
johnsIntro('Hello', '!');  // "Hello, I am John and I am 30!"

// Partial application - pre-fill some arguments
const johnsHello = introduce.bind(person, 'Hello');
johnsHello('!');  // "Hello, I am John and I am 30!"
johnsHello('?');  // "Hello, I am John and I am 30?"


// PRACTICAL EXAMPLE: Borrowing methods
const numbers = [5, 2, 8, 1, 9];

// Array-like objects don't have array methods
const arrayLike = { 0: 'a', 1: 'b', 2: 'c', length: 3 };

// Borrow array's slice method
const realArray = Array.prototype.slice.call(arrayLike);
console.log(realArray);  // ['a', 'b', 'c']

// Math.max doesn't accept arrays, use apply
const max = Math.max.apply(null, numbers);  // 9
// Modern alternative: Math.max(...numbers)


// PRACTICAL EXAMPLE: Event handlers with bind
class Button {
  constructor(label) {
    this.label = label;
  }
  
  handleClick() {
    console.log(\`\${this.label} clicked\`);
  }
}

const btn = new Button('Submit');
// Without bind: 'this' would be the DOM element, not the Button instance
document.querySelector('button').addEventListener(
  'click', 
  btn.handleClick.bind(btn)  // Ensure 'this' is always btn
);
\`\`\`

### Why It Matters
- **Method borrowing** - Use methods from other objects
- **Event handling** - Preserve \`this\` context in callbacks
- **Partial application** - Create specialized functions
- **Explicit context** - Control function execution context`
  },
  {
    id: 'tcs064',
    question: 'What is event delegation?',
    answer: `### Simple Explanation
Event delegation is attaching ONE event listener to a parent element instead of MANY listeners to child elements. When a child is clicked, the event "bubbles up" to the parent, which handles it. It's more efficient and works for dynamically added children.

### Real-World Analogy
Instead of giving a phone to each employee (individual listeners) to receive calls, you have ONE receptionist (parent listener) who receives all calls and transfers them to the right person based on the caller's request (event target).

### Technical Details
**Event Bubbling**: When an event occurs on an element, it first runs handlers on that element, then on its parent, then all the way up.

**Benefits:**
- Fewer event listeners = better memory usage
- Works for dynamically added elements
- Simpler code maintenance

### Code Example
\`\`\`javascript
// WITHOUT delegation - Multiple listeners (inefficient)
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    console.log('Button clicked:', e.target.textContent);
  });
});
// Problem: New buttons added later won't have listeners!


// WITH delegation - Single listener (efficient)
const container = document.getElementById('button-container');

container.addEventListener('click', (e) => {
  // Check if the clicked element is a button
  if (e.target.matches('.btn')) {
    console.log('Button clicked:', e.target.textContent);
  }
  
  // Handle different button types
  if (e.target.matches('.btn-delete')) {
    handleDelete(e.target.dataset.id);
  }
  if (e.target.matches('.btn-edit')) {
    handleEdit(e.target.dataset.id);
  }
});

// Now dynamically added buttons automatically work!
const newButton = document.createElement('button');
newButton.className = 'btn';
newButton.textContent = 'New Button';
container.appendChild(newButton);  // This button will trigger the listener


// HTML Structure
/*
<div id="button-container">
  <button class="btn btn-delete" data-id="1">Delete</button>
  <button class="btn btn-edit" data-id="1">Edit</button>
  <button class="btn btn-delete" data-id="2">Delete</button>
  <button class="btn btn-edit" data-id="2">Edit</button>
</div>
*/


// PRACTICAL EXAMPLE: Todo List
const todoList = document.getElementById('todo-list');

todoList.addEventListener('click', (e) => {
  const li = e.target.closest('li');  // Find parent li element
  if (!li) return;
  
  if (e.target.matches('.delete-btn')) {
    li.remove();
  }
  
  if (e.target.matches('.complete-btn')) {
    li.classList.toggle('completed');
  }
});

// Add new todos - they automatically have click handling
function addTodo(text) {
  todoList.innerHTML += \`
    <li>
      \${text}
      <button class="complete-btn">✓</button>
      <button class="delete-btn">✕</button>
    </li>
  \`;
}
\`\`\`

### Why It Matters
- **Performance** - One listener instead of hundreds
- **Dynamic elements** - Automatically handles new elements
- **Cleaner code** - Centralized event handling
- **Memory efficient** - Fewer event listeners = less memory usage
- **Essential for SPAs** - React/Vue use this concept internally`
  },
  {
    id: 'tcs065',
    question: 'Explain shallow copy vs deep copy',
    answer: `### Simple Explanation
When copying objects:
- **Shallow copy** - Copies only the first level; nested objects are still shared (linked)
- **Deep copy** - Copies everything at all levels; completely independent clone

### Real-World Analogy
**Shallow copy**: Photocopying a folder. You get copies of the papers inside, but if papers have sticky notes attached, both folders share the same sticky notes. Change a sticky note, both folders reflect it.

**Deep copy**: Retyping everything from scratch. You have a completely independent copy. Changes to one don't affect the other.

### Technical Details
| Type | First Level | Nested Objects | Speed |
|------|-------------|----------------|-------|
| **Shallow** | Copied | Shared (reference) | Fast |
| **Deep** | Copied | Copied (independent) | Slower |

### Code Example
\`\`\`javascript
const original = {
  name: 'John',
  age: 30,
  address: {
    city: 'NYC',
    zip: '10001'
  },
  hobbies: ['reading', 'coding']
};

// ===== SHALLOW COPY Methods =====

// 1. Spread operator
const shallow1 = { ...original };

// 2. Object.assign
const shallow2 = Object.assign({}, original);

// 3. Array spread (for arrays)
const arrShallow = [...original.hobbies];

// Testing shallow copy
shallow1.name = 'Jane';              // ✅ Independent
shallow1.address.city = 'LA';        // ❌ Changes original too!

console.log(original.name);          // 'John' (unchanged)
console.log(original.address.city);  // 'LA' (changed!)


// ===== DEEP COPY Methods =====

// 1. JSON.parse(JSON.stringify()) - Simple but limited
const deep1 = JSON.parse(JSON.stringify(original));
// ⚠️ Limitations: Loses functions, undefined, Date becomes string, circular refs fail

// 2. structuredClone() - Modern built-in (recommended)
const deep2 = structuredClone(original);
// ✅ Handles most types, circular references
// ❌ Doesn't copy functions, Symbol, DOM elements

// 3. Custom recursive function
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  
  if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item));
  }
  
  const cloned = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloned[key] = deepClone(obj[key]);
    }
  }
  return cloned;
}

// Testing deep copy
deep2.name = 'Bob';           // Independent
deep2.address.city = 'Chicago'; // Also independent!

console.log(original.name);          // 'John' (unchanged)
console.log(original.address.city);  // 'LA' (unchanged from deep copy)


// ===== VISUAL COMPARISON =====
/*
Original:      Shallow Copy:    Deep Copy:
┌─────────┐    ┌─────────┐     ┌─────────┐
│ name    │    │ name    │     │ name    │
│ age     │    │ age     │     │ age     │
│ address ──┐  │ address ──┐   │ address ──┐
└─────────┘ │  └─────────┘ │   └─────────┘ │
            ▼              ▼               ▼
         ┌─────┐        ┌─────┐        ┌─────┐
         │city │        │SAME │        │city │ (separate)
         │zip  │        │     │        │zip  │
         └─────┘        └─────┘        └─────┘
         (shared between original and shallow)
*/
\`\`\`

### Why It Matters
- **State management** - React/Redux require immutability
- **Avoid bugs** - Unintended mutations cause hard-to-track bugs
- **Data safety** - Keep original data intact
- **Performance** - Choose shallow when deep isn't needed`
  },
  {
    id: 'tcs149',
    question: 'Explain event bubbling and capturing',
    answer: `### Simple Explanation
When an event occurs on an element, it doesn't just trigger on that element. It travels through the DOM in two phases:
- **Capturing** - Event goes DOWN from window to the target element
- **Bubbling** - Event goes UP from target back to window

### Real-World Analogy
Imagine dropping a pebble in water:
- **Capturing** - The pebble traveling DOWN through air to the water (rarely focused on)
- **Target** - The pebble hitting the water
- **Bubbling** - Ripples spreading OUT from the impact point (most common focus)

### Technical Details
**Event Propagation Order:**
1. **Capturing Phase** - Root → Parent → Target (downward)
2. **Target Phase** - Event reaches the target element
3. **Bubbling Phase** - Target → Parent → Root (upward)

By default, event listeners trigger during the **bubbling phase**.

### Code Example
\`\`\`html
<div id="grandparent">
  Grandparent
  <div id="parent">
    Parent
    <button id="child">Child</button>
  </div>
</div>
\`\`\`

\`\`\`javascript
const grandparent = document.getElementById('grandparent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');

// BUBBLING (default) - third argument false or omitted
grandparent.addEventListener('click', () => console.log('Grandparent - Bubble'));
parent.addEventListener('click', () => console.log('Parent - Bubble'));
child.addEventListener('click', () => console.log('Child - Bubble'));

// Click on child button:
// Output: Child - Bubble → Parent - Bubble → Grandparent - Bubble


// CAPTURING - third argument true
grandparent.addEventListener('click', () => console.log('Grandparent - Capture'), true);
parent.addEventListener('click', () => console.log('Parent - Capture'), true);
child.addEventListener('click', () => console.log('Child - Capture'), true);

// Click on child button:
// Output: Grandparent - Capture → Parent - Capture → Child - Capture
//         → Child - Bubble → Parent - Bubble → Grandparent - Bubble


// STOP PROPAGATION - Stop event from continuing
parent.addEventListener('click', (e) => {
  console.log('Parent clicked');
  e.stopPropagation();  // Event stops here, doesn't reach grandparent
});


// PREVENT DEFAULT + STOP PROPAGATION
// stopPropagation = stops bubbling/capturing
// preventDefault = stops default browser action (like form submit, link navigation)

document.querySelector('a').addEventListener('click', (e) => {
  e.preventDefault();     // Don't navigate to href
  e.stopPropagation();    // Don't trigger parent handlers
  console.log('Link clicked but navigation prevented');
});


// PRACTICAL EXAMPLE: Modal close on outside click
const modal = document.getElementById('modal');
const modalContent = document.querySelector('.modal-content');

modal.addEventListener('click', () => {
  modal.style.display = 'none';  // Close when clicking overlay
});

modalContent.addEventListener('click', (e) => {
  e.stopPropagation();  // Don't close when clicking inside modal
});
\`\`\`

### Why It Matters
- **Event delegation** - Use bubbling to handle events efficiently
- **Complex UIs** - Control event flow in nested components
- **Modal/Dropdown** - Close on outside click patterns
- **Form handling** - Prevent default submission while handling custom logic`
  },
  {
    id: 'tcs150',
    question: 'What is the difference between == and ===?',
    answer: `### Simple Explanation
Both compare values, but:
- **== (loose equality)** - Compares values AFTER converting them to the same type
- **=== (strict equality)** - Compares values AND types, no conversion

### Real-World Analogy
**== (loose)**: "Is 5 dollars equal to 5 euros?" → "After conversion, yes, they're both money worth 5"

**=== (strict)**: "Is this exact 5 dollar bill the same as this 5 euro note?" → "No, they're different currencies"

### Technical Details
| Comparison | == (Loose) | === (Strict) |
|------------|------------|--------------|
| \`5 == '5'\` | true ✅ | false ❌ |
| \`0 == false\` | true ✅ | false ❌ |
| \`null == undefined\` | true ✅ | false ❌ |
| \`NaN == NaN\` | false ❌ | false ❌ |
| \`[] == false\` | true ✅ | false ❌ |

### Code Example
\`\`\`javascript
// ===== LOOSE EQUALITY (==) - Type Coercion =====

// String to Number conversion
console.log(5 == '5');        // true - '5' becomes 5
console.log(100 == '100');    // true

// Boolean to Number conversion
console.log(1 == true);       // true - true becomes 1
console.log(0 == false);      // true - false becomes 0
console.log('' == false);     // true - '' becomes 0, false becomes 0

// null and undefined
console.log(null == undefined);  // true - special case
console.log(null == 0);          // false - null only equals undefined

// Weird cases
console.log([] == false);     // true - [] → '' → 0
console.log([] == ![]);       // true - ![] is false, [] == false
console.log([] == []);        // false - different object references!


// ===== STRICT EQUALITY (===) - No Coercion =====

console.log(5 === '5');           // false - different types
console.log(5 === 5);             // true - same type and value
console.log(true === 1);          // false - different types
console.log(null === undefined);  // false - different types

// Objects compare by reference
const a = [1, 2];
const b = [1, 2];
const c = a;

console.log(a === b);  // false - different objects in memory
console.log(a === c);  // true - same reference


// ===== BEST PRACTICES =====

// ❌ Avoid - hard to predict behavior
if (userInput == 1) { }           
if (value == null) { }  // Only exception where == is okay

// ✅ Prefer - explicit and predictable
if (userInput === 1) { }
if (value === null || value === undefined) { }


// ===== SPECIAL CASES =====

// Checking for null OR undefined (valid use of ==)
function isNullOrUndefined(value) {
  return value == null;  // true for both null and undefined
}

// NaN is weird
console.log(NaN === NaN);    // false!
console.log(Number.isNaN(NaN));  // true - use this instead

// Object comparison
const obj1 = { a: 1 };
const obj2 = { a: 1 };
console.log(obj1 === obj2);  // false (different references)
console.log(JSON.stringify(obj1) === JSON.stringify(obj2));  // true (compare content)
\`\`\`

### Why It Matters
- **Predictability** - === has no surprises
- **Bug prevention** - Avoid unexpected type coercion
- **Code quality** - ESLint rules recommend ===
- **Industry standard** - Professional code uses === almost exclusively`
  },
];

export default javascriptQuestions;
