// Software Engineering Questions for BARC CSE Exam
export const softwareEngineeringQuestions = [
    // SDLC
    {
        id: "se001", topic: "Software Engineering", subtopic: "SDLC", difficulty: "Easy",
        question: "SDLC stands for:",
        options: ["A) Software Design Life Cycle", "B) Software Development Life Cycle", "C) System Development Life Cycle", "D) Software Data Life Cycle"], answer: "B",
        explanation: "SDLC = Software Development Life Cycle."
    },
    {
        id: "se002", topic: "Software Engineering", subtopic: "SDLC", difficulty: "Easy",
        question: "First phase of Waterfall model is:",
        options: ["A) Design", "B) Requirements Analysis", "C) Coding", "D) Testing"], answer: "B",
        explanation: "Waterfall starts with Requirements Analysis/Specification."
    },
    {
        id: "se003", topic: "Software Engineering", subtopic: "SDLC", difficulty: "Medium",
        question: "Waterfall model is also called:",
        options: ["A) Iterative model", "B) Classical/Linear sequential model", "C) Spiral model", "D) Agile model"], answer: "B",
        explanation: "Waterfall is linear sequential - each phase completes before next."
    },
    {
        id: "se004", topic: "Software Engineering", subtopic: "SDLC", difficulty: "Medium",
        question: "Main disadvantage of Waterfall model is:",
        options: ["A) Too fast", "B) Difficult to accommodate changes after phase completion", "C) Too simple", "D) No phases"], answer: "B",
        explanation: "Once a phase is complete, going back is costly/difficult."
    },
    {
        id: "se005", topic: "Software Engineering", subtopic: "SDLC", difficulty: "Medium",
        question: "Spiral model combines:",
        options: ["A) Only waterfall", "B) Iterative development with risk analysis", "C) Only prototyping", "D) Only testing"], answer: "B",
        explanation: "Spiral: iterative + risk analysis at each iteration."
    },
    {
        id: "se006", topic: "Software Engineering", subtopic: "SDLC", difficulty: "Medium",
        question: "Prototype model is best when:",
        options: ["A) Requirements are clear", "B) Requirements are unclear/evolving", "C) Project is small", "D) No users"], answer: "B",
        explanation: "Prototyping helps clarify requirements through working models."
    },
    // AGILE
    {
        id: "se007", topic: "Software Engineering", subtopic: "Agile", difficulty: "Easy",
        question: "Agile methodology emphasizes:",
        options: ["A) Heavy documentation", "B) Iterative development, customer collaboration", "C) No planning", "D) Long release cycles"], answer: "B",
        explanation: "Agile: iterative, incremental, customer collaboration, responding to change."
    },
    {
        id: "se008", topic: "Software Engineering", subtopic: "Agile", difficulty: "Medium",
        question: "Scrum sprint typically lasts:",
        options: ["A) 1 day", "B) 1-4 weeks", "C) 6 months", "D) 1 year"], answer: "B",
        explanation: "Sprints are 1-4 weeks, with 2 weeks being common."
    },
    {
        id: "se009", topic: "Software Engineering", subtopic: "Agile", difficulty: "Medium",
        question: "Daily standup in Scrum answers:",
        options: ["A) Project plan", "B) What did I do, what will I do, any blockers", "C) Budget", "D) Only blockers"], answer: "B",
        explanation: "Daily standup: yesterday's work, today's plan, impediments."
    },
    {
        id: "se010", topic: "Software Engineering", subtopic: "Agile", difficulty: "Medium",
        question: "Product backlog is maintained by:",
        options: ["A) Developer", "B) Product Owner", "C) Scrum Master", "D) Tester"], answer: "B",
        explanation: "Product Owner manages and prioritizes the product backlog."
    },
    // REQUIREMENTS
    {
        id: "se011", topic: "Software Engineering", subtopic: "Requirements", difficulty: "Easy",
        question: "Functional requirements describe:",
        options: ["A) Performance", "B) What system should do (features)", "C) Security only", "D) Hardware"], answer: "B",
        explanation: "Functional requirements specify system functionality/features."
    },
    {
        id: "se012", topic: "Software Engineering", subtopic: "Requirements", difficulty: "Easy",
        question: "Non-functional requirements include:",
        options: ["A) Features", "B) Performance, security, usability constraints", "C) Use cases", "D) Database design"], answer: "B",
        explanation: "NFRs: performance, security, reliability, usability, etc."
    },
    {
        id: "se013", topic: "Software Engineering", subtopic: "Requirements", difficulty: "Medium",
        question: "SRS stands for:",
        options: ["A) Software Requirements Specification", "B) System Required Software", "C) Software Requirement System", "D) System Requirement Specification"], answer: "A",
        explanation: "SRS = Software Requirements Specification document."
    },
    // DESIGN
    {
        id: "se014", topic: "Software Engineering", subtopic: "Design", difficulty: "Medium",
        question: "Coupling refers to:",
        options: ["A) Interaction within a module", "B) Interdependence between modules", "C) Module size", "D) Module speed"], answer: "B",
        explanation: "Coupling: degree of dependency between modules. Low coupling is better."
    },
    {
        id: "se015", topic: "Software Engineering", subtopic: "Design", difficulty: "Medium",
        question: "Cohesion refers to:",
        options: ["A) Module independence", "B) How related elements within a module are", "C) Module size", "D) Module dependency"], answer: "B",
        explanation: "Cohesion: how closely related elements within module are. High is better."
    },
    {
        id: "se016", topic: "Software Engineering", subtopic: "Design", difficulty: "Medium",
        question: "Good design has:",
        options: ["A) High coupling, low cohesion", "B) Low coupling, high cohesion", "C) No coupling or cohesion", "D) Maximum coupling"], answer: "B",
        explanation: "Low coupling (independent modules) + high cohesion (focused modules)."
    },
    {
        id: "se017", topic: "Software Engineering", subtopic: "Design", difficulty: "Medium",
        question: "DFD stands for:",
        options: ["A) Data Flow Diagram", "B) Design Flow Diagram", "C) Data Function Diagram", "D) Design Function Data"], answer: "A",
        explanation: "DFD shows data flow through system processes."
    },
    // TESTING
    {
        id: "se018", topic: "Software Engineering", subtopic: "Testing", difficulty: "Easy",
        question: "Unit testing tests:",
        options: ["A) Entire system", "B) Individual components/modules", "C) User interface only", "D) Database only"], answer: "B",
        explanation: "Unit testing verifies individual units/components in isolation."
    },
    {
        id: "se019", topic: "Software Engineering", subtopic: "Testing", difficulty: "Easy",
        question: "Integration testing tests:",
        options: ["A) Individual units", "B) Interaction between integrated units", "C) User acceptance", "D) Performance only"], answer: "B",
        explanation: "Integration testing checks interfaces between modules."
    },
    {
        id: "se020", topic: "Software Engineering", subtopic: "Testing", difficulty: "Easy",
        question: "System testing tests:",
        options: ["A) Only units", "B) Complete integrated system against requirements", "C) Only integration", "D) Only performance"], answer: "B",
        explanation: "System testing validates complete system against requirements."
    },
    {
        id: "se021", topic: "Software Engineering", subtopic: "Testing", difficulty: "Medium",
        question: "Black box testing is based on:",
        options: ["A) Internal code structure", "B) Specifications/requirements (external behavior)", "C) Source code review", "D) Compiler output"], answer: "B",
        explanation: "Black box: tests functionality without knowing internal code."
    },
    {
        id: "se022", topic: "Software Engineering", subtopic: "Testing", difficulty: "Medium",
        question: "White box testing is based on:",
        options: ["A) External specifications only", "B) Internal code structure and logic", "C) User stories", "D) Only inputs"], answer: "B",
        explanation: "White box: tests internal logic, code paths, branches."
    },
    {
        id: "se023", topic: "Software Engineering", subtopic: "Testing", difficulty: "Medium",
        question: "Regression testing is done when:",
        options: ["A) Initial development", "B) After code changes to ensure no new bugs", "C) Only once", "D) Never"], answer: "B",
        explanation: "Regression: re-run tests after changes to catch introduced bugs."
    },
    {
        id: "se024", topic: "Software Engineering", subtopic: "Testing", difficulty: "Medium",
        question: "Alpha testing is performed by:",
        options: ["A) End users", "B) Developers at developer's site", "C) Random people", "D) Automated tools only"], answer: "B",
        explanation: "Alpha: internal testing at developer site before beta."
    },
    {
        id: "se025", topic: "Software Engineering", subtopic: "Testing", difficulty: "Medium",
        question: "Beta testing is performed by:",
        options: ["A) Developers only", "B) Selected end users at their site", "C) No one", "D) Only testers"], answer: "B",
        explanation: "Beta: real users test at their location before release."
    },
    {
        id: "se026", topic: "Software Engineering", subtopic: "Testing", difficulty: "Medium",
        question: "Statement coverage measures:",
        options: ["A) Branch coverage", "B) Percentage of statements executed during testing", "C) Path coverage", "D) Condition coverage"], answer: "B",
        explanation: "Statement coverage: % of code statements executed by tests."
    },
    {
        id: "se027", topic: "Software Engineering", subtopic: "Testing", difficulty: "Hard",
        question: "Branch coverage is stronger than:",
        options: ["A) Path coverage", "B) Statement coverage", "C) Condition coverage", "D) None"], answer: "B",
        explanation: "Branch coverage implies statement coverage but not vice versa."
    },
    // ESTIMATION
    {
        id: "se028", topic: "Software Engineering", subtopic: "Estimation", difficulty: "Medium",
        question: "COCOMO stands for:",
        options: ["A) Complete Cost Model", "B) Constructive Cost Model", "C) Component Cost Model", "D) Compute Cost Model"], answer: "B",
        explanation: "COCOMO: Constructive Cost Model for effort estimation."
    },
    {
        id: "se029", topic: "Software Engineering", subtopic: "Estimation", difficulty: "Medium",
        question: "Function Point measures:",
        options: ["A) Lines of code only", "B) Software size based on functionality", "C) Test cases", "D) Bugs"], answer: "B",
        explanation: "Function Points: size metric based on user functionality."
    },
    {
        id: "se030", topic: "Software Engineering", subtopic: "Estimation", difficulty: "Medium",
        question: "LOC stands for:",
        options: ["A) List of Components", "B) Lines of Code", "C) Level of Complexity", "D) Length of Code"], answer: "B",
        explanation: "LOC: Lines of Code - simple size metric."
    },
    // MAINTENANCE
    {
        id: "se031", topic: "Software Engineering", subtopic: "Maintenance", difficulty: "Medium",
        question: "Corrective maintenance fixes:",
        options: ["A) Feature additions", "B) Bugs/errors discovered after release", "C) Performance issues", "D) Security updates"], answer: "B",
        explanation: "Corrective: fixing bugs and errors."
    },
    {
        id: "se032", topic: "Software Engineering", subtopic: "Maintenance", difficulty: "Medium",
        question: "Adaptive maintenance handles:",
        options: ["A) Bug fixes", "B) Changes in environment (OS, hardware)", "C) New features", "D) Performance"], answer: "B",
        explanation: "Adaptive: modifying software to work in changed environment."
    },
    {
        id: "se033", topic: "Software Engineering", subtopic: "Maintenance", difficulty: "Medium",
        question: "Perfective maintenance adds:",
        options: ["A) Bug fixes", "B) New features and improvements", "C) Emergency patches", "D) Nothing"], answer: "B",
        explanation: "Perfective: enhancements, new features, improvements."
    },
    // MISC
    {
        id: "se034", topic: "Software Engineering", subtopic: "General", difficulty: "Easy",
        question: "Version control is used for:",
        options: ["A) Testing", "B) Tracking changes to source code", "C) Compilation", "D) Deployment only"], answer: "B",
        explanation: "Version control (Git, SVN) tracks code changes and history."
    },
    {
        id: "se035", topic: "Software Engineering", subtopic: "General", difficulty: "Easy",
        question: "CI/CD stands for:",
        options: ["A) Complete Integration/Complete Delivery", "B) Continuous Integration/Continuous Deployment", "C) Code Integration/Code Delivery", "D) Central Integration/Central Delivery"], answer: "B",
        explanation: "CI/CD: Continuous Integration and Continuous Deployment/Delivery."
    },
    // MORE SOFTWARE ENGINEERING QUESTIONS
    {
        id: "se036", topic: "Software Engineering", subtopic: "SDLC", difficulty: "Medium",
        question: "V-model is also called:",
        options: ["A) Spiral model", "B) Verification and Validation model", "C) Waterfall model", "D) Agile model"], answer: "B",
        explanation: "V-model: testing phases parallel to development phases (verification/validation)."
    },
    {
        id: "se037", topic: "Software Engineering", subtopic: "SDLC", difficulty: "Medium",
        question: "RAD stands for:",
        options: ["A) Rapid Application Development", "B) Random Application Design", "C) Required Application Development", "D) Regular Application Development"], answer: "A",
        explanation: "RAD: faster development through prototyping, iterative development."
    },
    {
        id: "se038", topic: "Software Engineering", subtopic: "SDLC", difficulty: "Medium",
        question: "Incremental model delivers:",
        options: ["A) Everything at once", "B) Working increments in each iteration", "C) Nothing until end", "D) Only documentation"], answer: "B",
        explanation: "Incremental: deliver partial functionality each iteration, grow incrementally."
    },
    {
        id: "se039", topic: "Software Engineering", subtopic: "Agile", difficulty: "Medium",
        question: "Scrum Master role is:",
        options: ["A) Project manager", "B) Facilitator who removes impediments", "C) Developer", "D) Product Owner"], answer: "B",
        explanation: "Scrum Master: facilitates process, removes obstacles, coaches team."
    },
    {
        id: "se040", topic: "Software Engineering", subtopic: "Agile", difficulty: "Medium",
        question: "Sprint retrospective focuses on:",
        options: ["A) Product features", "B) Team's process improvement", "C) Customer feedback", "D) Bug fixing"], answer: "B",
        explanation: "Retrospective: what went well, what to improve, action items."
    },
    {
        id: "se041", topic: "Software Engineering", subtopic: "Agile", difficulty: "Medium",
        question: "User story format is typically:",
        options: ["A) Detailed specification", "B) As a <role>, I want <feature> so that <benefit>", "C) Use case diagram", "D) Class diagram"], answer: "B",
        explanation: "User story: simple description of feature from user perspective."
    },
    {
        id: "se042", topic: "Software Engineering", subtopic: "Agile", difficulty: "Medium",
        question: "Velocity in Agile measures:",
        options: ["A) Code quality", "B) Amount of work completed per sprint", "C) Bug count", "D) Test coverage"], answer: "B",
        explanation: "Velocity: story points or work units completed per sprint."
    },
    {
        id: "se043", topic: "Software Engineering", subtopic: "Agile", difficulty: "Medium",
        question: "Kanban focuses on:",
        options: ["A) Fixed iterations", "B) Visualizing workflow and limiting WIP", "C) Heavy planning", "D) No visualization"], answer: "B",
        explanation: "Kanban: visual board, limit work in progress, continuous flow."
    },
    {
        id: "se044", topic: "Software Engineering", subtopic: "Requirements", difficulty: "Medium",
        question: "Use case diagram shows:",
        options: ["A) Class relationships", "B) Actors and their interactions with system", "C) Data flow", "D) Sequence of events"], answer: "B",
        explanation: "Use case: actors (users) and system functionality interactions."
    },
    {
        id: "se045", topic: "Software Engineering", subtopic: "Requirements", difficulty: "Hard",
        question: "Data Dictionary contains:",
        options: ["A) Only keywords", "B) Definitions of data elements and structures", "C) Only code", "D) Only diagrams"], answer: "B",
        explanation: "Data dictionary: centralized repository of data definitions."
    },
    {
        id: "se046", topic: "Software Engineering", subtopic: "Design", difficulty: "Hard",
        question: "Content coupling is:",
        options: ["A) Best coupling", "B) Worst: module directly accesses another's internal data", "C) Medium level", "D) No coupling"], answer: "B",
        explanation: "Content coupling: one module modifies another's code/data - worst form."
    },
    {
        id: "se047", topic: "Software Engineering", subtopic: "Design", difficulty: "Hard",
        question: "Data coupling is:",
        options: ["A) Worst coupling", "B) Best: modules share only data through parameters", "C) Never used", "D) Same as content coupling"], answer: "B",
        explanation: "Data coupling: only primitive data passed - best form of coupling."
    },
    {
        id: "se048", topic: "Software Engineering", subtopic: "Design", difficulty: "Hard",
        question: "Functional cohesion means:",
        options: ["A) Random elements", "B) All elements contribute to single well-defined function", "C) No cohesion", "D) Mixed purposes"], answer: "B",
        explanation: "Functional cohesion: module does one thing only - best form."
    },
    {
        id: "se049", topic: "Software Engineering", subtopic: "Design", difficulty: "Medium",
        question: "ER diagram is used for:",
        options: ["A) Process modeling", "B) Database design (entities and relationships)", "C) Code flow", "D) Testing"], answer: "B",
        explanation: "ER (Entity-Relationship) diagram: models database structure."
    },
    {
        id: "se050", topic: "Software Engineering", subtopic: "Design", difficulty: "Medium",
        question: "UML stands for:",
        options: ["A) United Modeling Language", "B) Unified Modeling Language", "C) Universal Modeling Language", "D) User Modeling Language"], answer: "B",
        explanation: "UML: Unified Modeling Language for software modeling."
    },
    {
        id: "se051", topic: "Software Engineering", subtopic: "Design", difficulty: "Medium",
        question: "Class diagram shows:",
        options: ["A) Data flow", "B) Classes, attributes, methods, relationships", "C) Sequence of actions", "D) State transitions"], answer: "B",
        explanation: "Class diagram: static structure of classes and their relationships."
    },
    {
        id: "se052", topic: "Software Engineering", subtopic: "Design", difficulty: "Medium",
        question: "Sequence diagram shows:",
        options: ["A) Class structure", "B) Object interactions over time", "C) State changes", "D) Data flow"], answer: "B",
        explanation: "Sequence diagram: messages between objects in time order."
    },
    {
        id: "se053", topic: "Software Engineering", subtopic: "Design", difficulty: "Medium",
        question: "State diagram represents:",
        options: ["A) Class relationships", "B) States and transitions of an object", "C) Data flow", "D) Sequence of messages"], answer: "B",
        explanation: "State diagram: object states and events causing transitions."
    },
    {
        id: "se054", topic: "Software Engineering", subtopic: "Testing", difficulty: "Hard",
        question: "Cyclomatic complexity measures:",
        options: ["A) Lines of code", "B) Number of independent paths through code", "C) Test cases only", "D) Memory usage"], answer: "B",
        explanation: "McCabe's cyclomatic complexity: V(G) = E - N + 2P (edges, nodes, components)."
    },
    {
        id: "se055", topic: "Software Engineering", subtopic: "Testing", difficulty: "Hard",
        question: "Path coverage is stronger than:",
        options: ["A) Nothing", "B) Branch coverage", "C) Only statement coverage", "D) All coverages"], answer: "B",
        explanation: "Path > Branch > Statement coverage (in strength)."
    },
    {
        id: "se056", topic: "Software Engineering", subtopic: "Testing", difficulty: "Medium",
        question: "Boundary value analysis tests:",
        options: ["A) Random values", "B) Values at boundaries of input domains", "C) Only middle values", "D) No values"], answer: "B",
        explanation: "BVA: test boundary values where errors commonly occur."
    },
    {
        id: "se057", topic: "Software Engineering", subtopic: "Testing", difficulty: "Medium",
        question: "Equivalence partitioning divides input into:",
        options: ["A) Random groups", "B) Classes that should behave similarly", "C) Code modules", "D) Functions"], answer: "B",
        explanation: "EP: partition inputs into equivalence classes, test one from each."
    },
    {
        id: "se058", topic: "Software Engineering", subtopic: "Testing", difficulty: "Medium",
        question: "Smoke testing is:",
        options: ["A) Detailed testing", "B) Quick basic functionality test", "C) Performance test", "D) Security test"], answer: "B",
        explanation: "Smoke test: basic tests to check if build is stable enough for further testing."
    },
    {
        id: "se059", topic: "Software Engineering", subtopic: "Testing", difficulty: "Medium",
        question: "Sanity testing is:",
        options: ["A) Complete testing", "B) Focused testing of specific functionality after changes", "C) Random testing", "D) Performance testing"], answer: "B",
        explanation: "Sanity: narrow, focused test to verify specific functionality works."
    },
    {
        id: "se060", topic: "Software Engineering", subtopic: "Testing", difficulty: "Hard",
        question: "Mutation testing measures:",
        options: ["A) Code coverage", "B) Effectiveness of test suite by introducing faults", "C) Performance", "D) Security"], answer: "B",
        explanation: "Mutation: small code changes (mutants), see if tests catch them."
    },
    {
        id: "se061", topic: "Software Engineering", subtopic: "Testing", difficulty: "Medium",
        question: "UAT stands for:",
        options: ["A) Unit Acceptance Testing", "B) User Acceptance Testing", "C) Universal Application Testing", "D) Unified Automation Testing"], answer: "B",
        explanation: "UAT: User Acceptance Testing - users verify system meets requirements."
    },
    {
        id: "se062", topic: "Software Engineering", subtopic: "Estimation", difficulty: "Hard",
        question: "COCOMO-II is:",
        options: ["A) Same as COCOMO", "B) Updated model for modern software development", "C) Simpler version", "D) Not used"], answer: "B",
        explanation: "COCOMO-II: updated for iterative development, reuse, prototyping."
    },
    {
        id: "se063", topic: "Software Engineering", subtopic: "Estimation", difficulty: "Medium",
        question: "Delphi technique for estimation uses:",
        options: ["A) Single expert", "B) Group of experts reaching consensus", "C) Automated tools only", "D) Historical data only"], answer: "B",
        explanation: "Delphi: anonymous expert estimates, iterate until consensus."
    },
    {
        id: "se064", topic: "Software Engineering", subtopic: "Estimation", difficulty: "Medium",
        question: "Planning Poker in Agile is used for:",
        options: ["A) Entertainment", "B) Estimating story points through team consensus", "C) Assigning tasks", "D) Testing"], answer: "B",
        explanation: "Planning Poker: team estimates stories using card-based consensus."
    },
    {
        id: "se065", topic: "Software Engineering", subtopic: "Maintenance", difficulty: "Medium",
        question: "Preventive maintenance:",
        options: ["A) Fixes bugs", "B) Restructures code to prevent future problems", "C) Adds features", "D) Adapts to new environment"], answer: "B",
        explanation: "Preventive: refactoring, documentation updates to prevent future issues."
    },
    {
        id: "se066", topic: "Software Engineering", subtopic: "Maintenance", difficulty: "Medium",
        question: "Emergency maintenance is:",
        options: ["A) Planned changes", "B) Unscheduled fixes for critical issues", "C) Feature addition", "D) Documentation update"], answer: "B",
        explanation: "Emergency: urgent patches for critical production issues."
    },
    {
        id: "se067", topic: "Software Engineering", subtopic: "Maintenance", difficulty: "Hard",
        question: "Software reengineering includes:",
        options: ["A) New development only", "B) Restructuring, reverse engineering, forward engineering", "C) Only testing", "D) Only documentation"], answer: "B",
        explanation: "Reengineering: analyze existing system, restructure and modernize."
    },
    {
        id: "se068", topic: "Software Engineering", subtopic: "Maintenance", difficulty: "Hard",
        question: "Reverse engineering:",
        options: ["A) Writing new code", "B) Analyzing existing system to understand its design", "C) Testing only", "D) Forward development"], answer: "B",
        explanation: "Reverse engineering: extract design from existing code."
    },
    {
        id: "se069", topic: "Software Engineering", subtopic: "General", difficulty: "Medium",
        question: "Code review helps in:",
        options: ["A) Nothing", "B) Finding bugs early, knowledge sharing, improving quality", "C) Slowing development", "D) Only documentation"], answer: "B",
        explanation: "Code review: early bug detection, knowledge transfer, better code."
    },
    {
        id: "se070", topic: "Software Engineering", subtopic: "General", difficulty: "Medium",
        question: "Technical debt refers to:",
        options: ["A) Financial debt", "B) Accumulated shortcuts that add future maintenance cost", "C) Nothing", "D) Hardware costs"], answer: "B",
        explanation: "Technical debt: quick fixes now that require more work later."
    },
    {
        id: "se071", topic: "Software Engineering", subtopic: "General", difficulty: "Medium",
        question: "Refactoring is:",
        options: ["A) Adding features", "B) Restructuring code without changing external behavior", "C) Bug fixing", "D) Testing"], answer: "B",
        explanation: "Refactoring: improve code structure while preserving functionality."
    },
    {
        id: "se072", topic: "Software Engineering", subtopic: "General", difficulty: "Medium",
        question: "DRY principle stands for:",
        options: ["A) Do Repeat Yourself", "B) Don't Repeat Yourself", "C) Development Ready Yet", "D) Design Review Yearly"], answer: "B",
        explanation: "DRY: avoid code duplication through abstraction."
    },
    {
        id: "se073", topic: "Software Engineering", subtopic: "General", difficulty: "Medium",
        question: "SOLID principles apply to:",
        options: ["A) Database design", "B) Object-oriented design", "C) Network design", "D) UI design only"], answer: "B",
        explanation: "SOLID: five OO design principles for maintainable code."
    },
    {
        id: "se074", topic: "Software Engineering", subtopic: "General", difficulty: "Hard",
        question: "Single Responsibility Principle states:",
        options: ["A) Class should do everything", "B) Class should have only one reason to change", "C) No classes needed", "D) Many responsibilities per class"], answer: "B",
        explanation: "SRP: each class/module should have one responsibility."
    },
    {
        id: "se075", topic: "Software Engineering", subtopic: "General", difficulty: "Hard",
        question: "Open/Closed Principle states:",
        options: ["A) Always modify existing code", "B) Open for extension, closed for modification", "C) Never extend", "D) Always close classes"], answer: "B",
        explanation: "OCP: extend behavior without modifying existing code."
    },
    {
        id: "se076", topic: "Software Engineering", subtopic: "Design", difficulty: "Hard",
        question: "Design pattern is:",
        options: ["A) Random solution", "B) Reusable solution to common design problem", "C) Anti-pattern", "D) No pattern"], answer: "B",
        explanation: "Design patterns: proven solutions to recurring design problems."
    },
    {
        id: "se077", topic: "Software Engineering", subtopic: "Design", difficulty: "Hard",
        question: "Singleton pattern ensures:",
        options: ["A) Multiple instances", "B) Only one instance of class exists", "C) No instances", "D) Infinite instances"], answer: "B",
        explanation: "Singleton: exactly one instance, global access point."
    },
    {
        id: "se078", topic: "Software Engineering", subtopic: "Design", difficulty: "Hard",
        question: "Factory pattern:",
        options: ["A) Destroys objects", "B) Creates objects without specifying exact class", "C) Never creates objects", "D) Only creates primitives"], answer: "B",
        explanation: "Factory: encapsulate object creation logic."
    },
    {
        id: "se079", topic: "Software Engineering", subtopic: "Design", difficulty: "Hard",
        question: "Observer pattern is used for:",
        options: ["A) Database access", "B) One-to-many dependency where changes notify observers", "C) Single objects", "D) Only UI"], answer: "B",
        explanation: "Observer: subject notifies dependent observers of state changes."
    },
    {
        id: "se080", topic: "Software Engineering", subtopic: "Design", difficulty: "Hard",
        question: "MVC stands for:",
        options: ["A) Model View Control", "B) Model View Controller", "C) Multiple View Component", "D) Main View Container"], answer: "B",
        explanation: "MVC: separates data (Model), presentation (View), logic (Controller)."
    },
    {
        id: "se081", topic: "Software Engineering", subtopic: "Testing", difficulty: "Medium",
        question: "TDD stands for:",
        options: ["A) Test Driven Design", "B) Test Driven Development", "C) Total Design Document", "D) Test Document Development"], answer: "B",
        explanation: "TDD: write tests first, then code to pass tests."
    },
    {
        id: "se082", topic: "Software Engineering", subtopic: "Testing", difficulty: "Medium",
        question: "BDD stands for:",
        options: ["A) Bug Driven Development", "B) Behavior Driven Development", "C) Build Design Document", "D) Basic Design Development"], answer: "B",
        explanation: "BDD: specify behavior in natural language, then implement."
    },
    {
        id: "se083", topic: "Software Engineering", subtopic: "Testing", difficulty: "Medium",
        question: "Code coverage tool measures:",
        options: ["A) Performance", "B) Percentage of code executed by tests", "C) Security", "D) Memory usage"], answer: "B",
        explanation: "Code coverage: tracks which code lines/branches tests exercise."
    },
    {
        id: "se084", topic: "Software Engineering", subtopic: "General", difficulty: "Medium",
        question: "DevOps combines:",
        options: ["A) Only development", "B) Development and Operations for faster delivery", "C) Only operations", "D) Only testing"], answer: "B",
        explanation: "DevOps: collaboration between dev and ops for continuous delivery."
    },
    {
        id: "se085", topic: "Software Engineering", subtopic: "General", difficulty: "Medium",
        question: "Microservices architecture:",
        options: ["A) Single monolith", "B) Small, independent, loosely coupled services", "C) No services", "D) Tightly coupled modules"], answer: "B",
        explanation: "Microservices: independently deployable services communicating via APIs."
    },
    {
        id: "se086", topic: "Software Engineering", subtopic: "General", difficulty: "Medium",
        question: "API stands for:",
        options: ["A) Application Process Interface", "B) Application Programming Interface", "C) Automatic Program Integration", "D) Application Protocol Interface"], answer: "B",
        explanation: "API: interface for software components to communicate."
    },
    {
        id: "se087", topic: "Software Engineering", subtopic: "General", difficulty: "Medium",
        question: "REST API is:",
        options: ["A) SOAP-based", "B) Stateless, uses HTTP methods", "C) Always uses XML", "D) Connection-oriented"], answer: "B",
        explanation: "REST: Representational State Transfer, stateless HTTP-based API."
    },
    {
        id: "se088", topic: "Software Engineering", subtopic: "Testing", difficulty: "Medium",
        question: "Load testing checks:",
        options: ["A) Functionality", "B) System behavior under expected load", "C) Security", "D) UI only"], answer: "B",
        explanation: "Load testing: verify performance under normal expected load."
    },
    {
        id: "se089", topic: "Software Engineering", subtopic: "Testing", difficulty: "Medium",
        question: "Stress testing checks:",
        options: ["A) Normal operation", "B) System behavior beyond normal capacity", "C) Only features", "D) UI design"], answer: "B",
        explanation: "Stress testing: push system beyond limits to find breaking point."
    },
    {
        id: "se090", topic: "Software Engineering", subtopic: "General", difficulty: "Hard",
        question: "Technical feasibility study evaluates:",
        options: ["A) Cost only", "B) Whether current technology can implement proposed system", "C) Market only", "D) User acceptance only"], answer: "B",
        explanation: "Technical feasibility: can we build this with available technology?"
    }
];
export default softwareEngineeringQuestions;
