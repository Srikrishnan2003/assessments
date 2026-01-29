
export const dsaAdvancedQuestions = [
    {
        id: 'hi-dsa-adv-001',
        question: 'Merge Sort vs Quick Sort.',
        answer: `### Sorting Dual
| Feature | Merge Sort | Quick Sort |
|:---|:---|:---|
| **Paradigm** | Divide and Conquer. | Divide and Conquer. |
| **Complexity (Avg)** | O(N log N). | O(N log N). |
| **Worst Case** | O(N log N) (Consistent). | O(N^2) (Pivot selection bad). |
| **Space** | O(N) (Needs extra array). | O(log N) (Recursion stack). |
| **Stability** | Stable. | Unstable. |
| **Usage** | Linked Lists, Large Data. | Arrays (In-place). |`
    },
    {
        id: 'hi-dsa-adv-002',
        question: 'Trapping Rain Water Problem.',
        answer: `### Logic (Two Pointer)
*   Compute maximum height bar on left and right for every index.
*   Water at index i = \`Min(LeftMax, RightMax) - Height[i]\`.
*   **Optimized:** Use two pointers (left, right) to calculate min valid height on the fly.`
    },
    {
        id: 'hi-dsa-adv-003',
        question: 'Breadth First Search (BFS) vs Depth First Search (DFS).',
        answer: `### Graph Traversals
*   **BFS (Queue):**
    *   Level by level.
    *   Shortest Path in unweighted graph.
*   **DFS (Stack/Recursion):**
    *   Go deep to leaf, then backtrack.
    *   Maze solving, Cycle detection.`
    },
    {
        id: 'hi-dsa-adv-004',
        question: 'Longest Substring Without Repeating Characters.',
        answer: `### Sliding Window (HashMap)
1.  Use pointers \`left\` and \`right\`.
2.  Store characters in Map/Set.
3.  If char exists, move \`left\` to \`index + 1\`.
4.  Update max length.
*   **Complexity:** O(N).`
    },
    {
        id: 'hi-dsa-adv-005',
        question: 'Detect Loop in a Graph.',
        answer: `### Cycle Detection
*   **Directed Graph:** DFS + Recursion Stack (keep track of nodes currently in recursion).
*   **Undirected Graph:** DFS + Parent Pointer (if visited node is NOT parent, cycle exists) OR Union-Find algorithm.`
    },
    {
        id: 'hi-dsa-adv-006',
        question: 'What is a Trie (Prefix Tree)?',
        answer: `### Trie
*   Tree structure for storing strings. Each node represents a character.
*   **Usage:** Autocomplete, Spell Checker.
*   **Search Complexity:** O(L) where L is length of word (Extremely fast compared to Hashset for prefix search).`
    },
    {
        id: 'hi-dsa-adv-007',
        question: 'Dynamic Programming (DP) Concept.',
        answer: `### Dynamic Programming
Breaking problem into subproblems and storing results (Memoization) to avoid re-computation.
*   **Top-Down:** Recursion + Memoization.
*   **Bottom-Up:** Iteration + Table.
*   **Example:** Fibonacci, Knapsack Problem.`
    },
    {
        id: 'hi-dsa-adv-008',
        question: 'Invert a Binary Tree.',
        answer: `### Logic
Swap left and right children for every node recursively.
\`\`\`java
Node invert(Node root) {
    if (root == null) return null;
    Node left = invert(root.left);
    Node right = invert(root.right);
    root.left = right;
    root.right = left;
    return root;
}
\`\`\``
    },
    {
        id: 'hi-dsa-adv-009',
        question: 'Find Intersection of Two Linked Lists.',
        answer: `### Two Pointers Trick
1.  Ptr A traverses List A, then List B.
2.  Ptr B traverses List B, then List A.
3.  They will meet at intersection point after equal distance.
*   **Complexity:** O(N+M).`
    },
    {
        id: 'hi-dsa-adv-010',
        question: 'Balanced Parentheses Problem.',
        answer: `### Using Stack
1.  Push opening braces \`(\`, \`{\`.
2.  On closing brace, pop and check if matches.
3.  If stack empty at start of closing brace or non-empty at end -> Invalid.`
    },
    {
        id: 'hi-dsa-adv-011',
        question: 'Lowest Common Ancestor (LCA) in BST.',
        answer: `### Logic
*   If both nodes < root -> Go Left.
*   If both nodes > root -> Go Right.
*   Else -> Root is LCA.`
    },
    {
        id: 'hi-dsa-adv-012',
        question: 'Explain Heaps (Min-Heap / Max-Heap).',
        answer: `### Heap
Complete Binary Tree where parent is smaller (Min) or larger (Max) than children.
*   **Usage:** Priority Queue, Scheduling, Heap Sort.
*   **Time:** Insert O(log N), Get Max O(1).`
    }
];
