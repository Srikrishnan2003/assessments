// TCS Prime Interview - Backend & APIs Questions

export const backendQuestions = [
    {
        id: 'tcs021',
        question: 'What is REST API?',
        answer: `### Simple Explanation
REST (Representational State Transfer) is a set of rules for building web services. It uses standard HTTP methods (GET, POST, PUT, DELETE) to perform operations on resources identified by URLs.

### Real-World Analogy
Think of REST like a restaurant menu:
- **Resources** = Menu items (users, products, orders)
- **URLs** = Table numbers (where to find what you want)
- **HTTP Methods** = Actions (order, modify, cancel)
- **JSON Response** = The food served (data returned)

### Technical Details
**REST Principles:**
| Principle | Description |
|-----------|-------------|
| **Stateless** | Each request contains all info needed; server doesn't remember previous requests |
| **Client-Server** | Frontend and backend are separate; can evolve independently |
| **Uniform Interface** | Consistent URL structure and HTTP methods |
| **Cacheable** | Responses can be cached to improve performance |

**HTTP Methods:**
| Method | Purpose | Example | Idempotent |
|--------|---------|---------|------------|
| GET | Read data | Get user profile | Yes |
| POST | Create new | Create new user | No |
| PUT | Update entire | Update full profile | Yes |
| PATCH | Partial update | Update just email | Yes |
| DELETE | Remove | Delete user | Yes |

### Code Example
\`\`\`javascript
// RESTful API endpoint design
// Resource: /users

// GET /users          → Get all users
// GET /users/123      → Get user with ID 123
// POST /users         → Create new user
// PUT /users/123      → Update user 123 (full update)
// PATCH /users/123    → Update user 123 (partial update)
// DELETE /users/123   → Delete user 123

// Express.js implementation
app.get('/users', async (req, res) => {
  const users = await User.findAll();
  res.status(200).json(users);
});

app.get('/users/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.status(200).json(user);
});

app.post('/users', async (req, res) => {
  const newUser = await User.create(req.body);
  res.status(201).json(newUser);  // 201 = Created
});

app.put('/users/:id', async (req, res) => {
  const updated = await User.update(req.params.id, req.body);
  res.status(200).json(updated);
});

app.delete('/users/:id', async (req, res) => {
  await User.delete(req.params.id);
  res.status(204).send();  // 204 = No Content
});
\`\`\`

### Why It Matters
REST is the industry standard for web APIs. Understanding REST helps you design scalable, maintainable APIs and integrate with third-party services effectively.`
    },
    {
        id: 'tcs022',
        question: 'Explain HTTP methods',
        answer: `### Simple Explanation
HTTP methods tell the server what action to perform on a resource. Each method has a specific purpose and behavior.

### Real-World Analogy
Like actions at a library:
- **GET** = Borrowing a book (read, don't modify)
- **POST** = Donating a new book (create something new)
- **PUT** = Replacing a damaged book (full replacement)
- **PATCH** = Fixing a torn page (partial fix)
- **DELETE** = Removing a book from the library

### Technical Details
| Method | Purpose | Has Body | Idempotent | Safe | Cacheable |
|--------|---------|----------|------------|------|-----------|
| **GET** | Retrieve data | No | Yes | Yes | Yes |
| **POST** | Create resource | Yes | No | No | No |
| **PUT** | Replace resource | Yes | Yes | No | No |
| **PATCH** | Partial update | Yes | Yes | No | No |
| **DELETE** | Remove resource | Optional | Yes | No | No |

**Idempotent**: Calling multiple times has the same effect as calling once
**Safe**: Doesn't modify any data

### Code Example
\`\`\`javascript
// GET - Retrieve data (safe, idempotent)
fetch('/api/products/123')
  .then(res => res.json())
  .then(product => console.log(product));

// POST - Create new resource (not idempotent)
// Each call creates a NEW product
fetch('/api/products', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'Widget', price: 29.99 })
});

// PUT - Replace entire resource (idempotent)
// Call 10 times = same result as calling once
fetch('/api/products/123', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ 
    name: 'Updated Widget', 
    price: 39.99, 
    description: 'Full replacement'
  })
});

// PATCH - Partial update (idempotent)
// Only update specified fields
fetch('/api/products/123', {
  method: 'PATCH',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ price: 24.99 })  // Only update price
});

// DELETE - Remove resource (idempotent)
fetch('/api/products/123', { method: 'DELETE' });
\`\`\`

### Why It Matters
Using correct HTTP methods makes APIs predictable, allows proper caching, and follows web standards. It communicates intent clearly to both developers and systems.`
    },
    {
        id: 'tcs023',
        question: 'What is Node.js?',
        answer: `### Simple Explanation
Node.js is a JavaScript runtime that lets you run JavaScript outside the browser - on servers, in terminals, or as desktop apps. It's built on Chrome's V8 engine and is designed for building scalable network applications.

### Real-World Analogy
JavaScript was like a chef who could only cook in one specific kitchen (the browser). Node.js gave that chef the ability to cook anywhere - in restaurants (servers), food trucks (CLIs), or catering (microservices).

### Technical Details
| Feature | Description |
|---------|-------------|
| **Non-blocking I/O** | Doesn't wait for slow operations; handles many requests simultaneously |
| **Event-driven** | Uses events and callbacks instead of threads |
| **Single-threaded** | One main thread, but delegates heavy work to the OS |
| **npm ecosystem** | Largest package registry in the world |

### Code Example
\`\`\`javascript
// Simple HTTP server in Node.js
const http = require('http');

const server = http.createServer((req, res) => {
  // Non-blocking: can handle other requests while processing
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Hello from Node.js!' }));
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});

// Node.js is great for I/O operations
const fs = require('fs');

// Asynchronous - doesn't block
fs.readFile('large-file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('File read complete');
});
console.log('This prints BEFORE file is read!');

// Express.js - popular Node.js framework
const express = require('express');
const app = express();

app.get('/api/users', async (req, res) => {
  const users = await db.query('SELECT * FROM users');
  res.json(users);
});

app.listen(3000);
\`\`\`

### Why It Matters
Node.js enables JavaScript developers to build full-stack applications with one language. Its non-blocking nature makes it excellent for real-time applications, APIs, and microservices.`
    },
    {
        id: 'tcs024',
        question: 'Explain middleware in Express.js',
        answer: `### Simple Explanation
Middleware are functions that run between receiving a request and sending a response. They can modify the request, response, end the cycle, or pass control to the next middleware. Think of them as checkpoints a request passes through.

### Real-World Analogy
Like airport security checkpoints:
1. **Ticket check** (Authentication middleware)
2. **Baggage scan** (Validation middleware)
3. **Passport control** (Authorization middleware)
4. **Boarding gate** (Final handler)

Each checkpoint can let you through, send you back, or forward you to the next.

### Technical Details
**Middleware signature:** \`(req, res, next) => { }\`
- \`req\` - Request object
- \`res\` - Response object
- \`next\` - Function to pass to next middleware

### Code Example
\`\`\`javascript
const express = require('express');
const app = express();

// 1. LOGGING MIDDLEWARE - runs on every request
app.use((req, res, next) => {
  console.log(\`\${req.method} \${req.url} at \${new Date().toISOString()}\`);
  next();  // Pass to next middleware
});

// 2. BODY PARSER - built-in middleware
app.use(express.json());  // Parses JSON body

// 3. AUTHENTICATION MIDDLEWARE
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }
  
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;  // Attach user to request
    next();  // Proceed to next middleware
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

// 4. APPLY TO SPECIFIC ROUTES
app.get('/public', (req, res) => {
  res.json({ message: 'Public route' });
});

app.get('/protected', authMiddleware, (req, res) => {
  res.json({ message: \`Hello, \${req.user.name}\` });
});

// 5. ERROR-HANDLING MIDDLEWARE (4 parameters)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Middleware execution order:
// Request → Logger → Body Parser → Auth → Route Handler → Error Handler
\`\`\`

### Why It Matters
Middleware enables separation of concerns, code reuse, and clean architecture. Common uses: authentication, logging, validation, error handling, CORS, compression.`
    },
    {
        id: 'tcs025',
        question: 'What is CORS?',
        answer: `### Simple Explanation
CORS (Cross-Origin Resource Sharing) is a security feature in browsers that blocks web pages from making requests to different domains. It prevents malicious websites from stealing data from other sites you're logged into.

### Real-World Analogy
Like a nightclub's guest list policy. Your website (yoursite.com) is a private club. CORS headers are like telling the bouncer: "People coming from partnersite.com are allowed in, but block everyone else."

### Technical Details
**Same-Origin Policy:** Browser blocks requests when:
| Element | Must Match |
|---------|------------|
| Protocol | http vs https |
| Domain | api.example.com vs example.com |
| Port | :3000 vs :8080 |

**CORS Headers:**
| Header | Purpose |
|--------|---------|
| Access-Control-Allow-Origin | Which domains can access |
| Access-Control-Allow-Methods | Which HTTP methods allowed |
| Access-Control-Allow-Headers | Which headers allowed |
| Access-Control-Allow-Credentials | Allow cookies/auth |

### Code Example
\`\`\`javascript
// Express.js CORS setup
const cors = require('cors');

// Allow all origins (not recommended for production)
app.use(cors());

// Allow specific origin
app.use(cors({
  origin: 'https://mywebsite.com'
}));

// Multiple origins with options
app.use(cors({
  origin: ['https://mywebsite.com', 'https://admin.mywebsite.com'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true  // Allow cookies
}));

// Manual CORS headers
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://mywebsite.com');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});
\`\`\`

### Why It Matters
Understanding CORS prevents frustrating debugging sessions ("Why is my API call blocked?") and helps you secure your APIs properly.`
    },
    {
        id: 'tcs026',
        question: 'Explain authentication vs authorization',
        answer: `### Simple Explanation
- **Authentication**: Verifying WHO you are (identity check)
- **Authorization**: Verifying WHAT you can access (permission check)

### Real-World Analogy
At an office building:
- **Authentication**: Showing your ID badge at the entrance (proving you work here)
- **Authorization**: Your badge only opens certain doors (you can access your floor, not the CEO's office)

### Technical Details
| Aspect | Authentication | Authorization |
|--------|----------------|---------------|
| **Question** | Who are you? | What can you do? |
| **Happens** | First | After authentication |
| **Methods** | Password, biometrics, tokens | Roles, permissions, policies |
| **Failure** | 401 Unauthorized | 403 Forbidden |

### Code Example
\`\`\`javascript
// AUTHENTICATION - Verify identity
const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    next();  // Identity verified, proceed
  } catch (err) {
    res.status(401).json({ error: 'Invalid or expired token' });
  }
};

// AUTHORIZATION - Check permissions
const authorizeRole = (...allowedRoles) => {
  return (req, res, next) => {
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ 
        error: 'You do not have permission for this action' 
      });
    }
    next();
  };
};

// Usage: Both authentication AND authorization
app.delete('/users/:id', 
  authMiddleware,                    // First: Who are you?
  authorizeRole('admin'),            // Second: Are you allowed?
  async (req, res) => {
    await User.delete(req.params.id);
    res.status(204).send();
  }
);

// Different permissions for different routes
app.get('/users', authMiddleware, getUsers);  // Any authenticated user
app.post('/users', authMiddleware, authorizeRole('admin'), createUser);  // Admins only
app.get('/profile', authMiddleware, getProfile);  // Own profile only
\`\`\`

### Why It Matters
Security depends on both. Authentication without authorization lets anyone do anything once logged in. Authorization without authentication means anyone can claim to be an admin.`
    },
    {
        id: 'tcs027',
        question: 'What is JWT?',
        answer: `### Simple Explanation
JWT (JSON Web Token) is a compact, self-contained token for securely transmitting information. It's like a signed ID card that contains your details and can be verified without contacting the issuer.

### Real-World Analogy
Like a concert wristband with encrypted info:
- **Header**: Wristband type (VIP, General)
- **Payload**: Your details (name, seat number)
- **Signature**: Security seal that proves it's real

Anyone can read it, but only the concert organizer can create valid ones.

### Technical Details
**JWT Structure:** \`header.payload.signature\`

| Part | Contains | Encoded |
|------|----------|---------|
| **Header** | Algorithm, token type | Base64 |
| **Payload** | User data, expiry (claims) | Base64 |
| **Signature** | Verification hash | HMAC/RSA |

### Code Example
\`\`\`javascript
const jwt = require('jsonwebtoken');

// Creating a JWT
const createToken = (user) => {
  return jwt.sign(
    { 
      id: user.id, 
      email: user.email,
      role: user.role 
    },
    process.env.JWT_SECRET,
    { expiresIn: '24h' }
  );
};

// Login endpoint
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findByEmail(email);
  
  if (!user || !await bcrypt.compare(password, user.password)) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  
  const token = createToken(user);
  res.json({ token });
});

// Verifying JWT in middleware
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;  // { id, email, role }
    next();
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Token expired' });
    }
    res.status(401).json({ error: 'Invalid token' });
  }
};

// Client-side usage
fetch('/api/protected', {
  headers: {
    'Authorization': \`Bearer \${token}\`
  }
});

// JWT example (decoded):
// Header: { "alg": "HS256", "typ": "JWT" }
// Payload: { "id": 123, "email": "user@email.com", "exp": 1704067200 }
// Signature: HMACSHA256(header + "." + payload, secret)
\`\`\`

### Why It Matters
JWT enables stateless authentication - servers don't need to store session data. Perfect for microservices, mobile apps, and scalable architectures.`
    },
    {
        id: 'tcs028',
        question: 'Explain database indexing',
        answer: `### Simple Explanation
An index is like a book's index - it helps find data faster without scanning every page. It's a data structure that points to where data is stored, speeding up queries dramatically.

### Real-World Analogy
Library without index: Check every book to find "Harry Potter"
Library with index: Look in card catalog → Section 5, Shelf 3, Book 12

### Technical Details
| Without Index | With Index |
|---------------|------------|
| Full table scan (O(n)) | Direct lookup (O(log n)) |
| Checks every row | Goes straight to matching rows |
| Slow for large tables | Fast even for millions of rows |

**Trade-offs:**
- ✅ Faster reads (SELECT)
- ❌ Slower writes (INSERT, UPDATE, DELETE need index updates)
- ❌ Uses extra storage space

### Code Example
\`\`\`sql
-- Without index: Scans all 1 million users
SELECT * FROM users WHERE email = 'john@email.com';
-- Time: 500ms

-- Create index on email column
CREATE INDEX idx_users_email ON users(email);

-- With index: Direct lookup
SELECT * FROM users WHERE email = 'john@email.com';
-- Time: 5ms

-- Composite index for common queries
CREATE INDEX idx_orders_user_date ON orders(user_id, created_at);

-- This query uses the index efficiently
SELECT * FROM orders 
WHERE user_id = 123 AND created_at > '2024-01-01';

-- Index types:
-- B-Tree (default): Good for equality and range queries
-- Hash: Fast for equality only
-- Full-text: For text search
-- GiST/GIN: For complex data types

-- Check if index is being used
EXPLAIN ANALYZE SELECT * FROM users WHERE email = 'john@email.com';
\`\`\`

### Why It Matters
Indexing is crucial for application performance. A missing index can make a fast query take seconds instead of milliseconds. Index columns used in WHERE, JOIN, and ORDER BY clauses.`
    },
    {
        id: 'tcs079',
        question: 'Explain different types of databases',
        answer: `### Simple Explanation
Databases store data in different ways depending on what you need:
- **SQL/Relational**: Structured tables with relationships
- **NoSQL**: Flexible structure for varied data types

### Real-World Analogy
- **SQL**: Excel spreadsheets with strict columns - every row follows same format
- **Document (NoSQL)**: File folders - each folder can have different contents
- **Key-Value**: Dictionary - find value by key instantly
- **Graph**: Social network - focus on connections between things

### Technical Details
| Type | Example | Use Case | Structure |
|------|---------|----------|-----------|
| **Relational** | MySQL, PostgreSQL | Complex queries, transactions | Tables, rows, columns |
| **Document** | MongoDB | Flexible schemas, JSON data | Collections, documents |
| **Key-Value** | Redis | Caching, sessions | Key → Value pairs |
| **Column** | Cassandra | Big data, analytics | Column families |
| **Graph** | Neo4j | Social networks, recommendations | Nodes, edges |

### Code Example
\`\`\`javascript
// SQL (PostgreSQL with Prisma)
const user = await prisma.user.findUnique({
  where: { id: 1 },
  include: { 
    orders: true,
    profile: true 
  }
});

// Document (MongoDB)
const user = await User.findOne({ email: 'john@email.com' });
// Document can have nested, variable structure
// { name: "John", orders: [{...}, {...}], metadata: {...} }

// Key-Value (Redis)
await redis.set('session:abc123', JSON.stringify(userData));
const session = await redis.get('session:abc123');

// When to use what:
// - Banking, e-commerce: SQL (ACID guarantees)
// - Content management, catalogs: Document
// - Caching, real-time features: Key-Value
// - Social networks, recommendations: Graph
\`\`\`

### Why It Matters
Choosing the right database impacts performance, scalability, and development speed. Many modern apps use multiple database types (polyglot persistence).`
    },
    {
        id: 'tcs080',
        question: 'What is ORM? Examples?',
        answer: `### Simple Explanation
ORM (Object-Relational Mapping) is a technique that lets you interact with your database using your programming language's objects instead of writing raw SQL. It maps database tables to classes.

### Real-World Analogy
Like a translator between two languages. Instead of learning SQL (foreign language), you speak JavaScript (your language), and the ORM translates to SQL for the database.

### Technical Details
| Without ORM | With ORM |
|-------------|----------|
| Write raw SQL strings | Write JavaScript/TypeScript |
| Manual data mapping | Automatic object mapping |
| SQL injection risks | Built-in protection |
| Database-specific syntax | Database-agnostic code |

### Code Example
\`\`\`javascript
// WITHOUT ORM - Raw SQL (error-prone, verbose)
const result = await db.query(
  'SELECT * FROM users WHERE email = $1',
  [email]
);
const user = result.rows[0];

// WITH ORM - Prisma (modern, type-safe)
const user = await prisma.user.findUnique({
  where: { email: email }
});

// Prisma schema (schema.prisma)
model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String
  posts     Post[]   // Relation
  createdAt DateTime @default(now())
}

// CRUD operations with Prisma
// Create
const newUser = await prisma.user.create({
  data: { email: 'john@email.com', name: 'John' }
});

// Read with relations
const userWithPosts = await prisma.user.findUnique({
  where: { id: 1 },
  include: { posts: true }
});

// Update
const updated = await prisma.user.update({
  where: { id: 1 },
  data: { name: 'John Doe' }
});

// Delete
await prisma.user.delete({ where: { id: 1 } });

// Complex queries
const results = await prisma.user.findMany({
  where: {
    posts: { some: { published: true } },
    createdAt: { gte: new Date('2024-01-01') }
  },
  orderBy: { name: 'asc' },
  take: 10
});
\`\`\`

### Why It Matters
ORMs increase developer productivity, provide type-safety, and protect against SQL injection. Popular choices: Prisma (Node.js), SQLAlchemy (Python), Hibernate (Java).`
    },
    {
        id: 'tcs081',
        question: 'Explain ACID properties',
        answer: `### Simple Explanation
ACID is a set of properties that guarantee database transactions are processed reliably. Each letter represents a critical property that prevents data corruption.

### Real-World Analogy
Like a bank transfer from Account A to Account B:
- **Atomicity**: Money leaves A AND arrives at B, or nothing happens
- **Consistency**: Total money before = total money after
- **Isolation**: Other transfers don't interfere mid-transaction
- **Durability**: Once confirmed, it survives even a power outage

### Technical Details
| Property | Meaning | Example |
|----------|---------|---------|
| **Atomicity** | All or nothing | Transfer: debit AND credit, or neither |
| **Consistency** | Valid state before and after | Balance can't go negative |
| **Isolation** | Concurrent transactions don't interfere | Two transfers happen independently |
| **Durability** | Committed data survives crashes | Confirmed transfer is permanent |

### Code Example
\`\`\`javascript
// Without ACID - Dangerous
await db.query('UPDATE accounts SET balance = balance - 100 WHERE id = 1');
// If server crashes here, money disappears!
await db.query('UPDATE accounts SET balance = balance + 100 WHERE id = 2');

// With ACID - Transaction guarantees all-or-nothing
const transferMoney = async (fromId, toId, amount) => {
  const client = await pool.connect();
  
  try {
    await client.query('BEGIN');  // Start transaction
    
    // Check sufficient balance (Consistency)
    const sender = await client.query(
      'SELECT balance FROM accounts WHERE id = $1 FOR UPDATE',
      [fromId]
    );
    
    if (sender.rows[0].balance < amount) {
      throw new Error('Insufficient funds');
    }
    
    // Debit sender
    await client.query(
      'UPDATE accounts SET balance = balance - $1 WHERE id = $2',
      [amount, fromId]
    );
    
    // Credit receiver
    await client.query(
      'UPDATE accounts SET balance = balance + $1 WHERE id = $2',
      [amount, toId]
    );
    
    await client.query('COMMIT');  // All succeeded (Atomicity)
    // Data is now permanent (Durability)
    
    return { success: true };
  } catch (err) {
    await client.query('ROLLBACK');  // Undo everything
    throw err;
  } finally {
    client.release();
  }
};
\`\`\`

### Why It Matters
ACID properties are critical for financial applications, e-commerce, and any system where data integrity is crucial. NoSQL databases often sacrifice some ACID properties for scalability.`
    },
    {
        id: 'tcs082',
        question: 'What is SQL injection? How to prevent?',
        answer: `### Simple Explanation
SQL injection is a security attack where malicious SQL code is inserted through user input to manipulate your database. Attackers can steal data, delete records, or bypass authentication.

### Real-World Analogy
Like someone adding commands to a form:
- Normal input: "John Smith"
- Malicious input: "John'; DROP TABLE users; --"

If you trust user input blindly, you execute their commands as if they were yours.

### Technical Details
| Attack Type | Example Effect |
|-------------|----------------|
| Authentication bypass | Login without password |
| Data extraction | Download all user data |
| Data modification | Change passwords |
| Data deletion | DROP TABLE |

### Code Example
\`\`\`javascript
// ❌ VULNERABLE CODE - Never do this!
const username = req.body.username;  // User input: "admin' --"
const query = \`SELECT * FROM users WHERE username = '\${username}'\`;
// Results in: SELECT * FROM users WHERE username = 'admin' --'
// The -- comments out the rest, bypassing password check!

// Even worse input: "'; DROP TABLE users; --"
// Results in: SELECT * FROM users WHERE username = ''; DROP TABLE users; --'


// ✅ PREVENTION 1: Parameterized Queries (Best)
const query = 'SELECT * FROM users WHERE username = $1 AND password = $2';
const result = await db.query(query, [username, password]);
// User input is treated as DATA, never as SQL code


// ✅ PREVENTION 2: ORM (Prisma, Sequelize)
const user = await prisma.user.findUnique({
  where: { username: username }  // Automatically parameterized
});


// ✅ PREVENTION 3: Input Validation
const sanitizeUsername = (input) => {
  // Only allow alphanumeric characters
  return input.replace(/[^a-zA-Z0-9]/g, '');
};


// ✅ PREVENTION 4: Least Privilege
// Database user should only have necessary permissions
// Don't use admin/root account for application


// Complete secure implementation
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  
  // Validate input
  if (!username || !password) {
    return res.status(400).json({ error: 'Missing credentials' });
  }
  
  // Parameterized query
  const result = await pool.query(
    'SELECT * FROM users WHERE username = $1',
    [username]
  );
  
  const user = result.rows[0];
  if (user && await bcrypt.compare(password, user.password_hash)) {
    res.json({ token: generateToken(user) });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});
\`\`\`

### Why It Matters
SQL injection is one of the most common and dangerous web vulnerabilities. It's consistently in OWASP Top 10. Prevention is simple - always use parameterized queries.`
    },
    {
        id: 'tcs083',
        question: 'Explain database normalization',
        answer: `### Simple Explanation
Normalization is organizing data in a database to reduce redundancy and improve data integrity. It involves splitting large tables into smaller, related tables and defining relationships.

### Real-World Analogy
Like organizing a closet:
- **Unnormalized**: Every shirt has a note attached with manufacturer address, phone, website
- **Normalized**: One card per manufacturer; shirts just reference the card

If the manufacturer moves, update one card instead of every shirt.

### Technical Details
| Normal Form | Rule | Fixes |
|-------------|------|-------|
| **1NF** | Atomic values (no arrays) | Repeating groups |
| **2NF** | 1NF + No partial dependencies | Redundant data |
| **3NF** | 2NF + No transitive dependencies | Update anomalies |

### Code Example
\`\`\`sql
-- UNNORMALIZED (Bad - lots of redundancy)
CREATE TABLE orders_bad (
  order_id INT,
  order_date DATE,
  customer_name VARCHAR(100),
  customer_email VARCHAR(100),
  customer_address VARCHAR(200),  -- Repeated for every order!
  product_name VARCHAR(100),
  product_price DECIMAL,
  quantity INT
);

-- 1NF: Atomic values (no arrays in cells)
-- 2NF: No partial dependencies
-- 3NF: No transitive dependencies

-- NORMALIZED (Good - no redundancy)
CREATE TABLE customers (
  customer_id INT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  address VARCHAR(200)
);

CREATE TABLE products (
  product_id INT PRIMARY KEY,
  name VARCHAR(100),
  price DECIMAL
);

CREATE TABLE orders (
  order_id INT PRIMARY KEY,
  customer_id INT REFERENCES customers(customer_id),
  order_date DATE
);

CREATE TABLE order_items (
  order_id INT REFERENCES orders(order_id),
  product_id INT REFERENCES products(product_id),
  quantity INT,
  PRIMARY KEY (order_id, product_id)
);

-- Benefits:
-- Update customer address: 1 place
-- Change product price: 1 record
-- No duplicate data storage

-- Trade-off: Queries need JOINs
SELECT o.order_id, c.name, p.name, oi.quantity
FROM orders o
JOIN customers c ON o.customer_id = c.customer_id
JOIN order_items oi ON o.order_id = oi.order_id
JOIN products p ON oi.product_id = p.product_id;
\`\`\`

### Why It Matters
Normalization prevents data inconsistencies and reduces storage. But over-normalizing can hurt performance - sometimes denormalization is acceptable for read-heavy applications.`
    },
    {
        id: 'tcs084',
        question: 'What are transactions in databases?',
        answer: `### Simple Explanation
A transaction is a sequence of database operations that are treated as a single unit. Either ALL operations succeed, or NONE of them do. It's all-or-nothing to maintain data consistency.

### Real-World Analogy
Like a wedding ceremony:
- The priest asks both parties "Do you accept?"
- Both must say "I do" for the marriage to happen
- If either says "No", the wedding doesn't happen (ROLLBACK)
- If both say "Yes", they're married (COMMIT)

### Code Example
\`\`\`javascript
// Transaction for e-commerce checkout
async function processOrder(userId, cartItems) {
  const client = await pool.connect();
  
  try {
    await client.query('BEGIN');  // Start transaction
    
    // 1. Create order
    const orderResult = await client.query(
      'INSERT INTO orders (user_id, status) VALUES ($1, $2) RETURNING id',
      [userId, 'pending']
    );
    const orderId = orderResult.rows[0].id;
    
    // 2. Add order items and update stock
    for (const item of cartItems) {
      // Check stock availability
      const stock = await client.query(
        'SELECT quantity FROM products WHERE id = $1 FOR UPDATE',
        [item.productId]
      );
      
      if (stock.rows[0].quantity < item.quantity) {
        throw new Error(\`Insufficient stock for product \${item.productId}\`);
      }
      
      // Reduce stock
      await client.query(
        'UPDATE products SET quantity = quantity - $1 WHERE id = $2',
        [item.quantity, item.productId]
      );
      
      // Add to order items
      await client.query(
        'INSERT INTO order_items (order_id, product_id, quantity) VALUES ($1, $2, $3)',
        [orderId, item.productId, item.quantity]
      );
    }
    
    // 3. Process payment
    const paymentSuccess = await processPayment(userId, calculateTotal(cartItems));
    if (!paymentSuccess) {
      throw new Error('Payment failed');
    }
    
    // 4. Clear cart
    await client.query('DELETE FROM cart_items WHERE user_id = $1', [userId]);
    
    // All succeeded - commit everything
    await client.query('COMMIT');
    return { success: true, orderId };
    
  } catch (err) {
    // Something failed - undo everything
    await client.query('ROLLBACK');
    console.error('Transaction failed:', err.message);
    return { success: false, error: err.message };
  } finally {
    client.release();
  }
}

// Key commands:
// BEGIN    - Start transaction
// COMMIT   - Save all changes
// ROLLBACK - Undo all changes since BEGIN
\`\`\`

### Why It Matters
Transactions prevent partial updates that leave data in an inconsistent state. Critical for any operation involving multiple related changes (orders, transfers, registrations).`
    },
];

export default backendQuestions;
