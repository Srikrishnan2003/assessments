// Compiler Design Questions for BARC CSE Exam
export const compilerDesignQuestions = [
    // PHASES OF COMPILER
    {
        id: "cd001", topic: "Compiler Design", subtopic: "Phases", difficulty: "Easy",
        question: "First phase of a compiler is:",
        options: ["A) Syntax Analysis", "B) Lexical Analysis", "C) Semantic Analysis", "D) Code Generation"], answer: "B",
        explanation: "Lexical analysis (scanning) is the first phase - breaks input into tokens."
    },
    {
        id: "cd002", topic: "Compiler Design", subtopic: "Phases", difficulty: "Easy",
        question: "How many phases are in a typical compiler?",
        options: ["A) 4", "B) 5", "C) 6", "D) 7"], answer: "C",
        explanation: "6 phases: Lexical, Syntax, Semantic Analysis, Intermediate Code Gen, Optimization, Code Gen."
    },
    {
        id: "cd003", topic: "Compiler Design", subtopic: "Phases", difficulty: "Medium",
        question: "Symbol table is used by:",
        options: ["A) Only lexical analyzer", "B) All phases of compiler", "C) Only code generator", "D) Only parser"], answer: "B",
        explanation: "Symbol table is accessed and updated throughout compilation."
    },
    // LEXICAL ANALYSIS
    {
        id: "cd004", topic: "Compiler Design", subtopic: "Lexical Analysis", difficulty: "Easy",
        question: "Lexical analyzer produces:",
        options: ["A) Parse tree", "B) Tokens", "C) Machine code", "D) Intermediate code"], answer: "B",
        explanation: "Lexer/Scanner outputs stream of tokens from source code."
    },
    {
        id: "cd005", topic: "Compiler Design", subtopic: "Lexical Analysis", difficulty: "Medium",
        question: "Lexical analyzer is based on:",
        options: ["A) Context-free grammar", "B) Regular expressions/Finite Automata", "C) Turing Machine", "D) PDA"], answer: "B",
        explanation: "Lexical patterns are regular - implemented using regex/DFA."
    },
    {
        id: "cd006", topic: "Compiler Design", subtopic: "Lexical Analysis", difficulty: "Medium",
        question: "Tool for generating lexical analyzer is:",
        options: ["A) YACC", "B) Lex/Flex", "C) Bison", "D) GCC"], answer: "B",
        explanation: "Lex (or Flex) generates lexical analyzers from regex specifications."
    },
    {
        id: "cd007", topic: "Compiler Design", subtopic: "Lexical Analysis", difficulty: "Medium",
        question: "Lexeme is:",
        options: ["A) Pattern for token", "B) Actual string in source code matching a pattern", "C) Token type", "D) Symbol table entry"], answer: "B",
        explanation: "Lexeme is the actual character sequence matched; token is its category."
    },
    // SYNTAX ANALYSIS
    {
        id: "cd008", topic: "Compiler Design", subtopic: "Syntax Analysis", difficulty: "Easy",
        question: "Parser produces:",
        options: ["A) Tokens", "B) Parse tree/Syntax tree", "C) Machine code", "D) Symbol table"], answer: "B",
        explanation: "Parser creates parse tree representing syntactic structure."
    },
    {
        id: "cd009", topic: "Compiler Design", subtopic: "Syntax Analysis", difficulty: "Medium",
        question: "Top-down parsing includes:",
        options: ["A) LR parsing", "B) Recursive descent, LL parsing", "C) SLR parsing", "D) LALR parsing"], answer: "B",
        explanation: "Top-down: recursive descent, LL parsers. Bottom-up: LR, SLR, LALR."
    },
    {
        id: "cd010", topic: "Compiler Design", subtopic: "Syntax Analysis", difficulty: "Medium",
        question: "LL(1) parser uses:",
        options: ["A) Bottom-up approach", "B) Top-down approach with 1 lookahead", "C) No lookahead", "D) Multiple stacks"], answer: "B",
        explanation: "LL(1): Left-to-right, Leftmost derivation, 1 lookahead symbol."
    },
    {
        id: "cd011", topic: "Compiler Design", subtopic: "Syntax Analysis", difficulty: "Hard",
        question: "LR parser is more powerful than LL because:",
        options: ["A) LR uses less memory", "B) LR can handle left-recursive grammars", "C) LR is simpler", "D) LL can handle more grammars"], answer: "B",
        explanation: "LR handles left recursion and larger class of grammars than LL."
    },
    {
        id: "cd012", topic: "Compiler Design", subtopic: "Syntax Analysis", difficulty: "Medium",
        question: "Shift-reduce conflict occurs when:",
        options: ["A) Two reduce actions possible", "B) Parser can either shift or reduce", "C) No action possible", "D) Stack is empty"], answer: "B",
        explanation: "Shift-reduce conflict: ambiguity whether to shift input or reduce stack."
    },
    {
        id: "cd013", topic: "Compiler Design", subtopic: "Syntax Analysis", difficulty: "Medium",
        question: "Reduce-reduce conflict occurs when:",
        options: ["A) Can shift or reduce", "B) Multiple productions can be used for reduction", "C) No reduction possible", "D) Stack overflow"], answer: "B",
        explanation: "Reduce-reduce conflict: multiple valid reductions exist."
    },
    {
        id: "cd014", topic: "Compiler Design", subtopic: "Syntax Analysis", difficulty: "Medium",
        question: "YACC/Bison generates which type of parser?",
        options: ["A) LL(1)", "B) LALR(1)", "C) Recursive descent", "D) LL(k)"], answer: "B",
        explanation: "YACC/Bison generate LALR(1) bottom-up parsers."
    },
    {
        id: "cd015", topic: "Compiler Design", subtopic: "Syntax Analysis", difficulty: "Medium",
        question: "First set is used in:",
        options: ["A) Lexical analysis", "B) LL parsing predictive table construction", "C) Code optimization", "D) Code generation"], answer: "B",
        explanation: "FIRST and FOLLOW sets construct LL(1) parsing tables."
    },
    // SEMANTIC ANALYSIS
    {
        id: "cd016", topic: "Compiler Design", subtopic: "Semantic Analysis", difficulty: "Medium",
        question: "Semantic analysis checks:",
        options: ["A) Syntax errors", "B) Type checking, scope rules", "C) Lexical errors", "D) Code optimization"], answer: "B",
        explanation: "Semantic analysis handles type checking, scope, declarations."
    },
    {
        id: "cd017", topic: "Compiler Design", subtopic: "Semantic Analysis", difficulty: "Medium",
        question: "Syntax-directed translation uses:",
        options: ["A) Regular expressions", "B) Attributes attached to grammar symbols", "C) Machine code", "D) Assembly"], answer: "B",
        explanation: "SDT attaches attributes to symbols; actions compute attribute values."
    },
    {
        id: "cd018", topic: "Compiler Design", subtopic: "Semantic Analysis", difficulty: "Hard",
        question: "S-attributed definitions have:",
        options: ["A) Only inherited attributes", "B) Only synthesized attributes", "C) Both types", "D) No attributes"], answer: "B",
        explanation: "S-attributed: only synthesized attributes (computed bottom-up)."
    },
    {
        id: "cd019", topic: "Compiler Design", subtopic: "Semantic Analysis", difficulty: "Hard",
        question: "L-attributed definitions can be evaluated:",
        options: ["A) Only bottom-up", "B) In depth-first left-to-right order", "C) Only randomly", "D) Never"], answer: "B",
        explanation: "L-attributed allows synthesized + limited inherited attributes."
    },
    // INTERMEDIATE CODE
    {
        id: "cd020", topic: "Compiler Design", subtopic: "Intermediate Code", difficulty: "Medium",
        question: "Three-address code has at most:",
        options: ["A) One address", "B) Two addresses", "C) Three addresses", "D) Four addresses"], answer: "C",
        explanation: "Three-address code: x = y op z (one operator, up to 3 addresses)."
    },
    {
        id: "cd021", topic: "Compiler Design", subtopic: "Intermediate Code", difficulty: "Medium",
        question: "Quadruple representation has:",
        options: ["A) Two fields", "B) Three fields", "C) Four fields (op, arg1, arg2, result)", "D) Five fields"], answer: "C",
        explanation: "Quadruple: (operator, argument1, argument2, result)."
    },
    {
        id: "cd022", topic: "Compiler Design", subtopic: "Intermediate Code", difficulty: "Medium",
        question: "Abstract Syntax Tree (AST) differs from parse tree by:",
        options: ["A) Being larger", "B) Removing unnecessary nodes", "C) Adding more nodes", "D) Being same"], answer: "B",
        explanation: "AST is compressed parse tree without redundant productions."
    },
    // CODE OPTIMIZATION
    {
        id: "cd023", topic: "Compiler Design", subtopic: "Optimization", difficulty: "Medium",
        question: "Loop invariant code motion:",
        options: ["A) Removes loops", "B) Moves computations out of loop that don't change", "C) Adds loops", "D) Slows execution"], answer: "B",
        explanation: "Move expressions that don't change inside loop to outside."
    },
    {
        id: "cd024", topic: "Compiler Design", subtopic: "Optimization", difficulty: "Medium",
        question: "Dead code elimination removes:",
        options: ["A) All code", "B) Code whose result is never used", "C) Loops", "D) Functions"], answer: "B",
        explanation: "Remove code that computes values never used."
    },
    {
        id: "cd025", topic: "Compiler Design", subtopic: "Optimization", difficulty: "Medium",
        question: "Common subexpression elimination:",
        options: ["A) Removes subexpressions", "B) Computes repeated expressions only once", "C) Adds expressions", "D) Changes expressions"], answer: "B",
        explanation: "Reuse previously computed value instead of recomputing."
    },
    {
        id: "cd026", topic: "Compiler Design", subtopic: "Optimization", difficulty: "Hard",
        question: "Strength reduction replaces:",
        options: ["A) Addition with multiplication", "B) Expensive operations with cheaper ones (e.g., mult→shift)", "C) Nothing", "D) Functions with loops"], answer: "B",
        explanation: "Replace expensive ops like multiply by 2 with left shift."
    },
    {
        id: "cd027", topic: "Compiler Design", subtopic: "Optimization", difficulty: "Hard",
        question: "Peephole optimization works on:",
        options: ["A) Entire program", "B) Small window of instructions", "C) Only loops", "D) Only functions"], answer: "B",
        explanation: "Peephole examines small sequence of instructions for local improvements."
    },
    // CODE GENERATION
    {
        id: "cd028", topic: "Compiler Design", subtopic: "Code Generation", difficulty: "Medium",
        question: "Register allocation goal is:",
        options: ["A) Use maximum registers", "B) Minimize memory access by keeping values in registers", "C) Avoid registers", "D) Increase spilling"], answer: "B",
        explanation: "Keep frequently used values in registers to avoid slow memory."
    },
    {
        id: "cd029", topic: "Compiler Design", subtopic: "Code Generation", difficulty: "Hard",
        question: "Graph coloring is used for:",
        options: ["A) Parsing", "B) Register allocation", "C) Lexical analysis", "D) Syntax analysis"], answer: "B",
        explanation: "Interference graph coloring assigns registers - colors = registers."
    },
    {
        id: "cd030", topic: "Compiler Design", subtopic: "Code Generation", difficulty: "Medium",
        question: "Spilling means:",
        options: ["A) Using more registers", "B) Moving variable from register to memory", "C) Deleting variables", "D) Adding registers"], answer: "B",
        explanation: "When registers insufficient, spill values to memory."
    },
    // RUNTIME ENVIRONMENT
    {
        id: "cd031", topic: "Compiler Design", subtopic: "Runtime", difficulty: "Medium",
        question: "Activation record contains:",
        options: ["A) Source code only", "B) Local variables, return address, parameters", "C) Only return address", "D) Nothing"], answer: "B",
        explanation: "Activation record/stack frame stores function's local data."
    },
    {
        id: "cd032", topic: "Compiler Design", subtopic: "Runtime", difficulty: "Medium",
        question: "Static scoping determines variable binding at:",
        options: ["A) Runtime", "B) Compile time", "C) Link time", "D) Load time"], answer: "B",
        explanation: "Static/lexical scoping determines bindings from source code structure."
    },
    {
        id: "cd033", topic: "Compiler Design", subtopic: "Runtime", difficulty: "Medium",
        question: "Dynamic scoping determines variable binding at:",
        options: ["A) Compile time", "B) Runtime", "C) Never", "D) Link time"], answer: "B",
        explanation: "Dynamic scoping looks up call stack at runtime."
    },
    {
        id: "cd034", topic: "Compiler Design", subtopic: "Runtime", difficulty: "Hard",
        question: "Display is used for:",
        options: ["A) Output", "B) Fast access to non-local variables in nested procedures", "C) Input", "D) Debugging"], answer: "B",
        explanation: "Display array provides quick access to enclosing scope's activation records."
    },
    {
        id: "cd035", topic: "Compiler Design", subtopic: "Runtime", difficulty: "Medium",
        question: "Stack is used for:",
        options: ["A) Global variables", "B) Function calls and local variables", "C) Heap allocation", "D) Static variables"], answer: "B",
        explanation: "Stack manages function calls, local variables, return addresses."
    },
    // MORE COMPILER DESIGN QUESTIONS
    {
        id: "cd036", topic: "Compiler Design", subtopic: "Phases", difficulty: "Medium",
        question: "Error handler is used by:",
        options: ["A) Only lexical analyzer", "B) All phases", "C) Only parser", "D) Only code generator"], answer: "B",
        explanation: "Error handler reports and possibly recovers from errors in all phases."
    },
    {
        id: "cd037", topic: "Compiler Design", subtopic: "Lexical Analysis", difficulty: "Hard",
        question: "Longest match rule in lexer means:",
        options: ["A) Match shortest string", "B) Match longest possible token", "C) Match any string", "D) No matching"], answer: "B",
        explanation: "Lexer prefers longest match among possible token patterns."
    },
    {
        id: "cd038", topic: "Compiler Design", subtopic: "Lexical Analysis", difficulty: "Medium",
        question: "Keyword vs Identifier: keywords are:",
        options: ["A) Same as identifiers", "B) Reserved words with special meaning", "C) User-defined", "D) Comments"], answer: "B",
        explanation: "Keywords are reserved (if, while, etc.); identifiers are user-defined names."
    },
    {
        id: "cd039", topic: "Compiler Design", subtopic: "Syntax Analysis", difficulty: "Hard",
        question: "Handle in bottom-up parsing is:",
        options: ["A) Any substring", "B) Rightmost substring matching RHS of production", "C) Leftmost symbol", "D) Stack top"], answer: "B",
        explanation: "Handle: substring that can be reduced (matches production RHS at correct position)."
    },
    {
        id: "cd040", topic: "Compiler Design", subtopic: "Syntax Analysis", difficulty: "Hard",
        question: "Viable prefix is:",
        options: ["A) Complete string", "B) Prefix of right sentential form that can appear on stack", "C) Any prefix", "D) Empty string"], answer: "B",
        explanation: "Viable prefix: stack contents before attempting reduction."
    },
    {
        id: "cd041", topic: "Compiler Design", subtopic: "Syntax Analysis", difficulty: "Hard",
        question: "LR(0) item is:",
        options: ["A) Production with dot showing parse position", "B) Token", "C) Terminal", "D) Non-terminal"], answer: "A",
        explanation: "LR item: production with dot marking how much has been seen (A→α.β)."
    },
    {
        id: "cd042", topic: "Compiler Design", subtopic: "Syntax Analysis", difficulty: "Hard",
        question: "FOLLOW set is used to:",
        options: ["A) Find first terminal", "B) Determine what can follow a non-terminal", "C) Count productions", "D) Minimize grammar"], answer: "B",
        explanation: "FOLLOW(A): set of terminals that can appear after A in derivation."
    },
    {
        id: "cd043", topic: "Compiler Design", subtopic: "Syntax Analysis", difficulty: "Medium",
        question: "Predictive parser uses:",
        options: ["A) Backtracking always", "B) Parsing table, no backtracking", "C) Random selection", "D) All rules"], answer: "B",
        explanation: "Predictive (LL) parser uses table to deterministically choose production."
    },
    {
        id: "cd044", topic: "Compiler Design", subtopic: "Syntax Analysis", difficulty: "Hard",
        question: "SLR parser uses for reduction:",
        options: ["A) FIRST set", "B) FOLLOW set of LHS", "C) No lookahead", "D) Full context"], answer: "B",
        explanation: "SLR: reduce if lookahead in FOLLOW(LHS of production)."
    },
    {
        id: "cd045", topic: "Compiler Design", subtopic: "Syntax Analysis", difficulty: "Hard",
        question: "LALR vs LR(1): LALR merges states with:",
        options: ["A) Different cores", "B) Same core, different lookaheads", "C) No merging", "D) All states"], answer: "B",
        explanation: "LALR: merge LR(1) states with same core, combine lookaheads."
    },
    {
        id: "cd046", topic: "Compiler Design", subtopic: "Semantic Analysis", difficulty: "Medium",
        question: "Type checking is:",
        options: ["A) Lexical error", "B) Semantic analysis task", "C) Syntax error", "D) Code generation"], answer: "B",
        explanation: "Type checking verifies operands have compatible types."
    },
    {
        id: "cd047", topic: "Compiler Design", subtopic: "Semantic Analysis", difficulty: "Hard",
        question: "Inherited attributes are computed:",
        options: ["A) Bottom-up only", "B) From parent/siblings", "C) Only at leaves", "D) Never"], answer: "B",
        explanation: "Inherited: passed down from parent or siblings (left-to-right)."
    },
    {
        id: "cd048", topic: "Compiler Design", subtopic: "Semantic Analysis", difficulty: "Medium",
        question: "Annotated parse tree has:",
        options: ["A) Only nodes", "B) Nodes with attribute values", "C) Only edges", "D) No information"], answer: "B",
        explanation: "Annotated tree: parse tree with computed attribute values."
    },
    {
        id: "cd049", topic: "Compiler Design", subtopic: "Intermediate Code", difficulty: "Medium",
        question: "Triple representation differs from quadruple by:",
        options: ["A) More fields", "B) Using instruction number instead of explicit result", "C) No operators", "D) Same as quadruple"], answer: "B",
        explanation: "Triple: (op, arg1, arg2), result is instruction number itself."
    },
    {
        id: "cd050", topic: "Compiler Design", subtopic: "Intermediate Code", difficulty: "Medium",
        question: "Indirect triple separates:",
        options: ["A) Nothing", "B) Instruction list from execution order", "C) All components", "D) Operators"], answer: "B",
        explanation: "Indirect triples: separate list for execution order allows reordering."
    },
    {
        id: "cd051", topic: "Compiler Design", subtopic: "Intermediate Code", difficulty: "Medium",
        question: "DAG (Directed Acyclic Graph) for expressions:",
        options: ["A) Has cycles", "B) Shares common subexpressions", "C) Is a tree", "D) Has no nodes"], answer: "B",
        explanation: "DAG: CSE represented by sharing; more compact than tree."
    },
    {
        id: "cd052", topic: "Compiler Design", subtopic: "Optimization", difficulty: "Hard",
        question: "Constant folding evaluates:",
        options: ["A) All expressions", "B) Constant expressions at compile time", "C) Variables", "D) Nothing"], answer: "B",
        explanation: "Constant folding: compute 2+3→5 during compilation."
    },
    {
        id: "cd053", topic: "Compiler Design", subtopic: "Optimization", difficulty: "Hard",
        question: "Constant propagation:",
        options: ["A) Removes constants", "B) Replaces variables known to be constant with their values", "C) Adds constants", "D) Nothing"], answer: "B",
        explanation: "If x=5 known, replace uses of x with 5."
    },
    {
        id: "cd054", topic: "Compiler Design", subtopic: "Optimization", difficulty: "Hard",
        question: "Copy propagation:",
        options: ["A) Removes copies", "B) Replaces use of x with y after x=y", "C) Adds copies", "D) Nothing"], answer: "B",
        explanation: "After x=y, use y directly instead of x."
    },
    {
        id: "cd055", topic: "Compiler Design", subtopic: "Optimization", difficulty: "Hard",
        question: "Induction variable elimination in loops:",
        options: ["A) Adds variables", "B) Removes auxiliary loop variables", "C) Creates variables", "D) Nothing"], answer: "B",
        explanation: "Replace multiple induction variables with single one + strength reduction."
    },
    {
        id: "cd056", topic: "Compiler Design", subtopic: "Optimization", difficulty: "Medium",
        question: "Basic block is:",
        options: ["A) Any code", "B) Maximal sequence with single entry, single exit", "C) Function", "D) Loop only"], answer: "B",
        explanation: "Basic block: enter at beginning, exit at end, no jumps in/out middle."
    },
    {
        id: "cd057", topic: "Compiler Design", subtopic: "Optimization", difficulty: "Hard",
        question: "Flow graph represents:",
        options: ["A) Data only", "B) Control flow between basic blocks", "C) Just instructions", "D) Nothing"], answer: "B",
        explanation: "CFG: nodes are basic blocks, edges are control flow."
    },
    {
        id: "cd058", topic: "Compiler Design", subtopic: "Optimization", difficulty: "Hard",
        question: "Dominator in flow graph: A dominates B if:",
        options: ["A) B dominates A", "B) Every path to B goes through A", "C) A equals B", "D) No relation"], answer: "B",
        explanation: "A dominates B: all paths from entry to B pass through A."
    },
    {
        id: "cd059", topic: "Compiler Design", subtopic: "Optimization", difficulty: "Hard",
        question: "Loop optimization is important because:",
        options: ["A) Loops rarely execute", "B) Loops execute many times, optimizations multiply", "C) Loops are simple", "D) Nothing"], answer: "B",
        explanation: "Loops execute repeatedly; small improvements have large impact."
    },
    {
        id: "cd060", topic: "Compiler Design", subtopic: "Code Generation", difficulty: "Medium",
        question: "Instruction selection maps:",
        options: ["A) Nothing", "B) Intermediate code to target instructions", "C) Source to tokens", "D) Parse tree to AST"], answer: "B",
        explanation: "Select machine instructions to implement IR operations."
    },
    {
        id: "cd061", topic: "Compiler Design", subtopic: "Code Generation", difficulty: "Hard",
        question: "Register interference graph has edge if:",
        options: ["A) Variables are same", "B) Variables are live simultaneously", "C) No relation", "D) Variables unused"], answer: "B",
        explanation: "Interference edge: both variables live at same time (can't share register)."
    },
    {
        id: "cd062", topic: "Compiler Design", subtopic: "Code Generation", difficulty: "Medium",
        question: "Live variable at point P is:",
        options: ["A) Defined at P", "B) Used after P before redefinition", "C) Never used", "D) Constant"], answer: "B",
        explanation: "Live: value may be used on some path from P before being overwritten."
    },
    {
        id: "cd063", topic: "Compiler Design", subtopic: "Code Generation", difficulty: "Hard",
        question: "Reaching definitions analysis finds:",
        options: ["A) Dead code", "B) Which definitions may reach a point", "C) Live variables", "D) Constants"], answer: "B",
        explanation: "Reaching definitions: which assignments may affect value at point."
    },
    {
        id: "cd064", topic: "Compiler Design", subtopic: "Code Generation", difficulty: "Hard",
        question: "Available expressions at point P are:",
        options: ["A) Never computed", "B) Computed on all paths to P and not redefined", "C) Dead expressions", "D) Constants"], answer: "B",
        explanation: "Available: computed on every path and operands not modified since."
    },
    {
        id: "cd065", topic: "Compiler Design", subtopic: "Runtime", difficulty: "Medium",
        question: "Heap is used for:",
        options: ["A) Function calls", "B) Dynamic memory allocation", "C) Local variables only", "D) Static variables only"], answer: "B",
        explanation: "Heap: runtime dynamic allocation (malloc, new, etc.)."
    },
    {
        id: "cd066", topic: "Compiler Design", subtopic: "Runtime", difficulty: "Hard",
        question: "Access link (static link) points to:",
        options: ["A) Previous function", "B) Activation record of lexically enclosing scope", "C) Heap", "D) Code"], answer: "B",
        explanation: "Static link: for accessing non-local variables in nested scopes."
    },
    {
        id: "cd067", topic: "Compiler Design", subtopic: "Runtime", difficulty: "Medium",
        question: "Control link (dynamic link) points to:",
        options: ["A) Enclosing scope", "B) Caller's activation record", "C) Global data", "D) Nothing"], answer: "B",
        explanation: "Dynamic link: restore caller's frame on return."
    },
    {
        id: "cd068", topic: "Compiler Design", subtopic: "Runtime", difficulty: "Medium",
        question: "Parameter passing call-by-value:",
        options: ["A) Passes address", "B) Copies value, changes don't affect caller", "C) Shares memory", "D) No passing"], answer: "B",
        explanation: "Call-by-value: callee gets copy; modifications don't affect caller."
    },
    {
        id: "cd069", topic: "Compiler Design", subtopic: "Runtime", difficulty: "Medium",
        question: "Parameter passing call-by-reference:",
        options: ["A) Copies value", "B) Passes address, changes affect caller", "C) Returns value", "D) Nothing"], answer: "B",
        explanation: "Call-by-reference: callee modifies caller's actual variable."
    },
    {
        id: "cd070", topic: "Compiler Design", subtopic: "Lexical Analysis", difficulty: "Medium",
        question: "Sentinel character is used to:",
        options: ["A) Mark end of input buffer", "B) Start parsing", "C) Indicate comment", "D) Nothing"], answer: "A",
        explanation: "Sentinel: special character at buffer end to check EOF efficiently."
    },
    {
        id: "cd071", topic: "Compiler Design", subtopic: "Lexical Analysis", difficulty: "Medium",
        question: "Input buffering uses:",
        options: ["A) Single buffer", "B) Pair of buffers for efficient lookahead", "C) No buffers", "D) Unlimited buffers"], answer: "B",
        explanation: "Double buffering: two halves, refill one while scanning other."
    },
    {
        id: "cd072", topic: "Compiler Design", subtopic: "Syntax Analysis", difficulty: "Medium",
        question: "Panic mode error recovery:",
        options: ["A) Terminates parser", "B) Skips input until synchronizing token", "C) Corrects error", "D) Ignores error"], answer: "B",
        explanation: "Panic mode: discard tokens until known synchronization point (e.g., semicolon)."
    },
    {
        id: "cd073", topic: "Compiler Design", subtopic: "Syntax Analysis", difficulty: "Medium",
        question: "Phrase-level error recovery:",
        options: ["A) Skips input", "B) Makes local corrections to continue", "C) Stops parsing", "D) Reports nothing"], answer: "B",
        explanation: "Phrase-level: local corrections like inserting/deleting tokens."
    },
    {
        id: "cd074", topic: "Compiler Design", subtopic: "Semantic Analysis", difficulty: "Medium",
        question: "Symbol table operations include:",
        options: ["A) Only insert", "B) Insert, lookup, delete, scope management", "C) Only lookup", "D) Nothing"], answer: "B",
        explanation: "Symbol table: insert declarations, lookup uses, handle nested scopes."
    },
    {
        id: "cd075", topic: "Compiler Design", subtopic: "Semantic Analysis", difficulty: "Medium",
        question: "Hash table is commonly used for symbol table because:",
        options: ["A) Slow lookup", "B) O(1) average lookup", "C) Uses more memory", "D) Complex implementation"], answer: "B",
        explanation: "Hashing provides fast average-case operations."
    },
    {
        id: "cd076", topic: "Compiler Design", subtopic: "Intermediate Code", difficulty: "Hard",
        question: "Static single assignment (SSA) form:",
        options: ["A) Variables assigned many times", "B) Each variable assigned exactly once", "C) No assignments", "D) Same as source"], answer: "B",
        explanation: "SSA: each variable defined once; use φ-functions at merge points."
    },
    {
        id: "cd077", topic: "Compiler Design", subtopic: "Optimization", difficulty: "Hard",
        question: "Global vs local optimization: global considers:",
        options: ["A) Single basic block", "B) Entire function/procedure or more", "C) Only loops", "D) Nothing"], answer: "B",
        explanation: "Global: across multiple basic blocks. Local: within single block."
    },
    {
        id: "cd078", topic: "Compiler Design", subtopic: "Optimization", difficulty: "Hard",
        question: "Inlining replaces:",
        options: ["A) Variables", "B) Function call with function body", "C) Constants", "D) Nothing"], answer: "B",
        explanation: "Inline expansion: substitute function body at call site."
    },
    {
        id: "cd079", topic: "Compiler Design", subtopic: "Optimization", difficulty: "Hard",
        question: "Loop unrolling:",
        options: ["A) Removes loops", "B) Replicates loop body to reduce iterations and overhead", "C) Adds loops", "D) Nothing"], answer: "B",
        explanation: "Unroll: replicate body k times, execute loop n/k times."
    },
    {
        id: "cd080", topic: "Compiler Design", subtopic: "Optimization", difficulty: "Hard",
        question: "Tail call optimization:",
        options: ["A) Makes calls slower", "B) Reuses stack frame for tail-recursive calls", "C) Adds stack frames", "D) Nothing"], answer: "B",
        explanation: "TCO: tail call can reuse current frame, enabling efficient recursion."
    },
    {
        id: "cd081", topic: "Compiler Design", subtopic: "Code Generation", difficulty: "Medium",
        question: "Sethi-Ullman algorithm finds:",
        options: ["A) Parsing table", "B) Minimum registers for expression evaluation", "C) Tokens", "D) Parse tree"], answer: "B",
        explanation: "Sethi-Ullman: compute expression tree with minimum registers."
    },
    {
        id: "cd082", topic: "Compiler Design", subtopic: "Code Generation", difficulty: "Hard",
        question: "Ershov numbers on expression tree indicate:",
        options: ["A) Node depth", "B) Registers needed for subtree", "C) Parse order", "D) Nothing"], answer: "B",
        explanation: "Ershov labeling: number of registers to evaluate subtree."
    },
    {
        id: "cd083", topic: "Compiler Design", subtopic: "Code Generation", difficulty: "Medium",
        question: "Calling convention specifies:",
        options: ["A) Nothing", "B) How parameters passed, registers saved, return value", "C) Only names", "D) Parse rules"], answer: "B",
        explanation: "Calling convention: ABI for function call interface."
    },
    {
        id: "cd084", topic: "Compiler Design", subtopic: "General", difficulty: "Medium",
        question: "Cross-compiler generates code for:",
        options: ["A) Same machine", "B) Different target machine than compiler runs on", "C) No machine", "D) Virtual machine only"], answer: "B",
        explanation: "Cross-compiler: runs on host, targets different platform."
    },
    {
        id: "cd085", topic: "Compiler Design", subtopic: "General", difficulty: "Easy",
        question: "Interpreter differs from compiler by:",
        options: ["A) Producing executable", "B) Executing source directly without generating code", "C) Being slower always", "D) No execution"], answer: "B",
        explanation: "Interpreter executes directly; compiler produces executable."
    },
    {
        id: "cd086", topic: "Compiler Design", subtopic: "General", difficulty: "Medium",
        question: "JIT (Just-In-Time) compilation:",
        options: ["A) Compiles ahead of time", "B) Compiles during execution", "C) Never compiles", "D) Interprets only"], answer: "B",
        explanation: "JIT: compile bytecode to native code at runtime for speed."
    },
    {
        id: "cd087", topic: "Compiler Design", subtopic: "Runtime", difficulty: "Hard",
        question: "Garbage collection automatically:",
        options: ["A) Adds memory", "B) Reclaims unused heap memory", "C) Removes code", "D) Nothing"], answer: "B",
        explanation: "GC: identify and reclaim unreachable heap objects."
    },
    {
        id: "cd088", topic: "Compiler Design", subtopic: "Runtime", difficulty: "Hard",
        question: "Mark-and-sweep GC:",
        options: ["A) Counts references", "B) Marks reachable objects, sweeps unmarked", "C) Copies objects", "D) Nothing"], answer: "B",
        explanation: "Mark phase traces live objects; sweep frees unmarked."
    },
    {
        id: "cd089", topic: "Compiler Design", subtopic: "Runtime", difficulty: "Medium",
        question: "Closure in programming captures:",
        options: ["A) Nothing", "B) Function with its lexical environment", "C) Only function", "D) Only variables"], answer: "B",
        explanation: "Closure: function + bindings to free variables from enclosing scope."
    },
    {
        id: "cd090", topic: "Compiler Design", subtopic: "General", difficulty: "Medium",
        question: "Bootstrapping compiler means:",
        options: ["A) Compiler for boots", "B) Compiler written in the language it compiles", "C) No compilation", "D) External compiler"], answer: "B",
        explanation: "Bootstrapping: write compiler in its own source language."
    }
];
export default compilerDesignQuestions;
