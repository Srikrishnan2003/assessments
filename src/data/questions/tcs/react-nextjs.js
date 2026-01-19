// TCS Prime Interview - React & Next.js Questions

export const reactQuestions = [
  {
    id: 'tcs013',
    question: 'What is React and why use it?',
    answer: `### Simple Explanation
React is a JavaScript library for building user interfaces. It lets you create reusable UI components that update efficiently when data changes. Think of it as building with LEGO blocks - each component is a block you can use and reuse.

### Real-World Analogy
Building a website without React is like painting a new picture every time something changes. With React, you have stickers (components) - you only replace the sticker that changed, not the whole picture.

### Technical Details
| Feature | Description |
|---------|-------------|
| **Component-Based** | Build encapsulated, reusable UI pieces |
| **Virtual DOM** | Efficiently updates only what changed |
| **Unidirectional Data Flow** | Data flows one way - easier to debug |
| **Declarative** | Describe what UI should look like, React handles how |
| **JSX** | Write HTML-like syntax in JavaScript |

### Code Example
\`\`\`jsx
// A simple React component
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// Using the component
function App() {
  return (
    <div>
      <Greeting name="John" />
      <Greeting name="Jane" />  {/* Reusable! */}
    </div>
  );
}
\`\`\`

### Why It Matters
React is the most popular frontend library because it makes building complex, interactive UIs manageable. Companies like Facebook, Netflix, and Airbnb use it for their web applications.`
  },
  {
    id: 'tcs014',
    question: 'Explain React hooks - useState and useEffect',
    answer: `### Simple Explanation
Hooks let you use state and other React features in function components:
- **useState** - Remember values between renders (like a component's memory)
- **useEffect** - Run code when something changes (like responding to events)

### Real-World Analogy
- **useState**: A whiteboard in your room. You can write on it, erase it, and it stays there until you change it.
- **useEffect**: An alarm system. When something specific happens (dependencies change), it triggers an action.

### Technical Details
| Hook | Purpose | Runs |
|------|---------|------|
| **useState** | Store and update values | On every re-render (value persists) |
| **useEffect** | Side effects (API calls, subscriptions) | After render, based on dependencies |

### Code Example
\`\`\`jsx
import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  // useState: [currentValue, functionToUpdateIt] = useState(initialValue)
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // useEffect: useEffect(callback, dependencies)
  useEffect(() => {
    // This runs when userId changes
    setLoading(true);
    
    fetch(\`/api/users/\${userId}\`)
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      });
    
    // Cleanup function (optional) - runs before next effect or unmount
    return () => {
      console.log('Cleaning up previous effect');
    };
  }, [userId]);  // Dependency array - re-run when userId changes
  
  // [] = run once on mount
  // [userId] = run when userId changes
  // no array = run on every render (usually wrong)
  
  if (loading) return <p>Loading...</p>;
  return <h1>{user.name}</h1>;
}
\`\`\`

### Why It Matters
Hooks replaced class components, making React code simpler and more reusable. They're the standard way to manage state and side effects in modern React.`
  },
  {
    id: 'tcs015',
    question: 'What is the Virtual DOM?',
    answer: `### Simple Explanation
The Virtual DOM is a lightweight copy of the actual webpage (DOM) that React keeps in memory. When data changes, React first updates this copy, compares it with the previous version, and then updates only the parts of the real webpage that actually changed.

### Real-World Analogy
Imagine editing a document:
- **Without Virtual DOM**: Print the whole document, make one change, throw it away, print the whole thing again
- **With Virtual DOM**: Use track changes to see exactly what's different, then apply only those changes to the printed copy

### Technical Details
**The Process (Reconciliation):**
1. Data changes in component
2. React creates new Virtual DOM tree
3. React compares (diffs) new tree with previous
4. Identifies minimum changes needed
5. Updates only those parts in real DOM

| Real DOM | Virtual DOM |
|----------|-------------|
| Slow to update | Fast to update |
| Expensive operations | Cheap operations |
| Direct manipulation | Batched updates |

### Code Example
\`\`\`jsx
// When count changes, React:
// 1. Creates new Virtual DOM with new count
// 2. Compares: only the <span> text changed
// 3. Updates only that <span> in real DOM

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>                          {/* Not re-created */}
      <h1>Counter App</h1>          {/* Not re-created */}
      <span>{count}</span>          {/* Only this updates */}
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>                     {/* Not re-created */}
    </div>
  );
}
\`\`\`

### Why It Matters
Virtual DOM makes React fast. Instead of re-rendering entire pages, React surgically updates only what's necessary. This is why React apps feel responsive even with complex UIs.`
  },
  {
    id: 'tcs016',
    question: 'Explain props vs state in React',
    answer: `### Simple Explanation
- **Props**: Data passed FROM parent TO child - like function parameters, read-only
- **State**: Data owned BY the component - like component's personal memory, can be changed

### Real-World Analogy
- **Props**: A gift you receive. You can use it, but you can't change what was given to you.
- **State**: Your personal diary. You own it and can write/update it whenever you want.

### Technical Details
| Feature | Props | State |
|---------|-------|-------|
| **Passed by** | Parent component | Component itself |
| **Mutable** | No (read-only) | Yes (within component) |
| **Updates** | When parent re-renders | Using setState/setter |
| **Purpose** | Configure component | Track dynamic data |

### Code Example
\`\`\`jsx
// PROPS - Passed from parent
function ProductCard({ name, price, onBuy }) {  // Receiving props
  return (
    <div>
      <h2>{name}</h2>       {/* Using props */}
      <p>\${price}</p>
      <button onClick={onBuy}>Buy</button>  {/* Calling prop function */}
    </div>
  );
}

// STATE - Managed internally
function ShoppingCart() {
  const [items, setItems] = useState([]);     // State: cart items
  const [total, setTotal] = useState(0);      // State: total price
  
  const addItem = (product) => {
    setItems([...items, product]);            // Updating state
    setTotal(total + product.price);
  };
  
  return (
    <div>
      <h1>Cart ({items.length} items)</h1>
      <ProductCard 
        name="Laptop" 
        price={999} 
        onBuy={() => addItem({ name: 'Laptop', price: 999 })}
      />
      {/* Passing state as props to children */}
      <CartSummary items={items} total={total} />
    </div>
  );
}
\`\`\`

### Why It Matters
Understanding props vs state is fundamental to React. Props create component relationships (parent-child communication), while state enables dynamic, interactive UIs.`
  },
  {
    id: 'tcs017',
    question: 'What is Next.js and its advantages?',
    answer: `### Simple Explanation
Next.js is a React framework that adds powerful features on top of React - like server-side rendering, file-based routing, and built-in API routes. It's React with superpowers for building production-ready websites.

### Real-World Analogy
- **React** is like a car engine - powerful but you need to build everything around it
- **Next.js** is like a complete car - engine included plus seats, wheels, GPS, and everything ready to drive

### Technical Details
| Feature | Description |
|---------|-------------|
| **SSR/SSG** | Render pages on server or at build time |
| **File-based Routing** | Create routes by adding files |
| **API Routes** | Build backend endpoints in same project |
| **Image Optimization** | Automatic image compression and lazy loading |
| **Code Splitting** | Automatic bundle optimization |

### Code Example
\`\`\`jsx
// pages/products/[id].js - Dynamic route created automatically!

export default function ProductPage({ product }) {
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
}

// Server-side data fetching
export async function getServerSideProps({ params }) {
  const res = await fetch(\`https://api.example.com/products/\${params.id}\`);
  const product = await res.json();
  
  return { props: { product } };  // Passed to component
}

// File structure = Routes:
// pages/index.js       → /
// pages/about.js       → /about
// pages/products/[id].js → /products/123
\`\`\`

### Why It Matters
Next.js solves common React challenges: SEO, performance, and developer experience. It's the go-to choice for production React applications.`
  },
  {
    id: 'tcs018',
    question: 'Explain client-side vs server-side rendering',
    answer: `### Simple Explanation
- **CSR (Client-Side)**: Browser downloads empty page, JavaScript builds the content
- **SSR (Server-Side)**: Server builds complete HTML, browser displays it immediately
- **SSG (Static)**: HTML built at deploy time, served instantly

### Real-World Analogy
- **CSR**: Ordering furniture pieces, assembling at home
- **SSR**: Ordering pre-assembled furniture, delivered ready
- **SSG**: Buying display furniture directly from showroom

### Technical Details
| Type | When Rendered | SEO | Initial Load | Interactive |
|------|---------------|-----|--------------|-------------|
| **CSR** | In browser | Poor | Slow | After JS loads |
| **SSR** | Per request | Good | Fast | After hydration |
| **SSG** | Build time | Best | Fastest | After hydration |

### Code Example
\`\`\`jsx
// CSR - Client-side rendering (default React)
function CSRPage() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('/api/data').then(r => r.json()).then(setData);
  }, []);
  return data ? <Content data={data} /> : <Loading />;
}

// SSR - Server-side rendering (Next.js)
export async function getServerSideProps() {
  const data = await fetch('https://api.example.com/data');
  return { props: { data: await data.json() } };
}
function SSRPage({ data }) {
  return <Content data={data} />;  // Already has data!
}

// SSG - Static site generation (Next.js)
export async function getStaticProps() {
  const data = await fetch('https://api.example.com/data');
  return { 
    props: { data: await data.json() },
    revalidate: 3600  // Regenerate every hour (ISR)
  };
}
\`\`\`

### Why It Matters
Choose based on needs: SSG for blogs/marketing, SSR for dynamic content with SEO, CSR for dashboards. Next.js lets you mix them in one app.`
  },
  {
    id: 'tcs019',
    question: 'What are React component lifecycle methods?',
    answer: `### Simple Explanation
Lifecycle methods are hooks into different stages of a component's life: when it appears (mounts), updates, or disappears (unmounts). In modern React, we use the useEffect hook to handle these stages.

### Real-World Analogy
Like a person's life stages:
- **Mounting**: Birth - setup, first appearance
- **Updating**: Growing - responding to changes
- **Unmounting**: Moving away - cleanup, saying goodbye

### Technical Details
| Lifecycle Stage | Class Method | Hook Equivalent |
|-----------------|--------------|-----------------|
| **Mount** | componentDidMount | useEffect(() => {}, []) |
| **Update** | componentDidUpdate | useEffect(() => {}, [deps]) |
| **Unmount** | componentWillUnmount | useEffect cleanup function |

### Code Example
\`\`\`jsx
import { useState, useEffect } from 'react';

function LifecycleDemo({ userId }) {
  const [data, setData] = useState(null);
  
  // MOUNTING - runs once when component appears
  useEffect(() => {
    console.log('Component mounted - like componentDidMount');
    
    // Setup: subscriptions, event listeners
    window.addEventListener('resize', handleResize);
    
    // UNMOUNTING - cleanup when component disappears
    return () => {
      console.log('Component unmounting - cleanup');
      window.removeEventListener('resize', handleResize);
    };
  }, []);  // Empty array = mount/unmount only
  
  // UPDATING - runs when userId changes
  useEffect(() => {
    console.log('userId changed - fetching new data');
    fetchUserData(userId);
  }, [userId]);  // Runs on mount AND when userId changes
  
  return <div>{data}</div>;
}

// Class component equivalent (for reference):
class ClassLifecycle extends React.Component {
  componentDidMount() { /* setup */ }
  componentDidUpdate(prevProps) { /* responded to change */ }
  componentWillUnmount() { /* cleanup */ }
}
\`\`\`

### Why It Matters
Understanding lifecycle helps you: fetch data at the right time, set up subscriptions, clean up resources, and avoid memory leaks.`
  },
  {
    id: 'tcs020',
    question: 'Explain useContext and Context API',
    answer: `### Simple Explanation
Context provides a way to share data across many components without passing props through every level. It's like a broadcast system - one component provides data, any nested component can access it directly.

### Real-World Analogy
Without Context: Passing a message through a chain of people (A tells B, B tells C, C tells D)
With Context: Using a loudspeaker announcement - everyone can hear directly

### Technical Details
| Without Context | With Context |
|-----------------|--------------|
| Props passed level by level | Data accessible anywhere |
| Prop drilling (messy) | Clean component tree |
| Every component needs prop | Only consumers need import |

### Code Example
\`\`\`jsx
import { createContext, useContext, useState } from 'react';

// 1. CREATE CONTEXT
const ThemeContext = createContext('light');

// 2. PROVIDER - Wraps components that need access
function App() {
  const [theme, setTheme] = useState('dark');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Header />
      <Main />
      <Footer />
    </ThemeContext.Provider>
  );
}

// 3. CONSUME - Any nested component can access
function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
  
  return (
    <header className={theme}>
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        Toggle Theme
      </button>
    </header>
  );
}

// Deep nested component - no prop drilling!
function DeepNestedButton() {
  const { theme } = useContext(ThemeContext);  // Direct access
  return <button className={theme}>Click me</button>;
}
\`\`\`

### Why It Matters
Context prevents "prop drilling" - passing props through many levels. Use it for themes, authentication, language settings, or any global state.`
  },
  {
    id: 'tcs066',
    question: 'What is React reconciliation?',
    answer: `### Simple Explanation
Reconciliation is React's algorithm for efficiently updating the DOM. When state changes, React compares the new Virtual DOM with the old one (diffing) and applies only the necessary changes to the real DOM.

### Real-World Analogy
Like a spot-the-difference game. Instead of redrawing the whole picture, you circle only the parts that changed.

### Technical Details
**Key Concepts:**
1. **Same type** = Update existing element
2. **Different type** = Destroy old, create new
3. **Keys** = Help React identify list items

### Code Example
\`\`\`jsx
// WITHOUT keys - React can't track items efficiently
{items.map(item => <ListItem name={item.name} />)}  // ❌

// WITH keys - React knows exactly what changed
{items.map(item => <ListItem key={item.id} name={item.name} />)}  // ✅

// Why keys matter - reordering a list:
// Before: [A, B, C]  After: [C, A, B]
// Without keys: React might update all three items
// With keys: React moves existing elements (faster)
\`\`\`

### Why It Matters
Understanding reconciliation helps you write performant React code. Use stable keys, avoid unnecessary re-renders, and structure components wisely.`
  },
  {
    id: 'tcs067',
    question: 'Explain useMemo vs useCallback',
    answer: `### Simple Explanation
Both are optimization hooks that "remember" values between renders:
- **useMemo**: Caches a computed VALUE
- **useCallback**: Caches a FUNCTION reference

### Real-World Analogy
- **useMemo**: Caching a math result. 2+2=4, don't recalculate every time.
- **useCallback**: Speed dial on your phone. Same function, same reference.

### Technical Details
| Hook | Returns | Use When |
|------|---------|----------|
| **useMemo** | Cached value | Expensive calculations |
| **useCallback** | Cached function | Passing functions to child components |

### Code Example
\`\`\`jsx
function ProductList({ products, filter }) {
  // useMemo - Cache expensive calculation
  const filteredProducts = useMemo(() => {
    console.log('Filtering products...');  // Only runs when deps change
    return products.filter(p => p.category === filter);
  }, [products, filter]);
  
  // useCallback - Cache function reference
  const handleClick = useCallback((id) => {
    console.log('Product clicked:', id);
  }, []);  // Same function reference across renders
  
  return (
    <div>
      {filteredProducts.map(product => (
        <ProductItem 
          key={product.id}
          product={product}
          onClick={handleClick}  // Same reference = no re-render
        />
      ))}
    </div>
  );
}

// Without useCallback, ProductItem re-renders every time
// because onClick is a "new" function each render
const ProductItem = React.memo(({ product, onClick }) => {
  console.log('Rendering:', product.name);
  return <div onClick={() => onClick(product.id)}>{product.name}</div>;
});
\`\`\`

### Why It Matters
Use sparingly! Only optimize when there's a proven performance issue. Premature optimization adds complexity without benefit.`
  },
  {
    id: 'tcs068',
    question: 'What are custom hooks?',
    answer: `### Simple Explanation
Custom hooks are functions that let you extract and reuse stateful logic. They start with "use" and can call other hooks. Think of them as reusable recipes for component logic.

### Real-World Analogy
Like a recipe book. Instead of writing cooking instructions in every meal, you create a recipe once and reference it whenever needed.

### Code Example
\`\`\`jsx
// Custom hook for form handling
function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };
  
  const reset = () => setValues(initialValues);
  
  return { values, errors, handleChange, reset, setErrors };
}

// Usage in any component
function LoginForm() {
  const { values, handleChange, reset } = useForm({ email: '', password: '' });
  
  return (
    <form>
      <input name="email" value={values.email} onChange={handleChange} />
      <input name="password" value={values.password} onChange={handleChange} />
      <button type="button" onClick={reset}>Reset</button>
    </form>
  );
}

// Custom hook for API fetching
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);
  
  return { data, loading, error };
}

// Reuse anywhere!
function UserProfile({ userId }) {
  const { data: user, loading } = useFetch(\`/api/users/\${userId}\`);
  if (loading) return <Spinner />;
  return <Profile user={user} />;
}
\`\`\`

### Why It Matters
Custom hooks promote code reuse, keep components clean, and make testing easier. They're the React way to share logic.`
  },
  {
    id: 'tcs069',
    question: 'Explain React.memo and when to use it',
    answer: `### Simple Explanation
React.memo is a higher-order component that prevents re-renders if props haven't changed. It's like telling React: "Don't bother updating this component unless its inputs actually changed."

### Real-World Analogy
Like a lazy student who only rewrites their homework if the questions changed. Same questions? Submit the previous answers.

### Code Example
\`\`\`jsx
// WITHOUT memo - re-renders on every parent render
function ExpensiveList({ items }) {
  console.log('Rendering list...');  // Runs too often!
  return items.map(item => <Item key={item.id} {...item} />);
}

// WITH memo - only re-renders if items actually changed
const MemoizedList = React.memo(function ExpensiveList({ items }) {
  console.log('Rendering list...');  // Only when items change
  return items.map(item => <Item key={item.id} {...item} />);
});

// Custom comparison (optional)
const DeepMemoList = React.memo(ExpensiveList, (prevProps, nextProps) => {
  return prevProps.items.length === nextProps.items.length;
});

// When to use:
// ✅ Expensive rendering components
// ✅ Components that receive same props often
// ❌ Simple components (memo overhead not worth it)
// ❌ Components that always get new props
\`\`\`

### Why It Matters
Prevents unnecessary re-renders in large apps, but don't overuse - the comparison has a cost too.`
  },
  {
    id: 'tcs070',
    question: 'What is useReducer? When to use it over useState?',
    answer: `### Simple Explanation
useReducer is like useState but for complex state logic. Instead of directly setting state, you dispatch actions that describe what happened, and a reducer function determines the new state.

### Real-World Analogy
- **useState**: Directly editing a document
- **useReducer**: Sending command requests (edit, delete, bold) to an editor who makes the changes

### Technical Details
| Use useState | Use useReducer |
|--------------|----------------|
| Simple values | Complex objects |
| Independent updates | Related state changes |
| Few states | Many state transitions |

### Code Example
\`\`\`jsx
// Reducer function: (currentState, action) => newState
function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return { 
        ...state, 
        items: [...state.items, action.payload],
        total: state.total + action.payload.price 
      };
    case 'REMOVE_ITEM':
      const item = state.items.find(i => i.id === action.payload);
      return {
        ...state,
        items: state.items.filter(i => i.id !== action.payload),
        total: state.total - item.price
      };
    case 'CLEAR':
      return { items: [], total: 0 };
    default:
      return state;
  }
}

function ShoppingCart() {
  const [cart, dispatch] = useReducer(cartReducer, { items: [], total: 0 });
  
  return (
    <div>
      <p>Total: \${cart.total}</p>
      <button onClick={() => dispatch({ 
        type: 'ADD_ITEM', 
        payload: { id: 1, name: 'Book', price: 20 } 
      })}>
        Add Book
      </button>
      <button onClick={() => dispatch({ type: 'CLEAR' })}>
        Clear Cart
      </button>
    </div>
  );
}
\`\`\`

### Why It Matters
useReducer makes complex state updates predictable and testable. The reducer is a pure function - easy to test in isolation.`
  },
  {
    id: 'tcs071',
    question: 'What are React portals?',
    answer: `### Simple Explanation
Portals let you render a component's children into a different part of the DOM, outside its parent hierarchy. The component stays logically in the same place in React but appears somewhere else in the HTML.

### Real-World Analogy
Like a ventriloquist - the voice (component) comes from the puppet's mouth (portal target) even though the ventriloquist (parent) is elsewhere.

### Code Example
\`\`\`jsx
import { createPortal } from 'react-dom';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  
  // Render to #modal-root instead of parent's DOM location
  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.getElementById('modal-root')  // Target DOM node
  );
}

// In index.html:
// <div id="root"></div>      <!-- Main app -->
// <div id="modal-root"></div> <!-- Modals render here -->

// Usage
function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <h2>Modal Content</h2>
      </Modal>
    </div>
  );
}
\`\`\`

### Why It Matters
Portals solve CSS stacking issues. Modals, tooltips, and dropdowns render above everything without z-index battles.`
  },
  {
    id: 'tcs072',
    question: 'Explain React error boundaries',
    answer: `### Simple Explanation
Error boundaries are components that catch JavaScript errors in their child component tree, log them, and display a fallback UI instead of crashing the whole app.

### Real-World Analogy
Like a circuit breaker in your home. When one outlet shorts, it doesn't bring down the whole house - just that circuit trips and the rest keeps working.

### Code Example
\`\`\`jsx
class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };
  
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  
  componentDidCatch(error, errorInfo) {
    // Log to error reporting service
    console.error('Error caught:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return (
        <div className="error-fallback">
          <h2>Something went wrong</h2>
          <button onClick={() => this.setState({ hasError: false })}>
            Try Again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

// Usage - wrap around risky components
function App() {
  return (
    <div>
      <Header />  {/* Error here crashes only Header */}
      <ErrorBoundary>
        <RiskyWidget />  {/* Error here shows fallback */}
      </ErrorBoundary>
      <Footer />  {/* Keeps working */}
    </div>
  );
}
\`\`\`

### Why It Matters
Error boundaries prevent the entire app from crashing. Essential for production apps - users see a friendly message instead of a blank screen.`
  },
  {
    id: 'tcs073',
    question: 'What is code splitting in React?',
    answer: `### Simple Explanation
Code splitting divides your app into smaller chunks that load on demand. Instead of downloading the entire app upfront, users download only what they need, when they need it.

### Real-World Analogy
Like a buffet vs a la carte. Instead of putting everything on your plate at once (downloading all code), you get dishes as you order them (load code when needed).

### Code Example
\`\`\`jsx
import { lazy, Suspense } from 'react';

// BEFORE: All components loaded upfront
import Dashboard from './Dashboard';
import Settings from './Settings';
import Analytics from './Analytics';

// AFTER: Components loaded on demand
const Dashboard = lazy(() => import('./Dashboard'));
const Settings = lazy(() => import('./Settings'));
const Analytics = lazy(() => import('./Analytics'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </Suspense>
  );
}

// Each route loads its own JavaScript chunk
// Users visiting / only download Dashboard code
// Settings code downloads only when visiting /settings
\`\`\`

### Why It Matters
Faster initial load time, better performance on slow networks. Critical for large applications with many features.`
  },
  {
    id: 'tcs074',
    question: 'Explain Next.js data fetching methods',
    answer: `### Simple Explanation
Next.js provides multiple ways to fetch data, each suited for different scenarios:
- **getStaticProps**: Fetch at build time (fastest)
- **getServerSideProps**: Fetch on each request (always fresh)
- **Client-side**: Fetch in browser (for user-specific data)

### Real-World Analogy
- **SSG**: Printing newspapers at midnight for tomorrow's delivery
- **SSR**: Made-to-order food at a restaurant
- **Client-side**: Asking questions after the lecture

### Code Example
\`\`\`jsx
// SSG - getStaticProps (build time)
export async function getStaticProps() {
  const posts = await fetch('https://api.example.com/posts');
  return { 
    props: { posts: await posts.json() },
    revalidate: 3600  // Regenerate every hour (ISR)
  };
}

// SSR - getServerSideProps (per request)
export async function getServerSideProps(context) {
  const { userId } = context.params;
  const user = await fetch(\`https://api.example.com/users/\${userId}\`);
  return { props: { user: await user.json() } };
}

// For dynamic routes - getStaticPaths
export async function getStaticPaths() {
  const posts = await fetch('https://api.example.com/posts');
  const paths = posts.map(post => ({ params: { id: post.id } }));
  return { paths, fallback: 'blocking' };
}

// Client-side - useEffect or SWR
function ClientComponent() {
  const { data } = useSWR('/api/user', fetcher);
  return <div>{data?.name}</div>;
}
\`\`\`

### Why It Matters
Choosing the right method affects SEO, performance, and user experience. Use SSG for static content, SSR for personalized/real-time data.`
  },
  {
    id: 'tcs075',
    question: 'What is ISR in Next.js?',
    answer: `### Simple Explanation
ISR (Incremental Static Regeneration) lets you update static pages AFTER the site is built, without rebuilding the entire site. Pages regenerate in the background while serving the cached version.

### Real-World Analogy
Like a restaurant with pre-made sandwiches. Customers get the current sandwich immediately, but the kitchen makes fresh ones in the background. Next customer might get the newer version.

### Code Example
\`\`\`jsx
export async function getStaticProps() {
  const products = await fetch('https://api.example.com/products');
  
  return {
    props: { products: await products.json() },
    revalidate: 60  // Regenerate at most every 60 seconds
  };
}

// What happens:
// 1. First request: Serves cached page, triggers background regeneration
// 2. Background: Next.js fetches new data, builds new page
// 3. Next request: Serves newly generated page
// 4. Repeat...

// Benefits over pure SSG:
// - No full rebuild for content updates
// - Always fast (serves cache first)
// - Eventually consistent with data source
\`\`\`

### Why It Matters
ISR combines SSG's speed with SSR's freshness. Perfect for e-commerce, blogs, and content sites that need frequent updates without rebuilding.`
  },
  {
    id: 'tcs076',
    question: 'Explain Next.js routing',
    answer: `### Simple Explanation
Next.js uses file-based routing - the file structure in your pages folder becomes your URL structure. No configuration needed, just create files.

### Technical Details
| File Path | Route |
|-----------|-------|
| pages/index.js | / |
| pages/about.js | /about |
| pages/blog/[slug].js | /blog/:slug |
| pages/[...slug].js | Catch-all routes |
| pages/api/users.js | /api/users |

### Code Example
\`\`\`jsx
// pages/products/[category]/[id].js
// URL: /products/electronics/123

import { useRouter } from 'next/router';

export default function ProductPage() {
  const router = useRouter();
  const { category, id } = router.query;
  
  return <h1>Product {id} in {category}</h1>;
}

// Navigation
import Link from 'next/link';

function Nav() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/products/electronics/123">Product</Link>
    </nav>
  );
}

// Programmatic navigation
const router = useRouter();
router.push('/dashboard');
router.replace('/login');  // No history entry
router.back();
\`\`\`

### Why It Matters
File-based routing eliminates configuration, makes the codebase intuitive, and automatically optimizes navigation with prefetching.`
  },
  {
    id: 'tcs077',
    question: 'What are Next.js API routes?',
    answer: `### Simple Explanation
API routes let you build backend endpoints inside your Next.js app. Files in pages/api become API endpoints - no separate backend server needed.

### Code Example
\`\`\`javascript
// pages/api/users/[id].js
export default async function handler(req, res) {
  const { id } = req.query;
  
  switch (req.method) {
    case 'GET':
      const user = await db.users.findById(id);
      return res.status(200).json(user);
      
    case 'PUT':
      const updated = await db.users.update(id, req.body);
      return res.status(200).json(updated);
      
    case 'DELETE':
      await db.users.delete(id);
      return res.status(204).end();
      
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      return res.status(405).end();
  }
}

// Usage from frontend
const response = await fetch('/api/users/123', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'Updated Name' })
});
\`\`\`

### Why It Matters
Build full-stack apps in one project. Great for forms, authentication, database operations - without setting up a separate backend.`
  },
  {
    id: 'tcs078',
    question: 'Explain Next.js Image optimization',
    answer: `### Simple Explanation
Next.js Image component automatically optimizes images: resizing, converting to modern formats (WebP), and lazy loading. No manual optimization needed.

### Technical Details
| Feature | Benefit |
|---------|---------|
| Lazy loading | Images load when visible |
| Responsive | Serves correct size for device |
| Modern formats | WebP, AVIF when supported |
| Prevents CLS | Reserves space before load |

### Code Example
\`\`\`jsx
import Image from 'next/image';

function ProductCard({ product }) {
  return (
    <div>
      <Image
        src={product.image}
        alt={product.name}
        width={300}
        height={200}
        placeholder="blur"
        blurDataURL={product.thumbnail}  // Low-quality placeholder
        priority={false}  // true for above-fold images
      />
      
      {/* Fill container */}
      <div style={{ position: 'relative', width: '100%', height: '400px' }}>
        <Image
          src="/hero.jpg"
          alt="Hero"
          fill
          style={{ objectFit: 'cover' }}
          priority  // Load immediately (hero image)
        />
      </div>
    </div>
  );
}

// Configure remote images in next.config.js
module.exports = {
  images: {
    domains: ['cdn.example.com'],
  },
};
\`\`\`

### Why It Matters
Images are often the largest assets. Automatic optimization improves Core Web Vitals, SEO, and user experience without developer effort.`
  },
];

export default reactQuestions;
