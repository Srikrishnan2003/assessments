
export const webTechQuestions = [
    {
        id: 'hi-web-001',
        question: 'Explain React Virtual DOM.',
        answer: `**Exact Answer:**
"The Virtual DOM is a lightweight copy of the real DOM kept in memory.
When state changes, React doesn't re-paint the screen immediately.
1.  It creates a new Virtual DOM tree.
2.  It compares it with the previous Virtual DOM (this process is called **Diffing**).
3.  It calculates the minimum number of changes needed.
4.  It updates only those specific elements in the Real DOM (this is **Reconciliation**).
This makes React fast."`
    },
    {
        id: 'hi-web-002',
        question: 'State vs Props in React.',
        answer: `**Exact Answer:**
"**Props** (Properties) are like arguments passed to a function. They are passed from a parent component to a child and are **Immutable** (child cannot change them).
**State** is like a local variable inside the function. It is managed *within* the component and can be changed (using \`setState\`).
In short: Props get data *in*; State manages data *within*."`
    },
    {
        id: 'hi-web-003',
        question: 'Explain React Hooks (useState, useEffect).',
        answer: `**Exact Answer:**
"Hooks let us use state and other React features in functional components.
1.  **useState:** Creates a state variable. \`const [count, setCount] = useState(0)\`. It returns the value and a function to update it.
2.  **useEffect:** Handles side-effects like API calls or subscriptions. It runs after the render. We control when it runs using the dependency array \`[]\`."`
    },
    {
        id: 'hi-web-004',
        question: 'What is Prop Drilling and how to avoid it?',
        answer: `**Exact Answer:**
"Prop Drilling works like a bucket brigade. It's when you pass data from a Parent -> Child -> Grandchild -> Great-Grandchild, where the middle components don't need the data but just pass it along.
To avoid it, we use:
1.  **Context API:** To make data available globally.
2.  **State Management:** like Redux or Zustand."`
    },
    {
        id: 'hi-web-005',
        question: 'Explain CSS Box Model.',
        answer: `**Exact Answer:**
"Every element in web design is a rectangular box. It has 4 layers, from inside out:
1.  **Content:** The text or image.
2.  **Padding:** The breathing room between content and border.
3.  **Border:** The edge of the box.
4.  **Margin:** The space between this box and other boxes.
I always use \`box-sizing: border-box\` so that padding doesn't increase the total width of the element."`
    },
    {
        id: 'hi-web-006',
        question: 'Flexbox vs Grid.',
        answer: `**Exact Answer:**
"**Flexbox** is one-dimensional. It's best for arranging items in a single row OR a single column (like a Navigation Bar or centering a button).
**CSS Grid** is two-dimensional. It handles both rows AND columns at the same time. It's best for defining the overall page layout (Header, Sidebar, Main Content, Footer)."`
    },
    {
        id: 'hi-web-007',
        question: 'ES6 Features (Arrow Functions, Destructuring).',
        answer: `**Exact Answer:**
"ES6 brought major improvements to JavaScript:
1.  **Arrow Functions:** Shorter syntax \`() => {}\` and they don't have their own \`this\` context.
2.  **Destructuring:** Extracting values easily. Instead of \`user.name\`, I can say \`const { name } = user\`.
3.  **Template Literals:** Using backticks to embed variables like \`Hello \${name}\`."`
    },
    {
        id: 'hi-web-008',
        question: 'Local Storage vs Session Storage vs Cookies.',
        answer: `**Exact Answer:**
"1.  **Local Storage:** Stores data permanently (up to 5MB). It stays even if I close the browser. Good for Theme settings.
2.  **Session Storage:** Stores data only for that tab. Close tab = Data lost. Good for Form data.
3.  **Cookies:** Small data (4KB) sent to the server with *every* request. Good for Authentication tokens."`
    },
    {
        id: 'hi-web-009',
        question: 'What is CORS?',
        answer: `**Exact Answer:**
"CORS stands for **Cross-Origin Resource Sharing**.
Browsers block frontend code (e.g., localhost:3000) from calling an API on a different domain (e.g., api.google.com) for security.
To fix this, the **Server** must send a specific header: \`Access-Control-Allow-Origin: *\`. This tells the browser, 'It's safe, let this domain access my data'."`
    },
    {
        id: 'hi-web-010',
        question: 'Server-Side Rendering (SSR) vs Client-Side Rendering (CSR).',
        answer: `**Exact Answer:**
"**CSR (Standard React):** The browser downloads a blank HTML page and a huge JS file. The browser then builds the UI. It's slow to start and bad for SEO (Google sees a blank page).
**SSR (Next.js):** The server builds the HTML *before* sending it. The user sees the content immediately. It's faster and great for SEO."`
    },
    {
        id: 'hi-web-011',
        question: 'Explain Event Loop in JavaScript.',
        answer: `**Exact Answer:**
"JavaScript is single-threaded (can do only one thing at a time). But it needs to handle slow tasks like API calls without freezing.
The **Event Loop** makes this possible.
1.  It puts slow tasks (like \`fetch\`) into a separate area (Web APIs).
2.  It continues running the main code (Call Stack).
3.  When the slow task finishes, it waits in a **Queue**.
4.  Once the main stack is empty, the Event Loop pushes the finished task back into the stack to execute. This is how async works."`
    },
    {
        id: 'hi-web-012',
        question: 'Hoisting in JavaScript.',
        answer: `**Exact Answer:**
"Hoisting is when JavaScript moves variable and function declarations to the top of the file before running the code.
*   **Functions** are fully hoisted (I can call them before writing them).
*   **var** variables are hoisted but are \`undefined\`.
*   **let and const** are hoisted but stay in a 'Temporal Dead Zone'—meaning if I try to access them before the line they are defined, the code crashes."`
    }
];
