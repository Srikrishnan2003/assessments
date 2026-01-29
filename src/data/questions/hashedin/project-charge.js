
export const chargeProjectQuestions = [
    {
        id: 'hi-proj-cms-001',
        question: 'Explain the Architecture of Charge Management System.',
        answer: `### Charge Management System Architecture
**Type:** Banking Billing Platform
**Tech Stack:** Java Spring Boot, MySQL, React.js.

**Design:**
*   **Layered Architecture:** Controller -> Service -> Repository.
*   **Rule Engine:** A flexible core component that evaluates charge rules stored as JSON.
*   **Security:** Spring Security with JWT & OAuth2.
*   **Database:** Relational (MySQL) for strong consistency (ACID) required in banking.`
    },
    {
        id: 'hi-proj-cms-002',
        question: 'How did you implement the "Dynamic Rule Engine"?',
        answer: `### Dynamic Rule Engine
**Problem:** Hardcoding rules ("If type=Savings charge $10") requires deployment for every change.
**Solution:**
1.  **Storage:** Stored rules in Database with a \`conditions_json\` column.
    *   Example: \`{"min_balance": 5000, "txn_type": "ATM"}\`
2.  **Processing:**
    *   Used **Jackson** library to parse JSON at runtime.
    *   Factory Pattern to instantiate different \`RuleEvaluator\` classes based on rule type.
    *   Allows adding new rules dynamically via UI without restarting the server.`
    },
    {
        id: 'hi-proj-cms-003',
        question: 'Explain the Security implementation (JWT).',
        answer: `### JWT Security Flow
1.  **Login:** User sends credentials. Server validates and signs a **JWT (JSON Web Token)** containing \`sub\` (username) and \`roles\` (claims).
2.  **Request:** Client sends JWT in \`Authorization: Bearer <token>\` header.
3.  **Filter Chain:** \`JwtRequestFilter\` intercepts requests.
    *   Validates signature.
    *   Extracts roles.
    *   Sets \`SecurityContextHolder\`.
4.  **Stateless:** Server doesn't store session. Scales easily.`
    },
    {
        id: 'hi-proj-cms-004',
        question: 'What is `@Transactional` and why is it important?',
        answer: `### Transaction Management
**Annotation:** \`@Transactional\` (Spring)
**Purpose:** Ensures Atomicity.

**Scenario:** Settlement Process.
1.  Update \`Transaction\` status to 'SETTLED'.
2.  Insert record into \`Billing_History\`.
3.  Deduct amount from \`Customer_Balance\`.

If step 3 fails, steps 1 & 2 MUST rollback. \`@Transactional\` handles this automatically. Without it, we risk data inconsistency (money deducted but not recorded).`
    },
    {
        id: 'hi-proj-cms-005',
        question: 'How would you handle High Volume (10k TPS)?',
        answer: `### Handling High Scale
Current Sync architecture will block.

**Optimizations:**
1.  **Async Processing:** Decouple Ingestion & Processing.
    *   Controller accepts request -> Pushes to **Kafka/RabbitMQ**.
    *   Returns "202 Accepted".
2.  **Consumer Workers:** Multiple Spring Boot instances consume from Queue and process charges in parallel.
3.  **Database:** Read Replicas for reporting dashboards to offload Master DB.`
    }
];
