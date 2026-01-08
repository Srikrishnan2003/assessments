// TCS Prime Interview - Java Questions

export const javaQuestions = [
    {
        id: 'tcs107',
        question: 'Explain OOP concepts in Java',
        answer: `• **Encapsulation**: Bundling data and methods, using private fields with getters/setters
• **Inheritance**: \`class Child extends Parent\` - code reuse
• **Polymorphism**: Method overloading (compile-time) and overriding (runtime)
• **Abstraction**: Abstract classes and interfaces hide implementation details`
    },
    {
        id: 'tcs108',
        question: 'What is the difference between abstract class and interface?',
        answer: `**Abstract Class**:
• Can have abstract and concrete methods
• Can have constructors
• Can have instance variables
• Single inheritance only

**Interface**:
• All methods are abstract (before Java 8)
• No constructors
• Only constants
• Multiple inheritance supported`
    },
    {
        id: 'tcs109',
        question: 'Explain exception handling in Java',
        answer: `Try-catch-finally for handling errors:

\`\`\`java
try {
    int result = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Cannot divide by zero");
} finally {
    System.out.println("Always executes");
}
\`\`\`

• **Checked exceptions**: Must be handled (IOException)
• **Unchecked exceptions**: Runtime exceptions (NullPointerException)`
    },
    {
        id: 'tcs110',
        question: 'What are collections in Java?',
        answer: `Framework for storing and manipulating groups of objects:
• **List**: ArrayList, LinkedList - ordered, allows duplicates
• **Set**: HashSet, TreeSet - no duplicates
• **Map**: HashMap, TreeMap - key-value pairs
• **Queue**: LinkedList, PriorityQueue - FIFO`
    },
    {
        id: 'tcs111',
        question: 'Explain String, StringBuilder, and StringBuffer',
        answer: `• **String**: Immutable, thread-safe, slow for concatenation
• **StringBuilder**: Mutable, not thread-safe, fast
• **StringBuffer**: Mutable, thread-safe, slower than StringBuilder

Use **StringBuilder** for single-threaded string manipulation.`
    },
];

export default javaQuestions;
