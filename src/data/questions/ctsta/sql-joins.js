// Cognizant GenC - Database: SQL Joins Questions

export const sqlJoinsQuestions = [
    {
        id: 'ctsta-join-001',
        question: 'Explain different types of JOINs with examples.',
        answer: `### Types of SQL JOINs

\`\`\`sql
-- Sample Tables:
-- Employees (emp_id, name, dept_id)
-- Departments (dept_id, dept_name)

-- INNER JOIN: Only matching rows from both tables
SELECT e.name, d.dept_name
FROM Employees e
INNER JOIN Departments d ON e.dept_id = d.dept_id;

-- LEFT JOIN: All from left + matching from right (NULL if no match)
SELECT e.name, d.dept_name
FROM Employees e
LEFT JOIN Departments d ON e.dept_id = d.dept_id;

-- RIGHT JOIN: All from right + matching from left
SELECT e.name, d.dept_name
FROM Employees e
RIGHT JOIN Departments d ON e.dept_id = d.dept_id;

-- FULL OUTER JOIN: All rows from both tables
SELECT e.name, d.dept_name
FROM Employees e
FULL OUTER JOIN Departments d ON e.dept_id = d.dept_id;

-- CROSS JOIN: Cartesian product (all combinations)
SELECT e.name, d.dept_name
FROM Employees e
CROSS JOIN Departments d;
\`\`\`

### Visual Comparison
| JOIN Type | Left Table | Right Table | Result |
|-----------|------------|-------------|--------|
| INNER | Matching only | Matching only | Intersection |
| LEFT | All rows | Matching only | Left + matches |
| RIGHT | Matching only | All rows | Right + matches |
| FULL | All rows | All rows | Union |`
    },
    {
        id: 'ctsta-join-002',
        question: 'Write a query using Self JOIN to find employees and their managers.',
        answer: `### Self JOIN - Table joined with itself

\`\`\`sql
-- Table: Employees (emp_id, name, manager_id)
-- manager_id references emp_id of the manager

-- Find employee with their manager's name
SELECT 
    e.name as employee,
    m.name as manager
FROM Employees e
LEFT JOIN Employees m ON e.manager_id = m.emp_id;

-- Find employees who earn more than their manager
SELECT 
    e.name as employee,
    e.salary as emp_salary,
    m.name as manager,
    m.salary as mgr_salary
FROM Employees e
JOIN Employees m ON e.manager_id = m.emp_id
WHERE e.salary > m.salary;

-- Find employees in same department
SELECT 
    e1.name as employee1,
    e2.name as employee2,
    e1.dept_id
FROM Employees e1
JOIN Employees e2 ON e1.dept_id = e2.dept_id
WHERE e1.emp_id < e2.emp_id;  -- Avoid duplicates

-- Hierarchy chain (Recursive CTE)
WITH RECURSIVE EmployeeHierarchy AS (
    SELECT emp_id, name, manager_id, 1 as level
    FROM Employees WHERE manager_id IS NULL
    
    UNION ALL
    
    SELECT e.emp_id, e.name, e.manager_id, eh.level + 1
    FROM Employees e
    JOIN EmployeeHierarchy eh ON e.manager_id = eh.emp_id
)
SELECT * FROM EmployeeHierarchy ORDER BY level;
\`\`\``
    },
    {
        id: 'ctsta-join-003',
        question: 'Write a query to find employees without any orders (LEFT JOIN with NULL check).',
        answer: `### Finding Non-Matching Records

\`\`\`sql
-- Tables: 
-- Employees (emp_id, name)
-- Orders (order_id, emp_id, amount)

-- Employees with no orders
SELECT e.emp_id, e.name
FROM Employees e
LEFT JOIN Orders o ON e.emp_id = o.emp_id
WHERE o.order_id IS NULL;

-- Alternative using NOT EXISTS (often faster)
SELECT e.emp_id, e.name
FROM Employees e
WHERE NOT EXISTS (
    SELECT 1 FROM Orders o WHERE o.emp_id = e.emp_id
);

-- Alternative using NOT IN (careful with NULLs)
SELECT emp_id, name
FROM Employees
WHERE emp_id NOT IN (
    SELECT DISTINCT emp_id FROM Orders WHERE emp_id IS NOT NULL
);

-- Customers without orders in 2024
SELECT c.customer_id, c.name
FROM Customers c
LEFT JOIN Orders o ON c.customer_id = o.customer_id 
                   AND YEAR(o.order_date) = 2024
WHERE o.order_id IS NULL;

-- Products never ordered
SELECT p.product_id, p.name
FROM Products p
LEFT JOIN OrderItems oi ON p.product_id = oi.product_id
WHERE oi.order_item_id IS NULL;
\`\`\`

### NOT IN vs NOT EXISTS
| NOT IN | NOT EXISTS |
|--------|------------|
| Fails if subquery returns NULL | Handles NULLs properly |
| Slower for large datasets | Generally faster |`
    },
    {
        id: 'ctsta-join-004',
        question: 'Explain Correlated Subquery vs Non-Correlated Subquery.',
        answer: `### Subquery Types

\`\`\`sql
-- NON-CORRELATED Subquery
-- Executes once, independent of outer query
SELECT name, salary
FROM Employees
WHERE salary > (SELECT AVG(salary) FROM Employees);

-- CORRELATED Subquery  
-- Executes once per outer row, references outer query
SELECT e.name, e.salary, e.dept_id
FROM Employees e
WHERE e.salary > (
    SELECT AVG(salary) 
    FROM Employees 
    WHERE dept_id = e.dept_id  -- References outer query
);

-- Correlated with EXISTS
SELECT c.name
FROM Customers c
WHERE EXISTS (
    SELECT 1 FROM Orders o 
    WHERE o.customer_id = c.customer_id  -- References outer
    AND o.amount > 1000
);

-- Non-correlated IN
SELECT name FROM Employees
WHERE dept_id IN (SELECT dept_id FROM Departments WHERE location = 'NYC');

-- Scalar Subquery in SELECT
SELECT 
    name,
    salary,
    (SELECT AVG(salary) FROM Employees) as avg_salary,
    salary - (SELECT AVG(salary) FROM Employees) as diff
FROM Employees;
\`\`\`

### Comparison
| Type | Execution | Performance |
|------|-----------|-------------|
| Non-correlated | Once | Better |
| Correlated | Per outer row | Slower (can be optimized) |`
    },
    {
        id: 'ctsta-join-005',
        question: 'Write a query to find top 3 products per category.',
        answer: `### Top N Per Group using Window Functions

\`\`\`sql
-- Using ROW_NUMBER (no ties)
SELECT * FROM (
    SELECT 
        product_id,
        name,
        category,
        price,
        ROW_NUMBER() OVER (PARTITION BY category ORDER BY price DESC) as rn
    FROM Products
) ranked
WHERE rn <= 3;

-- Using RANK (includes ties, may return more than 3)
SELECT * FROM (
    SELECT 
        product_id,
        name,
        category,
        price,
        RANK() OVER (PARTITION BY category ORDER BY price DESC) as rnk
    FROM Products
) ranked
WHERE rnk <= 3;

-- Using DENSE_RANK (no gaps in ranking)
SELECT * FROM (
    SELECT *,
        DENSE_RANK() OVER (PARTITION BY category ORDER BY price DESC) as drnk
    FROM Products
) ranked
WHERE drnk <= 3;

-- Without window functions (correlated subquery)
SELECT p1.*
FROM Products p1
WHERE (
    SELECT COUNT(*) FROM Products p2
    WHERE p2.category = p1.category AND p2.price > p1.price
) < 3
ORDER BY category, price DESC;
\`\`\`

### ROW_NUMBER vs RANK vs DENSE_RANK
| Function | Ties | Gaps | Example (prices: 100,100,90,80) |
|----------|------|------|--------------------------------|
| ROW_NUMBER | 1,2,3,4 | No | 1,2,3,4 |
| RANK | Same rank | Yes | 1,1,3,4 |
| DENSE_RANK | Same rank | No | 1,1,2,3 |`
    },
    {
        id: 'ctsta-join-006',
        question: 'Write a query using multiple JOINs across 3+ tables.',
        answer: `### Multi-Table JOIN Example

\`\`\`sql
-- Tables:
-- Customers (customer_id, name, city)
-- Orders (order_id, customer_id, order_date, total)
-- OrderItems (item_id, order_id, product_id, quantity)
-- Products (product_id, name, category, price)

-- Customer order details with product info
SELECT 
    c.name as customer_name,
    c.city,
    o.order_id,
    o.order_date,
    p.name as product_name,
    p.category,
    oi.quantity,
    oi.quantity * p.price as item_total
FROM Customers c
JOIN Orders o ON c.customer_id = o.customer_id
JOIN OrderItems oi ON o.order_id = oi.order_id
JOIN Products p ON oi.product_id = p.product_id
WHERE o.order_date >= '2025-01-01'
ORDER BY o.order_date DESC;

-- With aggregation
SELECT 
    c.name,
    COUNT(DISTINCT o.order_id) as order_count,
    SUM(oi.quantity) as total_items,
    SUM(oi.quantity * p.price) as total_spent
FROM Customers c
JOIN Orders o ON c.customer_id = o.customer_id
JOIN OrderItems oi ON o.order_id = oi.order_id
JOIN Products p ON oi.product_id = p.product_id
GROUP BY c.customer_id, c.name
HAVING SUM(oi.quantity * p.price) > 10000
ORDER BY total_spent DESC;
\`\`\``
    },
    {
        id: 'ctsta-join-007',
        question: 'Write a query to find departments where average salary is higher than company average.',
        answer: `### Subquery Comparison

\`\`\`sql
-- Method 1: Subquery in HAVING
SELECT 
    department,
    AVG(salary) as dept_avg
FROM Employees
GROUP BY department
HAVING AVG(salary) > (SELECT AVG(salary) FROM Employees);

-- Method 2: Using CTE
WITH CompanyAvg AS (
    SELECT AVG(salary) as avg_salary FROM Employees
)
SELECT 
    department,
    AVG(e.salary) as dept_avg,
    c.avg_salary as company_avg
FROM Employees e
CROSS JOIN CompanyAvg c
GROUP BY department, c.avg_salary
HAVING AVG(e.salary) > c.avg_salary;

-- Employees above their department average
SELECT e.name, e.salary, e.department
FROM Employees e
WHERE e.salary > (
    SELECT AVG(salary) 
    FROM Employees 
    WHERE department = e.department
);

-- Using Window Function
SELECT name, salary, department, dept_avg
FROM (
    SELECT 
        name, salary, department,
        AVG(salary) OVER (PARTITION BY department) as dept_avg
    FROM Employees
) t
WHERE salary > dept_avg;
\`\`\``
    },
    {
        id: 'ctsta-join-008',
        question: 'Explain UNION, UNION ALL, INTERSECT, and EXCEPT.',
        answer: `### Set Operations

\`\`\`sql
-- UNION: Combines results, removes duplicates
SELECT city FROM Customers
UNION
SELECT city FROM Suppliers;

-- UNION ALL: Combines results, keeps duplicates (faster)
SELECT city FROM Customers
UNION ALL
SELECT city FROM Suppliers;

-- INTERSECT: Only rows in both queries
SELECT city FROM Customers
INTERSECT
SELECT city FROM Suppliers;

-- EXCEPT (MINUS in Oracle): Rows in first but not second
SELECT city FROM Customers
EXCEPT
SELECT city FROM Suppliers;

-- Practical example: Active vs inactive products
SELECT product_id, name, 'Active' as status FROM ActiveProducts
UNION ALL
SELECT product_id, name, 'Inactive' FROM ArchivedProducts;

-- Combined reports
SELECT 'Q1' as quarter, SUM(amount) FROM Sales WHERE quarter = 1
UNION ALL
SELECT 'Q2', SUM(amount) FROM Sales WHERE quarter = 2
UNION ALL
SELECT 'Q3', SUM(amount) FROM Sales WHERE quarter = 3;
\`\`\`

### Rules
- Same number of columns
- Compatible data types
- Column names from first query`
    },
    {
        id: 'ctsta-join-009',
        question: 'Write a query to find consecutive dates/rows.',
        answer: `### Finding Consecutive Records

\`\`\`sql
-- Find consecutive login dates
-- Table: Logins (user_id, login_date)

-- Method 1: Self JOIN
SELECT DISTINCT l1.user_id, l1.login_date
FROM Logins l1
JOIN Logins l2 ON l1.user_id = l2.user_id
              AND l2.login_date = DATE_ADD(l1.login_date, INTERVAL 1 DAY)
JOIN Logins l3 ON l1.user_id = l3.user_id
              AND l3.login_date = DATE_ADD(l1.login_date, INTERVAL 2 DAY);

-- Method 2: Using Window Functions
WITH ConsecutiveCheck AS (
    SELECT 
        user_id,
        login_date,
        login_date - ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY login_date) * INTERVAL 1 DAY as grp
    FROM Logins
)
SELECT user_id, MIN(login_date) as start_date, MAX(login_date) as end_date, COUNT(*) as streak
FROM ConsecutiveCheck
GROUP BY user_id, grp
HAVING COUNT(*) >= 3;

-- Find consecutive numbers in table
SELECT DISTINCT l1.num as ConsecutiveNums
FROM Logs l1
JOIN Logs l2 ON l1.id + 1 = l2.id AND l1.num = l2.num
JOIN Logs l3 ON l2.id + 1 = l3.id AND l2.num = l3.num;
\`\`\``
    },
    {
        id: 'ctsta-join-010',
        question: 'Write a query using GROUP_CONCAT to aggregate strings.',
        answer: `### String Aggregation

\`\`\`sql
-- MySQL: GROUP_CONCAT
SELECT 
    department,
    GROUP_CONCAT(name) as employees,
    GROUP_CONCAT(name ORDER BY name SEPARATOR ', ') as sorted_employees,
    GROUP_CONCAT(DISTINCT name) as unique_employees
FROM Employees
GROUP BY department;

-- PostgreSQL: STRING_AGG
SELECT 
    department,
    STRING_AGG(name, ', ') as employees,
    STRING_AGG(name, ', ' ORDER BY name) as sorted_employees
FROM Employees
GROUP BY department;

-- SQL Server: STRING_AGG (2017+) or FOR XML PATH
-- STRING_AGG
SELECT department, STRING_AGG(name, ', ') as employees
FROM Employees
GROUP BY department;

-- FOR XML PATH (older SQL Server)
SELECT 
    department,
    STUFF((SELECT ', ' + name FROM Employees e2 
           WHERE e2.department = e1.department 
           FOR XML PATH('')), 1, 2, '') as employees
FROM Employees e1
GROUP BY department;

-- Practical: Products per category
SELECT 
    category,
    COUNT(*) as product_count,
    GROUP_CONCAT(name ORDER BY price DESC SEPARATOR ' | ') as products
FROM Products
GROUP BY category;
\`\`\``
    }
];

export default sqlJoinsQuestions;
