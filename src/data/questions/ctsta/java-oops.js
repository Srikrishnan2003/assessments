// Cognizant GenC - Core Java: OOPs Concepts Questions

export const javaOopsQuestions = [
    {
        id: 'ctsta-oops-001',
        question: 'Design a class hierarchy for a Banking System using Inheritance.',
        answer: `### Solution Code
\`\`\`java
// Base class
abstract class BankAccount {
    protected String accountNumber;
    protected String holderName;
    protected double balance;
    
    public BankAccount(String accNo, String name, double balance) {
        this.accountNumber = accNo;
        this.holderName = name;
        this.balance = balance;
    }
    
    public void deposit(double amount) {
        if (amount > 0) balance += amount;
    }
    
    public abstract boolean withdraw(double amount);
    public abstract double calculateInterest();
    
    public double getBalance() { return balance; }
}

// Savings Account
class SavingsAccount extends BankAccount {
    private static final double INTEREST_RATE = 0.04;
    private static final double MIN_BALANCE = 1000;
    
    public SavingsAccount(String accNo, String name, double balance) {
        super(accNo, name, balance);
    }
    
    @Override
    public boolean withdraw(double amount) {
        if (balance - amount >= MIN_BALANCE) {
            balance -= amount;
            return true;
        }
        return false;
    }
    
    @Override
    public double calculateInterest() {
        return balance * INTEREST_RATE;
    }
}

// Current Account
class CurrentAccount extends BankAccount {
    private double overdraftLimit = 50000;
    
    public CurrentAccount(String accNo, String name, double balance) {
        super(accNo, name, balance);
    }
    
    @Override
    public boolean withdraw(double amount) {
        if (balance + overdraftLimit >= amount) {
            balance -= amount;
            return true;
        }
        return false;
    }
    
    @Override
    public double calculateInterest() { return 0; }
}
\`\`\`

### Key Concepts Demonstrated
| Concept | Example |
|---------|---------|
| Abstraction | abstract class, abstract methods |
| Inheritance | extends BankAccount |
| Polymorphism | Different withdraw() behavior |
| Encapsulation | protected/private fields |`
    },
    {
        id: 'ctsta-oops-002',
        question: 'Implement method overloading and overriding with examples.',
        answer: `### Solution Code
\`\`\`java
class Calculator {
    // METHOD OVERLOADING - Same name, different parameters
    public int add(int a, int b) {
        return a + b;
    }
    
    public int add(int a, int b, int c) {
        return a + b + c;
    }
    
    public double add(double a, double b) {
        return a + b;
    }
}

class Animal {
    public void makeSound() {
        System.out.println("Animal makes sound");
    }
}

class Dog extends Animal {
    // METHOD OVERRIDING - Same signature in subclass
    @Override
    public void makeSound() {
        System.out.println("Dog barks");
    }
}

class Cat extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Cat meows");
    }
}

public class PolymorphismDemo {
    public static void main(String[] args) {
        // Overloading
        Calculator calc = new Calculator();
        System.out.println(calc.add(2, 3));       // 5
        System.out.println(calc.add(2, 3, 4));    // 9
        System.out.println(calc.add(2.5, 3.5));   // 6.0
        
        // Overriding + Runtime Polymorphism
        Animal a1 = new Dog();
        Animal a2 = new Cat();
        a1.makeSound();  // Dog barks
        a2.makeSound();  // Cat meows
    }
}
\`\`\`

### Comparison
| Feature | Overloading | Overriding |
|---------|-------------|------------|
| When | Compile-time | Runtime |
| Parameters | Different | Same |
| Return type | Can differ | Same or covariant |
| Keyword | None | @Override |`
    },
    {
        id: 'ctsta-oops-003',
        question: 'Explain the difference between Abstract Class and Interface with code.',
        answer: `### Solution Code
\`\`\`java
// ABSTRACT CLASS - Partial implementation
abstract class Vehicle {
    protected String brand;
    
    public Vehicle(String brand) {
        this.brand = brand;
    }
    
    // Concrete method
    public void start() {
        System.out.println(brand + " starting...");
    }
    
    // Abstract method - must be implemented
    public abstract void drive();
}

// INTERFACE - Pure contract (Java 8+ can have defaults)
interface Electric {
    void charge();
    
    default void showBatteryStatus() {
        System.out.println("Battery level: 80%");
    }
}

interface Autonomous {
    void enableAutoPilot();
}

// Class using both
class Tesla extends Vehicle implements Electric, Autonomous {
    public Tesla() {
        super("Tesla");
    }
    
    @Override
    public void drive() {
        System.out.println("Driving silently...");
    }
    
    @Override
    public void charge() {
        System.out.println("Charging at Supercharger...");
    }
    
    @Override
    public void enableAutoPilot() {
        System.out.println("Autopilot enabled");
    }
}
\`\`\`

### Key Differences
| Feature | Abstract Class | Interface |
|---------|----------------|-----------|
| Methods | Abstract + Concrete | Abstract (default in Java 8+) |
| Variables | Any type | public static final only |
| Constructor | Yes | No |
| Inheritance | Single | Multiple |
| Use when | IS-A with shared code | CAN-DO capability |`
    },
    {
        id: 'ctsta-oops-004',
        question: 'Implement the Singleton Design Pattern.',
        answer: `### Solution Code
\`\`\`java
// Method 1: Double-checked locking (Thread-safe)
class Singleton {
    private static volatile Singleton instance;
    private String data;
    
    private Singleton() {
        data = "Singleton Data";
    }
    
    public static Singleton getInstance() {
        if (instance == null) {
            synchronized (Singleton.class) {
                if (instance == null) {
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }
}

// Method 2: Enum Singleton (Best approach)
enum DatabaseConnection {
    INSTANCE;
    
    private String connectionUrl;
    
    DatabaseConnection() {
        connectionUrl = "jdbc:mysql://localhost:3306/db";
    }
    
    public void connect() {
        System.out.println("Connected to: " + connectionUrl);
    }
}

// Method 3: Eager initialization
class EagerSingleton {
    private static final EagerSingleton INSTANCE = new EagerSingleton();
    
    private EagerSingleton() {}
    
    public static EagerSingleton getInstance() {
        return INSTANCE;
    }
}

public class SingletonDemo {
    public static void main(String[] args) {
        Singleton s1 = Singleton.getInstance();
        Singleton s2 = Singleton.getInstance();
        System.out.println(s1 == s2);  // true - same instance
        
        DatabaseConnection.INSTANCE.connect();
    }
}
\`\`\`

### When to Use: Database connections, Configuration, Logging`
    },
    {
        id: 'ctsta-oops-005',
        question: 'Implement the Factory Design Pattern.',
        answer: `### Solution Code
\`\`\`java
// Product interface
interface Shape {
    void draw();
}

// Concrete products
class Circle implements Shape {
    @Override
    public void draw() { System.out.println("Drawing Circle"); }
}

class Rectangle implements Shape {
    @Override
    public void draw() { System.out.println("Drawing Rectangle"); }
}

class Triangle implements Shape {
    @Override
    public void draw() { System.out.println("Drawing Triangle"); }
}

// Factory class
class ShapeFactory {
    public static Shape createShape(String type) {
        switch (type.toLowerCase()) {
            case "circle": return new Circle();
            case "rectangle": return new Rectangle();
            case "triangle": return new Triangle();
            default: throw new IllegalArgumentException("Unknown shape: " + type);
        }
    }
}

public class FactoryDemo {
    public static void main(String[] args) {
        Shape s1 = ShapeFactory.createShape("circle");
        Shape s2 = ShapeFactory.createShape("rectangle");
        
        s1.draw();  // Drawing Circle
        s2.draw();  // Drawing Rectangle
    }
}
\`\`\`

### Benefits
- Decouples object creation from usage
- Easy to add new types
- Centralizes creation logic`
    },
    {
        id: 'ctsta-oops-006',
        question: 'Demonstrate Exception Handling with custom exceptions.',
        answer: `### Solution Code
\`\`\`java
// Custom checked exception
class InsufficientBalanceException extends Exception {
    public InsufficientBalanceException(String message) {
        super(message);
    }
}

// Custom unchecked exception
class InvalidAmountException extends RuntimeException {
    public InvalidAmountException(String message) {
        super(message);
    }
}

class BankAccount {
    private double balance;
    
    public BankAccount(double balance) {
        this.balance = balance;
    }
    
    public void withdraw(double amount) throws InsufficientBalanceException {
        if (amount <= 0) {
            throw new InvalidAmountException("Amount must be positive");
        }
        if (amount > balance) {
            throw new InsufficientBalanceException(
                "Cannot withdraw " + amount + ". Balance: " + balance);
        }
        balance -= amount;
    }
}

public class ExceptionDemo {
    public static void main(String[] args) {
        BankAccount account = new BankAccount(5000);
        
        try {
            account.withdraw(7000);
        } catch (InsufficientBalanceException e) {
            System.out.println("Error: " + e.getMessage());
        } catch (InvalidAmountException e) {
            System.out.println("Invalid: " + e.getMessage());
        } finally {
            System.out.println("Transaction completed");
        }
    }
}
\`\`\`

### Exception Types
| Type | Must Handle? | Example |
|------|--------------|---------|
| Checked | Yes | IOException, SQLException |
| Unchecked | No | NullPointerException, IllegalArgumentException |`
    },
    {
        id: 'ctsta-oops-007',
        question: 'Explain access modifiers with examples.',
        answer: `### Solution Code
\`\`\`java
package com.example;

public class AccessDemo {
    public String publicVar = "Public - Accessible everywhere";
    protected String protectedVar = "Protected - Same package + subclasses";
    String defaultVar = "Default - Same package only";
    private String privateVar = "Private - This class only";
    
    public void showAll() {
        System.out.println(publicVar);
        System.out.println(protectedVar);
        System.out.println(defaultVar);
        System.out.println(privateVar);
    }
}

// Same package
class SamePackage {
    void test() {
        AccessDemo demo = new AccessDemo();
        System.out.println(demo.publicVar);     // ✓
        System.out.println(demo.protectedVar);  // ✓
        System.out.println(demo.defaultVar);    // ✓
        // System.out.println(demo.privateVar); // ✗ Compile error
    }
}

// Different package, subclass
class SubClass extends AccessDemo {
    void test() {
        System.out.println(publicVar);     // ✓
        System.out.println(protectedVar);  // ✓
        // defaultVar - ✗
        // privateVar - ✗
    }
}
\`\`\`

### Access Modifier Summary
| Modifier | Class | Package | Subclass | World |
|----------|-------|---------|----------|-------|
| public | ✓ | ✓ | ✓ | ✓ |
| protected | ✓ | ✓ | ✓ | ✗ |
| default | ✓ | ✓ | ✗ | ✗ |
| private | ✓ | ✗ | ✗ | ✗ |`
    },
    {
        id: 'ctsta-oops-008',
        question: 'Implement composition vs inheritance example.',
        answer: `### Solution Code
\`\`\`java
// INHERITANCE - IS-A relationship
class Animal {
    void eat() { System.out.println("Eating..."); }
}

class Dog extends Animal {
    void bark() { System.out.println("Barking..."); }
}

// COMPOSITION - HAS-A relationship (Preferred)
class Engine {
    void start() { System.out.println("Engine started"); }
    void stop() { System.out.println("Engine stopped"); }
}

class Wheels {
    void rotate() { System.out.println("Wheels rotating"); }
}

class Car {
    private Engine engine;  // HAS-A Engine
    private Wheels wheels;  // HAS-A Wheels
    
    public Car() {
        this.engine = new Engine();
        this.wheels = new Wheels();
    }
    
    public void start() {
        engine.start();
        wheels.rotate();
    }
    
    public void stop() {
        engine.stop();
    }
}

public class CompositionDemo {
    public static void main(String[] args) {
        Car car = new Car();
        car.start();
        car.stop();
    }
}
\`\`\`

### When to Use
| Use Case | Inheritance | Composition |
|----------|-------------|-------------|
| IS-A relationship | ✓ | |
| HAS-A relationship | | ✓ |
| Code reuse | Both | Both |
| Flexibility | Less | More |
| Coupling | Tight | Loose |

### Rule: Favor Composition over Inheritance`
    },
    {
        id: 'ctsta-oops-009',
        question: 'Explain static keyword with all its uses.',
        answer: `### Solution Code
\`\`\`java
class Counter {
    // Static variable - shared across all instances
    private static int count = 0;
    
    // Instance variable - unique to each instance
    private String name;
    
    // Static block - runs once when class is loaded
    static {
        System.out.println("Class loaded, count initialized to: " + count);
    }
    
    public Counter(String name) {
        this.name = name;
        count++;  // Increment shared counter
    }
    
    // Static method - can be called without instance
    public static int getCount() {
        // Cannot access 'name' here - it's instance variable
        return count;
    }
    
    // Instance method
    public void showInfo() {
        // Can access both static and instance members
        System.out.println(name + " - Total instances: " + count);
    }
    
    // Static inner class
    static class Helper {
        static void help() {
            System.out.println("Helper method");
        }
    }
}

public class StaticDemo {
    public static void main(String[] args) {
        System.out.println("Initial count: " + Counter.getCount());  // 0
        
        Counter c1 = new Counter("First");
        Counter c2 = new Counter("Second");
        
        System.out.println("After creation: " + Counter.getCount());  // 2
        
        Counter.Helper.help();  // Static inner class
    }
}
\`\`\`

### Static Keyword Uses
| Type | Description |
|------|-------------|
| Variable | Shared across all instances |
| Method | Called without creating object |
| Block | Initialization code, runs once |
| Inner Class | Doesn't need outer class instance |`
    },
    {
        id: 'ctsta-oops-010',
        question: 'Implement final keyword with all its uses.',
        answer: `### Solution Code
\`\`\`java
// Final class - cannot be extended
final class ImmutableConfiguration {
    private final String setting;  // Final variable - cannot be reassigned
    
    public ImmutableConfiguration(String setting) {
        this.setting = setting;  // Must be assigned in constructor
    }
    
    public String getSetting() {
        return setting;
    }
}

class Parent {
    // Final method - cannot be overridden
    public final void criticalMethod() {
        System.out.println("This cannot be overridden");
    }
    
    public void normalMethod() {
        System.out.println("This can be overridden");
    }
}

class Child extends Parent {
    // @Override public void criticalMethod() {} // ERROR!
    
    @Override
    public void normalMethod() {
        System.out.println("Overridden in Child");
    }
}

public class FinalDemo {
    // Final constant
    public static final double PI = 3.14159;
    
    public static void main(String[] args) {
        // Final local variable
        final int MAX = 100;
        // MAX = 200; // ERROR!
        
        // Final reference - object can be modified, reference cannot
        final StringBuilder sb = new StringBuilder("Hello");
        sb.append(" World");  // OK - modifying object
        // sb = new StringBuilder(); // ERROR - changing reference
        
        System.out.println(sb);
    }
}
\`\`\`

### Final Keyword Uses
| Type | Effect |
|------|--------|
| Variable | Cannot be reassigned |
| Method | Cannot be overridden |
| Class | Cannot be extended |
| Parameter | Cannot be reassigned in method |`
    }
];

export default javaOopsQuestions;
