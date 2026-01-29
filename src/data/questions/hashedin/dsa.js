
export const dsaQuestions = [
    {
        id: 'hi-dsa-001',
        question: 'Reverse an Array.',
        answer: `**Input:** \`[1, 2, 3]\` -> **Output:** \`[3, 2, 1]\`
**Logic:** Use two pointers (start and end). Swap elements and move pointers towards center.`
    },
    {
        id: 'hi-dsa-002',
        question: 'Find the Minimum and Maximum element in an array.',
        answer: `**Logic:** Initialize min and max with the first element. Traverse array comparing each element.
**Time Complexity:** O(N).`
    },
    {
        id: 'hi-dsa-003',
        question: 'Check if Array is Sorted.',
        answer: `**Logic:** Iterate from 0 to N-1. If \`arr[i] > arr[i+1]\`, return false. Else return true.`
    },
    {
        id: 'hi-dsa-004',
        question: 'Reverse a Linked List.',
        answer: `**Iterative:**
1.  Initialize \`prev = null\`, \`current = head\`, \`next = null\`.
2.  Loop while \`current != null\`:
    *   \`next = current.next\`
    *   \`current.next = prev\`
    *   \`prev = current\`
    *   \`current = next\`
3.  Head = prev.`
    },
    {
        id: 'hi-dsa-005',
        question: 'Detect Cycle in a Linked List.',
        answer: `**Floyd’s Cycle Finding Algorithm (Tortoise and Hare):**
1.  Use two pointers: \`slow\` (move 1 step) and \`fast\` (move 2 steps).
2.  If \`slow == fast\`, cycle exists.
3.  If \`fast\` reaches null, no cycle.`
    },
    {
        id: 'hi-dsa-006',
        question: 'Find the middle of Linked List.',
        answer: `**Logic:** Use two pointers.
*   \`slow\` moves 1 step.
*   \`fast\` moves 2 steps.
*   When \`fast\` reaches end, \`slow\` is at the middle.`
    },
    {
        id: 'hi-dsa-007',
        question: 'Inorder Traversal of Binary Tree.',
        answer: `**Order:** Left -> Root -> Right.
**Recursive:**
\`\`\`java
void inorder(Node node) {
    if (node == null) return;
    inorder(node.left);
    print(node.data);
    inorder(node.right);
}
\`\`\``
    },
    {
        id: 'hi-dsa-008',
        question: 'Height of Binary Tree.',
        answer: `**Logic:** 1 + max(height(left), height(right)).
**Base Case:** If node is null, return 0.`
    },
    {
        id: 'hi-dsa-009',
        question: 'Sort an Array of 0s, 1s, and 2s (Dutch National Flag).',
        answer: `**Logic:** Use 3 pointers: low, mid, high.
*   If \`arr[mid] == 0\`: swap(low, mid), low++, mid++.
*   If \`arr[mid] == 1\`: mid++.
*   If \`arr[mid] == 2\`: swap(mid, high), high--.`
    },
    {
        id: 'hi-dsa-010',
        question: 'Two Sum Problem.',
        answer: `**Using HashMap:**
1.  Iterate array.
2.  Calculate \`complement = target - arr[i]\`.
3.  If map contains complement, return indices.
4.  Else put \`arr[i]\` into map.
**Time:** O(N).`
    },
    {
        id: 'hi-dsa-011',
        question: 'Valid Anagram.',
        answer: `**Logic:**
1.  If lengths differ -> false.
2.  Use frequency array (int[26]) or HashMap.
3.  Increment count for string s, decrement for string t.
4.  If all counts are 0 -> true.`
    },
    {
        id: 'hi-dsa-012',
        question: 'Implement Queue using Stack.',
        answer: `**Two Stacks Method:**
1.  **enqueue(x):** Push to \`stack1\`.
2.  **dequeue():**
    *   If \`stack2\` is empty, pop all from \`stack1\` and push to \`stack2\`.
    *   Pop from \`stack2\`.
3.  **peek():** Same logic as dequeue but peek instead of pop.`
    },
    {
        id: 'hi-dsa-013',
        question: 'Implement Stack using Queue.',
        answer: `**One Queue Method (Push Costly):**
1.  **push(x):**
    *   Add x to queue.
    *   Rotate the queue: \`for(i=0 to size-1) { add(remove()) }\`.
2.  **pop():** \`remove()\` from queue.
**Time:** Push O(N), Pop O(1).`
    },
    {
        id: 'hi-dsa-014',
        question: 'Copycat in Exam (String Manipulation).',
        answer: `**Problem:** Given a string, remove all duplicates adjacent to each other recursively? (Or variations like "Find common characters").
**Logic for removing adjacent duplicates:**
Use a Stack.
*   Iterate char c.
*   If stack not empty & top == c, pop().
*   Else push(c).
*   Result is stack contents reversed.`
    },
    {
        id: 'hi-dsa-015',
        question: 'Symmetric Tree (Mirror Image).',
        answer: `**Logic:**
Check if tree is a mirror of itself.
Recursive function \`isMirror(Node n1, Node n2)\`:
1.  If both null -> true.
2.  If one null -> false.
3.  If \`n1.val != n2.val\` -> false.
4.  Return \`isMirror(n1.left, n2.right) && isMirror(n1.right, n2.left)\`.`
    },
    {
        id: 'hi-dsa-016',
        question: 'Stock Buy and Sell (Maximize Profit).',
        answer: `**One Pass Approach:**
1.  Initialize \`minPrice = Infinity\`, \`maxProfit = 0\`.
2.  Iterate prices.
3.  Update \`minPrice = min(minPrice, price)\`.
4.  Update \`maxProfit = max(maxProfit, price - minPrice)\`.
**Time:** O(N).`
    }
];
