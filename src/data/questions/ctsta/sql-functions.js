// Cognizant GenC - Database: SQL Functions Questions

export const sqlFunctionsQuestions = [
    {
        id: 'ctsta-sqlfn-001',
        question: 'Write SQL queries using String functions (CONCAT, SUBSTRING, UPPER, LOWER).',
        answer: `### String Functions

\`\`\`sql
-- CONCAT - Join strings
SELECT CONCAT(first_name, ' ', last_name) as full_name FROM Employees;
SELECT CONCAT_WS(', ', city, state, country) as address FROM Customers;

-- SUBSTRING / SUBSTR - Extract portion
SELECT SUBSTRING(email, 1, INSTR(email, '@') - 1) as username FROM Users;
SELECT SUBSTR(phone, 1, 3) as area_code FROM Customers;

-- UPPER / LOWER - Case conversion
SELECT UPPER(name) as name_upper FROM Products;
SELECT LOWER(email) as email_lower FROM Users;

-- LENGTH / LEN - String length
SELECT name, LENGTH(name) as name_length FROM Products;

-- TRIM / LTRIM / RTRIM - Remove spaces
SELECT TRIM(name) FROM Products;
SELECT LTRIM(RTRIM(name)) FROM Products;  -- SQL Server

-- REPLACE - Replace substring
SELECT REPLACE(phone, '-', '') as phone_digits FROM Customers;
SELECT REPLACE(email, '@old.com', '@new.com') FROM Users;

-- LEFT / RIGHT - Extract from start/end
SELECT LEFT(product_code, 3) as category_code FROM Products;
SELECT RIGHT(phone, 4) as last_four FROM Customers;

-- REVERSE
SELECT REVERSE(name) FROM Products;

-- LOCATE / INSTR / CHARINDEX - Find position
SELECT LOCATE('@', email) as at_position FROM Users;  -- MySQL
SELECT CHARINDEX('@', email) FROM Users;               -- SQL Server
\`\`\``
    },
    {
        id: 'ctsta-sqlfn-002',
        question: 'Write SQL queries using Date functions (DATE_ADD, DATEDIFF, DATE_FORMAT).',
        answer: `### Date Functions

\`\`\`sql
-- Current Date/Time
SELECT CURDATE();              -- MySQL: 2025-01-22
SELECT NOW();                  -- MySQL: 2025-01-22 10:30:00
SELECT GETDATE();              -- SQL Server
SELECT CURRENT_DATE;           -- PostgreSQL

-- DATE_ADD / DATE_SUB (MySQL)
SELECT DATE_ADD(order_date, INTERVAL 30 DAY) as due_date FROM Orders;
SELECT DATE_SUB(CURDATE(), INTERVAL 1 MONTH) as last_month;

-- DATEADD (SQL Server)
SELECT DATEADD(day, 30, order_date) as due_date FROM Orders;
SELECT DATEADD(month, -1, GETDATE()) as last_month;

-- DATEDIFF - Difference between dates
SELECT DATEDIFF(CURDATE(), hire_date) as days_employed FROM Employees;  -- MySQL
SELECT DATEDIFF(day, hire_date, GETDATE()) FROM Employees;               -- SQL Server

-- Extract parts
SELECT YEAR(order_date), MONTH(order_date), DAY(order_date) FROM Orders;
SELECT EXTRACT(YEAR FROM order_date) as year FROM Orders;  -- Standard SQL

-- DATE_FORMAT (MySQL)
SELECT DATE_FORMAT(order_date, '%Y-%m-%d') as formatted FROM Orders;
SELECT DATE_FORMAT(order_date, '%d/%m/%Y') as formatted FROM Orders;
SELECT DATE_FORMAT(order_date, '%W, %M %d, %Y') as formatted FROM Orders;

-- FORMAT (SQL Server)
SELECT FORMAT(order_date, 'yyyy-MM-dd') FROM Orders;

-- Day of week
SELECT DAYOFWEEK(order_date) FROM Orders;  -- 1=Sunday
SELECT DAYNAME(order_date) FROM Orders;     -- Monday, Tuesday...

-- Date truncation
SELECT DATE(created_at) FROM Orders;  -- Remove time portion
\`\`\``
    },
    {
        id: 'ctsta-sqlfn-003',
        question: 'Write a query to calculate age from date of birth.',
        answer: `### Age Calculation

\`\`\`sql
-- MySQL
SELECT 
    name,
    dob,
    TIMESTAMPDIFF(YEAR, dob, CURDATE()) as age
FROM Employees;

-- Alternative MySQL
SELECT 
    name,
    dob,
    FLOOR(DATEDIFF(CURDATE(), dob) / 365.25) as age
FROM Employees;

-- SQL Server
SELECT 
    name,
    dob,
    DATEDIFF(YEAR, dob, GETDATE()) - 
        CASE WHEN DATEADD(YEAR, DATEDIFF(YEAR, dob, GETDATE()), dob) > GETDATE() 
        THEN 1 ELSE 0 END as age
FROM Employees;

-- PostgreSQL
SELECT 
    name,
    dob,
    DATE_PART('year', AGE(dob)) as age
FROM Employees;

-- Filter by age
SELECT * FROM Employees
WHERE TIMESTAMPDIFF(YEAR, dob, CURDATE()) >= 18;

-- Group by age ranges
SELECT 
    CASE 
        WHEN TIMESTAMPDIFF(YEAR, dob, CURDATE()) < 25 THEN '18-24'
        WHEN TIMESTAMPDIFF(YEAR, dob, CURDATE()) < 35 THEN '25-34'
        WHEN TIMESTAMPDIFF(YEAR, dob, CURDATE()) < 45 THEN '35-44'
        ELSE '45+'
    END as age_group,
    COUNT(*) as count
FROM Employees
GROUP BY age_group;
\`\`\``
    },
    {
        id: 'ctsta-sqlfn-004',
        question: 'Write queries using Numeric functions (ROUND, CEIL, FLOOR, ABS, MOD).',
        answer: `### Numeric Functions

\`\`\`sql
-- ROUND - Round to decimal places
SELECT ROUND(price, 2) as rounded_price FROM Products;
SELECT ROUND(15.678, 1);  -- 15.7
SELECT ROUND(15.678, 0);  -- 16
SELECT ROUND(155, -1);    -- 160 (round to nearest 10)

-- CEIL / CEILING - Round up
SELECT CEIL(4.2);   -- 5
SELECT CEIL(-4.2);  -- -4

-- FLOOR - Round down
SELECT FLOOR(4.9);   -- 4
SELECT FLOOR(-4.2);  -- -5

-- ABS - Absolute value
SELECT ABS(-25);  -- 25
SELECT ABS(price - avg_price) as deviation FROM Products;

-- MOD - Modulo (remainder)
SELECT MOD(10, 3);  -- 1
SELECT * FROM Employees WHERE MOD(emp_id, 2) = 0;  -- Even IDs

-- POWER / POW
SELECT POWER(2, 10);  -- 1024

-- SQRT
SELECT SQRT(144);  -- 12

-- TRUNCATE - Remove decimal without rounding
SELECT TRUNCATE(15.678, 1);  -- 15.6

-- SIGN - Returns -1, 0, or 1
SELECT SIGN(-15);  -- -1
SELECT SIGN(0);    -- 0
SELECT SIGN(15);   -- 1

-- Practical: Tax calculation
SELECT 
    product_name,
    price,
    ROUND(price * 0.18, 2) as tax,
    ROUND(price * 1.18, 2) as total
FROM Products;
\`\`\``
    },
    {
        id: 'ctsta-sqlfn-005',
        question: 'Write a query to find orders placed on weekends vs weekdays.',
        answer: `### Weekday Analysis

\`\`\`sql
-- MySQL: DAYOFWEEK returns 1 (Sunday) to 7 (Saturday)
SELECT 
    order_id,
    order_date,
    DAYNAME(order_date) as day_name,
    CASE 
        WHEN DAYOFWEEK(order_date) IN (1, 7) THEN 'Weekend'
        ELSE 'Weekday'
    END as day_type
FROM Orders;

-- Count by day type
SELECT 
    CASE WHEN DAYOFWEEK(order_date) IN (1, 7) THEN 'Weekend' ELSE 'Weekday' END as day_type,
    COUNT(*) as order_count,
    SUM(amount) as total_amount
FROM Orders
GROUP BY day_type;

-- Sales by day of week
SELECT 
    DAYNAME(order_date) as day_name,
    COUNT(*) as orders,
    SUM(amount) as total,
    AVG(amount) as avg_order
FROM Orders
GROUP BY DAYOFWEEK(order_date), DAYNAME(order_date)
ORDER BY DAYOFWEEK(order_date);

-- SQL Server
SELECT 
    DATENAME(WEEKDAY, order_date) as day_name,
    CASE WHEN DATEPART(WEEKDAY, order_date) IN (1, 7) THEN 'Weekend' ELSE 'Weekday' END as day_type,
    COUNT(*) as orders
FROM Orders
GROUP BY DATENAME(WEEKDAY, order_date), DATEPART(WEEKDAY, order_date);
\`\`\``
    },
    {
        id: 'ctsta-sqlfn-006',
        question: 'Write a query to find employees with email domain analysis.',
        answer: `### Email Domain Analysis

\`\`\`sql
-- Extract domain from email
SELECT 
    email,
    SUBSTRING(email, LOCATE('@', email) + 1) as domain
FROM Employees;

-- Count by domain
SELECT 
    SUBSTRING(email, LOCATE('@', email) + 1) as domain,
    COUNT(*) as count
FROM Employees
GROUP BY domain
ORDER BY count DESC;

-- Find specific domains
SELECT * FROM Employees
WHERE email LIKE '%@gmail.com';

-- Extract username
SELECT 
    email,
    SUBSTRING(email, 1, LOCATE('@', email) - 1) as username
FROM Employees;

-- Validate email format (basic)
SELECT * FROM Employees
WHERE email REGEXP '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$';

-- SQL Server version
SELECT 
    email,
    SUBSTRING(email, CHARINDEX('@', email) + 1, LEN(email)) as domain
FROM Employees;

-- Update domain for all employees
UPDATE Employees
SET email = REPLACE(email, '@oldcompany.com', '@newcompany.com')
WHERE email LIKE '%@oldcompany.com';
\`\`\``
    },
    {
        id: 'ctsta-sqlfn-007',
        question: 'Write queries using Window Functions (LAG, LEAD, RUNNING TOTAL).',
        answer: `### Window Functions

\`\`\`sql
-- LAG - Previous row value
SELECT 
    order_date,
    amount,
    LAG(amount, 1) OVER (ORDER BY order_date) as prev_amount,
    amount - LAG(amount, 1) OVER (ORDER BY order_date) as difference
FROM Orders;

-- LEAD - Next row value
SELECT 
    employee_id,
    promotion_date,
    LEAD(promotion_date) OVER (PARTITION BY employee_id ORDER BY promotion_date) as next_promotion
FROM Promotions;

-- Running Total
SELECT 
    order_date,
    amount,
    SUM(amount) OVER (ORDER BY order_date) as running_total
FROM Orders;

-- Running total by customer
SELECT 
    customer_id,
    order_date,
    amount,
    SUM(amount) OVER (PARTITION BY customer_id ORDER BY order_date) as customer_running_total
FROM Orders;

-- Running Average
SELECT 
    order_date,
    amount,
    AVG(amount) OVER (ORDER BY order_date ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) as moving_avg_7day
FROM Orders;

-- Percent of total
SELECT 
    product_name,
    sales,
    sales * 100.0 / SUM(sales) OVER () as percent_of_total
FROM ProductSales;

-- First/Last value in group
SELECT 
    department,
    name,
    salary,
    FIRST_VALUE(name) OVER (PARTITION BY department ORDER BY salary DESC) as highest_paid
FROM Employees;
\`\`\``
    },
    {
        id: 'ctsta-sqlfn-008',
        question: 'Write a query to generate monthly sales report with year-over-year comparison.',
        answer: `### Year-over-Year Analysis

\`\`\`sql
-- Monthly sales with YoY comparison
SELECT 
    YEAR(order_date) as year,
    MONTH(order_date) as month,
    SUM(amount) as total_sales
FROM Orders
GROUP BY YEAR(order_date), MONTH(order_date)
ORDER BY year, month;

-- With LAG for YoY comparison
WITH MonthlySales AS (
    SELECT 
        YEAR(order_date) as year,
        MONTH(order_date) as month,
        SUM(amount) as total_sales
    FROM Orders
    GROUP BY YEAR(order_date), MONTH(order_date)
)
SELECT 
    year,
    month,
    total_sales,
    LAG(total_sales, 12) OVER (ORDER BY year, month) as prev_year_sales,
    ROUND((total_sales - LAG(total_sales, 12) OVER (ORDER BY year, month)) / 
          LAG(total_sales, 12) OVER (ORDER BY year, month) * 100, 2) as yoy_growth_pct
FROM MonthlySales;

-- Pivot by Year (MySQL)
SELECT 
    MONTH(order_date) as month,
    SUM(CASE WHEN YEAR(order_date) = 2024 THEN amount ELSE 0 END) as sales_2024,
    SUM(CASE WHEN YEAR(order_date) = 2025 THEN amount ELSE 0 END) as sales_2025
FROM Orders
WHERE YEAR(order_date) IN (2024, 2025)
GROUP BY MONTH(order_date)
ORDER BY month;
\`\`\``
    },
    {
        id: 'ctsta-sqlfn-009',
        question: 'Write a query to convert rows to columns (PIVOT).',
        answer: `### Pivot Queries

\`\`\`sql
-- Sample: Sales by product and month

-- MySQL: Using CASE WHEN
SELECT 
    product_name,
    SUM(CASE WHEN MONTH(sale_date) = 1 THEN amount ELSE 0 END) as Jan,
    SUM(CASE WHEN MONTH(sale_date) = 2 THEN amount ELSE 0 END) as Feb,
    SUM(CASE WHEN MONTH(sale_date) = 3 THEN amount ELSE 0 END) as Mar
FROM Sales
GROUP BY product_name;

-- SQL Server: Using PIVOT
SELECT * FROM (
    SELECT product_name, MONTH(sale_date) as month, amount
    FROM Sales
) AS SourceTable
PIVOT (
    SUM(amount)
    FOR month IN ([1], [2], [3], [4], [5], [6])
) AS PivotTable;

-- Dynamic Pivot (SQL Server)
DECLARE @cols NVARCHAR(MAX), @sql NVARCHAR(MAX);

SELECT @cols = STRING_AGG(QUOTENAME(month_name), ',')
FROM (SELECT DISTINCT DATENAME(MONTH, sale_date) as month_name FROM Sales) m;

SET @sql = 'SELECT product_name, ' + @cols + '
FROM (SELECT product_name, DATENAME(MONTH, sale_date) as month_name, amount FROM Sales) src
PIVOT (SUM(amount) FOR month_name IN (' + @cols + ')) pvt';

EXEC sp_executesql @sql;
\`\`\``
    },
    {
        id: 'ctsta-sqlfn-010',
        question: 'Write a query using Regular Expressions for pattern matching.',
        answer: `### Regular Expression Queries

\`\`\`sql
-- MySQL: REGEXP / RLIKE
-- Find products starting with 'A' or 'B'
SELECT * FROM Products WHERE name REGEXP '^[AB]';

-- Find emails with specific patterns
SELECT * FROM Users WHERE email REGEXP '^[a-zA-Z0-9._%+-]+@gmail\\.com$';

-- Find phone numbers (10 digits)
SELECT * FROM Customers WHERE phone REGEXP '^[0-9]{10}$';

-- Find names with only letters
SELECT * FROM Employees WHERE name REGEXP '^[a-zA-Z ]+$';

-- PostgreSQL: ~ operator
SELECT * FROM Products WHERE name ~ '^[AB]';
SELECT * FROM Users WHERE email ~* 'gmail\\.com$';  -- Case insensitive

-- REGEXP_REPLACE (MySQL 8+)
SELECT REGEXP_REPLACE(phone, '[^0-9]', '') as digits_only FROM Customers;

-- REGEXP_SUBSTR - Extract matching part
SELECT REGEXP_SUBSTR(description, '[0-9]+') as first_number FROM Products;

-- Common patterns
-- Email:    ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$
-- Phone:    ^\\+?[0-9]{10,15}$
-- Zip:      ^[0-9]{5}(-[0-9]{4})?$
-- URL:      ^https?://[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}

-- LIKE alternatives (simpler patterns)
SELECT * FROM Products WHERE name LIKE 'A%';      -- Starts with A
SELECT * FROM Products WHERE name LIKE '%ing';    -- Ends with ing
SELECT * FROM Products WHERE name LIKE '_a%';     -- Second char is a
\`\`\``
    }
];

export default sqlFunctionsQuestions;
