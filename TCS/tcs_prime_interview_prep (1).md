# TCS Prime Interview Preparation Guide

## Table of Contents
1. [Introduction & HR Questions](#introduction--hr-questions)
2. [Technical Questions - JavaScript & TypeScript](#technical-questions---javascript--typescript)
3. [Technical Questions - React & Next.js](#technical-questions---react--nextjs)
4. [Technical Questions - Backend & APIs](#technical-questions---backend--apis)
5. [Technical Questions - Data Structures & Algorithms](#technical-questions---data-structures--algorithms)
6. [Project-Based Questions](#project-based-questions)
7. [Scenario-Based & Problem-Solving](#scenario-based--problem-solving)
8. [AI & Modern Development](#ai--modern-development)

---

## Introduction & HR Questions

### Q1: Tell me about yourself
**Answer:** "I'm Srikrishnan B, a Full-Stack Developer with a Master's in Computer Science from Sri Krishna College of Engineering. I specialize in building scalable web applications using JavaScript, TypeScript, React, and Next.js. I've completed internships at Accenture and currently at Virtusa, where I worked on GenAI-powered tools and full-stack projects. I'm passionate about creating intuitive user interfaces and leveraging AI tools like GitHub Copilot to accelerate development. My recent projects include WebForge, a visual Next.js builder, and a Charge Management System for banking workflows."

### Q2: Why TCS Prime?
**Answer:** "TCS Prime offers the perfect platform to work on cutting-edge technologies and complex enterprise solutions. I'm particularly drawn to TCS's focus on digital transformation and innovation. With my experience in full-stack development, AI integration, and building scalable applications, I believe I can contribute meaningfully to TCS's projects while growing as a developer in a structured, learning-focused environment."

### Q3: What are your strengths and weaknesses?
**Strengths:** "I'm a quick learner who adapts to new technologies rapidly. I have strong problem-solving skills, as demonstrated through my projects like WebForge. I'm also proficient at integrating AI tools to enhance productivity and automate workflows."

**Weaknesses:** "I sometimes focus too much on perfecting code quality, which can slow down initial iterations. However, I'm learning to balance quality with iterative development by following agile practices."

### Q4: Where do you see yourself in 5 years?
**Answer:** "In 5 years, I see myself as a technical lead or architect, guiding teams in building scalable enterprise applications. I want to deepen my expertise in cloud technologies and system design while mentoring junior developers. I'd also like to contribute to open-source projects and stay at the forefront of web development trends."

### Q5: Why should we hire you?
**Answer:** "I bring hands-on experience in full-stack development with modern frameworks like Next.js and React. I've built production-ready applications, automated workflows using AI, and worked in real-world supervised settings at Accenture and Virtusa. My ability to write clean, maintainable code and create intuitive UIs, combined with my passion for continuous learning, makes me a strong fit for TCS Prime."

---

## Technical Questions - JavaScript & TypeScript

### Q6: Explain the difference between `let`, `const`, and `var`
**Answer:** 
- **var**: Function-scoped, hoisted, can be redeclared
- **let**: Block-scoped, hoisted but not initialized (temporal dead zone), cannot be redeclared
- **const**: Block-scoped, must be initialized, cannot be reassigned (but objects/arrays can be mutated)

**Example:**
```javascript
if (true) {
  var x = 1;  // accessible outside block
  let y = 2;  // only accessible in block
  const z = 3; // only accessible in block
}
console.log(x); // 1
console.log(y); // ReferenceError
```

### Q7: What are closures in JavaScript?
**Answer:** A closure is a function that has access to variables in its outer (enclosing) lexical scope, even after the outer function has returned.

**Example:**
```javascript
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
```

### Q8: Explain promises and async/await
**Answer:** 
- **Promises**: Objects representing eventual completion/failure of an asynchronous operation
- **async/await**: Syntactic sugar for working with promises, making async code look synchronous

**Example:**
```javascript
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
```

### Q9: What is the event loop in JavaScript?
**Answer:** The event loop is JavaScript's mechanism for handling asynchronous operations. It continuously checks the call stack and task queue, executing callbacks when the stack is empty. Order: Call Stack → Microtasks (Promises) → Macrotasks (setTimeout, setInterval).

### Q10: Explain `this` keyword in JavaScript
**Answer:** `this` refers to the context in which a function is called:
- In methods: refers to the object
- Alone: refers to global object (window in browsers)
- In arrow functions: inherits from parent scope
- In events: refers to the element that received the event

### Q11: What are the differences between TypeScript and JavaScript?
**Answer:**
- TypeScript is a superset of JavaScript with static typing
- Provides type checking at compile time
- Better IDE support with autocomplete and refactoring
- Supports interfaces, enums, and generics
- Catches errors before runtime

### Q12: Explain map, filter, and reduce
**Answer:**
- **map**: Transforms each element and returns new array
- **filter**: Returns array with elements that pass a test
- **reduce**: Reduces array to single value

**Example:**
```javascript
const nums = [1, 2, 3, 4];
const doubled = nums.map(n => n * 2); // [2,4,6,8]
const even = nums.filter(n => n % 2 === 0); // [2,4]
const sum = nums.reduce((acc, n) => acc + n, 0); // 10
```

---

## Technical Questions - React & Next.js

### Q13: What is React and why use it?
**Answer:** React is a JavaScript library for building user interfaces using reusable components. Benefits:
- Component-based architecture for reusability
- Virtual DOM for efficient updates
- Unidirectional data flow for predictability
- Large ecosystem and community support
- Great for building SPAs

### Q14: Explain React hooks - useState and useEffect
**Answer:**
- **useState**: Adds state to functional components
- **useEffect**: Handles side effects (API calls, subscriptions, DOM updates)

**Example:**
```javascript
function Counter() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = `Count: ${count}`;
    // Cleanup function (optional)
    return () => console.log('Cleanup');
  }, [count]); // Dependency array
  
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

### Q15: What is the Virtual DOM?
**Answer:** The Virtual DOM is a lightweight JavaScript representation of the actual DOM. React creates a virtual copy, compares it with the previous version (diffing), and updates only changed parts in the real DOM (reconciliation). This makes updates faster and more efficient.

### Q16: Explain props vs state in React
**Answer:**
- **Props**: Data passed from parent to child, immutable, read-only
- **State**: Internal component data, mutable, managed by component itself

### Q17: What is Next.js and its advantages?
**Answer:** Next.js is a React framework for production with features like:
- **Server-Side Rendering (SSR)**: Better SEO and initial load
- **Static Site Generation (SSG)**: Pre-rendered pages at build time
- **File-based routing**: Automatic route creation from file structure
- **API Routes**: Backend endpoints in the same project
- **Image optimization**: Automatic image optimization
- **Built-in CSS support**: Tailwind, CSS modules, etc.

### Q18: Explain client-side vs server-side rendering
**Answer:**
- **Client-Side Rendering (CSR)**: JavaScript renders content in browser. Fast navigation, poor initial SEO
- **Server-Side Rendering (SSR)**: HTML generated on server per request. Better SEO, slower navigation
- **Static Site Generation (SSG)**: HTML generated at build time. Fastest, great for static content

### Q19: What are React components lifecycle methods?
**Answer:** In functional components with hooks:
- **Mounting**: useEffect with empty dependency array `[]`
- **Updating**: useEffect with dependencies `[dep]`
- **Unmounting**: Cleanup function returned from useEffect

### Q20: Explain useContext and Context API
**Answer:** Context API provides a way to pass data through component tree without prop drilling.

**Example:**
```javascript
const ThemeContext = React.createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  const theme = useContext(ThemeContext);
  return <div>{theme}</div>;
}
```

---

## Technical Questions - Backend & APIs

### Q21: What is REST API?
**Answer:** REST (Representational State Transfer) is an architectural style for designing networked applications. Principles:
- **Stateless**: Each request contains all necessary information
- **Client-Server**: Separation of concerns
- **Cacheable**: Responses can be cached
- **Uniform Interface**: Standard HTTP methods (GET, POST, PUT, DELETE)

### Q22: Explain HTTP methods
**Answer:**
- **GET**: Retrieve data, idempotent, cacheable
- **POST**: Create new resource, not idempotent
- **PUT**: Update entire resource, idempotent
- **PATCH**: Partial update
- **DELETE**: Remove resource, idempotent

### Q23: What is Node.js?
**Answer:** Node.js is a JavaScript runtime built on Chrome's V8 engine that allows JavaScript to run on the server. Benefits:
- Non-blocking I/O for handling concurrent requests
- Same language (JavaScript) for frontend and backend
- Large npm ecosystem
- Event-driven architecture

### Q24: Explain middleware in Express.js
**Answer:** Middleware functions have access to request, response, and next function. They can:
- Execute code
- Modify request/response objects
- End request-response cycle
- Call next middleware

**Example:**
```javascript
app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

app.use('/api', authMiddleware);
```

### Q25: What is CORS?
**Answer:** Cross-Origin Resource Sharing allows restricted resources on a web page to be requested from another domain. Browsers block cross-origin requests for security. CORS headers allow controlled access.

### Q26: Explain authentication vs authorization
**Answer:**
- **Authentication**: Verifying who you are (login with username/password)
- **Authorization**: Verifying what you can access (role-based permissions)

### Q27: What is JWT?
**Answer:** JSON Web Token is a compact, URL-safe token for securely transmitting information between parties. Structure: Header.Payload.Signature. Used for stateless authentication.

### Q28: Explain database indexing
**Answer:** Indexes are data structures that improve query speed by creating pointers to data. Trade-off: faster reads, slower writes. Use for frequently queried columns.

---

## Technical Questions - Data Structures & Algorithms

### Q29: Explain different data structures
**Answer:**
- **Array**: Contiguous memory, O(1) access, O(n) insertion
- **Linked List**: Non-contiguous, O(1) insertion, O(n) access
- **Stack**: LIFO, used in recursion, undo operations
- **Queue**: FIFO, used in BFS, task scheduling
- **Hash Table**: Key-value pairs, O(1) average access
- **Tree**: Hierarchical, used in file systems, DOM
- **Graph**: Nodes and edges, used in networks, social media

### Q30: What is time complexity? Explain Big O notation
**Answer:** Time complexity measures algorithm efficiency as input grows.
- **O(1)**: Constant - array access
- **O(log n)**: Logarithmic - binary search
- **O(n)**: Linear - single loop
- **O(n log n)**: Linearithmic - merge sort
- **O(n²)**: Quadratic - nested loops
- **O(2ⁿ)**: Exponential - recursive fibonacci

### Q31: Explain sorting algorithms
**Answer:**
- **Bubble Sort**: O(n²), simple, compares adjacent elements
- **Quick Sort**: O(n log n) average, divide and conquer
- **Merge Sort**: O(n log n), stable, divide and conquer
- **Insertion Sort**: O(n²), efficient for small/nearly sorted data

### Q32: What is recursion?
**Answer:** A function calling itself to solve smaller instances of the same problem. Requires base case to stop recursion.

**Example:**
```javascript
function factorial(n) {
  if (n <= 1) return 1; // Base case
  return n * factorial(n - 1); // Recursive case
}
```

### Q33: Explain searching algorithms
**Answer:**
- **Linear Search**: O(n), checks each element sequentially
- **Binary Search**: O(log n), requires sorted array, divides search space in half

### Q34: What are linked lists? Types?
**Answer:** Linear data structure where elements are stored in nodes with pointers.
- **Singly Linked**: Each node points to next
- **Doubly Linked**: Each node points to next and previous
- **Circular**: Last node points to first

### Q35: Explain stack and queue operations
**Answer:**
**Stack** (LIFO):
- push(item) - add to top
- pop() - remove from top
- peek() - view top element

**Queue** (FIFO):
- enqueue(item) - add to rear
- dequeue() - remove from front
- front() - view front element

---

## Project-Based Questions

### Q36: Explain your WebForge project
**Answer:** "WebForge is a visual Next.js builder I created for my final year project. It allows developers to build production-ready Next.js applications using a drag-and-drop interface combined with live code editing. I built a Figma-style canvas with a Monaco editor (like VS Code) that synchronizes visual design with code. The system implements a procedural Next.js workflow with file-system navigation, layout control, and reusable components. The goal was to minimize the design-development mismatch by generating clean, production-ready Next.js code directly from visual designs."

**Key Technical Points:**
- Built with Next.js and React
- Integrated Monaco editor for live code editing
- Implemented drag-and-drop UI with React DnD or similar
- Real-time synchronization between visual and code views
- File-system based routing generation

### Q37: Tell me about your Charge Management System
**Answer:** "I built this as a capstone project at Virtusa. It's a banking platform for managing charges for customers and admin users. I created a Spring Boot backend handling authentication, charge configuration, transaction history, and billing logic. The frontend is a React dashboard with role-based access control, allowing users to view, apply, and audit charges. I designed modular REST APIs with structured data models that integrate seamlessly with banking workflows. This project taught me about enterprise-level security, role-based permissions, and building scalable financial systems."

### Q38: Explain your GenAI Software Developer Assistant
**Answer:** "I created this chatbot using Next.js and Hugging Face's DeepSeek Coder R1 model during my Accenture internship. It helps developers with code generation, testing, and documentation. I engineered custom prompts tailored to each task type - whether writing code, creating tests, or generating documentation. The system includes a memory mechanism that saves the last 5 messages to maintain context across conversations. This project demonstrated how AI can automate repetitive development tasks and boost productivity."

### Q39: What is Focus Flow?
**Answer:** "Focus Flow is an all-in-one productivity web app I built for students. It includes note-taking with Speech-to-Text and Text-to-Speech, task management, and a collaborative whiteboard. I designed a Kanban-style task manager using Next.js and Tailwind CSS with visual status tracking and calendar integration for real-time notifications. The interface is lightweight and mobile-responsive, making it accessible across devices. This project taught me about building cohesive user experiences and integrating multiple features into a single application."

### Q40: What challenges did you face in WebForge?
**Answer:** "The biggest challenge was synchronizing the visual canvas with code in real-time without performance issues. I had to implement efficient state management to track component positions, styles, and properties. Another challenge was generating clean, idiomatic Next.js code from visual designs - I had to ensure proper file structure, routing, and component composition. I solved this by creating a code generation engine that follows Next.js conventions and best practices."

### Q41: How did you implement authentication in your projects?
**Answer:** "In my projects, I used Clerk for authentication - a modern auth solution that handles user management, sessions, and security. For the Charge Management System, I implemented Spring Boot Security with JWT tokens for stateless authentication. I also ensured role-based access control to restrict features based on user roles (customer vs admin)."

---

## Scenario-Based & Problem-Solving

### Q42: How would you optimize a slow React application?
**Answer:**
1. **Code splitting**: Lazy load components with React.lazy()
2. **Memoization**: Use React.memo, useMemo, useCallback
3. **Virtual scrolling**: For long lists (react-window)
4. **Image optimization**: Use Next.js Image component
5. **Reduce re-renders**: Proper state management, avoid inline functions
6. **Bundle analysis**: Use webpack-bundle-analyzer
7. **API optimization**: Debounce, throttle, caching

### Q43: How do you handle errors in JavaScript?
**Answer:**
```javascript
// Try-catch for synchronous code
try {
  JSON.parse(data);
} catch (error) {
  console.error('Parse error:', error);
}

// Promise error handling
fetch('/api')
  .catch(err => console.error(err));

// Async/await error handling
async function fetchData() {
  try {
    const data = await fetch('/api');
  } catch (err) {
    console.error(err);
  }
}

// React Error Boundaries for component errors
```

### Q44: How would you debug a production issue?
**Answer:**
1. **Check error logs**: Console, server logs, error tracking (Sentry)
2. **Reproduce**: Try to replicate the issue
3. **Isolate**: Use console.log, debugger, or Chrome DevTools
4. **Check recent changes**: Git history, deployment logs
5. **Monitor**: Use APM tools to track performance
6. **Fix and test**: Deploy fix with proper testing
7. **Post-mortem**: Document issue and prevention steps

### Q45: How do you ensure code quality?
**Answer:**
1. **Write clean, readable code**: Follow naming conventions
2. **Code reviews**: Peer review before merging
3. **Testing**: Unit tests, integration tests, E2E tests
4. **Linting**: ESLint for JavaScript/TypeScript
5. **Type checking**: TypeScript for type safety
6. **Documentation**: Comment complex logic, maintain README
7. **Version control**: Meaningful commit messages

### Q46: Explain your approach to learning new technologies
**Answer:** "I follow a structured approach: First, I go through official documentation to understand core concepts. Then I build small projects to apply what I learned. I also take LinkedIn Learning courses like the ones I completed for Next.js, Node.js, and React. I use AI tools like ChatGPT and GitHub Copilot to accelerate learning and clarify doubts. Finally, I read articles, watch tutorials, and participate in developer communities to stay updated."

### Q47: How do you manage your time on multiple projects?
**Answer:** "I use task management tools and break projects into smaller milestones. I prioritize based on deadlines and impact. I also use my Focus Flow app's Kanban board to track tasks visually. I dedicate specific time blocks to each project and use the Pomodoro technique to maintain focus. Regular communication with stakeholders helps me stay aligned with expectations."

### Q48: How would you implement a feature with unclear requirements?
**Answer:** "I would first clarify requirements by asking specific questions to stakeholders. I'd create mockups or wireframes to visualize the feature. Then I'd break it into smaller, manageable tasks and develop an MVP (Minimum Viable Product) to get early feedback. I'd iterate based on feedback and document decisions made along the way."

---

## AI & Modern Development

### Q49: How do you use AI tools in development?
**Answer:** "I use GitHub Copilot for code suggestions and boilerplate generation. ChatGPT helps me understand complex concepts, debug issues, and generate documentation. I've integrated Hugging Face models into my GenAI Developer Assistant for code generation. I also use prompt engineering techniques to get better outputs from AI models. These tools significantly accelerate development and help me explore different approaches quickly."

### Q50: What is prompt engineering?
**Answer:** "Prompt engineering is the practice of designing effective inputs for AI models to get desired outputs. It involves being specific, providing context, using examples (few-shot learning), and iteratively refining prompts. In my GenAI Assistant, I created task-specific prompts for code generation, testing, and documentation to ensure consistent, high-quality outputs."

### Q51: How do you stay updated with technology trends?
**Answer:** "I follow tech blogs like Dev.to, Medium, and official framework documentation. I subscribe to newsletters like JavaScript Weekly. I take online courses on LinkedIn Learning. I also experiment with new technologies in personal projects. Following developers on GitHub and Twitter helps me discover emerging tools and best practices."

### Q52: What are your thoughts on AI replacing developers?
**Answer:** "AI is a powerful tool that augments developer capabilities rather than replacing them. While AI can generate code and automate repetitive tasks, it still requires human oversight for architecture decisions, understanding business logic, debugging complex issues, and ensuring code quality. Developers who learn to leverage AI effectively will be more productive and valuable."

---

## Additional Important Topics

### Q53: Explain Agile methodology
**Answer:** "Agile is an iterative development approach with short cycles (sprints). Key principles: customer collaboration, responding to change, working software over documentation. Common frameworks: Scrum (sprints, daily standups, retrospectives) and Kanban (visual workflow)."

### Q54: What is Git? Explain common commands
**Answer:** "Git is a distributed version control system. Common commands:
- `git init` - initialize repository
- `git clone` - copy repository
- `git add` - stage changes
- `git commit` - save changes
- `git push` - upload to remote
- `git pull` - download from remote
- `git branch` - manage branches
- `git merge` - combine branches"

### Q55: Explain responsive design
**Answer:** "Responsive design ensures websites work on all devices. Techniques:
- Flexible grids with percentages
- Media queries for different screen sizes
- Flexible images (max-width: 100%)
- Mobile-first approach
- Frameworks like Tailwind CSS with responsive utilities"

### Q56: What are web security best practices?
**Answer:**
1. **Input validation**: Sanitize user inputs
2. **HTTPS**: Encrypt data in transit
3. **Authentication**: Use secure methods (OAuth, JWT)
4. **SQL Injection prevention**: Use parameterized queries
5. **XSS prevention**: Escape user content
6. **CSRF protection**: Use tokens
7. **Regular updates**: Keep dependencies updated
8. **Rate limiting**: Prevent brute force attacks

### Q57: Explain your desktop automation experience
**Answer:** "I've built productivity tools using Node.js and AutoHotkey (AHK) to automate repetitive desktop tasks. These scripts help with file management, keyboard shortcuts, and workflow automation. This experience taught me about system-level programming and how to identify opportunities for automation to boost productivity."

---

## Tips for Interview Success

### Technical Round Tips:
1. **Think aloud**: Explain your thought process
2. **Ask clarifying questions**: Understand the problem fully
3. **Start simple**: Begin with basic solution, then optimize
4. **Test your code**: Walk through with examples
5. **Discuss trade-offs**: Time vs space complexity

### HR Round Tips:
1. **Be honest**: Don't claim skills you don't have
2. **Show enthusiasm**: Express genuine interest in the role
3. **STAR method**: Situation, Task, Action, Result for behavioral questions
4. **Ask questions**: Show interest in company culture and growth
5. **Be prepared**: Research TCS's recent projects and values

### Common Mistakes to Avoid:
1. Memorizing answers without understanding
2. Being negative about previous employers
3. Not having questions for the interviewer
4. Giving vague answers without examples
5. Rushing through explanations

---

## Final Preparation Checklist

- [ ] Review all your projects thoroughly
- [ ] Practice coding problems on LeetCode/HackerRank
- [ ] Prepare questions to ask the interviewer
- [ ] Review JavaScript fundamentals
- [ ] Understand React and Next.js concepts deeply
- [ ] Be ready to explain your internship experiences
- [ ] Test your internet connection and setup for online interview
- [ ] Prepare a quiet, professional environment
- [ ] Keep your resume and project links ready
- [ ] Get good sleep the night before

**Remember**: Confidence comes from preparation. Practice explaining concepts in simple terms, and don't be afraid to say "I don't know, but here's how I'd find out" if you're unsure about something.

Good luck with your TCS Prime interview! 🚀

---

## Advanced Technical Questions

### Q58: What is the difference between Promise.all() and Promise.race()?
**Answer:**
- **Promise.all()**: Waits for all promises to resolve. Returns array of results. Fails if any promise rejects.
- **Promise.race()**: Returns as soon as first promise settles (resolves or rejects)

**Example:**
```javascript
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);

Promise.all([p1, p2]).then(values => console.log(values)); // [1, 2]
Promise.race([p1, p2]).then(value => console.log(value)); // 1
```

### Q59: Explain debouncing and throttling
**Answer:**
- **Debouncing**: Delays function execution until after a wait period. Use for search input.
- **Throttling**: Limits function execution to once per time period. Use for scroll events.

**Example:**
```javascript
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
```

### Q60: What is hoisting in JavaScript?
**Answer:** Hoisting is JavaScript's behavior of moving declarations to the top of their scope during compilation. Variables declared with `var` are hoisted and initialized with `undefined`. Functions are fully hoisted. `let` and `const` are hoisted but not initialized (temporal dead zone).

**Example:**
```javascript
console.log(x); // undefined (hoisted)
var x = 5;

console.log(y); // ReferenceError (temporal dead zone)
let y = 10;

greet(); // "Hello" (function hoisted)
function greet() { console.log("Hello"); }
```

### Q61: Explain prototype and prototypal inheritance
**Answer:** JavaScript uses prototypal inheritance where objects inherit from other objects. Every object has a hidden `[[Prototype]]` property. When accessing a property, JS looks up the prototype chain.

**Example:**
```javascript
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
  return `Hello, I'm ${this.name}`;
};

const john = new Person('John');
console.log(john.greet()); // "Hello, I'm John"
```

### Q62: What are JavaScript modules? Explain import/export
**Answer:** Modules allow splitting code into reusable pieces. ES6 introduced `import` and `export`.

**Example:**
```javascript
// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export default function multiply(a, b) { return a * b; }

// app.js
import multiply, { add, subtract } from './math.js';
import * as math from './math.js';
```

### Q63: Explain call, apply, and bind
**Answer:** Methods to change the `this` context:
- **call**: Invokes function with specific `this` and arguments separately
- **apply**: Same as call but arguments as array
- **bind**: Returns new function with bound `this`

**Example:**
```javascript
const person = { name: 'John' };
function greet(age, city) {
  console.log(`${this.name}, ${age}, ${city}`);
}

greet.call(person, 25, 'NYC');      // John, 25, NYC
greet.apply(person, [25, 'NYC']);   // John, 25, NYC
const boundGreet = greet.bind(person);
boundGreet(25, 'NYC');               // John, 25, NYC
```

### Q64: What is event delegation?
**Answer:** Event delegation uses event bubbling to handle events at a higher level rather than individual elements. Attach one listener to parent instead of multiple to children.

**Example:**
```javascript
document.getElementById('parent').addEventListener('click', (e) => {
  if (e.target.matches('.child')) {
    console.log('Child clicked');
  }
});
```

### Q65: Explain shallow copy vs deep copy
**Answer:**
- **Shallow copy**: Copies first level only. Nested objects are referenced.
- **Deep copy**: Copies all levels recursively. Nested objects are cloned.

**Example:**
```javascript
const obj = { a: 1, b: { c: 2 } };

// Shallow copy
const shallow = { ...obj };
shallow.b.c = 3; // Original also changes

// Deep copy
const deep = JSON.parse(JSON.stringify(obj));
// Or use structuredClone(obj)
```

---

## React Advanced Questions

### Q66: What is React reconciliation?
**Answer:** Reconciliation is the process React uses to update the DOM efficiently. React compares the new Virtual DOM with the previous one (diffing), identifies changes, and updates only what changed in the real DOM. Uses keys to track elements in lists.

### Q67: Explain useMemo vs useCallback
**Answer:**
- **useMemo**: Memoizes computed values to avoid expensive recalculations
- **useCallback**: Memoizes functions to prevent recreation on re-renders

**Example:**
```javascript
const expensiveValue = useMemo(() => {
  return complexCalculation(data);
}, [data]);

const handleClick = useCallback(() => {
  console.log(count);
}, [count]);
```

### Q68: What are custom hooks?
**Answer:** Custom hooks are reusable functions that use React hooks. Must start with "use". Extract component logic into reusable functions.

**Example:**
```javascript
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    return localStorage.getItem(key) || initialValue;
  });
  
  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);
  
  return [value, setValue];
}

// Usage
const [name, setName] = useLocalStorage('name', '');
```

### Q69: Explain React.memo and when to use it
**Answer:** React.memo is a HOC that memoizes component output. Re-renders only if props change. Use for expensive components or pure components that render often with same props.

**Example:**
```javascript
const ExpensiveComponent = React.memo(({ data }) => {
  return <div>{data.map(item => <Item key={item.id} {...item} />)}</div>;
});
```

### Q70: What is useReducer? When to use it over useState?
**Answer:** useReducer manages complex state logic with actions and reducer function. Use when:
- State has complex update logic
- Next state depends on previous state
- Multiple sub-values in state

**Example:**
```javascript
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment': return { count: state.count + 1 };
    case 'decrement': return { count: state.count - 1 };
    default: throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  );
}
```

### Q71: What are React portals?
**Answer:** Portals allow rendering children into a DOM node outside the parent component hierarchy. Useful for modals, tooltips, and overlays.

**Example:**
```javascript
ReactDOM.createPortal(
  <Modal />,
  document.getElementById('modal-root')
);
```

### Q72: Explain React error boundaries
**Answer:** Error boundaries catch JavaScript errors in child components, log errors, and display fallback UI. Use class components with componentDidCatch.

**Example:**
```javascript
class ErrorBoundary extends React.Component {
  state = { hasError: false };
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) return <h1>Something went wrong.</h1>;
    return this.props.children;
  }
}
```

### Q73: What is code splitting in React?
**Answer:** Code splitting divides bundle into smaller chunks loaded on demand. Reduces initial load time. Use React.lazy and Suspense.

**Example:**
```javascript
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
```

---

## Next.js Specific Questions

### Q74: Explain Next.js data fetching methods
**Answer:**
- **getStaticProps**: Fetch data at build time (SSG). For static content.
- **getServerSideProps**: Fetch data on each request (SSR). For dynamic content.
- **getStaticPaths**: Define dynamic routes for static generation
- **Client-side fetching**: Using useEffect or SWR

**Example:**
```javascript
export async function getStaticProps() {
  const data = await fetch('https://api.example.com/data');
  return { props: { data: await data.json() } };
}

export async function getServerSideProps(context) {
  const data = await fetch(`https://api.example.com/${context.params.id}`);
  return { props: { data: await data.json() } };
}
```

### Q75: What is ISR in Next.js?
**Answer:** Incremental Static Regeneration allows updating static pages after build without rebuilding entire site. Use `revalidate` in getStaticProps.

**Example:**
```javascript
export async function getStaticProps() {
  const data = await fetch('https://api.example.com/data');
  return {
    props: { data: await data.json() },
    revalidate: 60 // Regenerate page every 60 seconds
  };
}
```

### Q76: Explain Next.js routing
**Answer:** Next.js uses file-based routing:
- `pages/index.js` → `/`
- `pages/about.js` → `/about`
- `pages/blog/[slug].js` → `/blog/:slug` (dynamic)
- `pages/blog/[...slug].js` → catch-all routes
- `pages/api/` → API routes

### Q77: What are Next.js API routes?
**Answer:** API routes create backend endpoints in Next.js. Files in `pages/api/` become API endpoints.

**Example:**
```javascript
// pages/api/user.js
export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ name: 'John' });
  }
}
```

### Q78: Explain Next.js Image optimization
**Answer:** Next.js Image component automatically optimizes images:
- Lazy loading by default
- Responsive images with srcset
- Modern formats (WebP, AVIF)
- Prevents Cumulative Layout Shift

**Example:**
```javascript
import Image from 'next/image';

<Image 
  src="/profile.jpg" 
  alt="Profile" 
  width={500} 
  height={500}
  priority // Disable lazy load for above-fold images
/>
```

---

## Backend & Database Questions

### Q79: Explain different types of databases
**Answer:**
- **SQL (Relational)**: MySQL, PostgreSQL. Structured data, ACID properties, fixed schema
- **NoSQL**: MongoDB, DynamoDB. Flexible schema, horizontal scaling
  - Document stores (MongoDB)
  - Key-value stores (Redis)
  - Column stores (Cassandra)
  - Graph databases (Neo4j)

### Q80: What is ORM? Examples?
**Answer:** Object-Relational Mapping converts data between incompatible systems. Maps database tables to objects. Examples: Prisma, Sequelize, TypeORM.

**Example:**
```javascript
// Prisma example
const user = await prisma.user.findUnique({
  where: { id: 1 },
  include: { posts: true }
});
```

### Q81: Explain ACID properties
**Answer:** Database transaction properties:
- **Atomicity**: All or nothing - transaction fully completes or fully fails
- **Consistency**: Database remains in valid state
- **Isolation**: Concurrent transactions don't interfere
- **Durability**: Committed data is permanently saved

### Q82: What is SQL injection? How to prevent?
**Answer:** Malicious SQL code injected through user input. Prevention:
- Use parameterized queries/prepared statements
- Input validation and sanitization
- Use ORMs
- Principle of least privilege for database users

**Example:**
```javascript
// Vulnerable
const query = `SELECT * FROM users WHERE id = ${userId}`;

// Safe
const query = 'SELECT * FROM users WHERE id = ?';
db.query(query, [userId]);
```

### Q83: Explain database normalization
**Answer:** Process of organizing data to reduce redundancy:
- **1NF**: Atomic values, no repeating groups
- **2NF**: 1NF + no partial dependencies
- **3NF**: 2NF + no transitive dependencies

### Q84: What are transactions in databases?
**Answer:** A transaction is a sequence of operations performed as a single logical unit. Use BEGIN, COMMIT, ROLLBACK to manage transactions.

**Example:**
```javascript
const transaction = await db.transaction();
try {
  await transaction.query('UPDATE accounts SET balance = balance - 100 WHERE id = 1');
  await transaction.query('UPDATE accounts SET balance = balance + 100 WHERE id = 2');
  await transaction.commit();
} catch (error) {
  await transaction.rollback();
}
```

---

## System Design & Architecture

### Q85: Explain MVC architecture
**Answer:** Model-View-Controller separates application into three components:
- **Model**: Data and business logic
- **View**: User interface
- **Controller**: Handles input, updates model, selects view

### Q86: What is microservices architecture?
**Answer:** Application built as collection of small, independent services. Each service:
- Runs in its own process
- Communicates via APIs
- Can be deployed independently
- Has its own database

**Benefits**: Scalability, flexibility, easier maintenance
**Challenges**: Complexity, network latency, data consistency

### Q87: Explain monolithic vs microservices
**Answer:**
**Monolithic**:
- Single codebase, deployed as one unit
- Simpler to develop initially
- Harder to scale and maintain
- Technology stack is fixed

**Microservices**:
- Multiple independent services
- Complex to develop initially
- Easy to scale specific services
- Can use different technologies

### Q88: What is load balancing?
**Answer:** Distributing traffic across multiple servers to ensure reliability and performance. Types:
- **Round Robin**: Sequential distribution
- **Least Connections**: Routes to server with fewest connections
- **IP Hash**: Routes based on client IP

### Q89: Explain caching strategies
**Answer:**
- **Cache-aside**: Application checks cache first, then database
- **Write-through**: Write to cache and database simultaneously
- **Write-back**: Write to cache, async write to database
- **Refresh-ahead**: Preemptively refresh before expiration

### Q90: What is CDN?
**Answer:** Content Delivery Network distributes static content across geographically distributed servers. Reduces latency by serving content from nearest server. Used for images, CSS, JavaScript files.

---

## Project Deep-Dive Questions

### Q91: How did you implement real-time synchronization in WebForge?
**Answer:** "I used React state management to maintain a single source of truth for component data. When users drag elements on the canvas, state updates trigger code generation. Similarly, when code is edited in Monaco, parsing updates the visual canvas. I implemented a debounced update mechanism to avoid performance issues from frequent updates. The synchronization layer uses a data structure that maps visual components to their code representations."

### Q92: What file structure does WebForge generate?
**Answer:** "WebForge generates a standard Next.js project structure:
- `app/` or `pages/` directory for routes
- `components/` for reusable components
- `styles/` for global styles and Tailwind config
- `public/` for static assets
- `layout.tsx` for shared layouts
- Each component gets its own file with proper imports and exports"

### Q93: How did you handle component reusability in WebForge?
**Answer:** "I created a component library with predefined elements (buttons, cards, forms). When users drag these onto the canvas, the system generates React components with proper props. I implemented a props panel where users can customize properties. The code generator ensures components are extracted to separate files if used multiple times, promoting DRY principles."

### Q94: Explain the architecture of your Charge Management System
**Answer:** "The backend uses Spring Boot with a layered architecture:
- **Controller layer**: REST endpoints for CRUD operations
- **Service layer**: Business logic for charge calculations and billing
- **Repository layer**: JPA for database operations
- **Security layer**: JWT authentication and role-based authorization

The frontend React application makes API calls to these endpoints. I used Spring Security for authentication and implemented custom filters for JWT validation. The database schema includes tables for users, charges, transactions, and audit logs."

### Q95: How did you implement role-based access in Charge Management System?
**Answer:** "I used Spring Security with custom UserDetailsService. Each user has roles (CUSTOMER, ADMIN). Endpoints are annotated with `@PreAuthorize` to restrict access. For example, charge configuration endpoints are admin-only. The frontend conditionally renders UI elements based on user roles stored in the authentication token. I also implemented audit logging to track who performs what actions."

### Q96: What billing logic did you implement in Charge Management System?
**Answer:** "The system calculates charges based on transaction types and amounts. I implemented:
- Fixed charges for specific transaction types
- Percentage-based charges
- Tiered pricing based on volume
- Monthly aggregation for billing cycles
- Transaction history with charge breakdowns
The service layer contains the calculation engine that applies relevant charges based on configured rules."

### Q97: How did you manage context in your GenAI Assistant?
**Answer:** "I implemented a conversation memory system that stores the last 5 messages. Each API call includes this context in the prompt. I structured it as:
```
Previous conversation:
User: [message 1]
Assistant: [response 1]
...
Current query: [new message]
```
This allows the model to maintain context for follow-up questions. I used a circular buffer to keep memory bounded and prevent token limit issues."

### Q98: What challenges did you face with the Hugging Face model integration?
**Answer:** "The main challenges were:
1. **Response time**: Model inference can be slow. I added loading indicators and streaming responses where possible.
2. **Prompt engineering**: Getting consistent output format required iterative prompt refinement
3. **Token limits**: Had to balance context window with conversation history
4. **Error handling**: Model sometimes generates incomplete code. I added validation and retry logic
5. **Cost management**: Implemented request throttling and caching for common queries"

### Q99: How did you implement Speech-to-Text and Text-to-Speech in Focus Flow?
**Answer:** "I used the Web Speech API:
- **STT**: `SpeechRecognition` API to convert voice to text in notes
- **TTS**: `SpeechSynthesis` API to read notes aloud

**Example:**
```javascript
// STT
const recognition = new webkitSpeechRecognition();
recognition.onresult = (event) => {
  const transcript = event.results[0][0].transcript;
  setNote(transcript);
};

// TTS
const utterance = new SpeechSynthesisUtterance(text);
speechSynthesis.speak(utterance);
```
I added error handling for browser compatibility and microphone permissions."

### Q100: Explain the Kanban implementation in Focus Flow
**Answer:** "I created a Kanban board with three columns: To Do, In Progress, Done. Each task is a draggable card. I used React DnD or a similar library for drag-and-drop. State management tracks task positions and status. When a task is dropped in a new column, its status updates and the UI re-renders. I added visual status indicators, due dates, and priority flags. The calendar integration uses a date library like date-fns to show tasks by deadline."

### Q101: How did you make Focus Flow mobile-responsive?
**Answer:** "I used Tailwind CSS's responsive utilities:
- Mobile-first approach starting with small screens
- Flexbox and Grid for fluid layouts
- Responsive breakpoints (sm, md, lg, xl)
- Collapsible navigation menu on mobile
- Touch-friendly button sizes (min 44x44px)
- Tested on multiple devices using Chrome DevTools

**Example:**
```javascript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```"

### Q102: What desktop automation scripts have you built?
**Answer:** "I've built several productivity scripts:
1. **File organizer**: Automatically sorts downloads by file type
2. **Window manager**: Keyboard shortcuts for window positioning
3. **Text expander**: Custom snippets for frequently used code
4. **Batch renamer**: Renames files based on patterns
5. **Backup automation**: Scheduled backups of project folders

I used Node.js for file operations and AHK for system-level interactions and hotkeys. These save me significant time daily."

---

## Internship-Specific Questions

### Q103: What did you learn during your Accenture internship?
**Answer:** "At Accenture, I gained hands-on experience in:
1. **Generative AI**: Working with AI models for code generation
2. **API integration**: Connecting Hugging Face models to applications
3. **Java fundamentals**: Strengthened my backend development skills
4. **Enterprise workflows**: Understanding how large organizations develop software
5. **Collaboration**: Working in supervised settings with experienced developers
6. **Prompt engineering**: Crafting effective prompts for AI models

The highlight was building the GenAI Software Developer Assistant that automated development tasks."

### Q104: What are you working on at Virtusa?
**Answer:** "At Virtusa, I'm working on a full-stack project that involves:
- Building scalable web applications with modern frameworks
- Both frontend (React) and backend (Spring Boot) development
- Collaborative team practices like code reviews and agile sprints
- Real-world software development challenges
- Integration with enterprise systems

The Charge Management System capstone project is part of this internship, where I built a banking charge management platform from scratch."

### Q105: How did you collaborate with your team during internships?
**Answer:** "I used:
- **Git**: For version control and pull requests
- **Jira/Trello**: For task tracking
- **Daily standups**: To share progress and blockers
- **Code reviews**: Peer review before merging
- **Documentation**: Maintained clear documentation for my work
- **Slack/Teams**: For team communication

I learned the importance of clear communication, asking questions when stuck, and giving constructive feedback in code reviews."

### Q106: What was the most challenging task in your internships?
**Answer:** "The most challenging task was implementing the GenAI Assistant's context management at Accenture. Balancing conversation history with token limits while maintaining coherent responses required careful prompt design. I had to iterate multiple times to find the right approach. I solved it by implementing a sliding window of 5 messages and structuring prompts to include only relevant context. This taught me about working with constraints and iterative problem-solving."

---

## Java-Specific Questions (Based on Your Skills)

### Q107: Explain OOP concepts in Java
**Answer:**
- **Encapsulation**: Bundling data and methods, using private fields with getters/setters
- **Inheritance**: `class Child extends Parent` - code reuse
- **Polymorphism**: Method overloading (compile-time) and overriding (runtime)
- **Abstraction**: Abstract classes and interfaces hide implementation details

### Q108: What is the difference between abstract class and interface?
**Answer:**
**Abstract Class**:
- Can have abstract and concrete methods
- Can have constructors
- Can have instance variables
- Single inheritance only

**Interface**:
- All methods are abstract (before Java 8)
- No constructors
- Only constants
- Multiple inheritance supported

### Q109: Explain exception handling in Java
**Answer:** Try-catch-finally for handling errors:
```java
try {
    int result = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Cannot divide by zero");
} finally {
    System.out.println("Always executes");
}
```
- **Checked exceptions**: Must be handled (IOException)
- **Unchecked exceptions**: Runtime exceptions (NullPointerException)

### Q110: What are collections in Java?
**Answer:** Framework for storing and manipulating groups of objects:
- **List**: ArrayList, LinkedList - ordered, allows duplicates
- **Set**: HashSet, TreeSet - no duplicates
- **Map**: HashMap, TreeMap - key-value pairs
- **Queue**: LinkedList, PriorityQueue - FIFO

### Q111: Explain String, StringBuilder, and StringBuffer
**Answer:**
- **String**: Immutable, thread-safe, slow for concatenation
- **StringBuilder**: Mutable, not thread-safe, fast
- **StringBuffer**: Mutable, thread-safe, slower than StringBuilder

Use StringBuilder for single-threaded string manipulation.

---

## Advanced Scenario Questions

### Q112: How would you scale a web application to handle millions of users?
**Answer:**
1. **Horizontal scaling**: Add more servers with load balancer
2. **Database optimization**: Indexing, query optimization, read replicas
3. **Caching**: Redis for frequently accessed data
4. **CDN**: For static assets
5. **Database sharding**: Distribute data across databases
6. **Microservices**: Break into smaller, independently scalable services
7. **Async processing**: Message queues for heavy tasks
8. **Auto-scaling**: Cloud infrastructure that scales based on demand

### Q113: You have a memory leak in production. How do you identify and fix it?
**Answer:**
1. **Monitor**: Use tools like Chrome DevTools Memory Profiler, Node.js memory monitoring
2. **Identify patterns**: Check if memory grows continuously
3. **Common causes**:
   - Event listeners not removed
   - Global variables accumulating data
   - Closures holding references
   - Intervals/timeouts not cleared
4. **Fix**: Remove listeners, clear intervals, use weak references
5. **Test**: Verify fix with memory profiling
6. **Deploy**: Gradual rollout with monitoring

### Q114: How would you implement real-time features in a web app?
**Answer:**
1. **WebSockets**: Bidirectional communication (Socket.io)
2. **Server-Sent Events (SSE)**: Server to client updates
3. **Long Polling**: Fallback for older browsers
4. **Consider**: Scaling with Redis for pub/sub, connection management

**Example:**
```javascript
// Server (Socket.io)
io.on('connection', (socket) => {
  socket.on('message', (data) => {
    io.emit('message', data); // Broadcast
  });
});

// Client
const socket = io();
socket.on('message', (data) => {
  updateUI(data);
});
```

### Q115: Design a URL shortener like bit.ly
**Answer:**
**Requirements**: Shorten URL, redirect, track clicks

**Design**:
1. **Database**: Store mapping (shortCode → originalURL, clicks)
2. **Algorithm**: Generate unique short code (base62 encoding of ID or hash)
3. **API**:
   - POST /shorten - create short URL
   - GET /:code - redirect to original
4. **Scale**: Cache popular URLs, use distributed ID generator
5. **Analytics**: Track clicks, referrers, timestamps

**Schema**:
```
urls {
  id: primary key
  originalUrl: string
  shortCode: unique string
  clicks: integer
  createdAt: timestamp
}
```

### Q116: How would you implement authentication in a React app?
**Answer:**
1. **Login**: Send credentials to backend, receive JWT token
2. **Store**: Save token in memory or httpOnly cookie (NOT localStorage for sensitive apps)
3. **Protect routes**: Check authentication before rendering
4. **API calls**: Include token in Authorization header
5. **Refresh**: Implement token refresh mechanism
6. **Logout**: Clear token and redirect

**Example:**
```javascript
// Context for auth
const AuthContext = createContext();

function ProtectedRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}

// API call with token
fetch('/api/data', {
  headers: {
    'Authorization': `Bearer ${token}`
  }
});
```

### Q117: How do you handle version control conflicts?
**Answer:**
1. **Pull latest**: Always pull before making changes
2. **Communicate**: Coordinate with team on file ownership
3. **Resolve conflicts**:
   - Review both changes
   - Keep necessary code from both versions
   - Test after resolution
4. **Best practices**:
   - Small, frequent commits
   - Feature branches
   - Code reviews
5. **Tools**: Git merge tools, VS Code merge editor

---

## Testing & Quality Assurance

### Q118: What types of testing are you familiar with?
**Answer:**
- **Unit testing**: Test individual functions/components (Jest, React Testing Library)
- **Integration testing**: Test component interactions
- **E2E testing**: Test complete user flows (Cypress, Playwright)
- **Performance testing**: Load testing, stress testing
- **Manual testing**: Exploratory testing

### Q119: How do you write unit tests in React?
**Answer:**
```javascript
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('increments counter', () => {
  render(<Counter />);
  const button = screen.getByText('+');
  fireEvent.click(button);
  expect(screen.getByText('Count: 1')).toBeInTheDocument();
});
```

**Best practices**:
- Test behavior, not implementation
- Use meaningful test descriptions
- Arrange-Act-Assert pattern
- Mock external dependencies

### Q120: What is CI/CD?
**Answer:** Continuous Integration/Continuous Deployment automates testing and deployment:
- **CI**: Automatically test code on each commit
- **CD**: Automatically deploy passing builds

**Pipeline**:
1. Developer pushes code
2. Automated tests run
3. Build artifact created
4. Deploy to staging
5. Deploy to production

**Tools**: GitHub Actions, Jenkins, CircleCI

---

## Performance Optimization

### Q121: How do you optimize React application performance?
**Answer:**
1. **Code splitting**: Lazy load components
2. **Memoization**: React.memo, useMemo, useCallback
3. **Virtual scrolling**: For long lists
4. **Debounce/throttle**: For frequent events
5. **Image optimization**: Next.js Image, lazy loading
6. **Bundle size**: Tree shaking, analyze bundle
7. **Avoid inline functions**: In render
8. **Key props**: Proper keys in lists
9. **Production build**: Minification, compression

### Q122: How do you optimize API calls?
**Answer:**
1. **Caching**: Cache responses in memory or Redis
2. **Pagination**: Load data in chunks
3. **Debouncing**: Delay search requests
4. **Parallel requests**: Use Promise.all for independent calls
5. **Request cancellation**: Cancel outdated requests (AbortController)
6. **GraphQL**: Fetch only needed fields
7. **Compression**: Gzip responses
8. **CDN**: Cache API responses at edge

### Q123: How do you measure web performance?
**Answer:**
**Metrics**:
- **FCP**: First Contentful Paint
- **LCP**: Largest Contentful Paint
- **FID**: First Input Delay
- **CLS**: Cumulative Layout Shift
- **TTI**: Time to Interactive

**Tools**:
- Lighthouse
- Chrome DevTools Performance tab
- WebPageTest
- Web Vitals library

---

## Additional Behavioral Questions

### Q124: Describe a time you had to learn a new technology quickly
**Answer:** "When I started building WebForge, I had limited experience with Monaco Editor integration. I had a week to create a working prototype. I approached it systematically: first read the official documentation, then studied examples from VS Code's implementation, built a minimal working version, and iteratively added features. I used GitHub Copilot to understand complex patterns faster. Within a week, I had a functioning code editor with syntax highlighting and auto-complete. This taught me how to break down complex problems and leverage available resources effectively."

### Q125: Tell me about a time you disagreed with a team member
**Answer:** "During the Charge Management System project at Virtusa, a team member suggested storing sensitive charge configurations in localStorage for faster access. I disagreed due to security concerns - localStorage is vulnerable to XSS attacks. I explained the risks and proposed using encrypted session tokens with server-side storage instead. I backed my suggestion with security best practices documentation. We discussed the trade-offs and agreed on the more secure approach. This taught me the importance of constructive disagreement and backing opinions with facts."

### Q126: How do you handle tight deadlines?
**Answer:** "I prioritize tasks using the MIP framework - Most Important Problem first. I break projects into smaller milestones and focus on MVP features first. During my Accenture internship, I had to deliver the GenAI Assistant in a tight timeframe. I identified core features (code generation, basic memory), implemented those first, then added enhancements. I communicated progress regularly and set realistic expectations. I also use my Focus Flow app's Kanban board to visualize and track tasks. This approach helps me deliver working solutions on time."

### Q127: Describe a project that didn't go as planned
**Answer:** "In an early version of Focus Flow, I tried to build the whiteboard feature from scratch, which took much longer than expected. I realized I was reinventing the wheel. I pivoted to using an existing library (like React-Canvas or Excalidraw), customized it for our needs, and saved significant time. This taught me to evaluate build vs. buy decisions and leverage existing solutions when appropriate. It's about solving problems efficiently, not building everything from zero."

### Q128: How do you keep your code maintainable?
**Answer:**
1. **Clear naming**: Descriptive variable and function names
2. **Single responsibility**: Functions do one thing
3. **DRY principle**: Don't Repeat Yourself
4. **Comments**: Explain 'why', not 'what'
5. **Consistent formatting**: ESLint, Prettier
6. **TypeScript**: Type safety prevents bugs
7. **Modular structure**: Organized folder structure
8. **Documentation**: README, API docs
9. **Tests**: Ensure code works as expected

### Q129: What motivates you in software development?
**Answer:** "I'm motivated by solving real problems and seeing people use what I build. Creating WebForge and watching it streamline the development process is incredibly satisfying. I love the continuous learning aspect - there's always new technologies and patterns to explore. The immediate feedback loop in coding is also rewarding - write code, see results. Contributing to open-source and helping other developers through my tools gives me a sense of community contribution."

### Q130: How do you handle constructive criticism?
**Answer:** "I view criticism as a learning opportunity. During code reviews at Virtusa, I received feedback about improving error handling in my API endpoints. Instead of being defensive, I asked for specific examples and best practices. I researched proper error handling patterns, updated my code, and now apply those principles in all my projects. I believe good developers are always learning, and feedback from experienced developers is invaluable for growth."

---

## Tools & Technologies Deep Dive

### Q131: Explain your experience with Tailwind CSS
**Answer:** "I use Tailwind extensively in my projects - WebForge, Focus Flow, and Charge Management System frontend. I appreciate the utility-first approach that speeds up development. Key features I use:
- Responsive utilities (sm, md, lg prefixes)
- Flexbox and Grid utilities for layouts
- Custom color schemes
- JIT compiler for smaller bundles
- Component extraction with @apply
I find it faster than writing custom CSS while maintaining design consistency."

### Q132: How do you use GitHub Copilot in your workflow?
**Answer:** "GitHub Copilot accelerates my development significantly:
- Boilerplate code generation (API routes, components)
- Suggesting implementation patterns
- Writing repetitive code (CRUD operations)
- Test case generation
- Documentation comments

However, I always review suggestions carefully, ensure code quality, and understand what Copilot generates. It's a productivity multiplier, not a replacement for understanding code. I estimate it saves me 30-40% of coding time on routine tasks."

### Q133: What is Convex? How did you use it?
**Answer:** "Convex is a backend-as-a-service platform that replaces traditional backends. It provides:
- Real-time database with automatic subscriptions
- Serverless functions
- TypeScript support with type safety
- Built-in authentication
- Automatic API generation

I used it in projects requiring real-time updates. Instead of setting up Express, database, and WebSockets separately, Convex handles everything. Writing queries and mutations in TypeScript with automatic type inference is very productive. It's particularly good for rapid prototyping."

### Q134: Explain your experience with Clerk
**Answer:** "Clerk is a modern authentication solution I've used for user management. Features:
- Drop-in authentication components
- Social login (Google, GitHub)
- Multi-factor authentication
- User management dashboard
- Session management
- Webhooks for user events

It saved me weeks of authentication implementation time. I integrated it by adding Clerk components to my Next.js app, wrapping the app with ClerkProvider, and using useUser() hook for auth state. Much simpler than building authentication from scratch."

### Q135: What is your experience with Spring Boot?
**Answer:** "I used Spring Boot for the Charge Management System backend at Virtusa. Key features I implemented:
- RESTful APIs with @RestController
- JPA repositories for database operations
- Spring Security for JWT authentication
- @Service layer for business logic
- Exception handling with @ControllerAdvice
- Application properties configuration

Spring Boot's convention-over-configuration approach and auto-configuration made it easy to build a production-ready backend quickly."

---

## Problem-Solving Coding Questions

### Q136: Write a function to reverse a string
**Answer:**
```javascript
// Method 1: Built-in methods
function reverse(str) {
  return str.split('').reverse().join('');
}

// Method 2: Loop
function reverse(str) {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

// Method 3: Reduce
function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}
```

### Q137: Find the largest number in an array
**Answer:**
```javascript
// Method 1: Math.max
function findMax(arr) {
  return Math.max(...arr);
}

// Method 2: Reduce
function findMax(arr) {
  return arr.reduce((max, num) => num > max ? num : max, arr[0]);
}

// Method 3: Loop
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}
```

### Q138: Check if a string is a palindrome
**Answer:**
```javascript
function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}

// Alternative: Two pointers
function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  let left = 0, right = cleaned.length - 1;
  while (left < right) {
    if (cleaned[left] !== cleaned[right]) return false;
    left++;
    right--;
  }
  return true;
}
```

### Q139: Remove duplicates from an array
**Answer:**
```javascript
// Method 1: Set
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// Method 2: Filter
function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

// Method 3: Reduce
function removeDuplicates(arr) {
  return arr.reduce((unique, item) => 
    unique.includes(item) ? unique : [...unique, item], []);
}
```

### Q140: Find the factorial of a number
**Answer:**
```javascript
// Recursive
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

// Iterative
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
```

### Q141: Check if two strings are anagrams
**Answer:**
```javascript
function areAnagrams(str1, str2) {
  const sort = str => str.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');
  return sort(str1) === sort(str2);
}

// Example
areAnagrams('listen', 'silent'); // true
```

### Q142: Find the first non-repeating character
**Answer:**
```javascript
function firstNonRepeating(str) {
  const charCount = {};
  
  // Count occurrences
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  
  // Find first with count 1
  for (let char of str) {
    if (charCount[char] === 1) return char;
  }
  
  return null;
}
```

### Q143: Implement a function to flatten a nested array
**Answer:**
```javascript
// Method 1: Built-in
function flatten(arr) {
  return arr.flat(Infinity);
}

// Method 2: Recursive
function flatten(arr) {
  return arr.reduce((flat, item) => 
    Array.isArray(item) ? flat.concat(flatten(item)) : flat.concat(item), []);
}

// Example
flatten([1, [2, [3, [4]], 5]]); // [1, 2, 3, 4, 5]
```

### Q144: Find the sum of array elements
**Answer:**
```javascript
// Method 1: Reduce
function sum(arr) {
  return arr.reduce((total, num) => total + num, 0);
}

// Method 2: Loop
function sum(arr) {
  let total = 0;
  for (let num of arr) {
    total += num;
  }
  return total;
}
```

### Q145: Implement debounce function
**Answer:**
```javascript
function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

// Usage
const debouncedSearch = debounce((query) => {
  console.log('Searching for:', query);
}, 300);
```

---

## Industry & Company Knowledge

### Q146: What do you know about TCS?
**Answer:** "TCS (Tata Consultancy Services) is one of the largest IT services companies globally, part of the Tata Group. They provide IT services, consulting, and business solutions across industries like banking, healthcare, retail, and manufacturing. TCS is known for their digital transformation projects, AI/ML initiatives, and innovation. TCS Prime is their premier hiring program for top engineering talent, offering accelerated career growth and exposure to cutting-edge technologies. I'm excited about TCS's focus on innovation and learning culture."

### Q147: What interests you about working in IT services?
**Answer:** "IT services offer exposure to diverse industries and technologies. I'm interested in solving real business problems through technology. Working at a company like TCS means working on projects for global clients, learning best practices, and scaling solutions. The variety of projects - from banking systems to healthcare applications - provides continuous learning opportunities. I also value the mentorship and structured growth path that IT services companies offer."

### Q148: Where do you see technology heading in the next 5 years?
**Answer:** "I see several key trends:
1. **AI Integration**: AI becoming embedded in every application
2. **Edge Computing**: Processing closer to data sources for real-time applications
3. **Web3**: Decentralized applications and blockchain integration
4. **Low-code/No-code**: Platforms like WebForge democratizing development
5. **Quantum Computing**: Moving from research to practical applications
6. **Sustainable Computing**: Focus on energy-efficient software

As a developer, I'm preparing by learning AI integration, staying updated with frameworks, and building skills that remain relevant regardless of specific technologies."

---

## Final Advanced Questions

### Q149: Explain event bubbling and capturing
**Answer:** Event propagation in DOM has three phases:
1. **Capturing**: Event travels from root to target
2. **Target**: Event reaches target element
3. **Bubbling**: Event bubbles up from target to root

```javascript
element.addEventListener('click', handler, false); // Bubbling (default)
element.addEventListener('click', handler, true);  // Capturing

// Stop propagation
event.stopPropagation();
```

### Q150: What is the difference between == and ===?
**Answer:**
- **==** (loose equality): Compares values after type coercion
- **===** (strict equality): Compares values and types, no coercion

```javascript
5 == '5'   // true (string coerced to number)
5 === '5'  // false (different types)
null == undefined  // true
null === undefined // false
```

Always prefer === to avoid unexpected behavior.

---

## Bonus: Questions to Ask the Interviewer

When asked "Do you have any questions for us?", ask thoughtful questions:

1. "What does a typical project lifecycle look like at TCS?"
2. "What technologies and frameworks does the team primarily work with?"
3. "How does TCS support continuous learning and certification?"
4. "What opportunities are there for working on innovative projects or R&D?"
5. "How is feedback and performance evaluation structured?"
6. "What does success look like in the first 6 months for this role?"
7. "How does TCS approach work-life balance?"
8. "What's the team structure and collaboration process?"
9. "Are there opportunities to work on open-source projects?"
10. "How does TCS stay current with emerging technologies?"

**Important**: Always have 2-3 questions ready. Not asking questions can signal lack of interest.

---

## Final Preparation Tips

### Day Before Interview:
- [ ] Review all your projects
- [ ] Practice explaining projects in 2-3 minutes
- [ ] Review common coding problems
- [ ] Prepare your introduction (1 minute)
- [ ] Test video/audio for online interview
- [ ] Keep resume, notepad, and water nearby
- [ ] Get 7-8 hours of sleep

### Interview Day:
- [ ] Dress professionally (even for virtual)
- [ ] Join 5 minutes early
- [ ] Have good lighting and quiet environment
- [ ] Keep phone on silent
- [ ] Smile and maintain good energy
- [ ] Take a moment to think before answering
- [ ] It's okay to say "I don't know, but here's how I'd approach it"

### After Interview:
- [ ] Send a thank-you email within 24 hours
- [ ] Note down questions you struggled with
- [ ] Follow up as instructed by recruiter

---

## Key Takeaways

**For Technical Questions:**
- Understand concepts deeply, don't just memorize
- Use examples from your projects when possible
- Explain your thinking process
- Write clean, readable code
- Test your code with examples

**For Behavioral Questions:**
- Use STAR method (Situation, Task, Action, Result)
- Be specific with examples
- Show self-awareness and growth mindset
- Be honest about challenges and what you learned
- Demonstrate teamwork and communication skills

**For Project Questions:**
- Know your projects inside-out
- Explain technical decisions and trade-offs
- Discuss challenges and how you overcame them
- Quantify impact where possible
- Be prepared for deep dives into any aspect

**General Interview Attitude:**
- Be confident but not arrogant
- Show enthusiasm for learning
- Demonstrate problem-solving approach
- Listen carefully to questions
- Ask for clarification if needed
- Be authentic and genuine

---

## Common Interview Mistakes - AVOID THESE:

1. ❌ Saying "I don't know" and stopping
   ✅ Say "I'm not sure, but here's how I'd figure it out"

2. ❌ Rushing into code without understanding the problem
   ✅ Ask clarifying questions first

3. ❌ Being vague about your projects
   ✅ Give specific technical details

4. ❌ Claiming you know everything
   ✅ Be honest about your knowledge level

5. ❌ Speaking negatively about previous experiences
   ✅ Focus on what you learned

6. ❌ Not preparing questions for the interviewer
   ✅ Always have thoughtful questions ready

7. ❌ Interrupting the interviewer
   ✅ Listen completely before responding

8. ❌ Making up answers
   ✅ Be honest if you don't know something

---

## Remember:

> "The interview is a conversation, not an interrogation. Show your thought process, your learning ability, and your passion for technology. Good luck!"

**You've got this! Your projects demonstrate strong technical skills and real-world problem-solving. Trust your preparation and be yourself.** 🚀

---

**Total Questions: 150+** covering every possible aspect of TCS Prime interviews based on your resume, skills, and experience level.