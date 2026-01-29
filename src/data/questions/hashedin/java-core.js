
export const javaCoreQuestions = [
    {
        id: 'hi-java-001',
        question: 'OOPs Concepts with Real World Examples.',
        answer: `### Object-Oriented Programming (OOPs)
**Exact Answer:**
"OOPs is a programming paradigm based on 'Objects' containing data and code. There are 4 pillars:

1.  **Encapsulation:** Wrapping data and methods together to protect them.
    *   *Real World:* A **Capsule**. You can see the medicine inside, but you can't touch it directly. In code, we use \`private\` variables and \`public\` getters/setters.
2.  **Abstraction:** Hiding complex implementation details and showing only functionality.
    *   *Real World:* A **Car Dashboard**. You just press the 'Start' button. You don't need to know how the engine combustion works. In code, we use \`Interfaces\` and \`Abstract Classes\`.
3.  **Inheritance:** One class acquiring properties of another to reuse code.
    *   *Real World:* A **Child inheriting genes** from parents. In code, a \`Dog\` class extends \`Animal\` class to get \`eat()\` method.
4.  **Polymorphism:** One interface, many forms.
    *   *Real World:* A **Man**. He is a father at home, an employee at office, and a customer at a shop."`
    },
    {
        id: 'hi-java-002',
        question: 'Difference between Interface and Abstract Class.',
        answer: `**Exact Answer:**
"The main difference is in flexible design vs strict hierarchy.

1.  **Multiple Inheritance:** A class can implement **multiple** Interfaces, but can extend only **one** Abstract Class.
2.  **State:** Interfaces cannot have instance variables (state); they only have \`static final\` constants. Abstract classes can have normal variables to maintain state.
3.  **Usage:** Use an **Interface** when you want to define a 'Role' (e.g., \`Runnable\`, \`Serializable\`). Use an **Abstract Class** when you want to share common code among closely related classes (e.g., \`Animal\` class sharing \`sleep()\` logic for \`Dog\` and \`Cat\`)."`
    },
    {
        id: 'hi-java-003',
        question: 'Explain String Constant Pool (SCP).',
        answer: `**Exact Answer:**
"The String Constant Pool is a special area in the Java Heap memory.
Because Strings are immutable and used frequently, Java saves memory by storing only **one copy** of each literal.

*   If I say \`String s1 = "Hello"\` and \`String s2 = "Hello"\`, both s1 and s2 point to the **same** memory address in the SCP.
*   However, if I say \`String s3 = new String("Hello")\`, Java forces the creation of a **new** object in the Heap, skipping the pool reuse."`
    },
    {
        id: 'hi-java-004',
        question: 'Why is Java platform independent?',
        answer: `**Exact Answer:**
"Java is platform independent because of the **Bytecode** and the **JVM**.
When we compile \`.java\` code, it doesn't become machine code (0s and 1s) for a specific CPU. It becomes **Bytecode** (\`.class\` file).
This Bytecode is universal.
The **Java Virtual Machine (JVM)**, which is installed on every OS (Windows, Mac, Linux), acts as an interpreter. It reads the Bytecode and translates it into the native machine code of that specific computer.
So, 'Write Once, Run Anywhere' works because the JVM takes care of the platform differences."`
    },
    {
        id: 'hi-java-005',
        question: 'Final vs Finally vs Finalize.',
        answer: `**Exact Answer:**
"They sound similar but are completely different concepts:

1.  **final (Keyword):** It's a restrictor.
    *   On a **Variable**: Makes it a constant.
    *   On a **Method**: Prevents overriding.
    *   On a **Class**: Prevents inheritance.
2.  **finally (Block):** It's used with try-catch blocks. The code inside \`finally\` **always** executes, whether an exception occurs or not. We use it for cleanup, like closing Database connections.
3.  **finalize (Method):** It's a method called by the Garbage Collector just before an object is destroyed. (Note: It is deprecated in modern Java)." `
    },
    {
        id: 'hi-java-006',
        question: 'Exceptions Hierarchy in Java.',
        answer: `**Exact Answer:**
"At the top is the **Throwable** class. It has two main branches:

1.  **Error:** These are serious system problems we can't recover from, like \`OutOfMemoryError\` or \`StackOverflowError\`.
2.  **Exception:** These are problems our code can handle.
    *   **Checked Exceptions:** Detected at compile-time (e.g., \`IOException\`, \`SQLException\`). Using try-catch is mandatory.
    *   **Unchecked Exceptions:** Runtime errors due to bad logic (e.g., \`NullPointerException\`, \`ArithmeticException\`). Handling is optional."`
    },
    {
        id: 'hi-java-007',
        question: 'What is the Collections Framework?',
        answer: `**Exact Answer:**
"It is a unified architecture to store and manipulate groups of objects. It has 3 main interfaces (extending Collection):

1.  **List:** Ordered collection that allows duplicates. implementation: \`ArrayList\` (fast for reading) and \`LinkedList\` (fast for insertion).
2.  **Set:** Unordered collection that allows **unique** elements only. implementation: \`HashSet\` (hashing) and \`TreeSet\` (sorted).
3.  **Queue:** Orders elements for processing (FIFO). implementation: \`PriorityQueue\`.

***Note:** \`Map\` (Key-Value pairs) is part of the framework but does NOT extend the Collection interface."`
    },
    {
        id: 'hi-java-008',
        question: 'HashMap vs Hashtable vs ConcurrentHashMap.',
        answer: `**Exact Answer:**
"All three store Key-Value pairs, but differ in threading:

1.  **HashMap:** Not thread-safe. Faster. Allows one null key.
2.  **Hashtable:** Thread-safe (Legacy). It locks the **entire** table for every operation, making it very slow.
3.  **ConcurrentHashMap:** Thread-safe (Modern). It divides the map into 'segments' and locks only the specific segment being accessed. It is much faster than Hashtable for multi-threaded apps."`
    },
    {
        id: 'hi-java-009',
        question: 'Comparable vs Comparator.',
        answer: `**Exact Answer:**
"They are used for sorting objects.

1.  **Comparable:** It defines the **'Natural Ordering'** of an object. You implement it *inside* the class itself by overriding \`compareTo()\`. Example: A \`Student\` class that always sorts by ID.
2.  **Comparator:** It defines **'Custom Ordering'**. You create a *separate* class (or lambda) used only when needed. Example: Sometimes I want to sort Students by Name, effectively separate from their natural ID sorting."`
    },
    {
        id: 'hi-java-010',
        question: 'What is Java 8 Stream API?',
        answer: `**Exact Answer:**
"Streams allow us to process collections of objects functionally, like SQL queries.
It has two types of operations:
1.  **Intermediate:** These are lazy. They don't run until needed. Examples: \`filter()\`, \`map()\`, \`sorted()\`.
2.  **Terminal:** These trigger the processing and return a result. Examples: \`collect()\`, \`forEach()\`, \`count()\`.

For example, to find all names starting with 'A':
\`list.stream().filter(s -> s.startsWith("A")).collect(Collectors.toList());\`"`
    },
    {
        id: 'hi-java-011',
        question: 'Explain Multithreading and Lifecycle.',
        answer: `**Exact Answer:**
"Multithreading is executing multiple threads simultaneously to maximize CPU usage.
A thread goes through 5 states:
1.  **New:** Created but not started.
2.  **Runnable:** Ready to run, waiting for CPU time.
3.  **Running:** Currently executing instructions.
4.  **Blocked/Waiting:** Paused, waiting for I/O or a lock.
5.  **Terminated:** Finished execution."`
    },
    {
        id: 'hi-java-012',
        question: 'What is the volatile keyword?',
        answer: `**Exact Answer:**
"In multi-threading, threads often cache variables in the CPU cache for speed.
The **volatile** keyword tells the JVM: 'Do not cache this variable. Always read/write it directly from the main RAM.'
This guarantees visibility. If Thread A changes a volatile variable, Thread B sees the change immediately. It prevents data inconsistency issues."`
    },
    {
        id: 'hi-java-013',
        question: 'Singleton Pattern implementation.',
        answer: `**Exact Answer:**
"A Singleton ensures a class has only **one instance** and provides a global access point to it.
To implement it:
1.  Make the constructor **private** (so no one can say \`new Singleton()\`).
2.  Create a **private static** variable of the class itself.
3.  Create a **public static** method \`getInstance()\` that returns the variable, creating it only if it doesn't exist (Lazy Initialization)." `
    },
    {
        id: 'hi-java-014',
        question: 'Deep Copy vs Shallow Copy.',
        answer: `**Exact Answer:**
"It's about how we clone objects.
1.  **Shallow Copy:** Copies only the fields. If a field is a reference to another object (like an array), it copies the memory address. Changing the copy affects the original.
2.  **Deep Copy:** Creates a brand new object for every field recursively. Changing the copy does **not** affect the original. It is safer but slower."`
    },
    {
        id: 'hi-java-015',
        question: 'Wrapper Classes and Autoboxing.',
        answer: `**Exact Answer:**
"Java is not 100% object-oriented because of primitives (int, float).
**Wrapper Classes** (Integer, Float) wrap these primitives into Objects so they can be used in Collections (like ArrayList).
*   **Autoboxing:** Java automatically converts primitive to wrapper. \`Integer a = 5\` (int 5 becomes Integer object).
*   **Unboxing:** Wrapper to primitive. \`int b = integersList.get(0)\`."`
    }
];
