// Engineering Mathematics Questions for BARC CSE Exam
// Topics: Discrete Math, Probability, Linear Algebra, Calculus, Graph Theory

export const engineeringMathQuestions = [
    // DISCRETE MATHEMATICS
    {
        id: "em001",
        topic: "Discrete Mathematics",
        subtopic: "Sets and Relations",
        difficulty: "Easy",
        question: "If A = {1, 2, 3} and B = {2, 3, 4}, what is A ∩ B?",
        options: ["A) {1, 2, 3, 4}", "B) {2, 3}", "C) {1, 4}", "D) {1}"],
        answer: "B",
        explanation: "A ∩ B (intersection) contains elements common to both sets. Common elements are 2 and 3."
    },
    {
        id: "em002",
        topic: "Discrete Mathematics",
        subtopic: "Sets and Relations",
        difficulty: "Easy",
        question: "The number of subsets of a set with n elements is:",
        options: ["A) n", "B) 2n", "C) 2^n", "D) n^2"],
        answer: "C",
        explanation: "For each element, we have 2 choices (include or exclude). So total subsets = 2^n."
    },
    {
        id: "em003",
        topic: "Discrete Mathematics",
        subtopic: "Sets and Relations",
        difficulty: "Medium",
        question: "A relation R on set A is an equivalence relation if it is:",
        options: ["A) Reflexive only", "B) Symmetric only", "C) Transitive only", "D) Reflexive, Symmetric, and Transitive"],
        answer: "D",
        explanation: "An equivalence relation must satisfy all three properties: reflexive, symmetric, and transitive."
    },
    {
        id: "em004",
        topic: "Discrete Mathematics",
        subtopic: "Functions",
        difficulty: "Easy",
        question: "A function f: A → B is called bijective if it is:",
        options: ["A) One-to-one only", "B) Onto only", "C) Both one-to-one and onto", "D) Neither one-to-one nor onto"],
        answer: "C",
        explanation: "A bijective function is both injective (one-to-one) and surjective (onto)."
    },
    {
        id: "em005",
        topic: "Discrete Mathematics",
        subtopic: "Functions",
        difficulty: "Medium",
        question: "The number of functions from a set A with m elements to a set B with n elements is:",
        options: ["A) m^n", "B) n^m", "C) m × n", "D) m + n"],
        answer: "B",
        explanation: "Each element in A can map to any of n elements in B. So total functions = n^m."
    },
    {
        id: "em006",
        topic: "Discrete Mathematics",
        subtopic: "Propositional Logic",
        difficulty: "Easy",
        question: "The negation of p → q is:",
        options: ["A) ¬p → ¬q", "B) p ∧ ¬q", "C) ¬p ∧ q", "D) ¬p → q"],
        answer: "B",
        explanation: "p → q is equivalent to ¬p ∨ q. Its negation is ¬(¬p ∨ q) = p ∧ ¬q."
    },
    {
        id: "em007",
        topic: "Discrete Mathematics",
        subtopic: "Propositional Logic",
        difficulty: "Easy",
        question: "Which of the following is a tautology?",
        options: ["A) p ∧ ¬p", "B) p ∨ ¬p", "C) p → ¬p", "D) p ∧ q"],
        answer: "B",
        explanation: "p ∨ ¬p is always true regardless of the value of p. This is the Law of Excluded Middle."
    },
    {
        id: "em008",
        topic: "Discrete Mathematics",
        subtopic: "Propositional Logic",
        difficulty: "Medium",
        question: "The contrapositive of 'If it rains, the ground is wet' is:",
        options: ["A) If ground is wet, it rains", "B) If it doesn't rain, ground is not wet", "C) If ground is not wet, it doesn't rain", "D) It rains and ground is not wet"],
        answer: "C",
        explanation: "Contrapositive of p → q is ¬q → ¬p. 'Ground not wet' → 'doesn't rain'."
    },
    {
        id: "em009",
        topic: "Discrete Mathematics",
        subtopic: "Combinatorics",
        difficulty: "Easy",
        question: "The number of ways to arrange n distinct objects is:",
        options: ["A) n", "B) n!", "C) 2^n", "D) n^n"],
        answer: "B",
        explanation: "n distinct objects can be arranged in n! = n × (n-1) × ... × 1 ways."
    },
    {
        id: "em010",
        topic: "Discrete Mathematics",
        subtopic: "Combinatorics",
        difficulty: "Easy",
        question: "C(n, r) represents:",
        options: ["A) Permutations of n objects taken r at a time", "B) Combinations of n objects taken r at a time", "C) n raised to power r", "D) r raised to power n"],
        answer: "B",
        explanation: "C(n,r) or nCr represents combinations - selecting r objects from n without regard to order."
    },
    {
        id: "em011",
        topic: "Discrete Mathematics",
        subtopic: "Combinatorics",
        difficulty: "Medium",
        question: "The value of C(10, 3) is:",
        options: ["A) 120", "B) 720", "C) 210", "D) 1000"],
        answer: "A",
        explanation: "C(10,3) = 10!/(3! × 7!) = (10 × 9 × 8)/(3 × 2 × 1) = 720/6 = 120."
    },
    {
        id: "em012",
        topic: "Discrete Mathematics",
        subtopic: "Combinatorics",
        difficulty: "Medium",
        question: "How many 4-digit numbers can be formed using digits 1, 2, 3, 4, 5 without repetition?",
        options: ["A) 120", "B) 625", "C) 24", "D) 5"],
        answer: "A",
        explanation: "P(5,4) = 5!/(5-4)! = 5!/1! = 5 × 4 × 3 × 2 = 120."
    },
    {
        id: "em013",
        topic: "Discrete Mathematics",
        subtopic: "Recurrence Relations",
        difficulty: "Medium",
        question: "The solution to recurrence T(n) = T(n-1) + 1 with T(0) = 0 is:",
        options: ["A) T(n) = n", "B) T(n) = n^2", "C) T(n) = 2^n", "D) T(n) = log n"],
        answer: "A",
        explanation: "T(n) = T(n-1) + 1 = T(n-2) + 2 = ... = T(0) + n = n."
    },
    {
        id: "em014",
        topic: "Discrete Mathematics",
        subtopic: "Recurrence Relations",
        difficulty: "Hard",
        question: "The closed form of Fibonacci recurrence F(n) = F(n-1) + F(n-2) grows as:",
        options: ["A) O(n)", "B) O(n^2)", "C) O(φ^n) where φ ≈ 1.618", "D) O(2^n)"],
        answer: "C",
        explanation: "Fibonacci numbers grow exponentially with base φ (golden ratio ≈ 1.618)."
    },
    {
        id: "em015",
        topic: "Discrete Mathematics",
        subtopic: "Graph Theory",
        difficulty: "Easy",
        question: "A graph with n vertices and n-1 edges that is connected is called:",
        options: ["A) Complete graph", "B) Bipartite graph", "C) Tree", "D) Cycle"],
        answer: "C",
        explanation: "A tree is a connected acyclic graph with exactly n-1 edges for n vertices."
    },
    {
        id: "em016",
        topic: "Discrete Mathematics",
        subtopic: "Graph Theory",
        difficulty: "Easy",
        question: "The maximum number of edges in a simple graph with n vertices is:",
        options: ["A) n", "B) n-1", "C) n(n-1)/2", "D) n^2"],
        answer: "C",
        explanation: "In a complete graph, each vertex connects to n-1 others. Total = n(n-1)/2 (dividing by 2 to avoid counting twice)."
    },
    {
        id: "em017",
        topic: "Discrete Mathematics",
        subtopic: "Graph Theory",
        difficulty: "Medium",
        question: "A graph is bipartite if and only if it contains:",
        options: ["A) No cycles", "B) No odd-length cycles", "C) No even-length cycles", "D) At least one cycle"],
        answer: "B",
        explanation: "A graph is bipartite iff it contains no odd-length cycles. This is a fundamental theorem."
    },
    {
        id: "em018",
        topic: "Discrete Mathematics",
        subtopic: "Graph Theory",
        difficulty: "Medium",
        question: "In a graph, the sum of degrees of all vertices is:",
        options: ["A) Equal to number of vertices", "B) Equal to number of edges", "C) Twice the number of edges", "D) Half the number of edges"],
        answer: "C",
        explanation: "Handshaking lemma: Sum of degrees = 2 × number of edges (each edge contributes 2 to total degree)."
    },
    {
        id: "em019",
        topic: "Discrete Mathematics",
        subtopic: "Graph Theory",
        difficulty: "Hard",
        question: "The chromatic number of a complete graph K_n is:",
        options: ["A) 1", "B) 2", "C) n-1", "D) n"],
        answer: "D",
        explanation: "In K_n, every vertex is adjacent to every other. Each vertex needs a unique color, so χ(K_n) = n."
    },
    {
        id: "em020",
        topic: "Discrete Mathematics",
        subtopic: "Graph Theory",
        difficulty: "Medium",
        question: "A Hamiltonian path visits:",
        options: ["A) Every edge exactly once", "B) Every vertex exactly once", "C) Every edge at least once", "D) Some vertices multiple times"],
        answer: "B",
        explanation: "A Hamiltonian path visits every vertex exactly once. An Eulerian path visits every edge exactly once."
    },
    // PROBABILITY
    {
        id: "em021",
        topic: "Probability",
        subtopic: "Basic Probability",
        difficulty: "Easy",
        question: "If P(A) = 0.3 and P(B) = 0.4, and A and B are independent, then P(A ∩ B) is:",
        options: ["A) 0.7", "B) 0.12", "C) 0.1", "D) 0.58"],
        answer: "B",
        explanation: "For independent events: P(A ∩ B) = P(A) × P(B) = 0.3 × 0.4 = 0.12."
    },
    {
        id: "em022",
        topic: "Probability",
        subtopic: "Basic Probability",
        difficulty: "Easy",
        question: "If P(A) = 0.6, then P(A') is:",
        options: ["A) 0.6", "B) 0.4", "C) 1.6", "D) -0.6"],
        answer: "B",
        explanation: "P(A') = 1 - P(A) = 1 - 0.6 = 0.4. Complement rule."
    },
    {
        id: "em023",
        topic: "Probability",
        subtopic: "Basic Probability",
        difficulty: "Easy",
        question: "A fair die is thrown. The probability of getting an even number is:",
        options: ["A) 1/6", "B) 1/3", "C) 1/2", "D) 2/3"],
        answer: "C",
        explanation: "Even numbers on die: 2, 4, 6. P(even) = 3/6 = 1/2."
    },
    {
        id: "em024",
        topic: "Probability",
        subtopic: "Conditional Probability",
        difficulty: "Medium",
        question: "P(A|B) is defined as:",
        options: ["A) P(A) × P(B)", "B) P(A ∩ B) / P(B)", "C) P(A ∩ B) / P(A)", "D) P(A) + P(B)"],
        answer: "B",
        explanation: "Conditional probability P(A|B) = P(A ∩ B) / P(B), probability of A given B has occurred."
    },
    {
        id: "em025",
        topic: "Probability",
        subtopic: "Bayes Theorem",
        difficulty: "Hard",
        question: "According to Bayes' theorem, P(A|B) equals:",
        options: ["A) P(B|A) × P(A) / P(B)", "B) P(A) × P(B)", "C) P(A) / P(B)", "D) P(B) / P(A)"],
        answer: "A",
        explanation: "Bayes' theorem: P(A|B) = P(B|A) × P(A) / P(B)."
    },
    {
        id: "em026",
        topic: "Probability",
        subtopic: "Random Variables",
        difficulty: "Medium",
        question: "The expected value E[X] of a discrete random variable X is:",
        options: ["A) Most likely value of X", "B) Σ x × P(X=x)", "C) Maximum value of X", "D) Median of X"],
        answer: "B",
        explanation: "E[X] = Σ x × P(X=x), the weighted average of all possible values."
    },
    {
        id: "em027",
        topic: "Probability",
        subtopic: "Random Variables",
        difficulty: "Medium",
        question: "Variance of X is defined as:",
        options: ["A) E[X]", "B) E[X^2]", "C) E[X^2] - (E[X])^2", "D) E[X] - E[X^2]"],
        answer: "C",
        explanation: "Var(X) = E[X^2] - (E[X])^2 = E[(X - μ)^2]."
    },
    {
        id: "em028",
        topic: "Probability",
        subtopic: "Distributions",
        difficulty: "Medium",
        question: "For a Binomial distribution B(n, p), the mean is:",
        options: ["A) n + p", "B) np", "C) n/p", "D) p/n"],
        answer: "B",
        explanation: "Mean of Binomial(n, p) = np."
    },
    {
        id: "em029",
        topic: "Probability",
        subtopic: "Distributions",
        difficulty: "Medium",
        question: "The variance of a Poisson distribution with parameter λ is:",
        options: ["A) λ^2", "B) λ", "C) √λ", "D) 1/λ"],
        answer: "B",
        explanation: "For Poisson distribution, both mean and variance equal λ."
    },
    {
        id: "em030",
        topic: "Probability",
        subtopic: "Distributions",
        difficulty: "Medium",
        question: "In a Normal distribution N(μ, σ²), approximately what percentage of data lies within μ ± σ?",
        options: ["A) 50%", "B) 68%", "C) 95%", "D) 99.7%"],
        answer: "B",
        explanation: "68-95-99.7 rule: About 68% within 1σ, 95% within 2σ, 99.7% within 3σ."
    },
    // LINEAR ALGEBRA
    {
        id: "em031",
        topic: "Linear Algebra",
        subtopic: "Matrices",
        difficulty: "Easy",
        question: "The determinant of a 2×2 identity matrix is:",
        options: ["A) 0", "B) 1", "C) 2", "D) Undefined"],
        answer: "B",
        explanation: "Determinant of identity matrix of any size is 1."
    },
    {
        id: "em032",
        topic: "Linear Algebra",
        subtopic: "Matrices",
        difficulty: "Easy",
        question: "If A is a 3×4 matrix and B is a 4×2 matrix, then AB is a:",
        options: ["A) 3×2 matrix", "B) 4×4 matrix", "C) 3×4 matrix", "D) Not possible"],
        answer: "A",
        explanation: "If A is m×n and B is n×p, then AB is m×p. Here 3×4 × 4×2 = 3×2."
    },
    {
        id: "em033",
        topic: "Linear Algebra",
        subtopic: "Matrices",
        difficulty: "Medium",
        question: "The rank of a matrix is:",
        options: ["A) Number of rows", "B) Number of columns", "C) Number of linearly independent rows or columns", "D) Determinant value"],
        answer: "C",
        explanation: "Rank = number of linearly independent rows = number of linearly independent columns."
    },
    {
        id: "em034",
        topic: "Linear Algebra",
        subtopic: "Eigenvalues",
        difficulty: "Medium",
        question: "For a matrix A, eigenvalues are roots of:",
        options: ["A) det(A) = 0", "B) det(A - λI) = 0", "C) det(A + λI) = 0", "D) A × λ = 0"],
        answer: "B",
        explanation: "Eigenvalues satisfy the characteristic equation det(A - λI) = 0."
    },
    {
        id: "em035",
        topic: "Linear Algebra",
        subtopic: "Eigenvalues",
        difficulty: "Medium",
        question: "The sum of eigenvalues of a matrix equals:",
        options: ["A) Determinant", "B) Trace", "C) Rank", "D) Number of rows"],
        answer: "B",
        explanation: "Sum of eigenvalues = Trace (sum of diagonal elements). Product of eigenvalues = Determinant."
    },
    {
        id: "em036",
        topic: "Linear Algebra",
        subtopic: "Eigenvalues",
        difficulty: "Hard",
        question: "Eigenvalues of a symmetric real matrix are:",
        options: ["A) Always complex", "B) Always real", "C) Always positive", "D) Always zero"],
        answer: "B",
        explanation: "Symmetric real matrices always have real eigenvalues (Spectral theorem)."
    },
    {
        id: "em037",
        topic: "Linear Algebra",
        subtopic: "Vector Spaces",
        difficulty: "Medium",
        question: "The dimension of the null space of an m×n matrix A with rank r is:",
        options: ["A) m - r", "B) n - r", "C) r", "D) m + n - r"],
        answer: "B",
        explanation: "Rank-Nullity theorem: rank(A) + nullity(A) = n. So nullity = n - r."
    },
    {
        id: "em038",
        topic: "Linear Algebra",
        subtopic: "Matrices",
        difficulty: "Easy",
        question: "(AB)^T equals:",
        options: ["A) A^T B^T", "B) B^T A^T", "C) AB", "D) BA"],
        answer: "B",
        explanation: "Transpose of product reverses order: (AB)^T = B^T A^T."
    },
    {
        id: "em039",
        topic: "Linear Algebra",
        subtopic: "Matrices",
        difficulty: "Medium",
        question: "A matrix A is orthogonal if:",
        options: ["A) A = A^T", "B) A^T A = I", "C) A = -A^T", "D) det(A) = 0"],
        answer: "B",
        explanation: "Orthogonal matrix: A^T A = AA^T = I, meaning A^(-1) = A^T."
    },
    {
        id: "em040",
        topic: "Linear Algebra",
        subtopic: "Matrices",
        difficulty: "Easy",
        question: "det(kA) for an n×n matrix A equals:",
        options: ["A) k × det(A)", "B) k^n × det(A)", "C) det(A) / k", "D) det(A)"],
        answer: "B",
        explanation: "det(kA) = k^n × det(A) for an n×n matrix."
    },
    // CALCULUS
    {
        id: "em041",
        topic: "Calculus",
        subtopic: "Limits",
        difficulty: "Easy",
        question: "lim(x→0) sin(x)/x equals:",
        options: ["A) 0", "B) 1", "C) ∞", "D) Undefined"],
        answer: "B",
        explanation: "This is a standard limit: lim(x→0) sin(x)/x = 1."
    },
    {
        id: "em042",
        topic: "Calculus",
        subtopic: "Derivatives",
        difficulty: "Easy",
        question: "The derivative of e^x is:",
        options: ["A) xe^(x-1)", "B) e^x", "C) e^(x-1)", "D) x × e^x"],
        answer: "B",
        explanation: "d/dx(e^x) = e^x. The exponential function is its own derivative."
    },
    {
        id: "em043",
        topic: "Calculus",
        subtopic: "Derivatives",
        difficulty: "Easy",
        question: "The derivative of ln(x) is:",
        options: ["A) 1/x", "B) x", "C) ln(x)", "D) e^x"],
        answer: "A",
        explanation: "d/dx(ln(x)) = 1/x."
    },
    {
        id: "em044",
        topic: "Calculus",
        subtopic: "Integration",
        difficulty: "Easy",
        question: "∫ x^n dx equals (n ≠ -1):",
        options: ["A) x^(n+1)", "B) x^(n+1)/(n+1) + C", "C) nx^(n-1)", "D) x^n/n + C"],
        answer: "B",
        explanation: "Power rule for integration: ∫x^n dx = x^(n+1)/(n+1) + C."
    },
    {
        id: "em045",
        topic: "Calculus",
        subtopic: "Integration",
        difficulty: "Medium",
        question: "∫ e^x dx equals:",
        options: ["A) e^x + C", "B) xe^x + C", "C) e^(x+1) + C", "D) e^x/x + C"],
        answer: "A",
        explanation: "∫e^x dx = e^x + C."
    },
    {
        id: "em046",
        topic: "Calculus",
        subtopic: "Partial Derivatives",
        difficulty: "Medium",
        question: "For f(x,y) = x²y + y³, ∂f/∂x equals:",
        options: ["A) 2xy", "B) x² + 3y²", "C) 2xy + 3y²", "D) 2x + y"],
        answer: "A",
        explanation: "Treating y as constant: ∂/∂x(x²y + y³) = 2xy + 0 = 2xy."
    },
    {
        id: "em047",
        topic: "Calculus",
        subtopic: "Maxima/Minima",
        difficulty: "Medium",
        question: "A function f(x) has a local minimum at x = a if:",
        options: ["A) f'(a) = 0 and f''(a) < 0", "B) f'(a) = 0 and f''(a) > 0", "C) f'(a) > 0", "D) f'(a) < 0"],
        answer: "B",
        explanation: "Second derivative test: f'(a)=0 and f''(a)>0 implies local minimum."
    },
    {
        id: "em048",
        topic: "Calculus",
        subtopic: "Series",
        difficulty: "Medium",
        question: "The Taylor series of e^x around x=0 is:",
        options: ["A) Σ x^n/n!", "B) Σ x^n", "C) Σ n × x^n", "D) Σ x^n/n"],
        answer: "A",
        explanation: "e^x = 1 + x + x²/2! + x³/3! + ... = Σ(n=0 to ∞) x^n/n!"
    },
    {
        id: "em049",
        topic: "Calculus",
        subtopic: "Limits",
        difficulty: "Medium",
        question: "lim(x→∞) (1 + 1/x)^x equals:",
        options: ["A) 0", "B) 1", "C) e", "D) ∞"],
        answer: "C",
        explanation: "This is the definition of e: lim(x→∞)(1 + 1/x)^x = e ≈ 2.718."
    },
    {
        id: "em050",
        topic: "Calculus",
        subtopic: "Derivatives",
        difficulty: "Medium",
        question: "If y = f(g(x)), then dy/dx equals (chain rule):",
        options: ["A) f'(x) × g'(x)", "B) f'(g(x)) × g'(x)", "C) f(g'(x))", "D) f'(x) + g'(x)"],
        answer: "B",
        explanation: "Chain rule: d/dx[f(g(x))] = f'(g(x)) × g'(x)."
    },
    // MORE DISCRETE MATHEMATICS
    {
        id: "em051", topic: "Discrete Mathematics", subtopic: "Sets and Relations", difficulty: "Medium",
        question: "If |A| = m and |B| = n, the number of relations from A to B is:",
        options: ["A) m × n", "B) 2^(m×n)", "C) m + n", "D) m^n"], answer: "B",
        explanation: "A relation is a subset of A×B. |A×B| = m×n, so number of subsets = 2^(m×n)."
    },
    {
        id: "em052", topic: "Discrete Mathematics", subtopic: "Sets and Relations", difficulty: "Hard",
        question: "A partial order relation must be:",
        options: ["A) Reflexive, symmetric, transitive", "B) Reflexive, antisymmetric, transitive", "C) Irreflexive, symmetric", "D) Only transitive"], answer: "B",
        explanation: "Partial order: reflexive, antisymmetric, and transitive."
    },
    {
        id: "em053", topic: "Discrete Mathematics", subtopic: "Functions", difficulty: "Medium",
        question: "Number of onto functions from set of m elements to set of n elements (m ≥ n) is:",
        options: ["A) n^m", "B) m^n", "C) n! × S(m,n)", "D) Always m!"], answer: "C",
        explanation: "Onto functions = n! × S(m,n) where S(m,n) is Stirling number of second kind."
    },
    {
        id: "em054", topic: "Discrete Mathematics", subtopic: "Propositional Logic", difficulty: "Medium",
        question: "(p → q) ∧ (q → r) logically implies:",
        options: ["A) p → r", "B) r → p", "C) p ∧ r", "D) ¬p ∨ ¬r"], answer: "A",
        explanation: "Hypothetical syllogism: if p implies q and q implies r, then p implies r."
    },
    {
        id: "em055", topic: "Discrete Mathematics", subtopic: "Propositional Logic", difficulty: "Hard",
        question: "Which of these is satisfiable but not a tautology?",
        options: ["A) p ∨ ¬p", "B) p ∧ ¬p", "C) p → p", "D) p ∨ q"], answer: "D",
        explanation: "p ∨ q is true for some assignments (satisfiable) but not all (not tautology)."
    },
    {
        id: "em056", topic: "Discrete Mathematics", subtopic: "Combinatorics", difficulty: "Hard",
        question: "Number of ways to distribute n identical balls into r distinct boxes is:",
        options: ["A) C(n+r-1, r-1)", "B) C(n,r)", "C) n^r", "D) r^n"], answer: "A",
        explanation: "Stars and bars: C(n+r-1, r-1) or C(n+r-1, n)."
    },
    {
        id: "em057", topic: "Discrete Mathematics", subtopic: "Combinatorics", difficulty: "Medium",
        question: "Derangement D(n) is the number of permutations where:",
        options: ["A) All elements are in their original position", "B) No element is in its original position", "C) Exactly one element is fixed", "D) At least one element is fixed"], answer: "B",
        explanation: "Derangement: permutation where no element appears in its original position."
    },
    {
        id: "em058", topic: "Discrete Mathematics", subtopic: "Recurrence Relations", difficulty: "Hard",
        question: "Master theorem case 1 applies when f(n) is:",
        options: ["A) O(n^(log_b(a)-ε))", "B) Θ(n^(log_b(a)))", "C) Ω(n^(log_b(a)+ε))", "D) O(log n)"], answer: "A",
        explanation: "Case 1: f(n) = O(n^(log_b(a)-ε)) implies T(n) = Θ(n^(log_b(a)))."
    },
    {
        id: "em059", topic: "Discrete Mathematics", subtopic: "Graph Theory", difficulty: "Hard",
        question: "The number of spanning trees in a complete graph K_n is:",
        options: ["A) n", "B) n^(n-2)", "C) 2^n", "D) n!"], answer: "B",
        explanation: "Cayley's formula: K_n has exactly n^(n-2) spanning trees."
    },
    {
        id: "em060", topic: "Discrete Mathematics", subtopic: "Graph Theory", difficulty: "Medium",
        question: "A graph is Eulerian (has Eulerian circuit) if and only if:",
        options: ["A) All vertices have odd degree", "B) Exactly two vertices have odd degree", "C) All vertices have even degree and graph is connected", "D) Graph is complete"], answer: "C",
        explanation: "Eulerian circuit exists iff graph is connected and all vertices have even degree."
    },
    {
        id: "em061", topic: "Discrete Mathematics", subtopic: "Graph Theory", difficulty: "Hard",
        question: "Planar graph with n vertices (n≥3) has at most how many edges?",
        options: ["A) n", "B) 2n", "C) 3n - 6", "D) n^2"], answer: "C",
        explanation: "By Euler's formula for planar graphs: e ≤ 3n - 6 (for n ≥ 3)."
    },
    {
        id: "em062", topic: "Discrete Mathematics", subtopic: "Graph Theory", difficulty: "Medium",
        question: "Euler's formula for connected planar graphs: V - E + F =",
        options: ["A) 0", "B) 1", "C) 2", "D) 3"], answer: "C",
        explanation: "Euler's formula: Vertices - Edges + Faces = 2 for connected planar graphs."
    },
    {
        id: "em063", topic: "Discrete Mathematics", subtopic: "Group Theory", difficulty: "Hard",
        question: "Order of an element a in a group is:",
        options: ["A) Position of a", "B) Smallest positive n such that a^n = identity", "C) Number of elements in group", "D) Always 1"], answer: "B",
        explanation: "Order of element = smallest positive integer n where a^n = e (identity)."
    },
    {
        id: "em064", topic: "Discrete Mathematics", subtopic: "Group Theory", difficulty: "Hard",
        question: "Lagrange's theorem states that order of subgroup:",
        options: ["A) Equals order of group", "B) Divides order of group", "C) Is greater than order of group", "D) Is always prime"], answer: "B",
        explanation: "Order of any subgroup divides the order of the group."
    },
    // MORE PROBABILITY
    {
        id: "em065", topic: "Probability", subtopic: "Basic Probability", difficulty: "Medium",
        question: "If P(A∪B) = 0.7, P(A) = 0.5, P(B) = 0.4, then P(A∩B) is:",
        options: ["A) 0.2", "B) 0.3", "C) 0.1", "D) 0.9"], answer: "A",
        explanation: "P(A∪B) = P(A) + P(B) - P(A∩B). So 0.7 = 0.5 + 0.4 - P(A∩B). P(A∩B) = 0.2."
    },
    {
        id: "em066", topic: "Probability", subtopic: "Basic Probability", difficulty: "Hard",
        question: "In a sequence of n independent Bernoulli trials, probability of exactly k successes is:",
        options: ["A) p^k", "B) C(n,k) × p^k × (1-p)^(n-k)", "C) k/n", "D) np"], answer: "B",
        explanation: "Binomial probability: P(X=k) = C(n,k) × p^k × q^(n-k) where q = 1-p."
    },
    {
        id: "em067", topic: "Probability", subtopic: "Random Variables", difficulty: "Medium",
        question: "For geometric distribution (trials until first success), E[X] is:",
        options: ["A) p", "B) 1/p", "C) p/(1-p)", "D) 1-p"], answer: "B",
        explanation: "Geometric distribution: expected number of trials until success = 1/p."
    },
    {
        id: "em068", topic: "Probability", subtopic: "Random Variables", difficulty: "Hard",
        question: "Var(aX + b) equals:",
        options: ["A) aVar(X) + b", "B) a²Var(X)", "C) Var(X)", "D) a²Var(X) + b²"], answer: "B",
        explanation: "Variance scales by square of constant: Var(aX + b) = a²Var(X). Constants don't affect variance."
    },
    {
        id: "em069", topic: "Probability", subtopic: "Distributions", difficulty: "Hard",
        question: "Sum of two independent Poisson(λ₁) and Poisson(λ₂) is:",
        options: ["A) Poisson(λ₁λ₂)", "B) Poisson(λ₁ + λ₂)", "C) Normal", "D) Binomial"], answer: "B",
        explanation: "Sum of independent Poisson RVs is Poisson with parameter = sum of parameters."
    },
    {
        id: "em070", topic: "Probability", subtopic: "Distributions", difficulty: "Medium",
        question: "For uniform distribution U(a,b), the variance is:",
        options: ["A) (b-a)/2", "B) (b-a)²/12", "C) (a+b)/2", "D) b-a"], answer: "B",
        explanation: "Variance of U(a,b) = (b-a)²/12."
    },
    {
        id: "em071", topic: "Probability", subtopic: "Conditional Probability", difficulty: "Hard",
        question: "Events A and B are independent if and only if:",
        options: ["A) P(A∩B) = 0", "B) P(A∩B) = P(A)×P(B)", "C) P(A|B) = P(B|A)", "D) P(A∪B) = 1"], answer: "B",
        explanation: "Independence means P(A∩B) = P(A)P(B), or equivalently P(A|B) = P(A)."
    },
    {
        id: "em072", topic: "Probability", subtopic: "Expectation", difficulty: "Medium",
        question: "E[X + Y] equals:",
        options: ["A) E[X] × E[Y]", "B) E[X] + E[Y]", "C) E[X] - E[Y]", "D) E[X]/E[Y]"], answer: "B",
        explanation: "Linearity of expectation: E[X+Y] = E[X] + E[Y], always holds."
    },
    {
        id: "em073", topic: "Probability", subtopic: "Expectation", difficulty: "Hard",
        question: "E[XY] = E[X]E[Y] holds when X and Y are:",
        options: ["A) Any random variables", "B) Independent", "C) Normally distributed", "D) Discrete only"], answer: "B",
        explanation: "E[XY] = E[X]E[Y] only when X and Y are independent."
    },
    {
        id: "em074", topic: "Probability", subtopic: "Covariance", difficulty: "Hard",
        question: "Cov(X,Y) = 0 implies:",
        options: ["A) X and Y are independent", "B) X and Y are uncorrelated", "C) X = Y", "D) X = -Y"], answer: "B",
        explanation: "Cov=0 means uncorrelated. Independence implies uncorrelated, but not vice versa."
    },
    // MORE LINEAR ALGEBRA
    {
        id: "em075", topic: "Linear Algebra", subtopic: "Matrices", difficulty: "Medium",
        question: "For invertible matrix A, (A⁻¹)⁻¹ equals:",
        options: ["A) I", "B) A", "C) A²", "D) A^T"], answer: "B",
        explanation: "Inverse of inverse returns original matrix: (A⁻¹)⁻¹ = A."
    },
    {
        id: "em076", topic: "Linear Algebra", subtopic: "Matrices", difficulty: "Medium",
        question: "det(A⁻¹) equals:",
        options: ["A) det(A)", "B) 1/det(A)", "C) -det(A)", "D) 0"], answer: "B",
        explanation: "det(A⁻¹) = 1/det(A) since det(A × A⁻¹) = det(I) = 1."
    },
    {
        id: "em077", topic: "Linear Algebra", subtopic: "Matrices", difficulty: "Hard",
        question: "If A and B are similar matrices, then:",
        options: ["A) A = B", "B) They have same eigenvalues", "C) They have same elements", "D) det(A) ≠ det(B)"], answer: "B",
        explanation: "Similar matrices (B = P⁻¹AP) have identical eigenvalues, trace, and determinant."
    },
    {
        id: "em078", topic: "Linear Algebra", subtopic: "Eigenvalues", difficulty: "Hard",
        question: "Eigenvalues of A² if A has eigenvalues λ₁, λ₂ are:",
        options: ["A) λ₁, λ₂", "B) λ₁², λ₂²", "C) 2λ₁, 2λ₂", "D) λ₁+λ₂"], answer: "B",
        explanation: "If λ is eigenvalue of A, then λⁿ is eigenvalue of Aⁿ."
    },
    {
        id: "em079", topic: "Linear Algebra", subtopic: "Eigenvalues", difficulty: "Hard",
        question: "A matrix A is positive definite if all eigenvalues are:",
        options: ["A) Zero", "B) Negative", "C) Positive", "D) Complex"], answer: "C",
        explanation: "Positive definite: all eigenvalues strictly positive, x^TAx > 0 for all x≠0."
    },
    {
        id: "em080", topic: "Linear Algebra", subtopic: "Vector Spaces", difficulty: "Medium",
        question: "Dimension of R³ is:",
        options: ["A) 1", "B) 2", "C) 3", "D) Infinite"], answer: "C",
        explanation: "R³ has dimension 3, basis {(1,0,0), (0,1,0), (0,0,1)}."
    },
    {
        id: "em081", topic: "Linear Algebra", subtopic: "Vector Spaces", difficulty: "Hard",
        question: "Vectors are linearly dependent if:",
        options: ["A) None is zero vector", "B) At least one can be written as linear combination of others", "C) All are unit vectors", "D) They are orthogonal"], answer: "B",
        explanation: "Linearly dependent: some non-trivial linear combination equals zero vector."
    },
    {
        id: "em082", topic: "Linear Algebra", subtopic: "Determinant", difficulty: "Medium",
        question: "If two rows of a matrix are identical, determinant is:",
        options: ["A) 1", "B) 2", "C) 0", "D) Undefined"], answer: "C",
        explanation: "Identical rows (or columns) make determinant = 0."
    },
    {
        id: "em083", topic: "Linear Algebra", subtopic: "Determinant", difficulty: "Medium",
        question: "det(AB) equals:",
        options: ["A) det(A) + det(B)", "B) det(A) × det(B)", "C) det(A) - det(B)", "D) det(A)/det(B)"], answer: "B",
        explanation: "Determinant of product = product of determinants: det(AB) = det(A)det(B)."
    },
    {
        id: "em084", topic: "Linear Algebra", subtopic: "Systems", difficulty: "Medium",
        question: "System Ax = b has unique solution when:",
        options: ["A) det(A) = 0", "B) det(A) ≠ 0", "C) A is not square", "D) b is zero vector"], answer: "B",
        explanation: "Unique solution exists iff A is invertible, i.e., det(A) ≠ 0."
    },
    // MORE CALCULUS
    {
        id: "em085", topic: "Calculus", subtopic: "Derivatives", difficulty: "Medium",
        question: "d/dx(sin⁻¹x) equals:",
        options: ["A) 1/√(1-x²)", "B) -1/√(1-x²)", "C) 1/(1+x²)", "D) -1/(1+x²)"], answer: "A",
        explanation: "Derivative of arcsin(x) = 1/√(1-x²)."
    },
    {
        id: "em086", topic: "Calculus", subtopic: "Derivatives", difficulty: "Medium",
        question: "d/dx(tan⁻¹x) equals:",
        options: ["A) 1/√(1-x²)", "B) 1/(1+x²)", "C) sec²x", "D) -csc²x"], answer: "B",
        explanation: "Derivative of arctan(x) = 1/(1+x²)."
    },
    {
        id: "em087", topic: "Calculus", subtopic: "Integration", difficulty: "Medium",
        question: "∫ 1/x dx equals:",
        options: ["A) x", "B) ln|x| + C", "C) 1/x² + C", "D) -1/x² + C"], answer: "B",
        explanation: "∫(1/x)dx = ln|x| + C."
    },
    {
        id: "em088", topic: "Calculus", subtopic: "Integration", difficulty: "Hard",
        question: "∫₀^∞ e^(-x) dx equals:",
        options: ["A) 0", "B) 1", "C) ∞", "D) e"], answer: "B",
        explanation: "∫₀^∞ e^(-x)dx = [-e^(-x)]₀^∞ = 0 - (-1) = 1."
    },
    {
        id: "em089", topic: "Calculus", subtopic: "Limits", difficulty: "Hard",
        question: "L'Hôpital's rule applies when limit is of form:",
        options: ["A) ∞ + ∞", "B) 0/0 or ∞/∞", "C) 0 × 0", "D) Any form"], answer: "B",
        explanation: "L'Hôpital's rule: for 0/0 or ∞/∞ forms, take derivative of numerator and denominator."
    },
    {
        id: "em090", topic: "Calculus", subtopic: "Series", difficulty: "Hard",
        question: "Geometric series Σ ar^n converges when:",
        options: ["A) |r| > 1", "B) |r| < 1", "C) r = 1", "D) r > 1"], answer: "B",
        explanation: "Geometric series converges iff |r| < 1, sum = a/(1-r)."
    },
    {
        id: "em091", topic: "Calculus", subtopic: "Taylor Series", difficulty: "Hard",
        question: "Maclaurin series of cos(x) is:",
        options: ["A) Σ x^n/n!", "B) Σ (-1)^n × x^(2n)/(2n)!", "C) Σ (-1)^n × x^(2n+1)/(2n+1)!", "D) Σ x^(2n)"], answer: "B",
        explanation: "cos(x) = 1 - x²/2! + x⁴/4! - ... = Σ(-1)^n × x^(2n)/(2n)!"
    },
    {
        id: "em092", topic: "Calculus", subtopic: "Taylor Series", difficulty: "Hard",
        question: "Maclaurin series of sin(x) is:",
        options: ["A) Σ x^n/n!", "B) Σ (-1)^n × x^(2n)/(2n)!", "C) Σ (-1)^n × x^(2n+1)/(2n+1)!", "D) Σ x^n"], answer: "C",
        explanation: "sin(x) = x - x³/3! + x⁵/5! - ... = Σ(-1)^n × x^(2n+1)/(2n+1)!"
    },
    {
        id: "em093", topic: "Calculus", subtopic: "Differential Equations", difficulty: "Hard",
        question: "Solution of dy/dx = ky is:",
        options: ["A) y = kx + C", "B) y = Ce^(kx)", "C) y = e^x + k", "D) y = ln(kx)"], answer: "B",
        explanation: "dy/dx = ky is separable. Solution: y = Ce^(kx) (exponential growth/decay)."
    },
    {
        id: "em094", topic: "Calculus", subtopic: "Differential Equations", difficulty: "Hard",
        question: "Order of differential equation d²y/dx² + 3dy/dx + 2y = 0 is:",
        options: ["A) 1", "B) 2", "C) 3", "D) 0"], answer: "B",
        explanation: "Order = highest derivative order. Here d²y/dx² is second order."
    },
    {
        id: "em095", topic: "Calculus", subtopic: "Multivariable", difficulty: "Hard",
        question: "Gradient ∇f of f(x,y) = x² + y² at (1,1) is:",
        options: ["A) (1, 1)", "B) (2, 2)", "C) (2x, 2y)", "D) 2"], answer: "B",
        explanation: "∇f = (∂f/∂x, ∂f/∂y) = (2x, 2y). At (1,1): (2, 2)."
    },
    {
        id: "em096", topic: "Calculus", subtopic: "Multivariable", difficulty: "Hard",
        question: "Divergence of vector field F = (x, y, z) is:",
        options: ["A) 0", "B) 1", "C) 3", "D) x+y+z"], answer: "C",
        explanation: "div F = ∂F₁/∂x + ∂F₂/∂y + ∂F₃/∂z = 1 + 1 + 1 = 3."
    },
    {
        id: "em097", topic: "Calculus", subtopic: "Multivariable", difficulty: "Hard",
        question: "Curl of F = (y, -x, 0) at any point is:",
        options: ["A) (0, 0, 0)", "B) (0, 0, -2)", "C) (0, 0, 2)", "D) (1, 1, 1)"], answer: "B",
        explanation: "curl F = (∂F₃/∂y - ∂F₂/∂z, ∂F₁/∂z - ∂F₃/∂x, ∂F₂/∂x - ∂F₁/∂y) = (0, 0, -1-1) = (0, 0, -2)."
    },
    {
        id: "em098", topic: "Probability", subtopic: "Markov", difficulty: "Hard",
        question: "In a Markov chain, each row of transition matrix sums to:",
        options: ["A) 0", "B) 1", "C) n", "D) Varies"], answer: "B",
        explanation: "Transition matrix rows sum to 1 (probabilities of moving to all states sum to 1)."
    },
    {
        id: "em099", topic: "Linear Algebra", subtopic: "LU Decomposition", difficulty: "Hard",
        question: "LU decomposition expresses matrix A as:",
        options: ["A) Product of lower and upper triangular matrices", "B) Sum of two matrices", "C) Inverse and transpose", "D) Eigenvalue matrix"], answer: "A",
        explanation: "LU decomposition: A = LU where L is lower triangular, U is upper triangular."
    },
    {
        id: "em100", topic: "Discrete Mathematics", subtopic: "Generating Functions", difficulty: "Hard",
        question: "Generating function for sequence {1, 1, 1, ...} is:",
        options: ["A) 1/(1-x)", "B) e^x", "C) 1+x", "D) x/(1-x)"], answer: "A",
        explanation: "1 + x + x² + x³ + ... = 1/(1-x) for |x| < 1."
    }
];

export default engineeringMathQuestions;
