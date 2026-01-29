
export const systemDesignQuestions = [
    {
        id: 'hi-sd-001',
        question: 'Horizontal Scaling vs Vertical Scaling.',
        answer: `### Scaling Strategies

**Vertical Scaling (Scale Up):**
*   **Concept:** Adding more power (CPU, RAM) to an existing server.
*   **Pros:** Simple, no code changes required.
*   **Cons:** Has a hard limit (cannot upgrade infinitely), Single Point of Failure (SPOF), Expensive.
*   **Analogy:** Replacing a small engine with a Ferrari engine.

**Horizontal Scaling (Scale Out):**
*   **Concept:** Adding more servers to the pool.
*   **Pros:** Infinite scaling, Fault tolerance (if one dies, others take over), Cheaper (commodity hardware).
*   **Cons:** Complex (requires Load Balancer, distributed data consistency).
*   **Analogy:** Using 10 horses instead of 1 super-horse.`
    },
    {
        id: 'hi-sd-002',
        question: 'Explain Load Balancer.',
        answer: `### Load Balancer
A device that distributes network traffic across multiple servers (Horizontal Scaling).

**Algorithms:**
1.  **Round Robin:** Sequential request distribution.
2.  **Least Connections:** Send to server with fewest active connections.
3.  **IP Hash:** Client IP determines server (Sticky Sessions).

**Types:**
*   **L4 (Transport Layer):** Bases decision on IP address & Port (TCP/UDP). Faster.
*   **L7 (Application Layer):** Bases decision on Content (URL, Cookies, Headers). Smarter.`
    },
    {
        id: 'hi-sd-003',
        question: 'CAP Theorem.',
        answer: `### CAP Theorem
In a distributed system, you can only pick **2 out of 3**:

1.  **Consistency:** All nodes see the same data at the same time.
2.  **Availability:** Every request gets a response (success/failure), even if some nodes are down.
3.  **Partition Tolerance:** System continues to work despite network failures (partitions).

**Choices:**
*   **CP (Consistency + Partition Tolerance):** MongoDB, HBase. (Data is consistent, but might return error if net split).
*   **AP (Availability + Partition Tolerance):** Cassandra, DynamoDB. (Always responds, but data might be slightly stale - Eventual Consistency).
*   **CA:** Impossible in distributed systems (network partitions are inevitable).`
    },
    {
        id: 'hi-sd-004',
        question: 'SQL vs NoSQL: How to choose?',
        answer: `### SQL vs NoSQL

**Use SQL (Relational - MySQL, Postgres) when:**
*   Data is structured and strict schema is needed.
*   **ACID** compliance is critical (Banking, Inventory).
*   Complex joins are required.

**Use NoSQL (Non-Relational - MongoDB, Redis) when:**
*   Data is unstructured (JSON, Documents).
*   High scalability/throughput is needed (Big Data).
*   Schema changes frequently (Flexible).
*   **Eventual Consistency** is acceptable.`
    },
    {
        id: 'hi-sd-005',
        question: 'Monolithic vs Microservices Architecture.',
        answer: `### Architecture Styles

**Monolith:**
*   **Single Codebase:** All modules (Auth, Billing, Orders) in one app.
*   **Pros:** Easy to develop/test initially, Simple deployment.
*   **Cons:** Hard to scale individual components, Single bug can bring down whole app, Tech stack lock-in.

**Microservices:**
*   **Decoupled Services:** Auth Service, Order Service etc. run independently.
*   **Pros:** Independent scaling (Scale Order service only on Black Friday), Fault isolation, Mix tech stacks.
*   **Cons:** Complexity (Service discovery, Network latency, Distributed transactions).`
    },
    {
        id: 'hi-sd-006',
        question: 'Caching Strategies.',
        answer: `### Caching
Used to speed up reads by storing data in memory (Redis/Memcached).

1.  **Cache-Aside (Lazy Loading):** App checks Cache. If miss, reads DB, populates Cache, returns data. (Most common).
2.  **Write-Through:** App writes to Cache and DB simultaneously. (Data consistency, but slower writes).
3.  **Write-Back:** App writes to Cache only. Cache async writes to DB later. (Fastest writes, risk of data loss).`
    },
    {
        id: 'hi-sd-007',
        question: 'REST vs GraphQL.',
        answer: `### REST vs GraphQL

**REST:**
*   **Resource Based:** Multiple endpoints (\`/users\`, \`/posts\`).
*   **Over-fetching/Under-fetching:** Might get too much data or need multiple calls.
*   **Standard:** Uses HTTP verbs (GET, POST).

**GraphQL:**
*   **Query Language:** Single endpoint (\`/graphql\`).
*   **Exact Data:** Client asks exactly what it needs (\`{ user { name } }\`).
*   **Complexity:** Harder to cache, complex backend implementation.`
    },
    {
        id: 'hi-sd-008',
        question: 'What is Database Sharding?',
        answer: `### Sharding
Splitting a large database horizontally across multiple machines.

*   **Example:** Users 1-1M on Server A, 1M-2M on Server B.
*   **Benefits:** Unlimited scaling.
*   **Drawbacks:** Complex queries (Joins across shards are hard), Resharding is difficult.`
    },
    {
        id: 'hi-sd-009',
        question: 'JWT vs Session Authentication.',
        answer: `### Auth Strategies

**Session (Stateful):**
*   Server stores Session ID in memory/DB.
*   Client sends Cookie.
*   **Pros:** Easy to revoke (just delete session).
*   **Cons:** Hard to scale (need Sticky Sessions or Redis).

**JWT (Stateless):**
*   Server signs token with Secret. Server stores *nothing*.
*   Client sends Token in Header.
*   **Pros:** Scalable (any server can verify signature).
*   **Cons:** Hard to revoke (need Blacklist), Token size.`
    },
    {
        id: 'hi-sd-010',
        question: 'HTTP Methods (GET vs POST vs PUT vs PATCH).',
        answer: `### HTTP Verbs

1.  **GET:** Retrieve resource. Idempotent (Safe).
2.  **POST:** Create resource. Not idempotent.
3.  **PUT:** Replace resource completely. Idempotent.
4.  **PATCH:** Partial update. Not idempotent.
5.  **DELETE:** Remove resource. Idempotent.`
    }
];
