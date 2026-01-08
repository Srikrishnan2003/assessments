// Digital Logic Questions for BARC CSE Exam
export const digitalLogicQuestions = [
    // NUMBER SYSTEMS
    {
        id: "dl001", topic: "Digital Logic", subtopic: "Number Systems", difficulty: "Easy",
        question: "Binary equivalent of decimal 13 is:",
        options: ["A) 1011", "B) 1101", "C) 1110", "D) 1100"], answer: "B",
        explanation: "13 = 8+4+1 = 1101 in binary."
    },
    {
        id: "dl002", topic: "Digital Logic", subtopic: "Number Systems", difficulty: "Easy",
        question: "Hexadecimal F equals decimal:",
        options: ["A) 10", "B) 15", "C) 16", "D) 14"], answer: "B",
        explanation: "Hex F = 15 in decimal. (A=10, B=11, C=12, D=13, E=14, F=15)"
    },
    {
        id: "dl003", topic: "Digital Logic", subtopic: "Number Systems", difficulty: "Medium",
        question: "2's complement of 8-bit number 00110100 is:",
        options: ["A) 11001011", "B) 11001100", "C) 11001101", "D) 00110100"], answer: "B",
        explanation: "1's complement = 11001011, add 1 = 11001100."
    },
    {
        id: "dl004", topic: "Digital Logic", subtopic: "Number Systems", difficulty: "Medium",
        question: "Range of n-bit 2's complement numbers is:",
        options: ["A) 0 to 2^n-1", "B) -2^(n-1) to 2^(n-1)-1", "C) -2^n to 2^n", "D) 1 to 2^n"], answer: "B",
        explanation: "n-bit 2's complement: -2^(n-1) to 2^(n-1)-1."
    },
    // BOOLEAN ALGEBRA
    {
        id: "dl005", topic: "Digital Logic", subtopic: "Boolean Algebra", difficulty: "Easy",
        question: "A + A' equals:",
        options: ["A) 0", "B) 1", "C) A", "D) A'"], answer: "B",
        explanation: "Complement law: A OR NOT(A) = 1."
    },
    {
        id: "dl006", topic: "Digital Logic", subtopic: "Boolean Algebra", difficulty: "Easy",
        question: "A · A' equals:",
        options: ["A) 0", "B) 1", "C) A", "D) A'"], answer: "A",
        explanation: "Complement law: A AND NOT(A) = 0."
    },
    {
        id: "dl007", topic: "Digital Logic", subtopic: "Boolean Algebra", difficulty: "Easy",
        question: "A + 1 equals:",
        options: ["A) 0", "B) 1", "C) A", "D) A'"], answer: "B",
        explanation: "Identity law: A OR 1 = 1."
    },
    {
        id: "dl008", topic: "Digital Logic", subtopic: "Boolean Algebra", difficulty: "Easy",
        question: "A · 1 equals:",
        options: ["A) 0", "B) 1", "C) A", "D) A'"], answer: "C",
        explanation: "Identity law: A AND 1 = A."
    },
    {
        id: "dl009", topic: "Digital Logic", subtopic: "Boolean Algebra", difficulty: "Medium",
        question: "De Morgan's theorem states (A+B)' equals:",
        options: ["A) A'+B'", "B) A'·B'", "C) A+B", "D) A·B"], answer: "B",
        explanation: "De Morgan: (A+B)' = A'·B' and (A·B)' = A'+B'."
    },
    {
        id: "dl010", topic: "Digital Logic", subtopic: "Boolean Algebra", difficulty: "Medium",
        question: "A + A·B equals:",
        options: ["A) A·B", "B) A+B", "C) A", "D) B"], answer: "C",
        explanation: "Absorption law: A + AB = A(1+B) = A."
    },
    // LOGIC GATES
    {
        id: "dl011", topic: "Digital Logic", subtopic: "Logic Gates", difficulty: "Easy",
        question: "NAND gate output is 0 when:",
        options: ["A) All inputs are 0", "B) All inputs are 1", "C) Any input is 0", "D) Any input is 1"], answer: "B",
        explanation: "NAND = NOT(AND). Output is 0 only when all inputs are 1."
    },
    {
        id: "dl012", topic: "Digital Logic", subtopic: "Logic Gates", difficulty: "Easy",
        question: "NOR gate output is 1 when:",
        options: ["A) All inputs are 1", "B) All inputs are 0", "C) Any input is 1", "D) Any input is 0"], answer: "B",
        explanation: "NOR = NOT(OR). Output is 1 only when all inputs are 0."
    },
    {
        id: "dl013", topic: "Digital Logic", subtopic: "Logic Gates", difficulty: "Medium",
        question: "XOR of A and B is 1 when:",
        options: ["A) A=B=0", "B) A=B=1", "C) A≠B", "D) A=B"], answer: "C",
        explanation: "XOR outputs 1 when inputs are different."
    },
    {
        id: "dl014", topic: "Digital Logic", subtopic: "Logic Gates", difficulty: "Medium",
        question: "Which gate is called universal gate?",
        options: ["A) AND, OR", "B) NAND, NOR", "C) XOR, XNOR", "D) NOT only"], answer: "B",
        explanation: "NAND and NOR are universal - can implement any logic function."
    },
    // COMBINATIONAL CIRCUITS
    {
        id: "dl015", topic: "Digital Logic", subtopic: "Combinational Circuits", difficulty: "Medium",
        question: "A 4-to-1 multiplexer has how many select lines?",
        options: ["A) 1", "B) 2", "C) 3", "D) 4"], answer: "B",
        explanation: "2^n inputs need n select lines. 4=2^2, so 2 select lines."
    },
    {
        id: "dl016", topic: "Digital Logic", subtopic: "Combinational Circuits", difficulty: "Medium",
        question: "A 3-to-8 decoder has how many outputs?",
        options: ["A) 3", "B) 8", "C) 11", "D) 24"], answer: "B",
        explanation: "n-to-2^n decoder: 3 inputs give 2^3 = 8 outputs."
    },
    {
        id: "dl017", topic: "Digital Logic", subtopic: "Combinational Circuits", difficulty: "Medium",
        question: "Full adder has how many inputs?",
        options: ["A) 2", "B) 3", "C) 4", "D) 5"], answer: "B",
        explanation: "Full adder: 3 inputs (A, B, Carry-in), 2 outputs (Sum, Carry-out)."
    },
    {
        id: "dl018", topic: "Digital Logic", subtopic: "Combinational Circuits", difficulty: "Hard",
        question: "Carry output of full adder is:",
        options: ["A) AB + BC + AC", "B) A⊕B⊕C", "C) AB + Cin(A⊕B)", "D) ABC"], answer: "C",
        explanation: "Cout = AB + Cin(A⊕B) where A,B are inputs, Cin is carry input."
    },
    // MINIMIZATION
    {
        id: "dl019", topic: "Digital Logic", subtopic: "Minimization", difficulty: "Medium",
        question: "K-map is used for:",
        options: ["A) Addition", "B) Boolean function minimization", "C) Multiplication", "D) Division"], answer: "B",
        explanation: "Karnaugh map visually minimizes Boolean functions."
    },
    {
        id: "dl020", topic: "Digital Logic", subtopic: "Minimization", difficulty: "Medium",
        question: "In K-map, adjacent cells differ by:",
        options: ["A) Two variables", "B) One variable", "C) All variables", "D) No variables"], answer: "B",
        explanation: "Adjacent cells differ by exactly one variable (Gray code)."
    },
    {
        id: "dl021", topic: "Digital Logic", subtopic: "Minimization", difficulty: "Hard",
        question: "Don't care conditions in K-map can be treated as:",
        options: ["A) Always 0", "B) Always 1", "C) Either 0 or 1 for minimization", "D) Ignored"], answer: "C",
        explanation: "Don't cares can be 0 or 1, whichever gives better minimization."
    },
    // SEQUENTIAL CIRCUITS
    {
        id: "dl022", topic: "Digital Logic", subtopic: "Sequential Circuits", difficulty: "Easy",
        question: "Flip-flop is a:",
        options: ["A) Combinational circuit", "B) Sequential circuit", "C) Arithmetic circuit", "D) Logic gate"], answer: "B",
        explanation: "Flip-flop stores state, making it sequential (has memory)."
    },
    {
        id: "dl023", topic: "Digital Logic", subtopic: "Sequential Circuits", difficulty: "Medium",
        question: "In SR flip-flop, S=1, R=1 is:",
        options: ["A) Set state", "B) Reset state", "C) No change", "D) Invalid/forbidden"], answer: "D",
        explanation: "S=R=1 is invalid in basic SR flip-flop (undefined output)."
    },
    {
        id: "dl024", topic: "Digital Logic", subtopic: "Sequential Circuits", difficulty: "Medium",
        question: "JK flip-flop solves which problem of SR flip-flop?",
        options: ["A) Speed", "B) Invalid state when both inputs are 1", "C) Power", "D) Size"], answer: "B",
        explanation: "JK flip-flop toggles when J=K=1 instead of being invalid."
    },
    {
        id: "dl025", topic: "Digital Logic", subtopic: "Sequential Circuits", difficulty: "Medium",
        question: "D flip-flop output follows:",
        options: ["A) Previous output", "B) D input after clock edge", "C) Always 0", "D) Always 1"], answer: "B",
        explanation: "D flip-flop captures D input on clock edge."
    },
    {
        id: "dl026", topic: "Digital Logic", subtopic: "Sequential Circuits", difficulty: "Medium",
        question: "T flip-flop toggles when T is:",
        options: ["A) 0", "B) 1", "C) Don't care", "D) Always toggles"], answer: "B",
        explanation: "T=1 toggles output, T=0 holds previous state."
    },
    // COUNTERS/REGISTERS
    {
        id: "dl027", topic: "Digital Logic", subtopic: "Counters", difficulty: "Medium",
        question: "A 4-bit counter can count from:",
        options: ["A) 0 to 4", "B) 0 to 15", "C) 0 to 16", "D) 1 to 16"], answer: "B",
        explanation: "4 bits: 2^4 = 16 states, counting 0 to 15."
    },
    {
        id: "dl028", topic: "Digital Logic", subtopic: "Counters", difficulty: "Medium",
        question: "Ripple counter is also called:",
        options: ["A) Synchronous counter", "B) Asynchronous counter", "C) Up counter", "D) Down counter"], answer: "B",
        explanation: "Ripple counter is asynchronous - flip-flops trigger sequentially."
    },
    {
        id: "dl029", topic: "Digital Logic", subtopic: "Counters", difficulty: "Hard",
        question: "In synchronous counter, all flip-flops are clocked:",
        options: ["A) Sequentially", "B) Simultaneously", "C) Randomly", "D) Never"], answer: "B",
        explanation: "Synchronous counters have common clock for all flip-flops."
    },
    {
        id: "dl030", topic: "Digital Logic", subtopic: "Registers", difficulty: "Medium",
        question: "Shift register can be used for:",
        options: ["A) Only storage", "B) Serial to parallel conversion", "C) Only arithmetic", "D) Only counting"], answer: "B",
        explanation: "Shift registers convert between serial and parallel data."
    },
    // COMPUTER ARITHMETIC
    {
        id: "dl031", topic: "Digital Logic", subtopic: "Computer Arithmetic", difficulty: "Medium",
        question: "IEEE 754 single precision float has how many bits?",
        options: ["A) 16", "B) 32", "C) 64", "D) 128"], answer: "B",
        explanation: "Single precision: 32 bits (1 sign, 8 exponent, 23 mantissa)."
    },
    {
        id: "dl032", topic: "Digital Logic", subtopic: "Computer Arithmetic", difficulty: "Hard",
        question: "In IEEE 754 single precision, exponent bias is:",
        options: ["A) 64", "B) 127", "C) 128", "D) 255"], answer: "B",
        explanation: "Bias = 2^(k-1) - 1 where k=8 for single precision. Bias = 127."
    },
    {
        id: "dl033", topic: "Digital Logic", subtopic: "Computer Arithmetic", difficulty: "Medium",
        question: "Booth's algorithm is used for:",
        options: ["A) Addition", "B) Signed multiplication", "C) Division", "D) Subtraction"], answer: "B",
        explanation: "Booth's algorithm efficiently multiplies signed binary numbers."
    },
    {
        id: "dl034", topic: "Digital Logic", subtopic: "Computer Arithmetic", difficulty: "Medium",
        question: "Carry Look-ahead Adder is faster because:",
        options: ["A) Uses fewer gates", "B) Computes carries in parallel", "C) Uses ripple carry", "D) Is smaller"], answer: "B",
        explanation: "CLA computes all carries simultaneously instead of rippling."
    },
    // MISC
    {
        id: "dl035", topic: "Digital Logic", subtopic: "General", difficulty: "Easy",
        question: "Encoder converts:",
        options: ["A) Binary to decimal", "B) 2^n inputs to n-bit output", "C) n inputs to 2^n outputs", "D) Analog to digital"], answer: "B",
        explanation: "Encoder: 2^n input lines to n-bit binary output."
    },
    {
        id: "dl036", topic: "Digital Logic", subtopic: "General", difficulty: "Medium",
        question: "Priority encoder resolves:",
        options: ["A) Speed issues", "B) Multiple simultaneous inputs", "C) Power issues", "D) Size issues"], answer: "B",
        explanation: "Priority encoder outputs code for highest priority active input."
    },
    {
        id: "dl037", topic: "Digital Logic", subtopic: "General", difficulty: "Medium",
        question: "PLA (Programmable Logic Array) contains:",
        options: ["A) Only AND array", "B) Only OR array", "C) Programmable AND and OR arrays", "D) No arrays"], answer: "C",
        explanation: "PLA has programmable AND array and programmable OR array."
    },
    {
        id: "dl038", topic: "Digital Logic", subtopic: "General", difficulty: "Medium",
        question: "PAL differs from PLA in:",
        options: ["A) PAL has fixed OR array", "B) PAL has fixed AND array", "C) No difference", "D) PAL is faster"], answer: "A",
        explanation: "PAL: programmable AND, fixed OR. PLA: both programmable."
    },
    {
        id: "dl039", topic: "Digital Logic", subtopic: "General", difficulty: "Easy",
        question: "ROM is which type of memory?",
        options: ["A) Volatile", "B) Non-volatile", "C) Temporary", "D) Dynamic"], answer: "B",
        explanation: "ROM (Read Only Memory) is non-volatile - retains data without power."
    },
    {
        id: "dl040", topic: "Digital Logic", subtopic: "General", difficulty: "Medium",
        question: "RAM is which type of memory?",
        options: ["A) Non-volatile", "B) Volatile", "C) Permanent", "D) ROM"], answer: "B",
        explanation: "RAM is volatile - loses data when power is off."
    },
    // MORE DIGITAL LOGIC QUESTIONS
    {
        id: "dl041", topic: "Digital Logic", subtopic: "Number Systems", difficulty: "Medium",
        question: "Gray code for binary 1010 is:",
        options: ["A) 1111", "B) 1110", "C) 1100", "D) 1011"], answer: "A",
        explanation: "Gray = B XOR (B>>1). 1010 → 1111."
    },
    {
        id: "dl042", topic: "Digital Logic", subtopic: "Number Systems", difficulty: "Medium",
        question: "BCD for decimal 47 is:",
        options: ["A) 0100 0111", "B) 0100 1011", "C) 101111", "D) 47"], answer: "A",
        explanation: "BCD: each decimal digit encoded as 4 bits. 4=0100, 7=0111."
    },
    {
        id: "dl043", topic: "Digital Logic", subtopic: "Number Systems", difficulty: "Hard",
        question: "Excess-3 code for 5 is:",
        options: ["A) 0101", "B) 1000", "C) 0011", "D) 1011"], answer: "B",
        explanation: "Excess-3: add 3 to digit. 5+3=8 → 1000."
    },
    {
        id: "dl044", topic: "Digital Logic", subtopic: "Boolean Algebra", difficulty: "Medium",
        question: "Consensus theorem: AB + A'C + BC equals:",
        options: ["A) AB + A'C", "B) AB + BC", "C) A'C + BC", "D) ABC"], answer: "A",
        explanation: "Consensus: AB + A'C + BC = AB + A'C (BC is redundant)."
    },
    {
        id: "dl045", topic: "Digital Logic", subtopic: "Boolean Algebra", difficulty: "Medium",
        question: "Dual of A + B·C is:",
        options: ["A) A · (B + C)", "B) A + B + C", "C) A · B · C", "D) A' + B'·C'"], answer: "A",
        explanation: "Dual: interchange AND↔OR, 0↔1. A+BC → A·(B+C)."
    },
    {
        id: "dl046", topic: "Digital Logic", subtopic: "Logic Gates", difficulty: "Medium",
        question: "To implement NOT using only NAND:",
        options: ["A) Connect both inputs of NAND together", "B) Use two NANDs", "C) Impossible", "D) Use three NANDs"], answer: "A",
        explanation: "NOT: single NAND with inputs tied: A NAND A = A'."
    },
    {
        id: "dl047", topic: "Digital Logic", subtopic: "Logic Gates", difficulty: "Hard",
        question: "Minimum NANDs to implement XOR:",
        options: ["A) 2", "B) 3", "C) 4", "D) 5"], answer: "C",
        explanation: "XOR needs 4 NAND gates minimum."
    },
    {
        id: "dl048", topic: "Digital Logic", subtopic: "Combinational Circuits", difficulty: "Medium",
        question: "8-to-1 MUX needs how many select lines?",
        options: ["A) 2", "B) 3", "C) 4", "D) 8"], answer: "B",
        explanation: "2^n inputs need n select lines. 8=2^3, so 3 lines."
    },
    {
        id: "dl049", topic: "Digital Logic", subtopic: "Combinational Circuits", difficulty: "Hard",
        question: "To implement n-variable function using MUX:",
        options: ["A) 2^n-to-1 MUX", "B) 2^(n-1)-to-1 MUX with one variable as data", "C) n-to-1 MUX", "D) Impossible"], answer: "B",
        explanation: "Use 2^(n-1)-to-1 MUX with one input variable on data lines."
    },
    {
        id: "dl050", topic: "Digital Logic", subtopic: "Combinational Circuits", difficulty: "Medium",
        question: "4-bit ripple carry adder delay is:",
        options: ["A) 1 gate delay", "B) 4 gate delays", "C) 8 gate delays", "D) 16 gate delays"], answer: "C",
        explanation: "Each full adder has 2 gate delays for carry; 4×2=8."
    },
    {
        id: "dl051", topic: "Digital Logic", subtopic: "Combinational Circuits", difficulty: "Hard",
        question: "Lookahead carry for bit 2 (C2) depends on:",
        options: ["A) Only C1", "B) G1,G0,P1,P0,C0", "C) Only input bits", "D) Nothing"], answer: "B",
        explanation: "CLA: C2 = G1 + P1·G0 + P1·P0·C0."
    },
    {
        id: "dl052", topic: "Digital Logic", subtopic: "Minimization", difficulty: "Hard",
        question: "Essential prime implicant in K-map is:",
        options: ["A) Largest group", "B) Group covering a minterm not covered by other prime implicants", "C) Smallest group", "D) Any group"], answer: "B",
        explanation: "Essential PI: covers at least one minterm not covered by any other PI."
    },
    {
        id: "dl053", topic: "Digital Logic", subtopic: "Minimization", difficulty: "Hard",
        question: "Quine-McCluskey method is used for:",
        options: ["A) Small functions only", "B) Systematic minimization for many variables", "C) Sequential design", "D) Timing analysis"], answer: "B",
        explanation: "Quine-McCluskey: tabular method for minimizing functions with many variables."
    },
    {
        id: "dl054", topic: "Digital Logic", subtopic: "Sequential Circuits", difficulty: "Hard",
        question: "Master-slave flip-flop uses:",
        options: ["A) Single latch", "B) Two latches in series", "C) No latches", "D) Three latches"], answer: "B",
        explanation: "Master-slave: two latches, master captures on clock edge, slave on opposite."
    },
    {
        id: "dl055", topic: "Digital Logic", subtopic: "Sequential Circuits", difficulty: "Medium",
        question: "Edge-triggered flip-flop responds to:",
        options: ["A) Clock level", "B) Clock transition (edge)", "C) Both", "D) Neither"], answer: "B",
        explanation: "Edge-triggered: captures input only at rising or falling clock edge."
    },
    {
        id: "dl056", topic: "Digital Logic", subtopic: "Sequential Circuits", difficulty: "Hard",
        question: "Setup time is:",
        options: ["A) Time after clock edge data must be stable", "B) Time before clock edge data must be stable", "C) Clock period", "D) Propagation delay"], answer: "B",
        explanation: "Setup time: data must be stable before clock edge."
    },
    {
        id: "dl057", topic: "Digital Logic", subtopic: "Sequential Circuits", difficulty: "Hard",
        question: "Hold time is:",
        options: ["A) Time before clock edge", "B) Time after clock edge data must remain stable", "C) Total time", "D) Clock period"], answer: "B",
        explanation: "Hold time: data must remain stable after clock edge."
    },
    {
        id: "dl058", topic: "Digital Logic", subtopic: "Counters", difficulty: "Hard",
        question: "Mod-10 counter (decade counter) uses how many flip-flops?",
        options: ["A) 3", "B) 4", "C) 10", "D) 5"], answer: "B",
        explanation: "Need ⌈log₂10⌉ = 4 flip-flops, with reset logic at 10."
    },
    {
        id: "dl059", topic: "Digital Logic", subtopic: "Counters", difficulty: "Medium",
        question: "Ring counter with n flip-flops has how many states?",
        options: ["A) n", "B) 2^n", "C) 2^n - 1", "D) n-1"], answer: "A",
        explanation: "Ring counter: n states (one hot encoding)."
    },
    {
        id: "dl060", topic: "Digital Logic", subtopic: "Counters", difficulty: "Medium",
        question: "Johnson (twisted ring) counter with n flip-flops has how many states?",
        options: ["A) n", "B) 2n", "C) 2^n", "D) n²"], answer: "B",
        explanation: "Johnson counter: 2n states with n flip-flops."
    },
    {
        id: "dl061", topic: "Digital Logic", subtopic: "Registers", difficulty: "Medium",
        question: "SISO shift register stands for:",
        options: ["A) Serial In Serial Out", "B) Serial In Single Out", "C) Single In Serial Out", "D) Same In Same Out"], answer: "A",
        explanation: "SISO: Serial In Serial Out shift register."
    },
    {
        id: "dl062", topic: "Digital Logic", subtopic: "Registers", difficulty: "Medium",
        question: "Universal shift register can perform:",
        options: ["A) Only left shift", "B) Left shift, right shift, parallel load, hold", "C) Only parallel operations", "D) Only serial operations"], answer: "B",
        explanation: "Universal register: all modes - shift left/right, parallel load, hold."
    },
    {
        id: "dl063", topic: "Digital Logic", subtopic: "Computer Arithmetic", difficulty: "Hard",
        question: "IEEE 754 double precision has exponent bits:",
        options: ["A) 8", "B) 11", "C) 15", "D) 52"], answer: "B",
        explanation: "Double precision: 64 bits (1 sign, 11 exponent, 52 mantissa)."
    },
    {
        id: "dl064", topic: "Digital Logic", subtopic: "Computer Arithmetic", difficulty: "Hard",
        question: "Overflow in 2's complement addition occurs when:",
        options: ["A) Carry out = 1", "B) Sign bits of operands same but result sign differs", "C) Always", "D) Never"], answer: "B",
        explanation: "Overflow: adding same-sign numbers gives opposite-sign result."
    },
    {
        id: "dl065", topic: "Digital Logic", subtopic: "Computer Arithmetic", difficulty: "Medium",
        question: "For n-bit 2's complement subtraction A-B:",
        options: ["A) Add A and 2's complement of B", "B) Subtract directly", "C) Use only subtractor", "D) None"], answer: "A",
        explanation: "A - B = A + (-B) = A + 2's complement of B."
    },
    {
        id: "dl066", topic: "Digital Logic", subtopic: "General", difficulty: "Medium",
        question: "FPGA stands for:",
        options: ["A) Fixed Program Gate Array", "B) Field Programmable Gate Array", "C) Fast Processing Gate Array", "D) Flexible Program Gate Array"], answer: "B",
        explanation: "FPGA: Field Programmable Gate Array - reconfigurable hardware."
    },
    {
        id: "dl067", topic: "Digital Logic", subtopic: "General", difficulty: "Medium",
        question: "ASIC stands for:",
        options: ["A) Application Specific Integrated Circuit", "B) Advanced System IC", "C) Analog Signal IC", "D) All Signal IC"], answer: "A",
        explanation: "ASIC: custom IC designed for specific application."
    },
    {
        id: "dl068", topic: "Digital Logic", subtopic: "General", difficulty: "Medium",
        question: "SRAM vs DRAM: SRAM is:",
        options: ["A) Slower but denser", "B) Faster but less dense", "C) Same as DRAM", "D) Non-volatile"], answer: "B",
        explanation: "SRAM: faster, less dense, no refresh. DRAM: slower, denser, needs refresh."
    },
    {
        id: "dl069", topic: "Digital Logic", subtopic: "General", difficulty: "Medium",
        question: "Flash memory is:",
        options: ["A) Volatile", "B) Non-volatile EEPROM type", "C) RAM type", "D) ROM only"], answer: "B",
        explanation: "Flash: non-volatile, electrically erasable (block-erasable EEPROM)."
    },
    {
        id: "dl070", topic: "Digital Logic", subtopic: "Sequential Circuits", difficulty: "Hard",
        question: "Mealy machine output depends on:",
        options: ["A) State only", "B) State and current input", "C) Input only", "D) Nothing"], answer: "B",
        explanation: "Mealy: output = f(state, input). Moore: output = f(state only)."
    },
    {
        id: "dl071", topic: "Digital Logic", subtopic: "Sequential Circuits", difficulty: "Hard",
        question: "Moore machine output depends on:",
        options: ["A) Current input only", "B) State only", "C) State and input", "D) Previous output"], answer: "B",
        explanation: "Moore: output associated with state only, not current input."
    },
    {
        id: "dl072", topic: "Digital Logic", subtopic: "Sequential Circuits", difficulty: "Hard",
        question: "State minimization reduces:",
        options: ["A) Number of inputs", "B) Number of equivalent states", "C) Clock frequency", "D) Power only"], answer: "B",
        explanation: "State minimization finds and merges equivalent (indistinguishable) states."
    },
    {
        id: "dl073", topic: "Digital Logic", subtopic: "Minimization", difficulty: "Medium",
        question: "SOP (Sum of Products) is:",
        options: ["A) OR of AND terms", "B) AND of OR terms", "C) Only ANDs", "D) Only ORs"], answer: "A",
        explanation: "SOP: OR of product (AND) terms. POS: AND of sum (OR) terms."
    },
    {
        id: "dl074", topic: "Digital Logic", subtopic: "Minimization", difficulty: "Medium",
        question: "Minterm for ABC with A=1,B=0,C=1 is:",
        options: ["A) ABC", "B) AB'C", "C) A'BC", "D) A'B'C"], answer: "B",
        explanation: "Minterm: complement 0s, keep 1s. A=1,B=0,C=1 → AB'C."
    },
    {
        id: "dl075", topic: "Digital Logic", subtopic: "Minimization", difficulty: "Medium",
        question: "Maxterm for ABC with A=1,B=0,C=1 is:",
        options: ["A) A+B+C", "B) A'+B+C'", "C) A+B'+C", "D) A'+B'+C'"], answer: "B",
        explanation: "Maxterm: complement 1s, keep 0s as uncomplemented. 1,0,1 → A'+B+C'."
    },
    {
        id: "dl076", topic: "Digital Logic", subtopic: "Combinational Circuits", difficulty: "Medium",
        question: "Comparator compares:",
        options: ["A) Two binary numbers", "B) Voltages", "C) Frequencies", "D) Times"], answer: "A",
        explanation: "Digital comparator: compares two numbers, outputs <, =, or >."
    },
    {
        id: "dl077", topic: "Digital Logic", subtopic: "Combinational Circuits", difficulty: "Medium",
        question: "Parity checker detects:",
        options: ["A) All errors", "B) Odd number of bit errors", "C) Even number of errors", "D) No errors"], answer: "B",
        explanation: "Parity detects odd number of bit errors only."
    },
    {
        id: "dl078", topic: "Digital Logic", subtopic: "Combinational Circuits", difficulty: "Hard",
        question: "ALU performs:",
        options: ["A) Only arithmetic", "B) Only logic", "C) Arithmetic and logic operations", "D) Memory operations"], answer: "C",
        explanation: "ALU: Arithmetic Logic Unit - performs both arithmetic and logic ops."
    },
    {
        id: "dl079", topic: "Digital Logic", subtopic: "Computer Arithmetic", difficulty: "Hard",
        question: "Restoring division algorithm:",
        options: ["A) Never restores remainder", "B) Restores remainder after unsuccessful subtraction", "C) Only adds", "D) Only shifts"], answer: "B",
        explanation: "Restoring: if subtraction makes remainder negative, restore it."
    },
    {
        id: "dl080", topic: "Digital Logic", subtopic: "Computer Arithmetic", difficulty: "Hard",
        question: "Non-restoring division:",
        options: ["A) Restores every step", "B) Adds or subtracts based on remainder sign", "C) Only subtracts", "D) No operations"], answer: "B",
        explanation: "Non-restoring: if remainder negative, add divisor; if positive, subtract."
    },
    {
        id: "dl081", topic: "Digital Logic", subtopic: "General", difficulty: "Easy",
        question: "TTL stands for:",
        options: ["A) Transistor Transistor Logic", "B) Time To Live", "C) Two Terminal Logic", "D) Transfer Toggle Logic"], answer: "A",
        explanation: "TTL: Transistor-Transistor Logic - digital IC family."
    },
    {
        id: "dl082", topic: "Digital Logic", subtopic: "General", difficulty: "Easy",
        question: "CMOS stands for:",
        options: ["A) Complementary Metal Oxide Semiconductor", "B) Common Mode Operating System", "C) Current Mode OS", "D) Combined MOS"], answer: "A",
        explanation: "CMOS: uses complementary NMOS and PMOS transistors."
    },
    {
        id: "dl083", topic: "Digital Logic", subtopic: "General", difficulty: "Medium",
        question: "CMOS advantages over TTL include:",
        options: ["A) Lower power consumption", "B) Higher power", "C) Slower speed", "D) Higher noise"], answer: "A",
        explanation: "CMOS: very low static power, high noise immunity, wide voltage range."
    },
    {
        id: "dl084", topic: "Digital Logic", subtopic: "Sequential Circuits", difficulty: "Hard",
        question: "Hazard in combinational circuits is:",
        options: ["A) Normal behavior", "B) Unwanted momentary output glitch", "C) Permanent error", "D) Clock issue"], answer: "B",
        explanation: "Hazard: transient wrong output due to different path delays."
    },
    {
        id: "dl085", topic: "Digital Logic", subtopic: "Sequential Circuits", difficulty: "Hard",
        question: "Static hazard can be eliminated by:",
        options: ["A) Adding redundant terms", "B) Removing gates", "C) Increasing clock", "D) Nothing"], answer: "A",
        explanation: "Add consensus term to cover adjacent 1s in K-map."
    },
    {
        id: "dl086", topic: "Digital Logic", subtopic: "Counters", difficulty: "Hard",
        question: "Presettable counter can be:",
        options: ["A) Only count up", "B) Loaded with initial value", "C) Only reset to 0", "D) Not modified"], answer: "B",
        explanation: "Presettable counter: parallel load capability for any starting value."
    },
    {
        id: "dl087", topic: "Digital Logic", subtopic: "General", difficulty: "Medium",
        question: "Three-state (tri-state) buffer has:",
        options: ["A) Three outputs", "B) Output can be 0, 1, or high-impedance", "C) Three inputs", "D) No enable"], answer: "B",
        explanation: "Tri-state: 0, 1, or Hi-Z (disconnected) when disabled."
    },
    {
        id: "dl088", topic: "Digital Logic", subtopic: "General", difficulty: "Medium",
        question: "Open collector output requires:",
        options: ["A) No external components", "B) External pull-up resistor", "C) Ground only", "D) Nothing"], answer: "B",
        explanation: "Open collector: needs pull-up resistor to VCC for logic high."
    },
    {
        id: "dl089", topic: "Digital Logic", subtopic: "Computer Arithmetic", difficulty: "Medium",
        question: "Sign extension extends:",
        options: ["A) Magnitude bits", "B) Sign bit to fill larger word", "C) Nothing", "D) Only zeros"], answer: "B",
        explanation: "Sign extension: copy sign bit leftward to preserve value in larger format."
    },
    {
        id: "dl090", topic: "Digital Logic", subtopic: "General", difficulty: "Medium",
        question: "Fan-out is:",
        options: ["A) Number of inputs a gate has", "B) Number of gate inputs one output can drive", "C) Power consumption", "D) Speed"], answer: "B",
        explanation: "Fan-out: maximum number of inputs that an output can drive."
    }
];
export default digitalLogicQuestions;
