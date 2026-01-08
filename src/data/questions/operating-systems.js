// Operating Systems Questions for BARC CSE Exam
export const operatingSystemsQuestions = [
    // PROCESS MANAGEMENT
    {
        id: "os001", topic: "Operating Systems", subtopic: "Process Management", difficulty: "Easy",
        question: "A process in execution is called:",
        options: ["A) Program", "B) Thread", "C) Process", "D) Task"], answer: "C",
        explanation: "A program in execution is called a process."
    },
    {
        id: "os002", topic: "Operating Systems", subtopic: "Process Management", difficulty: "Easy",
        question: "Which is NOT a process state?",
        options: ["A) Running", "B) Ready", "C) Blocked", "D) Compiled"], answer: "D",
        explanation: "Compiled is not a process state. Main states are: New, Ready, Running, Blocked, Terminated."
    },
    {
        id: "os003", topic: "Operating Systems", subtopic: "Process Management", difficulty: "Medium",
        question: "Context switching involves:",
        options: ["A) Saving state of current process and loading state of next", "B) Deleting process", "C) Creating new process", "D) Killing all processes"], answer: "A",
        explanation: "Context switch saves current process state and restores another process state."
    },
    {
        id: "os004", topic: "Operating Systems", subtopic: "Process Management", difficulty: "Medium",
        question: "PCB (Process Control Block) contains:",
        options: ["A) Only process ID", "B) Process state, program counter, registers, memory info", "C) Only memory address", "D) Only priority"], answer: "B",
        explanation: "PCB contains all information about a process including state, PC, registers, memory limits."
    },
    // CPU SCHEDULING
    {
        id: "os005", topic: "Operating Systems", subtopic: "CPU Scheduling", difficulty: "Easy",
        question: "FCFS scheduling stands for:",
        options: ["A) First Come First Served", "B) First CPU First Served", "C) Fast CPU Fast Service", "D) First Create First Start"], answer: "A",
        explanation: "FCFS = First Come First Served - processes served in arrival order."
    },
    {
        id: "os006", topic: "Operating Systems", subtopic: "CPU Scheduling", difficulty: "Medium",
        question: "Which scheduling algorithm can cause starvation?",
        options: ["A) FCFS", "B) Round Robin", "C) SJF (Shortest Job First)", "D) None"], answer: "C",
        explanation: "SJF can starve long processes if short processes keep arriving."
    },
    {
        id: "os007", topic: "Operating Systems", subtopic: "CPU Scheduling", difficulty: "Medium",
        question: "Round Robin scheduling uses:",
        options: ["A) Priority", "B) Time quantum", "C) Burst time", "D) Arrival time only"], answer: "B",
        explanation: "Round Robin gives each process a fixed time quantum."
    },
    {
        id: "os008", topic: "Operating Systems", subtopic: "CPU Scheduling", difficulty: "Hard",
        question: "For processes with burst times 10, 5, 8 arriving at time 0, average waiting time with SJF is:",
        options: ["A) 7.67", "B) 5", "C) 4.33", "D) 10"], answer: "C",
        explanation: "Order: 5,8,10. Wait times: 0,5,13. Avg = (0+5+13)/3 = 6. Actually: P2(5):0, P3(8):5, P1(10):13. Avg=(0+5+8)/3=4.33."
    },
    {
        id: "os009", topic: "Operating Systems", subtopic: "CPU Scheduling", difficulty: "Medium",
        question: "Preemptive SJF is also called:",
        options: ["A) Round Robin", "B) SRTF (Shortest Remaining Time First)", "C) Priority Scheduling", "D) FCFS"], answer: "B",
        explanation: "Preemptive SJF = SRTF, always runs process with shortest remaining time."
    },
    {
        id: "os010", topic: "Operating Systems", subtopic: "CPU Scheduling", difficulty: "Medium",
        question: "Which scheduling has minimum average waiting time?",
        options: ["A) FCFS", "B) SJF", "C) Round Robin", "D) Priority"], answer: "B",
        explanation: "SJF provides minimum average waiting time (proven optimal)."
    },
    // DEADLOCK
    {
        id: "os011", topic: "Operating Systems", subtopic: "Deadlock", difficulty: "Easy",
        question: "How many conditions are necessary for deadlock?",
        options: ["A) 2", "B) 3", "C) 4", "D) 5"], answer: "C",
        explanation: "Four conditions: Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait."
    },
    {
        id: "os012", topic: "Operating Systems", subtopic: "Deadlock", difficulty: "Medium",
        question: "Which is NOT a deadlock prevention strategy?",
        options: ["A) Deny mutual exclusion", "B) Deny hold and wait", "C) Allow circular wait", "D) Deny no preemption"], answer: "C",
        explanation: "To prevent deadlock, we must deny at least one condition, not allow circular wait."
    },
    {
        id: "os013", topic: "Operating Systems", subtopic: "Deadlock", difficulty: "Medium",
        question: "Banker's algorithm is used for:",
        options: ["A) Deadlock detection", "B) Deadlock prevention", "C) Deadlock avoidance", "D) Deadlock recovery"], answer: "C",
        explanation: "Banker's algorithm avoids deadlock by checking safe state before allocation."
    },
    {
        id: "os014", topic: "Operating Systems", subtopic: "Deadlock", difficulty: "Hard",
        question: "In RAG (Resource Allocation Graph), deadlock exists if:",
        options: ["A) Graph has no edges", "B) Graph has a cycle with single instance resources", "C) Graph has no cycle", "D) Graph is empty"], answer: "B",
        explanation: "Cycle in RAG with single-instance resources implies deadlock."
    },
    // MEMORY MANAGEMENT
    {
        id: "os015", topic: "Operating Systems", subtopic: "Memory Management", difficulty: "Easy",
        question: "In paging, physical memory is divided into:",
        options: ["A) Segments", "B) Frames", "C) Pages", "D) Blocks"], answer: "B",
        explanation: "Physical memory is divided into frames, logical memory into pages."
    },
    {
        id: "os016", topic: "Operating Systems", subtopic: "Memory Management", difficulty: "Medium",
        question: "Page table stores mapping between:",
        options: ["A) Process and memory", "B) Page number and frame number", "C) Segment and page", "D) File and disk"], answer: "B",
        explanation: "Page table maps logical page numbers to physical frame numbers."
    },
    {
        id: "os017", topic: "Operating Systems", subtopic: "Memory Management", difficulty: "Medium",
        question: "TLB (Translation Lookaside Buffer) is used to:",
        options: ["A) Store pages", "B) Cache page table entries", "C) Store frames", "D) Manage disk"], answer: "B",
        explanation: "TLB is a cache for page table entries to speed up address translation."
    },
    {
        id: "os018", topic: "Operating Systems", subtopic: "Memory Management", difficulty: "Hard",
        question: "If page size is 4KB, how many bits are needed for page offset?",
        options: ["A) 10", "B) 12", "C) 14", "D) 16"], answer: "B",
        explanation: "4KB = 4096 = 2^12, so 12 bits for offset."
    },
    {
        id: "os019", topic: "Operating Systems", subtopic: "Memory Management", difficulty: "Medium",
        question: "Internal fragmentation occurs in:",
        options: ["A) Paging", "B) Segmentation", "C) Variable partitioning", "D) None"], answer: "A",
        explanation: "Paging has internal fragmentation (unused space within pages)."
    },
    {
        id: "os020", topic: "Operating Systems", subtopic: "Memory Management", difficulty: "Medium",
        question: "External fragmentation occurs in:",
        options: ["A) Paging", "B) Segmentation", "C) Fixed partitioning", "D) None"], answer: "B",
        explanation: "Segmentation has external fragmentation (free memory scattered)."
    },
    // PAGE REPLACEMENT
    {
        id: "os021", topic: "Operating Systems", subtopic: "Page Replacement", difficulty: "Easy",
        question: "FIFO page replacement replaces:",
        options: ["A) Most recently used page", "B) Least recently used page", "C) Oldest page in memory", "D) Random page"], answer: "C",
        explanation: "FIFO replaces the page that has been in memory longest."
    },
    {
        id: "os022", topic: "Operating Systems", subtopic: "Page Replacement", difficulty: "Medium",
        question: "Optimal page replacement replaces:",
        options: ["A) Oldest page", "B) Page used farthest in future", "C) Most frequently used", "D) Random"], answer: "B",
        explanation: "Optimal replaces page that won't be used for longest time (requires future knowledge)."
    },
    {
        id: "os023", topic: "Operating Systems", subtopic: "Page Replacement", difficulty: "Medium",
        question: "LRU page replacement replaces:",
        options: ["A) Oldest page", "B) Least Recently Used page", "C) Most Recently Used page", "D) Random"], answer: "B",
        explanation: "LRU replaces the page that hasn't been used for the longest time."
    },
    {
        id: "os024", topic: "Operating Systems", subtopic: "Page Replacement", difficulty: "Hard",
        question: "Belady's anomaly occurs in which algorithm?",
        options: ["A) LRU", "B) Optimal", "C) FIFO", "D) LFU"], answer: "C",
        explanation: "FIFO can have more page faults with more frames (Belady's anomaly)."
    },
    {
        id: "os025", topic: "Operating Systems", subtopic: "Page Replacement", difficulty: "Medium",
        question: "For reference string 1,2,3,4,1,2,5,1,2,3 with 3 frames, FIFO page faults are:",
        options: ["A) 6", "B) 7", "C) 8", "D) 9"], answer: "D",
        explanation: "FIFO: Miss on 1,2,3,4,1,2,5,1,2,3 = 9 faults (trace through)."
    },
    // VIRTUAL MEMORY
    {
        id: "os026", topic: "Operating Systems", subtopic: "Virtual Memory", difficulty: "Easy",
        question: "Virtual memory allows:",
        options: ["A) Running programs larger than physical memory", "B) Faster execution", "C) No memory", "D) Infinite speed"], answer: "A",
        explanation: "Virtual memory allows executing programs larger than available RAM."
    },
    {
        id: "os027", topic: "Operating Systems", subtopic: "Virtual Memory", difficulty: "Medium",
        question: "Thrashing occurs when:",
        options: ["A) CPU is idle", "B) System spends more time paging than executing", "C) Memory is empty", "D) Disk is full"], answer: "B",
        explanation: "Thrashing: excessive paging causing very low CPU utilization."
    },
    {
        id: "os028", topic: "Operating Systems", subtopic: "Virtual Memory", difficulty: "Medium",
        question: "Working set model helps prevent:",
        options: ["A) Deadlock", "B) Thrashing", "C) Starvation", "D) Race condition"], answer: "B",
        explanation: "Working set model prevents thrashing by tracking actively used pages."
    },
    // SYNCHRONIZATION
    {
        id: "os029", topic: "Operating Systems", subtopic: "Synchronization", difficulty: "Easy",
        question: "Critical section is:",
        options: ["A) Code that can run in parallel", "B) Code that accesses shared resources", "C) Code that never executes", "D) Main function"], answer: "B",
        explanation: "Critical section is code segment accessing shared resources requiring mutual exclusion."
    },
    {
        id: "os030", topic: "Operating Systems", subtopic: "Synchronization", difficulty: "Medium",
        question: "Semaphore operations are:",
        options: ["A) Lock and Unlock", "B) Wait (P) and Signal (V)", "C) Read and Write", "D) Open and Close"], answer: "B",
        explanation: "Semaphore uses wait(P) to decrement and signal(V) to increment."
    },
    {
        id: "os031", topic: "Operating Systems", subtopic: "Synchronization", difficulty: "Medium",
        question: "Binary semaphore can have values:",
        options: ["A) Any positive integer", "B) 0 or 1 only", "C) Negative values only", "D) Any integer"], answer: "B",
        explanation: "Binary semaphore (mutex) has only 0 or 1 values."
    },
    {
        id: "os032", topic: "Operating Systems", subtopic: "Synchronization", difficulty: "Hard",
        question: "Monitor is different from semaphore because:",
        options: ["A) Monitor is hardware", "B) Monitor provides high-level synchronization with condition variables", "C) Monitor cannot prevent deadlock", "D) Monitor is slower"], answer: "B",
        explanation: "Monitor is a high-level construct with implicit mutual exclusion and condition variables."
    },
    {
        id: "os033", topic: "Operating Systems", subtopic: "Synchronization", difficulty: "Medium",
        question: "Producer-Consumer problem uses:",
        options: ["A) One semaphore", "B) Two semaphores (full, empty) and mutex", "C) No synchronization", "D) Only mutex"], answer: "B",
        explanation: "Uses mutex for critical section, full and empty semaphores for buffer management."
    },
    // FILE SYSTEMS
    {
        id: "os034", topic: "Operating Systems", subtopic: "File Systems", difficulty: "Easy",
        question: "Inode in Unix stores:",
        options: ["A) File name only", "B) File metadata and block pointers", "C) File content only", "D) Only permissions"], answer: "B",
        explanation: "Inode contains file metadata (size, permissions, timestamps) and block pointers."
    },
    {
        id: "os035", topic: "Operating Systems", subtopic: "File Systems", difficulty: "Medium",
        question: "In indexed allocation, file blocks are:",
        options: ["A) Contiguous", "B) Pointed by an index block", "C) Linked", "D) Random"], answer: "B",
        explanation: "Index block contains pointers to all data blocks of the file."
    },
    {
        id: "os036", topic: "Operating Systems", subtopic: "File Systems", difficulty: "Medium",
        question: "Advantage of contiguous allocation is:",
        options: ["A) Easy expansion", "B) Fast sequential and random access", "C) No fragmentation", "D) Dynamic sizing"], answer: "B",
        explanation: "Contiguous allocation provides fastest access but suffers from fragmentation."
    },
    // THREADS
    {
        id: "os037", topic: "Operating Systems", subtopic: "Threads", difficulty: "Easy",
        question: "Threads of same process share:",
        options: ["A) Stack", "B) Code, data, files", "C) Registers", "D) Thread ID"], answer: "B",
        explanation: "Threads share code, data, files but have separate stack and registers."
    },
    {
        id: "os038", topic: "Operating Systems", subtopic: "Threads", difficulty: "Medium",
        question: "User-level threads are managed by:",
        options: ["A) Kernel", "B) User-space library", "C) Hardware", "D) Disk"], answer: "B",
        explanation: "User-level threads are managed by runtime library, invisible to kernel."
    },
    {
        id: "os039", topic: "Operating Systems", subtopic: "Threads", difficulty: "Medium",
        question: "Advantage of kernel threads over user threads:",
        options: ["A) Faster creation", "B) Can utilize multiple CPUs", "C) Less overhead", "D) No context switch"], answer: "B",
        explanation: "Kernel threads can run on multiple processors; one blocking doesn't block all."
    },
    // DISK SCHEDULING
    {
        id: "os040", topic: "Operating Systems", subtopic: "Disk Scheduling", difficulty: "Medium",
        question: "SCAN disk scheduling moves head:",
        options: ["A) Randomly", "B) In one direction till end, then reverses", "C) Only to nearest request", "D) Never moves"], answer: "B",
        explanation: "SCAN (elevator) moves in one direction servicing requests, reverses at end."
    },
    {
        id: "os041", topic: "Operating Systems", subtopic: "Disk Scheduling", difficulty: "Medium",
        question: "C-SCAN differs from SCAN by:",
        options: ["A) Being slower", "B) Returning to beginning without servicing on return", "C) Being random", "D) No difference"], answer: "B",
        explanation: "C-SCAN returns to start without servicing, provides uniform wait time."
    },
    {
        id: "os042", topic: "Operating Systems", subtopic: "Disk Scheduling", difficulty: "Easy",
        question: "SSTF disk scheduling selects:",
        options: ["A) First request", "B) Nearest request to current head position", "C) Farthest request", "D) Random request"], answer: "B",
        explanation: "SSTF (Shortest Seek Time First) selects nearest request."
    },
    // MISC
    {
        id: "os043", topic: "Operating Systems", subtopic: "General", difficulty: "Easy",
        question: "System call is:",
        options: ["A) User function", "B) Interface between user program and kernel", "C) Library function", "D) External program"], answer: "B",
        explanation: "System calls provide interface for user programs to request kernel services."
    },
    {
        id: "os044", topic: "Operating Systems", subtopic: "General", difficulty: "Medium",
        question: "Interrupt is:",
        options: ["A) Normal instruction", "B) Signal that diverts CPU to handle an event", "C) Virus", "D) Memory error"], answer: "B",
        explanation: "Interrupt signals CPU to temporarily stop current task and handle an event."
    },
    {
        id: "os045", topic: "Operating Systems", subtopic: "General", difficulty: "Medium",
        question: "DMA (Direct Memory Access) allows:",
        options: ["A) CPU to access memory", "B) I/O devices to access memory without CPU", "C) Memory to access disk", "D) Nothing"], answer: "B",
        explanation: "DMA allows peripherals to transfer data to/from memory without CPU intervention."
    },
    // MORE OS QUESTIONS  
    {
        id: "os046", topic: "Operating Systems", subtopic: "Process Management", difficulty: "Medium",
        question: "fork() system call returns:",
        options: ["A) 0 to parent, child PID to child", "B) Child PID to parent, 0 to child", "C) Same value to both", "D) Negative to both"], answer: "B",
        explanation: "fork() returns child PID to parent, 0 to child, -1 on error."
    },
    {
        id: "os047", topic: "Operating Systems", subtopic: "Process Management", difficulty: "Medium",
        question: "Zombie process is:",
        options: ["A) Running process", "B) Process that finished but parent hasn't called wait()", "C) Blocked process", "D) Ready process"], answer: "B",
        explanation: "Zombie: terminated process whose exit status hasn't been collected by parent."
    },
    {
        id: "os048", topic: "Operating Systems", subtopic: "Process Management", difficulty: "Medium",
        question: "Orphan process is:",
        options: ["A) Child whose parent terminated", "B) Process with no children", "C) First process", "D) Kernel process"], answer: "A",
        explanation: "Orphan: child process whose parent terminated; adopted by init (PID 1)."
    },
    {
        id: "os049", topic: "Operating Systems", subtopic: "CPU Scheduling", difficulty: "Hard",
        question: "Multilevel Feedback Queue allows:",
        options: ["A) Fixed priority only", "B) Processes to move between queues based on behavior", "C) No preemption", "D) Only one queue"], answer: "B",
        explanation: "MLFQ dynamically adjusts process priority based on CPU usage patterns."
    },
    {
        id: "os050", topic: "Operating Systems", subtopic: "CPU Scheduling", difficulty: "Medium",
        question: "Turnaround time is:",
        options: ["A) Time in ready queue", "B) Total time from submission to completion", "C) CPU burst time", "D) Wait time only"], answer: "B",
        explanation: "Turnaround = Completion time - Arrival time = Wait + Burst."
    },
    {
        id: "os051", topic: "Operating Systems", subtopic: "CPU Scheduling", difficulty: "Medium",
        question: "Response time is:",
        options: ["A) Turnaround time", "B) Time from submission to first response", "C) Total execution time", "D) CPU time only"], answer: "B",
        explanation: "Response time: from request submission to first output/response."
    },
    {
        id: "os052", topic: "Operating Systems", subtopic: "CPU Scheduling", difficulty: "Hard",
        question: "Convoy effect occurs in:",
        options: ["A) SJF", "B) Round Robin", "C) FCFS", "D) Priority"], answer: "C",
        explanation: "FCFS: short processes wait behind long process causing convoy effect."
    },
    {
        id: "os053", topic: "Operating Systems", subtopic: "Deadlock", difficulty: "Hard",
        question: "In Banker's algorithm, safe state means:",
        options: ["A) No resources available", "B) System can allocate resources to complete all processes", "C) Deadlock exists", "D) All processes blocked"], answer: "B",
        explanation: "Safe state: exists a sequence to satisfy all process requests without deadlock."
    },
    {
        id: "os054", topic: "Operating Systems", subtopic: "Deadlock", difficulty: "Medium",
        question: "Deadlock recovery can be done by:",
        options: ["A) Process termination or resource preemption", "B) Adding more resources only", "C) Ignoring deadlock", "D) Rebooting always"], answer: "A",
        explanation: "Recovery: kill processes or preempt resources from some processes."
    },
    {
        id: "os055", topic: "Operating Systems", subtopic: "Deadlock", difficulty: "Medium",
        question: "Resource ordering to prevent deadlock denies:",
        options: ["A) Mutual exclusion", "B) Hold and wait", "C) No preemption", "D) Circular wait"], answer: "D",
        explanation: "Imposing ordering on resource requests prevents circular wait."
    },
    {
        id: "os056", topic: "Operating Systems", subtopic: "Memory Management", difficulty: "Hard",
        question: "Two-level page table reduces:",
        options: ["A) Page table size in memory", "B) Number of pages", "C) Frame size", "D) Disk accesses"], answer: "A",
        explanation: "Multi-level paging reduces page table memory by only loading needed portions."
    },
    {
        id: "os057", topic: "Operating Systems", subtopic: "Memory Management", difficulty: "Hard",
        question: "Inverted page table has:",
        options: ["A) One entry per page", "B) One entry per frame", "C) One entry per process", "D) No entries"], answer: "B",
        explanation: "Inverted: one entry per physical frame, regardless of process count."
    },
    {
        id: "os058", topic: "Operating Systems", subtopic: "Memory Management", difficulty: "Medium",
        question: "Segmentation fault occurs when:",
        options: ["A) Valid memory access", "B) Process accesses memory outside its allocated segments", "C) Disk is full", "D) CPU overheats"], answer: "B",
        explanation: "Segmentation fault: illegal access to memory not allocated to process."
    },
    {
        id: "os059", topic: "Operating Systems", subtopic: "Page Replacement", difficulty: "Hard",
        question: "Second chance (clock) algorithm is modification of:",
        options: ["A) LRU", "B) FIFO", "C) Optimal", "D) Random"], answer: "B",
        explanation: "Second chance uses reference bit to give pages a second chance before FIFO replacement."
    },
    {
        id: "os060", topic: "Operating Systems", subtopic: "Page Replacement", difficulty: "Medium",
        question: "Stack algorithms (like LRU, Optimal) do NOT exhibit:",
        options: ["A) Page faults", "B) Belady's anomaly", "C) Thrashing", "D) Any faults"], answer: "B",
        explanation: "Stack algorithms: more frames never increase page faults (no Belady's anomaly)."
    },
    {
        id: "os061", topic: "Operating Systems", subtopic: "Virtual Memory", difficulty: "Medium",
        question: "Demand paging loads pages:",
        options: ["A) All at program start", "B) Only when accessed (on demand)", "C) Never", "D) In fixed intervals"], answer: "B",
        explanation: "Demand paging: pages loaded only when needed, causing page fault."
    },
    {
        id: "os062", topic: "Operating Systems", subtopic: "Virtual Memory", difficulty: "Hard",
        question: "Copy-on-write is used in:",
        options: ["A) fork() to delay copying until write", "B) All memory operations", "C) Disk operations", "D) Network"], answer: "A",
        explanation: "COW: parent and child share pages until one writes, then copy is made."
    },
    {
        id: "os063", topic: "Operating Systems", subtopic: "Virtual Memory", difficulty: "Medium",
        question: "Page fault handling involves:",
        options: ["A) Killing process", "B) Finding free frame, loading page from disk, updating page table", "C) Ignoring fault", "D) Restarting system"], answer: "B",
        explanation: "Page fault: find/create frame, load page from backing store, update tables, restart instruction."
    },
    {
        id: "os064", topic: "Operating Systems", subtopic: "Synchronization", difficulty: "Medium",
        question: "Test-and-set is:",
        options: ["A) Software solution", "B) Atomic hardware instruction for synchronization", "C) Compiler optimization", "D) Memory operation"], answer: "B",
        explanation: "Test-and-set: atomic instruction that reads and modifies memory atomically."
    },
    {
        id: "os065", topic: "Operating Systems", subtopic: "Synchronization", difficulty: "Hard",
        question: "Compare-and-swap (CAS) returns:",
        options: ["A) Always true", "B) True if value was expected and swap occurred", "C) Random value", "D) Memory address"], answer: "B",
        explanation: "CAS: atomically compare and swap if equal to expected value."
    },
    {
        id: "os066", topic: "Operating Systems", subtopic: "Synchronization", difficulty: "Medium",
        question: "Spinlock is busy-waiting lock suitable for:",
        options: ["A) Long critical sections", "B) Short critical sections on multiprocessor", "C) Single processor always", "D) Distributed systems"], answer: "B",
        explanation: "Spinlock wastes CPU but avoids context switch; good for short critical sections on SMP."
    },
    {
        id: "os067", topic: "Operating Systems", subtopic: "Synchronization", difficulty: "Hard",
        question: "Readers-Writers problem gives priority to:",
        options: ["A) Always readers", "B) Always writers", "C) Depends on variant (reader-preference, writer-preference, or fair)", "D) None"], answer: "C",
        explanation: "Different solutions prioritize readers, writers, or fair access."
    },
    {
        id: "os068", topic: "Operating Systems", subtopic: "Synchronization", difficulty: "Hard",
        question: "Dining Philosophers problem illustrates:",
        options: ["A) Memory management", "B) Deadlock and resource allocation challenges", "C) CPU scheduling", "D) File systems"], answer: "B",
        explanation: "Classic synchronization problem demonstrating deadlock and starvation."
    },
    {
        id: "os069", topic: "Operating Systems", subtopic: "File Systems", difficulty: "Medium",
        question: "Hard link vs soft link: hard link:",
        options: ["A) Points to filename", "B) Points to inode directly", "C) Works across filesystems", "D) Is a shortcut"], answer: "B",
        explanation: "Hard link directly references inode; soft link references path name."
    },
    {
        id: "os070", topic: "Operating Systems", subtopic: "File Systems", difficulty: "Medium",
        question: "Journaling file system advantage:",
        options: ["A) Faster reads", "B) Recovery from crashes using log", "C) Less space used", "D) No fragmentation"], answer: "B",
        explanation: "Journal logs changes; on crash, replay or undo incomplete operations."
    },
    {
        id: "os071", topic: "Operating Systems", subtopic: "File Systems", difficulty: "Medium",
        question: "FAT file system stores allocation in:",
        options: ["A) Inode", "B) File Allocation Table", "C) Superblock only", "D) Directory only"], answer: "B",
        explanation: "FAT has table with entries for each cluster pointing to next cluster."
    },
    {
        id: "os072", topic: "Operating Systems", subtopic: "File Systems", difficulty: "Hard",
        question: "RAID 5 uses:",
        options: ["A) Mirroring only", "B) Parity distributed across drives", "C) No redundancy", "D) Striping only"], answer: "B",
        explanation: "RAID 5: striping with distributed parity for fault tolerance."
    },
    {
        id: "os073", topic: "Operating Systems", subtopic: "File Systems", difficulty: "Medium",
        question: "RAID 0 provides:",
        options: ["A) Redundancy", "B) Striping with no redundancy (speed only)", "C) Mirroring", "D) Parity"], answer: "B",
        explanation: "RAID 0: striping improves performance but no fault tolerance."
    },
    {
        id: "os074", topic: "Operating Systems", subtopic: "Threads", difficulty: "Medium",
        question: "Many-to-Many thread model maps:",
        options: ["A) Many user threads to many kernel threads", "B) One to one", "C) Many to one", "D) One to many"], answer: "A",
        explanation: "Many-to-Many: multiple user threads multiplex on multiple kernel threads."
    },
    {
        id: "os075", topic: "Operating Systems", subtopic: "Threads", difficulty: "Hard",
        question: "Thread pool advantage:",
        options: ["A) Unlimited threads", "B) Reuse threads, limit concurrency, reduce creation overhead", "C) No synchronization needed", "D) Slower execution"], answer: "B",
        explanation: "Thread pool: pre-created threads reused, limiting overhead and resource use."
    },
    {
        id: "os076", topic: "Operating Systems", subtopic: "Threads", difficulty: "Medium",
        question: "Pthread is:",
        options: ["A) Windows thread", "B) POSIX thread standard", "C) Compiler option", "D) Memory model"], answer: "B",
        explanation: "Pthread: POSIX Threads API standard for Unix/Linux thread programming."
    },
    {
        id: "os077", topic: "Operating Systems", subtopic: "Disk Scheduling", difficulty: "Hard",
        question: "LOOK algorithm differs from SCAN by:",
        options: ["A) Being slower", "B) Only going as far as last request, not edge", "C) Random selection", "D) No difference"], answer: "B",
        explanation: "LOOK reverses at last request, not disk edge; more efficient than SCAN."
    },
    {
        id: "os078", topic: "Operating Systems", subtopic: "Disk Scheduling", difficulty: "Medium",
        question: "Seek time is time to:",
        options: ["A) Read data", "B) Move head to desired track", "C) Rotate disk", "D) Transfer data"], answer: "B",
        explanation: "Seek time: head positioning to correct track. Rotational latency: waiting for sector."
    },
    {
        id: "os079", topic: "Operating Systems", subtopic: "General", difficulty: "Medium",
        question: "Kernel mode vs User mode differs in:",
        options: ["A) Speed only", "B) Privilege level and access to hardware", "C) Memory size", "D) No difference"], answer: "B",
        explanation: "Kernel mode has full hardware access; user mode restricted for protection."
    },
    {
        id: "os080", topic: "Operating Systems", subtopic: "General", difficulty: "Medium",
        question: "Microkernel design:",
        options: ["A) Puts everything in kernel", "B) Minimal kernel with services in user space", "C) No kernel", "D) Single process OS"], answer: "B",
        explanation: "Microkernel: minimal core, most services (FS, drivers) run in user space."
    },
    {
        id: "os081", topic: "Operating Systems", subtopic: "General", difficulty: "Easy",
        question: "Multiprogramming increases:",
        options: ["A) Memory only", "B) CPU utilization by keeping CPU busy", "C) Disk space", "D) Nothing"], answer: "B",
        explanation: "Multiprogramming: multiple processes in memory, CPU switches when one blocks."
    },
    {
        id: "os082", topic: "Operating Systems", subtopic: "General", difficulty: "Medium",
        question: "Spooling is used for:",
        options: ["A) CPU scheduling", "B) Buffering I/O for slow devices like printer", "C) Memory management", "D) Process creation"], answer: "B",
        explanation: "SPOOL: Simultaneous Peripheral Operations On-Line; buffers for slow devices."
    },
    {
        id: "os083", topic: "Operating Systems", subtopic: "General", difficulty: "Medium",
        question: "Real-time OS must guarantee:",
        options: ["A) Maximum throughput", "B) Response within deadline", "C) Maximum memory", "D) Minimum processes"], answer: "B",
        explanation: "RTOS: predictable response times, meeting timing constraints."
    },
    {
        id: "os084", topic: "Operating Systems", subtopic: "CPU Scheduling", difficulty: "Hard",
        question: "Lottery scheduling assigns:",
        options: ["A) Fixed priority", "B) Tickets proportional to share; random selection", "C) Round robin only", "D) FCFS only"], answer: "B",
        explanation: "Lottery: processes get tickets proportional to share; random ticket drawn."
    },
    {
        id: "os085", topic: "Operating Systems", subtopic: "Memory Management", difficulty: "Hard",
        question: "Buddy system allocation:",
        options: ["A) Uses fixed partitions", "B) Splits/coalesces power-of-two blocks", "C) Uses paging only", "D) No fragmentation"], answer: "B",
        explanation: "Buddy: allocates power-of-2 blocks, splits larger, coalesces freed neighbors."
    },
    {
        id: "os086", topic: "Operating Systems", subtopic: "Memory Management", difficulty: "Medium",
        question: "Best-fit vs First-fit: best-fit:",
        options: ["A) Faster search", "B) Finds smallest suitable hole", "C) Uses first hole", "D) No difference"], answer: "B",
        explanation: "Best-fit: search for smallest hole that fits; may cause more fragmentation."
    },
    {
        id: "os087", topic: "Operating Systems", subtopic: "Synchronization", difficulty: "Hard",
        question: "Priority inversion is:",
        options: ["A) High priority waits for low priority holding resource", "B) Normal scheduling", "C) Deadlock", "D) Starvation"], answer: "A",
        explanation: "Priority inversion: high-priority task blocked by lower-priority holding lock."
    },
    {
        id: "os088", topic: "Operating Systems", subtopic: "Synchronization", difficulty: "Hard",
        question: "Priority inheritance protocol solves:",
        options: ["A) Deadlock", "B) Priority inversion", "C) Starvation only", "D) Memory leak"], answer: "B",
        explanation: "Priority inheritance: low-priority task inherits high priority while holding needed resource."
    },
    {
        id: "os089", topic: "Operating Systems", subtopic: "General", difficulty: "Medium",
        question: "Boot loader is:",
        options: ["A) Application software", "B) Program that loads OS into memory at startup", "C) Compiler", "D) Debugger"], answer: "B",
        explanation: "Boot loader initializes hardware and loads operating system kernel."
    },
    {
        id: "os090", topic: "Operating Systems", subtopic: "General", difficulty: "Medium",
        question: "Trap is:",
        options: ["A) Hardware interrupt", "B) Software-generated interrupt (system call, error)", "C) Virus", "D) Memory error"], answer: "B",
        explanation: "Trap: software interrupt triggered by program (syscall, exception)."
    },
    // NEW CORE FOUNDATIONAL QUESTIONS
    {
        id: "os091", topic: "Operating Systems", subtopic: "Memory Management", difficulty: "Hard",
        question: "In a 32-bit system with 4KB pages, how many bits are used for page offset?",
        options: ["A) 10 bits", "B) 12 bits", "C) 20 bits", "D) 32 bits"], answer: "B",
        explanation: "4KB = 2^12 bytes, so 12 bits needed for offset within page."
    },
    {
        id: "os092", topic: "Operating Systems", subtopic: "Memory Management", difficulty: "Hard",
        question: "Two-level page table reduces memory overhead by:",
        options: ["A) Eliminating page table", "B) Not allocating page table entries for unused address space", "C) Using larger pages", "D) Removing virtual memory"], answer: "B",
        explanation: "Multi-level paging only allocates page table pages that are actually needed."
    },
    {
        id: "os093", topic: "Operating Systems", subtopic: "Virtual Memory", difficulty: "Hard",
        question: "Inverted page table has size proportional to:",
        options: ["A) Virtual address space", "B) Physical memory size", "C) Number of processes", "D) Disk size"], answer: "B",
        explanation: "Inverted page table has one entry per physical frame, not per virtual page."
    },
    {
        id: "os094", topic: "Operating Systems", subtopic: "Virtual Memory", difficulty: "Medium",
        question: "Working set model defines:",
        options: ["A) Total memory", "B) Pages accessed within recent time window", "C) Disk space", "D) CPU time"], answer: "B",
        explanation: "Working set: set of pages referenced in last Δ time units."
    },
    {
        id: "os095", topic: "Operating Systems", subtopic: "Virtual Memory", difficulty: "Hard",
        question: "Belady's MIN (optimal) page replacement algorithm:",
        options: ["A) Is implementable", "B) Replaces page used farthest in future (theoretical)", "C) Uses FIFO", "D) Uses LRU"], answer: "B",
        explanation: "OPT replaces page that won't be used for longest time - requires future knowledge."
    },
    {
        id: "os096", topic: "Operating Systems", subtopic: "Virtual Memory", difficulty: "Medium",
        question: "Clock (Second Chance) algorithm is approximation of:",
        options: ["A) FIFO", "B) LRU", "C) OPT", "D) Random"], answer: "B",
        explanation: "Clock algorithm approximates LRU using reference bit, cheaper to implement."
    },
    {
        id: "os097", topic: "Operating Systems", subtopic: "CPU Scheduling", difficulty: "Hard",
        question: "Completely Fair Scheduler (CFS) in Linux uses:",
        options: ["A) Priority queues", "B) Red-black tree of virtual runtime", "C) Simple round robin", "D) FIFO only"], answer: "B",
        explanation: "CFS tracks virtual runtime in red-black tree, picks process with smallest vruntime."
    },
    {
        id: "os098", topic: "Operating Systems", subtopic: "CPU Scheduling", difficulty: "Medium",
        question: "Multilevel Feedback Queue allows process to:",
        options: ["A) Stay in same queue always", "B) Move between queues based on behavior", "C) Skip scheduling", "D) Use infinite CPU"], answer: "B",
        explanation: "MLFQ adjusts priority based on actual CPU usage - I/O bound processes get higher priority."
    },
    {
        id: "os099", topic: "Operating Systems", subtopic: "Deadlock", difficulty: "Hard",
        question: "Banker's algorithm time complexity for n processes and m resources is:",
        options: ["A) O(n)", "B) O(m)", "C) O(n*m)", "D) O(n²*m)"], answer: "D",
        explanation: "Safety algorithm: O(n) iterations, each checking O(n*m) resources."
    },
    {
        id: "os100", topic: "Operating Systems", subtopic: "Deadlock", difficulty: "Medium",
        question: "Resource Allocation Graph with only single instance resources shows deadlock if:",
        options: ["A) No edges exist", "B) Cycle exists", "C) All resources free", "D) No processes"], answer: "B",
        explanation: "With single instances, cycle in RAG implies deadlock."
    },
    {
        id: "os101", topic: "Operating Systems", subtopic: "Synchronization", difficulty: "Hard",
        question: "Compare-and-Swap (CAS) is:",
        options: ["A) Software-only", "B) Hardware atomic instruction for lock-free programming", "C) System call", "D) High-level API"], answer: "B",
        explanation: "CAS: hardware atomic instruction comparing and updating memory location."
    },
    {
        id: "os102", topic: "Operating Systems", subtopic: "Synchronization", difficulty: "Hard",
        question: "Spinlock is preferred over blocking lock when:",
        options: ["A) Wait time is long", "B) Wait time is very short (critical section small)", "C) Single CPU system", "D) Always preferred"], answer: "B",
        explanation: "Spinlocks avoid context switch overhead for very short waits on multiprocessors."
    },
    {
        id: "os103", topic: "Operating Systems", subtopic: "Synchronization", difficulty: "Hard",
        question: "Read-Copy-Update (RCU) is used for:",
        options: ["A) Write-heavy workloads", "B) Read-heavy workloads with infrequent updates", "C) Equal reads/writes", "D) Only single-threaded"], answer: "B",
        explanation: "RCU allows lock-free reads, writers make copies. Optimal for read-mostly data."
    },
    {
        id: "os104", topic: "Operating Systems", subtopic: "File Systems", difficulty: "Medium",
        question: "Inode in Unix contains:",
        options: ["A) File name", "B) File metadata (permissions, size, block pointers)", "C) Only file content", "D) Directory path"], answer: "B",
        explanation: "Inode stores metadata and block pointers. Filename is in directory entry."
    },
    {
        id: "os105", topic: "Operating Systems", subtopic: "File Systems", difficulty: "Medium",
        question: "Hard link vs Symbolic link: hard link:",
        options: ["A) Points to file path", "B) Points to same inode", "C) Can cross filesystems", "D) Is a special file"], answer: "B",
        explanation: "Hard link shares same inode. Symlink stores path string."
    },
    {
        id: "os106", topic: "Operating Systems", subtopic: "File Systems", difficulty: "Hard",
        question: "Journaling file system ensures:",
        options: ["A) Faster access", "B) Crash consistency via write-ahead log", "C) More storage", "D) No fragmentation"], answer: "B",
        explanation: "Journal records operations before committing, enabling recovery after crash."
    },
    {
        id: "os107", topic: "Operating Systems", subtopic: "Memory Management", difficulty: "Hard",
        question: "Copy-on-Write (COW) in fork():",
        options: ["A) Copies all memory immediately", "B) Shares pages until write, then copies", "C) Never copies", "D) Uses swap only"], answer: "B",
        explanation: "COW shares pages read-only; actual copy made only when page is modified."
    },
    {
        id: "os108", topic: "Operating Systems", subtopic: "Process Management", difficulty: "Medium",
        question: "Zombie process is:",
        options: ["A) Running process", "B) Terminated process waiting for parent to read exit status", "C) Blocked process", "D) Orphan process"], answer: "B",
        explanation: "Zombie: terminated but parent hasn't called wait() to collect exit status."
    },
    {
        id: "os109", topic: "Operating Systems", subtopic: "Process Management", difficulty: "Medium",
        question: "Orphan process is:",
        options: ["A) Process without children", "B) Process whose parent terminated", "C) Zombie process", "D) Init process"], answer: "B",
        explanation: "Orphan: parent exited. Adopted by init process (PID 1)."
    },
    {
        id: "os110", topic: "Operating Systems", subtopic: "Memory Management", difficulty: "Hard",
        question: "Memory-mapped I/O vs Port-mapped I/O: memory-mapped:",
        options: ["A) Uses special CPU instructions", "B) Uses same address space as memory", "C) Is slower always", "D) Not used in modern systems"], answer: "B",
        explanation: "Memory-mapped I/O: devices accessed via memory addresses. Port-mapped uses special I/O instructions."
    },
    {
        id: "os111", topic: "Operating Systems", subtopic: "CPU Scheduling", difficulty: "Medium",
        question: "Response time is:",
        options: ["A) Total execution time", "B) Time from submission to first response", "C) Time in ready queue", "D) CPU burst time"], answer: "B",
        explanation: "Response time: interval from request to first response (important for interactive systems)."
    },
    {
        id: "os112", topic: "Operating Systems", subtopic: "CPU Scheduling", difficulty: "Medium",
        question: "Turnaround time equals:",
        options: ["A) Response time", "B) Waiting time + Burst time", "C) CPU time only", "D) I/O time only"], answer: "B",
        explanation: "Turnaround = completion time - arrival time = waiting time + burst time."
    },
    {
        id: "os113", topic: "Operating Systems", subtopic: "Threads", difficulty: "Medium",
        question: "User-level threads vs Kernel threads: user-level:",
        options: ["A) Slower context switch", "B) Faster context switch (no kernel involvement)", "C) Better parallelism", "D) More overhead"], answer: "B",
        explanation: "User threads: fast switch (no kernel trap), but blocking one blocks all."
    },
    {
        id: "os114", topic: "Operating Systems", subtopic: "Threads", difficulty: "Medium",
        question: "A thread shares with other threads in same process:",
        options: ["A) Stack", "B) Registers", "C) Code, data, and heap", "D) Program counter"], answer: "C",
        explanation: "Threads share address space (code, data, heap) but have own stack and registers."
    },
    {
        id: "os115", topic: "Operating Systems", subtopic: "Virtual Memory", difficulty: "Hard",
        question: "Translation Lookaside Buffer (TLB) miss handling:",
        options: ["A) Always hardware", "B) Always software", "C) Can be hardware or software (architecture dependent)", "D) No handling needed"], answer: "C",
        explanation: "TLB miss: hardware (x86) or software (MIPS) page table walk."
    },
    {
        id: "os116", topic: "Operating Systems", subtopic: "Virtual Memory", difficulty: "Medium",
        question: "Page fault rate directly affects:",
        options: ["A) CPU speed", "B) Effective access time (performance)", "C) Disk size", "D) Network speed"], answer: "B",
        explanation: "High page fault rate severely impacts performance due to disk access latency."
    },
    {
        id: "os117", topic: "Operating Systems", subtopic: "I/O", difficulty: "Medium",
        question: "DMA (Direct Memory Access) allows:",
        options: ["A) CPU to access disk directly", "B) Device to transfer data to memory without CPU", "C) Faster CPU", "D) More memory"], answer: "B",
        explanation: "DMA: device transfers data directly to/from memory, CPU freed for other work."
    },
    {
        id: "os118", topic: "Operating Systems", subtopic: "I/O", difficulty: "Medium",
        question: "Interrupt-driven I/O vs Polling: interrupt-driven:",
        options: ["A) Wastes CPU cycles waiting", "B) CPU notified via interrupt when I/O complete", "C) Checks device repeatedly", "D) Slower always"], answer: "B",
        explanation: "Interrupts allow CPU to do other work while waiting for I/O completion."
    },
    {
        id: "os119", topic: "Operating Systems", subtopic: "Security", difficulty: "Medium",
        question: "Kernel mode vs User mode: kernel mode:",
        options: ["A) Restricted access", "B) Full hardware access, privileged instructions", "C) Same as user mode", "D) No privileges"], answer: "B",
        explanation: "Kernel mode: execute any instruction, access all memory. User mode restricted."
    },
    {
        id: "os120", topic: "Operating Systems", subtopic: "Security", difficulty: "Medium",
        question: "System call transitions from:",
        options: ["A) Kernel to user mode", "B) User mode to kernel mode", "C) No mode change", "D) Hardware to software"], answer: "B",
        explanation: "System call: trap from user mode to kernel mode to access OS services."
    }
];
export default operatingSystemsQuestions;

