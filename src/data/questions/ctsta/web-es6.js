// Cognizant GenC - Web Competency: ES6+ Features Questions

export const webEs6Questions = [
    {
        id: 'ctsta-es6-001',
        question: 'Explain arrow functions and how they differ from regular functions.',
        answer: `### Arrow Functions

\`\`\`javascript
// Regular function
function add(a, b) {
    return a + b;
}

// Arrow function
const add = (a, b) => a + b;

// With single parameter (no parentheses needed)
const square = x => x * x;

// With no parameters
const greet = () => 'Hello!';

// With function body
const process = (x) => {
    const result = x * 2;
    return result + 10;
};

// KEY DIFFERENCE: 'this' binding
const obj = {
    name: 'Test',
    
    // Regular function - has its own 'this'
    regular: function() {
        console.log(this.name);  // 'Test'
    },
    
    // Arrow function - inherits 'this' from parent scope
    arrow: () => {
        console.log(this.name);  // undefined (or window.name)
    },
    
    // Use case: callbacks
    delayedGreet() {
        // Arrow keeps 'this' context
        setTimeout(() => {
            console.log(this.name);  // 'Test' ✓
        }, 100);
        
        // Regular function loses 'this'
        setTimeout(function() {
            console.log(this.name);  // undefined ✗
        }, 100);
    }
};
\`\`\`

### Comparison
| Feature | Regular Function | Arrow Function |
|---------|------------------|----------------|
| \`this\` binding | Own \`this\` | Lexical (inherited) |
| \`arguments\` object | Yes | No |
| Constructor | Yes (\`new\`) | No |
| \`prototype\` | Yes | No |`
    },
    {
        id: 'ctsta-es6-002',
        question: 'Explain Array methods: map, filter, reduce with examples.',
        answer: `### Map, Filter, Reduce

\`\`\`javascript
const numbers = [1, 2, 3, 4, 5];

// MAP - Transform each element
const doubled = numbers.map(n => n * 2);
// [2, 4, 6, 8, 10]

// Objects
const users = [{name: 'Alice', age: 25}, {name: 'Bob', age: 30}];
const names = users.map(user => user.name);
// ['Alice', 'Bob']


// FILTER - Keep elements that pass test
const evens = numbers.filter(n => n % 2 === 0);
// [2, 4]

const adults = users.filter(user => user.age >= 18);


// REDUCE - Accumulate to single value
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
// 15

// Find max
const max = numbers.reduce((a, b) => a > b ? a : b);
// 5

// Group by property
const items = [
    {type: 'fruit', name: 'apple'},
    {type: 'vegetable', name: 'carrot'},
    {type: 'fruit', name: 'banana'}
];

const grouped = items.reduce((acc, item) => {
    if (!acc[item.type]) acc[item.type] = [];
    acc[item.type].push(item.name);
    return acc;
}, {});
// { fruit: ['apple', 'banana'], vegetable: ['carrot'] }


// CHAINING
const result = numbers
    .filter(n => n > 2)      // [3, 4, 5]
    .map(n => n * 2)         // [6, 8, 10]
    .reduce((a, b) => a + b); // 24
\`\`\``
    },
    {
        id: 'ctsta-es6-003',
        question: 'Explain destructuring in JavaScript with examples.',
        answer: `### Destructuring

\`\`\`javascript
// ARRAY DESTRUCTURING
const colors = ['red', 'green', 'blue'];
const [first, second, third] = colors;
// first = 'red', second = 'green', third = 'blue'

// Skip elements
const [primary, , tertiary] = colors;
// primary = 'red', tertiary = 'blue'

// Rest operator
const [head, ...rest] = colors;
// head = 'red', rest = ['green', 'blue']

// Default values
const [a, b, c = 'default'] = ['x', 'y'];
// c = 'default'

// Swap variables
let x = 1, y = 2;
[x, y] = [y, x];
// x = 2, y = 1


// OBJECT DESTRUCTURING
const user = { name: 'Alice', age: 25, city: 'NYC' };
const { name, age } = user;
// name = 'Alice', age = 25

// Rename variables
const { name: userName, age: userAge } = user;
// userName = 'Alice', userAge = 25

// Default values
const { name, country = 'USA' } = user;
// country = 'USA' (not in object)

// Nested destructuring
const data = { user: { profile: { email: 'a@b.com' } } };
const { user: { profile: { email } } } = data;
// email = 'a@b.com'


// FUNCTION PARAMETERS
function greet({ name, age = 18 }) {
    console.log(\`\${name} is \${age}\`);
}
greet({ name: 'Bob' });  // "Bob is 18"

// Array parameters
function sum([a, b]) {
    return a + b;
}
sum([5, 3]);  // 8
\`\`\``
    },
    {
        id: 'ctsta-es6-004',
        question: 'Explain spread and rest operators with examples.',
        answer: `### Spread and Rest Operators (...)

\`\`\`javascript
// SPREAD - Expands iterable into individual elements

// Array spreading
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];  // [1, 2, 3, 4, 5, 6]

// Copy array (shallow)
const copy = [...arr1];

// Add elements
const withNew = [0, ...arr1, 4];  // [0, 1, 2, 3, 4]

// Object spreading
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 };  // { a: 1, b: 2, c: 3, d: 4 }

// Override properties
const updated = { ...obj1, b: 10 };  // { a: 1, b: 10 }

// Function arguments
const nums = [1, 5, 3, 9, 2];
Math.max(...nums);  // 9


// REST - Collects remaining elements

// Function parameters
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}
sum(1, 2, 3, 4);  // 10

// With regular parameters
function greet(first, ...others) {
    console.log('First:', first);
    console.log('Others:', others);
}
greet('Alice', 'Bob', 'Charlie');
// First: Alice, Others: ['Bob', 'Charlie']

// Array destructuring
const [head, ...tail] = [1, 2, 3, 4];
// head = 1, tail = [2, 3, 4]

// Object destructuring
const { name, ...rest } = { name: 'Alice', age: 25, city: 'NYC' };
// name = 'Alice', rest = { age: 25, city: 'NYC' }
\`\`\``
    },
    {
        id: 'ctsta-es6-005',
        question: 'Explain Promises and async/await with examples.',
        answer: `### Promises and Async/Await

\`\`\`javascript
// PROMISE - Represents future value

// Creating a Promise
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve({ data: 'Hello' });
            } else {
                reject(new Error('Failed'));
            }
        }, 1000);
    });
};

// Using Promise
fetchData()
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => console.log('Done'));


// ASYNC/AWAIT - Cleaner syntax for Promises

async function getData() {
    try {
        const result = await fetchData();
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
    }
}

// Parallel execution
async function parallel() {
    const [user, posts] = await Promise.all([
        fetch('/api/user').then(r => r.json()),
        fetch('/api/posts').then(r => r.json())
    ]);
    return { user, posts };
}

// Promise methods
Promise.all([p1, p2, p3]);      // All must succeed
Promise.race([p1, p2, p3]);     // First to settle
Promise.allSettled([p1, p2]);   // Wait for all (success or fail)
Promise.any([p1, p2, p3]);      // First to succeed


// Real-world example
async function fetchUserData(userId) {
    const response = await fetch(\`/api/users/\${userId}\`);
    
    if (!response.ok) {
        throw new Error('User not found');
    }
    
    const user = await response.json();
    return user;
}
\`\`\``
    },
    {
        id: 'ctsta-es6-006',
        question: 'Explain template literals and their use cases.',
        answer: `### Template Literals

\`\`\`javascript
// Basic string interpolation
const name = 'Alice';
const age = 25;
const message = \`Hello, \${name}! You are \${age} years old.\`;

// Expressions in templates
const price = 19.99;
const quantity = 3;
const total = \`Total: $\${(price * quantity).toFixed(2)}\`;
// "Total: $59.97"

// Multi-line strings
const html = \`
    <div class="card">
        <h2>\${title}</h2>
        <p>\${description}</p>
    </div>
\`;

// Conditional in template
const status = \`Status: \${isActive ? 'Active' : 'Inactive'}\`;

// Function calls in template
const items = ['apple', 'banana', 'cherry'];
const list = \`Items: \${items.join(', ')}\`;

// Nested templates
const users = [{name: 'Alice'}, {name: 'Bob'}];
const userList = \`
    <ul>
        \${users.map(u => \`<li>\${u.name}</li>\`).join('')}
    </ul>
\`;


// TAGGED TEMPLATES
function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => {
        const value = values[i] ? \`<strong>\${values[i]}</strong>\` : '';
        return result + str + value;
    }, '');
}

const highlighted = highlight\`Hello \${name}, you have \${count} messages\`;
// "Hello <strong>Alice</strong>, you have <strong>5</strong> messages"


// SQL query building (safe from injection with tagged template)
function sql(strings, ...values) {
    // Escape values here
    return strings.join('?'); // Placeholder for prepared statement
}
\`\`\``
    },
    {
        id: 'ctsta-es6-007',
        question: 'Explain let, const, and var differences.',
        answer: `### Variable Declarations

\`\`\`javascript
// VAR - Function scoped, hoisted
function varExample() {
    console.log(x);  // undefined (hoisted)
    var x = 5;
    
    if (true) {
        var y = 10;  // Same scope as function
    }
    console.log(y);  // 10 (accessible)
}


// LET - Block scoped, not hoisted (TDZ)
function letExample() {
    // console.log(x);  // ReferenceError (TDZ)
    let x = 5;
    
    if (true) {
        let y = 10;  // Block scoped
    }
    // console.log(y);  // ReferenceError
}


// CONST - Block scoped, cannot reassign
const PI = 3.14;
// PI = 3.15;  // TypeError

// Objects and arrays can be modified!
const user = { name: 'Alice' };
user.name = 'Bob';  // OK - modifying property
// user = {};       // TypeError - reassigning

const arr = [1, 2, 3];
arr.push(4);        // OK - modifying array
// arr = [];        // TypeError - reassigning


// Loop behavior
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}
// Logs: 3, 3, 3 (var is function scoped)

for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log(j), 100);
}
// Logs: 0, 1, 2 (let creates new binding each iteration)
\`\`\`

### Comparison
| Feature | var | let | const |
|---------|-----|-----|-------|
| Scope | Function | Block | Block |
| Hoisting | Yes (undefined) | TDZ | TDZ |
| Reassign | Yes | Yes | No |
| Redeclare | Yes | No | No |`
    },
    {
        id: 'ctsta-es6-008',
        question: 'Explain Array methods: find, findIndex, some, every.',
        answer: `### Array Search and Test Methods

\`\`\`javascript
const users = [
    { id: 1, name: 'Alice', active: true },
    { id: 2, name: 'Bob', active: false },
    { id: 3, name: 'Charlie', active: true }
];

// FIND - Returns first matching element
const bob = users.find(user => user.name === 'Bob');
// { id: 2, name: 'Bob', active: false }

const notFound = users.find(user => user.name === 'David');
// undefined


// FINDINDEX - Returns index of first match
const index = users.findIndex(user => user.id === 2);
// 1

const notFoundIndex = users.findIndex(user => user.id === 99);
// -1


// SOME - Returns true if ANY element passes test
const hasInactive = users.some(user => !user.active);
// true

const hasAdmin = users.some(user => user.role === 'admin');
// false


// EVERY - Returns true if ALL elements pass test
const allActive = users.every(user => user.active);
// false

const allHaveId = users.every(user => user.id > 0);
// true


// INCLUDES - Check if array contains value
const numbers = [1, 2, 3, 4, 5];
numbers.includes(3);    // true
numbers.includes(10);   // false


// INDEXOF - Find index of value
numbers.indexOf(3);     // 2
numbers.indexOf(10);    // -1


// Practical example: Form validation
const fields = [
    { name: 'email', valid: true },
    { name: 'password', valid: false },
    { name: 'username', valid: true }
];

const isFormValid = fields.every(field => field.valid);
const firstInvalid = fields.find(field => !field.valid);
\`\`\``
    },
    {
        id: 'ctsta-es6-009',
        question: 'Explain optional chaining and nullish coalescing.',
        answer: `### Optional Chaining (?.) and Nullish Coalescing (??)

\`\`\`javascript
// OPTIONAL CHAINING - Safe property access

const user = {
    name: 'Alice',
    address: {
        city: 'NYC'
    }
};

// Without optional chaining
const city1 = user && user.address && user.address.city;

// With optional chaining
const city2 = user?.address?.city;  // 'NYC'
const zip = user?.address?.zip;     // undefined (no error)

// Deeply nested
const data = { a: { b: { c: { d: 1 } } } };
const value = data?.a?.b?.c?.d;  // 1

// Array access
const arr = [1, 2, 3];
arr?.[0];  // 1
arr?.[10]; // undefined

// Method calls
const obj = {
    greet: () => 'Hello'
};
obj?.greet?.();  // 'Hello'
obj?.missing?.(); // undefined (no error)


// NULLISH COALESCING - Default for null/undefined only

const value1 = null ?? 'default';     // 'default'
const value2 = undefined ?? 'default'; // 'default'
const value3 = 0 ?? 'default';        // 0 (not default!)
const value4 = '' ?? 'default';       // '' (not default!)
const value5 = false ?? 'default';    // false

// Compare with ||  (OR operator)
const orValue1 = 0 || 'default';      // 'default' (0 is falsy)
const orValue2 = '' || 'default';     // 'default' ('' is falsy)

// Practical use
function getConfig(options) {
    const timeout = options?.timeout ?? 3000;  // Default 3000
    const retries = options?.retries ?? 3;     // Default 3
    return { timeout, retries };
}

getConfig({});                  // { timeout: 3000, retries: 3 }
getConfig({ timeout: 0 });      // { timeout: 0, retries: 3 }
\`\`\``
    },
    {
        id: 'ctsta-es6-010',
        question: 'Explain ES6 classes and inheritance.',
        answer: `### ES6 Classes

\`\`\`javascript
// Class declaration
class Animal {
    // Constructor
    constructor(name) {
        this.name = name;
    }
    
    // Instance method
    speak() {
        console.log(\`\${this.name} makes a sound\`);
    }
    
    // Getter
    get info() {
        return \`Animal: \${this.name}\`;
    }
    
    // Setter
    set nickname(value) {
        this._nickname = value;
    }
    
    // Static method
    static isAnimal(obj) {
        return obj instanceof Animal;
    }
}


// Inheritance
class Dog extends Animal {
    constructor(name, breed) {
        super(name);           // Call parent constructor
        this.breed = breed;
    }
    
    // Override method
    speak() {
        console.log(\`\${this.name} barks\`);
    }
    
    // Call parent method
    speakLoud() {
        super.speak();         // Animal's speak
        console.log('WOOF!');
    }
}


// Usage
const dog = new Dog('Buddy', 'Golden Retriever');
dog.speak();           // "Buddy barks"
dog.speakLoud();       // "Buddy makes a sound" then "WOOF!"
console.log(dog.info); // "Animal: Buddy"
Dog.isAnimal(dog);     // true


// Private fields (ES2022)
class BankAccount {
    #balance = 0;  // Private field
    
    deposit(amount) {
        this.#balance += amount;
    }
    
    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount();
account.deposit(100);
// account.#balance;  // SyntaxError - private
account.getBalance(); // 100
\`\`\``
    }
];

export default webEs6Questions;
