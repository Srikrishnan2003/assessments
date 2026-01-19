// TCS Prime Interview - Tools & Technologies Questions

export const toolsQuestions = [
    {
        id: 'tcs131',
        question: 'Explain Tailwind CSS and why you use it',
        answer: `### Tailwind CSS

#### Simple Explanation
Tailwind is a utility-first CSS framework. Instead of writing custom CSS, you use pre-built utility classes directly in HTML. It's like having a huge toolkit of CSS snippets ready to use.

#### Comparison
\`\`\`html
<!-- Traditional CSS -->
<button class="primary-btn">Click me</button>

/* styles.css */
.primary-btn {
  background-color: #3b82f6;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
}

<!-- Tailwind CSS -->
<button class="bg-blue-500 text-white px-4 py-2 rounded">Click me</button>
\`\`\`

#### Why I Use Tailwind
| Benefit | Explanation |
|---------|-------------|
| **Speed** | No context-switching between HTML and CSS files |
| **Consistency** | Design tokens built-in (colors, spacing) |
| **Responsive** | Easy breakpoints: \`md:text-lg lg:text-xl\` |
| **No Dead CSS** | PurgeCSS removes unused styles in production |
| **Component-Friendly** | Works great with React components |

#### Code Example
\`\`\`jsx
// Responsive card component
function ProductCard({ product }) {
  return (
    <div className="
      bg-white rounded-lg shadow-md overflow-hidden
      hover:shadow-xl transition-shadow duration-300
      flex flex-col md:flex-row
    ">
      <img 
        src={product.image} 
        className="w-full md:w-48 h-48 object-cover"
      />
      <div className="p-4 flex-1">
        <h3 className="text-xl font-semibold text-gray-800">
          {product.name}
        </h3>
        <p className="text-gray-600 mt-2">{product.description}</p>
        <span className="text-blue-600 font-bold mt-4 block">
          \${product.price}
        </span>
      </div>
    </div>
  );
}
\`\`\`

#### When NOT to Use Tailwind
- ❌ Very simple projects (overkill)
- ❌ Team unfamiliar with utility approach
- ❌ Heavy theming requirements
- ❌ When design system already exists`
    },
    {
        id: 'tcs132',
        question: 'How do you use GitHub Copilot effectively?',
        answer: `### GitHub Copilot Best Practices

#### How I Use It Daily

**1. Function Generation from Comments**
\`\`\`javascript
// Create a function that validates email format and returns boolean
function validateEmail(email) {
  const regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  return regex.test(email);
}
// ^ Copilot generates this from the comment
\`\`\`

**2. Boilerplate Code**
\`\`\`javascript
// I type: "Create React context for theme..."
// Copilot generates complete context setup
const ThemeContext = createContext({ theme: 'light', toggleTheme: () => {} });

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light');
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
\`\`\`

**3. Test Generation**
\`\`\`javascript
// I write the function, then:
// "Write Jest tests for validateEmail function"
describe('validateEmail', () => {
  test('returns true for valid email', () => {
    expect(validateEmail('test@example.com')).toBe(true);
  });
  
  test('returns false for invalid email', () => {
    expect(validateEmail('invalid')).toBe(false);
    expect(validateEmail('@example.com')).toBe(false);
  });
});
\`\`\`

---

#### My Guidelines
| Do | Don't |
|---|-------|
| Review suggestions before accepting | Blindly accept everything |
| Use for patterns I understand | Use for unfamiliar code without learning |
| Let it handle repetitive code | Trust it for security-critical code |
| Provide clear context in comments | Expect it to read your mind |

---

#### Productivity Impact
- 30-40% faster for boilerplate code
- Helpful for learning new APIs
- Great for test writing
- Reduces typos and syntax errors`
    },
    {
        id: 'tcs133',
        question: 'What databases have you worked with?',
        answer: `### Database Experience

#### Databases I've Used

| Database | Type | Projects | Use Case |
|----------|------|----------|----------|
| **PostgreSQL** | Relational | Virtusa, WebForge | Complex queries, transactions |
| **MongoDB** | Document | Personal projects | Flexible schemas, rapid prototyping |
| **Redis** | Key-Value | Caching layers | Sessions, caching |
| **Convex** | Real-time | Focus Flow | Serverless, real-time sync |

---

#### PostgreSQL Experience
\`\`\`sql
-- Complex query from Charge Management System
SELECT 
  c.charge_name,
  c.charge_type,
  SUM(t.amount) as total_collected,
  COUNT(t.id) as transaction_count
FROM charges c
JOIN transactions t ON c.id = t.charge_id
WHERE t.created_at >= NOW() - INTERVAL '30 days'
GROUP BY c.id
HAVING SUM(t.amount) > 1000
ORDER BY total_collected DESC;
\`\`\`

---

#### MongoDB Experience
\`\`\`javascript
// Document model for flexible data
const ProjectSchema = {
  _id: ObjectId,
  name: String,
  pages: [{
    id: String,
    components: [{
      type: String,
      props: Object,  // Flexible schema
      children: []    // Nested structure
    }]
  }]
};

// Aggregation pipeline
db.projects.aggregate([
  { $match: { userId: userId } },
  { $unwind: "$pages" },
  { $group: { _id: "$userId", pageCount: { $sum: 1 } } }
]);
\`\`\`

---

#### When to Use Which
| Scenario | Best Choice |
|----------|-------------|
| Complex relationships, ACID | PostgreSQL |
| Flexible schema, rapid iteration | MongoDB |
| Caching, sessions | Redis |
| Real-time sync | Convex/Firebase |`
    },
    {
        id: 'tcs134',
        question: 'What is Convex and why did you use it?',
        answer: `### Convex Database

#### Simple Explanation
Convex is a serverless backend-as-a-service that provides:
- Real-time database with automatic sync
- Built-in TypeScript functions (queries, mutations)
- No server management needed

#### Why I Used It (Focus Flow)
| Need | Convex Solution |
|------|-----------------|
| Real-time updates | Automatic subscriptions |
| TypeScript | End-to-end type safety |
| Fast setup | No server configuration |
| Scaling | Handles it automatically |

---

#### Code Example
\`\`\`typescript
// convex/tasks.ts
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Query - automatically reactive
export const getTasks = query({
  args: { projectId: v.id("projects") },
  handler: async (ctx, { projectId }) => {
    return await ctx.db
      .query("tasks")
      .filter(q => q.eq(q.field("projectId"), projectId))
      .order("desc")
      .collect();
  },
});

// Mutation - type-safe writes
export const createTask = mutation({
  args: { 
    title: v.string(),
    projectId: v.id("projects")
  },
  handler: async (ctx, { title, projectId }) => {
    return await ctx.db.insert("tasks", {
      title,
      projectId,
      completed: false,
      createdAt: Date.now(),
    });
  },
});
\`\`\`

\`\`\`tsx
// React component - auto-syncs
function TaskList({ projectId }) {
  const tasks = useQuery(api.tasks.getTasks, { projectId });
  const createTask = useMutation(api.tasks.createTask);
  
  // 'tasks' automatically updates when data changes
  // No polling, no manual refetch
  
  return (
    <ul>
      {tasks?.map(task => <TaskItem key={task._id} task={task} />)}
    </ul>
  );
}
\`\`\`

---

#### Trade-offs
✅ Rapid development, real-time built-in
❌ Vendor lock-in, less control than self-hosted`
    },
    {
        id: 'tcs135',
        question: 'What authentication solutions have you used?',
        answer: `### Authentication Experience

#### Solutions I've Used

| Solution | Projects | Use Case |
|----------|----------|----------|
| **Clerk** | WebForge, Focus Flow | Full-featured auth |
| **NextAuth** | Personal projects | Self-hosted, flexible |
| **JWT** | Virtusa project | Custom auth flow |
| **Firebase Auth** | Early projects | Quick setup |

---

#### Clerk Implementation (WebForge)
\`\`\`tsx
// Clerk provides ready-made components
import { 
  SignIn, 
  SignUp, 
  UserButton,
  useUser,
  useAuth
} from "@clerk/nextjs";

// Protected route
function Dashboard() {
  const { user, isLoaded, isSignedIn } = useUser();
  
  if (!isLoaded) return <Loading />;
  if (!isSignedIn) return <RedirectToSignIn />;
  
  return (
    <div>
      <h1>Welcome, {user.firstName}</h1>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}

// Middleware protection (middleware.ts)
import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/pricing", "/about"],
  // Everything else requires auth
});
\`\`\`

---

#### JWT Custom Implementation
\`\`\`javascript
// Login - generate token
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findByEmail(email);
  
  if (!user || !await bcrypt.compare(password, user.password)) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  
  const token = jwt.sign(
    { userId: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '24h' }
  );
  
  res.json({ token });
});

// Protected route middleware
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
};
\`\`\`

---

#### Choosing Auth Solution
| Need | Recommendation |
|------|----------------|
| Fast setup, no backend | Clerk, Auth0 |
| Full control, self-hosted | NextAuth.js |
| Enterprise requirements | Okta, Azure AD |
| Simple APIs | Custom JWT |`
    },
];

export default toolsQuestions;
