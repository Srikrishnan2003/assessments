// TCS Prime Interview - React & Next.js Questions

export const reactQuestions = [
    {
        id: 'tcs013',
        question: 'What is React and why use it?',
        answer: `React is a JavaScript library for building user interfaces using reusable components.

**Benefits:**
• Component-based architecture for reusability
• Virtual DOM for efficient updates
• Unidirectional data flow for predictability
• Large ecosystem and community support
• Great for building SPAs`
    },
    {
        id: 'tcs014',
        question: 'Explain React hooks - useState and useEffect',
        answer: `• **useState**: Adds state to functional components
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
\`\`\``
    },
    {
        id: 'tcs015',
        question: 'What is the Virtual DOM?',
        answer: `The Virtual DOM is a lightweight JavaScript representation of the actual DOM. React creates a virtual copy, compares it with the previous version (**diffing**), and updates only changed parts in the real DOM (**reconciliation**). This makes updates faster and more efficient.`
    },
    {
        id: 'tcs016',
        question: 'Explain props vs state in React',
        answer: `• **Props**: Data passed from parent to child, immutable, read-only
• **State**: Internal component data, mutable, managed by component itself`
    },
    {
        id: 'tcs017',
        question: 'What is Next.js and its advantages?',
        answer: `Next.js is a React framework for production with features like:
• **Server-Side Rendering (SSR)**: Better SEO and initial load
• **Static Site Generation (SSG)**: Pre-rendered pages at build time
• **File-based routing**: Automatic route creation from file structure
• **API Routes**: Backend endpoints in the same project
• **Image optimization**: Automatic image optimization
• **Built-in CSS support**: Tailwind, CSS modules, etc.`
    },
    {
        id: 'tcs018',
        question: 'Explain client-side vs server-side rendering',
        answer: `• **Client-Side Rendering (CSR)**: JavaScript renders content in browser. Fast navigation, poor initial SEO
• **Server-Side Rendering (SSR)**: HTML generated on server per request. Better SEO, slower navigation
• **Static Site Generation (SSG)**: HTML generated at build time. Fastest, great for static content`
    },
    {
        id: 'tcs019',
        question: 'What are React component lifecycle methods?',
        answer: `In functional components with hooks:
• **Mounting**: \`useEffect\` with empty dependency array \`[]\`
• **Updating**: \`useEffect\` with dependencies \`[dep]\`
• **Unmounting**: Cleanup function returned from \`useEffect\``
    },
    {
        id: 'tcs020',
        question: 'Explain useContext and Context API',
        answer: `Context API provides a way to pass data through component tree without prop drilling.

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
\`\`\``
    },
    {
        id: 'tcs066',
        question: 'What is React reconciliation?',
        answer: `Reconciliation is the process React uses to update the DOM efficiently. React compares the new Virtual DOM with the previous one (diffing), identifies changes, and updates only what changed in the real DOM. Uses **keys** to track elements in lists.`
    },
    {
        id: 'tcs067',
        question: 'Explain useMemo vs useCallback',
        answer: `• **useMemo**: Memoizes computed values to avoid expensive recalculations
• **useCallback**: Memoizes functions to prevent recreation on re-renders

\`\`\`javascript
const expensiveValue = useMemo(() => {
  return complexCalculation(data);
}, [data]);

const handleClick = useCallback(() => {
  console.log(count);
}, [count]);
\`\`\``
    },
    {
        id: 'tcs068',
        question: 'What are custom hooks?',
        answer: `Custom hooks are reusable functions that use React hooks. Must start with \`use\`. Extract component logic into reusable functions.

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
\`\`\``
    },
    {
        id: 'tcs069',
        question: 'Explain React.memo and when to use it',
        answer: `React.memo is a HOC that memoizes component output. Re-renders only if props change. Use for expensive components or pure components that render often with same props.

\`\`\`javascript
const ExpensiveComponent = React.memo(({ data }) => {
  return <div>{data.map(item => <Item key={item.id} {...item} />)}</div>;
});
\`\`\``
    },
    {
        id: 'tcs070',
        question: 'What is useReducer? When to use it over useState?',
        answer: `useReducer manages complex state logic with actions and reducer function. Use when:
• State has complex update logic
• Next state depends on previous state
• Multiple sub-values in state

\`\`\`javascript
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
\`\`\``
    },
    {
        id: 'tcs071',
        question: 'What are React portals?',
        answer: `Portals allow rendering children into a DOM node outside the parent component hierarchy. Useful for modals, tooltips, and overlays.

\`\`\`javascript
ReactDOM.createPortal(
  <Modal />,
  document.getElementById('modal-root')
);
\`\`\``
    },
    {
        id: 'tcs072',
        question: 'Explain React error boundaries',
        answer: `Error boundaries catch JavaScript errors in child components, log errors, and display fallback UI. Use class components with componentDidCatch.

\`\`\`javascript
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
\`\`\``
    },
    {
        id: 'tcs073',
        question: 'What is code splitting in React?',
        answer: `Code splitting divides bundle into smaller chunks loaded on demand. Reduces initial load time. Use React.lazy and Suspense.

\`\`\`javascript
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
\`\`\``
    },
    {
        id: 'tcs074',
        question: 'Explain Next.js data fetching methods',
        answer: `• **getStaticProps**: Fetch data at build time (SSG). For static content.
• **getServerSideProps**: Fetch data on each request (SSR). For dynamic content.
• **getStaticPaths**: Define dynamic routes for static generation
• **Client-side fetching**: Using \`useEffect\` or SWR

\`\`\`javascript
export async function getStaticProps() {
  const data = await fetch('https://api.example.com/data');
  return { props: { data: await data.json() } };
}

export async function getServerSideProps(context) {
  const data = await fetch(\`https://api.example.com/\${context.params.id}\`);
  return { props: { data: await data.json() } };
}
\`\`\``
    },
    {
        id: 'tcs075',
        question: 'What is ISR in Next.js?',
        answer: `**Incremental Static Regeneration** allows updating static pages after build without rebuilding entire site. Use \`revalidate\` in getStaticProps.

\`\`\`javascript
export async function getStaticProps() {
  const data = await fetch('https://api.example.com/data');
  return {
    props: { data: await data.json() },
    revalidate: 60 // Regenerate page every 60 seconds
  };
}
\`\`\``
    },
    {
        id: 'tcs076',
        question: 'Explain Next.js routing',
        answer: `Next.js uses file-based routing:
• \`pages/index.js\` → \`/\`
• \`pages/about.js\` → \`/about\`
• \`pages/blog/[slug].js\` → \`/blog/:slug\` (dynamic)
• \`pages/blog/[...slug].js\` → catch-all routes
• \`pages/api/\` → API routes`
    },
    {
        id: 'tcs077',
        question: 'What are Next.js API routes?',
        answer: `API routes create backend endpoints in Next.js. Files in \`pages/api/\` become API endpoints.

\`\`\`javascript
// pages/api/user.js
export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ name: 'John' });
  }
}
\`\`\``
    },
    {
        id: 'tcs078',
        question: 'Explain Next.js Image optimization',
        answer: `Next.js Image component automatically optimizes images:
• Lazy loading by default
• Responsive images with srcset
• Modern formats (WebP, AVIF)
• Prevents Cumulative Layout Shift

\`\`\`javascript
import Image from 'next/image';

<Image 
  src="/profile.jpg" 
  alt="Profile" 
  width={500} 
  height={500}
  priority // Disable lazy load for above-fold images
/>
\`\`\``
    },
];

export default reactQuestions;
