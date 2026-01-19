// TCS Prime Interview - Java Questions

export const javaQuestions = [
    {
        id: 'tcs107',
        question: 'Explain OOP concepts in Java',
        answer: `### Simple Explanation
Object-Oriented Programming (OOP) is a way of organizing code around "objects" that contain both data and behavior. Java uses four main pillars: Encapsulation, Inheritance, Polymorphism, and Abstraction.

### Real-World Analogy
Think of a **Car** as an object:
- **Encapsulation**: The engine is hidden under the hood; you interact through steering wheel and pedals (public interface)
- **Inheritance**: A SportsCar IS-A Car, inherits all car features plus has turbo
- **Polymorphism**: "Start" button works differently in electric vs petrol car, same action different behavior
- **Abstraction**: You know HOW to drive, not HOW the engine works internally

### Technical Details
| Concept | Purpose | Example |
|---------|---------|---------|
| **Encapsulation** | Hide internal details, expose through methods | private fields + public getters/setters |
| **Inheritance** | Reuse code, establish IS-A relationships | Child extends Parent |
| **Polymorphism** | Same method name, different behavior | Method overriding/overloading |
| **Abstraction** | Define contracts, hide implementation | Abstract classes, Interfaces |

### Code Example
\`\`\`java
// ENCAPSULATION - Hide data, expose through methods
class BankAccount {
    private double balance;  // Hidden from outside
    
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;  // Controlled access
        }
    }
    
    public double getBalance() {
        return balance;
    }
}

// INHERITANCE - Reuse and extend functionality
class Animal {
    protected String name;
    
    public void eat() {
        System.out.println(name + " is eating");
    }
}

class Dog extends Animal {  // Dog IS-A Animal
    public void bark() {
        System.out.println(name + " is barking");
    }
    
    @Override
    public void eat() {
        System.out.println(name + " is eating dog food");  // Override parent
    }
}

// POLYMORPHISM - Same method, different behavior
class Shape {
    public double area() { return 0; }
}

class Circle extends Shape {
    private double radius;
    
    @Override
    public double area() {
        return Math.PI * radius * radius;  // Circle's implementation
    }
}

class Rectangle extends Shape {
    private double width, height;
    
    @Override
    public double area() {
        return width * height;  // Rectangle's implementation
    }
}

// Using polymorphism
Shape[] shapes = { new Circle(5), new Rectangle(4, 3) };
for (Shape s : shapes) {
    System.out.println(s.area());  // Calls correct implementation
}

// ABSTRACTION - Define what, not how
abstract class Vehicle {
    abstract void start();  // Must be implemented by subclasses
    
    public void stop() {
        System.out.println("Vehicle stopped");
    }
}

class Car extends Vehicle {
    @Override
    void start() {
        System.out.println("Car engine starting");
    }
}
\`\`\`

### Why It Matters
OOP helps organize large codebases, promotes code reuse, makes maintenance easier, and models real-world entities naturally. Every Java interview will ask about these concepts.`
    },
    {
        id: 'tcs108',
        question: 'What is the difference between abstract class and interface?',
        answer: `### Simple Explanation
Both define contracts for subclasses, but:
- **Abstract class**: A partial blueprint with some implementation
- **Interface**: A pure contract with no implementation (before Java 8)

### Real-World Analogy
- **Abstract class**: A house blueprint that's 70% complete - some rooms are pre-designed, others you must design yourself
- **Interface**: A checklist of requirements - "must have kitchen, bathroom, bedroom" - but no design provided

### Technical Details
| Feature | Abstract Class | Interface |
|---------|----------------|-----------|
| **Methods** | Abstract + concrete | Abstract only (default methods in Java 8+) |
| **Variables** | Any type | Only public static final (constants) |
| **Constructor** | Can have | Cannot have |
| **Inheritance** | Single class | Multiple interfaces |
| **Access Modifiers** | Any | Only public |
| **Use When** | Related classes share code | Unrelated classes share behavior |

### Code Example
\`\`\`java
// ABSTRACT CLASS - Partial implementation
abstract class Employee {
    protected String name;
    protected double baseSalary;
    
    // Constructor allowed
    public Employee(String name, double baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    
    // Concrete method - shared by all employees
    public void displayInfo() {
        System.out.println("Employee: " + name);
    }
    
    // Abstract method - each employee type calculates differently
    public abstract double calculateSalary();
}

class Developer extends Employee {
    private double bonus;
    
    public Developer(String name, double salary, double bonus) {
        super(name, salary);
        this.bonus = bonus;
    }
    
    @Override
    public double calculateSalary() {
        return baseSalary + bonus;  // Specific implementation
    }
}


// INTERFACE - Pure contract
interface Payable {
    double calculatePayment();  // Abstract by default
}

interface Taxable {
    double calculateTax();
}

// Class implementing multiple interfaces
class Contractor implements Payable, Taxable {
    private double hourlyRate;
    private int hoursWorked;
    
    @Override
    public double calculatePayment() {
        return hourlyRate * hoursWorked;
    }
    
    @Override
    public double calculateTax() {
        return calculatePayment() * 0.3;
    }
}


// JAVA 8+ Interface Features
interface Printable {
    void print();
    
    // Default method - interfaces can have implementation now
    default void printTwice() {
        print();
        print();
    }
    
    // Static method
    static void showInfo() {
        System.out.println("Printable interface");
    }
}


// When to use which?
// Abstract class: "Is-A" relationship with shared code
// Interface: "Can-Do" capability for unrelated classes

// Example: Bird IS-A Animal (extends), but also CAN Fly (implements Flyable)
abstract class Animal {
    abstract void eat();
}

interface Flyable {
    void fly();
}

class Bird extends Animal implements Flyable {
    @Override
    void eat() { System.out.println("Bird eating"); }
    
    @Override
    public void fly() { System.out.println("Bird flying"); }
}
\`\`\`

### Why It Matters
Choosing between abstract class and interface affects your design's flexibility. Use interfaces for loose coupling, abstract classes when sharing common implementation.`
    },
    {
        id: 'tcs109',
        question: 'Explain exception handling in Java',
        answer: `### Simple Explanation
Exception handling is a way to manage errors gracefully without crashing your program. When something goes wrong, you "catch" the error and decide what to do about it.

### Real-World Analogy
Like a safety net for trapeze artists:
- **Try block**: The risky performance
- **Catch block**: The safety net that catches falls
- **Finally block**: The cleanup crew that always works, fall or not
- **Throw**: Intentionally jumping into the net

### Technical Details
| Exception Type | Description | Must Handle? |
|----------------|-------------|--------------|
| **Checked** | Compile-time (IOException) | Yes - try-catch or throws |
| **Unchecked** | Runtime (NullPointerException) | No - but should handle |
| **Error** | Serious problems (OutOfMemoryError) | No - usually unrecoverable |

### Code Example
\`\`\`java
// Basic try-catch-finally
public void readFile(String path) {
    FileReader reader = null;
    try {
        reader = new FileReader(path);  // Risky operation
        // Process file...
        
    } catch (FileNotFoundException e) {
        // Handle specific exception
        System.out.println("File not found: " + e.getMessage());
        
    } catch (IOException e) {
        // Handle other IO exceptions
        System.out.println("IO error: " + e.getMessage());
        
    } finally {
        // ALWAYS runs - for cleanup
        if (reader != null) {
            try {
                reader.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}

// Modern try-with-resources (Java 7+) - automatic cleanup
public void readFileBetter(String path) {
    try (FileReader reader = new FileReader(path);
         BufferedReader br = new BufferedReader(reader)) {
        
        String line;
        while ((line = br.readLine()) != null) {
            System.out.println(line);
        }
        
    } catch (FileNotFoundException e) {
        System.out.println("File not found!");
    } catch (IOException e) {
        System.out.println("Error reading file!");
    }
    // Resources automatically closed!
}


// Throwing exceptions
public void validateAge(int age) {
    if (age < 0) {
        throw new IllegalArgumentException("Age cannot be negative");
    }
    if (age < 18) {
        throw new RuntimeException("Must be 18 or older");  // Unchecked
    }
}


// Custom exceptions
class InsufficientBalanceException extends Exception {
    public InsufficientBalanceException(String message) {
        super(message);
    }
}

class BankAccount {
    private double balance;
    
    public void withdraw(double amount) throws InsufficientBalanceException {
        if (amount > balance) {
            throw new InsufficientBalanceException(
                "Cannot withdraw " + amount + ". Balance: " + balance
            );
        }
        balance -= amount;
    }
}

// Using the method
try {
    account.withdraw(1000);
} catch (InsufficientBalanceException e) {
    System.out.println(e.getMessage());
    // Handle gracefully - maybe show user a message
}


// Multiple exceptions in one catch (Java 7+)
try {
    // risky code
} catch (IOException | SQLException e) {
    System.out.println("IO or SQL error occurred");
}
\`\`\`

### Why It Matters
Proper exception handling prevents programs from crashing unexpectedly, provides meaningful error messages to users, and helps debug issues. Never swallow exceptions silently!`
    },
    {
        id: 'tcs110',
        question: 'What are collections in Java?',
        answer: `### Simple Explanation
Collections are pre-built data structures in Java for storing and manipulating groups of objects. Instead of creating arrays with fixed sizes, collections grow dynamically and offer powerful methods.

### Real-World Analogy
| Collection | Real-World Analogy |
|------------|-------------------|
| **ArrayList** | Shopping list - ordered, can add items |
| **HashSet** | Bag of unique marbles - no duplicates |
| **HashMap** | Phone book - name (key) → number (value) |
| **Queue** | Ticket counter line - first come, first serve |
| **Stack** | Stack of plates - last in, first out |

### Technical Details
| Interface | Implementation | Characteristics |
|-----------|----------------|-----------------|
| **List** | ArrayList, LinkedList | Ordered, allows duplicates |
| **Set** | HashSet, TreeSet | No duplicates |
| **Map** | HashMap, TreeMap | Key-value pairs |
| **Queue** | LinkedList, PriorityQueue | FIFO ordering |

### Code Example
\`\`\`java
import java.util.*;

public class CollectionsDemo {
    public static void main(String[] args) {
        
        // LIST - Ordered, allows duplicates
        List<String> names = new ArrayList<>();
        names.add("Alice");
        names.add("Bob");
        names.add("Alice");  // Duplicate allowed
        System.out.println(names);  // [Alice, Bob, Alice]
        System.out.println(names.get(0));  // Alice (by index)
        
        
        // SET - No duplicates
        Set<String> uniqueNames = new HashSet<>();
        uniqueNames.add("Alice");
        uniqueNames.add("Bob");
        uniqueNames.add("Alice");  // Ignored - duplicate
        System.out.println(uniqueNames);  // [Alice, Bob]
        System.out.println(uniqueNames.contains("Alice"));  // true
        
        // TreeSet - Sorted set
        Set<Integer> sortedNumbers = new TreeSet<>();
        sortedNumbers.add(5);
        sortedNumbers.add(1);
        sortedNumbers.add(3);
        System.out.println(sortedNumbers);  // [1, 3, 5] - auto sorted
        
        
        // MAP - Key-value pairs
        Map<String, Integer> ages = new HashMap<>();
        ages.put("Alice", 25);
        ages.put("Bob", 30);
        System.out.println(ages.get("Alice"));  // 25
        
        // Iterate over map
        for (Map.Entry<String, Integer> entry : ages.entrySet()) {
            System.out.println(entry.getKey() + " is " + entry.getValue());
        }
        
        
        // QUEUE - FIFO (First In, First Out)
        Queue<String> ticketLine = new LinkedList<>();
        ticketLine.offer("Person1");  // Add to rear
        ticketLine.offer("Person2");
        System.out.println(ticketLine.poll());  // Person1 - removes from front
        System.out.println(ticketLine.peek());  // Person2 - views front, doesn't remove
        
        
        // STACK - LIFO (Last In, First Out)
        Deque<String> stack = new ArrayDeque<>();
        stack.push("Page1");
        stack.push("Page2");
        stack.push("Page3");
        System.out.println(stack.pop());  // Page3 - last in, first out
        
        
        // Common operations
        List<Integer> numbers = new ArrayList<>(Arrays.asList(3, 1, 4, 1, 5));
        Collections.sort(numbers);           // [1, 1, 3, 4, 5]
        Collections.reverse(numbers);        // [5, 4, 3, 1, 1]
        Collections.shuffle(numbers);        // Random order
        int max = Collections.max(numbers);  // Maximum value
    }
}
\`\`\`

### Why It Matters
Collections are used in almost every Java application. Choosing the right collection for your use case affects performance. Use ArrayList for random access, LinkedList for frequent insertions, HashMap for fast lookups.`
    },
    {
        id: 'tcs111',
        question: 'Explain String, StringBuilder, and StringBuffer',
        answer: `### Simple Explanation
All three handle text in Java, but differ in mutability and thread-safety:
- **String**: Immutable - once created, cannot be changed
- **StringBuilder**: Mutable, fast, NOT thread-safe
- **StringBuffer**: Mutable, slower, thread-safe

### Real-World Analogy
- **String**: Carved stone tablet - to change text, you must create a new tablet
- **StringBuilder**: Personal whiteboard - you can erase and rewrite freely
- **StringBuffer**: Classroom whiteboard with a lock - only one person can write at a time

### Technical Details
| Feature | String | StringBuilder | StringBuffer |
|---------|--------|---------------|--------------|
| **Mutable** | No | Yes | Yes |
| **Thread-safe** | Yes (immutable) | No | Yes (synchronized) |
| **Performance** | Slow for concat | Fast | Slower than StringBuilder |
| **Memory** | Creates new objects | Modifies in place | Modifies in place |

### Code Example
\`\`\`java
public class StringDemo {
    public static void main(String[] args) {
        
        // STRING - Immutable
        String s1 = "Hello";
        String s2 = s1.concat(" World");  // Creates NEW string
        System.out.println(s1);  // "Hello" - unchanged!
        System.out.println(s2);  // "Hello World"
        
        // Bad practice - creates many intermediate objects
        String result = "";
        for (int i = 0; i < 1000; i++) {
            result += i;  // Creates new String each time!
        }
        // This creates 1000 String objects - wasteful
        
        
        // STRINGBUILDER - Mutable, single-threaded
        StringBuilder sb = new StringBuilder("Hello");
        sb.append(" World");  // Modifies same object
        sb.append("!");
        System.out.println(sb.toString());  // "Hello World!"
        
        // Good practice - efficient string building
        StringBuilder efficient = new StringBuilder();
        for (int i = 0; i < 1000; i++) {
            efficient.append(i);  // Modifies same object
        }
        String finalResult = efficient.toString();
        
        // StringBuilder methods
        StringBuilder builder = new StringBuilder("Java");
        builder.append(" Programming");  // Add at end
        builder.insert(0, "Learn ");     // Insert at position
        builder.delete(0, 6);            // Delete range
        builder.reverse();               // Reverse
        builder.replace(0, 4, "Code");   // Replace range
        
        
        // STRINGBUFFER - Mutable, thread-safe
        // Use only when multiple threads modify the same string
        StringBuffer buffer = new StringBuffer("Thread");
        buffer.append(" Safe");
        
        // Thread-safe example
        Runnable task = () -> {
            for (int i = 0; i < 100; i++) {
                buffer.append("x");  // Synchronized
            }
        };
        
        Thread t1 = new Thread(task);
        Thread t2 = new Thread(task);
        t1.start();
        t2.start();
        // Buffer ensures no data corruption
        
        
        // WHEN TO USE WHAT?
        // String: Small, unchanging text
        String name = "John";
        
        // StringBuilder: Building strings in a loop (single-threaded)
        StringBuilder html = new StringBuilder();
        html.append("<html>").append("<body>").append("</body>").append("</html>");
        
        // StringBuffer: Only when multiple threads modify same string
        // (Rare case - usually redesign to avoid this)
    }
    
    // Performance comparison
    public static void performanceTest() {
        long start, end;
        
        // String concatenation - SLOW
        start = System.currentTimeMillis();
        String s = "";
        for (int i = 0; i < 100000; i++) {
            s += "x";
        }
        end = System.currentTimeMillis();
        System.out.println("String: " + (end - start) + "ms");
        
        // StringBuilder - FAST
        start = System.currentTimeMillis();
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < 100000; i++) {
            sb.append("x");
        }
        end = System.currentTimeMillis();
        System.out.println("StringBuilder: " + (end - start) + "ms");
        
        // String: ~5000ms, StringBuilder: ~5ms
    }
}
\`\`\`

### Why It Matters
Using the wrong string type can cause severe performance problems. Always use StringBuilder for loops and string building. String is fine for simple operations. StringBuffer is rarely needed.`
    },
];

export default javaQuestions;
