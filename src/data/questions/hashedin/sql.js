
export const sqlQuestions = [
    {
        id: 'hi-sql-001',
        question: 'Explain ACID properties in Database.',
        answer: `### ACID Properties
These properties ensure reliable processing of database transactions.

1.  **Atomicity:** "All or Nothing". Entire transaction succeeds or fails. (e.g., Transfer money: if debit happens but credit fails, rollback both).
2.  **Consistency:** Database must remain in a valid state before and after transaction. Constraints (Foreign Keys, Unique) are preserved.
3.  **Isolation:** Concurrent transactions should not interfere with each other. (Read Committed, Serializable).
4.  **Durability:** Once committed, data is saved permanently even if power fails.`
    },
    {
        id: 'hi-sql-002',
        question: 'Find the Nth Highest Salary (Generic Query).',
        answer: `### Nth Highest Salary

**Method 1: Using Dense Rank (Recommended)**
Handles duplicates gracefully.
\`\`\`sql
SELECT * FROM (
    SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) as rnk
    FROM Employees
) t WHERE rnk = N;
\`\`\`

**Method 2: Using LIMIT OFFSET (MySQL/PostgreSQL)**
\`\`\`sql
SELECT DISTINCT salary 
FROM Employees 
ORDER BY salary DESC 
LIMIT 1 OFFSET N-1;
\`\`\`
*Replace N with 2 for 2nd highest, 3 for 3rd, etc.*`
    },
    {
        id: 'hi-sql-003',
        question: 'Explain Normalization and its types (1NF, 2NF, 3NF).',
        answer: `### Normalization
Process to organize data to reduce redundancy and improve integrity.

*   **1NF (First Normal Form):**
    *   No repeating groups.
    *   Each cell must contain a single (atomic) value.
    *   Example: Store "Phone1, Phone2" in separate rows, not comma-separated.

*   **2NF (Second Normal Form):**
    *   Must be in 1NF.
    *   **No Partial Dependency:** All non-key columns must depend on the *entire* Primary Key (not just part of it in composite keys).

*   **3NF (Third Normal Form):**
    *   Must be in 2NF.
    *   **No Transitive Dependency:** Non-key columns should not depend on other non-key columns. (e.g., maintain Zip->City implementation in a separate table, not in User table).`
    },
    {
        id: 'hi-sql-004',
        question: 'Difference between DELETE, TRUNCATE, and DROP.',
        answer: `### DELETE vs TRUNCATE vs DROP

| Component | DELETE | TRUNCATE | DROP |
|:---|:---|:---|:---|
| **Type** | DML (Data Manipulation) | DDL (Data Definition) | DDL |
| **Rollback** | Possible (uses transaction log). | Not possible (mostly). | Not possible. |
| **Speed** | Slow (deletes row by row). | Fast (resets table pages). | Instant (removes object). |
| **Condition** | Can use WHERE clause. | Removes ALL rows. | Removes Table structure & Data. |
| **Trigger** | Fires Triggers. | Does NOT fire triggers. | Does NOT fire triggers. |`
    },
    {
        id: 'hi-sql-005',
        question: 'Write a query to find valid constraints/duplicates.',
        answer: `### Finding Duplicates
Find email addresses that appear more than once.

\`\`\`sql
SELECT email, COUNT(*)
FROM Users
GROUP BY email
HAVING COUNT(*) > 1;
\`\`\`

### Delete Duplicates (keeping the one with lowest ID)
\`\`\`sql
DELETE t1 FROM Users t1
INNER JOIN Users t2 
WHERE t1.id > t2.id AND t1.email = t2.email;
\`\`\``
    },
    {
        id: 'hi-sql-006',
        question: 'Explain Types of Joins with examples.',
        answer: `### Types of Joins

1.  **INNER JOIN:** Returns matching rows in *both* tables.
    *   *Usage:* "Get users who have placed orders."
2.  **LEFT (OUTER) JOIN:** Returns all rows from Left table, and matching from Right.
    *   *Usage:* "Get all users, and their orders if any (SHOW NULL if no orders)."
3.  **RIGHT (OUTER) JOIN:** Returns all rows from Right table.
4.  **FULL (OUTER) JOIN:** Returns rows when match in *either* table.
5.  **CROSS JOIN:** Cartesian product (Row 1 * All Rows).

\`\`\`sql
SELECT u.name, o.order_date
FROM Users u
LEFT JOIN Orders o ON u.id = o.user_id;
\`\`\``
    },
    {
        id: 'hi-sql-007',
        question: 'Clustered vs Non-Clustered Index.',
        answer: `### Indexes

**Clustered Index:**
*   Defines the **physical order** of data in the table.
*   Like a dictionary (words are sorted A-Z).
*   Only **1** per table (usually Primary Key).
*   Faster for range queries.

**Non-Clustered Index:**
*   Logical order. Stored separately from data.
*   Like the index at the back of a book (Topic -> Page Number).
*   Can have **multiple** per table.
*   Good for lookups on non-PK columns (e.g., search by Email).`
    },
    {
        id: 'hi-sql-008',
        question: 'Difference between HAVNG and WHERE.',
        answer: `### WHERE vs HAVING

*   **WHERE:** Filters rows **BEFORE** grouping. Cannot use aggregate functions (SUM, COUNT).
    *   \`SELECT * FROM Sales WHERE amount > 100\`
*   **HAVING:** Filters groups **AFTER** grouping. Used with aggregates.
    *   \`SELECT dept, SUM(salary) FROM Emp GROUP BY dept HAVING SUM(salary) > 10000\``
    },
    {
        id: 'hi-sql-009',
        question: 'What are Constraints in SQL?',
        answer: `### SQL Constraints
Rules enforced on data columns.

1.  **NOT NULL:** Column cannot be empty.
2.  **UNIQUE:** All values must be different.
3.  **PRIMARY KEY:** Not Null + Unique. Uniquely identifies a row.
4.  **FOREIGN KEY:** Links to Primary Key of another table (Referential Integrity).
5.  **CHECK:** Ensures values meet condition (e.g., \`CHECK (age >= 18)\`).
6.  **DEFAULT:** Sets default value if none provided.`
    },
    {
        id: 'hi-sql-010',
        question: 'Explain Stored Procedure vs Function.',
        answer: `### Stored Proc vs Function

| Feature | Stored Procedure | Function |
|:---|:---|:---|
| **Return** | Can return 0, 1, or multiple values. | Must return exactly 1 value. |
| **Usage** | Executed independently (\`CALL proc()\`). | Used inside SQL statements (\`SELECT func() ...\`). |
| **DML** | Can run INSERT/UPDATE/DELETE. | Cannot change database state (mostly). |
| **Transactions** | Possible. | Not possible inside function. |`
    }
];
