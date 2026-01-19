// TCS Prime Interview - Coding Problem Questions

export const codingQuestions = [
  {
    id: 'tcs136',
    question: 'Write a function to reverse a string',
    answer: `### Simple Explanation
Reversing a string means changing the order of characters so the last becomes first and vice versa. "hello" becomes "olleh".

### Approaches
| Method | Time | Space | Notes |
|--------|------|-------|-------|
| Built-in methods | O(n) | O(n) | Simplest, readable |
| Two-pointer | O(n) | O(n) | Classic interview approach |
| Recursion | O(n) | O(n) | Demonstrates recursion knowledge |

### Code Example (Java)
\`\`\`java
public class StringReverse {
    
    // Method 1: Using StringBuilder (Recommended)
    public static String reverse1(String str) {
        return new StringBuilder(str).reverse().toString();
    }
    
    // Method 2: Two Pointers (Interview Standard)
    public static String reverse2(String str) {
        char[] chars = str.toCharArray();
        int left = 0, right = chars.length - 1;
        
        while (left < right) {
            // Swap characters
            char temp = chars[left];
            chars[left] = chars[right];
            chars[right] = temp;
            
            left++;
            right--;
        }
        
        return new String(chars);
    }
    
    // Method 3: Loop (Simple approach)
    public static String reverse3(String str) {
        StringBuilder result = new StringBuilder();
        for (int i = str.length() - 1; i >= 0; i--) {
            result.append(str.charAt(i));
        }
        return result.toString();
    }
    
    // Method 4: Recursion
    public static String reverse4(String str) {
        if (str.isEmpty()) return str;
        // Last char + reverse of remaining
        return str.charAt(str.length() - 1) + reverse4(str.substring(0, str.length() - 1));
    }
    
    public static void main(String[] args) {
        System.out.println(reverse1("hello"));  // "olleh"
        System.out.println(reverse2("world"));  // "dlrow"
    }
}
\`\`\`

### Why This Matters
String reversal tests understanding of strings, loops, and problem-solving. It's often a warmup question.`
  },
  {
    id: 'tcs137',
    question: 'Find the largest number in an array',
    answer: `### Simple Explanation
Iterate through the array, keeping track of the largest value seen so far. Compare each element with the current maximum.

### Approaches
| Method | Time | Space | Notes |
|--------|------|-------|-------|
| Linear scan | O(n) | O(1) | Most efficient |
| Sorting | O(n log n) | O(1) | Overkill for this problem |
| Divide & Conquer | O(n) | O(log n) | Unnecessary complexity |

### Code Example (Java)
\`\`\`java
import java.util.*;

public class FindMax {
    
    // Method 1: Simple Loop (Recommended)
    public static int findMax1(int[] arr) {
        if (arr == null || arr.length == 0) {
            throw new IllegalArgumentException("Array is empty");
        }
        
        int max = arr[0];  // Start with first element
        
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        
        return max;
    }
    
    // Method 2: Using Streams (Java 8+)
    public static int findMax2(int[] arr) {
        return Arrays.stream(arr).max().orElseThrow();
    }
    
    // Method 3: Using Collections (for ArrayList)
    public static int findMax3(List<Integer> list) {
        return Collections.max(list);
    }
    
    // Method 4: Find both min and max in single pass
    public static int[] findMinMax(int[] arr) {
        int min = arr[0], max = arr[0];
        
        for (int num : arr) {
            if (num < min) min = num;
            if (num > max) max = num;
        }
        
        return new int[]{min, max};
    }
    
    // Method 5: Find kth largest (using PriorityQueue)
    public static int findKthLargest(int[] arr, int k) {
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        
        for (int num : arr) {
            pq.offer(num);
            if (pq.size() > k) {
                pq.poll();  // Remove smallest
            }
        }
        
        return pq.peek();
        // Time: O(n log k), Space: O(k)
    }
    
    public static void main(String[] args) {
        int[] arr = {3, 7, 1, 9, 4, 6};
        System.out.println(findMax1(arr));  // 9
    }
}
\`\`\`

### Why This Matters
Tests basic iteration and comparison. Good starting point before harder problems.`
  },
  {
    id: 'tcs138',
    question: 'Check if a string is a palindrome',
    answer: `### Simple Explanation
A palindrome reads the same forwards and backwards. "radar" is a palindrome, "hello" is not. Ignore case and non-alphanumeric characters for practical use.

### Approaches
| Method | Time | Space | Notes |
|--------|------|-------|-------|
| Two pointers | O(n) | O(1) | Most efficient |
| Reverse & compare | O(n) | O(n) | Simple but uses extra space |

### Code Example (Java)
\`\`\`java
public class Palindrome {
    
    // Method 1: Two Pointers (Optimal)
    public static boolean isPalindrome1(String str) {
        // Clean the string - lowercase, only alphanumeric
        str = str.toLowerCase().replaceAll("[^a-z0-9]", "");
        
        int left = 0, right = str.length() - 1;
        
        while (left < right) {
            if (str.charAt(left) != str.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }
        
        return true;
    }
    
    // Method 2: Reverse and Compare
    public static boolean isPalindrome2(String str) {
        str = str.toLowerCase().replaceAll("[^a-z0-9]", "");
        String reversed = new StringBuilder(str).reverse().toString();
        return str.equals(reversed);
    }
    
    // Check if number is palindrome (without converting to string)
    public static boolean isNumberPalindrome(int num) {
        if (num < 0) return false;  // Negative numbers not palindromes
        
        int original = num;
        int reversed = 0;
        
        while (num > 0) {
            int digit = num % 10;
            reversed = reversed * 10 + digit;
            num /= 10;
        }
        
        return original == reversed;
    }
    
    public static void main(String[] args) {
        System.out.println(isPalindrome1("A man, a plan, a canal: Panama"));  // true
        System.out.println(isPalindrome1("race a car"));  // false
        System.out.println(isNumberPalindrome(121));  // true
        System.out.println(isNumberPalindrome(123));  // false
    }
}
\`\`\`

### Why This Matters
Tests string manipulation, two-pointer technique, and handling edge cases.`
  },
  {
    id: 'tcs139',
    question: 'Remove duplicates from an array',
    answer: `### Simple Explanation
Remove repeated elements, keeping only unique values. [1, 2, 2, 3, 3, 3] becomes [1, 2, 3].

### Approaches
| Method | Time | Space | Order Preserved |
|--------|------|-------|-----------------|
| HashSet | O(n) | O(n) | No (unless LinkedHashSet) |
| Sorting + two-pointer | O(n log n) | O(1) | No |
| LinkedHashSet | O(n) | O(n) | Yes |

### Code Example (Java)
\`\`\`java
import java.util.*;

public class RemoveDuplicates {
    
    // Method 1: Using Set (Simple)
    public static int[] removeDuplicates1(int[] arr) {
        Set<Integer> set = new LinkedHashSet<>();  // Preserves order
        for (int num : arr) {
            set.add(num);
        }
        
        return set.stream().mapToInt(Integer::intValue).toArray();
    }
    
    // Method 2: Two Pointers on Sorted Array (In-place)
    // Returns new length, modifies array in place
    public static int removeDuplicates2(int[] arr) {
        if (arr.length == 0) return 0;
        
        Arrays.sort(arr);  // Must be sorted first
        
        int writeIndex = 1;  // Position to write next unique element
        
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] != arr[i - 1]) {
                arr[writeIndex] = arr[i];
                writeIndex++;
            }
        }
        
        return writeIndex;  // New length
        // Array is modified in-place, first 'writeIndex' elements are unique
    }
    
    // Method 3: Using Streams (Java 8+)
    public static int[] removeDuplicates3(int[] arr) {
        return Arrays.stream(arr).distinct().toArray();
    }
    
    // Method 4: Remove duplicates from List
    public static <T> List<T> removeDuplicates4(List<T> list) {
        return new ArrayList<>(new LinkedHashSet<>(list));
    }
    
    public static void main(String[] args) {
        int[] arr = {1, 2, 2, 3, 4, 4, 4, 5};
        
        int[] result = removeDuplicates1(arr);
        System.out.println(Arrays.toString(result));  // [1, 2, 3, 4, 5]
        
        int[] arr2 = {1, 1, 2, 2, 3, 3};
        int newLength = removeDuplicates2(arr2);
        System.out.println("New length: " + newLength);  // 3
        System.out.println(Arrays.toString(Arrays.copyOf(arr2, newLength)));  // [1, 2, 3]
    }
}
\`\`\`

### Why This Matters
Tests knowledge of Sets, in-place array modification, and the two-pointer technique.`
  },
  {
    id: 'tcs140',
    question: 'Find the factorial of a number',
    answer: `### Simple Explanation
Factorial of n (written n!) is the product of all positive integers ≤ n.
5! = 5 × 4 × 3 × 2 × 1 = 120

### Approaches
| Method | Time | Space | Notes |
|--------|------|-------|-------|
| Iterative | O(n) | O(1) | Most efficient |
| Recursive | O(n) | O(n) | Stack space for recursion |
| Memoization | O(n) | O(n) | For repeated calls |

### Code Example (Java)
\`\`\`java
import java.math.BigInteger;

public class Factorial {
    
    // Method 1: Iterative (Recommended)
    public static long factorial1(int n) {
        if (n < 0) throw new IllegalArgumentException("Negative number");
        
        long result = 1;
        for (int i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
    
    // Method 2: Recursive
    public static long factorial2(int n) {
        if (n < 0) throw new IllegalArgumentException("Negative number");
        if (n <= 1) return 1;  // Base case
        return n * factorial2(n - 1);  // Recursive case
    }
    
    // Method 3: Tail Recursive (Optimizable by compiler)
    public static long factorial3(int n, long accumulator) {
        if (n <= 1) return accumulator;
        return factorial3(n - 1, n * accumulator);
    }
    
    // Method 4: BigInteger for large numbers
    // long overflows at 21! (over 9 quintillion)
    public static BigInteger factorialBig(int n) {
        BigInteger result = BigInteger.ONE;
        for (int i = 2; i <= n; i++) {
            result = result.multiply(BigInteger.valueOf(i));
        }
        return result;
    }
    
    // Method 5: With Memoization (for repeated calls)
    private static long[] memo = new long[21];  // 20! is max for long
    static { memo[0] = memo[1] = 1; }
    
    public static long factorialMemo(int n) {
        if (memo[n] != 0) return memo[n];
        memo[n] = n * factorialMemo(n - 1);
        return memo[n];
    }
    
    public static void main(String[] args) {
        System.out.println(factorial1(5));    // 120
        System.out.println(factorial2(10));   // 3628800
        System.out.println(factorial3(5, 1)); // 120
        System.out.println(factorialBig(50)); // Very large number
    }
}
\`\`\`

### Why This Matters
Classic recursion example. Tests understanding of base cases, recursive calls, and overflow handling.`
  },
  {
    id: 'tcs141',
    question: 'Check if two strings are anagrams',
    answer: `### Simple Explanation
Anagrams are words made by rearranging letters of another word. "listen" and "silent" are anagrams - same letters, different order.

### Approaches
| Method | Time | Space | Notes |
|--------|------|-------|-------|
| Sort & compare | O(n log n) | O(n) | Simple but slower |
| Character count | O(n) | O(1) | Most efficient (only 26 letters) |
| HashMap | O(n) | O(n) | Works for Unicode |

### Code Example (Java)
\`\`\`java
import java.util.*;

public class Anagram {
    
    // Method 1: Sort and Compare
    public static boolean isAnagram1(String s1, String s2) {
        // Quick check: different lengths can't be anagrams
        if (s1.length() != s2.length()) return false;
        
        char[] arr1 = s1.toLowerCase().toCharArray();
        char[] arr2 = s2.toLowerCase().toCharArray();
        
        Arrays.sort(arr1);
        Arrays.sort(arr2);
        
        return Arrays.equals(arr1, arr2);
    }
    
    // Method 2: Character Count Array (Optimal for lowercase letters)
    public static boolean isAnagram2(String s1, String s2) {
        if (s1.length() != s2.length()) return false;
        
        int[] count = new int[26];  // Only 26 lowercase letters
        
        s1 = s1.toLowerCase();
        s2 = s2.toLowerCase();
        
        for (int i = 0; i < s1.length(); i++) {
            count[s1.charAt(i) - 'a']++;  // Increment for s1
            count[s2.charAt(i) - 'a']--;  // Decrement for s2
        }
        
        // If anagrams, all counts should be zero
        for (int c : count) {
            if (c != 0) return false;
        }
        
        return true;
    }
    
    // Method 3: HashMap (Works for any characters including Unicode)
    public static boolean isAnagram3(String s1, String s2) {
        if (s1.length() != s2.length()) return false;
        
        Map<Character, Integer> map = new HashMap<>();
        
        for (char c : s1.toLowerCase().toCharArray()) {
            map.put(c, map.getOrDefault(c, 0) + 1);
        }
        
        for (char c : s2.toLowerCase().toCharArray()) {
            int count = map.getOrDefault(c, 0);
            if (count == 0) return false;
            map.put(c, count - 1);
        }
        
        return true;
    }
    
    public static void main(String[] args) {
        System.out.println(isAnagram1("listen", "silent"));  // true
        System.out.println(isAnagram2("hello", "world"));    // false
        System.out.println(isAnagram3("anagram", "nagaram")); // true
    }
}
\`\`\`

### Why This Matters
Tests string manipulation, sorting, and the character counting technique. Common interview question.`
  },
  {
    id: 'tcs142',
    question: 'Find the first non-repeating character',
    answer: `### Simple Explanation
Find the first character that appears exactly once in the string. In "leetcode", the answer is "l" (index 0). In "loveleetcode", the answer is "v" (index 2).

### Approaches
| Method | Time | Space | Notes |
|--------|------|-------|-------|
| Count array + scan | O(n) | O(1) | Two passes, most common |
| LinkedHashMap | O(n) | O(n) | Maintains insertion order |

### Code Example (Java)
\`\`\`java
import java.util.*;

public class FirstNonRepeating {
    
    // Method 1: Two Pass with Count Array
    public static int firstUniqChar1(String s) {
        int[] count = new int[26];
        
        // First pass: count occurrences
        for (char c : s.toCharArray()) {
            count[c - 'a']++;
        }
        
        // Second pass: find first with count 1
        for (int i = 0; i < s.length(); i++) {
            if (count[s.charAt(i) - 'a'] == 1) {
                return i;
            }
        }
        
        return -1;  // No non-repeating character
    }
    
    // Method 2: Using LinkedHashMap (maintains order)
    public static int firstUniqChar2(String s) {
        Map<Character, Integer> map = new LinkedHashMap<>();
        
        for (char c : s.toCharArray()) {
            map.put(c, map.getOrDefault(c, 0) + 1);
        }
        
        for (int i = 0; i < s.length(); i++) {
            if (map.get(s.charAt(i)) == 1) {
                return i;
            }
        }
        
        return -1;
    }
    
    // Method 3: Get the character instead of index
    public static Character firstNonRepeating(String s) {
        int[] count = new int[26];
        
        for (char c : s.toCharArray()) {
            count[c - 'a']++;
        }
        
        for (char c : s.toCharArray()) {
            if (count[c - 'a'] == 1) {
                return c;
            }
        }
        
        return null;
    }
    
    public static void main(String[] args) {
        System.out.println(firstUniqChar1("leetcode"));      // 0 (l)
        System.out.println(firstUniqChar1("loveleetcode")); // 2 (v)
        System.out.println(firstUniqChar1("aabb"));         // -1
        System.out.println(firstNonRepeating("aabbcd"));    // c
    }
}
\`\`\`

### Why This Matters
Tests counting technique and understanding of HashMap vs LinkedHashMap. Common string problem.`
  },
  {
    id: 'tcs143',
    question: 'Implement a function to flatten a nested array',
    answer: `### Simple Explanation
Convert a nested array like [[1, 2], [3, [4, 5]]] into a flat array [1, 2, 3, 4, 5]. Handle arbitrary nesting depth.

### Approaches
| Method | Time | Space | Notes |
|--------|------|-------|-------|
| Recursion | O(n) | O(d) | d = depth, natural approach |
| Iteration with stack | O(n) | O(n) | Avoids recursion overhead |

### Code Example (Java)
\`\`\`java
import java.util.*;

public class FlattenArray {
    
    // Method 1: Recursive approach with Object arrays
    public static List<Integer> flatten1(Object[] arr) {
        List<Integer> result = new ArrayList<>();
        flattenHelper(arr, result);
        return result;
    }
    
    private static void flattenHelper(Object[] arr, List<Integer> result) {
        for (Object element : arr) {
            if (element instanceof Object[]) {
                flattenHelper((Object[]) element, result);  // Recurse
            } else if (element instanceof Integer) {
                result.add((Integer) element);  // Base case
            }
        }
    }
    
    // Method 2: Using Stack (Iterative)
    public static List<Integer> flatten2(Object[] arr) {
        List<Integer> result = new ArrayList<>();
        Deque<Object> stack = new ArrayDeque<>();
        
        // Add elements in reverse order
        for (int i = arr.length - 1; i >= 0; i--) {
            stack.push(arr[i]);
        }
        
        while (!stack.isEmpty()) {
            Object current = stack.pop();
            
            if (current instanceof Object[]) {
                Object[] nested = (Object[]) current;
                for (int i = nested.length - 1; i >= 0; i--) {
                    stack.push(nested[i]);
                }
            } else if (current instanceof Integer) {
                result.add((Integer) current);
            }
        }
        
        return result;
    }
    
    // Method 3: Flatten List<List<Integer>> (simpler case)
    public static List<Integer> flattenLists(List<List<Integer>> nestedList) {
        List<Integer> result = new ArrayList<>();
        for (List<Integer> list : nestedList) {
            result.addAll(list);
        }
        return result;
    }
    
    // Method 4: Using Streams (Java 8+)
    public static List<Integer> flattenWithStreams(List<List<Integer>> nestedList) {
        return nestedList.stream()
                .flatMap(List::stream)
                .collect(Collectors.toList());
    }
    
    public static void main(String[] args) {
        Object[] nested = {1, new Object[]{2, new Object[]{3, 4}}, 5};
        System.out.println(flatten1(nested));  // [1, 2, 3, 4, 5]
        System.out.println(flatten2(nested));  // [1, 2, 3, 4, 5]
        
        List<List<Integer>> lists = Arrays.asList(
            Arrays.asList(1, 2),
            Arrays.asList(3, 4),
            Arrays.asList(5)
        );
        System.out.println(flattenLists(lists));  // [1, 2, 3, 4, 5]
    }
}
\`\`\`

### Why This Matters
Tests recursion skills and understanding of data structures. Common in frontend (flattening nested data).`
  },
  {
    id: 'tcs144',
    question: 'Find the sum of array elements',
    answer: `### Simple Explanation
Calculate the total of all numbers in an array. [1, 2, 3, 4, 5] → 15.

### Approaches
| Method | Time | Space | Notes |
|--------|------|-------|-------|
| Loop | O(n) | O(1) | Simple, efficient |
| Streams | O(n) | O(1) | Functional style |
| Recursion | O(n) | O(n) | Demonstrates concept |

### Code Example (Java)
\`\`\`java
import java.util.*;

public class ArraySum {
    
    // Method 1: Simple Loop (Recommended)
    public static int sum1(int[] arr) {
        int total = 0;
        for (int num : arr) {
            total += num;
        }
        return total;
    }
    
    // Method 2: Using Streams (Java 8+)
    public static int sum2(int[] arr) {
        return Arrays.stream(arr).sum();
    }
    
    // Method 3: Recursion
    public static int sum3(int[] arr, int index) {
        if (index >= arr.length) return 0;  // Base case
        return arr[index] + sum3(arr, index + 1);  // Recursive case
    }
    
    // Method 4: Parallel stream for large arrays
    public static long sumParallel(int[] arr) {
        return Arrays.stream(arr).parallel().asLongStream().sum();
    }
    
    // Related: Find average
    public static double average(int[] arr) {
        return Arrays.stream(arr).average().orElse(0);
    }
    
    // Related: Find sum of even/odd numbers
    public static int sumEven(int[] arr) {
        return Arrays.stream(arr).filter(n -> n % 2 == 0).sum();
    }
    
    // Related: Running sum
    public static int[] runningSum(int[] arr) {
        int[] result = new int[arr.length];
        result[0] = arr[0];
        
        for (int i = 1; i < arr.length; i++) {
            result[i] = result[i - 1] + arr[i];
        }
        
        return result;
        // [1, 2, 3, 4] → [1, 3, 6, 10]
    }
    
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        System.out.println(sum1(arr));           // 15
        System.out.println(sum2(arr));           // 15
        System.out.println(sum3(arr, 0));        // 15
        System.out.println(average(arr));        // 3.0
        System.out.println(Arrays.toString(runningSum(arr)));  // [1, 3, 6, 10, 15]
    }
}
\`\`\`

### Why This Matters
Basic array operation. Often a building block for more complex algorithms.`
  },
  {
    id: 'tcs145',
    question: 'Implement debounce function',
    answer: `### Simple Explanation
Debounce delays function execution until a pause in calls. It's used to limit how often a function runs - like waiting for a user to stop typing before searching.

### Real-World Analogy
Like an elevator door - it doesn't close while people keep pressing the button. It waits until no one has pressed for a few seconds.

### Code Example (JavaScript - used in frontend)
\`\`\`javascript
// Debounce Implementation
function debounce(func, delay) {
    let timeoutId;
    
    return function(...args) {
        // Clear previous timer
        clearTimeout(timeoutId);
        
        // Set new timer - only executes if no new calls for 'delay' ms
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Usage: Search API call
const searchInput = document.getElementById('search');

const handleSearch = (query) => {
    console.log('Searching for:', query);
    // API call here
};

const debouncedSearch = debounce(handleSearch, 300);

searchInput.addEventListener('input', (e) => {
    debouncedSearch(e.target.value);
});

// User types "hello" quickly:
// Without debounce: 5 API calls (h, he, hel, hell, hello)
// With debounce: 1 API call (hello) after 300ms pause


// THROTTLE (related concept) - execute at regular intervals
function throttle(func, limit) {
    let inThrottle = false;
    
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            
            setTimeout(() => {
                inThrottle = false;
            }, limit);
        }
    };
}

// Usage: Scroll handler
const throttledScroll = throttle(() => {
    console.log('Scroll position:', window.scrollY);
}, 100);

window.addEventListener('scroll', throttledScroll);
// Logs at most once every 100ms during scrolling


// Comparison:
// Debounce: Execute after the storm calms
// Throttle: Execute at regular intervals during the storm
\`\`\`

### Code Example (Java)
\`\`\`java
import java.util.concurrent.*;

public class Debouncer {
    private ScheduledExecutorService executor = Executors.newSingleThreadScheduledExecutor();
    private ScheduledFuture<?> scheduledFuture;
    private final long delay;
    
    public Debouncer(long delayMs) {
        this.delay = delayMs;
    }
    
    public void debounce(Runnable task) {
        // Cancel previous scheduled task
        if (scheduledFuture != null && !scheduledFuture.isDone()) {
            scheduledFuture.cancel(false);
        }
        
        // Schedule new task
        scheduledFuture = executor.schedule(task, delay, TimeUnit.MILLISECONDS);
    }
    
    public static void main(String[] args) throws InterruptedException {
        Debouncer debouncer = new Debouncer(500);
        
        // Simulate rapid calls
        for (int i = 0; i < 5; i++) {
            int finalI = i;
            debouncer.debounce(() -> System.out.println("Executed: " + finalI));
            Thread.sleep(100);
        }
        
        Thread.sleep(1000);  // Wait for execution
        // Only prints "Executed: 4" - last one after 500ms pause
    }
}
\`\`\`

### Why This Matters
Critical for performance in web applications. Prevents excessive API calls and improves user experience.`
  },
];

export default codingQuestions;
