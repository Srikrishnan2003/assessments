// Data Structures Questions for BARC CSE Exam
export const dataStructuresQuestions = [
    // ARRAYS
    {
        id: "ds001",
        topic: "Data Structures",
        subtopic: "Arrays",
        difficulty: "Easy",
        question: "Time complexity to access an element by index in an array is:",
        options: ["A) O(1)", "B) O(n)", "C) O(log n)", "D) O(n²)"],
        answer: "A",
        explanation: "Arrays support direct indexing, so access is O(1) constant time."
    },
    {
        id: "ds002",
        topic: "Data Structures",
        subtopic: "Arrays",
        difficulty: "Easy",
        question: "What is the worst-case time complexity for inserting at the beginning of an array?",
        options: ["A) O(1)", "B) O(log n)", "C) O(n)", "D) O(n²)"],
        answer: "C",
        explanation: "All elements must be shifted right, requiring O(n) time."
    },
    {
        id: "ds003",
        topic: "Data Structures",
        subtopic: "Arrays",
        difficulty: "Medium",
        question: "In a 2D array A[10][20] with row-major order and base address 1000, element size 4, address of A[3][5] is:",
        options: ["A) 1260", "B) 1280", "C) 1300", "D) 1320"],
        answer: "A",
        explanation: "Address = 1000 + (3×20 + 5)×4 = 1000 + 65×4 = 1000 + 260 = 1260."
    },
    // LINKED LISTS
    {
        id: "ds004",
        topic: "Data Structures",
        subtopic: "Linked Lists",
        difficulty: "Easy",
        question: "Time complexity to insert at the head of a singly linked list is:",
        options: ["A) O(1)", "B) O(n)", "C) O(log n)", "D) O(n²)"],
        answer: "A",
        explanation: "Only need to update head pointer. No traversal required."
    },
    {
        id: "ds005",
        topic: "Data Structures",
        subtopic: "Linked Lists",
        difficulty: "Easy",
        question: "Which data structure uses LIFO (Last In First Out) principle?",
        options: ["A) Queue", "B) Stack", "C) Array", "D) Tree"],
        answer: "B",
        explanation: "Stack follows LIFO - last element added is first to be removed."
    },
    {
        id: "ds006",
        topic: "Data Structures",
        subtopic: "Linked Lists",
        difficulty: "Medium",
        question: "To detect a cycle in a linked list, which algorithm is commonly used?",
        options: ["A) Binary Search", "B) Floyd's Cycle Detection", "C) Dijkstra's Algorithm", "D) Prim's Algorithm"],
        answer: "B",
        explanation: "Floyd's algorithm uses two pointers (slow and fast) to detect cycles."
    },
    {
        id: "ds007",
        topic: "Data Structures",
        subtopic: "Linked Lists",
        difficulty: "Medium",
        question: "Time complexity to find middle element of a singly linked list in one pass is:",
        options: ["A) O(1)", "B) O(log n)", "C) O(n)", "D) O(n²)"],
        answer: "C",
        explanation: "Using slow-fast pointer technique, we traverse list once - O(n)."
    },
    // STACKS
    {
        id: "ds008",
        topic: "Data Structures",
        subtopic: "Stacks",
        difficulty: "Easy",
        question: "The postfix expression for infix (A+B)*C is:",
        options: ["A) AB+C*", "B) ABC+*", "C) *+ABC", "D) ABC*+"],
        answer: "A",
        explanation: "First A+B becomes AB+, then multiply by C gives AB+C*."
    },
    {
        id: "ds009",
        topic: "Data Structures",
        subtopic: "Stacks",
        difficulty: "Medium",
        question: "Which operation is NOT typically supported by a stack?",
        options: ["A) Push", "B) Pop", "C) Insert at middle", "D) Peek"],
        answer: "C",
        explanation: "Stack only supports push/pop at top. Cannot insert at middle."
    },
    {
        id: "ds010",
        topic: "Data Structures",
        subtopic: "Stacks",
        difficulty: "Medium",
        question: "Minimum number of stacks needed to implement a queue is:",
        options: ["A) 1", "B) 2", "C) 3", "D) 4"],
        answer: "B",
        explanation: "Two stacks can implement a queue - one for enqueue, one for dequeue."
    },
    // QUEUES
    {
        id: "ds011",
        topic: "Data Structures",
        subtopic: "Queues",
        difficulty: "Easy",
        question: "Queue follows which principle?",
        options: ["A) LIFO", "B) FIFO", "C) LILO", "D) Random"],
        answer: "B",
        explanation: "Queue follows FIFO - First In First Out."
    },
    {
        id: "ds012",
        topic: "Data Structures",
        subtopic: "Queues",
        difficulty: "Medium",
        question: "In a circular queue of size n, when is the queue full?",
        options: ["A) front == rear", "B) (rear+1)%n == front", "C) rear == n-1", "D) front == 0"],
        answer: "B",
        explanation: "Queue is full when next rear position equals front in circular array."
    },
    {
        id: "ds013",
        topic: "Data Structures",
        subtopic: "Queues",
        difficulty: "Medium",
        question: "A priority queue can be efficiently implemented using:",
        options: ["A) Array", "B) Linked List", "C) Heap", "D) Stack"],
        answer: "C",
        explanation: "Heap provides O(log n) insert and extract-min/max operations."
    },
    // TREES
    {
        id: "ds014",
        topic: "Data Structures",
        subtopic: "Trees",
        difficulty: "Easy",
        question: "Maximum number of nodes at level L of a binary tree is:",
        options: ["A) L", "B) 2L", "C) 2^L", "D) L²"],
        answer: "C",
        explanation: "Level 0 has 1 node, level 1 has 2, level L has 2^L nodes maximum."
    },
    {
        id: "ds015",
        topic: "Data Structures",
        subtopic: "Trees",
        difficulty: "Easy",
        question: "Inorder traversal of a BST gives elements in:",
        options: ["A) Random order", "B) Sorted ascending order", "C) Sorted descending order", "D) Level order"],
        answer: "B",
        explanation: "Inorder (Left-Root-Right) of BST visits nodes in ascending order."
    },
    {
        id: "ds016",
        topic: "Data Structures",
        subtopic: "Trees",
        difficulty: "Medium",
        question: "Height of a complete binary tree with n nodes is:",
        options: ["A) n", "B) n/2", "C) log₂(n)", "D) √n"],
        answer: "C",
        explanation: "Complete binary tree has height ⌊log₂(n)⌋."
    },
    {
        id: "ds017",
        topic: "Data Structures",
        subtopic: "Trees",
        difficulty: "Medium",
        question: "Number of leaf nodes in a full binary tree with n internal nodes is:",
        options: ["A) n-1", "B) n", "C) n+1", "D) 2n"],
        answer: "C",
        explanation: "In a full binary tree: leaves = internal nodes + 1."
    },
    {
        id: "ds018",
        topic: "Data Structures",
        subtopic: "Trees",
        difficulty: "Hard",
        question: "Time complexity of searching in a balanced BST is:",
        options: ["A) O(1)", "B) O(log n)", "C) O(n)", "D) O(n log n)"],
        answer: "B",
        explanation: "Balanced BST has height O(log n), so search is O(log n)."
    },
    // HEAPS
    {
        id: "ds019",
        topic: "Data Structures",
        subtopic: "Heaps",
        difficulty: "Easy",
        question: "In a max-heap, the root contains:",
        options: ["A) Minimum element", "B) Maximum element", "C) Median element", "D) Random element"],
        answer: "B",
        explanation: "In max-heap, parent ≥ children, so root is maximum."
    },
    {
        id: "ds020",
        topic: "Data Structures",
        subtopic: "Heaps",
        difficulty: "Medium",
        question: "Time complexity to build a heap from n elements is:",
        options: ["A) O(n)", "B) O(n log n)", "C) O(n²)", "D) O(log n)"],
        answer: "A",
        explanation: "Using heapify from bottom-up, building heap is O(n)."
    },
    {
        id: "ds021",
        topic: "Data Structures",
        subtopic: "Heaps",
        difficulty: "Medium",
        question: "In array representation of heap, left child of node at index i is at:",
        options: ["A) 2i", "B) 2i+1", "C) i/2", "D) i-1"],
        answer: "B",
        explanation: "For 0-indexed array: left child = 2i+1, right child = 2i+2."
    },
    // GRAPHS  
    {
        id: "ds022",
        topic: "Data Structures",
        subtopic: "Graphs",
        difficulty: "Easy",
        question: "Space complexity of adjacency matrix for a graph with V vertices is:",
        options: ["A) O(V)", "B) O(V²)", "C) O(E)", "D) O(V+E)"],
        answer: "B",
        explanation: "Adjacency matrix is V×V, so space is O(V²)."
    },
    {
        id: "ds023",
        topic: "Data Structures",
        subtopic: "Graphs",
        difficulty: "Easy",
        question: "BFS uses which data structure?",
        options: ["A) Stack", "B) Queue", "C) Priority Queue", "D) Linked List"],
        answer: "B",
        explanation: "BFS explores level by level using a queue."
    },
    {
        id: "ds024",
        topic: "Data Structures",
        subtopic: "Graphs",
        difficulty: "Easy",
        question: "DFS uses which data structure?",
        options: ["A) Stack", "B) Queue", "C) Array", "D) Hash Table"],
        answer: "A",
        explanation: "DFS goes deep first, uses stack (explicit or recursion)."
    },
    {
        id: "ds025",
        topic: "Data Structures",
        subtopic: "Graphs",
        difficulty: "Medium",
        question: "Time complexity of BFS on a graph with V vertices and E edges is:",
        options: ["A) O(V)", "B) O(E)", "C) O(V+E)", "D) O(VE)"],
        answer: "C",
        explanation: "BFS visits each vertex once and each edge once, so O(V+E)."
    },
    // HASHING
    {
        id: "ds026",
        topic: "Data Structures",
        subtopic: "Hashing",
        difficulty: "Easy",
        question: "Average time complexity for search in a hash table is:",
        options: ["A) O(1)", "B) O(log n)", "C) O(n)", "D) O(n²)"],
        answer: "A",
        explanation: "With good hash function, average case is O(1)."
    },
    {
        id: "ds027",
        topic: "Data Structures",
        subtopic: "Hashing",
        difficulty: "Medium",
        question: "Collision in hashing occurs when:",
        options: ["A) Hash table is empty", "B) Two keys hash to same index", "C) Key is not found", "D) Hash table is full"],
        answer: "B",
        explanation: "Collision happens when different keys produce same hash value."
    },
    {
        id: "ds028",
        topic: "Data Structures",
        subtopic: "Hashing",
        difficulty: "Medium",
        question: "Which is NOT a collision resolution technique?",
        options: ["A) Chaining", "B) Linear Probing", "C) Quadratic Probing", "D) Binary Search"],
        answer: "D",
        explanation: "Binary search is a searching algorithm, not collision resolution."
    },
    {
        id: "ds029",
        topic: "Data Structures",
        subtopic: "Hashing",
        difficulty: "Hard",
        question: "Load factor in hashing is defined as:",
        options: ["A) n/m where n=keys, m=table size", "B) m/n", "C) n×m", "D) n+m"],
        answer: "A",
        explanation: "Load factor α = number of keys / table size."
    },
    {
        id: "ds030",
        topic: "Data Structures",
        subtopic: "Hashing",
        difficulty: "Medium",
        question: "In linear probing, if position h is occupied, next position checked is:",
        options: ["A) h+1", "B) h²", "C) h/2", "D) random"],
        answer: "A",
        explanation: "Linear probing: if h occupied, try h+1, h+2, h+3, etc."
    },
    // AVL TREES
    {
        id: "ds031",
        topic: "Data Structures",
        subtopic: "AVL Trees",
        difficulty: "Medium",
        question: "In AVL tree, the balance factor of each node must be:",
        options: ["A) 0", "B) -1, 0, or 1", "C) Any positive number", "D) Any number"],
        answer: "B",
        explanation: "AVL tree maintains balance factor (left height - right height) in {-1, 0, 1}."
    },
    {
        id: "ds032",
        topic: "Data Structures",
        subtopic: "AVL Trees",
        difficulty: "Hard",
        question: "Minimum number of nodes in an AVL tree of height h is:",
        options: ["A) 2^h", "B) h+1", "C) N(h) = N(h-1) + N(h-2) + 1", "D) 2h+1"],
        answer: "C",
        explanation: "Follows recurrence similar to Fibonacci. N(h) = N(h-1) + N(h-2) + 1."
    },
    // B-TREES
    {
        id: "ds033",
        topic: "Data Structures",
        subtopic: "B-Trees",
        difficulty: "Medium",
        question: "In a B-tree of order m, maximum number of children a node can have is:",
        options: ["A) m-1", "B) m", "C) m+1", "D) 2m"],
        answer: "B",
        explanation: "Order m means max m children and m-1 keys per node."
    },
    {
        id: "ds034",
        topic: "Data Structures",
        subtopic: "B-Trees",
        difficulty: "Medium",
        question: "B-trees are primarily used for:",
        options: ["A) In-memory operations", "B) Disk-based storage/databases", "C) Network routing", "D) Graph traversal"],
        answer: "B",
        explanation: "B-trees minimize disk I/O, ideal for databases and file systems."
    },
    {
        id: "ds035",
        topic: "Data Structures",
        subtopic: "B-Trees",
        difficulty: "Hard",
        question: "In a B+ tree, all data records are stored in:",
        options: ["A) Root node", "B) Internal nodes", "C) Leaf nodes only", "D) All nodes"],
        answer: "C",
        explanation: "B+ tree stores all data in leaf nodes; internal nodes only store keys."
    },
    // TRIES
    {
        id: "ds036",
        topic: "Data Structures",
        subtopic: "Tries",
        difficulty: "Medium",
        question: "Time complexity to search a word of length m in a Trie is:",
        options: ["A) O(1)", "B) O(m)", "C) O(n)", "D) O(log n)"],
        answer: "B",
        explanation: "We traverse m characters, one level per character, so O(m)."
    },
    {
        id: "ds037",
        topic: "Data Structures",
        subtopic: "Tries",
        difficulty: "Medium",
        question: "Trie is best suited for:",
        options: ["A) Numeric data", "B) String/prefix matching", "C) Graph problems", "D) Sorting"],
        answer: "B",
        explanation: "Tries excel at prefix-based operations on strings."
    },
    // SEGMENT TREES
    {
        id: "ds038",
        topic: "Data Structures",
        subtopic: "Segment Trees",
        difficulty: "Hard",
        question: "Time complexity for range query in a segment tree is:",
        options: ["A) O(1)", "B) O(log n)", "C) O(n)", "D) O(n log n)"],
        answer: "B",
        explanation: "Segment tree answers range queries in O(log n)."
    },
    {
        id: "ds039",
        topic: "Data Structures",
        subtopic: "Segment Trees",
        difficulty: "Hard",
        question: "Space complexity of a segment tree for n elements is:",
        options: ["A) O(n)", "B) O(2n)", "C) O(4n)", "D) O(n log n)"],
        answer: "C",
        explanation: "Segment tree needs approximately 4n space for n elements."
    },
    // DISJOINT SET
    {
        id: "ds040",
        topic: "Data Structures",
        subtopic: "Disjoint Set",
        difficulty: "Medium",
        question: "Union-Find data structure uses which optimizations?",
        options: ["A) Path compression only", "B) Union by rank only", "C) Both path compression and union by rank", "D) Neither"],
        answer: "C",
        explanation: "Both optimizations together achieve nearly O(1) amortized time."
    },
    {
        id: "ds041",
        topic: "Data Structures",
        subtopic: "Disjoint Set",
        difficulty: "Medium",
        question: "Disjoint Set is commonly used for:",
        options: ["A) Sorting", "B) Kruskal's MST algorithm", "C) Shortest path", "D) String matching"],
        answer: "B",
        explanation: "Union-Find efficiently checks if adding edge creates cycle in Kruskal's."
    },
    // MISC
    {
        id: "ds042",
        topic: "Data Structures",
        subtopic: "General",
        difficulty: "Easy",
        question: "Which data structure is used in recursion?",
        options: ["A) Queue", "B) Stack", "C) Array", "D) Graph"],
        answer: "B",
        explanation: "Function calls use stack for storing return addresses and local variables."
    },
    {
        id: "ds043",
        topic: "Data Structures",
        subtopic: "General",
        difficulty: "Medium",
        question: "Which DS is best for implementing LRU cache?",
        options: ["A) Array", "B) Stack", "C) HashMap + Doubly Linked List", "D) Queue"],
        answer: "C",
        explanation: "HashMap for O(1) access, DLL for O(1) removal and insertion."
    },
    {
        id: "ds044",
        topic: "Data Structures",
        subtopic: "General",
        difficulty: "Easy",
        question: "A binary tree with n nodes has how many null pointers?",
        options: ["A) n", "B) n-1", "C) n+1", "D) 2n"],
        answer: "C",
        explanation: "A binary tree with n nodes has exactly n+1 null pointers."
    },
    {
        id: "ds045",
        topic: "Data Structures",
        subtopic: "General",
        difficulty: "Medium",
        question: "Threaded binary tree is used to:",
        options: ["A) Save memory", "B) Make tree traversal efficient without stack", "C) Sort elements", "D) Balance tree"],
        answer: "B",
        explanation: "Null pointers point to inorder predecessor/successor for efficient traversal."
    },
    // MORE DATA STRUCTURES QUESTIONS
    {
        id: "ds046", topic: "Data Structures", subtopic: "Arrays", difficulty: "Medium",
        question: "Time complexity to delete element from middle of array is:",
        options: ["A) O(1)", "B) O(log n)", "C) O(n)", "D) O(n²)"], answer: "C",
        explanation: "Elements after deleted position must be shifted left - O(n)."
    },
    {
        id: "ds047", topic: "Data Structures", subtopic: "Arrays", difficulty: "Hard",
        question: "In column-major order for A[m][n], address of A[i][j] is:",
        options: ["A) Base + (i×n + j)×size", "B) Base + (j×m + i)×size", "C) Base + (i+j)×size", "D) Base + i×j×size"], answer: "B",
        explanation: "Column-major: Address = Base + (j×m + i)×size."
    },
    {
        id: "ds048", topic: "Data Structures", subtopic: "Linked Lists", difficulty: "Medium",
        question: "Time complexity to reverse a singly linked list is:",
        options: ["A) O(1)", "B) O(log n)", "C) O(n)", "D) O(n²)"], answer: "C",
        explanation: "Need to traverse entire list once reversing pointers - O(n)."
    },
    {
        id: "ds049", topic: "Data Structures", subtopic: "Linked Lists", difficulty: "Medium",
        question: "In doubly linked list, deleting a node given its pointer takes:",
        options: ["A) O(1)", "B) O(n)", "C) O(log n)", "D) O(n²)"], answer: "A",
        explanation: "With pointer to node and prev/next links, deletion is O(1)."
    },
    {
        id: "ds050", topic: "Data Structures", subtopic: "Linked Lists", difficulty: "Hard",
        question: "XOR linked list stores:",
        options: ["A) Only next pointer", "B) XOR of addresses of prev and next", "C) Only prev pointer", "D) Sum of addresses"], answer: "B",
        explanation: "XOR linked list saves space by storing XOR of prev and next addresses."
    },
    {
        id: "ds051", topic: "Data Structures", subtopic: "Stacks", difficulty: "Easy",
        question: "Evaluating postfix expression 2 3 4 * + gives:",
        options: ["A) 14", "B) 24", "C) 10", "D) 9"], answer: "A",
        explanation: "3*4=12, then 2+12=14."
    },
    {
        id: "ds052", topic: "Data Structures", subtopic: "Stacks", difficulty: "Medium",
        question: "Tower of Hanoi for n disks requires minimum moves:",
        options: ["A) n", "B) 2n", "C) 2^n - 1", "D) n²"], answer: "C",
        explanation: "Tower of Hanoi minimum moves = 2^n - 1."
    },
    {
        id: "ds053", topic: "Data Structures", subtopic: "Stacks", difficulty: "Medium",
        question: "Next greater element problem uses:",
        options: ["A) Queue", "B) Stack", "C) Heap", "D) Array only"], answer: "B",
        explanation: "Stack efficiently finds next greater element in O(n)."
    },
    {
        id: "ds054", topic: "Data Structures", subtopic: "Queues", difficulty: "Medium",
        question: "Deque (double-ended queue) allows:",
        options: ["A) Insert/delete at front only", "B) Insert/delete at both ends", "C) Insert/delete at rear only", "D) No delete"], answer: "B",
        explanation: "Deque supports insertion and deletion at both front and rear."
    },
    {
        id: "ds055", topic: "Data Structures", subtopic: "Queues", difficulty: "Medium",
        question: "In a queue implemented using array, when rear reaches end but space exists at front, this is:",
        options: ["A) Overflow", "B) Underflow", "C) False overflow", "D) True overflow"], answer: "C",
        explanation: "False overflow occurs in linear queue when rear reaches end but front has empty space."
    },
    {
        id: "ds056", topic: "Data Structures", subtopic: "Trees", difficulty: "Easy",
        question: "Preorder traversal visits nodes in order:",
        options: ["A) Left, Root, Right", "B) Root, Left, Right", "C) Left, Right, Root", "D) Right, Left, Root"], answer: "B",
        explanation: "Preorder: Root, Left subtree, Right subtree."
    },
    {
        id: "ds057", topic: "Data Structures", subtopic: "Trees", difficulty: "Easy",
        question: "Postorder traversal visits nodes in order:",
        options: ["A) Left, Root, Right", "B) Root, Left, Right", "C) Left, Right, Root", "D) Right, Root, Left"], answer: "C",
        explanation: "Postorder: Left subtree, Right subtree, Root."
    },
    {
        id: "ds058", topic: "Data Structures", subtopic: "Trees", difficulty: "Medium",
        question: "A complete binary tree with n nodes has height:",
        options: ["A) n", "B) log₂(n+1)", "C) ⌊log₂n⌋", "D) n/2"], answer: "C",
        explanation: "Complete binary tree has height ⌊log₂n⌋."
    },
    {
        id: "ds059", topic: "Data Structures", subtopic: "Trees", difficulty: "Hard",
        question: "Maximum and minimum number of nodes in binary tree of height h are:",
        options: ["A) 2^h and h", "B) 2^(h+1)-1 and h+1", "C) h and 1", "D) 2^h and 2^(h-1)"], answer: "B",
        explanation: "Max = 2^(h+1)-1 (full tree), Min = h+1 (skewed tree)."
    },
    {
        id: "ds060", topic: "Data Structures", subtopic: "BST", difficulty: "Medium",
        question: "Worst case time for search in BST is:",
        options: ["A) O(1)", "B) O(log n)", "C) O(n)", "D) O(n log n)"], answer: "C",
        explanation: "Worst case is skewed BST - degenerates to linked list: O(n)."
    },
    {
        id: "ds061", topic: "Data Structures", subtopic: "BST", difficulty: "Medium",
        question: "Deleting a node with two children in BST requires finding:",
        options: ["A) Largest in left subtree or smallest in right subtree", "B) Any leaf node", "C) Root", "D) Random node"], answer: "A",
        explanation: "Replace with inorder predecessor (max in left) or successor (min in right)."
    },
    {
        id: "ds062", topic: "Data Structures", subtopic: "Heaps", difficulty: "Medium",
        question: "Heap sort time complexity is:",
        options: ["A) O(n)", "B) O(n log n)", "C) O(n²)", "D) O(log n)"], answer: "B",
        explanation: "Build heap O(n) + n extract-max operations O(n log n) = O(n log n)."
    },
    {
        id: "ds063", topic: "Data Structures", subtopic: "Heaps", difficulty: "Medium",
        question: "In a min-heap of n elements, finding minimum takes:",
        options: ["A) O(1)", "B) O(log n)", "C) O(n)", "D) O(n log n)"], answer: "A",
        explanation: "Minimum is always at root - O(1) to access."
    },
    {
        id: "ds064", topic: "Data Structures", subtopic: "Heaps", difficulty: "Hard",
        question: "Time to delete arbitrary element from heap is:",
        options: ["A) O(1)", "B) O(log n)", "C) O(n)", "D) O(n log n)"], answer: "C",
        explanation: "Need O(n) to find element, O(log n) to heapify. Total O(n)."
    },
    {
        id: "ds065", topic: "Data Structures", subtopic: "Graphs", difficulty: "Medium",
        question: "Space complexity of adjacency list for graph with V vertices and E edges is:",
        options: ["A) O(V)", "B) O(E)", "C) O(V+E)", "D) O(V×E)"], answer: "C",
        explanation: "Adjacency list stores V lists with total E entries: O(V+E)."
    },
    {
        id: "ds066", topic: "Data Structures", subtopic: "Graphs", difficulty: "Medium",
        question: "Topological sort is possible only for:",
        options: ["A) Any graph", "B) DAG (Directed Acyclic Graph)", "C) Undirected graph", "D) Complete graph"], answer: "B",
        explanation: "Topological ordering exists only for DAGs (no cycles)."
    },
    {
        id: "ds067", topic: "Data Structures", subtopic: "Graphs", difficulty: "Hard",
        question: "Number of edges in a complete undirected graph with n vertices is:",
        options: ["A) n", "B) n(n-1)", "C) n(n-1)/2", "D) 2n"], answer: "C",
        explanation: "Each vertex connects to n-1 others; divide by 2: n(n-1)/2."
    },
    {
        id: "ds068", topic: "Data Structures", subtopic: "Graphs", difficulty: "Medium",
        question: "BFS finds shortest path in:",
        options: ["A) Weighted graphs", "B) Unweighted graphs", "C) All graphs", "D) No graphs"], answer: "B",
        explanation: "BFS gives shortest path (minimum edges) in unweighted graphs only."
    },
    {
        id: "ds069", topic: "Data Structures", subtopic: "Hashing", difficulty: "Hard",
        question: "Double hashing uses probe sequence:",
        options: ["A) h(k) + i", "B) h(k) + i²", "C) h1(k) + i×h2(k)", "D) random"], answer: "C",
        explanation: "Double hashing: h(k,i) = (h1(k) + i×h2(k)) mod m."
    },
    {
        id: "ds070", topic: "Data Structures", subtopic: "Hashing", difficulty: "Medium",
        question: "Perfect hashing achieves:",
        options: ["A) O(n) worst case", "B) O(1) worst case", "C) O(log n) worst case", "D) O(n log n)"], answer: "B",
        explanation: "Perfect hashing has no collisions - O(1) worst case search."
    },
    {
        id: "ds071", topic: "Data Structures", subtopic: "AVL Trees", difficulty: "Hard",
        question: "After inserting into AVL tree causing imbalance, maximum rotations needed is:",
        options: ["A) 1", "B) 2", "C) log n", "D) n"], answer: "B",
        explanation: "At most 2 rotations (double rotation) fix insertion imbalance."
    },
    {
        id: "ds072", topic: "Data Structures", subtopic: "AVL Trees", difficulty: "Medium",
        question: "Time complexity for insertion in AVL tree is:",
        options: ["A) O(1)", "B) O(log n)", "C) O(n)", "D) O(n log n)"], answer: "B",
        explanation: "Search + insert + rebalance all O(log n). Total O(log n)."
    },
    {
        id: "ds073", topic: "Data Structures", subtopic: "Red-Black Trees", difficulty: "Hard",
        question: "Every path from root to null in Red-Black tree has same number of:",
        options: ["A) Red nodes", "B) Black nodes", "C) Total nodes", "D) Leaves"], answer: "B",
        explanation: "Black-height property: all paths have equal number of black nodes."
    },
    {
        id: "ds074", topic: "Data Structures", subtopic: "Red-Black Trees", difficulty: "Hard",
        question: "Height of Red-Black tree with n nodes is at most:",
        options: ["A) log n", "B) 2 log(n+1)", "C) n", "D) √n"], answer: "B",
        explanation: "Red-Black tree height ≤ 2log(n+1), so operations are O(log n)."
    },
    {
        id: "ds075", topic: "Data Structures", subtopic: "B-Trees", difficulty: "Hard",
        question: "Minimum number of keys in non-root node of B-tree of order m is:",
        options: ["A) m/2", "B) ⌈m/2⌉ - 1", "C) m-1", "D) m"], answer: "B",
        explanation: "Non-root nodes must have at least ⌈m/2⌉ - 1 keys."
    },
    {
        id: "ds076", topic: "Data Structures", subtopic: "Tries", difficulty: "Hard",
        question: "Space complexity of Trie storing n words of average length L over alphabet of size k is:",
        options: ["A) O(n)", "B) O(nL)", "C) O(nLk) (worst case)", "D) O(k)"], answer: "C",
        explanation: "In worst case, each node has k children pointers, depth nL."
    },
    {
        id: "ds077", topic: "Data Structures", subtopic: "Segment Trees", difficulty: "Hard",
        question: "Time complexity for point update in segment tree is:",
        options: ["A) O(1)", "B) O(log n)", "C) O(n)", "D) O(n log n)"], answer: "B",
        explanation: "Update propagates from leaf to root - O(log n) nodes updated."
    },
    {
        id: "ds078", topic: "Data Structures", subtopic: "Fenwick Tree", difficulty: "Hard",
        question: "Fenwick tree (Binary Indexed Tree) space complexity is:",
        options: ["A) O(n)", "B) O(n log n)", "C) O(n²)", "D) O(log n)"], answer: "A",
        explanation: "BIT uses array of size n+1 - O(n) space."
    },
    {
        id: "ds079", topic: "Data Structures", subtopic: "Fenwick Tree", difficulty: "Hard",
        question: "Fenwick tree supports prefix sum query in:",
        options: ["A) O(1)", "B) O(log n)", "C) O(n)", "D) O(√n)"], answer: "B",
        explanation: "BIT computes prefix sum in O(log n) using binary representation."
    },
    {
        id: "ds080", topic: "Data Structures", subtopic: "Skip Lists", difficulty: "Hard",
        question: "Expected time complexity for search in Skip List is:",
        options: ["A) O(1)", "B) O(log n)", "C) O(n)", "D) O(n log n)"], answer: "B",
        explanation: "Skip List provides expected O(log n) search using multiple levels."
    },
    {
        id: "ds081", topic: "Data Structures", subtopic: "Disjoint Set", difficulty: "Hard",
        question: "With path compression and union by rank, Union-Find operations are:",
        options: ["A) O(n)", "B) O(log n)", "C) O(α(n)) amortized (nearly O(1))", "D) O(1) worst case"], answer: "C",
        explanation: "α(n) is inverse Ackermann function - grows extremely slowly."
    },
    {
        id: "ds082", topic: "Data Structures", subtopic: "General", difficulty: "Easy",
        question: "Sparse matrix is best stored using:",
        options: ["A) 2D array", "B) Linked list or triplet representation", "C) Stack", "D) Queue"], answer: "B",
        explanation: "Sparse matrices have mostly zeros - store only non-zero elements."
    },
    {
        id: "ds083", topic: "Data Structures", subtopic: "General", difficulty: "Medium",
        question: "Which DS is used for expression evaluation?",
        options: ["A) Queue", "B) Stack", "C) Tree", "D) Graph"], answer: "B",
        explanation: "Stack is used for converting and evaluating infix/postfix expressions."
    },
    {
        id: "ds084", topic: "Data Structures", subtopic: "General", difficulty: "Medium",
        question: "Huffman coding uses which data structure?",
        options: ["A) Stack", "B) Queue", "C) Priority Queue (Min-Heap)", "D) Array"], answer: "C",
        explanation: "Huffman algorithm uses min-heap to build optimal prefix-free codes."
    },
    {
        id: "ds085", topic: "Data Structures", subtopic: "General", difficulty: "Medium",
        question: "For undo/redo operations in editor, best data structure is:",
        options: ["A) Two stacks", "B) Single queue", "C) Array", "D) Tree"], answer: "A",
        explanation: "Two stacks: one for undo history, one for redo history."
    },
    {
        id: "ds086", topic: "Data Structures", subtopic: "Trees", difficulty: "Hard",
        question: "Number of unique BSTs that can be formed with n distinct keys is:",
        options: ["A) n!", "B) 2^n", "C) Catalan number C(n)", "D) n²"], answer: "C",
        explanation: "Number of structurally unique BSTs = n-th Catalan number = C(2n,n)/(n+1)."
    },
    {
        id: "ds087", topic: "Data Structures", subtopic: "Trees", difficulty: "Medium",
        question: "Level order traversal of binary tree uses:",
        options: ["A) Stack", "B) Queue", "C) Recursion only", "D) Heap"], answer: "B",
        explanation: "Level order (BFS) uses queue to visit nodes level by level."
    },
    {
        id: "ds088", topic: "Data Structures", subtopic: "Graphs", difficulty: "Hard",
        question: "Strongly connected components in directed graph can be found using:",
        options: ["A) BFS only", "B) Kosaraju's or Tarjan's algorithm", "C) Dijkstra's algorithm", "D) Prim's algorithm"], answer: "B",
        explanation: "Kosaraju's (two DFS) or Tarjan's (single DFS) find SCCs."
    },
    {
        id: "ds089", topic: "Data Structures", subtopic: "Graphs", difficulty: "Medium",
        question: "Articulation point (cut vertex) in graph is vertex whose removal:",
        options: ["A) Increases edges", "B) Disconnects graph", "C) Reduces vertices", "D) Has no effect"], answer: "B",
        explanation: "Removing articulation point increases number of connected components."
    },
    {
        id: "ds090", topic: "Data Structures", subtopic: "Graphs", difficulty: "Hard",
        question: "Bridge in a graph is an edge whose removal:",
        options: ["A) Increases vertices", "B) Disconnects or splits graph", "C) Has no effect", "D) Reduces edges only"], answer: "B",
        explanation: "Bridge removal increases connected components (disconnects graph)."
    },
    // NEW CORE FOUNDATIONAL QUESTIONS
    {
        id: "ds091", topic: "Data Structures", subtopic: "Memory", difficulty: "Medium",
        question: "In a system with 32-bit pointers, what is the size of each node in a doubly linked list containing an integer (4 bytes)?",
        options: ["A) 4 bytes", "B) 8 bytes", "C) 12 bytes", "D) 16 bytes"], answer: "C",
        explanation: "Each node has: integer (4 bytes) + next pointer (4 bytes) + prev pointer (4 bytes) = 12 bytes."
    },
    {
        id: "ds092", topic: "Data Structures", subtopic: "Arrays", difficulty: "Hard",
        question: "For column-major order storage of A[m][n], address of A[i][j] with base B and element size S is:",
        options: ["A) B + (i*n + j)*S", "B) B + (j*m + i)*S", "C) B + (i+j)*S", "D) B + (i*m + j)*S"], answer: "B",
        explanation: "Column-major: elements stored column by column. Address = B + (j*m + i)*S."
    },
    {
        id: "ds093", topic: "Data Structures", subtopic: "Stacks", difficulty: "Medium",
        question: "Minimum number of stacks needed to implement a queue is:",
        options: ["A) 1", "B) 2", "C) 3", "D) 4"], answer: "B",
        explanation: "Two stacks can simulate queue: one for enqueue, one for dequeue operations."
    },
    {
        id: "ds094", topic: "Data Structures", subtopic: "Queues", difficulty: "Medium",
        question: "In a circular queue with array size n, if front=3 and rear=1, number of elements is:",
        options: ["A) n-2", "B) n-1", "C) 2", "D) (1-3+n) mod n"], answer: "A",
        explanation: "Elements = (rear - front + n) mod n = (1 - 3 + n) mod n = n - 2."
    },
    {
        id: "ds095", topic: "Data Structures", subtopic: "Trees", difficulty: "Hard",
        question: "Time complexity to find diameter of a binary tree is:",
        options: ["A) O(n²)", "B) O(n)", "C) O(log n)", "D) O(n log n)"], answer: "B",
        explanation: "Using single DFS traversal, diameter can be found in O(n) time."
    },
    {
        id: "ds096", topic: "Data Structures", subtopic: "Trees", difficulty: "Medium",
        question: "A full binary tree with n internal nodes has how many leaf nodes?",
        options: ["A) n", "B) n+1", "C) n-1", "D) 2n"], answer: "B",
        explanation: "In a full binary tree, number of leaves = number of internal nodes + 1."
    },
    {
        id: "ds097", topic: "Data Structures", subtopic: "Trees", difficulty: "Hard",
        question: "Threaded binary tree eliminates the need for:",
        options: ["A) Root pointer", "B) Stack in inorder traversal", "C) Node data", "D) Left child"], answer: "B",
        explanation: "Threads point to inorder predecessor/successor, eliminating stack for traversal."
    },
    {
        id: "ds098", topic: "Data Structures", subtopic: "Hashing", difficulty: "Hard",
        question: "If hash table size is prime p and hash function is h(k) = k mod p, which collision resolution has best cache performance?",
        options: ["A) Separate chaining", "B) Linear probing", "C) Quadratic probing", "D) Double hashing"], answer: "B",
        explanation: "Linear probing has best cache locality due to sequential memory access."
    },
    {
        id: "ds099", topic: "Data Structures", subtopic: "Hashing", difficulty: "Medium",
        question: "Primary clustering problem occurs in:",
        options: ["A) Separate chaining", "B) Linear probing", "C) Double hashing", "D) Perfect hashing"], answer: "B",
        explanation: "Linear probing causes primary clustering - consecutive slots get filled."
    },
    {
        id: "ds100", topic: "Data Structures", subtopic: "Hashing", difficulty: "Hard",
        question: "Cuckoo hashing guarantees worst-case lookup time of:",
        options: ["A) O(n)", "B) O(log n)", "C) O(1)", "D) O(n²)"], answer: "C",
        explanation: "Cuckoo hashing uses two hash functions, guaranteeing O(1) worst-case lookup."
    },
    {
        id: "ds101", topic: "Data Structures", subtopic: "Heaps", difficulty: "Medium",
        question: "Building a heap from n elements using bottom-up approach takes:",
        options: ["A) O(n log n)", "B) O(n)", "C) O(n²)", "D) O(log n)"], answer: "B",
        explanation: "Bottom-up heap construction is O(n) due to fewer operations at higher levels."
    },
    {
        id: "ds102", topic: "Data Structures", subtopic: "Heaps", difficulty: "Hard",
        question: "In a d-ary heap with n elements, time to extract-min is:",
        options: ["A) O(log n)", "B) O(d log_d n)", "C) O(n)", "D) O(d)"], answer: "B",
        explanation: "Extract-min requires comparing d children at each of log_d(n) levels."
    },
    {
        id: "ds103", topic: "Data Structures", subtopic: "Graphs", difficulty: "Medium",
        question: "Space complexity of adjacency matrix for graph with V vertices is:",
        options: ["A) O(V)", "B) O(V²)", "C) O(E)", "D) O(V+E)"], answer: "B",
        explanation: "Adjacency matrix requires V×V = O(V²) space regardless of edges."
    },
    {
        id: "ds104", topic: "Data Structures", subtopic: "Graphs", difficulty: "Medium",
        question: "For a sparse graph, which representation is more space efficient?",
        options: ["A) Adjacency matrix", "B) Adjacency list", "C) Both equal", "D) Edge list"], answer: "B",
        explanation: "Adjacency list uses O(V+E) space, better for sparse graphs where E << V²."
    },
    {
        id: "ds105", topic: "Data Structures", subtopic: "Trees", difficulty: "Hard",
        question: "In a B-tree of order m, maximum number of children a node can have is:",
        options: ["A) m-1", "B) m", "C) m+1", "D) 2m"], answer: "B",
        explanation: "B-tree of order m has maximum m children per node (and m-1 keys)."
    },
    {
        id: "ds106", topic: "Data Structures", subtopic: "Trees", difficulty: "Hard",
        question: "Height of a B-tree with n keys and minimum degree t is at most:",
        options: ["A) log_t(n)", "B) log_t((n+1)/2)", "C) n/t", "D) t*log(n)"], answer: "B",
        explanation: "Maximum height = log_t((n+1)/2), achieved when each node has minimum keys."
    },
    {
        id: "ds107", topic: "Data Structures", subtopic: "Trees", difficulty: "Medium",
        question: "In a binary search tree, inorder traversal gives:",
        options: ["A) Random order", "B) Level order", "C) Sorted order", "D) Reverse order"], answer: "C",
        explanation: "BST inorder traversal visits nodes in ascending sorted order."
    },
    {
        id: "ds108", topic: "Data Structures", subtopic: "Linked Lists", difficulty: "Medium",
        question: "To detect a cycle in linked list, Floyd's algorithm uses:",
        options: ["A) One pointer", "B) Two pointers with same speed", "C) Two pointers with different speeds", "D) Hash table only"], answer: "C",
        explanation: "Floyd's uses slow (1 step) and fast (2 steps) pointers that meet if cycle exists."
    },
    {
        id: "ds109", topic: "Data Structures", subtopic: "Linked Lists", difficulty: "Hard",
        question: "Time complexity to find the starting node of a cycle in linked list is:",
        options: ["A) O(n²)", "B) O(n)", "C) O(n log n)", "D) O(1)"], answer: "B",
        explanation: "After detecting cycle, reset one pointer to head, move both at same speed - they meet at cycle start in O(n)."
    },
    {
        id: "ds110", topic: "Data Structures", subtopic: "Trees", difficulty: "Hard",
        question: "Segment tree for n elements requires array of size:",
        options: ["A) n", "B) 2n", "C) 4n", "D) n log n"], answer: "C",
        explanation: "Segment tree needs at most 4n space to handle all cases safely."
    },
    {
        id: "ds111", topic: "Data Structures", subtopic: "Trees", difficulty: "Hard",
        question: "Time complexity of range query in segment tree is:",
        options: ["A) O(n)", "B) O(log n)", "C) O(1)", "D) O(n log n)"], answer: "B",
        explanation: "Range queries in segment tree take O(log n) time."
    },
    {
        id: "ds112", topic: "Data Structures", subtopic: "Trees", difficulty: "Hard",
        question: "Fenwick tree (Binary Indexed Tree) is used for:",
        options: ["A) Sorting", "B) Prefix sum queries and point updates", "C) Graph traversal", "D) String matching"], answer: "B",
        explanation: "BIT efficiently handles prefix sum queries and point updates in O(log n)."
    },
    {
        id: "ds113", topic: "Data Structures", subtopic: "Graphs", difficulty: "Hard",
        question: "Topological sort is possible only for:",
        options: ["A) All graphs", "B) Cyclic graphs", "C) DAGs (Directed Acyclic Graphs)", "D) Undirected graphs"], answer: "C",
        explanation: "Topological ordering exists only for DAGs - no cycles allowed."
    },
    {
        id: "ds114", topic: "Data Structures", subtopic: "Graphs", difficulty: "Medium",
        question: "BFS from source s in unweighted graph gives:",
        options: ["A) Spanning tree", "B) Shortest paths from s", "C) Longest paths", "D) Arbitrary paths"], answer: "B",
        explanation: "BFS gives shortest paths (in terms of edges) from source in unweighted graph."
    },
    {
        id: "ds115", topic: "Data Structures", subtopic: "General", difficulty: "Medium",
        question: "Amortized time complexity of n insertions in a dynamic array that doubles capacity is:",
        options: ["A) O(n²)", "B) O(n)", "C) O(n log n)", "D) O(2^n)"], answer: "B",
        explanation: "Total cost of n insertions is O(n), so amortized cost per insertion is O(1)."
    },
    {
        id: "ds116", topic: "Data Structures", subtopic: "Stacks", difficulty: "Medium",
        question: "The data structure used in function call implementation is:",
        options: ["A) Queue", "B) Stack", "C) Heap", "D) Tree"], answer: "B",
        explanation: "Function calls use stack for storing return addresses, parameters, and local variables."
    },
    {
        id: "ds117", topic: "Data Structures", subtopic: "Trees", difficulty: "Hard",
        question: "In AVL tree after right rotation on node x, what becomes x's parent?",
        options: ["A) x's left child", "B) x's right child", "C) x's grandparent", "D) NULL"], answer: "A",
        explanation: "Right rotation makes x's left child the new parent of x."
    },
    {
        id: "ds118", topic: "Data Structures", subtopic: "Heaps", difficulty: "Medium",
        question: "Which operation is NOT efficiently supported by a min-heap?",
        options: ["A) Find minimum", "B) Extract minimum", "C) Decrease key", "D) Search for arbitrary element"], answer: "D",
        explanation: "Searching for arbitrary element in heap requires O(n) time - not efficient."
    },
    {
        id: "ds119", topic: "Data Structures", subtopic: "Graphs", difficulty: "Hard",
        question: "Union-Find with path compression and union by rank has amortized time:",
        options: ["A) O(n)", "B) O(log n)", "C) O(α(n)) nearly constant", "D) O(n²)"], answer: "C",
        explanation: "With both optimizations, Union-Find operations take O(α(n)) amortized time, where α is inverse Ackermann function."
    },
    {
        id: "ds120", topic: "Data Structures", subtopic: "Trees", difficulty: "Medium",
        question: "A Trie storing n strings with average length L uses space approximately:",
        options: ["A) O(n)", "B) O(L)", "C) O(n*L*alphabet_size)", "D) O(log n)"], answer: "C",
        explanation: "Trie nodes have pointers for each alphabet character, total space depends on unique prefixes."
    }
];

export default dataStructuresQuestions;

