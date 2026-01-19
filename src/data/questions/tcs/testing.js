// TCS Prime Interview - Testing & CI/CD Questions

export const testingQuestions = [
    {
        id: 'tcs118',
        question: 'What types of testing are you familiar with?',
        answer: `### Simple Explanation
Testing ensures your code works correctly. Different levels of testing catch different types of bugs:
- **Unit tests**: Test individual functions
- **Integration tests**: Test how parts work together
- **E2E tests**: Test complete user flows

### Real-World Analogy
Building a car:
- **Unit testing**: Test each part (engine, brakes) individually
- **Integration testing**: Test engine + transmission work together
- **E2E testing**: Drive the complete car on a real road

### Technical Details
| Type | Scope | Speed | Reliability | Maintenance |
|------|-------|-------|-------------|-------------|
| **Unit** | Single function | ⚡ Very fast | High | Low |
| **Integration** | Multiple modules | 🐢 Medium | Medium | Medium |
| **E2E** | Full application | 🐌 Slow | Can be flaky | High |

**Testing Pyramid:**
\`\`\`
        /\\
       /E2E\\        Few
      /------\\
     /Integration\\  Some
    /------------\\
   /    Unit      \\ Many
  /----------------\\
\`\`\`

### Code Example
\`\`\`javascript
// UNIT TEST - Test individual function
// sum.js
function sum(a, b) {
  return a + b;
}

// sum.test.js
describe('sum function', () => {
  test('adds two positive numbers', () => {
    expect(sum(2, 3)).toBe(5);
  });
  
  test('handles negative numbers', () => {
    expect(sum(-1, 5)).toBe(4);
  });
});


// INTEGRATION TEST - Test API with database
describe('User API', () => {
  beforeAll(async () => {
    await db.connect();
  });
  
  afterAll(async () => {
    await db.disconnect();
  });
  
  test('creates user and retrieves it', async () => {
    const user = await api.post('/users', { name: 'John', email: 'john@test.com' });
    const retrieved = await api.get(\`/users/\${user.id}\`);
    
    expect(retrieved.name).toBe('John');
    expect(retrieved.email).toBe('john@test.com');
  });
});


// E2E TEST - Full user flow (Cypress/Playwright)
describe('Checkout Flow', () => {
  test('user can complete purchase', async () => {
    await page.goto('/products');
    await page.click('[data-testid="product-add"]');
    await page.click('[data-testid="cart-icon"]');
    await page.click('[data-testid="checkout-btn"]');
    
    await page.fill('#email', 'user@test.com');
    await page.fill('#card', '4242424242424242');
    await page.click('[data-testid="pay-btn"]');
    
    await expect(page.locator('.success-message')).toBeVisible();
  });
});


// Testing types:
// - Functional: Does it work?
// - Performance: Is it fast?
// - Security: Is it safe?
// - Accessibility: Is it usable by everyone?
// - Regression: Did new changes break old features?
\`\`\`

### Why It Matters
Tests catch bugs before users do, enable confident refactoring, serve as documentation, and are essential for CI/CD pipelines.`
    },
    {
        id: 'tcs119',
        question: 'How do you write unit tests in React?',
        answer: `### Simple Explanation
Unit tests in React verify that components render correctly and behave as expected. We use React Testing Library to test components the way users interact with them - by finding elements and simulating events.

### Real-World Analogy
Like a quality checker testing a vending machine:
- Press button for Coke → Does Coke come out?
- Insert coin → Does display update?
They test what the user experiences, not the internal mechanics.

### Technical Details
**Key Principles:**
| Approach | Bad Practice | Good Practice |
|----------|--------------|---------------|
| **Query** | Test implementation | Test behavior |
| **Find** | Use CSS classes | Use accessible queries |
| **Assert** | Check internal state | Check what user sees |

### Code Example
\`\`\`javascript
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';
import LoginForm from './LoginForm';

// BASIC COMPONENT TEST
describe('Counter Component', () => {
  test('renders initial count', () => {
    render(<Counter initialCount={5} />);
    
    expect(screen.getByText('Count: 5')).toBeInTheDocument();
  });
  
  test('increments count on button click', async () => {
    render(<Counter initialCount={0} />);
    
    const button = screen.getByRole('button', { name: /increment/i });
    await userEvent.click(button);
    
    expect(screen.getByText('Count: 1')).toBeInTheDocument();
  });
});


// FORM TESTING
describe('LoginForm', () => {
  test('shows validation error for empty email', async () => {
    render(<LoginForm />);
    
    const submitButton = screen.getByRole('button', { name: /submit/i });
    await userEvent.click(submitButton);
    
    expect(screen.getByText('Email is required')).toBeInTheDocument();
  });
  
  test('submits form with valid data', async () => {
    const handleSubmit = jest.fn();
    render(<LoginForm onSubmit={handleSubmit} />);
    
    await userEvent.type(screen.getByLabelText(/email/i), 'test@example.com');
    await userEvent.type(screen.getByLabelText(/password/i), 'password123');
    await userEvent.click(screen.getByRole('button', { name: /submit/i }));
    
    expect(handleSubmit).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'password123'
    });
  });
});


// ASYNC TESTING (API calls)
describe('UserProfile', () => {
  test('displays user data after loading', async () => {
    // Mock API call
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: () => Promise.resolve({ name: 'John', email: 'john@test.com' })
    });
    
    render(<UserProfile userId="123" />);
    
    // Wait for loading to complete
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    
    await waitFor(() => {
      expect(screen.getByText('John')).toBeInTheDocument();
      expect(screen.getByText('john@test.com')).toBeInTheDocument();
    });
  });
});


// TESTING PATTERNS
// Arrange-Act-Assert
test('example test structure', () => {
  // Arrange - setup
  render(<Component />);
  
  // Act - perform action
  fireEvent.click(screen.getByRole('button'));
  
  // Assert - verify result
  expect(screen.getByText('Clicked!')).toBeInTheDocument();
});


// Query Priority (Best to Worst):
// 1. getByRole - most accessible
// 2. getByLabelText - form fields
// 3. getByPlaceholderText
// 4. getByText - static text
// 5. getByTestId - last resort (data-testid attribute)
\`\`\`

### Why It Matters
Good tests give confidence to refactor and add features. React Testing Library encourages testing user behavior, leading to more maintainable tests.`
    },
    {
        id: 'tcs120',
        question: 'What is CI/CD?',
        answer: `### Simple Explanation
CI/CD automates the process of testing and deploying code:
- **CI (Continuous Integration)**: Automatically test every code change
- **CD (Continuous Deployment)**: Automatically deploy passing code to production

### Real-World Analogy
Like an assembly line with quality control:
- **CI**: Every part is tested before moving to next station
- **CD**: Finished cars automatically roll off the line and ship to dealers

Without CI/CD: Manual testing, manual deployment, "it works on my machine" problems

### Technical Details
**CI/CD Pipeline Stages:**
| Stage | Purpose | Failure Action |
|-------|---------|----------------|
| **Code** | Developer pushes to Git | - |
| **Build** | Compile/bundle code | Stop pipeline |
| **Test** | Run automated tests | Stop pipeline |
| **Stage** | Deploy to staging | Stop pipeline |
| **Review** | Manual/automated approval | Wait |
| **Deploy** | Push to production | Rollback |

### Code Example
\`\`\`yaml
# GitHub Actions - .github/workflows/ci.yml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  # 1. BUILD AND TEST
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run linter
        run: npm run lint
      
      - name: Run type check
        run: npm run type-check
      
      - name: Run unit tests
        run: npm test -- --coverage
      
      - name: Upload coverage
        uses: codecov/codecov-action@v3

  # 2. BUILD DOCKER IMAGE
  build:
    needs: test  # Only runs if tests pass
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Build Docker image
        run: docker build -t myapp:${{ github.sha }} .
      
      - name: Push to registry
        run: |
          docker tag myapp:${{ github.sha }} registry.example.com/myapp:${{ github.sha }}
          docker push registry.example.com/myapp:${{ github.sha }}

  # 3. DEPLOY TO STAGING
  deploy-staging:
    needs: build
    if: github.ref == 'refs/heads/develop'
    runs-on: ubuntu-latest
    environment: staging
    steps:
      - name: Deploy to staging
        run: |
          kubectl set image deployment/myapp myapp=registry.example.com/myapp:${{ github.sha }}

  # 4. DEPLOY TO PRODUCTION
  deploy-production:
    needs: build
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    environment: 
      name: production
      url: https://myapp.com
    steps:
      - name: Deploy to production
        run: |
          kubectl set image deployment/myapp myapp=registry.example.com/myapp:${{ github.sha }}
\`\`\`

\`\`\`javascript
// package.json scripts for CI
{
  "scripts": {
    "lint": "eslint src/",
    "type-check": "tsc --noEmit",
    "test": "jest",
    "test:coverage": "jest --coverage",
    "build": "next build"
  }
}
\`\`\`

### Why It Matters
CI/CD enables:
- **Faster delivery** - Deploy multiple times per day
- **Fewer bugs** - Automated testing catches issues early
- **Consistent quality** - Every change goes through same process
- **Quick rollback** - Easy to revert if something breaks`
    },
    {
        id: 'tcs121',
        question: 'How do you optimize React application performance?',
        answer: `### Simple Explanation
React performance optimization focuses on reducing unnecessary re-renders and loading less code upfront. The goal is to make your app feel fast and responsive.

### Real-World Analogy
Like optimizing a restaurant:
- **Memo**: Don't remake unchanged dishes
- **Code splitting**: Don't cook all menu items until ordered
- **Virtual scrolling**: Don't set tables that won't be used

### Technical Details
| Technique | Solves | Impact |
|-----------|--------|--------|
| **React.memo** | Unnecessary re-renders | High |
| **useMemo/useCallback** | Expensive recalculations | Medium |
| **Code splitting** | Large initial bundle | High |
| **Virtual scrolling** | Long lists | High |
| **Lazy loading** | Unused components | Medium |

### Code Example
\`\`\`jsx
import { memo, useMemo, useCallback, lazy, Suspense } from 'react';

// 1. React.memo - Prevent re-renders if props unchanged
const ExpensiveComponent = memo(function ExpensiveComponent({ data }) {
  console.log('Rendering ExpensiveComponent');
  return <div>{data.map(item => <Item key={item.id} {...item} />)}</div>;
});

// 2. useMemo - Cache expensive calculations
function ProductList({ products, filter }) {
  const filteredProducts = useMemo(() => {
    console.log('Filtering...');
    return products.filter(p => p.category === filter);
  }, [products, filter]);  // Only recalculate when these change
  
  return <List items={filteredProducts} />;
}

// 3. useCallback - Cache functions to prevent child re-renders
function Parent() {
  const [count, setCount] = useState(0);
  
  const handleClick = useCallback(() => {
    console.log('Clicked');
  }, []);  // Same function reference every render
  
  return <Child onClick={handleClick} />;  // Child won't re-render
}

// 4. Code Splitting - Load components on demand
const HeavyChart = lazy(() => import('./HeavyChart'));
const AdminPanel = lazy(() => import('./AdminPanel'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/chart" element={<HeavyChart />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Suspense>
  );
}

// 5. Virtual Scrolling - Render only visible items
import { FixedSizeList as List } from 'react-window';

function VirtualizedList({ items }) {
  return (
    <List
      height={400}
      itemCount={items.length}
      itemSize={50}
      width="100%"
    >
      {({ index, style }) => (
        <div style={style}>{items[index].name}</div>
      )}
    </List>
  );
}

// 6. Avoid inline functions and objects
// ❌ Bad - creates new function/object every render
<Child onClick={() => doSomething()} style={{ color: 'red' }} />

// ✅ Good - stable references
const handleClick = useCallback(() => doSomething(), []);
const style = useMemo(() => ({ color: 'red' }), []);
<Child onClick={handleClick} style={style} />

// 7. Use keys properly
// ❌ Bad - using index as key
{items.map((item, index) => <Item key={index} {...item} />)}

// ✅ Good - using stable unique ID
{items.map(item => <Item key={item.id} {...item} />)}
\`\`\`

### Why It Matters
Performance directly impacts user experience and business metrics. A 1-second delay can reduce conversions by 7%. Slow apps frustrate users.`
    },
    {
        id: 'tcs122',
        question: 'How do you optimize API calls?',
        answer: `### Simple Explanation
API optimization reduces unnecessary requests and improves response times. This means faster loading, less server cost, and better user experience.

### Real-World Analogy
Like shopping efficiently:
- **Caching**: Keep frequently bought items at home
- **Batching**: Buy everything in one trip, not multiple trips
- **Pagination**: Buy groceries for this week, not the whole year

### Technical Details
| Technique | Benefit | Use Case |
|-----------|---------|----------|
| **Caching** | Avoid repeated requests | Static/slow-changing data |
| **Debouncing** | Reduce rapid-fire requests | Search input |
| **Pagination** | Load less data | Long lists |
| **Parallel requests** | Faster total time | Independent data |

### Code Example
\`\`\`javascript
// 1. CACHING with SWR (recommended for React)
import useSWR from 'swr';

function UserProfile({ userId }) {
  const { data, error, isLoading } = useSWR(
    \`/api/users/\${userId}\`,
    fetcher,
    {
      revalidateOnFocus: false,  // Don't refetch on window focus
      dedupingInterval: 60000,  // Dedupe requests within 1 minute
      staleWhileRevalidate: true,  // Show cached data while fetching
    }
  );
  
  if (isLoading) return <Spinner />;
  if (error) return <Error />;
  return <Profile user={data} />;
}


// 2. DEBOUNCING - Wait for user to stop typing
function SearchInput() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  
  // Debounced search
  useEffect(() => {
    const timer = setTimeout(async () => {
      if (query.length >= 3) {
        const data = await fetch(\`/api/search?q=\${query}\`);
        setResults(await data.json());
      }
    }, 300);  // Wait 300ms after last keystroke
    
    return () => clearTimeout(timer);
  }, [query]);
  
  return <input value={query} onChange={e => setQuery(e.target.value)} />;
}


// 3. PAGINATION - Load in chunks
function ProductList() {
  const [page, setPage] = useState(1);
  const { data } = useSWR(\`/api/products?page=\${page}&limit=20\`);
  
  return (
    <div>
      {data?.products.map(product => <ProductCard key={product.id} {...product} />)}
      <button onClick={() => setPage(p => p + 1)}>Load More</button>
    </div>
  );
}


// 4. PARALLEL REQUESTS - Fetch independent data simultaneously
async function loadDashboard(userId) {
  // ❌ Sequential - slow
  const user = await fetch('/api/user');
  const orders = await fetch('/api/orders');  // Waits for user
  const analytics = await fetch('/api/analytics');  // Waits for orders
  
  // ✅ Parallel - fast
  const [user, orders, analytics] = await Promise.all([
    fetch('/api/user'),
    fetch('/api/orders'),
    fetch('/api/analytics'),
  ]);
  
  return { user, orders, analytics };
}


// 5. REQUEST CANCELLATION - Cancel outdated requests
function SearchWithCancel() {
  const [query, setQuery] = useState('');
  
  useEffect(() => {
    const controller = new AbortController();
    
    fetch(\`/api/search?q=\${query}\`, { signal: controller.signal })
      .then(res => res.json())
      .then(setResults)
      .catch(err => {
        if (err.name !== 'AbortError') throw err;
      });
    
    // Cancel request if query changes before it completes
    return () => controller.abort();
  }, [query]);
}


// 6. DATA NORMALIZATION - Avoid redundant data
// Instead of: { users: [{ id: 1, posts: [{ id: 1, ... }] }] }
// Use: { users: { 1: { id: 1 } }, posts: { 1: { id: 1, userId: 1 } } }


// 7. OPTIMISTIC UPDATES - Update UI before API confirms
async function likePost(postId) {
  // Update UI immediately
  setLiked(true);
  setLikeCount(c => c + 1);
  
  try {
    await fetch(\`/api/posts/\${postId}/like\`, { method: 'POST' });
  } catch (error) {
    // Revert on failure
    setLiked(false);
    setLikeCount(c => c - 1);
  }
}
\`\`\`

### Why It Matters
Every unnecessary API call costs server resources and slows user experience. Good API optimization can reduce server costs by 50%+ and make apps feel instant.`
    },
    {
        id: 'tcs123',
        question: 'How do you measure web performance?',
        answer: `### Simple Explanation
Web performance metrics measure how fast your site loads and becomes usable. Core Web Vitals are the key metrics Google uses for search ranking.

### Real-World Analogy
Like measuring restaurant service:
- **FCP**: When food first arrives (even appetizers)
- **LCP**: When the main course is served
- **FID**: How quickly waiter responds to requests
- **CLS**: Tables not moving around while you eat

### Technical Details
**Core Web Vitals:**
| Metric | What It Measures | Good Score |
|--------|------------------|------------|
| **LCP** | Largest Contentful Paint | < 2.5s |
| **FID** | First Input Delay | < 100ms |
| **CLS** | Cumulative Layout Shift | < 0.1 |

**Other Important Metrics:**
| Metric | Description |
|--------|-------------|
| **FCP** | First Contentful Paint - first text/image |
| **TTI** | Time to Interactive - fully usable |
| **TTFB** | Time to First Byte - server response |
| **TBT** | Total Blocking Time - main thread blocked |

### Code Example
\`\`\`javascript
// 1. Using Web Vitals library
import { getCLS, getFID, getLCP, getFCP, getTTFB } from 'web-vitals';

function reportWebVitals(metric) {
  console.log(metric.name, metric.value);
  
  // Send to analytics
  analytics.track('Web Vitals', {
    name: metric.name,
    value: metric.value,
    rating: metric.rating,  // 'good', 'needs-improvement', 'poor'
  });
}

getCLS(reportWebVitals);
getFID(reportWebVitals);
getLCP(reportWebVitals);
getFCP(reportWebVitals);
getTTFB(reportWebVitals);


// 2. Performance Observer API
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log(\`\${entry.name}: \${entry.startTime}ms\`);
  }
});

observer.observe({ entryTypes: ['largest-contentful-paint'] });


// 3. Next.js built-in reporting
// pages/_app.js
export function reportWebVitals(metric) {
  if (metric.label === 'web-vital') {
    // Send to analytics
    sendToAnalytics(metric);
  }
}


// 4. Lighthouse in CI/CD
/*
# .github/workflows/lighthouse.yml
- name: Run Lighthouse
  uses: treosh/lighthouse-ci-action@v9
  with:
    urls: |
      https://mysite.com
      https://mysite.com/products
    budgetPath: ./lighthouse-budget.json
*/


// 5. Performance budget (lighthouse-budget.json)
/*
{
  "performance": 90,
  "accessibility": 90,
  "best-practices": 90,
  "seo": 90
}
*/


// Tools for measuring:
// - Chrome DevTools → Performance tab
// - Lighthouse → Audits
// - PageSpeed Insights → Google's tool
// - WebPageTest → Detailed waterfall
// - Chrome User Experience Report → Real user data

// Performance checklist:
// □ Optimize images (WebP, lazy loading)
// □ Minify CSS/JS
// □ Enable compression (gzip, brotli)
// □ Use CDN
// □ Cache static assets
// □ Reduce third-party scripts
// □ Preload critical resources
// □ Avoid layout shifts (set image dimensions)
\`\`\`

### Why It Matters
Performance affects:
- **SEO**: Google ranks faster sites higher
- **Conversion**: 1s delay = 7% fewer conversions
- **User experience**: Slow sites frustrate users
- **Accessibility**: Slow sites hurt users on poor connections`
    },
];

export default testingQuestions;
