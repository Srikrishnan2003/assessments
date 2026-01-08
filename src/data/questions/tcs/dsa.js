// TCS Prime Interview - Data Structures & Algorithms Questions

export const dsaQuestions = [
    {
        id: 'tcs029',
        question: 'Explain different data structures',
        answer: `• **Array**: Contiguous memory, O(1) access, O(n) insertion
• **Linked List**: Non-contiguous, O(1) insertion, O(n) access
• **Stack**: LIFO, used in recursion, undo operations
• **Queue**: FIFO, used in BFS, task scheduling
• **Hash Table**: Key-value pairs, O(1) average access
• **Tree**: Hierarchical, used in file systems, DOM
• **Graph**: Nodes and edges, used in networks, social media`
    },
    {
        id: 'tcs030',
        question: 'What is time complexity? Explain Big O notation',
        answer: `Time complexity measures algorithm efficiency as input grows.

• **O(1)**: Constant - array access
• **O(log n)**: Logarithmic - binary search
• **O(n)**: Linear - single loop
• **O(n log n)**: Linearithmic - merge sort
• **O(n²)**: Quadratic - nested loops
• **O(2ⁿ)**: Exponential - recursive fibonacci`
    },
    {
        id: 'tcs031',
        question: 'Explain sorting algorithms',
        answer: `• **Bubble Sort**: O(n²), simple, compares adjacent elements
• **Quick Sort**: O(n log n) average, divide and conquer
• **Merge Sort**: O(n log n), stable, divide and conquer
• **Insertion Sort**: O(n²), efficient for small/nearly sorted data`
    },
    {
        id: 'tcs032',
        question: 'What is recursion?',
        answer: `A function calling itself to solve smaller instances of the same problem. Requires **base case** to stop recursion.

\`\`\`javascript
function factorial(n) {
  if (n <= 1) return 1; // Base case
  return n * factorial(n - 1); // Recursive case
}
\`\`\``
    },
    {
        id: 'tcs033',
        question: 'Explain searching algorithms',
        answer: `• **Linear Search**: O(n), checks each element sequentially
• **Binary Search**: O(log n), requires sorted array, divides search space in half`
    },
    {
        id: 'tcs034',
        question: 'What are linked lists? Types?',
        answer: `Linear data structure where elements are stored in nodes with pointers.
• **Singly Linked**: Each node points to next
• **Doubly Linked**: Each node points to next and previous
• **Circular**: Last node points to first`
    },
    {
        id: 'tcs035',
        question: 'Explain stack and queue operations',
        answer: `**Stack (LIFO):**
• \`push(item)\` - add to top
• \`pop()\` - remove from top
• \`peek()\` - view top element

**Queue (FIFO):**
• \`enqueue(item)\` - add to rear
• \`dequeue()\` - remove from front
• \`front()\` - view front element`
    },
];

export default dsaQuestions;
