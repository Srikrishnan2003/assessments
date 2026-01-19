// TCS Prime Interview - Data Structures & Algorithms Questions

export const dsaQuestions = [
    {
        id: 'tcs029',
        question: 'Explain different data structures',
        answer: `### Simple Explanation
Data structures are ways to organize and store data. Each structure has strengths and weaknesses - choosing the right one for your problem is key to efficient code.

### Real-World Analogy
| Structure | Real-World Example |
|-----------|-------------------|
| **Array** | Mailboxes in a row - numbered, fixed positions |
| **Linked List** | Train carriages - each points to the next |
| **Stack** | Stack of plates - take from top only |
| **Queue** | Movie theater line - first in, first out |
| **Hash Table** | Dictionary - look up by word, not position |
| **Tree** | Family tree - hierarchical relationships |
| **Graph** | Road map - cities connected by roads |

### Technical Details
| Structure | Access | Insert | Delete | Use Case |
|-----------|--------|--------|--------|----------|
| **Array** | O(1) | O(n) | O(n) | Random access, fixed size |
| **Linked List** | O(n) | O(1) | O(1) | Frequent insertions/deletions |
| **Stack** | O(1) | O(1) | O(1) | Undo/redo, recursion |
| **Queue** | O(1) | O(1) | O(1) | Task scheduling, BFS |
| **Hash Table** | O(1) avg | O(1) avg | O(1) avg | Fast lookups by key |
| **Binary Tree** | O(log n) | O(log n) | O(log n) | Sorted data, searching |
| **Graph** | Varies | Varies | Varies | Networks, relationships |

### Code Example
\`\`\`java
import java.util.*;

public class DataStructuresDemo {
    public static void main(String[] args) {
        
        // ARRAY - Fixed size, direct access
        int[] arr = new int[5];
        arr[0] = 10;  // O(1) access by index
        
        // ARRAYLIST - Dynamic array
        ArrayList<Integer> list = new ArrayList<>();
        list.add(10);  // O(1) amortized
        list.get(0);   // O(1) access
        
        // LINKED LIST - Fast insert/delete
        LinkedList<String> linked = new LinkedList<>();
        linked.addFirst("First");  // O(1)
        linked.addLast("Last");    // O(1)
        
        // STACK - Last In, First Out (LIFO)
        Deque<Integer> stack = new ArrayDeque<>();
        stack.push(1);   // Add to top
        stack.push(2);
        stack.pop();     // Remove from top → 2
        stack.peek();    // View top → 1
        
        // QUEUE - First In, First Out (FIFO)
        Queue<String> queue = new LinkedList<>();
        queue.offer("First");   // Add to rear
        queue.offer("Second");
        queue.poll();           // Remove from front → "First"
        
        // HASH MAP - Key-value pairs, O(1) lookup
        HashMap<String, Integer> map = new HashMap<>();
        map.put("apple", 5);    // O(1)
        map.get("apple");       // O(1) → 5
        map.containsKey("apple"); // O(1)
        
        // HASH SET - Unique elements, O(1) lookup
        HashSet<String> set = new HashSet<>();
        set.add("unique");      // O(1)
        set.contains("unique"); // O(1)
        
        // TREE SET - Sorted, O(log n) operations
        TreeSet<Integer> treeSet = new TreeSet<>();
        treeSet.add(5);
        treeSet.add(1);
        treeSet.add(3);
        // Automatically sorted: [1, 3, 5]
        
        // PRIORITY QUEUE - Min/Max heap
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        pq.offer(5);
        pq.offer(1);
        pq.offer(3);
        pq.poll();  // → 1 (smallest first)
    }
}
\`\`\`

### Why It Matters
Choosing the right data structure can make your algorithm 1000x faster. Use HashMaps for lookups, ArrayLists for random access, LinkedLists for frequent insertions.`
    },
    {
        id: 'tcs030',
        question: 'What is time complexity? Explain Big O notation',
        answer: `### Simple Explanation
Time complexity measures how the running time of an algorithm grows as the input size increases. Big O notation describes the worst-case upper bound - how bad can it get?

### Real-World Analogy
Finding a name in a phone book:
- **O(1)**: Memorized phone number - instant, regardless of book size
- **O(log n)**: Binary search - flip to middle, narrow down (phonebook works this way)
- **O(n)**: Read every name from start - time doubles if names double
- **O(n²)**: Compare every name with every other name - explodes quickly

### Technical Details
| Complexity | Name | Example | 1000 items |
|------------|------|---------|------------|
| **O(1)** | Constant | Array access | 1 operation |
| **O(log n)** | Logarithmic | Binary search | 10 operations |
| **O(n)** | Linear | Single loop | 1000 operations |
| **O(n log n)** | Linearithmic | Merge sort | 10,000 operations |
| **O(n²)** | Quadratic | Nested loops | 1,000,000 operations |
| **O(2ⁿ)** | Exponential | Recursive fib | Astronomical |

### Code Example
\`\`\`java
public class TimeComplexityDemo {
    
    // O(1) - Constant Time
    // Same time regardless of array size
    public int getFirst(int[] arr) {
        return arr[0];  // Always 1 operation
    }
    
    // O(log n) - Logarithmic Time
    // Halves the problem each step
    public int binarySearch(int[] arr, int target) {
        int left = 0, right = arr.length - 1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (arr[mid] == target) return mid;
            if (arr[mid] < target) left = mid + 1;
            else right = mid - 1;
        }
        return -1;
        // 1000 elements → ~10 comparisons
        // 1,000,000 elements → ~20 comparisons
    }
    
    // O(n) - Linear Time
    // Time grows linearly with input
    public int sum(int[] arr) {
        int total = 0;
        for (int num : arr) {  // n iterations
            total += num;
        }
        return total;
    }
    
    // O(n log n) - Linearithmic Time
    // Efficient sorting algorithms
    public void mergeSort(int[] arr) {
        Arrays.sort(arr);  // Java uses Timsort - O(n log n)
    }
    
    // O(n²) - Quadratic Time
    // Nested loops - AVOID for large inputs
    public void bubbleSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n; i++) {         // n iterations
            for (int j = 0; j < n - 1; j++) {  // n iterations each
                if (arr[j] > arr[j + 1]) {
                    // swap
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        // 1000 elements → 1,000,000 operations
    }
    
    // O(2^n) - Exponential Time
    // Avoid! Use memoization
    public int fibonacciSlow(int n) {
        if (n <= 1) return n;
        return fibonacciSlow(n - 1) + fibonacciSlow(n - 2);
        // n=40 takes seconds, n=50 takes forever
    }
    
    // O(n) - Fibonacci with memoization
    public int fibonacciOptimized(int n) {
        if (n <= 1) return n;
        int prev = 0, curr = 1;
        for (int i = 2; i <= n; i++) {
            int next = prev + curr;
            prev = curr;
            curr = next;
        }
        return curr;
    }
}
\`\`\`

### Why It Matters
Understanding time complexity helps you write efficient code and choose the right algorithms. O(n²) might work for 100 items but crash with 10,000.`
    },
    {
        id: 'tcs031',
        question: 'Explain sorting algorithms',
        answer: `### Simple Explanation
Sorting algorithms arrange elements in order (ascending/descending). Different algorithms have different trade-offs in speed, memory, and stability.

### Real-World Analogy
- **Bubble Sort**: Bubbles rising in water - larger bubbles rise to top
- **Selection Sort**: Finding the smallest card, placing it first, repeat
- **Merge Sort**: Divide deck into smaller piles, sort each, merge together
- **Quick Sort**: Pick a pivot card, put smaller left, larger right, repeat

### Technical Details
| Algorithm | Time (Best) | Time (Worst) | Space | Stable | Use Case |
|-----------|-------------|--------------|-------|--------|----------|
| **Bubble** | O(n) | O(n²) | O(1) | Yes | Learning only |
| **Selection** | O(n²) | O(n²) | O(1) | No | Small data |
| **Insertion** | O(n) | O(n²) | O(1) | Yes | Nearly sorted |
| **Merge** | O(n log n) | O(n log n) | O(n) | Yes | Guaranteed performance |
| **Quick** | O(n log n) | O(n²) | O(log n) | No | General purpose |

### Code Example
\`\`\`java
public class SortingAlgorithms {
    
    // BUBBLE SORT - O(n²), Simple but slow
    // Compare adjacent elements, swap if wrong order
    public void bubbleSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            boolean swapped = false;
            for (int j = 0; j < n - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    // Swap
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swapped = true;
                }
            }
            if (!swapped) break;  // Already sorted
        }
    }
    
    // SELECTION SORT - O(n²)
    // Find minimum, place at correct position
    public void selectionSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            int minIdx = i;
            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIdx]) {
                    minIdx = j;
                }
            }
            // Swap minimum with current position
            int temp = arr[i];
            arr[i] = arr[minIdx];
            arr[minIdx] = temp;
        }
    }
    
    // MERGE SORT - O(n log n), Stable, Uses extra space
    // Divide and conquer
    public void mergeSort(int[] arr, int left, int right) {
        if (left < right) {
            int mid = left + (right - left) / 2;
            
            mergeSort(arr, left, mid);      // Sort left half
            mergeSort(arr, mid + 1, right); // Sort right half
            merge(arr, left, mid, right);   // Merge sorted halves
        }
    }
    
    private void merge(int[] arr, int left, int mid, int right) {
        int[] leftArr = Arrays.copyOfRange(arr, left, mid + 1);
        int[] rightArr = Arrays.copyOfRange(arr, mid + 1, right + 1);
        
        int i = 0, j = 0, k = left;
        while (i < leftArr.length && j < rightArr.length) {
            if (leftArr[i] <= rightArr[j]) {
                arr[k++] = leftArr[i++];
            } else {
                arr[k++] = rightArr[j++];
            }
        }
        while (i < leftArr.length) arr[k++] = leftArr[i++];
        while (j < rightArr.length) arr[k++] = rightArr[j++];
    }
    
    // QUICK SORT - O(n log n) average, O(n²) worst
    // Pick pivot, partition around it
    public void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            int pivotIndex = partition(arr, low, high);
            quickSort(arr, low, pivotIndex - 1);  // Sort left
            quickSort(arr, pivotIndex + 1, high); // Sort right
        }
    }
    
    private int partition(int[] arr, int low, int high) {
        int pivot = arr[high];  // Choose last element as pivot
        int i = low - 1;
        
        for (int j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                // Swap arr[i] and arr[j]
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        // Place pivot in correct position
        int temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;
        return i + 1;
    }
    
    // In practice, use built-in sort (Tim Sort - hybrid)
    public void javaSort(int[] arr) {
        Arrays.sort(arr);  // O(n log n), stable
    }
}
\`\`\`

### Why It Matters
Sorting is fundamental to many algorithms. While you'll usually use built-in sorts, understanding the algorithms helps you choose appropriately and debug performance issues.`
    },
    {
        id: 'tcs032',
        question: 'What is recursion?',
        answer: `### Simple Explanation
Recursion is when a function calls itself to solve a smaller version of the same problem. It needs a **base case** (stopping condition) and a **recursive case** (the self-call).

### Real-World Analogy
Russian nesting dolls (Matryoshka):
- Open a doll → find smaller doll inside → open it → find even smaller doll
- **Base case**: Smallest doll (no more dolls inside)
- **Recursive case**: Open current doll, process the smaller one inside

### Technical Details
**Every recursive solution needs:**
1. **Base case** - When to stop recursing
2. **Recursive case** - Call itself with smaller input
3. **Progress** - Each call must move toward base case

| Iterative | Recursive |
|-----------|-----------|
| Uses loops | Uses function calls |
| Generally faster | Uses call stack (memory overhead) |
| More explicit | Often more elegant |
| No stack overflow risk | Can overflow stack |

### Code Example
\`\`\`java
public class RecursionDemo {
    
    // FACTORIAL: n! = n × (n-1) × (n-2) × ... × 1
    public int factorial(int n) {
        // Base case
        if (n <= 1) return 1;
        
        // Recursive case
        return n * factorial(n - 1);
        
        // factorial(5) = 5 * factorial(4)
        //              = 5 * 4 * factorial(3)
        //              = 5 * 4 * 3 * factorial(2)
        //              = 5 * 4 * 3 * 2 * factorial(1)
        //              = 5 * 4 * 3 * 2 * 1 = 120
    }
    
    // FIBONACCI: F(n) = F(n-1) + F(n-2)
    public int fibonacci(int n) {
        // Base cases
        if (n <= 0) return 0;
        if (n == 1) return 1;
        
        // Recursive case
        return fibonacci(n - 1) + fibonacci(n - 2);
        // Note: This is O(2^n) - very slow! Use memoization
    }
    
    // FIBONACCI with Memoization - O(n)
    private int[] memo;
    
    public int fibonacciMemo(int n) {
        memo = new int[n + 1];
        Arrays.fill(memo, -1);
        return fibHelper(n);
    }
    
    private int fibHelper(int n) {
        if (n <= 0) return 0;
        if (n == 1) return 1;
        
        if (memo[n] != -1) return memo[n];  // Already calculated
        
        memo[n] = fibHelper(n - 1) + fibHelper(n - 2);
        return memo[n];
    }
    
    // SUM OF ARRAY - Recursive approach
    public int arraySum(int[] arr, int index) {
        // Base case: reached end of array
        if (index >= arr.length) return 0;
        
        // Recursive case: current element + sum of rest
        return arr[index] + arraySum(arr, index + 1);
    }
    
    // BINARY SEARCH - Recursive
    public int binarySearch(int[] arr, int target, int left, int right) {
        // Base case: not found
        if (left > right) return -1;
        
        int mid = left + (right - left) / 2;
        
        if (arr[mid] == target) return mid;
        
        if (arr[mid] < target) {
            return binarySearch(arr, target, mid + 1, right);  // Search right
        } else {
            return binarySearch(arr, target, left, mid - 1);   // Search left
        }
    }
    
    // REVERSING A STRING
    public String reverse(String str) {
        // Base case
        if (str.isEmpty()) return str;
        
        // Recursive case: last char + reverse of rest
        return str.charAt(str.length() - 1) 
               + reverse(str.substring(0, str.length() - 1));
    }
    
    // Tail Recursion (can be optimized by compiler)
    public int factorialTail(int n, int accumulator) {
        if (n <= 1) return accumulator;
        return factorialTail(n - 1, n * accumulator);
    }
    // Usage: factorialTail(5, 1)
}
\`\`\`

### Why It Matters
Many problems (tree traversal, divide-and-conquer) are naturally recursive. Understanding recursion is essential for solving coding problems and understanding complex algorithms.`
    },
    {
        id: 'tcs033',
        question: 'Explain searching algorithms',
        answer: `### Simple Explanation
Searching algorithms find elements in a collection:
- **Linear Search**: Check each element one by one - slow but works on any data
- **Binary Search**: Divide and conquer - fast but requires sorted data

### Real-World Analogy
- **Linear Search**: Looking for a book by checking every shelf, one by one
- **Binary Search**: Using a phone book - open to middle, decide left or right half, repeat

### Technical Details
| Algorithm | Time | Space | Requirement |
|-----------|------|-------|-------------|
| **Linear Search** | O(n) | O(1) | None |
| **Binary Search** | O(log n) | O(1) | Sorted array |

### Code Example
\`\`\`java
public class SearchingAlgorithms {
    
    // LINEAR SEARCH - O(n)
    // Works on unsorted data, checks every element
    public int linearSearch(int[] arr, int target) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == target) {
                return i;  // Found at index i
            }
        }
        return -1;  // Not found
    }
    
    // BINARY SEARCH - O(log n)
    // Requires SORTED array, halves search space each step
    public int binarySearch(int[] arr, int target) {
        int left = 0;
        int right = arr.length - 1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;  // Avoids overflow
            
            if (arr[mid] == target) {
                return mid;  // Found!
            }
            if (arr[mid] < target) {
                left = mid + 1;   // Search right half
            } else {
                right = mid - 1;  // Search left half
            }
        }
        return -1;  // Not found
        
        // Example: Find 7 in [1, 3, 5, 7, 9, 11, 13]
        // Step 1: mid=7, target=7, FOUND!
        
        // Example: Find 9 in [1, 3, 5, 7, 9, 11, 13]
        // Step 1: mid=7, 7<9, search right [9, 11, 13]
        // Step 2: mid=11, 11>9, search left [9]
        // Step 3: mid=9, FOUND!
    }
    
    // BINARY SEARCH - Recursive version
    public int binarySearchRecursive(int[] arr, int target, int left, int right) {
        if (left > right) return -1;  // Base case: not found
        
        int mid = left + (right - left) / 2;
        
        if (arr[mid] == target) return mid;
        
        if (arr[mid] < target) {
            return binarySearchRecursive(arr, target, mid + 1, right);
        } else {
            return binarySearchRecursive(arr, target, left, mid - 1);
        }
    }
    
    // BINARY SEARCH - Find insertion position
    public int searchInsertPosition(int[] arr, int target) {
        int left = 0, right = arr.length - 1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (arr[mid] == target) return mid;
            if (arr[mid] < target) left = mid + 1;
            else right = mid - 1;
        }
        return left;  // Position where target should be inserted
    }
    
    // Using Java's built-in binary search
    public void javaBuiltIn() {
        int[] arr = {1, 3, 5, 7, 9};
        int index = Arrays.binarySearch(arr, 5);  // Returns 2
        // Returns negative value if not found
    }
    
    // Performance comparison
    // Array size: 1,000,000 elements
    // Linear Search: Up to 1,000,000 comparisons
    // Binary Search: At most 20 comparisons (log₂ 1,000,000 ≈ 20)
}
\`\`\`

### Why It Matters
Binary search is 50,000x faster than linear search for large datasets. Always sort data if you need frequent searches. Binary search is the foundation for many advanced algorithms.`
    },
    {
        id: 'tcs034',
        question: 'What are linked lists? Types?',
        answer: `### Simple Explanation
A linked list is a sequence of nodes where each node contains data and a reference (pointer) to the next node. Unlike arrays, elements are not stored in contiguous memory.

### Real-World Analogy
Like a treasure hunt with clues:
- Each clue (node) has a hint (data) and points to the next location
- To find something, you must follow clues from the start
- Easy to add new clues anywhere in the chain

### Technical Details
| Type | Description | Navigation |
|------|-------------|------------|
| **Singly Linked** | Each node points to next | Forward only |
| **Doubly Linked** | Points to next AND previous | Both directions |
| **Circular** | Last node points to first | Endless loop |

| Operation | Array | Linked List |
|-----------|-------|-------------|
| Access by index | O(1) | O(n) |
| Insert at start | O(n) | O(1) |
| Insert at end | O(1) | O(n) or O(1)* |
| Delete | O(n) | O(1) if node known |

*O(1) if tail pointer is maintained

### Code Example
\`\`\`java
// SINGLY LINKED LIST
class SinglyLinkedList {
    class Node {
        int data;
        Node next;
        
        Node(int data) {
            this.data = data;
            this.next = null;
        }
    }
    
    private Node head;
    
    // Insert at beginning - O(1)
    public void insertFirst(int data) {
        Node newNode = new Node(data);
        newNode.next = head;
        head = newNode;
    }
    
    // Insert at end - O(n)
    public void insertLast(int data) {
        Node newNode = new Node(data);
        if (head == null) {
            head = newNode;
            return;
        }
        Node current = head;
        while (current.next != null) {
            current = current.next;
        }
        current.next = newNode;
    }
    
    // Delete node with value - O(n)
    public void delete(int value) {
        if (head == null) return;
        
        if (head.data == value) {
            head = head.next;
            return;
        }
        
        Node current = head;
        while (current.next != null && current.next.data != value) {
            current = current.next;
        }
        
        if (current.next != null) {
            current.next = current.next.next;
        }
    }
    
    // Traverse - O(n)
    public void printList() {
        Node current = head;
        while (current != null) {
            System.out.print(current.data + " -> ");
            current = current.next;
        }
        System.out.println("null");
    }
}


// DOUBLY LINKED LIST
class DoublyLinkedList {
    class Node {
        int data;
        Node prev;
        Node next;
        
        Node(int data) {
            this.data = data;
        }
    }
    
    private Node head;
    private Node tail;
    
    // Insert at end - O(1) with tail pointer
    public void insertLast(int data) {
        Node newNode = new Node(data);
        if (tail == null) {
            head = tail = newNode;
        } else {
            tail.next = newNode;
            newNode.prev = tail;
            tail = newNode;
        }
    }
    
    // Traverse backward - O(n)
    public void printReverse() {
        Node current = tail;
        while (current != null) {
            System.out.print(current.data + " <- ");
            current = current.prev;
        }
    }
}

// Java's Built-in LinkedList
import java.util.LinkedList;

LinkedList<String> list = new LinkedList<>();
list.addFirst("First");    // O(1)
list.addLast("Last");      // O(1)
list.add(1, "Middle");     // O(n)
list.removeFirst();        // O(1)
list.removeLast();         // O(1)
\`\`\`

### Why It Matters
Linked lists excel at insertions/deletions but are slow for random access. Use when you need frequent insertions/deletions or don't know the size in advance.`
    },
    {
        id: 'tcs035',
        question: 'Explain stack and queue operations',
        answer: `### Simple Explanation
- **Stack** (LIFO): Last In, First Out - like a stack of plates
- **Queue** (FIFO): First In, First Out - like a line at a ticket counter

### Real-World Analogy
- **Stack**: Pile of books - you can only add/remove from the top
- **Queue**: Bank queue - first person to arrive gets served first

### Technical Details
**Stack Operations:**
| Operation | Description | Time |
|-----------|-------------|------|
| push(x) | Add to top | O(1) |
| pop() | Remove from top | O(1) |
| peek() | View top | O(1) |
| isEmpty() | Check if empty | O(1) |

**Queue Operations:**
| Operation | Description | Time |
|-----------|-------------|------|
| enqueue(x) | Add to rear | O(1) |
| dequeue() | Remove from front | O(1) |
| front() | View front | O(1) |
| isEmpty() | Check if empty | O(1) |

### Code Example
\`\`\`java
import java.util.*;

public class StackQueueDemo {
    
    public static void main(String[] args) {
        
        // STACK - Using Deque (recommended)
        Deque<Integer> stack = new ArrayDeque<>();
        
        stack.push(10);    // Add to top
        stack.push(20);
        stack.push(30);    // Stack: [30, 20, 10]
        
        System.out.println(stack.peek());  // 30 (view top)
        System.out.println(stack.pop());   // 30 (remove top)
        System.out.println(stack.pop());   // 20
        // Stack now: [10]
        
        // Stack use case: Balanced parentheses
        System.out.println(isBalanced("([{}])"));  // true
        System.out.println(isBalanced("([)]"));    // false
        
        
        // QUEUE - Using LinkedList or ArrayDeque
        Queue<String> queue = new LinkedList<>();
        
        queue.offer("First");   // Add to rear
        queue.offer("Second");
        queue.offer("Third");   // Queue: [First, Second, Third]
        
        System.out.println(queue.peek());  // "First" (view front)
        System.out.println(queue.poll());  // "First" (remove front)
        System.out.println(queue.poll());  // "Second"
        // Queue now: [Third]
        
        
        // PRIORITY QUEUE - Elements ordered by priority
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        pq.offer(30);
        pq.offer(10);
        pq.offer(20);
        
        System.out.println(pq.poll());  // 10 (smallest first)
        System.out.println(pq.poll());  // 20
        System.out.println(pq.poll());  // 30
        
        // Max heap (largest first)
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());
    }
    
    // Stack Application: Check balanced parentheses
    public static boolean isBalanced(String s) {
        Deque<Character> stack = new ArrayDeque<>();
        Map<Character, Character> pairs = Map.of(')', '(', ']', '[', '}', '{');
        
        for (char c : s.toCharArray()) {
            if (c == '(' || c == '[' || c == '{') {
                stack.push(c);
            } else if (pairs.containsKey(c)) {
                if (stack.isEmpty() || stack.pop() != pairs.get(c)) {
                    return false;
                }
            }
        }
        return stack.isEmpty();
    }
    
    // Queue Application: BFS (Breadth-First Search)
    public static void bfs(int[][] graph, int start) {
        Queue<Integer> queue = new LinkedList<>();
        boolean[] visited = new boolean[graph.length];
        
        queue.offer(start);
        visited[start] = true;
        
        while (!queue.isEmpty()) {
            int node = queue.poll();
            System.out.print(node + " ");
            
            for (int neighbor : graph[node]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.offer(neighbor);
                }
            }
        }
    }
}
\`\`\`

### Why It Matters
Stacks are used for: undo/redo, expression evaluation, recursion (call stack), backtracking.
Queues are used for: task scheduling, BFS, buffers, print spooling.`
    },
];

export default dsaQuestions;
