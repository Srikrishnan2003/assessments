// TCS Prime Interview - Backend & APIs Questions

export const backendQuestions = [
    {
        id: 'tcs021',
        question: 'What is REST API?',
        answer: `**REST** (Representational State Transfer) is an architectural style for designing networked applications.

**Principles:**
• **Stateless**: Each request contains all necessary information
• **Client-Server**: Separation of concerns
• **Cacheable**: Responses can be cached
• **Uniform Interface**: Standard HTTP methods (GET, POST, PUT, DELETE)`
    },
    {
        id: 'tcs022',
        question: 'Explain HTTP methods',
        answer: `• **GET**: Retrieve data, idempotent, cacheable
• **POST**: Create new resource, not idempotent
• **PUT**: Update entire resource, idempotent
• **PATCH**: Partial update
• **DELETE**: Remove resource, idempotent`
    },
    {
        id: 'tcs023',
        question: 'What is Node.js?',
        answer: `Node.js is a JavaScript runtime built on Chrome's V8 engine that allows JavaScript to run on the server.

**Benefits:**
• Non-blocking I/O for handling concurrent requests
• Same language (JavaScript) for frontend and backend
• Large npm ecosystem
• Event-driven architecture`
    },
    {
        id: 'tcs024',
        question: 'Explain middleware in Express.js',
        answer: `Middleware functions have access to request, response, and next function. They can:
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
\`\`\``
    },
    {
        id: 'tcs025',
        question: 'What is CORS?',
        answer: `**Cross-Origin Resource Sharing** allows restricted resources on a web page to be requested from another domain. Browsers block cross-origin requests for security. CORS headers allow controlled access.`
    },
    {
        id: 'tcs026',
        question: 'Explain authentication vs authorization',
        answer: `• **Authentication**: Verifying **who you are** (login with username/password)
• **Authorization**: Verifying **what you can access** (role-based permissions)`
    },
    {
        id: 'tcs027',
        question: 'What is JWT?',
        answer: `**JSON Web Token** is a compact, URL-safe token for securely transmitting information between parties.

**Structure:** \`Header.Payload.Signature\`

Used for stateless authentication.`
    },
    {
        id: 'tcs028',
        question: 'Explain database indexing',
        answer: `Indexes are data structures that improve query speed by creating pointers to data.

**Trade-off:** Faster reads, slower writes. Use for frequently queried columns.`
    },
    {
        id: 'tcs079',
        question: 'Explain different types of databases',
        answer: `• **SQL (Relational)**: MySQL, PostgreSQL. Structured data, ACID properties, fixed schema
• **NoSQL**: MongoDB, DynamoDB. Flexible schema, horizontal scaling
  - Document stores (MongoDB)
  - Key-value stores (Redis)
  - Column stores (Cassandra)
  - Graph databases (Neo4j)`
    },
    {
        id: 'tcs080',
        question: 'What is ORM? Examples?',
        answer: `Object-Relational Mapping converts data between incompatible systems. Maps database tables to objects. Examples: Prisma, Sequelize, TypeORM.

\`\`\`javascript
// Prisma example
const user = await prisma.user.findUnique({
  where: { id: 1 },
  include: { posts: true }
});
\`\`\``
    },
    {
        id: 'tcs081',
        question: 'Explain ACID properties',
        answer: `Database transaction properties:
• **Atomicity**: All or nothing - transaction fully completes or fully fails
• **Consistency**: Database remains in valid state
• **Isolation**: Concurrent transactions don't interfere
• **Durability**: Committed data is permanently saved`
    },
    {
        id: 'tcs082',
        question: 'What is SQL injection? How to prevent?',
        answer: `Malicious SQL code injected through user input. 

**Prevention:**
• Use parameterized queries/prepared statements
• Input validation and sanitization
• Use ORMs
• Principle of least privilege for database users

\`\`\`javascript
// Vulnerable
const query = \`SELECT * FROM users WHERE id = \${userId}\`;

// Safe
const query = 'SELECT * FROM users WHERE id = ?';
db.query(query, [userId]);
\`\`\``
    },
    {
        id: 'tcs083',
        question: 'Explain database normalization',
        answer: `Process of organizing data to reduce redundancy:
• **1NF**: Atomic values, no repeating groups
• **2NF**: 1NF + no partial dependencies
• **3NF**: 2NF + no transitive dependencies`
    },
    {
        id: 'tcs084',
        question: 'What are transactions in databases?',
        answer: `A transaction is a sequence of operations performed as a single logical unit. Use BEGIN, COMMIT, ROLLBACK to manage transactions.

\`\`\`javascript
const transaction = await db.transaction();
try {
  await transaction.query('UPDATE accounts SET balance = balance - 100 WHERE id = 1');
  await transaction.query('UPDATE accounts SET balance = balance + 100 WHERE id = 2');
  await transaction.commit();
} catch (error) {
  await transaction.rollback();
}
\`\`\``
    },
];

export default backendQuestions;
