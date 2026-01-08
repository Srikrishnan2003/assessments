// TCS Prime Interview Questions Data - Full answers from source file with proper markdown

export const tcsTopics = [
  {
    id: 'hr-intro',
    name: 'HR & Introduction',
    questions: [
      { id: 'tcs001', question: 'Tell me about yourself', answer: `"I'm Srikrishnan B, a Full-Stack Developer with a Master's in Computer Science from Sri Krishna College of Engineering. I specialize in building scalable web applications using JavaScript, TypeScript, React, and Next.js. I've completed internships at Accenture and currently at Virtusa, where I worked on GenAI-powered tools and full-stack projects. I'm passionate about creating intuitive user interfaces and leveraging AI tools like GitHub Copilot to accelerate development. My recent projects include WebForge, a visual Next.js builder, and a Charge Management System for banking workflows."` },
      { id: 'tcs002', question: 'Why TCS Prime?', answer: `"TCS Prime offers the perfect platform to work on cutting-edge technologies and complex enterprise solutions. I'm particularly drawn to TCS's focus on digital transformation and innovation. With my experience in full-stack development, AI integration, and building scalable applications, I believe I can contribute meaningfully to TCS's projects while growing as a developer in a structured, learning-focused environment."` },
      {
        id: 'tcs003', question: 'What are your strengths and weaknesses?', answer: `**Strengths:** "I'm a quick learner who adapts to new technologies rapidly. I have strong problem-solving skills, as demonstrated through my projects like WebForge. I'm also proficient at integrating AI tools to enhance productivity and automate workflows."

**Weaknesses:** "I sometimes focus too much on perfecting code quality, which can slow down initial iterations. However, I'm learning to balance quality with iterative development by following agile practices."` },
      { id: 'tcs004', question: 'Where do you see yourself in 5 years?', answer: `"In 5 years, I see myself as a technical lead or architect, guiding teams in building scalable enterprise applications. I want to deepen my expertise in cloud technologies and system design while mentoring junior developers. I'd also like to contribute to open-source projects and stay at the forefront of web development trends."` },
      { id: 'tcs005', question: 'Why should we hire you?', answer: `"I bring hands-on experience in full-stack development with modern frameworks like Next.js and React. I've built production-ready applications, automated workflows using AI, and worked in real-world supervised settings at Accenture and Virtusa. My ability to write clean, maintainable code and create intuitive UIs, combined with my passion for continuous learning, makes me a strong fit for TCS Prime."` },
    ]
  },
  {
    id: 'javascript',
    name: 'JavaScript & TypeScript',
    questions: [
      {
        id: 'tcs006', question: 'Explain the difference between let, const, and var', answer: `• **var**: Function-scoped, hoisted, can be redeclared
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
\`\`\`` },
      {
        id: 'tcs007', question: 'What are closures in JavaScript?', answer: `A closure is a function that has access to variables in its outer (enclosing) lexical scope, even after the outer function has returned.

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
\`\`\`` },
      {
        id: 'tcs008', question: 'Explain promises and async/await', answer: `• **Promises**: Objects representing eventual completion/failure of an asynchronous operation
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
\`\`\`` },
      {
        id: 'tcs009', question: 'What is the event loop in JavaScript?', answer: `The event loop is JavaScript's mechanism for handling asynchronous operations. It continuously checks the call stack and task queue, executing callbacks when the stack is empty.

**Order:** Call Stack → Microtasks (Promises) → Macrotasks (setTimeout, setInterval)` },
      {
        id: 'tcs010', question: 'Explain "this" keyword in JavaScript', answer: `\`this\` refers to the context in which a function is called:
• **In methods:** refers to the object
• **Alone:** refers to global object (window in browsers)
• **In arrow functions:** inherits from parent scope
• **In events:** refers to the element that received the event` },
      {
        id: 'tcs011', question: 'What are the differences between TypeScript and JavaScript?', answer: `• TypeScript is a superset of JavaScript with **static typing**
• Provides type checking at **compile time**
• Better IDE support with autocomplete and refactoring
• Supports **interfaces**, **enums**, and **generics**
• Catches errors **before runtime**` },
      {
        id: 'tcs012', question: 'Explain map, filter, and reduce', answer: `• **map**: Transforms each element and returns new array
• **filter**: Returns array with elements that pass a test
• **reduce**: Reduces array to single value

\`\`\`javascript
const nums = [1, 2, 3, 4];
const doubled = nums.map(n => n * 2);        // [2,4,6,8]
const even = nums.filter(n => n % 2 === 0);  // [2,4]
const sum = nums.reduce((acc, n) => acc + n, 0); // 10
\`\`\`` },
      {
        id: 'tcs013', question: 'What is the difference between Promise.all() and Promise.race()?', answer: `• **Promise.all()**: Waits for all promises to resolve. Returns array of results. Fails if any promise rejects.
• **Promise.race()**: Returns as soon as first promise settles (resolves or rejects)

\`\`\`javascript
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);

Promise.all([p1, p2]).then(values => console.log(values)); // [1, 2]
Promise.race([p1, p2]).then(value => console.log(value));  // 1
\`\`\`` },
      {
        id: 'tcs014', question: 'Explain debouncing and throttling', answer: `• **Debouncing**: Delays function execution until after a wait period. Use for search input.
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
\`\`\`` },
      {
        id: 'tcs015', question: 'What is hoisting in JavaScript?', answer: `Hoisting is JavaScript's behavior of moving declarations to the top of their scope during compilation.
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
\`\`\`` },
      {
        id: 'tcs016', question: 'Explain prototype and prototypal inheritance', answer: `JavaScript uses prototypal inheritance where objects inherit from other objects. Every object has a hidden \`[[Prototype]]\` property. When accessing a property, JS looks up the prototype chain.

\`\`\`javascript
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
  return \`Hello, I'm \${this.name}\`;
};

const john = new Person('John');
console.log(john.greet()); // "Hello, I'm John"
\`\`\`` },
      {
        id: 'tcs017', question: 'What are JavaScript modules? Explain import/export', answer: `Modules allow splitting code into reusable pieces. ES6 introduced \`import\` and \`export\`.

\`\`\`javascript
// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export default function multiply(a, b) { return a * b; }

// app.js
import multiply, { add, subtract } from './math.js';
import * as math from './math.js';
\`\`\`` },
      {
        id: 'tcs018', question: 'Explain call, apply, and bind', answer: `Methods to change the \`this\` context:
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
\`\`\`` },
      {
        id: 'tcs019', question: 'What is event delegation?', answer: `Event delegation uses event bubbling to handle events at a higher level rather than individual elements. Attach one listener to parent instead of multiple to children.

\`\`\`javascript
document.getElementById('parent').addEventListener('click', (e) => {
  if (e.target.matches('.child')) {
    console.log('Child clicked');
  }
});
\`\`\`` },
      {
        id: 'tcs020', question: 'Explain shallow copy vs deep copy', answer: `• **Shallow copy**: Copies first level only. Nested objects are referenced.
• **Deep copy**: Copies all levels recursively. Nested objects are cloned.

\`\`\`javascript
const obj = { a: 1, b: { c: 2 } };

// Shallow copy
const shallow = { ...obj };
shallow.b.c = 3; // Original also changes!

// Deep copy
const deep = JSON.parse(JSON.stringify(obj));
// Or use structuredClone(obj)
\`\`\`` },
    ]
  },
  {
    id: 'react',
    name: 'React & Next.js',
    questions: [
      {
        id: 'tcs021', question: 'What is React and why use it?', answer: `React is a JavaScript library for building user interfaces using reusable components.

**Benefits:**
• Component-based architecture for reusability
• Virtual DOM for efficient updates
• Unidirectional data flow for predictability
• Large ecosystem and community support
• Great for building SPAs` },
      {
        id: 'tcs022', question: 'Explain React hooks - useState and useEffect', answer: `• **useState**: Adds state to functional components
• **useEffect**: Handles side effects (API calls, subscriptions, DOM updates)

\`\`\`javascript
function Counter() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = \`Count: \${count}\`;
    // Cleanup function (optional)
    return () => console.log('Cleanup');
  }, [count]); // Dependency array
  
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
\`\`\`` },
      { id: 'tcs023', question: 'What is the Virtual DOM?', answer: `The Virtual DOM is a lightweight JavaScript representation of the actual DOM. React creates a virtual copy, compares it with the previous version (**diffing**), and updates only changed parts in the real DOM (**reconciliation**). This makes updates faster and more efficient.` },
      {
        id: 'tcs024', question: 'Explain props vs state in React', answer: `• **Props**: Data passed from parent to child, immutable, read-only
• **State**: Internal component data, mutable, managed by component itself` },
      {
        id: 'tcs025', question: 'What is Next.js and its advantages?', answer: `Next.js is a React framework for production with features like:
• **Server-Side Rendering (SSR)**: Better SEO and initial load
• **Static Site Generation (SSG)**: Pre-rendered pages at build time
• **File-based routing**: Automatic route creation from file structure
• **API Routes**: Backend endpoints in the same project
• **Image optimization**: Automatic image optimization
• **Built-in CSS support**: Tailwind, CSS modules, etc.` },
      {
        id: 'tcs026', question: 'Explain client-side vs server-side rendering', answer: `• **Client-Side Rendering (CSR)**: JavaScript renders content in browser. Fast navigation, poor initial SEO
• **Server-Side Rendering (SSR)**: HTML generated on server per request. Better SEO, slower navigation
• **Static Site Generation (SSG)**: HTML generated at build time. Fastest, great for static content` },
      {
        id: 'tcs027', question: 'What are React component lifecycle methods?', answer: `In functional components with hooks:
• **Mounting**: \`useEffect\` with empty dependency array \`[]\`
• **Updating**: \`useEffect\` with dependencies \`[dep]\`
• **Unmounting**: Cleanup function returned from \`useEffect\`` },
      {
        id: 'tcs028', question: 'Explain useContext and Context API', answer: `Context API provides a way to pass data through component tree without prop drilling.

\`\`\`javascript
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
\`\`\`` },
      {
        id: 'tcs029', question: 'Explain useMemo vs useCallback', answer: `• **useMemo**: Memoizes computed values to avoid expensive recalculations
• **useCallback**: Memoizes functions to prevent recreation on re-renders

\`\`\`javascript
const expensiveValue = useMemo(() => {
  return complexCalculation(data);
}, [data]);

const handleClick = useCallback(() => {
  console.log(count);
}, [count]);
\`\`\`` },
      {
        id: 'tcs030', question: 'What are custom hooks?', answer: `Custom hooks are reusable functions that use React hooks. Must start with \`use\`. Extract component logic into reusable functions.

\`\`\`javascript
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
\`\`\`` },
      {
        id: 'tcs031', question: 'Explain Next.js data fetching methods', answer: `• **getStaticProps**: Fetch data at build time (SSG). For static content.
• **getServerSideProps**: Fetch data on each request (SSR). For dynamic content.
• **getStaticPaths**: Define dynamic routes for static generation
• **Client-side fetching**: Using \`useEffect\` or SWR

\`\`\`javascript
export async function getStaticProps() {
  const data = await fetch('https://api.example.com/data');
  return { props: { data: await data.json() } };
}
\`\`\`` },
      {
        id: 'tcs032', question: 'What is ISR in Next.js?', answer: `**Incremental Static Regeneration** allows updating static pages after build without rebuilding entire site. Use \`revalidate\` in getStaticProps.

\`\`\`javascript
export async function getStaticProps() {
  const data = await fetch('https://api.example.com/data');
  return {
    props: { data: await data.json() },
    revalidate: 60 // Regenerate page every 60 seconds
  };
}
\`\`\`` },
    ]
  },
  {
    id: 'backend',
    name: 'Backend & APIs',
    questions: [
      {
        id: 'tcs033', question: 'What is REST API?', answer: `**REST** (Representational State Transfer) is an architectural style for designing networked applications.

**Principles:**
• **Stateless**: Each request contains all necessary information
• **Client-Server**: Separation of concerns
• **Cacheable**: Responses can be cached
• **Uniform Interface**: Standard HTTP methods (GET, POST, PUT, DELETE)` },
      {
        id: 'tcs034', question: 'Explain HTTP methods', answer: `• **GET**: Retrieve data, idempotent, cacheable
• **POST**: Create new resource, not idempotent
• **PUT**: Update entire resource, idempotent
• **PATCH**: Partial update
• **DELETE**: Remove resource, idempotent` },
      {
        id: 'tcs035', question: 'What is Node.js?', answer: `Node.js is a JavaScript runtime built on Chrome's V8 engine that allows JavaScript to run on the server.

**Benefits:**
• Non-blocking I/O for handling concurrent requests
• Same language (JavaScript) for frontend and backend
• Large npm ecosystem
• Event-driven architecture` },
      {
        id: 'tcs036', question: 'Explain middleware in Express.js', answer: `Middleware functions have access to request, response, and next function. They can:
• Execute code
• Modify request/response objects
• End request-response cycle
• Call next middleware

\`\`\`javascript
app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

app.use('/api', authMiddleware);
\`\`\`` },
      { id: 'tcs037', question: 'What is CORS?', answer: `**Cross-Origin Resource Sharing** allows restricted resources on a web page to be requested from another domain. Browsers block cross-origin requests for security. CORS headers allow controlled access.` },
      {
        id: 'tcs038', question: 'Explain authentication vs authorization', answer: `• **Authentication**: Verifying **who you are** (login with username/password)
• **Authorization**: Verifying **what you can access** (role-based permissions)` },
      {
        id: 'tcs039', question: 'What is JWT?', answer: `**JSON Web Token** is a compact, URL-safe token for securely transmitting information between parties.

**Structure:** \`Header.Payload.Signature\`

Used for stateless authentication.` },
      {
        id: 'tcs040', question: 'Explain database indexing', answer: `Indexes are data structures that improve query speed by creating pointers to data.

**Trade-off:** Faster reads, slower writes. Use for frequently queried columns.` },
    ]
  },
  {
    id: 'dsa',
    name: 'Data Structures & Algorithms',
    questions: [
      {
        id: 'tcs041', question: 'Explain different data structures', answer: `• **Array**: Contiguous memory, O(1) access, O(n) insertion
• **Linked List**: Non-contiguous, O(1) insertion, O(n) access
• **Stack**: LIFO, used in recursion, undo operations
• **Queue**: FIFO, used in BFS, task scheduling
• **Hash Table**: Key-value pairs, O(1) average access
• **Tree**: Hierarchical, used in file systems, DOM
• **Graph**: Nodes and edges, used in networks, social media` },
      {
        id: 'tcs042', question: 'What is time complexity? Explain Big O notation', answer: `Time complexity measures algorithm efficiency as input grows.

• **O(1)**: Constant - array access
• **O(log n)**: Logarithmic - binary search
• **O(n)**: Linear - single loop
• **O(n log n)**: Linearithmic - merge sort
• **O(n²)**: Quadratic - nested loops
• **O(2ⁿ)**: Exponential - recursive fibonacci` },
      {
        id: 'tcs043', question: 'Explain sorting algorithms', answer: `• **Bubble Sort**: O(n²), simple, compares adjacent elements
• **Quick Sort**: O(n log n) average, divide and conquer
• **Merge Sort**: O(n log n), stable, divide and conquer
• **Insertion Sort**: O(n²), efficient for small/nearly sorted data` },
      {
        id: 'tcs044', question: 'What is recursion?', answer: `A function calling itself to solve smaller instances of the same problem. Requires **base case** to stop recursion.

\`\`\`javascript
function factorial(n) {
  if (n <= 1) return 1; // Base case
  return n * factorial(n - 1); // Recursive case
}
\`\`\`` },
      {
        id: 'tcs045', question: 'Explain searching algorithms', answer: `• **Linear Search**: O(n), checks each element sequentially
• **Binary Search**: O(log n), requires sorted array, divides search space in half` },
      {
        id: 'tcs046', question: 'What are linked lists? Types?', answer: `Linear data structure where elements are stored in nodes with pointers.
• **Singly Linked**: Each node points to next
• **Doubly Linked**: Each node points to next and previous
• **Circular**: Last node points to first` },
      {
        id: 'tcs047', question: 'Explain stack and queue operations', answer: `**Stack (LIFO):**
• \`push(item)\` - add to top
• \`pop()\` - remove from top
• \`peek()\` - view top element

**Queue (FIFO):**
• \`enqueue(item)\` - add to rear
• \`dequeue()\` - remove from front
• \`front()\` - view front element` },
    ]
  },
  {
    id: 'projects',
    name: 'Project-Based',
    questions: [
      {
        id: 'tcs048', question: 'Explain your WebForge project', answer: `"WebForge is a visual Next.js builder I created for my final year project. It allows developers to build production-ready Next.js applications using a drag-and-drop interface combined with live code editing. I built a Figma-style canvas with a Monaco editor (like VS Code) that synchronizes visual design with code. The system implements a procedural Next.js workflow with file-system navigation, layout control, and reusable components. The goal was to minimize the design-development mismatch by generating clean, production-ready Next.js code directly from visual designs."

**Key Technical Points:**
• Built with Next.js and React
• Integrated Monaco editor for live code editing
• Implemented drag-and-drop UI with React DnD
• Real-time synchronization between visual and code views
• File-system based routing generation` },
      { id: 'tcs049', question: 'Tell me about your Charge Management System', answer: `"I built this as a capstone project at Virtusa. It's a banking platform for managing charges for customers and admin users. I created a Spring Boot backend handling authentication, charge configuration, transaction history, and billing logic. The frontend is a React dashboard with role-based access control, allowing users to view, apply, and audit charges. I designed modular REST APIs with structured data models that integrate seamlessly with banking workflows. This project taught me about enterprise-level security, role-based permissions, and building scalable financial systems."` },
      { id: 'tcs050', question: 'Explain your GenAI Software Developer Assistant', answer: `"I created this chatbot using Next.js and Hugging Face's DeepSeek Coder R1 model during my Accenture internship. It helps developers with code generation, testing, and documentation. I engineered custom prompts tailored to each task type - whether writing code, creating tests, or generating documentation. The system includes a memory mechanism that saves the last 5 messages to maintain context across conversations. This project demonstrated how AI can automate repetitive development tasks and boost productivity."` },
      { id: 'tcs051', question: 'What is Focus Flow?', answer: `"Focus Flow is an all-in-one productivity web app I built for students. It includes note-taking with Speech-to-Text and Text-to-Speech, task management, and a collaborative whiteboard. I designed a Kanban-style task manager using Next.js and Tailwind CSS with visual status tracking and calendar integration for real-time notifications. The interface is lightweight and mobile-responsive, making it accessible across devices. This project taught me about building cohesive user experiences and integrating multiple features into a single application."` },
      { id: 'tcs052', question: 'What challenges did you face in WebForge?', answer: `"The biggest challenge was synchronizing the visual canvas with code in real-time without performance issues. I had to implement efficient state management to track component positions, styles, and properties. Another challenge was generating clean, idiomatic Next.js code from visual designs - I had to ensure proper file structure, routing, and component composition. I solved this by creating a code generation engine that follows Next.js conventions and best practices."` },
      { id: 'tcs053', question: 'How did you implement authentication in your projects?', answer: `"In my projects, I used **Clerk** for authentication - a modern auth solution that handles user management, sessions, and security. For the Charge Management System, I implemented **Spring Boot Security** with **JWT tokens** for stateless authentication. I also ensured role-based access control to restrict features based on user roles (customer vs admin)."` },
    ]
  },
  {
    id: 'scenarios',
    name: 'Scenario-Based',
    questions: [
      {
        id: 'tcs054', question: 'How would you optimize a slow React application?', answer: `1. **Code splitting**: Lazy load components with \`React.lazy()\`
2. **Memoization**: Use \`React.memo\`, \`useMemo\`, \`useCallback\`
3. **Virtual scrolling**: For long lists (react-window)
4. **Image optimization**: Use Next.js Image component
5. **Reduce re-renders**: Proper state management, avoid inline functions
6. **Bundle analysis**: Use webpack-bundle-analyzer
7. **API optimization**: Debounce, throttle, caching` },
      {
        id: 'tcs055', question: 'How do you handle errors in JavaScript?', answer: `\`\`\`javascript
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
\`\`\`` },
      {
        id: 'tcs056', question: 'How would you debug a production issue?', answer: `1. **Check error logs**: Console, server logs, error tracking (Sentry)
2. **Reproduce**: Try to replicate the issue
3. **Isolate**: Use console.log, debugger, or Chrome DevTools
4. **Check recent changes**: Git history, deployment logs
5. **Monitor**: Use APM tools to track performance
6. **Fix and test**: Deploy fix with proper testing
7. **Post-mortem**: Document issue and prevention steps` },
      {
        id: 'tcs057', question: 'How do you ensure code quality?', answer: `1. **Write clean, readable code**: Follow naming conventions
2. **Code reviews**: Peer review before merging
3. **Testing**: Unit tests, integration tests, E2E tests
4. **Linting**: ESLint for JavaScript/TypeScript
5. **Type checking**: TypeScript for type safety
6. **Documentation**: Comment complex logic, maintain README
7. **Version control**: Meaningful commit messages` },
      { id: 'tcs058', question: 'Explain your approach to learning new technologies', answer: `"I follow a structured approach: First, I go through official documentation to understand core concepts. Then I build small projects to apply what I learned. I also take LinkedIn Learning courses like the ones I completed for Next.js, Node.js, and React. I use AI tools like ChatGPT and GitHub Copilot to accelerate learning and clarify doubts. Finally, I read articles, watch tutorials, and participate in developer communities to stay updated."` },
      { id: 'tcs059', question: 'How do you manage your time on multiple projects?', answer: `"I use task management tools and break projects into smaller milestones. I prioritize based on deadlines and impact. I also use my Focus Flow app's Kanban board to track tasks visually. I dedicate specific time blocks to each project and use the Pomodoro technique to maintain focus. Regular communication with stakeholders helps me stay aligned with expectations."` },
      { id: 'tcs060', question: 'How would you implement a feature with unclear requirements?', answer: `"I would first clarify requirements by asking specific questions to stakeholders. I'd create mockups or wireframes to visualize the feature. Then I'd break it into smaller, manageable tasks and develop an MVP (Minimum Viable Product) to get early feedback. I'd iterate based on feedback and document decisions made along the way."` },
    ]
  },
  {
    id: 'ai-modern',
    name: 'AI & Modern Development',
    questions: [
      { id: 'tcs061', question: 'How do you use AI tools in development?', answer: `"I use **GitHub Copilot** for code suggestions and boilerplate generation. **ChatGPT** helps me understand complex concepts, debug issues, and generate documentation. I've integrated Hugging Face models into my GenAI Developer Assistant for code generation. I also use prompt engineering techniques to get better outputs from AI models. These tools significantly accelerate development and help me explore different approaches quickly."` },
      { id: 'tcs062', question: 'What is prompt engineering?', answer: `"Prompt engineering is the practice of designing effective inputs for AI models to get desired outputs. It involves being specific, providing context, using examples (few-shot learning), and iteratively refining prompts. In my GenAI Assistant, I created task-specific prompts for code generation, testing, and documentation to ensure consistent, high-quality outputs."` },
      { id: 'tcs063', question: 'How do you stay updated with technology trends?', answer: `"I follow tech blogs like Dev.to, Medium, and official framework documentation. I subscribe to newsletters like JavaScript Weekly. I take online courses on LinkedIn Learning. I also experiment with new technologies in personal projects. Following developers on GitHub and Twitter helps me discover emerging tools and best practices."` },
      { id: 'tcs064', question: 'What are your thoughts on AI replacing developers?', answer: `"AI is a powerful tool that **augments** developer capabilities rather than replacing them. While AI can generate code and automate repetitive tasks, it still requires human oversight for architecture decisions, understanding business logic, debugging complex issues, and ensuring code quality. Developers who learn to leverage AI effectively will be more productive and valuable."` },
      {
        id: 'tcs065', question: 'Explain Agile methodology', answer: `"**Agile** is an iterative development approach with short cycles (sprints).

**Key principles:** customer collaboration, responding to change, working software over documentation.

**Common frameworks:** Scrum (sprints, daily standups, retrospectives) and Kanban (visual workflow)."` },
      {
        id: 'tcs066', question: 'What is Git? Explain common commands', answer: `"**Git** is a distributed version control system.

**Common commands:**
• \`git init\` - initialize repository
• \`git clone\` - copy repository
• \`git add\` - stage changes
• \`git commit\` - save changes
• \`git push\` - upload to remote
• \`git pull\` - download from remote
• \`git branch\` - manage branches
• \`git merge\` - combine branches"` },
      {
        id: 'tcs067', question: 'Explain responsive design', answer: `"Responsive design ensures websites work on all devices.

**Techniques:**
• Flexible grids with percentages
• Media queries for different screen sizes
• Flexible images (\`max-width: 100%\`)
• Mobile-first approach
• Frameworks like Tailwind CSS with responsive utilities"` },
      {
        id: 'tcs068', question: 'What are web security best practices?', answer: `1. **Input validation**: Sanitize user inputs
2. **HTTPS**: Encrypt data in transit
3. **Authentication**: Use secure methods (OAuth, JWT)
4. **SQL Injection prevention**: Use parameterized queries
5. **XSS prevention**: Escape user content
6. **CSRF protection**: Use tokens
7. **Regular updates**: Keep dependencies updated
8. **Rate limiting**: Prevent brute force attacks` },
    ]
  }
];

export const tcsExamInfo = {
  examType: 'TCS Prime Interview',
  rounds: 'HR + Technical',
  format: 'Virtual/In-person',
  duration: '45-60 minutes per round',
  topics: 'HR, JavaScript, React, Node.js, DSA, Projects'
};

export const getTcsTotalQuestionCount = () => {
  return tcsTopics.reduce((acc, topic) => acc + topic.questions.length, 0);
};

export default tcsTopics;
