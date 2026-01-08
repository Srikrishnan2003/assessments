// Computer Organization & Architecture Questions for BARC CSE Exam
export const coaQuestions = [
    // CPU BASICS
    {
        id: "coa001", topic: "COA", subtopic: "CPU Basics", difficulty: "Easy",
        question: "CPU consists of:",
        options: ["A) ALU only", "B) ALU, Control Unit, Registers", "C) Memory only", "D) I/O only"], answer: "B",
        explanation: "CPU = ALU (Arithmetic Logic Unit) + Control Unit + Registers."
    },
    {
        id: "coa002", topic: "COA", subtopic: "CPU Basics", difficulty: "Easy",
        question: "Program Counter (PC) stores:",
        options: ["A) Current instruction", "B) Address of next instruction", "C) Data", "D) Result"], answer: "B",
        explanation: "PC holds the memory address of the next instruction to fetch."
    },
    {
        id: "coa003", topic: "COA", subtopic: "CPU Basics", difficulty: "Easy",
        question: "MAR stands for:",
        options: ["A) Memory Arithmetic Register", "B) Memory Address Register", "C) Main Accumulator Register", "D) Multiple Address Register"], answer: "B",
        explanation: "MAR holds address for memory read/write operations."
    },
    {
        id: "coa004", topic: "COA", subtopic: "CPU Basics", difficulty: "Easy",
        question: "MDR/MBR holds:",
        options: ["A) Memory address", "B) Data read from or to be written to memory", "C) Instructions only", "D) Nothing"], answer: "B",
        explanation: "Memory Data Register holds data being transferred to/from memory."
    },
    // INSTRUCTION CYCLE
    {
        id: "coa005", topic: "COA", subtopic: "Instruction Cycle", difficulty: "Easy",
        question: "Instruction cycle consists of:",
        options: ["A) Fetch only", "B) Fetch, Decode, Execute", "C) Execute only", "D) Decode only"], answer: "B",
        explanation: "Basic cycle: Fetch instruction, Decode it, Execute it."
    },
    {
        id: "coa006", topic: "COA", subtopic: "Instruction Cycle", difficulty: "Medium",
        question: "In fetch phase, instruction is loaded from:",
        options: ["A) Registers", "B) Memory (using PC address)", "C) Cache only", "D) Disk"], answer: "B",
        explanation: "Fetch reads instruction from memory at address in PC."
    },
    // ADDRESSING MODES
    {
        id: "coa007", topic: "COA", subtopic: "Addressing Modes", difficulty: "Easy",
        question: "In immediate addressing, operand is in:",
        options: ["A) Memory", "B) Instruction itself", "C) Register", "D) Stack"], answer: "B",
        explanation: "Immediate: operand value is part of the instruction."
    },
    {
        id: "coa008", topic: "COA", subtopic: "Addressing Modes", difficulty: "Easy",
        question: "In register addressing, operand is in:",
        options: ["A) Memory", "B) Instruction", "C) Register", "D) Stack"], answer: "C",
        explanation: "Register addressing specifies a register containing the operand."
    },
    {
        id: "coa009", topic: "COA", subtopic: "Addressing Modes", difficulty: "Medium",
        question: "In indirect addressing, instruction contains:",
        options: ["A) Operand value", "B) Address of address of operand", "C) Register number", "D) Nothing"], answer: "B",
        explanation: "Indirect: instruction has address that points to actual operand address."
    },
    {
        id: "coa010", topic: "COA", subtopic: "Addressing Modes", difficulty: "Medium",
        question: "Indexed addressing adds index register to:",
        options: ["A) Operand", "B) Base address in instruction", "C) PC", "D) Stack pointer"], answer: "B",
        explanation: "Effective address = base address + index register value."
    },
    // PIPELINING
    {
        id: "coa011", topic: "COA", subtopic: "Pipelining", difficulty: "Medium",
        question: "Pipelining improves:",
        options: ["A) Individual instruction speed", "B) Throughput (instructions per time)", "C) Memory size", "D) Register count"], answer: "B",
        explanation: "Pipelining increases throughput by overlapping instruction execution."
    },
    {
        id: "coa012", topic: "COA", subtopic: "Pipelining", difficulty: "Medium",
        question: "Ideal speedup of k-stage pipeline is:",
        options: ["A) k", "B) k/2", "C) 2k", "D) k²"], answer: "A",
        explanation: "Ideal speedup equals number of pipeline stages (k)."
    },
    {
        id: "coa013", topic: "COA", subtopic: "Pipelining", difficulty: "Hard",
        question: "Data hazard occurs when:",
        options: ["A) No data available", "B) Instruction needs data from previous instruction not yet ready", "C) Pipeline is empty", "D) Memory is full"], answer: "B",
        explanation: "Data hazard: dependency on data being computed by earlier instruction."
    },
    {
        id: "coa014", topic: "COA", subtopic: "Pipelining", difficulty: "Hard",
        question: "Control hazard is caused by:",
        options: ["A) Data dependency", "B) Branch instructions", "C) Memory access", "D) Arithmetic"], answer: "B",
        explanation: "Control hazard: branches change PC, invalidating fetched instructions."
    },
    {
        id: "coa015", topic: "COA", subtopic: "Pipelining", difficulty: "Hard",
        question: "Data forwarding solves:",
        options: ["A) Control hazards", "B) Data hazards by bypassing registers", "C) Structural hazards", "D) All hazards"], answer: "B",
        explanation: "Forwarding passes result directly to next instruction without waiting."
    },
    {
        id: "coa016", topic: "COA", subtopic: "Pipelining", difficulty: "Medium",
        question: "Pipeline stall is also called:",
        options: ["A) Speed up", "B) Bubble", "C) Forward", "D) Branch"], answer: "B",
        explanation: "Stall/bubble: NOP inserted to resolve hazard."
    },
    // MEMORY HIERARCHY
    {
        id: "coa017", topic: "COA", subtopic: "Memory Hierarchy", difficulty: "Easy",
        question: "Fastest memory is:",
        options: ["A) RAM", "B) Registers", "C) Cache", "D) Disk"], answer: "B",
        explanation: "Registers are fastest, then L1 cache, L2 cache, RAM, disk."
    },
    {
        id: "coa018", topic: "COA", subtopic: "Memory Hierarchy", difficulty: "Medium",
        question: "Cache memory exploits:",
        options: ["A) Only temporal locality", "B) Only spatial locality", "C) Temporal and spatial locality", "D) No locality"], answer: "C",
        explanation: "Cache exploits both: recently used (temporal) and nearby (spatial) data."
    },
    {
        id: "coa019", topic: "COA", subtopic: "Memory Hierarchy", difficulty: "Medium",
        question: "Cache hit means:",
        options: ["A) Data not in cache", "B) Data found in cache", "C) Cache is full", "D) Cache error"], answer: "B",
        explanation: "Hit: requested data is present in cache."
    },
    {
        id: "coa020", topic: "COA", subtopic: "Memory Hierarchy", difficulty: "Medium",
        question: "Cache miss penalty is:",
        options: ["A) Time saved on hit", "B) Time to fetch from lower memory level on miss", "C) Zero", "D) Always same"], answer: "B",
        explanation: "Miss penalty: extra time to get data from main memory."
    },
    {
        id: "coa021", topic: "COA", subtopic: "Memory Hierarchy", difficulty: "Hard",
        question: "In direct-mapped cache, each memory block maps to:",
        options: ["A) Any cache line", "B) Exactly one cache line", "C) Multiple cache lines", "D) No cache line"], answer: "B",
        explanation: "Direct-mapped: each block has exactly one possible cache location."
    },
    {
        id: "coa022", topic: "COA", subtopic: "Memory Hierarchy", difficulty: "Hard",
        question: "In fully associative cache, a block can go to:",
        options: ["A) Only one line", "B) Any cache line", "C) Two lines", "D) No line"], answer: "B",
        explanation: "Fully associative: block can be placed in any cache line."
    },
    {
        id: "coa023", topic: "COA", subtopic: "Memory Hierarchy", difficulty: "Hard",
        question: "Set-associative cache is:",
        options: ["A) Only direct mapped", "B) Only fully associative", "C) Compromise between direct and fully associative", "D) Not used"], answer: "C",
        explanation: "N-way set associative: block maps to a set of N possible lines."
    },
    // I/O
    {
        id: "coa024", topic: "COA", subtopic: "I/O", difficulty: "Medium",
        question: "Programmed I/O requires:",
        options: ["A) No CPU involvement", "B) CPU to continuously check device status", "C) DMA", "D) Interrupts only"], answer: "B",
        explanation: "Programmed I/O: CPU polls device status, wasting CPU cycles."
    },
    {
        id: "coa025", topic: "COA", subtopic: "I/O", difficulty: "Medium",
        question: "Interrupt-driven I/O:",
        options: ["A) CPU continuously polls", "B) Device interrupts CPU when ready", "C) Uses DMA", "D) Is slowest"], answer: "B",
        explanation: "Device signals CPU via interrupt when data transfer possible."
    },
    {
        id: "coa026", topic: "COA", subtopic: "I/O", difficulty: "Medium",
        question: "DMA allows:",
        options: ["A) CPU to do all transfers", "B) Direct memory-device transfer without CPU", "C) Slower transfers", "D) No transfers"], answer: "B",
        explanation: "DMA controller transfers data between memory and I/O directly."
    },
    // INSTRUCTION SET
    {
        id: "coa027", topic: "COA", subtopic: "ISA", difficulty: "Easy",
        question: "RISC stands for:",
        options: ["A) Random Instruction Set Computer", "B) Reduced Instruction Set Computer", "C) Regular Instruction Set Computer", "D) Rapid Instruction Set Computer"], answer: "B",
        explanation: "RISC: simpler instructions, more registers, pipelining friendly."
    },
    {
        id: "coa028", topic: "COA", subtopic: "ISA", difficulty: "Easy",
        question: "CISC stands for:",
        options: ["A) Complex Instruction Set Computer", "B) Complete Instruction Set Computer", "C) Central Instruction Set Computer", "D) Compact Instruction Set Computer"], answer: "A",
        explanation: "CISC: complex instructions, variable length, fewer registers."
    },
    {
        id: "coa029", topic: "COA", subtopic: "ISA", difficulty: "Medium",
        question: "RISC typically has:",
        options: ["A) Few registers", "B) Many registers, load-store architecture", "C) Complex instructions", "D) Variable instruction length"], answer: "B",
        explanation: "RISC: many registers, only load/store access memory, fixed instruction size."
    },
    {
        id: "coa030", topic: "COA", subtopic: "ISA", difficulty: "Medium",
        question: "Von Neumann architecture has:",
        options: ["A) Separate instruction and data memory", "B) Single memory for instructions and data", "C) No memory", "D) Only registers"], answer: "B",
        explanation: "Von Neumann: unified memory for both instructions and data."
    },
    {
        id: "coa031", topic: "COA", subtopic: "ISA", difficulty: "Medium",
        question: "Harvard architecture has:",
        options: ["A) Single memory", "B) Separate instruction and data memories", "C) No cache", "D) Only ROM"], answer: "B",
        explanation: "Harvard: separate memories allow simultaneous instruction and data access."
    },
    // MISC
    {
        id: "coa032", topic: "COA", subtopic: "General", difficulty: "Medium",
        question: "MIPS stands for:",
        options: ["A) Mega Instructions Per Second", "B) Million Instructions Per Second", "C) Memory Instructions Per Second", "D) Multiple Instructions Per Second"], answer: "B",
        explanation: "MIPS: performance measure - Million Instructions Per Second."
    },
    {
        id: "coa033", topic: "COA", subtopic: "General", difficulty: "Hard",
        question: "CPI (Cycles Per Instruction) measures:",
        options: ["A) Clock speed", "B) Average cycles needed per instruction", "C) Memory speed", "D) I/O speed"], answer: "B",
        explanation: "CPI: average clock cycles per instruction execution."
    },
    {
        id: "coa034", topic: "COA", subtopic: "General", difficulty: "Hard",
        question: "CPU time = IC × CPI × CT, where CT is:",
        options: ["A) Core time", "B) Clock cycle time", "C) Cache time", "D) Compute time"], answer: "B",
        explanation: "CT = clock cycle time = 1/clock frequency."
    },
    {
        id: "coa035", topic: "COA", subtopic: "General", difficulty: "Medium",
        question: "Superscalar processors can issue:",
        options: ["A) One instruction per cycle", "B) Multiple instructions per cycle", "C) No instructions", "D) Only memory operations"], answer: "B",
        explanation: "Superscalar: multiple execution units, multiple instructions per cycle."
    },
    // MORE COA QUESTIONS
    {
        id: "coa036", topic: "COA", subtopic: "CPU Basics", difficulty: "Medium",
        question: "IR (Instruction Register) holds:",
        options: ["A) Next instruction address", "B) Current instruction being executed", "C) Data operand", "D) Result"], answer: "B",
        explanation: "IR holds the instruction currently being decoded/executed."
    },
    {
        id: "coa037", topic: "COA", subtopic: "CPU Basics", difficulty: "Medium",
        question: "Accumulator is:",
        options: ["A) Memory", "B) Special register for arithmetic results", "C) Cache", "D) I/O device"], answer: "B",
        explanation: "Accumulator: default register for ALU operations in many architectures."
    },
    {
        id: "coa038", topic: "COA", subtopic: "CPU Basics", difficulty: "Easy",
        question: "Stack Pointer (SP) points to:",
        options: ["A) Next instruction", "B) Top of stack in memory", "C) Data segment", "D) Code segment"], answer: "B",
        explanation: "SP holds address of current top of stack."
    },
    {
        id: "coa039", topic: "COA", subtopic: "Addressing Modes", difficulty: "Medium",
        question: "Base-register addressing adds base register to:",
        options: ["A) PC", "B) Displacement in instruction", "C) Stack pointer", "D) Nothing"], answer: "B",
        explanation: "Effective address = base register + displacement."
    },
    {
        id: "coa040", topic: "COA", subtopic: "Addressing Modes", difficulty: "Medium",
        question: "PC-relative addressing is used for:",
        options: ["A) Data access", "B) Branch instructions (relative jumps)", "C) I/O", "D) Stack operations"], answer: "B",
        explanation: "PC-relative: branch target = PC + offset, for position-independent code."
    },
    {
        id: "coa041", topic: "COA", subtopic: "Addressing Modes", difficulty: "Hard",
        question: "Auto-increment addressing:",
        options: ["A) Decrements register", "B) Uses register as address and increments it after", "C) Uses fixed address", "D) Nothing"], answer: "B",
        explanation: "Auto-increment: use register as address, then increment (useful for array traversal)."
    },
    {
        id: "coa042", topic: "COA", subtopic: "Pipelining", difficulty: "Hard",
        question: "Structural hazard occurs when:",
        options: ["A) Data dependency", "B) Hardware resource conflict", "C) Branch taken", "D) No instructions"], answer: "B",
        explanation: "Structural hazard: two instructions need same hardware simultaneously."
    },
    {
        id: "coa043", topic: "COA", subtopic: "Pipelining", difficulty: "Hard",
        question: "Branch prediction helps with:",
        options: ["A) Data hazards", "B) Control hazards by guessing branch outcome", "C) Structural hazards", "D) Memory access"], answer: "B",
        explanation: "Predict branch direction to fetch correct instructions speculatively."
    },
    {
        id: "coa044", topic: "COA", subtopic: "Pipelining", difficulty: "Hard",
        question: "Static branch prediction uses:",
        options: ["A) Runtime history", "B) Fixed rules (e.g., always not-taken)", "C) Random guess", "D) User input"], answer: "B",
        explanation: "Static: predict based on instruction type, direction (backward taken, forward not)."
    },
    {
        id: "coa045", topic: "COA", subtopic: "Pipelining", difficulty: "Hard",
        question: "Dynamic branch prediction uses:",
        options: ["A) Fixed rules", "B) Runtime history of branch outcomes", "C) Compiler hints", "D) Nothing"], answer: "B",
        explanation: "Dynamic: use branch history table to predict based on past behavior."
    },
    {
        id: "coa046", topic: "COA", subtopic: "Pipelining", difficulty: "Hard",
        question: "2-bit predictor advantage over 1-bit:",
        options: ["A) Faster", "B) Tolerates one misprediction without changing prediction", "C) Smaller", "D) No advantage"], answer: "B",
        explanation: "2-bit: requires two wrong predictions to change prediction direction."
    },
    {
        id: "coa047", topic: "COA", subtopic: "Memory Hierarchy", difficulty: "Hard",
        question: "Write-through cache policy:",
        options: ["A) Writes only to cache", "B) Writes to both cache and main memory", "C) Never writes", "D) Writes to disk"], answer: "B",
        explanation: "Write-through: every write updates cache and memory (simple, consistent)."
    },
    {
        id: "coa048", topic: "COA", subtopic: "Memory Hierarchy", difficulty: "Hard",
        question: "Write-back cache policy:",
        options: ["A) Writes immediately to memory", "B) Writes only to cache, memory updated on replacement", "C) Never writes cache", "D) Writes to disk"], answer: "B",
        explanation: "Write-back: write to cache, mark dirty, write to memory only on eviction."
    },
    {
        id: "coa049", topic: "COA", subtopic: "Memory Hierarchy", difficulty: "Medium",
        question: "Cache replacement policy LRU stands for:",
        options: ["A) Least Recently Used", "B) Last Random Update", "C) Low Rate Usage", "D) Least Required Update"], answer: "A",
        explanation: "LRU: replace the block used longest ago."
    },
    {
        id: "coa050", topic: "COA", subtopic: "Memory Hierarchy", difficulty: "Medium",
        question: "FIFO cache replacement:",
        options: ["A) Replaces most recently used", "B) Replaces oldest block in cache", "C) Random replacement", "D) Never replaces"], answer: "B",
        explanation: "FIFO: first in first out - replace block that entered cache earliest."
    },
    {
        id: "coa051", topic: "COA", subtopic: "Memory Hierarchy", difficulty: "Hard",
        question: "Effective memory access time (EMAT) with hit rate h and miss penalty p:",
        options: ["A) h + p", "B) Cache_time + (1-h) × p", "C) h × p", "D) p only"], answer: "B",
        explanation: "EMAT = hit_time + miss_rate × miss_penalty."
    },
    {
        id: "coa052", topic: "COA", subtopic: "Memory Hierarchy", difficulty: "Medium",
        question: "Virtual memory allows:",
        options: ["A) Only physical addresses", "B) Programs larger than physical memory", "C) No memory protection", "D) Faster access"], answer: "B",
        explanation: "Virtual memory: use disk as extension of RAM; programs can exceed RAM size."
    },
    {
        id: "coa053", topic: "COA", subtopic: "Memory Hierarchy", difficulty: "Hard",
        question: "TLB (Translation Lookaside Buffer) caches:",
        options: ["A) Data", "B) Page table entries", "C) Instructions", "D) Stack"], answer: "B",
        explanation: "TLB: fast cache for page table entries (virtual→physical translations)."
    },
    {
        id: "coa054", topic: "COA", subtopic: "Memory Hierarchy", difficulty: "Hard",
        question: "Page fault occurs when:",
        options: ["A) Page in memory", "B) Page not in physical memory", "C) TLB hit", "D) Cache hit"], answer: "B",
        explanation: "Page fault: required page not in RAM, must load from disk."
    },
    {
        id: "coa055", topic: "COA", subtopic: "I/O", difficulty: "Medium",
        question: "Memory-mapped I/O uses:",
        options: ["A) Special I/O instructions", "B) Same address space as memory", "C) No addresses", "D) Different instructions"], answer: "B",
        explanation: "Memory-mapped: I/O devices accessed via memory addresses."
    },
    {
        id: "coa056", topic: "COA", subtopic: "I/O", difficulty: "Medium",
        question: "Isolated I/O (port-mapped) uses:",
        options: ["A) Memory addresses", "B) Separate I/O address space and instructions", "C) No addresses", "D) Same as memory-mapped"], answer: "B",
        explanation: "Isolated I/O: separate address space, IN/OUT instructions."
    },
    {
        id: "coa057", topic: "COA", subtopic: "I/O", difficulty: "Hard",
        question: "DMA cycle stealing:",
        options: ["A) CPU loses all time", "B) DMA uses occasional bus cycles", "C) No CPU impact", "D) DMA never runs"], answer: "B",
        explanation: "Cycle stealing: DMA takes bus occasionally, slight CPU slowdown."
    },
    {
        id: "coa058", topic: "COA", subtopic: "I/O", difficulty: "Hard",
        question: "Burst mode DMA:",
        options: ["A) One word at a time", "B) DMA takes bus for entire block transfer", "C) Never uses bus", "D) Slowest mode"], answer: "B",
        explanation: "Burst: DMA keeps bus until block transfer complete (fastest but blocks CPU)."
    },
    {
        id: "coa059", topic: "COA", subtopic: "ISA", difficulty: "Medium",
        question: "Zero-address instructions use:",
        options: ["A) Registers", "B) Stack (operands implicit on stack)", "C) Memory only", "D) No operands"], answer: "B",
        explanation: "Stack machine: operands popped from stack, result pushed."
    },
    {
        id: "coa060", topic: "COA", subtopic: "ISA", difficulty: "Medium",
        question: "Three-address instruction format:",
        options: ["A) Only result specified", "B) Two sources and one destination specified", "C) No operands", "D) One operand"], answer: "B",
        explanation: "Three-address: two source operands + one destination (e.g., ADD R1, R2, R3)."
    },
    {
        id: "coa061", topic: "COA", subtopic: "ISA", difficulty: "Medium",
        question: "Microprogrammed control uses:",
        options: ["A) Hardwired logic", "B) Microinstructions stored in control memory", "C) No control unit", "D) Only gates"], answer: "B",
        explanation: "Microprogrammed: control signals stored in ROM, flexible but slower."
    },
    {
        id: "coa062", topic: "COA", subtopic: "ISA", difficulty: "Medium",
        question: "Hardwired control uses:",
        options: ["A) Microinstructions", "B) Combinational logic circuits", "C) Software", "D) ROM only"], answer: "B",
        explanation: "Hardwired: control logic implemented with gates, faster but inflexible."
    },
    {
        id: "coa063", topic: "COA", subtopic: "General", difficulty: "Hard",
        question: "Amdahl's Law states speedup is limited by:",
        options: ["A) Parallel portion only", "B) Sequential (non-parallelizable) portion", "C) Nothing", "D) Memory"], answer: "B",
        explanation: "Amdahl: speedup limited by fraction that cannot be parallelized."
    },
    {
        id: "coa064", topic: "COA", subtopic: "General", difficulty: "Medium",
        question: "Flynn's classification includes:",
        options: ["A) Only SISD", "B) SISD, SIMD, MISD, MIMD", "C) Only MIMD", "D) No classification"], answer: "B",
        explanation: "Flynn: Single/Multiple Instruction × Single/Multiple Data streams."
    },
    {
        id: "coa065", topic: "COA", subtopic: "General", difficulty: "Medium",
        question: "SIMD architecture:",
        options: ["A) Single instruction, single data", "B) Single instruction operates on multiple data", "C) Multiple instructions, single data", "D) Multiple instructions, multiple data"], answer: "B",
        explanation: "SIMD: one instruction, parallel data (e.g., vector processors, GPU)."
    },
    {
        id: "coa066", topic: "COA", subtopic: "General", difficulty: "Medium",
        question: "MIMD architecture:",
        options: ["A) Single processor", "B) Multiple processors, each with own instruction stream", "C) No parallelism", "D) Vector processing"], answer: "B",
        explanation: "MIMD: multiple processors executing different instructions on different data."
    },
    {
        id: "coa067", topic: "COA", subtopic: "Pipelining", difficulty: "Hard",
        question: "Out-of-order execution allows:",
        options: ["A) Strict instruction order", "B) Instructions to execute when operands ready, regardless of issue order", "C) No execution", "D) Serial only"], answer: "B",
        explanation: "OOO: execute independent instructions early, commit in order."
    },
    {
        id: "coa068", topic: "COA", subtopic: "Pipelining", difficulty: "Hard",
        question: "Speculation in processors:",
        options: ["A) Never guesses", "B) Executes predicted path before knowing if correct", "C) Waits for all data", "D) Avoids branches"], answer: "B",
        explanation: "Speculative execution: execute predicted branch path, rollback if wrong."
    },
    {
        id: "coa069", topic: "COA", subtopic: "Pipelining", difficulty: "Hard",
        question: "Register renaming eliminates:",
        options: ["A) True dependencies", "B) WAR and WAW (false) dependencies", "C) Control hazards", "D) Structural hazards"], answer: "B",
        explanation: "Renaming: separate logical from physical registers, removing false dependencies."
    },
    {
        id: "coa070", topic: "COA", subtopic: "Memory Hierarchy", difficulty: "Hard",
        question: "Inclusion property in cache hierarchy means:",
        options: ["A) Levels are exclusive", "B) Higher level contains subset of lower level data", "C) No relation", "D) Equal contents"], answer: "B",
        explanation: "Inclusion: L1 data is always subset of L2, simplifies coherence."
    },
    {
        id: "coa071", topic: "COA", subtopic: "Memory Hierarchy", difficulty: "Hard",
        question: "Exclusive cache policy means:",
        options: ["A) Data in all levels", "B) Data in only one cache level at a time", "C) No caching", "D) Always included"], answer: "B",
        explanation: "Exclusive: block in L1 or L2, not both (maximizes effective capacity)."
    },
    {
        id: "coa072", topic: "COA", subtopic: "Memory Hierarchy", difficulty: "Hard",
        question: "Cache coherence problem arises with:",
        options: ["A) Single processor", "B) Multiple processors/cores sharing memory", "C) No cache", "D) Only disk"], answer: "B",
        explanation: "Coherence: ensure consistent view of memory across multiple caches."
    },
    {
        id: "coa073", topic: "COA", subtopic: "Memory Hierarchy", difficulty: "Hard",
        question: "MESI protocol states are:",
        options: ["A) Only valid/invalid", "B) Modified, Exclusive, Shared, Invalid", "C) Only modified", "D) No states"], answer: "B",
        explanation: "MESI: common cache coherence protocol with 4 states."
    },
    {
        id: "coa074", topic: "COA", subtopic: "General", difficulty: "Medium",
        question: "Big-endian stores:",
        options: ["A) LSB at lowest address", "B) MSB at lowest address", "C) Random order", "D) No order"], answer: "B",
        explanation: "Big-endian: most significant byte first (lowest address)."
    },
    {
        id: "coa075", topic: "COA", subtopic: "General", difficulty: "Medium",
        question: "Little-endian stores:",
        options: ["A) MSB at lowest address", "B) LSB at lowest address", "C) No order", "D) Alternating"], answer: "B",
        explanation: "Little-endian: least significant byte first (Intel x86)."
    },
    {
        id: "coa076", topic: "COA", subtopic: "I/O", difficulty: "Medium",
        question: "Interrupt priority determines:",
        options: ["A) Speed of I/O", "B) Which interrupt handled first when multiple occur", "C) Memory allocation", "D) CPU speed"], answer: "B",
        explanation: "Priority: higher priority interrupts serviced before lower priority."
    },
    {
        id: "coa077", topic: "COA", subtopic: "I/O", difficulty: "Medium",
        question: "Vectored interrupt provides:",
        options: ["A) Fixed handler address", "B) Device-specific handler address in interrupt vector", "C) No handler", "D) Random address"], answer: "B",
        explanation: "Vectored: device supplies address/index of its handler (faster than polling devices)."
    },
    {
        id: "coa078", topic: "COA", subtopic: "ISA", difficulty: "Hard",
        question: "VLIW (Very Long Instruction Word) relies on:",
        options: ["A) Hardware scheduling", "B) Compiler to find parallelism", "C) Runtime scheduling", "D) No parallelism"], answer: "B",
        explanation: "VLIW: compiler bundles independent operations into long instruction."
    },
    {
        id: "coa079", topic: "COA", subtopic: "ISA", difficulty: "Hard",
        question: "EPIC (Explicitly Parallel Instruction Computing) is used in:",
        options: ["A) x86", "B) Intel Itanium (IA-64)", "C) ARM", "D) MIPS"], answer: "B",
        explanation: "EPIC: Intel Itanium - compiler expresses parallelism explicitly."
    },
    {
        id: "coa080", topic: "COA", subtopic: "General", difficulty: "Hard",
        question: "Moore's Law states transistor count doubles approximately every:",
        options: ["A) 6 months", "B) 18-24 months", "C) 5 years", "D) 10 years"], answer: "B",
        explanation: "Moore's Law: transistor density doubles roughly every 18-24 months."
    },
    {
        id: "coa081", topic: "COA", subtopic: "Pipelining", difficulty: "Hard",
        question: "Tomasulo algorithm uses:",
        options: ["A) Only scoreboard", "B) Reservation stations and common data bus", "C) No hardware", "D) Only registers"], answer: "B",
        explanation: "Tomasulo: reservation stations hold operands, CDB broadcasts results."
    },
    {
        id: "coa082", topic: "COA", subtopic: "Pipelining", difficulty: "Hard",
        question: "Scoreboarding tracks:",
        options: ["A) Nothing", "B) Instruction status and register availability", "C) Only memory", "D) I/O only"], answer: "B",
        explanation: "Scoreboard: centralized tracking of instruction execution and dependencies."
    },
    {
        id: "coa083", topic: "COA", subtopic: "Memory Hierarchy", difficulty: "Medium",
        question: "Write buffer holds:",
        options: ["A) Read data", "B) Data waiting to be written to memory", "C) Instructions", "D) Nothing"], answer: "B",
        explanation: "Write buffer: queue writes to memory, CPU continues without waiting."
    },
    {
        id: "coa084", topic: "COA", subtopic: "Memory Hierarchy", difficulty: "Hard",
        question: "Non-blocking cache allows:",
        options: ["A) Stall on every miss", "B) Hits during outstanding miss", "C) No misses", "D) Only sequential access"], answer: "B",
        explanation: "Non-blocking: cache services hits while miss being handled (hit-under-miss)."
    },
    {
        id: "coa085", topic: "COA", subtopic: "General", difficulty: "Medium",
        question: "Benchmark programs are used to:",
        options: ["A) Debug code", "B) Measure and compare processor performance", "C) Write drivers", "D) Design chips"], answer: "B",
        explanation: "Benchmarks: standardized workloads for fair performance comparison."
    },
    {
        id: "coa086", topic: "COA", subtopic: "General", difficulty: "Medium",
        question: "SPEC benchmarks measure:",
        options: ["A) Only memory", "B) CPU integer and floating-point performance", "C) Only I/O", "D) Only graphics"], answer: "B",
        explanation: "SPEC: Standard Performance Evaluation Corporation benchmarks."
    },
    {
        id: "coa087", topic: "COA", subtopic: "Pipelining", difficulty: "Medium",
        question: "Pipeline latch stores:",
        options: ["A) Nothing", "B) Intermediate results between pipeline stages", "C) Only instructions", "D) Only data"], answer: "B",
        explanation: "Latches hold instruction info and data between stages."
    },
    {
        id: "coa088", topic: "COA", subtopic: "Memory Hierarchy", difficulty: "Medium",
        question: "Split cache has separate caches for:",
        options: ["A) Nothing", "B) Instructions and data", "C) Read and write", "D) Fast and slow"], answer: "B",
        explanation: "Split (Harvard-style): I-cache and D-cache separate (avoid structural hazard)."
    },
    {
        id: "coa089", topic: "COA", subtopic: "General", difficulty: "Hard",
        question: "Power consumption in CMOS is proportional to:",
        options: ["A) Voltage only", "B) C × V² × f (capacitance, voltage squared, frequency)", "C) Current only", "D) Nothing"], answer: "B",
        explanation: "Dynamic power = C × V² × f; reducing voltage most effective."
    },
    {
        id: "coa090", topic: "COA", subtopic: "General", difficulty: "Hard",
        question: "Multi-core processor advantage:",
        options: ["A) Higher single-thread speed", "B) Better performance per watt, parallelism", "C) Simpler programming", "D) Less cache"], answer: "B",
        explanation: "Multi-core: better power efficiency, parallel processing capability."
    }
];
export default coaQuestions;
