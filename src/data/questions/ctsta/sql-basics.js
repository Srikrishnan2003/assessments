// Cognizant GenC - Database: SQL Basics Questions

export const sqlBasicsQuestions = [
    {
        id: 'ctsta-sql-001',
        question: 'Write a SQL query to find the second highest salary from an Employee table.',
        answer: `### Solution Approaches

\`\`\`sql
-- Method 1: Using LIMIT with OFFSET
SELECT DISTINCT salary 
FROM Employee 
ORDER BY salary DESC 
LIMIT 1 OFFSET 1;

-- Method 2: Using Subquery
SELECT MAX(salary) 
FROM Employee 
WHERE salary < (SELECT MAX(salary) FROM Employee);

-- Method 3: Using DENSE_RANK (handles duplicates)
SELECT salary FROM (
    SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) as rnk
    FROM Employee
) ranked WHERE rnk = 2;

-- Method 4: Nth highest salary (generalized)
SELECT DISTINCT salary 
FROM Employee 
ORDER BY salary DESC 
LIMIT 1 OFFSET N-1;  -- Replace N with desired position
\`\`\`

### Key Points
| Method | Handles Duplicates? | Performance |
|--------|---------------------|-------------|
| LIMIT OFFSET | No | Fast |
| Subquery | No | Medium |
| DENSE_RANK | Yes | Medium |`
    },
    {
        id: 'ctsta-sql-002',
        question: 'Explain GROUP BY and HAVING with examples.',
        answer: `### GROUP BY - Groups rows with same values
### HAVING - Filters groups (like WHERE but for aggregates)

\`\`\`sql
-- Sample Table: Orders (order_id, customer_id, amount, order_date)

-- Count orders per customer
SELECT customer_id, COUNT(*) as order_count
FROM Orders
GROUP BY customer_id;

-- Customers with more than 5 orders (HAVING filters groups)
SELECT customer_id, COUNT(*) as order_count
FROM Orders
GROUP BY customer_id
HAVING COUNT(*) > 5;

-- Total amount per customer, only show > 10000
SELECT customer_id, SUM(amount) as total_spent
FROM Orders
GROUP BY customer_id
HAVING SUM(amount) > 10000
ORDER BY total_spent DESC;

-- Multiple columns in GROUP BY
SELECT customer_id, YEAR(order_date) as year, SUM(amount)
FROM Orders
GROUP BY customer_id, YEAR(order_date);
\`\`\`

### Execution Order
1. FROM → 2. WHERE → 3. GROUP BY → 4. HAVING → 5. SELECT → 6. ORDER BY

### WHERE vs HAVING
| WHERE | HAVING |
|-------|--------|
| Filters rows before grouping | Filters groups after grouping |
| Cannot use aggregates | Can use aggregates |
| Better performance | Runs after GROUP BY |`
    },
    {
        id: 'ctsta-sql-003',
        question: 'Write SQL queries using aggregate functions COUNT, SUM, AVG, MAX, MIN.',
        answer: `### Aggregate Functions Examples

\`\`\`sql
-- Sample Table: Products (id, name, category, price, quantity)

-- COUNT - Number of rows
SELECT COUNT(*) FROM Products;                    -- All rows
SELECT COUNT(category) FROM Products;             -- Non-NULL values
SELECT COUNT(DISTINCT category) FROM Products;    -- Unique values

-- SUM - Total of numeric column
SELECT SUM(price * quantity) as total_value FROM Products;
SELECT category, SUM(quantity) FROM Products GROUP BY category;

-- AVG - Average value
SELECT AVG(price) as avg_price FROM Products;
SELECT category, AVG(price) as avg_price 
FROM Products 
GROUP BY category;

-- MAX / MIN - Highest / Lowest value
SELECT MAX(price) as highest, MIN(price) as lowest FROM Products;

-- Combined example
SELECT 
    category,
    COUNT(*) as product_count,
    SUM(quantity) as total_stock,
    AVG(price) as avg_price,
    MAX(price) as max_price,
    MIN(price) as min_price
FROM Products
GROUP BY category
HAVING COUNT(*) > 5
ORDER BY avg_price DESC;
\`\`\`

### NULL Handling
- COUNT(*) includes NULLs
- COUNT(column) excludes NULLs
- AVG, SUM, MAX, MIN ignore NULLs`
    },
    {
        id: 'ctsta-sql-004',
        question: 'Write a query to find departments with more than 5 employees earning above 50000.',
        answer: `### Solution

\`\`\`sql
-- Table: Employees (emp_id, name, department, salary)

-- Find departments with > 5 employees earning > 50000
SELECT department, COUNT(*) as high_earners
FROM Employees
WHERE salary > 50000
GROUP BY department
HAVING COUNT(*) > 5
ORDER BY high_earners DESC;

-- With average salary
SELECT 
    department,
    COUNT(*) as high_earners,
    AVG(salary) as avg_salary
FROM Employees
WHERE salary > 50000
GROUP BY department
HAVING COUNT(*) > 5;

-- Show all info including total employees
SELECT 
    department,
    COUNT(*) as total_employees,
    SUM(CASE WHEN salary > 50000 THEN 1 ELSE 0 END) as high_earners,
    AVG(salary) as avg_salary
FROM Employees
GROUP BY department
HAVING SUM(CASE WHEN salary > 50000 THEN 1 ELSE 0 END) > 5;
\`\`\`

### Query Breakdown
1. **WHERE** filters individual rows (salary > 50000)
2. **GROUP BY** groups by department
3. **HAVING** filters groups (count > 5)`
    },
    {
        id: 'ctsta-sql-005',
        question: 'Write a SQL query using CASE WHEN for conditional logic.',
        answer: `### CASE WHEN Syntax and Examples

\`\`\`sql
-- Basic Syntax
SELECT column,
    CASE 
        WHEN condition1 THEN result1
        WHEN condition2 THEN result2
        ELSE default_result
    END as new_column
FROM table;

-- Salary Range Classification
SELECT 
    name,
    salary,
    CASE 
        WHEN salary >= 100000 THEN 'High'
        WHEN salary >= 50000 THEN 'Medium'
        ELSE 'Low'
    END as salary_band
FROM Employees;

-- Conditional Aggregation (Pivot-like)
SELECT 
    department,
    SUM(CASE WHEN gender = 'M' THEN 1 ELSE 0 END) as male_count,
    SUM(CASE WHEN gender = 'F' THEN 1 ELSE 0 END) as female_count
FROM Employees
GROUP BY department;

-- In ORDER BY
SELECT * FROM Products
ORDER BY 
    CASE 
        WHEN category = 'Electronics' THEN 1
        WHEN category = 'Clothing' THEN 2
        ELSE 3
    END;

-- In UPDATE
UPDATE Employees
SET bonus = CASE 
    WHEN rating >= 4 THEN salary * 0.2
    WHEN rating >= 3 THEN salary * 0.1
    ELSE 0
END;
\`\`\``
    },
    {
        id: 'ctsta-sql-006',
        question: 'Explain DISTINCT and ORDER BY with examples.',
        answer: `### DISTINCT - Remove duplicates
### ORDER BY - Sort results

\`\`\`sql
-- DISTINCT on single column
SELECT DISTINCT category FROM Products;

-- DISTINCT on multiple columns
SELECT DISTINCT city, state FROM Customers;

-- COUNT with DISTINCT
SELECT COUNT(DISTINCT category) as unique_categories FROM Products;

-- ORDER BY single column
SELECT * FROM Products ORDER BY price;        -- Ascending (default)
SELECT * FROM Products ORDER BY price DESC;   -- Descending

-- ORDER BY multiple columns
SELECT * FROM Employees 
ORDER BY department ASC, salary DESC;  -- By dept, then by salary within dept

-- ORDER BY with alias
SELECT name, salary * 12 as annual_salary
FROM Employees
ORDER BY annual_salary DESC;

-- ORDER BY with column position
SELECT name, department, salary 
FROM Employees 
ORDER BY 2, 3 DESC;  -- Order by 2nd column, then 3rd

-- NULLS handling
SELECT * FROM Products 
ORDER BY price NULLS LAST;  -- NULLs at end (PostgreSQL)
\`\`\`

### Performance Tips
- DISTINCT can be expensive on large datasets
- Create indexes on ORDER BY columns
- LIMIT with ORDER BY is faster than ordering all rows`
    },
    {
        id: 'ctsta-sql-007',
        question: 'Write a query to find employees who joined in the last 30 days.',
        answer: `### Date Filtering Queries

\`\`\`sql
-- MySQL syntax
SELECT * FROM Employees 
WHERE join_date >= DATE_SUB(CURDATE(), INTERVAL 30 DAY);

-- Alternative MySQL
SELECT * FROM Employees 
WHERE join_date >= NOW() - INTERVAL 30 DAY;

-- SQL Server
SELECT * FROM Employees 
WHERE join_date >= DATEADD(day, -30, GETDATE());

-- PostgreSQL
SELECT * FROM Employees 
WHERE join_date >= CURRENT_DATE - INTERVAL '30 days';

-- Oracle
SELECT * FROM Employees 
WHERE join_date >= SYSDATE - 30;

-- Employees joined in current month
SELECT * FROM Employees 
WHERE YEAR(join_date) = YEAR(CURDATE()) 
AND MONTH(join_date) = MONTH(CURDATE());

-- Employees joined between specific dates
SELECT * FROM Employees 
WHERE join_date BETWEEN '2025-01-01' AND '2025-01-31';

-- Extract date parts
SELECT 
    name,
    join_date,
    YEAR(join_date) as year,
    MONTH(join_date) as month,
    DAY(join_date) as day
FROM Employees;
\`\`\``
    },
    {
        id: 'ctsta-sql-008',
        question: 'Write a query to find duplicate records in a table.',
        answer: `### Finding Duplicates

\`\`\`sql
-- Find duplicate emails
SELECT email, COUNT(*) as count
FROM Users
GROUP BY email
HAVING COUNT(*) > 1;

-- Show all duplicate rows with details
SELECT *
FROM Users
WHERE email IN (
    SELECT email FROM Users
    GROUP BY email
    HAVING COUNT(*) > 1
);

-- Using Window Function (more efficient)
SELECT * FROM (
    SELECT *, 
           ROW_NUMBER() OVER (PARTITION BY email ORDER BY id) as rn
    FROM Users
) t WHERE rn > 1;

-- Find duplicates on multiple columns
SELECT first_name, last_name, COUNT(*)
FROM Employees
GROUP BY first_name, last_name
HAVING COUNT(*) > 1;

-- Delete duplicates keeping one (MySQL)
DELETE t1 FROM Users t1
INNER JOIN Users t2 
WHERE t1.id > t2.id AND t1.email = t2.email;

-- Delete using CTE (SQL Server/PostgreSQL)
WITH CTE AS (
    SELECT *, ROW_NUMBER() OVER (PARTITION BY email ORDER BY id) as rn
    FROM Users
)
DELETE FROM CTE WHERE rn > 1;
\`\`\``
    },
    {
        id: 'ctsta-sql-009',
        question: 'Explain NULL handling in SQL with COALESCE and IFNULL.',
        answer: `### NULL Handling Functions

\`\`\`sql
-- COALESCE - Returns first non-NULL value (Standard SQL)
SELECT COALESCE(phone, email, 'No Contact') as contact
FROM Customers;

-- IFNULL - MySQL specific (2 arguments only)
SELECT IFNULL(phone, 'N/A') as phone FROM Customers;

-- ISNULL - SQL Server (2 arguments)
SELECT ISNULL(phone, 'N/A') as phone FROM Customers;

-- NVL - Oracle
SELECT NVL(phone, 'N/A') as phone FROM Customers;

-- IS NULL / IS NOT NULL
SELECT * FROM Customers WHERE phone IS NULL;
SELECT * FROM Customers WHERE phone IS NOT NULL;

-- NULLIF - Returns NULL if values are equal
SELECT NULLIF(price, 0) as price FROM Products;  -- Avoid divide by zero

-- Using in calculations
SELECT 
    name,
    salary,
    COALESCE(bonus, 0) as bonus,
    salary + COALESCE(bonus, 0) as total
FROM Employees;

-- COUNT and NULL
SELECT 
    COUNT(*) as total_rows,            -- Includes NULL
    COUNT(phone) as with_phone,        -- Excludes NULL
    COUNT(*) - COUNT(phone) as no_phone
FROM Customers;
\`\`\`

### NULL Comparison Rules
- NULL = NULL → NULL (not TRUE)
- Use IS NULL, not = NULL
- NULL in arithmetic → NULL`
    },
    {
        id: 'ctsta-sql-010',
        question: 'Write a query to implement pagination using LIMIT and OFFSET.',
        answer: `### Pagination Queries

\`\`\`sql
-- Basic pagination (MySQL/PostgreSQL)
-- Page 1 (first 10 records)
SELECT * FROM Products ORDER BY id LIMIT 10 OFFSET 0;

-- Page 2
SELECT * FROM Products ORDER BY id LIMIT 10 OFFSET 10;

-- Page N (general formula)
SELECT * FROM Products 
ORDER BY id 
LIMIT page_size OFFSET (page_number - 1) * page_size;

-- SQL Server syntax
SELECT * FROM Products
ORDER BY id
OFFSET 20 ROWS
FETCH NEXT 10 ROWS ONLY;

-- With total count (for pagination UI)
SELECT 
    (SELECT COUNT(*) FROM Products) as total_count,
    p.*
FROM Products p
ORDER BY id
LIMIT 10 OFFSET 20;

-- Keyset pagination (better performance for large datasets)
SELECT * FROM Products
WHERE id > last_seen_id
ORDER BY id
LIMIT 10;

-- ROW_NUMBER for complex pagination
SELECT * FROM (
    SELECT *, ROW_NUMBER() OVER (ORDER BY created_at DESC) as rn
    FROM Products
) t WHERE rn BETWEEN 21 AND 30;
\`\`\`

### Performance Note
- OFFSET becomes slow for large values
- Use keyset pagination for better performance`
    }
];

export default sqlBasicsQuestions;
