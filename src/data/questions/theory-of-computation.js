// Theory of Computation Questions for BARC CSE Exam
export const tocQuestions = [
    // FINITE AUTOMATA
    {
        id: "toc001", topic: "TOC", subtopic: "Finite Automata", difficulty: "Easy",
        question: "DFA stands for:",
        options: ["A) Digital Finite Automata", "B) Deterministic Finite Automata", "C) Dynamic Finite Automata", "D) Data Finite Automata"], answer: "B",
        explanation: "DFA = Deterministic Finite Automata."
    },
    {
        id: "toc002", topic: "TOC", subtopic: "Finite Automata", difficulty: "Easy",
        question: "In DFA, from each state for each input symbol:",
        options: ["A) Zero transitions", "B) Exactly one transition", "C) Multiple transitions", "D) No rule"], answer: "B",
        explanation: "DFA has exactly one transition from each state for each input symbol."
    },
    {
        id: "toc003", topic: "TOC", subtopic: "Finite Automata", difficulty: "Medium",
        question: "NFA differs from DFA in that NFA allows:",
        options: ["A) Only one transition per symbol", "B) Multiple transitions or ε-transitions", "C) No transitions", "D) Only loops"], answer: "B",
        explanation: "NFA can have multiple transitions for same symbol and ε (empty) transitions."
    },
    {
        id: "toc004", topic: "TOC", subtopic: "Finite Automata", difficulty: "Medium",
        question: "Every NFA can be converted to:",
        options: ["A) PDA", "B) Equivalent DFA", "C) Turing Machine only", "D) Nothing"], answer: "B",
        explanation: "Every NFA has an equivalent DFA (subset construction)."
    },
    {
        id: "toc005", topic: "TOC", subtopic: "Finite Automata", difficulty: "Hard",
        question: "Minimum DFA states for NFA with n states can be:",
        options: ["A) Always n", "B) At most 2^n", "C) Always 2^n", "D) n!"], answer: "B",
        explanation: "Subset construction can create up to 2^n states, but often fewer."
    },
    // REGULAR LANGUAGES
    {
        id: "toc006", topic: "TOC", subtopic: "Regular Languages", difficulty: "Easy",
        question: "Regular languages are recognized by:",
        options: ["A) Pushdown Automata", "B) Finite Automata", "C) Turing Machine only", "D) None"], answer: "B",
        explanation: "Regular languages are exactly those recognized by Finite Automata."
    },
    {
        id: "toc007", topic: "TOC", subtopic: "Regular Languages", difficulty: "Medium",
        question: "Pumping Lemma is used to prove:",
        options: ["A) Language is regular", "B) Language is NOT regular", "C) Language is context-free", "D) Language is decidable"], answer: "B",
        explanation: "Pumping Lemma is used to prove a language is NOT regular."
    },
    {
        id: "toc008", topic: "TOC", subtopic: "Regular Languages", difficulty: "Medium",
        question: "Which is NOT a regular language?",
        options: ["A) {a^n | n≥0}", "B) {a^n b^n | n≥0}", "C) {ab}*", "D) {a,b}*"], answer: "B",
        explanation: "a^n b^n requires counting - not possible with finite memory."
    },
    {
        id: "toc009", topic: "TOC", subtopic: "Regular Languages", difficulty: "Medium",
        question: "Regular languages are closed under:",
        options: ["A) Union only", "B) Intersection only", "C) Union, intersection, complement, concatenation, Kleene star", "D) None"], answer: "C",
        explanation: "Regular languages are closed under all these operations."
    },
    {
        id: "toc010", topic: "TOC", subtopic: "Regular Languages", difficulty: "Easy",
        question: "Regular expression a*b denotes:",
        options: ["A) Zero or more a's followed by exactly one b", "B) One or more a's followed by b", "C) Only b", "D) Only a's"], answer: "A",
        explanation: "a* = zero or more a's, followed by exactly one b."
    },
    // REGULAR EXPRESSIONS
    {
        id: "toc011", topic: "TOC", subtopic: "Regular Expressions", difficulty: "Easy",
        question: "In regex, * means:",
        options: ["A) One or more", "B) Zero or more", "C) Exactly one", "D) Zero only"], answer: "B",
        explanation: "Kleene star (*) means zero or more occurrences."
    },
    {
        id: "toc012", topic: "TOC", subtopic: "Regular Expressions", difficulty: "Easy",
        question: "In regex, + means:",
        options: ["A) Zero or more", "B) One or more", "C) Zero or one", "D) Exactly two"], answer: "B",
        explanation: "Plus (+) means one or more occurrences."
    },
    {
        id: "toc013", topic: "TOC", subtopic: "Regular Expressions", difficulty: "Medium",
        question: "(a+b)* represents:",
        options: ["A) Only a's", "B) Only b's", "C) All strings of a's and b's", "D) Empty string only"], answer: "C",
        explanation: "(a+b)* = {ε, a, b, aa, ab, ba, bb, ...} all strings over {a,b}."
    },
    // CONTEXT-FREE LANGUAGES
    {
        id: "toc014", topic: "TOC", subtopic: "Context-Free Languages", difficulty: "Easy",
        question: "CFG stands for:",
        options: ["A) Context Finite Grammar", "B) Context-Free Grammar", "C) Complete Finite Grammar", "D) Computed Free Grammar"], answer: "B",
        explanation: "CFG = Context-Free Grammar."
    },
    {
        id: "toc015", topic: "TOC", subtopic: "Context-Free Languages", difficulty: "Medium",
        question: "Context-Free Languages are recognized by:",
        options: ["A) Finite Automata", "B) Pushdown Automata", "C) Linear Bounded Automata", "D) Only Turing Machine"], answer: "B",
        explanation: "PDAs recognize exactly the Context-Free Languages."
    },
    {
        id: "toc016", topic: "TOC", subtopic: "Context-Free Languages", difficulty: "Medium",
        question: "Which is context-free but not regular?",
        options: ["A) a*b*", "B) (ab)*", "C) a^n b^n", "D) {a,b}*"], answer: "C",
        explanation: "a^n b^n is CFL (PDA can match count) but not regular."
    },
    {
        id: "toc017", topic: "TOC", subtopic: "Context-Free Languages", difficulty: "Hard",
        question: "CFLs are closed under:",
        options: ["A) Intersection", "B) Complement", "C) Union, concatenation, Kleene star", "D) All operations"], answer: "C",
        explanation: "CFLs are NOT closed under intersection and complement."
    },
    {
        id: "toc018", topic: "TOC", subtopic: "Context-Free Languages", difficulty: "Medium",
        question: "Chomsky Normal Form has productions of form:",
        options: ["A) A→BC or A→a", "B) A→a only", "C) A→BC only", "D) Any form"], answer: "A",
        explanation: "CNF: A→BC (two non-terminals) or A→a (single terminal)."
    },
    // PUSHDOWN AUTOMATA
    {
        id: "toc019", topic: "TOC", subtopic: "Pushdown Automata", difficulty: "Medium",
        question: "PDA has which extra component compared to FA?",
        options: ["A) Multiple tapes", "B) Stack", "C) Two-way head", "D) Timer"], answer: "B",
        explanation: "PDA = FA + Stack (LIFO memory)."
    },
    {
        id: "toc020", topic: "TOC", subtopic: "Pushdown Automata", difficulty: "Hard",
        question: "DPDA (Deterministic PDA) is:",
        options: ["A) Equivalent to NPDA in power", "B) Less powerful than NPDA", "C) More powerful than NPDA", "D) Same as DFA"], answer: "B",
        explanation: "DPDA recognizes a proper subset of CFLs; NPDA is more powerful."
    },
    // TURING MACHINES
    {
        id: "toc021", topic: "TOC", subtopic: "Turing Machines", difficulty: "Easy",
        question: "Turing Machine has:",
        options: ["A) Finite tape", "B) Infinite tape", "C) No tape", "D) Stack only"], answer: "B",
        explanation: "TM has infinite tape for reading/writing."
    },
    {
        id: "toc022", topic: "TOC", subtopic: "Turing Machines", difficulty: "Medium",
        question: "Turing Machine can:",
        options: ["A) Only read tape", "B) Read and write on tape, move head both directions", "C) Only write", "D) Neither read nor write"], answer: "B",
        explanation: "TM can read, write, and move head left or right."
    },
    {
        id: "toc023", topic: "TOC", subtopic: "Turing Machines", difficulty: "Medium",
        question: "Church-Turing thesis states:",
        options: ["A) TM is fastest machine", "B) Anything computable can be computed by a TM", "C) TM cannot compute anything", "D) TM is obsolete"], answer: "B",
        explanation: "Church-Turing thesis: TM captures notion of computability."
    },
    {
        id: "toc024", topic: "TOC", subtopic: "Turing Machines", difficulty: "Medium",
        question: "Universal Turing Machine:",
        options: ["A) Cannot simulate other TMs", "B) Can simulate any other TM", "C) Only accepts regular languages", "D) Has no tape"], answer: "B",
        explanation: "UTM can simulate any other TM given its description."
    },
    // DECIDABILITY
    {
        id: "toc025", topic: "TOC", subtopic: "Decidability", difficulty: "Medium",
        question: "A language is decidable if:",
        options: ["A) Some TM accepts it", "B) A TM halts on all inputs (accepts or rejects)", "C) It's regular", "D) It's context-free"], answer: "B",
        explanation: "Decidable: TM always halts with accept or reject."
    },
    {
        id: "toc026", topic: "TOC", subtopic: "Decidability", difficulty: "Medium",
        question: "Recursively enumerable means:",
        options: ["A) TM halts on all inputs", "B) TM accepts strings in language (may not halt on non-members)", "C) Language is finite", "D) Language is regular"], answer: "B",
        explanation: "RE: TM accepts members but might loop forever on non-members."
    },
    {
        id: "toc027", topic: "TOC", subtopic: "Decidability", difficulty: "Hard",
        question: "Halting problem is:",
        options: ["A) Decidable", "B) Undecidable", "C) Regular", "D) Context-free"], answer: "B",
        explanation: "Halting problem is undecidable (Turing proved)."
    },
    {
        id: "toc028", topic: "TOC", subtopic: "Decidability", difficulty: "Hard",
        question: "Post Correspondence Problem is:",
        options: ["A) Decidable", "B) Undecidable", "C) Regular", "D) Polynomial"], answer: "B",
        explanation: "PCP is undecidable for general case."
    },
    {
        id: "toc029", topic: "TOC", subtopic: "Decidability", difficulty: "Medium",
        question: "Membership problem for regular languages is:",
        options: ["A) Undecidable", "B) Decidable (run DFA)", "C) NP-complete", "D) PSPACE-complete"], answer: "B",
        explanation: "Check if DFA accepts string - decidable in linear time."
    },
    {
        id: "toc030", topic: "TOC", subtopic: "Decidability", difficulty: "Medium",
        question: "Emptiness problem for CFLs is:",
        options: ["A) Undecidable", "B) Decidable", "C) NP-complete", "D) Impossible"], answer: "B",
        explanation: "Check if any variable generates terminal string - decidable."
    },
    // CHOMSKY HIERARCHY
    {
        id: "toc031", topic: "TOC", subtopic: "Chomsky Hierarchy", difficulty: "Medium",
        question: "Type 3 grammars generate:",
        options: ["A) Context-free languages", "B) Regular languages", "C) Context-sensitive languages", "D) Recursively enumerable"], answer: "B",
        explanation: "Type 3 = Regular grammars → Regular languages."
    },
    {
        id: "toc032", topic: "TOC", subtopic: "Chomsky Hierarchy", difficulty: "Medium",
        question: "Type 2 grammars generate:",
        options: ["A) Regular languages", "B) Context-free languages", "C) Context-sensitive", "D) Unrestricted"], answer: "B",
        explanation: "Type 2 = Context-free grammars → CFLs."
    },
    {
        id: "toc033", topic: "TOC", subtopic: "Chomsky Hierarchy", difficulty: "Medium",
        question: "Type 0 grammars generate:",
        options: ["A) Regular only", "B) CFL only", "C) Recursively enumerable languages", "D) Finite languages"], answer: "C",
        explanation: "Type 0 = Unrestricted grammars → RE languages."
    },
    // COMPLEXITY
    {
        id: "toc034", topic: "TOC", subtopic: "Complexity", difficulty: "Medium",
        question: "P contains problems solvable in:",
        options: ["A) Exponential time", "B) Polynomial time by deterministic TM", "C) Constant time", "D) Unbounded time"], answer: "B",
        explanation: "P = problems solvable in polynomial time deterministically."
    },
    {
        id: "toc035", topic: "TOC", subtopic: "Complexity", difficulty: "Medium",
        question: "NP contains problems:",
        options: ["A) Not solvable", "B) Verifiable in polynomial time", "C) Solvable in exponential time only", "D) Without solutions"], answer: "B",
        explanation: "NP = problems with solutions verifiable in polynomial time."
    },
    {
        id: "toc036", topic: "TOC", subtopic: "Complexity", difficulty: "Hard",
        question: "If P ≠ NP, then:",
        options: ["A) NP-complete problems have no polynomial algorithms", "B) NP-complete problems are easy", "C) P is empty", "D) NP is empty"], answer: "A",
        explanation: "P≠NP would mean NPC problems cannot be solved in polynomial time."
    },
    {
        id: "toc037", topic: "TOC", subtopic: "Complexity", difficulty: "Hard",
        question: "SAT (Boolean Satisfiability) is:",
        options: ["A) In P", "B) NP-complete", "C) Regular", "D) Undecidable"], answer: "B",
        explanation: "SAT was first proven NP-complete (Cook's theorem)."
    },
    {
        id: "toc038", topic: "TOC", subtopic: "Complexity", difficulty: "Medium",
        question: "Reduction is used to show:",
        options: ["A) Problem is easy", "B) Problem A is at least as hard as problem B", "C) Problem is decidable", "D) Problem is regular"], answer: "B",
        explanation: "Reducing A to B shows B is at least as hard as A."
    },
    {
        id: "toc039", topic: "TOC", subtopic: "Complexity", difficulty: "Hard",
        question: "PSPACE contains problems decidable in:",
        options: ["A) Polynomial time", "B) Polynomial space", "C) Exponential space", "D) Constant space"], answer: "B",
        explanation: "PSPACE = problems solvable using polynomial space."
    },
    {
        id: "toc040", topic: "TOC", subtopic: "Complexity", difficulty: "Medium",
        question: "P ⊆ NP is:",
        options: ["A) False", "B) True (every P problem is in NP)", "C) Unknown", "D) Sometimes true"], answer: "B",
        explanation: "P ⊆ NP is proven true. Whether P = NP is unknown."
    },
    // MORE TOC QUESTIONS
    {
        id: "toc041", topic: "TOC", subtopic: "Finite Automata", difficulty: "Medium",
        question: "ε-closure of a state includes:",
        options: ["A) Only the state itself", "B) State and all states reachable by ε-transitions", "C) All states", "D) No states"], answer: "B",
        explanation: "ε-closure: state plus all states reachable through ε (empty) transitions."
    },
    {
        id: "toc042", topic: "TOC", subtopic: "Finite Automata", difficulty: "Hard",
        question: "Myhill-Nerode theorem relates to:",
        options: ["A) Turing machines", "B) Minimum DFA states via equivalence classes", "C) PDA", "D) CFG"], answer: "B",
        explanation: "Myhill-Nerode: number of equivalence classes equals minimum DFA states."
    },
    {
        id: "toc043", topic: "TOC", subtopic: "Finite Automata", difficulty: "Medium",
        question: "DFA minimization merges:",
        options: ["A) All states", "B) Equivalent (indistinguishable) states", "C) Initial states", "D) Final states only"], answer: "B",
        explanation: "States are merged if they produce same output for all inputs."
    },
    {
        id: "toc044", topic: "TOC", subtopic: "Regular Languages", difficulty: "Medium",
        question: "Regular language {a^n | n is even} can be written as:",
        options: ["A) (aa)*", "B) a*", "C) (ab)*", "D) a+"], answer: "A",
        explanation: "(aa)* generates ε, aa, aaaa, ... (even number of a's)."
    },
    {
        id: "toc045", topic: "TOC", subtopic: "Regular Languages", difficulty: "Hard",
        question: "If L is regular, then L^R (reverse) is:",
        options: ["A) Not regular", "B) Regular", "C) Context-free only", "D) Undecidable"], answer: "B",
        explanation: "Regular languages are closed under reversal."
    },
    {
        id: "toc046", topic: "TOC", subtopic: "Regular Expressions", difficulty: "Medium",
        question: "Regex for strings not containing 'ab' over {a,b}:",
        options: ["A) b*a*", "B) (a+ba)*b*", "C) a*b*", "D) b*a*b*a*"], answer: "A",
        explanation: "b*a* = any b's followed by any a's, cannot have 'ab' substring."
    },
    {
        id: "toc047", topic: "TOC", subtopic: "Regular Expressions", difficulty: "Hard",
        question: "Arden's theorem states R = Q + RP has solution:",
        options: ["A) R = QP*", "B) R = P*Q", "C) R = Q* ", "D) R = PQ"], answer: "A",
        explanation: "Arden's: R = Q + RP implies R = QP* (if ε ∉ P)."
    },
    {
        id: "toc048", topic: "TOC", subtopic: "Context-Free Languages", difficulty: "Hard",
        question: "CYK algorithm parses in time:",
        options: ["A) O(n)", "B) O(n²)", "C) O(n³)", "D) O(2^n)"], answer: "C",
        explanation: "CYK dynamic programming parser runs in O(n³) for CNF grammar."
    },
    {
        id: "toc049", topic: "TOC", subtopic: "Context-Free Languages", difficulty: "Medium",
        question: "Greibach Normal Form has productions of form:",
        options: ["A) A→BC", "B) A→aα (terminal followed by non-terminals)", "C) A→ε only", "D) Any form"], answer: "B",
        explanation: "GNF: A→aB₁B₂...Bₖ or A→a (right side starts with terminal)."
    },
    {
        id: "toc050", topic: "TOC", subtopic: "Context-Free Languages", difficulty: "Hard",
        question: "Ambiguous grammar has:",
        options: ["A) No parse trees", "B) Multiple parse trees for same string", "C) Only one derivation", "D) No strings"], answer: "B",
        explanation: "Ambiguous: some string has more than one leftmost (or rightmost) derivation."
    },
    {
        id: "toc051", topic: "TOC", subtopic: "Context-Free Languages", difficulty: "Hard",
        question: "Inherently ambiguous CFL means:",
        options: ["A) Has unambiguous grammar", "B) Every grammar for it is ambiguous", "C) Is regular", "D) Is not CFL"], answer: "B",
        explanation: "Some CFLs have no unambiguous grammar (inherently ambiguous)."
    },
    {
        id: "toc052", topic: "TOC", subtopic: "Pushdown Automata", difficulty: "Hard",
        question: "PDA acceptance by empty stack vs final state:",
        options: ["A) Empty stack more powerful", "B) Final state more powerful", "C) Equivalent in power", "D) Neither accepts CFLs"], answer: "C",
        explanation: "Both acceptance modes recognize exactly the CFLs."
    },
    {
        id: "toc053", topic: "TOC", subtopic: "Pushdown Automata", difficulty: "Medium",
        question: "NPDA can handle:",
        options: ["A) Only regular languages", "B) All context-free languages", "C) Only deterministic CFLs", "D) Recursively enumerable"], answer: "B",
        explanation: "NPDA = all CFLs; DPDA = proper subset of CFLs."
    },
    {
        id: "toc054", topic: "TOC", subtopic: "Turing Machines", difficulty: "Hard",
        question: "Multi-tape TM:",
        options: ["A) More powerful than single-tape", "B) Equivalent to single-tape in language recognition", "C) Less powerful", "D) Cannot be simulated"], answer: "B",
        explanation: "Multi-tape can be simulated by single-tape (polynomial slowdown)."
    },
    {
        id: "toc055", topic: "TOC", subtopic: "Turing Machines", difficulty: "Hard",
        question: "Non-deterministic TM:",
        options: ["A) More powerful than deterministic TM", "B) Equivalent to deterministic TM", "C) Cannot recognize RE", "D) Only regular"], answer: "B",
        explanation: "NTM equivalent to DTM (DTM can simulate NTM)."
    },
    {
        id: "toc056", topic: "TOC", subtopic: "Turing Machines", difficulty: "Medium",
        question: "Linear Bounded Automata recognizes:",
        options: ["A) Regular languages", "B) CFLs", "C) Context-sensitive languages", "D) RE languages"], answer: "C",
        explanation: "LBA: TM with tape bounded by input length, accepts CSLs."
    },
    {
        id: "toc057", topic: "TOC", subtopic: "Decidability", difficulty: "Hard",
        question: "Rice's theorem states:",
        options: ["A) All problems decidable", "B) Non-trivial semantic properties of RE languages are undecidable", "C) Halting problem is decidable", "D) All TMs halt"], answer: "B",
        explanation: "Rice's: any non-trivial property of languages recognized by TMs is undecidable."
    },
    {
        id: "toc058", topic: "TOC", subtopic: "Decidability", difficulty: "Medium",
        question: "Equivalence problem for DFAs is:",
        options: ["A) Undecidable", "B) Decidable", "C) NP-complete", "D) PSPACE-hard"], answer: "B",
        explanation: "DFA equivalence: decidable (minimize and compare, or check symmetric difference empty)."
    },
    {
        id: "toc059", topic: "TOC", subtopic: "Decidability", difficulty: "Hard",
        question: "Equivalence problem for CFGs is:",
        options: ["A) Decidable", "B) Undecidable", "C) Polynomial", "D) Regular"], answer: "B",
        explanation: "CFG equivalence is undecidable."
    },
    {
        id: "toc060", topic: "TOC", subtopic: "Decidability", difficulty: "Medium",
        question: "Membership problem for CFLs is:",
        options: ["A) Undecidable", "B) Decidable (CYK or Earley parser)", "C) NP-complete", "D) Impossible"], answer: "B",
        explanation: "Check if string in CFL: decidable using CYK O(n³)."
    },
    {
        id: "toc061", topic: "TOC", subtopic: "Chomsky Hierarchy", difficulty: "Hard",
        question: "Type 1 (context-sensitive) grammar productions satisfy:",
        options: ["A) |LHS| ≤ |RHS|", "B) |LHS| > |RHS|", "C) Only terminals on RHS", "D) No restriction"], answer: "A",
        explanation: "CSG: |α| ≤ |β| for production α→β (non-contracting)."
    },
    {
        id: "toc062", topic: "TOC", subtopic: "Chomsky Hierarchy", difficulty: "Medium",
        question: "Regular ⊂ CFL ⊂ CSL ⊂ RE is:",
        options: ["A) False", "B) True (proper subset hierarchy)", "C) Unknown", "D) Equal sets"], answer: "B",
        explanation: "Chomsky hierarchy: strict containment at each level."
    },
    {
        id: "toc063", topic: "TOC", subtopic: "Complexity", difficulty: "Hard",
        question: "Co-NP contains:",
        options: ["A) Complements of NP problems", "B) Same as NP", "C) Only P problems", "D) Undecidable problems"], answer: "A",
        explanation: "Co-NP: problems whose complement is in NP."
    },
    {
        id: "toc064", topic: "TOC", subtopic: "Complexity", difficulty: "Hard",
        question: "NP ∩ Co-NP likely contains:",
        options: ["A) Only decidable problems", "B) P and possibly more", "C) NP-complete problems", "D) Nothing"], answer: "B",
        explanation: "P ⊆ NP ∩ Co-NP; unknown if equality holds."
    },
    {
        id: "toc065", topic: "TOC", subtopic: "Complexity", difficulty: "Hard",
        question: "3-SAT is:",
        options: ["A) In P", "B) NP-complete", "C) Undecidable", "D) Co-NP"], answer: "B",
        explanation: "3-SAT (SAT with 3 literals per clause) is NP-complete."
    },
    {
        id: "toc066", topic: "TOC", subtopic: "Complexity", difficulty: "Hard",
        question: "Vertex Cover problem is:",
        options: ["A) In P", "B) NP-complete", "C) Undecidable", "D) Easy"], answer: "B",
        explanation: "Vertex Cover (decision version) is NP-complete."
    },
    {
        id: "toc067", topic: "TOC", subtopic: "Complexity", difficulty: "Medium",
        question: "Polynomial-time reduction A ≤p B means:",
        options: ["A) A is harder than B", "B) A reduces to B in poly-time, so B is at least as hard", "C) B reduces to A", "D) They're equal"], answer: "B",
        explanation: "If A ≤p B, solving B solves A, so B is at least as hard."
    },
    {
        id: "toc068", topic: "TOC", subtopic: "Complexity", difficulty: "Hard",
        question: "EXPTIME contains problems solvable in:",
        options: ["A) Polynomial time", "B) Exponential time (2^poly(n))", "C) Constant time", "D) No time"], answer: "B",
        explanation: "EXPTIME: O(2^p(n)) for polynomial p."
    },
    {
        id: "toc069", topic: "TOC", subtopic: "Regular Languages", difficulty: "Medium",
        question: "Two DFAs are equivalent if:",
        options: ["A) Same number of states", "B) Accept same language", "C) Same alphabet", "D) Same structure"], answer: "B",
        explanation: "Equivalent DFAs: L(M₁) = L(M₂) (same language)."
    },
    {
        id: "toc070", topic: "TOC", subtopic: "Regular Languages", difficulty: "Hard",
        question: "Product construction is used for:",
        options: ["A) Minimization", "B) Intersection of regular languages", "C) Union only", "D) Complement"], answer: "B",
        explanation: "Product construction: build DFA for L₁ ∩ L₂."
    },
    {
        id: "toc071", topic: "TOC", subtopic: "Context-Free Languages", difficulty: "Hard",
        question: "Pumping lemma for CFLs states:",
        options: ["A) All strings can be pumped", "B) Long strings can be split as uvwxy with |vxy|≤p, |vy|≥1, uv^i xy^i z ∈ L", "C) Only for regular", "D) Nothing"], answer: "B",
        explanation: "CFL pumping: uvwxy with |vwx|≤p, |vx|≥1, uv^i wx^i y ∈ L."
    },
    {
        id: "toc072", topic: "TOC", subtopic: "Context-Free Languages", difficulty: "Hard",
        question: "Which is NOT context-free?",
        options: ["A) a^n b^n", "B) palindromes", "C) a^n b^n c^n", "D) ww^R"], answer: "C",
        explanation: "a^n b^n c^n requires matching three counts - not CFL."
    },
    {
        id: "toc073", topic: "TOC", subtopic: "Turing Machines", difficulty: "Medium",
        question: "Recursive language is:",
        options: ["A) Same as RE", "B) Decidable (TM always halts)", "C) Undecidable", "D) Regular only"], answer: "B",
        explanation: "Recursive = decidable: TM halts on all inputs with accept/reject."
    },
    {
        id: "toc074", topic: "TOC", subtopic: "Turing Machines", difficulty: "Hard",
        question: "RE but not recursive language example:",
        options: ["A) a*b*", "B) Halting problem's language", "C) Empty language", "D) All languages"], answer: "B",
        explanation: "TM halting language is RE but undecidable (not recursive)."
    },
    {
        id: "toc075", topic: "TOC", subtopic: "Decidability", difficulty: "Hard",
        question: "Reduction to show undecidability: reduce known undecidable to:",
        options: ["A) Target problem", "B) Known decidable", "C) Regular language", "D) Empty set"], answer: "A",
        explanation: "To show L undecidable, reduce known undecidable problem to L."
    },
    {
        id: "toc076", topic: "TOC", subtopic: "Finite Automata", difficulty: "Medium",
        question: "Moore machine output depends on:",
        options: ["A) Current state only", "B) Current state and input", "C) Input only", "D) Nothing"], answer: "A",
        explanation: "Moore: output associated with state. Mealy: output with transition."
    },
    {
        id: "toc077", topic: "TOC", subtopic: "Finite Automata", difficulty: "Medium",
        question: "Mealy machine output depends on:",
        options: ["A) State only", "B) State and current input", "C) Input only", "D) Previous output"], answer: "B",
        explanation: "Mealy: output = f(state, input), on transitions."
    },
    {
        id: "toc078", topic: "TOC", subtopic: "Regular Languages", difficulty: "Medium",
        question: "Language of all strings with even number of 0s is:",
        options: ["A) Not regular", "B) Regular (2-state DFA)", "C) Context-free only", "D) Undecidable"], answer: "B",
        explanation: "Build DFA with states for even/odd count of 0s."
    },
    {
        id: "toc079", topic: "TOC", subtopic: "Context-Free Languages", difficulty: "Medium",
        question: "Left recursion A → Aα is problematic for:",
        options: ["A) LR parsers", "B) LL (top-down) parsers", "C) All parsers", "D) No parsers"], answer: "B",
        explanation: "LL parsers cannot handle left recursion (infinite loop)."
    },
    {
        id: "toc080", topic: "TOC", subtopic: "Context-Free Languages", difficulty: "Medium",
        question: "Left factoring is used to:",
        options: ["A) Remove recursion", "B) Remove common prefixes for LL parsing", "C) Add ambiguity", "D) Generate code"], answer: "B",
        explanation: "Left factoring extracts common prefixes to enable LL(1) parsing."
    },
    {
        id: "toc081", topic: "TOC", subtopic: "Complexity", difficulty: "Hard",
        question: "Graph Isomorphism is in:",
        options: ["A) P", "B) NP (probably not NP-complete)", "C) PSPACE-complete", "D) Undecidable"], answer: "B",
        explanation: "Graph Isomorphism is in NP; not known to be P or NP-complete."
    },
    {
        id: "toc082", topic: "TOC", subtopic: "Complexity", difficulty: "Hard",
        question: "Primes is in:",
        options: ["A) NP only", "B) P (AKS algorithm)", "C) Undecidable", "D) EXPTIME"], answer: "B",
        explanation: "Primality testing proven in P (AKS, 2002)."
    },
    {
        id: "toc083", topic: "TOC", subtopic: "Complexity", difficulty: "Medium",
        question: "NP-hard means:",
        options: ["A) In NP", "B) At least as hard as hardest NP problems", "C) Easy", "D) Not in NP"], answer: "B",
        explanation: "NP-hard: all NP problems reduce to it; may or may not be in NP."
    },
    {
        id: "toc084", topic: "TOC", subtopic: "Complexity", difficulty: "Medium",
        question: "NP-complete = NP-hard ∩ NP means:",
        options: ["A) Easy and hard", "B) In NP and as hard as any NP problem", "C) Not in NP", "D) Undecidable"], answer: "B",
        explanation: "NP-complete: hardest problems in NP."
    },
    {
        id: "toc085", topic: "TOC", subtopic: "Decidability", difficulty: "Medium",
        question: "Finiteness problem for DFAs is:",
        options: ["A) Undecidable", "B) Decidable", "C) NP-complete", "D) Impossible"], answer: "B",
        explanation: "Check if DFA accepts finite language: look for cycles in accepting paths."
    },
    {
        id: "toc086", topic: "TOC", subtopic: "Regular Languages", difficulty: "Hard",
        question: "Star-free regular languages are exactly:",
        options: ["A) All regular", "B) Aperiodic (counter-free) languages", "C) No languages", "D) CFL"], answer: "B",
        explanation: "Star-free = first-order definable = aperiodic regular languages."
    },
    {
        id: "toc087", topic: "TOC", subtopic: "Finite Automata", difficulty: "Hard",
        question: "Two-way DFA has:",
        options: ["A) More power than one-way DFA", "B) Same power as one-way DFA", "C) Less power", "D) Infinite power"], answer: "B",
        explanation: "2-way DFA equivalent to 1-way DFA (can be converted)."
    },
    {
        id: "toc088", topic: "TOC", subtopic: "Turing Machines", difficulty: "Hard",
        question: "Busy Beaver function is:",
        options: ["A) Computable", "B) Non-computable", "C) Polynomial", "D) Linear"], answer: "B",
        explanation: "Busy Beaver: grows faster than any computable function."
    },
    {
        id: "toc089", topic: "TOC", subtopic: "Complexity", difficulty: "Hard",
        question: "Space complexity class L (LOGSPACE) uses:",
        options: ["A) Polynomial space", "B) Logarithmic space", "C) Constant space", "D) Exponential space"], answer: "B",
        explanation: "L = O(log n) space on work tape (read-only input)."
    },
    {
        id: "toc090", topic: "TOC", subtopic: "Complexity", difficulty: "Hard",
        question: "NL (nondeterministic log-space) example:",
        options: ["A) SAT", "B) PATH (s-t connectivity)", "C) Halting", "D) Sorting"], answer: "B",
        explanation: "PATH (graph reachability) is NL-complete."
    },
    // NEW CORE FOUNDATIONAL QUESTIONS
    {
        id: "toc091", topic: "TOC", subtopic: "Finite Automata", difficulty: "Medium",
        question: "ε-closure of a state in NFA includes:",
        options: ["A) Only that state", "B) All states reachable via ε-transitions", "C) All states in NFA", "D) No states"], answer: "B",
        explanation: "ε-closure: set of states reachable by zero or more ε-transitions."
    },
    {
        id: "toc092", topic: "TOC", subtopic: "Regular Languages", difficulty: "Hard",
        question: "Myhill-Nerode theorem relates:",
        options: ["A) CFLs and PDAs", "B) Number of DFA states to equivalence classes of strings", "C) Turing machines and decidability", "D) Grammars and parsing"], answer: "B",
        explanation: "Myhill-Nerode: minimal DFA states = number of distinguishable equivalence classes."
    },
    {
        id: "toc093", topic: "TOC", subtopic: "Regular Languages", difficulty: "Medium",
        question: "Kleene's theorem states that:",
        options: ["A) All languages are regular", "B) Regex, DFA, and NFA describe exactly regular languages", "C) CFLs are regular", "D) Turing machines are finite"], answer: "B",
        explanation: "Kleene's theorem: equivalence of regular expressions, DFA, and NFA."
    },
    {
        id: "toc094", topic: "TOC", subtopic: "Context-Free Languages", difficulty: "Medium",
        question: "Chomsky Normal Form requires productions of form:",
        options: ["A) A→a or A→BC", "B) A→aB", "C) Any form", "D) A→ε only"], answer: "A",
        explanation: "CNF: A→BC (two non-terminals) or A→a (single terminal)."
    },
    {
        id: "toc095", topic: "TOC", subtopic: "Context-Free Languages", difficulty: "Medium",
        question: "Greibach Normal Form requires productions starting with:",
        options: ["A) Non-terminal", "B) Terminal followed by non-terminals", "C) ε", "D) Any symbol"], answer: "B",
        explanation: "GNF: A→aα where a is terminal, α is string of non-terminals."
    },
    {
        id: "toc096", topic: "TOC", subtopic: "Context-Free Languages", difficulty: "Hard",
        question: "CYK parsing algorithm complexity is:",
        options: ["A) O(n)", "B) O(n²)", "C) O(n³)", "D) O(2^n)"], answer: "C",
        explanation: "CYK: dynamic programming parser, O(n³) for grammar in CNF."
    },
    {
        id: "toc097", topic: "TOC", subtopic: "Pushdown Automata", difficulty: "Medium",
        question: "DPDA (Deterministic PDA) recognizes:",
        options: ["A) All CFLs", "B) Subset of CFLs (deterministic context-free languages)", "C) More than CFLs", "D) Only regular languages"], answer: "B",
        explanation: "DPDA recognizes proper subset of CFLs - deterministic context-free languages."
    },
    {
        id: "toc098", topic: "TOC", subtopic: "Pushdown Automata", difficulty: "Hard",
        question: "Which language is NOT accepted by any DPDA?",
        options: ["A) Balanced parentheses", "B) {ww^R | w ∈ {a,b}*}", "C) a^n b^n", "D) Valid arithmetic expressions"], answer: "B",
        explanation: "{ww^R} requires nondeterminism to guess middle - inherently non-deterministic CFL."
    },
    {
        id: "toc099", topic: "TOC", subtopic: "Turing Machines", difficulty: "Medium",
        question: "Church-Turing thesis states:",
        options: ["A) All languages are decidable", "B) Any effective computation can be done by Turing machine", "C) P = NP", "D) Regular = CFL"], answer: "B",
        explanation: "Church-Turing: Turing machine captures intuitive notion of 'computable'."
    },
    {
        id: "toc100", topic: "TOC", subtopic: "Turing Machines", difficulty: "Hard",
        question: "Multi-tape Turing machine vs single-tape:",
        options: ["A) More powerful", "B) Equivalent power, polynomial slowdown in simulation", "C) Less powerful", "D) Incomparable"], answer: "B",
        explanation: "Multiple tapes can be simulated by single tape with polynomial time overhead."
    },
    {
        id: "toc101", topic: "TOC", subtopic: "Decidability", difficulty: "Hard",
        question: "Rice's theorem applies to:",
        options: ["A) All properties", "B) Non-trivial semantic properties of TM languages", "C) Syntactic properties", "D) Finite languages only"], answer: "B",
        explanation: "Rice's: any non-trivial property of RE languages is undecidable."
    },
    {
        id: "toc102", topic: "TOC", subtopic: "Decidability", difficulty: "Hard",
        question: "Post Correspondence Problem (PCP) is:",
        options: ["A) Decidable", "B) Undecidable", "C) NP-complete", "D) Regular"], answer: "B",
        explanation: "PCP is undecidable - used to prove undecidability of many other problems."
    },
    {
        id: "toc103", topic: "TOC", subtopic: "Decidability", difficulty: "Medium",
        question: "Membership problem for CFLs is:",
        options: ["A) Undecidable", "B) Decidable in O(n³)", "C) NP-complete", "D) Impossible"], answer: "B",
        explanation: "CFL membership decidable using CYK algorithm in O(n³)."
    },
    {
        id: "toc104", topic: "TOC", subtopic: "Decidability", difficulty: "Hard",
        question: "Equivalence of CFGs is:",
        options: ["A) Decidable", "B) Undecidable", "C) NP-complete", "D) Co-NP"], answer: "B",
        explanation: "CFG equivalence is undecidable - checking if two grammars generate same language."
    },
    {
        id: "toc105", topic: "TOC", subtopic: "Complexity", difficulty: "Hard",
        question: "Savitch's theorem shows:",
        options: ["A) P = NP", "B) NSPACE(f(n)) ⊆ DSPACE(f(n)²)", "C) Space is unlimited", "D) Time = Space"], answer: "B",
        explanation: "Savitch: nondeterministic space can be simulated with square of deterministic space."
    },
    {
        id: "toc106", topic: "TOC", subtopic: "Complexity", difficulty: "Hard",
        question: "PSPACE-complete problem example:",
        options: ["A) SAT", "B) QBF (Quantified Boolean Formulas)", "C) PATH", "D) Sorting"], answer: "B",
        explanation: "QBF (TQBF) is PSPACE-complete - generalizes SAT with quantifiers."
    },
    {
        id: "toc107", topic: "TOC", subtopic: "Complexity", difficulty: "Hard",
        question: "Co-NP contains problems whose:",
        options: ["A) Yes-instances verified in polytime", "B) No-instances verified in polytime", "C) All instances solved in polytime", "D) No verification possible"], answer: "B",
        explanation: "Co-NP: complement of NP. No-instances have polynomial-time certificates."
    },
    {
        id: "toc108", topic: "TOC", subtopic: "Complexity", difficulty: "Hard",
        question: "If NP ≠ Co-NP then:",
        options: ["A) P = NP", "B) P ≠ NP", "C) All problems easy", "D) No relation"], answer: "B",
        explanation: "P = NP would imply NP = Co-NP = P. So NP ≠ Co-NP implies P ≠ NP."
    },
    {
        id: "toc109", topic: "TOC", subtopic: "Regular Languages", difficulty: "Medium",
        question: "Arden's theorem is used to:",
        options: ["A) Minimize DFA", "B) Solve regular expression equations", "C) Parse CFGs", "D) Prove undecidability"], answer: "B",
        explanation: "Arden's theorem: X = AX + B has unique solution X = A*B (no ε in A)."
    },
    {
        id: "toc110", topic: "TOC", subtopic: "Finite Automata", difficulty: "Medium",
        question: "Moore machine output depends on:",
        options: ["A) Current state only", "B) Current state and input", "C) Previous output", "D) Random"], answer: "A",
        explanation: "Moore: output associated with states. Mealy: output with transitions."
    },
    {
        id: "toc111", topic: "TOC", subtopic: "Finite Automata", difficulty: "Medium",
        question: "Mealy machine output depends on:",
        options: ["A) Current state only", "B) Current state and input symbol", "C) Previous state only", "D) Random"], answer: "B",
        explanation: "Mealy: output depends on both current state and input symbol."
    },
    {
        id: "toc112", topic: "TOC", subtopic: "Context-Free Languages", difficulty: "Hard",
        question: "Ambiguous grammar has:",
        options: ["A) No parse trees", "B) Multiple parse trees for some string", "C) Only one parse tree always", "D) No strings"], answer: "B",
        explanation: "Ambiguous: exists string with more than one derivation tree."
    },
    {
        id: "toc113", topic: "TOC", subtopic: "Context-Free Languages", difficulty: "Hard",
        question: "Inherently ambiguous CFL means:",
        options: ["A) Some grammar is ambiguous", "B) Every grammar for it is ambiguous", "C) No grammar exists", "D) Language is regular"], answer: "B",
        explanation: "Inherently ambiguous: no unambiguous grammar exists for the language."
    },
    {
        id: "toc114", topic: "TOC", subtopic: "Turing Machines", difficulty: "Hard",
        question: "Linear Bounded Automaton (LBA) recognizes:",
        options: ["A) Regular languages", "B) CFLs", "C) Context-sensitive languages", "D) All RE languages"], answer: "C",
        explanation: "LBA: Turing machine with tape limited to input length, accepts CSLs."
    },
    {
        id: "toc115", topic: "TOC", subtopic: "Decidability", difficulty: "Hard",
        question: "Recursively enumerable (RE) languages are:",
        options: ["A) Turing-decidable", "B) Accepted by some Turing machine (may not halt on non-members)", "C) Regular", "D) Context-free"], answer: "B",
        explanation: "RE: TM accepts if in language, may loop forever if not."
    },
    {
        id: "toc116", topic: "TOC", subtopic: "Decidability", difficulty: "Hard",
        question: "Co-RE languages are:",
        options: ["A) Always decidable", "B) Complement of RE languages", "C) Same as RE", "D) Empty"], answer: "B",
        explanation: "Co-RE: complements of recursively enumerable languages."
    },
    {
        id: "toc117", topic: "TOC", subtopic: "Decidability", difficulty: "Hard",
        question: "A language is decidable iff:",
        options: ["A) It is in RE", "B) Both L and complement are in RE", "C) It is in Co-RE only", "D) Neither in RE nor Co-RE"], answer: "B",
        explanation: "Decidable = Recursive = intersection of RE and Co-RE."
    },
    {
        id: "toc118", topic: "TOC", subtopic: "Complexity", difficulty: "Medium",
        question: "BPP (Bounded-error Probabilistic Polynomial) problems:",
        options: ["A) Always give correct answer", "B) Give correct answer with probability > 2/3", "C) Never terminate", "D) Use no randomization"], answer: "B",
        explanation: "BPP: randomized algorithms correct with bounded error probability."
    },
    {
        id: "toc119", topic: "TOC", subtopic: "Regular Languages", difficulty: "Hard",
        question: "DFA minimization algorithm complexity is:",
        options: ["A) O(n)", "B) O(n log n)", "C) O(n²)", "D) O(2^n)"], answer: "B",
        explanation: "Hopcroft's algorithm: O(n log n). Table-filling: O(n²)."
    },
    {
        id: "toc120", topic: "TOC", subtopic: "Context-Free Languages", difficulty: "Hard",
        question: "Ogden's Lemma is:",
        options: ["A) Same as Pumping Lemma", "B) Stronger version of pumping lemma for CFLs", "C) For regular languages", "D) For Turing machines"], answer: "B",
        explanation: "Ogden's Lemma: stronger than CFL pumping lemma, marks distinguished positions."
    }
];
export default tocQuestions;

