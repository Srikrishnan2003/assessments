// Algorithms Questions for BARC CSE Exam
export const algorithmsQuestions = [
    // TIME COMPLEXITY
    {
        id: "alg001", topic: "Algorithms", subtopic: "Time Complexity", difficulty: "Easy",
        question: "Time complexity of binary search is:",
        options: ["A) O(1)", "B) O(log n)", "C) O(n)", "D) O(n log n)"],
        answer: "B", explanation: "Binary search halves the search space each iteration, giving O(log n)."
    },
    {
        id: "alg002", topic: "Algorithms", subtopic: "Time Complexity", difficulty: "Easy",
        question: "Which notation represents worst-case time complexity?",
        options: ["A) Ω (Omega)", "B) O (Big-O)", "C) Θ (Theta)", "D) o (small-o)"],
        answer: "B", explanation: "Big-O represents upper bound (worst case)."
    },
    {
        id: "alg003", topic: "Algorithms", subtopic: "Time Complexity", difficulty: "Medium",
        question: "Time complexity of T(n) = 2T(n/2) + n using Master theorem is:",
        options: ["A) O(n)", "B) O(n log n)", "C) O(n²)", "D) O(log n)"],
        answer: "B", explanation: "Case 2 of Master theorem: a=2, b=2, f(n)=n. Since n = n^(log₂2), T(n) = O(n log n)."
    },
    {
        id: "alg004", topic: "Algorithms", subtopic: "Time Complexity", difficulty: "Medium",
        question: "Time complexity of T(n) = T(n-1) + n is:",
        options: ["A) O(n)", "B) O(n log n)", "C) O(n²)", "D) O(2^n)"],
        answer: "C", explanation: "T(n) = n + (n-1) + ... + 1 = n(n+1)/2 = O(n²)."
    },
    // SORTING
    {
        id: "alg005", topic: "Algorithms", subtopic: "Sorting", difficulty: "Easy",
        question: "Best case time complexity of Quick Sort is:",
        options: ["A) O(n)", "B) O(n log n)", "C) O(n²)", "D) O(log n)"],
        answer: "B", explanation: "Best/average case of QuickSort is O(n log n) when pivot divides evenly."
    },
    {
        id: "alg006", topic: "Algorithms", subtopic: "Sorting", difficulty: "Easy",
        question: "Which sorting algorithm is stable?",
        options: ["A) Quick Sort", "B) Heap Sort", "C) Merge Sort", "D) Selection Sort"],
        answer: "C", explanation: "Merge Sort maintains relative order of equal elements (stable)."
    },
    {
        id: "alg007", topic: "Algorithms", subtopic: "Sorting", difficulty: "Easy",
        question: "Worst case time complexity of Merge Sort is:",
        options: ["A) O(n)", "B) O(n log n)", "C) O(n²)", "D) O(log n)"],
        answer: "B", explanation: "Merge Sort always divides in half and merges in O(n), giving O(n log n)."
    },
    {
        id: "alg008", topic: "Algorithms", subtopic: "Sorting", difficulty: "Medium",
        question: "Space complexity of Merge Sort is:",
        options: ["A) O(1)", "B) O(log n)", "C) O(n)", "D) O(n²)"],
        answer: "C", explanation: "Merge Sort needs O(n) auxiliary space for merging."
    },
    {
        id: "alg009", topic: "Algorithms", subtopic: "Sorting", difficulty: "Easy",
        question: "Worst case time complexity of Quick Sort is:",
        options: ["A) O(n)", "B) O(n log n)", "C) O(n²)", "D) O(2^n)"],
        answer: "C", explanation: "When pivot is always smallest/largest element, gives O(n²)."
    },
    {
        id: "alg010", topic: "Algorithms", subtopic: "Sorting", difficulty: "Medium",
        question: "Which sorting algorithm is best for nearly sorted data?",
        options: ["A) Quick Sort", "B) Insertion Sort", "C) Merge Sort", "D) Selection Sort"],
        answer: "B", explanation: "Insertion Sort is O(n) for nearly sorted data."
    },
    {
        id: "alg011", topic: "Algorithms", subtopic: "Sorting", difficulty: "Medium",
        question: "Heap Sort time complexity is:",
        options: ["A) O(n)", "B) O(n log n)", "C) O(n²)", "D) O(log n)"],
        answer: "B", explanation: "Building heap O(n) + n extractions of O(log n) each = O(n log n)."
    },
    {
        id: "alg012", topic: "Algorithms", subtopic: "Sorting", difficulty: "Medium",
        question: "Radix Sort time complexity for n numbers with d digits is:",
        options: ["A) O(n)", "B) O(dn)", "C) O(n log n)", "D) O(n²)"],
        answer: "B", explanation: "Radix Sort processes d digits, each pass is O(n), total O(dn)."
    },
    // GRAPH ALGORITHMS
    {
        id: "alg013", topic: "Algorithms", subtopic: "Graph Algorithms", difficulty: "Easy",
        question: "Dijkstra's algorithm finds:",
        options: ["A) MST", "B) Shortest path from single source", "C) All pairs shortest paths", "D) Maximum flow"],
        answer: "B", explanation: "Dijkstra finds shortest paths from one source to all vertices."
    },
    {
        id: "alg014", topic: "Algorithms", subtopic: "Graph Algorithms", difficulty: "Medium",
        question: "Time complexity of Dijkstra's with binary heap is:",
        options: ["A) O(V)", "B) O(E log V)", "C) O(V²)", "D) O(VE)"],
        answer: "B", explanation: "With binary heap: O((V+E) log V) ≈ O(E log V) for connected graphs."
    },
    {
        id: "alg015", topic: "Algorithms", subtopic: "Graph Algorithms", difficulty: "Medium",
        question: "Dijkstra's algorithm does NOT work with:",
        options: ["A) Directed graphs", "B) Undirected graphs", "C) Negative weight edges", "D) Dense graphs"],
        answer: "C", explanation: "Dijkstra fails with negative edges. Use Bellman-Ford instead."
    },
    {
        id: "alg016", topic: "Algorithms", subtopic: "Graph Algorithms", difficulty: "Medium",
        question: "Bellman-Ford algorithm time complexity is:",
        options: ["A) O(V)", "B) O(E log V)", "C) O(VE)", "D) O(V³)"],
        answer: "C", explanation: "Bellman-Ford relaxes all edges V-1 times, so O(VE)."
    },
    {
        id: "alg017", topic: "Algorithms", subtopic: "Graph Algorithms", difficulty: "Medium",
        question: "Floyd-Warshall algorithm is used for:",
        options: ["A) Single source shortest path", "B) All pairs shortest paths", "C) MST", "D) Topological sort"],
        answer: "B", explanation: "Floyd-Warshall finds shortest paths between all pairs of vertices."
    },
    {
        id: "alg018", topic: "Algorithms", subtopic: "Graph Algorithms", difficulty: "Medium",
        question: "Time complexity of Floyd-Warshall is:",
        options: ["A) O(V²)", "B) O(VE)", "C) O(V³)", "D) O(V² log V)"],
        answer: "C", explanation: "Three nested loops over V vertices: O(V³)."
    },
    {
        id: "alg019", topic: "Algorithms", subtopic: "Graph Algorithms", difficulty: "Easy",
        question: "Kruskal's algorithm is used for:",
        options: ["A) Shortest path", "B) Minimum Spanning Tree", "C) Topological sort", "D) Maximum flow"],
        answer: "B", explanation: "Kruskal's finds MST by adding edges in increasing weight order."
    },
    {
        id: "alg020", topic: "Algorithms", subtopic: "Graph Algorithms", difficulty: "Medium",
        question: "Prim's algorithm time complexity with binary heap is:",
        options: ["A) O(V²)", "B) O(E log V)", "C) O(VE)", "D) O(V log V)"],
        answer: "B", explanation: "With binary heap, Prim's is O(E log V)."
    },
    {
        id: "alg021", topic: "Algorithms", subtopic: "Graph Algorithms", difficulty: "Medium",
        question: "Topological sort is possible only for:",
        options: ["A) Undirected graphs", "B) DAG (Directed Acyclic Graph)", "C) Complete graphs", "D) Cyclic graphs"],
        answer: "B", explanation: "Topological ordering exists only for DAGs."
    },
    // DYNAMIC PROGRAMMING
    {
        id: "alg022", topic: "Algorithms", subtopic: "Dynamic Programming", difficulty: "Easy",
        question: "Dynamic Programming is based on:",
        options: ["A) Divide and conquer", "B) Optimal substructure and overlapping subproblems", "C) Greedy choice", "D) Backtracking"],
        answer: "B", explanation: "DP requires optimal substructure and overlapping subproblems."
    },
    {
        id: "alg023", topic: "Algorithms", subtopic: "Dynamic Programming", difficulty: "Medium",
        question: "Time complexity of 0/1 Knapsack with DP is:",
        options: ["A) O(n)", "B) O(W)", "C) O(nW)", "D) O(2^n)"],
        answer: "C", explanation: "DP table is n×W, each cell computed in O(1)."
    },
    {
        id: "alg024", topic: "Algorithms", subtopic: "Dynamic Programming", difficulty: "Medium",
        question: "LCS (Longest Common Subsequence) of two strings of length m and n has DP complexity:",
        options: ["A) O(m+n)", "B) O(mn)", "C) O(2^(m+n))", "D) O(m log n)"],
        answer: "B", explanation: "DP table is m×n, so O(mn) time and space."
    },
    {
        id: "alg025", topic: "Algorithms", subtopic: "Dynamic Programming", difficulty: "Hard",
        question: "Matrix Chain Multiplication DP complexity is:",
        options: ["A) O(n)", "B) O(n²)", "C) O(n³)", "D) O(2^n)"],
        answer: "C", explanation: "O(n²) subproblems, each taking O(n) to solve = O(n³)."
    },
    // GREEDY
    {
        id: "alg026", topic: "Algorithms", subtopic: "Greedy Algorithms", difficulty: "Easy",
        question: "Greedy algorithm makes:",
        options: ["A) Global optimal choice", "B) Locally optimal choice at each step", "C) Random choice", "D) Worst choice first"],
        answer: "B", explanation: "Greedy makes locally optimal choice hoping for global optimum."
    },
    {
        id: "alg027", topic: "Algorithms", subtopic: "Greedy Algorithms", difficulty: "Medium",
        question: "Activity Selection problem can be solved using:",
        options: ["A) DP only", "B) Greedy only", "C) Both DP and Greedy", "D) Neither"],
        answer: "C", explanation: "Activity Selection can be solved by both, but Greedy is more efficient."
    },
    {
        id: "alg028", topic: "Algorithms", subtopic: "Greedy Algorithms", difficulty: "Medium",
        question: "Huffman Coding uses which approach?",
        options: ["A) Dynamic Programming", "B) Greedy", "C) Backtracking", "D) Brute Force"],
        answer: "B", explanation: "Huffman coding greedily combines two minimum frequency nodes."
    },
    // DIVIDE AND CONQUER
    {
        id: "alg029", topic: "Algorithms", subtopic: "Divide and Conquer", difficulty: "Easy",
        question: "Which algorithm uses Divide and Conquer?",
        options: ["A) Bubble Sort", "B) Merge Sort", "C) Insertion Sort", "D) Selection Sort"],
        answer: "B", explanation: "Merge Sort divides array, recursively sorts, then merges."
    },
    {
        id: "alg030", topic: "Algorithms", subtopic: "Divide and Conquer", difficulty: "Medium",
        question: "Strassen's matrix multiplication complexity is:",
        options: ["A) O(n²)", "B) O(n³)", "C) O(n^2.81)", "D) O(n log n)"],
        answer: "C", explanation: "Strassen's: T(n) = 7T(n/2) + O(n²) = O(n^log₂7) ≈ O(n^2.81)."
    },
    // BACKTRACKING
    {
        id: "alg031", topic: "Algorithms", subtopic: "Backtracking", difficulty: "Medium",
        question: "N-Queens problem is typically solved using:",
        options: ["A) Greedy", "B) Dynamic Programming", "C) Backtracking", "D) Divide and Conquer"],
        answer: "C", explanation: "N-Queens uses backtracking to try placements and undo if invalid."
    },
    {
        id: "alg032", topic: "Algorithms", subtopic: "Backtracking", difficulty: "Medium",
        question: "Time complexity of solving N-Queens using backtracking is:",
        options: ["A) O(n)", "B) O(n²)", "C) O(n!)", "D) O(2^n)"],
        answer: "C", explanation: "Worst case explores O(n!) configurations."
    },
    // SEARCHING
    {
        id: "alg033", topic: "Algorithms", subtopic: "Searching", difficulty: "Easy",
        question: "Linear search time complexity is:",
        options: ["A) O(1)", "B) O(log n)", "C) O(n)", "D) O(n²)"],
        answer: "C", explanation: "May need to check all n elements."
    },
    {
        id: "alg034", topic: "Algorithms", subtopic: "Searching", difficulty: "Medium",
        question: "Binary search requires the array to be:",
        options: ["A) Sorted", "B) Unsorted", "C) Of prime size", "D) Circular"],
        answer: "A", explanation: "Binary search requires sorted array to work correctly."
    },
    {
        id: "alg035", topic: "Algorithms", subtopic: "Searching", difficulty: "Medium",
        question: "Ternary search divides array into:",
        options: ["A) 2 parts", "B) 3 parts", "C) 4 parts", "D) log n parts"],
        answer: "B", explanation: "Ternary search divides into 3 parts using two mid points."
    },
    // STRING ALGORITHMS
    {
        id: "alg036", topic: "Algorithms", subtopic: "String Algorithms", difficulty: "Medium",
        question: "KMP pattern matching time complexity is:",
        options: ["A) O(n)", "B) O(m+n)", "C) O(mn)", "D) O(m log n)"],
        answer: "B", explanation: "KMP preprocesses pattern in O(m), then matches in O(n). Total O(m+n)."
    },
    {
        id: "alg037", topic: "Algorithms", subtopic: "String Algorithms", difficulty: "Hard",
        question: "Rabin-Karp algorithm uses:",
        options: ["A) Suffix trees", "B) Rolling hash", "C) Dynamic programming", "D) Greedy approach"],
        answer: "B", explanation: "Rabin-Karp uses rolling hash for efficient pattern matching."
    },
    // MISC
    {
        id: "alg038", topic: "Algorithms", subtopic: "General", difficulty: "Medium",
        question: "P vs NP problem asks if:",
        options: ["A) P = NP", "B) NP problems can be verified in polynomial time", "C) Every problem in NP can be solved in polynomial time", "D) P is empty"],
        answer: "C", explanation: "P vs NP asks if every problem verifiable in poly-time can be solved in poly-time."
    },
    {
        id: "alg039", topic: "Algorithms", subtopic: "General", difficulty: "Hard",
        question: "NP-Complete problems are:",
        options: ["A) Easiest in NP", "B) Hardest in NP", "C) Not in NP", "D) Always solvable in O(n²)"],
        answer: "B", explanation: "NP-Complete problems are the hardest in NP; all NP problems reduce to them."
    },
    {
        id: "alg040", topic: "Algorithms", subtopic: "General", difficulty: "Medium",
        question: "Which is NP-Complete?",
        options: ["A) Sorting", "B) Binary Search", "C) Travelling Salesman Problem (decision)", "D) BFS"],
        answer: "C", explanation: "TSP decision version is NP-Complete."
    },
    // MORE ALGORITHM QUESTIONS
    {
        id: "alg041", topic: "Algorithms", subtopic: "Time Complexity", difficulty: "Medium",
        question: "Amortized time complexity of n insertions in dynamic array is:",
        options: ["A) O(n²)", "B) O(n)", "C) O(n log n)", "D) O(1) per insertion"], answer: "B",
        explanation: "Though individual insertion may be O(n), amortized cost is O(1) per insert, O(n) total."
    },
    {
        id: "alg042", topic: "Algorithms", subtopic: "Time Complexity", difficulty: "Hard",
        question: "Time complexity T(n) = T(n/2) + T(n/4) + O(n) is:",
        options: ["A) O(n)", "B) O(n log n)", "C) O(n²)", "D) O(n)"], answer: "A",
        explanation: "By Akra-Bazzi or recursion tree: T(n) = O(n)."
    },
    {
        id: "alg043", topic: "Algorithms", subtopic: "Sorting", difficulty: "Easy",
        question: "In-place sorting uses:",
        options: ["A) O(n) extra space", "B) O(1) extra space", "C) O(n²) extra space", "D) No space restrictions"], answer: "B",
        explanation: "In-place sorting uses only O(1) extra memory (constant space)."
    },
    {
        id: "alg044", topic: "Algorithms", subtopic: "Sorting", difficulty: "Medium",
        question: "Counting Sort time complexity is:",
        options: ["A) O(n log n)", "B) O(n + k) where k is range", "C) O(n²)", "D) O(k)"], answer: "B",
        explanation: "Counting Sort counts occurrences in O(n), creates output in O(k). Total O(n+k)."
    },
    {
        id: "alg045", topic: "Algorithms", subtopic: "Sorting", difficulty: "Medium",
        question: "Bucket Sort average case is:",
        options: ["A) O(n)", "B) O(n + n²/k)", "C) O(n + k)", "D) O(n log n)"], answer: "C",
        explanation: "With uniform distribution and k buckets, average is O(n + k). Often O(n)."
    },
    {
        id: "alg046", topic: "Algorithms", subtopic: "Sorting", difficulty: "Hard",
        question: "Any comparison-based sorting lower bound is:",
        options: ["A) O(n)", "B) O(n log n)", "C) Ω(n log n)", "D) Ω(n)"], answer: "C",
        explanation: "Comparison-based sorting cannot do better than Ω(n log n) in worst case."
    },
    {
        id: "alg047", topic: "Algorithms", subtopic: "Sorting", difficulty: "Medium",
        question: "External merge sort is used when:",
        options: ["A) Data fits in RAM", "B) Data is too large for RAM", "C) Data is sorted", "D) Data is small"], answer: "B",
        explanation: "External sort handles data that doesn't fit in memory using disk I/O."
    },
    {
        id: "alg048", topic: "Algorithms", subtopic: "Graph Algorithms", difficulty: "Hard",
        question: "A* algorithm uses:",
        options: ["A) Only actual cost", "B) Only heuristic", "C) Actual cost + admissible heuristic", "D) Random selection"], answer: "C",
        explanation: "A* uses f(n) = g(n) + h(n) where g is actual cost, h is heuristic."
    },
    {
        id: "alg049", topic: "Algorithms", subtopic: "Graph Algorithms", difficulty: "Medium",
        question: "Bellman-Ford can detect:",
        options: ["A) Positive cycles", "B) Negative weight cycles", "C) All cycles", "D) No cycles"], answer: "B",
        explanation: "If after V-1 iterations distances still decrease, negative cycle exists."
    },
    {
        id: "alg050", topic: "Algorithms", subtopic: "Graph Algorithms", difficulty: "Hard",
        question: "Johnson's algorithm for all-pairs shortest paths has complexity:",
        options: ["A) O(V³)", "B) O(VE log V)", "C) O(V²E)", "D) O(V² log V)"], answer: "B",
        explanation: "Bellman-Ford once O(VE) + V Dijkstras O(VE log V) = O(VE log V)."
    },
    {
        id: "alg051", topic: "Algorithms", subtopic: "Graph Algorithms", difficulty: "Hard",
        question: "Ford-Fulkerson method for max flow has complexity:",
        options: ["A) O(VE)", "B) O(Ef) where f is max flow", "C) O(V²E)", "D) O(V³)"], answer: "B",
        explanation: "Each augmenting path found in O(E), max flow value can be f, so O(Ef)."
    },
    {
        id: "alg052", topic: "Algorithms", subtopic: "Graph Algorithms", difficulty: "Hard",
        question: "Edmonds-Karp algorithm (max flow) has complexity:",
        options: ["A) O(VE)", "B) O(VE²)", "C) O(V²E)", "D) O(V³)"], answer: "B",
        explanation: "Uses BFS for augmenting paths, guaranteeing O(VE) augmentations × O(E) = O(VE²)."
    },
    {
        id: "alg053", topic: "Algorithms", subtopic: "Graph Algorithms", difficulty: "Medium",
        question: "Bipartite matching can be solved using:",
        options: ["A) DFS only", "B) Max flow or Hungarian algorithm", "C) MST", "D) Shortest path"], answer: "B",
        explanation: "Bipartite matching reduces to max flow or uses Hungarian algorithm."
    },
    {
        id: "alg054", topic: "Algorithms", subtopic: "Dynamic Programming", difficulty: "Medium",
        question: "Coin change problem (minimum coins) DP complexity is:",
        options: ["A) O(n)", "B) O(nS) where S is sum", "C) O(2^n)", "D) O(n²)"], answer: "B",
        explanation: "DP table has S cells (amounts), each filled in O(n) coins = O(nS)."
    },
    {
        id: "alg055", topic: "Algorithms", subtopic: "Dynamic Programming", difficulty: "Medium",
        question: "Edit Distance (Levenshtein) between strings of length m and n has DP complexity:",
        options: ["A) O(m+n)", "B) O(mn)", "C) O(2^(m+n))", "D) O(max(m,n))"], answer: "B",
        explanation: "DP table is m×n, each cell O(1). Total O(mn)."
    },
    {
        id: "alg056", topic: "Algorithms", subtopic: "Dynamic Programming", difficulty: "Hard",
        question: "Optimal Binary Search Tree DP complexity is:",
        options: ["A) O(n)", "B) O(n²)", "C) O(n³)", "D) O(2^n)"], answer: "C",
        explanation: "O(n²) subproblems, each taking O(n) to compute root = O(n³)."
    },
    {
        id: "alg057", topic: "Algorithms", subtopic: "Dynamic Programming", difficulty: "Medium",
        question: "Longest Increasing Subsequence best DP complexity is:",
        options: ["A) O(n)", "B) O(n²)", "C) O(n log n)", "D) O(2^n)"], answer: "C",
        explanation: "Using binary search with DP: O(n log n). Basic DP is O(n²)."
    },
    {
        id: "alg058", topic: "Algorithms", subtopic: "Dynamic Programming", difficulty: "Hard",
        question: "Travelling Salesperson Problem with DP (Held-Karp) complexity is:",
        options: ["A) O(n!)", "B) O(n² × 2^n)", "C) O(n³)", "D) O(2^n)"], answer: "B",
        explanation: "Held-Karp uses bitmask DP: O(n² × 2^n) subproblems."
    },
    {
        id: "alg059", topic: "Algorithms", subtopic: "Greedy Algorithms", difficulty: "Medium",
        question: "Fractional Knapsack uses:",
        options: ["A) DP only", "B) Greedy (by value/weight ratio)", "C) Backtracking", "D) Brute force"], answer: "B",
        explanation: "Fractional Knapsack solved greedily by sorting on value/weight ratio."
    },
    {
        id: "alg060", topic: "Algorithms", subtopic: "Greedy Algorithms", difficulty: "Medium",
        question: "Job Sequencing with Deadlines is solved using:",
        options: ["A) DP", "B) Greedy (by profit)", "C) Divide and Conquer", "D) BFS"], answer: "B",
        explanation: "Greedy: sort by profit, assign to latest available slot before deadline."
    },
    {
        id: "alg061", topic: "Algorithms", subtopic: "Divide and Conquer", difficulty: "Hard",
        question: "Karatsuba multiplication complexity is:",
        options: ["A) O(n²)", "B) O(n^1.585)", "C) O(n log n)", "D) O(n)"], answer: "B",
        explanation: "Karatsuba: T(n) = 3T(n/2) + O(n) = O(n^log₂3) ≈ O(n^1.585)."
    },
    {
        id: "alg062", topic: "Algorithms", subtopic: "Divide and Conquer", difficulty: "Medium",
        question: "Closest pair of points complexity is:",
        options: ["A) O(n²)", "B) O(n log n)", "C) O(n)", "D) O(n log² n)"], answer: "B",
        explanation: "Divide and conquer achieves O(n log n) for closest pair."
    },
    {
        id: "alg063", topic: "Algorithms", subtopic: "Divide and Conquer", difficulty: "Medium",
        question: "Maximum subarray sum (Kadane's) algorithm complexity is:",
        options: ["A) O(n)", "B) O(n log n)", "C) O(n²)", "D) O(log n)"], answer: "A",
        explanation: "Kadane's algorithm finds max subarray sum in single pass O(n)."
    },
    {
        id: "alg064", topic: "Algorithms", subtopic: "Backtracking", difficulty: "Hard",
        question: "Sudoku solving uses:",
        options: ["A) Greedy", "B) Backtracking", "C) DP", "D) Divide and Conquer"], answer: "B",
        explanation: "Sudoku solved by trying values and backtracking on conflicts."
    },
    {
        id: "alg065", topic: "Algorithms", subtopic: "Backtracking", difficulty: "Medium",
        question: "Graph coloring problem is solved using:",
        options: ["A) BFS", "B) Greedy only", "C) Backtracking", "D) Dijkstra"], answer: "C",
        explanation: "Try colors for vertices, backtrack if neighbor has same color."
    },
    {
        id: "alg066", topic: "Algorithms", subtopic: "Backtracking", difficulty: "Hard",
        question: "Hamiltonian Path can be solved using:",
        options: ["A) BFS in O(V+E)", "B) Backtracking or DP with bitmask", "C) Greedy", "D) MST"], answer: "B",
        explanation: "Hamiltonian Path: backtracking or DP with bitmask O(n² × 2^n)."
    },
    {
        id: "alg067", topic: "Algorithms", subtopic: "String Algorithms", difficulty: "Hard",
        question: "Z-algorithm time complexity is:",
        options: ["A) O(n)", "B) O(n²)", "C) O(n log n)", "D) O(mn)"], answer: "A",
        explanation: "Z-algorithm computes Z-array in O(n) time."
    },
    {
        id: "alg068", topic: "Algorithms", subtopic: "String Algorithms", difficulty: "Hard",
        question: "Suffix Array construction can be done in:",
        options: ["A) O(n)", "B) O(n log n)", "C) O(n²)", "D) O(n log² n)"], answer: "A",
        explanation: "SA-IS and DC3 build suffix arrays in O(n). Naive is O(n² log n)."
    },
    {
        id: "alg069", topic: "Algorithms", subtopic: "String Algorithms", difficulty: "Hard",
        question: "Longest Common Prefix array with suffix array enables:",
        options: ["A) Substring search", "B) Many string queries efficiently", "C) Sorting", "D) Compression only"], answer: "B",
        explanation: "LCP array enables efficient longest repeated substring, pattern matching, etc."
    },
    {
        id: "alg070", topic: "Algorithms", subtopic: "String Algorithms", difficulty: "Hard",
        question: "Aho-Corasick algorithm is used for:",
        options: ["A) Single pattern matching", "B) Multiple pattern matching", "C) Sorting strings", "D) Compression"], answer: "B",
        explanation: "Aho-Corasick matches multiple patterns simultaneously using automaton."
    },
    {
        id: "alg071", topic: "Algorithms", subtopic: "Number Theory", difficulty: "Medium",
        question: "GCD using Euclidean algorithm time complexity is:",
        options: ["A) O(1)", "B) O(log(min(a,b)))", "C) O(min(a,b))", "D) O(a+b)"], answer: "B",
        explanation: "Euclidean algorithm runs in O(log(min(a,b))) steps."
    },
    {
        id: "alg072", topic: "Algorithms", subtopic: "Number Theory", difficulty: "Hard",
        question: "Fast exponentiation (a^n mod m) complexity is:",
        options: ["A) O(n)", "B) O(log n)", "C) O(√n)", "D) O(1)"], answer: "B",
        explanation: "Binary exponentiation computes a^n in O(log n) multiplications."
    },
    {
        id: "alg073", topic: "Algorithms", subtopic: "Number Theory", difficulty: "Hard",
        question: "Sieve of Eratosthenes finds all primes up to n in:",
        options: ["A) O(n)", "B) O(n log log n)", "C) O(n log n)", "D) O(n²)"], answer: "B",
        explanation: "Sieve complexity is O(n log log n) - nearly linear."
    },
    {
        id: "alg074", topic: "Algorithms", subtopic: "Geometry", difficulty: "Hard",
        question: "Convex hull using Graham scan or Jarvis march is:",
        options: ["A) O(n)", "B) O(n log n)", "C) O(n²)", "D) O(n³)"], answer: "B",
        explanation: "Graham scan: sort O(n log n) + scan O(n) = O(n log n)."
    },
    {
        id: "alg075", topic: "Algorithms", subtopic: "Geometry", difficulty: "Hard",
        question: "Line segment intersection can be checked in:",
        options: ["A) O(n)", "B) O(1)", "C) O(log n)", "D) O(n²)"], answer: "B",
        explanation: "Cross product checks tell if two segments intersect in O(1)."
    },
    {
        id: "alg076", topic: "Algorithms", subtopic: "General", difficulty: "Hard",
        question: "Randomized QuickSelect for k-th element average case is:",
        options: ["A) O(log n)", "B) O(n)", "C) O(n log n)", "D) O(n²)"], answer: "B",
        explanation: "Expected O(n) by recursing on one partition only."
    },
    {
        id: "alg077", topic: "Algorithms", subtopic: "General", difficulty: "Hard",
        question: "Median of Medians algorithm guarantees:",
        options: ["A) O(n) worst case for selection", "B) O(n log n)", "C) O(n²)", "D) O(log n)"], answer: "A",
        explanation: "Median of medians gives O(n) worst case for k-th element selection."
    },
    {
        id: "alg078", topic: "Algorithms", subtopic: "General", difficulty: "Medium",
        question: "Reservoir Sampling is used for:",
        options: ["A) Sorting", "B) Random sample from stream of unknown size", "C) Searching", "D) Compression"], answer: "B",
        explanation: "Reservoir sampling selects k items uniformly from stream of unknown length."
    },
    {
        id: "alg079", topic: "Algorithms", subtopic: "General", difficulty: "Hard",
        question: "Bloom Filter provides:",
        options: ["A) Exact membership test", "B) Probabilistic membership with false positives, no false negatives", "C) Sorting", "D) Compression"], answer: "B",
        explanation: "Bloom filter: may say 'possibly in set', never wrongly says 'not in set'."
    },
    {
        id: "alg080", topic: "Algorithms", subtopic: "General", difficulty: "Medium",
        question: "Two-pointer technique is often used for:",
        options: ["A) Sorting", "B) Problems on sorted arrays like pair sum", "C) Graph traversal", "D) Tree operations"], answer: "B",
        explanation: "Two pointers efficiently solve problems like pair sum in sorted array in O(n)."
    },
    {
        id: "alg081", topic: "Algorithms", subtopic: "General", difficulty: "Medium",
        question: "Sliding window technique is used for:",
        options: ["A) Graph problems", "B) Subarray/substring problems with constraints", "C) Sorting", "D) Tree traversal"], answer: "B",
        explanation: "Sliding window finds optimal subarray/substring efficiently."
    },
    {
        id: "alg082", topic: "Algorithms", subtopic: "Graph Algorithms", difficulty: "Medium",
        question: "Kruskal's algorithm uses which data structure?",
        options: ["A) Queue", "B) Union-Find (Disjoint Set)", "C) Stack", "D) Hash Table"], answer: "B",
        explanation: "Kruskal uses Union-Find to check if adding edge creates cycle."
    },
    {
        id: "alg083", topic: "Algorithms", subtopic: "Graph Algorithms", difficulty: "Medium",
        question: "Time complexity of Kruskal's algorithm is:",
        options: ["A) O(V²)", "B) O(E log E)", "C) O(VE)", "D) O(V + E)"], answer: "B",
        explanation: "Sort edges O(E log E) + union-find operations O(E α(V)) = O(E log E)."
    },
    {
        id: "alg084", topic: "Algorithms", subtopic: "Graph Algorithms", difficulty: "Hard",
        question: "Minimum cut in undirected graph equals:",
        options: ["A) Maximum flow", "B) Shortest path", "C) MST weight", "D) Number of vertices"], answer: "A",
        explanation: "Max-flow min-cut theorem: maximum flow = minimum cut capacity."
    },
    {
        id: "alg085", topic: "Algorithms", subtopic: "Dynamic Programming", difficulty: "Medium",
        question: "Rod cutting problem DP complexity is:",
        options: ["A) O(n)", "B) O(n²)", "C) O(2^n)", "D) O(n log n)"], answer: "B",
        explanation: "For each length (n), consider all cuts (n), so O(n²)."
    },
    {
        id: "alg086", topic: "Algorithms", subtopic: "Dynamic Programming", difficulty: "Hard",
        question: "Subset Sum problem is:",
        options: ["A) P", "B) NP-Complete", "C) Not in NP", "D) Undecidable"], answer: "B",
        explanation: "Subset Sum is NP-Complete, though pseudo-polynomial DP exists."
    },
    {
        id: "alg087", topic: "Algorithms", subtopic: "Greedy Algorithms", difficulty: "Medium",
        question: "Interval scheduling maximization uses greedy based on:",
        options: ["A) Start time", "B) End time (earliest finish)", "C) Duration", "D) Random"], answer: "B",
        explanation: "Sort by finish time, greedily select non-overlapping intervals."
    },
    {
        id: "alg088", topic: "Algorithms", subtopic: "General", difficulty: "Hard",
        question: "Approximate algorithms are used for:",
        options: ["A) P problems", "B) NP-hard problems where exact solution is infeasible", "C) Sorting", "D) Searching"], answer: "B",
        explanation: "Approximation algorithms give near-optimal solutions for hard problems."
    },
    {
        id: "alg089", topic: "Algorithms", subtopic: "General", difficulty: "Hard",
        question: "2-approximation for vertex cover means:",
        options: ["A) Solution is exactly 2 times optimal", "B) Solution is at most 2 times optimal", "C) Solution equals optimal", "D) Solution is random"], answer: "B",
        explanation: "2-approximation guarantees solution ≤ 2 × optimal."
    },
    {
        id: "alg090", topic: "Algorithms", subtopic: "General", difficulty: "Medium",
        question: "Online algorithm processes input:",
        options: ["A) All at once", "B) Sequentially without knowing future", "C) In reverse", "D) Randomly"], answer: "B",
        explanation: "Online algorithms make decisions as input arrives, without lookahead."
    },
    // NEW CORE FOUNDATIONAL QUESTIONS
    {
        id: "alg091", topic: "Algorithms", subtopic: "Time Complexity", difficulty: "Hard",
        question: "Time complexity of T(n) = 3T(n/2) + n² using Master theorem is:",
        options: ["A) O(n²)", "B) O(n² log n)", "C) O(n^1.58)", "D) O(n³)"], answer: "A",
        explanation: "a=3, b=2, f(n)=n². log_2(3)≈1.58. Since n² dominates (Case 3), T(n)=O(n²)."
    },
    {
        id: "alg092", topic: "Algorithms", subtopic: "Time Complexity", difficulty: "Hard",
        question: "Time complexity of T(n) = T(n/2) + T(n/3) + n is:",
        options: ["A) O(n)", "B) O(n log n)", "C) O(n²)", "D) O(2^n)"], answer: "A",
        explanation: "Using Akra-Bazzi method or substitution, T(n) = O(n)."
    },
    {
        id: "alg093", topic: "Algorithms", subtopic: "Space Complexity", difficulty: "Medium",
        question: "Space complexity of recursive factorial function is:",
        options: ["A) O(1)", "B) O(log n)", "C) O(n)", "D) O(n²)"], answer: "C",
        explanation: "Each recursive call uses stack space, n calls deep = O(n) space."
    },
    {
        id: "alg094", topic: "Algorithms", subtopic: "Space Complexity", difficulty: "Medium",
        question: "In-place sorting algorithm uses space complexity of:",
        options: ["A) O(n)", "B) O(1) auxiliary space", "C) O(n²)", "D) O(n log n)"], answer: "B",
        explanation: "In-place algorithms use O(1) extra space beyond input storage."
    },
    {
        id: "alg095", topic: "Algorithms", subtopic: "Sorting", difficulty: "Hard",
        question: "Lower bound for comparison-based sorting is:",
        options: ["A) O(n)", "B) O(n log n)", "C) Ω(n log n)", "D) O(n²)"], answer: "C",
        explanation: "Decision tree argument proves Ω(n log n) lower bound for comparison sorts."
    },
    {
        id: "alg096", topic: "Algorithms", subtopic: "Sorting", difficulty: "Medium",
        question: "Counting sort time complexity is O(n+k) where k is:",
        options: ["A) Number of elements", "B) Range of values", "C) Number of comparisons", "D) Recursion depth"], answer: "B",
        explanation: "k is the range (max-min+1) of input values."
    },
    {
        id: "alg097", topic: "Algorithms", subtopic: "Sorting", difficulty: "Medium",
        question: "Radix sort for n numbers with d digits using base b takes:",
        options: ["A) O(n²)", "B) O(d(n+b))", "C) O(n log n)", "D) O(d*n²)"], answer: "B",
        explanation: "d passes of counting sort, each O(n+b), total O(d(n+b))."
    },
    {
        id: "alg098", topic: "Algorithms", subtopic: "Graph Algorithms", difficulty: "Hard",
        question: "Bellman-Ford algorithm can detect:",
        options: ["A) Positive cycles", "B) Negative weight cycles", "C) Only shortest paths", "D) Minimum spanning tree"], answer: "B",
        explanation: "After V-1 iterations, if any edge can still be relaxed, negative cycle exists."
    },
    {
        id: "alg099", topic: "Algorithms", subtopic: "Graph Algorithms", difficulty: "Hard",
        question: "Floyd-Warshall algorithm for all-pairs shortest path has complexity:",
        options: ["A) O(V²)", "B) O(V³)", "C) O(VE)", "D) O(V log V)"], answer: "B",
        explanation: "Three nested loops over V vertices = O(V³)."
    },
    {
        id: "alg100", topic: "Algorithms", subtopic: "Graph Algorithms", difficulty: "Medium",
        question: "Johnson's algorithm for sparse graphs combines:",
        options: ["A) BFS and DFS", "B) Bellman-Ford and Dijkstra", "C) Prim's and Kruskal's", "D) Floyd and Warshall"], answer: "B",
        explanation: "Johnson's uses Bellman-Ford for reweighting, then V Dijkstra runs."
    },
    {
        id: "alg101", topic: "Algorithms", subtopic: "Dynamic Programming", difficulty: "Hard",
        question: "Optimal substructure property means:",
        options: ["A) All subproblems are independent", "B) Optimal solution contains optimal solutions to subproblems", "C) Greedy always works", "D) No overlapping subproblems"], answer: "B",
        explanation: "Optimal substructure: optimal solution can be constructed from optimal subproblem solutions."
    },
    {
        id: "alg102", topic: "Algorithms", subtopic: "Dynamic Programming", difficulty: "Medium",
        question: "Overlapping subproblems means:",
        options: ["A) Same subproblem is solved multiple times", "B) Subproblems are independent", "C) No recursion", "D) Only one subproblem"], answer: "A",
        explanation: "DP is beneficial when same subproblems recur - memoization avoids recomputation."
    },
    {
        id: "alg103", topic: "Algorithms", subtopic: "Divide and Conquer", difficulty: "Medium",
        question: "Strassen's matrix multiplication complexity is:",
        options: ["A) O(n³)", "B) O(n^2.81)", "C) O(n²)", "D) O(n⁴)"], answer: "B",
        explanation: "Strassen reduces 8 multiplications to 7, giving O(n^log_2(7)) ≈ O(n^2.81)."
    },
    {
        id: "alg104", topic: "Algorithms", subtopic: "Divide and Conquer", difficulty: "Hard",
        question: "Karatsuba multiplication for n-digit numbers has complexity:",
        options: ["A) O(n²)", "B) O(n^1.58)", "C) O(n log n)", "D) O(n)"], answer: "B",
        explanation: "Karatsuba: T(n) = 3T(n/2) + O(n), giving O(n^log_2(3)) ≈ O(n^1.58)."
    },
    {
        id: "alg105", topic: "Algorithms", subtopic: "Greedy Algorithms", difficulty: "Medium",
        question: "Which is NOT a greedy algorithm property requirement?",
        options: ["A) Optimal substructure", "B) Greedy choice property", "C) Overlapping subproblems", "D) Local optimal leads to global optimal"], answer: "C",
        explanation: "Greedy needs optimal substructure and greedy choice, NOT overlapping subproblems (that's DP)."
    },
    {
        id: "alg106", topic: "Algorithms", subtopic: "String Algorithms", difficulty: "Hard",
        question: "KMP pattern matching algorithm preprocesses pattern in:",
        options: ["A) O(n)", "B) O(m) where m is pattern length", "C) O(n+m)", "D) O(nm)"], answer: "B",
        explanation: "KMP builds failure function for pattern in O(m) time."
    },
    {
        id: "alg107", topic: "Algorithms", subtopic: "String Algorithms", difficulty: "Hard",
        question: "Suffix array can be constructed in:",
        options: ["A) O(n²)", "B) O(n log n) or O(n)", "C) O(n³)", "D) O(2^n)"], answer: "B",
        explanation: "Suffix array construction: O(n log n) with sorting, O(n) with SA-IS algorithm."
    },
    {
        id: "alg108", topic: "Algorithms", subtopic: "General", difficulty: "Hard",
        question: "P = NP would imply:",
        options: ["A) All problems are easy", "B) Every problem verifiable in polynomial time is solvable in polynomial time", "C) No polynomial algorithms exist", "D) Sorting is hard"], answer: "B",
        explanation: "P=NP means problems with polynomial-time verification also have polynomial-time solutions."
    },
    {
        id: "alg109", topic: "Algorithms", subtopic: "General", difficulty: "Hard",
        question: "NP-hard problems are:",
        options: ["A) Always in NP", "B) At least as hard as hardest NP problems", "C) Always polynomial", "D) Always exponential"], answer: "B",
        explanation: "NP-hard: as hard as hardest NP problems. May or may not be in NP."
    },
    {
        id: "alg110", topic: "Algorithms", subtopic: "General", difficulty: "Hard",
        question: "Cook-Levin theorem established that SAT is:",
        options: ["A) P", "B) NP-Complete (first known)", "C) PSPACE-Complete", "D) Undecidable"], answer: "B",
        explanation: "Cook-Levin proved SAT is NP-Complete, enabling other NP-completeness proofs."
    },
    {
        id: "alg111", topic: "Algorithms", subtopic: "Graph Algorithms", difficulty: "Medium",
        question: "Time complexity of Kruskal's MST algorithm with Union-Find is:",
        options: ["A) O(V²)", "B) O(E log E)", "C) O(E log V)", "D) Both B and C are correct"], answer: "D",
        explanation: "O(E log E) for sorting = O(E log V) since E ≤ V²."
    },
    {
        id: "alg112", topic: "Algorithms", subtopic: "Graph Algorithms", difficulty: "Medium",
        question: "Number of spanning trees in a complete graph K_n is:",
        options: ["A) n", "B) n!", "C) n^(n-2)", "D) 2^n"], answer: "C",
        explanation: "Cayley's formula: complete graph on n vertices has n^(n-2) spanning trees."
    },
    {
        id: "alg113", topic: "Algorithms", subtopic: "Searching", difficulty: "Medium",
        question: "Interpolation search has average complexity on uniformly distributed data:",
        options: ["A) O(n)", "B) O(log log n)", "C) O(log n)", "D) O(1)"], answer: "B",
        explanation: "For uniform distribution, interpolation search averages O(log log n)."
    },
    {
        id: "alg114", topic: "Algorithms", subtopic: "Searching", difficulty: "Medium",
        question: "Jump search for array of size n uses:",
        options: ["A) O(n) comparisons", "B) O(√n) comparisons", "C) O(log n) comparisons", "D) O(n²) comparisons"], answer: "B",
        explanation: "Jump by √n blocks, then linear search in block = O(√n)."
    },
    {
        id: "alg115", topic: "Algorithms", subtopic: "Dynamic Programming", difficulty: "Hard",
        question: "Traveling Salesman Problem (TSP) using DP bitmask has complexity:",
        options: ["A) O(n!)", "B) O(n² * 2^n)", "C) O(n³)", "D) O(2^n)"], answer: "B",
        explanation: "DP with bitmask: O(n² * 2^n) - still exponential but better than O(n!)."
    },
    {
        id: "alg116", topic: "Algorithms", subtopic: "Graph Algorithms", difficulty: "Hard",
        question: "Maximum bipartite matching can be found using:",
        options: ["A) DFS only", "B) Hopcroft-Karp or Hungarian algorithm", "C) Dijkstra", "D) Prim's algorithm"], answer: "B",
        explanation: "Hopcroft-Karp finds maximum matching in O(E√V) time."
    },
    {
        id: "alg117", topic: "Algorithms", subtopic: "General", difficulty: "Medium",
        question: "Randomized QuickSelect for finding k-th smallest has expected time:",
        options: ["A) O(n log n)", "B) O(n)", "C) O(n²)", "D) O(log n)"], answer: "B",
        explanation: "Random pivot gives expected O(n) for selection (median-of-medians guarantees O(n))."
    },
    {
        id: "alg118", topic: "Algorithms", subtopic: "General", difficulty: "Hard",
        question: "Monte Carlo algorithms:",
        options: ["A) Always give correct answer", "B) May give incorrect answer with bounded probability", "C) Never terminate", "D) Use no randomization"], answer: "B",
        explanation: "Monte Carlo: bounded error probability. Las Vegas: always correct but random runtime."
    },
    {
        id: "alg119", topic: "Algorithms", subtopic: "Graph Algorithms", difficulty: "Hard",
        question: "Network flow Ford-Fulkerson with integer capacities terminates in:",
        options: ["A) O(V+E)", "B) O(E*max_flow)", "C) O(VE²)", "D) O(V³)"], answer: "B",
        explanation: "Ford-Fulkerson: O(E*f) where f is max flow value."
    },
    {
        id: "alg120", topic: "Algorithms", subtopic: "Graph Algorithms", difficulty: "Hard",
        question: "Edmonds-Karp (BFS-based Ford-Fulkerson) complexity is:",
        options: ["A) O(E*max_flow)", "B) O(VE²)", "C) O(V²E)", "D) O(V³)"], answer: "B",
        explanation: "Edmonds-Karp guarantees O(VE²) by using BFS for augmenting paths."
    }
];
export default algorithmsQuestions;

