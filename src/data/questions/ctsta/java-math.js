// Cognizant GenC - Core Java: Mathematical Problems

export const javaMathQuestions = [
    {
        id: 'ctsta-math-001',
        question: 'Write a program to calculate fuel consumption for a vehicle trip.',
        answer: `### Problem Statement
Calculate fuel required for a trip given distance, mileage, and print cost.

### Solution Code
\`\`\`java
import java.util.Scanner;

public class FuelConsumption {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter distance (km): ");
        double distance = sc.nextDouble();
        
        System.out.print("Enter mileage (km/litre): ");
        double mileage = sc.nextDouble();
        
        System.out.print("Enter fuel price per litre: ");
        double price = sc.nextDouble();
        
        double fuelRequired = distance / mileage;
        double totalCost = fuelRequired * price;
        
        System.out.printf("Fuel Required: %.2f litres%n", fuelRequired);
        System.out.printf("Total Cost: Rs. %.2f%n", totalCost);
        sc.close();
    }
}
\`\`\`

### Sample Test Case
| Distance | Mileage | Price | Fuel | Cost |
|----------|---------|-------|------|------|
| 500 km | 15 km/l | 100 | 33.33L | 3333.33 |`
    },
    {
        id: 'ctsta-math-002',
        question: 'Write a program to check if a number is Prime.',
        answer: `### Optimized Approach
Only check divisibility up to √n, skip even numbers.

### Solution Code
\`\`\`java
import java.util.Scanner;

public class PrimeNumber {
    public static boolean isPrime(int n) {
        if (n <= 1) return false;
        if (n <= 3) return true;
        if (n % 2 == 0 || n % 3 == 0) return false;
        
        for (int i = 5; i * i <= n; i += 6) {
            if (n % i == 0 || n % (i + 2) == 0) return false;
        }
        return true;
    }
    
    // Print primes up to n (Sieve of Eratosthenes)
    public static void printPrimes(int n) {
        boolean[] isPrime = new boolean[n + 1];
        java.util.Arrays.fill(isPrime, true);
        isPrime[0] = isPrime[1] = false;
        
        for (int i = 2; i * i <= n; i++) {
            if (isPrime[i]) {
                for (int j = i * i; j <= n; j += i) {
                    isPrime[j] = false;
                }
            }
        }
        
        for (int i = 2; i <= n; i++) {
            if (isPrime[i]) System.out.print(i + " ");
        }
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        System.out.println(isPrime(n) ? "Prime" : "Not Prime");
        sc.close();
    }
}
\`\`\`

### Complexity: O(√n) for single check, O(n log log n) for Sieve`
    },
    {
        id: 'ctsta-math-003',
        question: 'Write a program to check if a number is an Armstrong number.',
        answer: `### Definition
Armstrong number: sum of digits raised to power of number of digits equals the number.
Example: 153 = 1³ + 5³ + 3³ = 1 + 125 + 27 = 153

### Solution Code
\`\`\`java
import java.util.Scanner;

public class ArmstrongNumber {
    public static boolean isArmstrong(int n) {
        if (n < 0) return false;
        
        int original = n;
        int digits = String.valueOf(n).length();
        int sum = 0;
        
        while (n > 0) {
            int digit = n % 10;
            sum += Math.pow(digit, digits);
            n /= 10;
        }
        
        return sum == original;
    }
    
    // Print all Armstrong numbers up to n
    public static void printArmstrong(int limit) {
        System.out.print("Armstrong numbers: ");
        for (int i = 0; i <= limit; i++) {
            if (isArmstrong(i)) System.out.print(i + " ");
        }
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        System.out.println(isArmstrong(n) ? "Armstrong" : "Not Armstrong");
        printArmstrong(1000); // 0 1 2 3 4 5 6 7 8 9 153 370 371 407
        sc.close();
    }
}
\`\`\``
    },
    {
        id: 'ctsta-math-004',
        question: 'Write a program to generate Fibonacci series up to N terms.',
        answer: `### Solution Code
\`\`\`java
import java.util.Scanner;

public class Fibonacci {
    // Iterative (Optimal)
    public static void fibonacciIterative(int n) {
        int a = 0, b = 1;
        System.out.print(a + " " + b);
        
        for (int i = 2; i < n; i++) {
            int next = a + b;
            System.out.print(" " + next);
            a = b;
            b = next;
        }
    }
    
    // Recursive with memoization
    private static long[] memo = new long[100];
    public static long fibMemo(int n) {
        if (n <= 1) return n;
        if (memo[n] != 0) return memo[n];
        memo[n] = fibMemo(n - 1) + fibMemo(n - 2);
        return memo[n];
    }
    
    // Get nth Fibonacci number
    public static long nthFibonacci(int n) {
        if (n <= 1) return n;
        long a = 0, b = 1;
        for (int i = 2; i <= n; i++) {
            long next = a + b;
            a = b;
            b = next;
        }
        return b;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        fibonacciIterative(n);
        System.out.println("\\n10th Fib: " + nthFibonacci(10)); // 55
        sc.close();
    }
}
\`\`\`

### Complexity: O(n) time, O(1) space for iterative`
    },
    {
        id: 'ctsta-math-005',
        question: 'Write a program to calculate factorial of a number.',
        answer: `### Solution Code
\`\`\`java
import java.util.Scanner;
import java.math.BigInteger;

public class Factorial {
    // Iterative (handles up to 20!)
    public static long factorialIterative(int n) {
        if (n < 0) throw new IllegalArgumentException("Negative input");
        long result = 1;
        for (int i = 2; i <= n; i++) result *= i;
        return result;
    }
    
    // Recursive
    public static long factorialRecursive(int n) {
        if (n <= 1) return 1;
        return n * factorialRecursive(n - 1);
    }
    
    // BigInteger for large numbers
    public static BigInteger factorialBig(int n) {
        BigInteger result = BigInteger.ONE;
        for (int i = 2; i <= n; i++) {
            result = result.multiply(BigInteger.valueOf(i));
        }
        return result;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        System.out.println("Factorial: " + factorialIterative(n));
        System.out.println("50!: " + factorialBig(50));
        sc.close();
    }
}
\`\`\`

### Note: long overflows at 21!, use BigInteger for larger values`
    },
    {
        id: 'ctsta-math-006',
        question: 'Write a program to find GCD and LCM of two numbers.',
        answer: `### Solution Code
\`\`\`java
import java.util.Scanner;

public class GcdLcm {
    // GCD using Euclidean algorithm
    public static int gcd(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    
    // GCD Recursive
    public static int gcdRecursive(int a, int b) {
        return b == 0 ? a : gcdRecursive(b, a % b);
    }
    
    // LCM using GCD
    public static int lcm(int a, int b) {
        return (a * b) / gcd(a, b);
    }
    
    // GCD of array
    public static int gcdArray(int[] arr) {
        int result = arr[0];
        for (int i = 1; i < arr.length; i++) {
            result = gcd(result, arr[i]);
        }
        return result;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt(), b = sc.nextInt();
        System.out.println("GCD: " + gcd(a, b));
        System.out.println("LCM: " + lcm(a, b));
        sc.close();
    }
}
\`\`\`

### Sample: GCD(48, 18) = 6, LCM(48, 18) = 144`
    },
    {
        id: 'ctsta-math-007',
        question: 'Write a program to check if a number is a Palindrome.',
        answer: `### Solution Code
\`\`\`java
import java.util.Scanner;

public class PalindromeNumber {
    // Numeric approach (no string conversion)
    public static boolean isPalindrome(int n) {
        if (n < 0) return false;
        
        int original = n;
        int reversed = 0;
        
        while (n > 0) {
            reversed = reversed * 10 + n % 10;
            n /= 10;
        }
        return original == reversed;
    }
    
    // String approach
    public static boolean isPalindromeStr(int n) {
        String s = String.valueOf(n);
        return s.equals(new StringBuilder(s).reverse().toString());
    }
    
    // Next palindrome number
    public static int nextPalindrome(int n) {
        while (!isPalindrome(++n));
        return n;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        System.out.println(isPalindrome(n) ? "Palindrome" : "Not Palindrome");
        sc.close();
    }
}
\`\`\`

### Examples: 121 (Yes), 12321 (Yes), 123 (No)`
    },
    {
        id: 'ctsta-math-008',
        question: 'Write a program to check if a number is a Perfect number.',
        answer: `### Definition
Perfect number: sum of its proper divisors equals the number.
Example: 28 = 1 + 2 + 4 + 7 + 14 = 28

### Solution Code
\`\`\`java
import java.util.Scanner;

public class PerfectNumber {
    public static boolean isPerfect(int n) {
        if (n <= 1) return false;
        
        int sum = 1;  // 1 is always a divisor
        
        for (int i = 2; i * i <= n; i++) {
            if (n % i == 0) {
                sum += i;
                if (i != n / i) {
                    sum += n / i;
                }
            }
        }
        return sum == n;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        System.out.println(isPerfect(n) ? "Perfect Number" : "Not Perfect");
        
        // First few perfect numbers: 6, 28, 496, 8128
        for (int i = 1; i <= 10000; i++) {
            if (isPerfect(i)) System.out.print(i + " ");
        }
        sc.close();
    }
}
\`\`\``
    },
    {
        id: 'ctsta-math-009',
        question: 'Write a program to convert decimal to binary and vice versa.',
        answer: `### Solution Code
\`\`\`java
import java.util.Scanner;

public class NumberConversion {
    // Decimal to Binary
    public static String decimalToBinary(int n) {
        if (n == 0) return "0";
        StringBuilder binary = new StringBuilder();
        while (n > 0) {
            binary.insert(0, n % 2);
            n /= 2;
        }
        return binary.toString();
    }
    
    // Binary to Decimal
    public static int binaryToDecimal(String binary) {
        int decimal = 0, base = 1;
        for (int i = binary.length() - 1; i >= 0; i--) {
            if (binary.charAt(i) == '1') decimal += base;
            base *= 2;
        }
        return decimal;
    }
    
    // Using built-in methods
    public static String toBinaryBuiltin(int n) { return Integer.toBinaryString(n); }
    public static int toDecimalBuiltin(String b) { return Integer.parseInt(b, 2); }
    
    public static void main(String[] args) {
        System.out.println("10 in binary: " + decimalToBinary(10)); // 1010
        System.out.println("1010 in decimal: " + binaryToDecimal("1010")); // 10
    }
}
\`\`\``
    },
    {
        id: 'ctsta-math-010',
        question: 'Write a program to reverse digits of a number.',
        answer: `### Solution Code
\`\`\`java
import java.util.Scanner;

public class ReverseNumber {
    public static int reverse(int n) {
        boolean negative = n < 0;
        n = Math.abs(n);
        
        int reversed = 0;
        while (n > 0) {
            // Check overflow
            if (reversed > (Integer.MAX_VALUE - n % 10) / 10) return 0;
            reversed = reversed * 10 + n % 10;
            n /= 10;
        }
        return negative ? -reversed : reversed;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        System.out.println("Reversed: " + reverse(n));
        sc.close();
    }
}
\`\`\`

### Examples: 12345 → 54321, -123 → -321`
    }
];

export default javaMathQuestions;
