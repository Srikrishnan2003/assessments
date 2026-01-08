// Database Management Systems Questions for BARC CSE Exam
export const dbmsQuestions = [
    // ER MODEL
    {
        id: "db001", topic: "DBMS", subtopic: "ER Model", difficulty: "Easy",
        question: "In ER diagram, rectangle represents:",
        options: ["A) Attribute", "B) Entity", "C) Relationship", "D) Key"], answer: "B",
        explanation: "Rectangle represents entity, ellipse represents attribute, diamond represents relationship."
    },
    {
        id: "db002", topic: "DBMS", subtopic: "ER Model", difficulty: "Easy",
        question: "Primary key is represented in ER diagram by:",
        options: ["A) Dashed ellipse", "B) Underlined attribute", "C) Double ellipse", "D) Rectangle"], answer: "B",
        explanation: "Primary key attribute is underlined in ER diagrams."
    },
    {
        id: "db003", topic: "DBMS", subtopic: "ER Model", difficulty: "Medium",
        question: "Multivalued attribute is shown by:",
        options: ["A) Single ellipse", "B) Double ellipse", "C) Dashed ellipse", "D) Rectangle"], answer: "B",
        explanation: "Double ellipse indicates multivalued attribute (can have multiple values)."
    },
    {
        id: "db004", topic: "DBMS", subtopic: "ER Model", difficulty: "Medium",
        question: "Weak entity depends on:",
        options: ["A) Another weak entity", "B) Strong entity", "C) Relationship", "D) Attribute"], answer: "B",
        explanation: "Weak entity has no primary key of its own, depends on strong (owner) entity."
    },
    {
        id: "db005", topic: "DBMS", subtopic: "ER Model", difficulty: "Medium",
        question: "Cardinality ratio 1:N means:",
        options: ["A) One entity relates to one entity", "B) One entity relates to many entities", "C) Many to many", "D) No relationship"], answer: "B",
        explanation: "1:N means one instance of first entity can relate to many instances of second."
    },
    // RELATIONAL MODEL
    {
        id: "db006", topic: "DBMS", subtopic: "Relational Model", difficulty: "Easy",
        question: "In relational model, a row is called:",
        options: ["A) Attribute", "B) Tuple", "C) Domain", "D) Schema"], answer: "B",
        explanation: "Row = tuple, Column = attribute in relational terminology."
    },
    {
        id: "db007", topic: "DBMS", subtopic: "Relational Model", difficulty: "Easy",
        question: "Number of attributes in a relation is called:",
        options: ["A) Cardinality", "B) Degree", "C) Domain", "D) Size"], answer: "B",
        explanation: "Degree = number of attributes. Cardinality = number of tuples."
    },
    {
        id: "db008", topic: "DBMS", subtopic: "Relational Model", difficulty: "Medium",
        question: "Super key is:",
        options: ["A) Minimal unique identifier", "B) Any set of attributes that uniquely identifies tuples", "C) Foreign key", "D) Candidate key"], answer: "B",
        explanation: "Super key is any set of attributes that uniquely identifies rows. May contain extra attributes."
    },
    {
        id: "db009", topic: "DBMS", subtopic: "Relational Model", difficulty: "Medium",
        question: "Candidate key is:",
        options: ["A) Super key with no extra attributes", "B) Any key", "C) Foreign key", "D) All attributes"], answer: "A",
        explanation: "Candidate key is minimal super key - removing any attribute loses uniqueness."
    },
    // RELATIONAL ALGEBRA
    {
        id: "db010", topic: "DBMS", subtopic: "Relational Algebra", difficulty: "Medium",
        question: "σ (sigma) operation in relational algebra is:",
        options: ["A) Projection", "B) Selection", "C) Join", "D) Union"], answer: "B",
        explanation: "σ (sigma) is selection - filters rows based on condition."
    },
    {
        id: "db011", topic: "DBMS", subtopic: "Relational Algebra", difficulty: "Medium",
        question: "π (pi) operation in relational algebra is:",
        options: ["A) Selection", "B) Projection", "C) Join", "D) Division"], answer: "B",
        explanation: "π (pi) is projection - selects specific columns."
    },
    {
        id: "db012", topic: "DBMS", subtopic: "Relational Algebra", difficulty: "Medium",
        question: "Natural join is based on:",
        options: ["A) All attributes", "B) Common attributes with same name", "C) Primary key only", "D) Foreign key only"], answer: "B",
        explanation: "Natural join matches tuples on common attribute names automatically."
    },
    {
        id: "db013", topic: "DBMS", subtopic: "Relational Algebra", difficulty: "Hard",
        question: "Division operation A ÷ B gives tuples in A associated with:",
        options: ["A) Some tuples in B", "B) All tuples in B", "C) No tuples in B", "D) Random tuples"], answer: "B",
        explanation: "Division finds tuples in A that are related to ALL tuples in B."
    },
    // SQL
    {
        id: "db014", topic: "DBMS", subtopic: "SQL", difficulty: "Easy",
        question: "Which SQL clause is used to filter groups?",
        options: ["A) WHERE", "B) HAVING", "C) GROUP BY", "D) ORDER BY"], answer: "B",
        explanation: "HAVING filters groups after GROUP BY. WHERE filters individual rows."
    },
    {
        id: "db015", topic: "DBMS", subtopic: "SQL", difficulty: "Easy",
        question: "To remove duplicates in SQL query result:",
        options: ["A) UNIQUE", "B) DISTINCT", "C) DIFFERENT", "D) REMOVE"], answer: "B",
        explanation: "SELECT DISTINCT removes duplicate rows from result."
    },
    {
        id: "db016", topic: "DBMS", subtopic: "SQL", difficulty: "Medium",
        question: "Which is NOT an aggregate function?",
        options: ["A) SUM", "B) AVG", "C) COUNT", "D) UPPER"], answer: "D",
        explanation: "UPPER is a string function. SUM, AVG, COUNT are aggregate functions."
    },
    {
        id: "db017", topic: "DBMS", subtopic: "SQL", difficulty: "Medium",
        question: "LEFT OUTER JOIN includes:",
        options: ["A) Only matching rows", "B) All rows from left table, matching from right", "C) All rows from right table", "D) Cartesian product"], answer: "B",
        explanation: "LEFT JOIN includes all rows from left table, NULLs for non-matching right rows."
    },
    {
        id: "db018", topic: "DBMS", subtopic: "SQL", difficulty: "Medium",
        question: "Which keyword is used to return unique values and count them?",
        options: ["A) UNIQUE", "B) DISTINCT with GROUP BY", "C) DIFFERENT", "D) SPECIAL"], answer: "B",
        explanation: "Use COUNT(DISTINCT column) or GROUP BY with COUNT."
    },
    // NORMALIZATION
    {
        id: "db019", topic: "DBMS", subtopic: "Normalization", difficulty: "Easy",
        question: "A relation is in 1NF if:",
        options: ["A) It has no null values", "B) All attributes are atomic", "C) It has a primary key", "D) No transitive dependency"], answer: "B",
        explanation: "1NF requires atomic (indivisible) values in all attributes."
    },
    {
        id: "db020", topic: "DBMS", subtopic: "Normalization", difficulty: "Medium",
        question: "2NF requires:",
        options: ["A) 1NF + no partial dependency", "B) 1NF + no transitive dependency", "C) Only atomic values", "D) BCNF"], answer: "A",
        explanation: "2NF = 1NF + no partial dependency (non-key attributes depend on entire key)."
    },
    {
        id: "db021", topic: "DBMS", subtopic: "Normalization", difficulty: "Medium",
        question: "3NF requires:",
        options: ["A) 2NF + no partial dependency", "B) 2NF + no transitive dependency", "C) Only 1NF", "D) No dependency"], answer: "B",
        explanation: "3NF = 2NF + no transitive dependency (non-key depends only on key)."
    },
    {
        id: "db022", topic: "DBMS", subtopic: "Normalization", difficulty: "Hard",
        question: "BCNF requires:",
        options: ["A) For every FD X→Y, X must be a super key", "B) No partial dependency", "C) 3NF only", "D) No dependencies"], answer: "A",
        explanation: "BCNF: Every determinant must be a candidate key."
    },
    {
        id: "db023", topic: "DBMS", subtopic: "Normalization", difficulty: "Hard",
        question: "Decomposition should be:",
        options: ["A) Lossy", "B) Lossless and dependency preserving", "C) Any decomposition", "D) Random"], answer: "B",
        explanation: "Good decomposition is lossless (can reconstruct) and preserves functional dependencies."
    },
    // TRANSACTIONS
    {
        id: "db024", topic: "DBMS", subtopic: "Transactions", difficulty: "Easy",
        question: "ACID properties include:",
        options: ["A) Atomicity, Consistency, Isolation, Durability", "B) Accuracy, Completeness, Integrity, Data", "C) All, Complete, Instant, Direct", "D) None"], answer: "A",
        explanation: "ACID: Atomicity, Consistency, Isolation, Durability."
    },
    {
        id: "db025", topic: "DBMS", subtopic: "Transactions", difficulty: "Medium",
        question: "Atomicity means:",
        options: ["A) Transaction is small", "B) Transaction is all-or-nothing", "C) Transaction is fast", "D) Transaction is atomic in size"], answer: "B",
        explanation: "Atomicity: Either all operations of transaction complete or none do."
    },
    {
        id: "db026", topic: "DBMS", subtopic: "Transactions", difficulty: "Medium",
        question: "A schedule is serializable if:",
        options: ["A) It is serial", "B) It is equivalent to some serial schedule", "C) It has no transactions", "D) It is parallel"], answer: "B",
        explanation: "Serializable schedule produces same result as some serial execution."
    },
    {
        id: "db027", topic: "DBMS", subtopic: "Transactions", difficulty: "Hard",
        question: "Two-phase locking (2PL) ensures:",
        options: ["A) Deadlock freedom", "B) Serializability", "C) Both", "D) Neither"], answer: "B",
        explanation: "2PL guarantees conflict serializability but may cause deadlocks."
    },
    {
        id: "db028", topic: "DBMS", subtopic: "Transactions", difficulty: "Medium",
        question: "Dirty read occurs when:",
        options: ["A) Transaction reads uncommitted data of another", "B) Data is corrupted", "C) Transaction fails", "D) Normal read"], answer: "A",
        explanation: "Dirty read: Reading data written by uncommitted transaction."
    },
    // INDEXING
    {
        id: "db029", topic: "DBMS", subtopic: "Indexing", difficulty: "Easy",
        question: "B+ tree is commonly used for:",
        options: ["A) In-memory operations", "B) Database indexing", "C) Sorting", "D) Hashing"], answer: "B",
        explanation: "B+ trees are standard for database indexes due to efficient range queries."
    },
    {
        id: "db030", topic: "DBMS", subtopic: "Indexing", difficulty: "Medium",
        question: "In B+ tree, data is stored in:",
        options: ["A) Root only", "B) All nodes", "C) Leaf nodes only", "D) Internal nodes only"], answer: "C",
        explanation: "B+ tree stores all data records in leaf nodes; internal nodes store only keys."
    },
    {
        id: "db031", topic: "DBMS", subtopic: "Indexing", difficulty: "Medium",
        question: "Dense index has:",
        options: ["A) One entry per data record", "B) One entry per data block", "C) No entries", "D) Random entries"], answer: "A",
        explanation: "Dense index has one entry for every data record."
    },
    {
        id: "db032", topic: "DBMS", subtopic: "Indexing", difficulty: "Medium",
        question: "Sparse index has:",
        options: ["A) One entry per record", "B) One entry per block/page", "C) No index", "D) All entries"], answer: "B",
        explanation: "Sparse index has one entry per data block, not per record."
    },
    {
        id: "db033", topic: "DBMS", subtopic: "Indexing", difficulty: "Hard",
        question: "Clustered index determines:",
        options: ["A) Index order only", "B) Physical order of data on disk", "C) Nothing", "D) Query order"], answer: "B",
        explanation: "Clustered index determines physical storage order of data."
    },
    // CONCURRENCY
    {
        id: "db034", topic: "DBMS", subtopic: "Concurrency", difficulty: "Medium",
        question: "Shared lock allows:",
        options: ["A) Only writes", "B) Only reads", "C) Both reads and writes", "D) Neither"], answer: "B",
        explanation: "Shared lock (S-lock) allows reading but not writing."
    },
    {
        id: "db035", topic: "DBMS", subtopic: "Concurrency", difficulty: "Medium",
        question: "Exclusive lock allows:",
        options: ["A) Only reads", "B) Reads and writes by holding transaction", "C) Nothing", "D) Others to read"], answer: "B",
        explanation: "Exclusive lock (X-lock) allows only the holding transaction to read/write."
    },
    {
        id: "db036", topic: "DBMS", subtopic: "Concurrency", difficulty: "Hard",
        question: "Timestamp ordering ensures:",
        options: ["A) Deadlock", "B) Serializability equivalent to timestamp order", "C) Nothing", "D) Parallel execution"], answer: "B",
        explanation: "Timestamp ordering creates schedule equivalent to serial order by timestamps."
    },
    // RECOVERY
    {
        id: "db037", topic: "DBMS", subtopic: "Recovery", difficulty: "Medium",
        question: "Write-Ahead Logging (WAL) requires:",
        options: ["A) Data written before log", "B) Log written before data", "C) No logging", "D) Random order"], answer: "B",
        explanation: "WAL: Log records must be written to disk before data pages."
    },
    {
        id: "db038", topic: "DBMS", subtopic: "Recovery", difficulty: "Medium",
        question: "UNDO recovery is needed for:",
        options: ["A) Committed transactions", "B) Uncommitted transactions", "C) All transactions", "D) No transactions"], answer: "B",
        explanation: "UNDO undoes effects of uncommitted transactions after crash."
    },
    {
        id: "db039", topic: "DBMS", subtopic: "Recovery", difficulty: "Medium",
        question: "REDO recovery is needed for:",
        options: ["A) Uncommitted transactions", "B) Committed transactions whose data not on disk", "C) All", "D) None"], answer: "B",
        explanation: "REDO reapplies committed transactions not reflected on disk."
    },
    {
        id: "db040", topic: "DBMS", subtopic: "Recovery", difficulty: "Hard",
        question: "Checkpoint helps in recovery by:",
        options: ["A) Avoiding all recovery", "B) Reducing amount of log to process", "C) Preventing crashes", "D) Nothing"], answer: "B",
        explanation: "Checkpoints flush dirty pages; recovery starts from last checkpoint."
    },
    // FILE ORGANIZATION
    {
        id: "db041", topic: "DBMS", subtopic: "File Organization", difficulty: "Medium",
        question: "Heap file organization stores records:",
        options: ["A) Sorted order", "B) No particular order, at end", "C) By hash value", "D) Indexed"], answer: "B",
        explanation: "Heap just appends records at end; no ordering maintained."
    },
    {
        id: "db042", topic: "DBMS", subtopic: "File Organization", difficulty: "Medium",
        question: "Hash file organization is best for:",
        options: ["A) Range queries", "B) Exact match queries", "C) All queries", "D) No queries"], answer: "B",
        explanation: "Hashing excels at exact match (point queries), poor for ranges."
    },
    {
        id: "db043", topic: "DBMS", subtopic: "File Organization", difficulty: "Easy",
        question: "Sequential file organization stores records:",
        options: ["A) Randomly", "B) In sorted order by key", "C) By hash", "D) Unordered"], answer: "B",
        explanation: "Sequential file keeps records sorted by some key for efficient range scans."
    },
    // MISC
    {
        id: "db044", topic: "DBMS", subtopic: "General", difficulty: "Easy",
        question: "DDL stands for:",
        options: ["A) Data Definition Language", "B) Data Design Language", "C) Database Definition Language", "D) Data Document Language"], answer: "A",
        explanation: "DDL = Data Definition Language (CREATE, ALTER, DROP)."
    },
    {
        id: "db045", topic: "DBMS", subtopic: "General", difficulty: "Easy",
        question: "DML stands for:",
        options: ["A) Data Manipulation Language", "B) Data Model Language", "C) Database Management Language", "D) Data Move Language"], answer: "A",
        explanation: "DML = Data Manipulation Language (SELECT, INSERT, UPDATE, DELETE)."
    },
    // MORE DBMS QUESTIONS
    {
        id: "db046", topic: "DBMS", subtopic: "ER Model", difficulty: "Hard",
        question: "Generalization in ER model is:",
        options: ["A) Bottom-up approach combining entities", "B) Top-down approach", "C) Creating relationships", "D) Removing entities"], answer: "A",
        explanation: "Generalization: combining lower-level entities into higher-level (bottom-up)."
    },
    {
        id: "db047", topic: "DBMS", subtopic: "ER Model", difficulty: "Hard",
        question: "Specialization in ER model is:",
        options: ["A) Bottom-up approach", "B) Top-down approach dividing entity into sub-entities", "C) Creating relationships", "D) Removing entities"], answer: "B",
        explanation: "Specialization: dividing higher-level entity into sub-entities (top-down)."
    },
    {
        id: "db048", topic: "DBMS", subtopic: "ER Model", difficulty: "Medium",
        question: "Participation constraint 'total' means:",
        options: ["A) Entity may not participate", "B) Every entity must participate in relationship", "C) No participation", "D) Random participation"], answer: "B",
        explanation: "Total participation: every entity must participate. Partial: some may not."
    },
    {
        id: "db049", topic: "DBMS", subtopic: "Relational Model", difficulty: "Medium",
        question: "Foreign key references:",
        options: ["A) Any attribute", "B) Primary key of another table", "C) Its own primary key", "D) Null values"], answer: "B",
        explanation: "Foreign key references primary key (or candidate key) of another relation."
    },
    {
        id: "db050", topic: "DBMS", subtopic: "Relational Model", difficulty: "Medium",
        question: "Referential integrity ensures:",
        options: ["A) Foreign key values exist in referenced table", "B) No nulls", "C) Unique values", "D) Sorted data"], answer: "A",
        explanation: "Referential integrity: FK value must exist as PK in referenced table (or be null)."
    },
    {
        id: "db051", topic: "DBMS", subtopic: "Relational Algebra", difficulty: "Hard",
        question: "Cartesian product of R(n tuples) and S(m tuples) has:",
        options: ["A) n+m tuples", "B) n×m tuples", "C) max(n,m) tuples", "D) min(n,m) tuples"], answer: "B",
        explanation: "Cartesian product: every tuple in R paired with every tuple in S = n×m."
    },
    {
        id: "db052", topic: "DBMS", subtopic: "Relational Algebra", difficulty: "Medium",
        question: "Set difference R - S contains:",
        options: ["A) Tuples in both R and S", "B) Tuples in R but not in S", "C) All tuples", "D) No tuples"], answer: "B",
        explanation: "R - S: tuples present in R but not present in S."
    },
    {
        id: "db053", topic: "DBMS", subtopic: "SQL", difficulty: "Medium",
        question: "INNER JOIN returns:",
        options: ["A) All rows from both tables", "B) Only matching rows from both tables", "C) All from left", "D) All from right"], answer: "B",
        explanation: "INNER JOIN returns only rows where join condition matches in both tables."
    },
    {
        id: "db054", topic: "DBMS", subtopic: "SQL", difficulty: "Hard",
        question: "Correlated subquery:",
        options: ["A) Executes once", "B) Executes once per outer query row", "C) Never executes", "D) Same as regular query"], answer: "B",
        explanation: "Correlated subquery references outer query; executes for each outer row."
    },
    {
        id: "db055", topic: "DBMS", subtopic: "SQL", difficulty: "Medium",
        question: "VIEW in SQL is:",
        options: ["A) Physical table", "B) Virtual table defined by query", "C) Index", "D) Constraint"], answer: "B",
        explanation: "View is virtual table defined by SELECT query; no physical storage."
    },
    {
        id: "db056", topic: "DBMS", subtopic: "SQL", difficulty: "Medium",
        question: "TRUNCATE vs DELETE:",
        options: ["A) Same operation", "B) TRUNCATE removes all rows faster, can't rollback", "C) DELETE is faster", "D) TRUNCATE deletes table definition"], answer: "B",
        explanation: "TRUNCATE: DDL, faster, no rollback. DELETE: DML, row-by-row, can rollback."
    },
    {
        id: "db057", topic: "DBMS", subtopic: "Normalization", difficulty: "Hard",
        question: "Lossless join decomposition ensures:",
        options: ["A) Some data lost", "B) Original table can be reconstructed by join", "C) No joins needed", "D) Faster queries"], answer: "B",
        explanation: "Lossless: natural join of decomposed tables equals original relation."
    },
    {
        id: "db058", topic: "DBMS", subtopic: "Normalization", difficulty: "Hard",
        question: "4NF deals with:",
        options: ["A) Functional dependencies", "B) Multivalued dependencies", "C) Join dependencies", "D) No dependencies"], answer: "B",
        explanation: "4NF removes non-trivial multivalued dependencies."
    },
    {
        id: "db059", topic: "DBMS", subtopic: "Normalization", difficulty: "Hard",
        question: "Closure of attribute set X under FD set F finds:",
        options: ["A) All FDs", "B) All attributes determined by X", "C) Primary key", "D) Nothing"], answer: "B",
        explanation: "Closure X+: all attributes functionally determined by X using F."
    },
    {
        id: "db060", topic: "DBMS", subtopic: "Normalization", difficulty: "Medium",
        question: "Canonical cover removes:",
        options: ["A) All FDs", "B) Redundant FDs and extraneous attributes", "C) All attributes", "D) Nothing"], answer: "B",
        explanation: "Canonical cover is minimal equivalent FD set with no redundancy."
    },
    {
        id: "db061", topic: "DBMS", subtopic: "Transactions", difficulty: "Hard",
        question: "Strict 2PL additionally requires:",
        options: ["A) Releasing all locks before commit", "B) Holding exclusive locks until commit", "C) No locks", "D) Early release"], answer: "B",
        explanation: "Strict 2PL: hold all X-locks until transaction commits/aborts (prevents cascading rollback)."
    },
    {
        id: "db062", topic: "DBMS", subtopic: "Transactions", difficulty: "Medium",
        question: "Phantom read occurs when:",
        options: ["A) Same row changes", "B) New rows appear in repeated query", "C) Row deleted", "D) Normal read"], answer: "B",
        explanation: "Phantom: rows added by another transaction appear in repeated query."
    },
    {
        id: "db063", topic: "DBMS", subtopic: "Transactions", difficulty: "Medium",
        question: "Non-repeatable read is:",
        options: ["A) Same query, different results due to other's update", "B) Normal read", "C) Phantom", "D) Dirty read"], answer: "A",
        explanation: "Non-repeatable: reading same row twice gives different values (another committed update)."
    },
    {
        id: "db064", topic: "DBMS", subtopic: "Transactions", difficulty: "Hard",
        question: "Isolation level SERIALIZABLE prevents:",
        options: ["A) Only dirty reads", "B) Dirty, non-repeatable, and phantom reads", "C) Only phantom", "D) Nothing"], answer: "B",
        explanation: "SERIALIZABLE is highest isolation, preventing all anomalies."
    },
    {
        id: "db065", topic: "DBMS", subtopic: "Transactions", difficulty: "Medium",
        question: "READ COMMITTED isolation prevents:",
        options: ["A) Only dirty reads", "B) All anomalies", "C) Phantom reads", "D) Nothing"], answer: "A",
        explanation: "READ COMMITTED: prevents only dirty reads; allows non-repeatable and phantom."
    },
    {
        id: "db066", topic: "DBMS", subtopic: "Indexing", difficulty: "Hard",
        question: "B+ tree height for n records with order p is approximately:",
        options: ["A) n", "B) log_p(n)", "C) n/p", "D) p"], answer: "B",
        explanation: "B+ tree is balanced, height ≈ log_p(n) for order p."
    },
    {
        id: "db067", topic: "DBMS", subtopic: "Indexing", difficulty: "Medium",
        question: "Secondary index:",
        options: ["A) Determines physical order", "B) Index on non-clustering field", "C) Primary index", "D) No index"], answer: "B",
        explanation: "Secondary index: on non-ordering field; doesn't affect physical storage order."
    },
    {
        id: "db068", topic: "DBMS", subtopic: "Indexing", difficulty: "Hard",
        question: "Multi-level index reduces:",
        options: ["A) Index entries", "B) Disk accesses by having index on index", "C) Data size", "D) Nothing"], answer: "B",
        explanation: "Multi-level: index on index reduces I/O for large indexes."
    },
    {
        id: "db069", topic: "DBMS", subtopic: "Indexing", difficulty: "Medium",
        question: "Hash index is best for:",
        options: ["A) Range queries", "B) Equality queries (=)", "C) LIKE queries", "D) ORDER BY"], answer: "B",
        explanation: "Hash index: O(1) for equality lookups; useless for ranges."
    },
    {
        id: "db070", topic: "DBMS", subtopic: "Concurrency", difficulty: "Hard",
        question: "Deadlock detection uses:",
        options: ["A) Wait-for graph", "B) Random checks", "C) No detection", "D) Timestamp only"], answer: "A",
        explanation: "Wait-for graph: cycle indicates deadlock among transactions."
    },
    {
        id: "db071", topic: "DBMS", subtopic: "Concurrency", difficulty: "Hard",
        question: "Wound-wait deadlock prevention:",
        options: ["A) Older waits for younger", "B) Older wounds (aborts) younger; younger waits for older", "C) Random abort", "D) No waiting"], answer: "B",
        explanation: "Wound-wait: older transaction aborts younger if needed; younger waits."
    },
    {
        id: "db072", topic: "DBMS", subtopic: "Concurrency", difficulty: "Hard",
        question: "Wait-die deadlock prevention:",
        options: ["A) Older dies", "B) Older waits; younger requesting from older dies (aborts)", "C) Random", "D) No abort"], answer: "B",
        explanation: "Wait-die: older waits for younger; younger requesting older dies."
    },
    {
        id: "db073", topic: "DBMS", subtopic: "Concurrency", difficulty: "Medium",
        question: "Optimistic concurrency control validates:",
        options: ["A) Before execution", "B) At commit time", "C) Never", "D) During execution"], answer: "B",
        explanation: "Optimistic: execute freely, validate at commit, abort if conflict."
    },
    {
        id: "db074", topic: "DBMS", subtopic: "Recovery", difficulty: "Hard",
        question: "ARIES recovery uses:",
        options: ["A) Only redo", "B) Redo then undo with LSN", "C) Only undo", "D) No recovery"], answer: "B",
        explanation: "ARIES: Analysis, Redo history, Undo losers. Uses Log Sequence Numbers."
    },
    {
        id: "db075", topic: "DBMS", subtopic: "Recovery", difficulty: "Medium",
        question: "Shadow paging recovery works by:",
        options: ["A) Using logs", "B) Maintaining shadow copy of page table", "C) No recovery", "D) Checkpoints only"], answer: "B",
        explanation: "Shadow paging: maintains current and shadow page tables; atomic page table switch."
    },
    {
        id: "db076", topic: "DBMS", subtopic: "General", difficulty: "Easy",
        question: "DCL includes:",
        options: ["A) CREATE, DROP", "B) GRANT, REVOKE", "C) SELECT, INSERT", "D) COMMIT, ROLLBACK"], answer: "B",
        explanation: "DCL = Data Control Language: GRANT, REVOKE for permissions."
    },
    {
        id: "db077", topic: "DBMS", subtopic: "General", difficulty: "Easy",
        question: "TCL includes:",
        options: ["A) CREATE, ALTER", "B) COMMIT, ROLLBACK, SAVEPOINT", "C) SELECT, UPDATE", "D) GRANT, REVOKE"], answer: "B",
        explanation: "TCL = Transaction Control Language: COMMIT, ROLLBACK, SAVEPOINT."
    },
    {
        id: "db078", topic: "DBMS", subtopic: "General", difficulty: "Medium",
        question: "Three-schema architecture has:",
        options: ["A) Internal, Conceptual, External", "B) Only one schema", "C) Two schemas", "D) No schema"], answer: "A",
        explanation: "ANSI/SPARC: External (user views), Conceptual (logical), Internal (physical)."
    },
    {
        id: "db079", topic: "DBMS", subtopic: "General", difficulty: "Medium",
        question: "Data independence means:",
        options: ["A) Changing one level doesn't affect others", "B) No data", "C) Data on disk only", "D) No independence"], answer: "A",
        explanation: "Logical/physical data independence: insulates upper levels from lower changes."
    },
    {
        id: "db080", topic: "DBMS", subtopic: "General", difficulty: "Medium",
        question: "Query optimizer chooses:",
        options: ["A) Any plan", "B) Efficient execution plan", "C) User-specified plan", "D) Random plan"], answer: "B",
        explanation: "Query optimizer evaluates and selects efficient execution plan."
    },
    {
        id: "db081", topic: "DBMS", subtopic: "Transactions", difficulty: "Medium",
        question: "Savepoint allows:",
        options: ["A) Full commit", "B) Partial rollback to marked point", "C) No rollback", "D) Delete all"], answer: "B",
        explanation: "SAVEPOINT marks point; can ROLLBACK TO SAVEPOINT for partial undo."
    },
    {
        id: "db082", topic: "DBMS", subtopic: "SQL", difficulty: "Medium",
        question: "UNION vs UNION ALL:",
        options: ["A) Same", "B) UNION removes duplicates, UNION ALL keeps all", "C) UNION ALL removes duplicates", "D) Neither removes duplicates"], answer: "B",
        explanation: "UNION removes duplicate rows; UNION ALL keeps all including duplicates."
    },
    {
        id: "db083", topic: "DBMS", subtopic: "SQL", difficulty: "Hard",
        question: "WITH clause (CTE) is used for:",
        options: ["A) Creating tables", "B) Defining temporary result sets in query", "C) Dropping tables", "D) Indexing"], answer: "B",
        explanation: "CTE (Common Table Expression) defines named temporary result for main query."
    },
    {
        id: "db084", topic: "DBMS", subtopic: "Normalization", difficulty: "Medium",
        question: "Armstrong's axioms include:",
        options: ["A) Reflexivity, Augmentation, Transitivity", "B) Only transitivity", "C) No axioms", "D) Random rules"], answer: "A",
        explanation: "Armstrong's axioms: Reflexivity, Augmentation, Transitivity (sound and complete)."
    },
    {
        id: "db085", topic: "DBMS", subtopic: "ER Model", difficulty: "Medium",
        question: "Ternary relationship involves:",
        options: ["A) Two entities", "B) Three entities", "C) One entity", "D) No entities"], answer: "B",
        explanation: "Ternary relationship: relationship among three entities."
    },
    {
        id: "db086", topic: "DBMS", subtopic: "SQL", difficulty: "Medium",
        question: "EXISTS clause checks:",
        options: ["A) If subquery returns any rows", "B) Specific value", "C) NULL only", "D) Nothing"], answer: "A",
        explanation: "EXISTS returns true if subquery returns one or more rows."
    },
    {
        id: "db087", topic: "DBMS", subtopic: "SQL", difficulty: "Medium",
        question: "COALESCE function returns:",
        options: ["A) NULL", "B) First non-null argument", "C) Last argument", "D) All arguments"], answer: "B",
        explanation: "COALESCE returns first non-null value from argument list."
    },
    {
        id: "db088", topic: "DBMS", subtopic: "Indexing", difficulty: "Medium",
        question: "Covering index contains:",
        options: ["A) Only key", "B) All columns needed by query", "C) No columns", "D) Random columns"], answer: "B",
        explanation: "Covering index includes all columns query needs (index-only scan)."
    },
    {
        id: "db089", topic: "DBMS", subtopic: "SQL", difficulty: "Easy",
        question: "NULL comparisons use:",
        options: ["A) = NULL", "B) IS NULL or IS NOT NULL", "C) == NULL", "D) EQUALS NULL"], answer: "B",
        explanation: "NULL compared with IS NULL/IS NOT NULL; = returns unknown."
    },
    {
        id: "db090", topic: "DBMS", subtopic: "General", difficulty: "Medium",
        question: "Stored procedure is:",
        options: ["A) Temporary table", "B) Precompiled SQL code stored in database", "C) Index", "D) Constraint"], answer: "B",
        explanation: "Stored procedure: named SQL code stored in DB, can be called repeatedly."
    }
];
export default dbmsQuestions;
