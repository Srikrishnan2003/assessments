
export const hrQuestions = [
    {
        id: 'hi-hr-001',
        question: 'Tell me about yourself.',
        answer: `**Exact Answer Script:**

"I am Srikrishnan B, a Master's student in Computer Science at Sri Krishna College of Engineering and Technology. I am a Full-Stack developer specializing in **Next.js, React, and Java**. My technical depth comes from building complex projects like **WebForge** (a visual website builder using ASTs) and a **Local-First GST Filing App**. I also have corporate exposure through internships at **Virtusa** (building a Banking Charge Management System) and **Accenture** (GenAI tools). I am passionate about solving architectural challenges and am excited to join HashedIn to work on scalable, cloud-native SaaS products."`
    },
    {
        id: 'hi-hr-002',
        question: 'Why HashedIn by Deloitte?',
        answer: `**Exact Answer Script:**

"I have done my research, and there are three specific reasons why HashedIn is my top choice:

1.  **HashedIn University:** I’ve read about your 2-month rigorous training program for freshers. As someone who loves deep-diving into tech (like I did with Next.js 15 for my project), I value an organization that invests heavily in upskilling its employees before putting them on projects.
2.  **Modern Tech Stack:** Unlike many service companies that work on legacy maintenance projects, HashedIn is known for working on modern SaaS products and cloud-native technologies. My skills in **React, Next.js, and AWS** align perfectly with the kind of work HashedIn does.
3.  **Deloitte’s Ecosystem:** Being part of the Deloitte network means I get the agility and culture of a tech-focused firm like HashedIn, but the scale and global exposure of Deloitte. It’s the best of both worlds."`
    },
    {
        id: 'hi-hr-003',
        question: 'What are your greatest strengths?',
        answer: `**Exact Answer Script:**

"My greatest strength is my **Product Mindset** combined with technical depth.

Most developers write code to valid syntax; I write code to solve user problems. For example, in my GST project, I didn't just write a parser. I realized that uploading financial data to a server is a privacy risk for accountants. So, I learnt about **Web Workers** and **Client-Side processing** to build a 'Local-First' architecture.

Technically, my adaptability is my strength. I jumped from **Java** (for my backend class) to **Next.js 15** (for my final year project) and **GenAI** (for my internship) very quickly. I don't fear new tools; I learn them by building things."`
    },
    {
        id: 'hi-hr-004',
        question: 'What is your biggest weakness?',
        answer: `**Exact Answer Script:**

"I sometimes struggle with **Perfectionism**, specifically spending too much time optimizing code that isn't critical.

For instance, in my WebForge project, I spent 3 days trying to make the code generator produce 'perfectly formatted' code with specific indentation, which delayed the actual drag-and-drop feature.

I’ve realized that shipping is better than perfect. I now use a **Kanban board** (like I built in my 'Focus Flow' project) to set strict deadlines for tasks. If a non-critical task exceeds its time box, I move on and mark it for 'refactoring later'. This helps me stay productive."`
    },
    {
        id: 'hi-hr-005',
        question: 'Describe a time you faced a conflict in a team. How did you handle it?',
        answer: `**Exact Answer Script:**

"During my Virtusa Capstone project (Charge Management System), there was a conflict regarding the database. My teammate wanted to use **MongoDB** because it's flexible for storing rules. I argued for **MySQL**.

The conflict stalled development for a day. Instead of just arguing, I created a small **Proof of Concept**. I showed that since we are building a *Banking Application*, we need ACID transactions (for money) which SQL handles better. However, to address his concern about flexibility, I demonstrated how we could use a **JSON column** inside MySQL to store the dynamic rules.

This 'Hybrid approach' satisfied both needs—Data Integrity for transactions and Flexibility for rules. The team agreed, and we moved forward. I learned that conflicts are best resolved with data and compromise, not just opinions."`
    },
    {
        id: 'hi-hr-006',
        question: 'What is the biggest challenge you faced in your project?',
        answer: `**Exact Answer Script:**

"The hardest technical challenge was implementing **Bidirectional Synchronization** in my WebForge project.

The Goal: If I drop a button on the canvas, the code updates. IF I type code in the editor, the canvas updates.
The Problem: Infinite loops. Canvas updates Code -> Code triggers re-parse -> Parser updates Canvas -> Loop.

**Solution:** I had to implement a 'Source of Truth' check. I created a syncing engine that checks *where* the change came from. If the user is typing, I pause the Canvas-to-Code generator. I also used **Debouncing** to only re-parse the AST after the user stops typing for 500ms. Solving this race condition was incredibly satisfying."`
    },
    {
        id: 'hi-hr-007',
        question: 'Where do you see yourself in 5 years?',
        answer: `**Exact Answer Script:**

"In 5 years, I see myself as a **Technical Architect** or a **Senior Full Stack Engineer** at HashedIn.

I want to move beyond just writing components to designing entire systems. I want to be the person who decides *why* we use Microservices vs Monolith for a specific client. I also am passionate about mentoring. By then, I hope to be guiding freshers graduating from HashedIn University, just as I hope to be guided now."`
    },
    {
        id: 'hi-hr-008',
        question: 'If you received ₹10 Crore today, what would you do?',
        answer: `**Exact Answer Script:**

"That’s a life-changing amount! I would approach it sequentially:

1.  **Security (30%):** I would secure my parents' retirement and cover any immediate family needs.
2.  **Investment (40%):** I would invest in low-risk index funds and real estate to ensure passive income.
3.  **Innovation (20%):** I would seed-fund my own SaaS idea—WebForge. With capital, I could hire a small team to turn my final year project into a real competitor to Webflow.
4.  **Philanthropy (10%):** I would fund a scholarship for students in my college who can't afford laptops, as access to hardware is the first step to becoming a developer.

Even with the money, I would continue working because I genuinely love the craft of building software."`
    },
    {
        id: 'hi-hr-009',
        question: 'How do you handle pressure?',
        answer: `**Exact Answer Script:**

"I handle pressure by breaking big scary problems into small, boring tasks.

For example, during my **GST Project**, I had my semester exams and the project submission in the same week. It was overwhelming.
I sat down and utilized the **Eisenhower Matrix**.
1.  **Urgent & Important:** Fixing the critical 'JSON Export' bug. (Did this first).
2.  **Important, Not Urgent:** UI Polish. (Scheduled for late night).
3.  **Not Important:** Adding 'Dark Mode'. (I cut this feature entirely).

By ruthlessly prioritizing and cutting scope, I delivered a working MVP on time. Pressure clears my mind to focus on what actually matters."`
    },
    {
        id: 'hi-hr-010',
        question: 'What is your salary expectation?',
        answer: `**Exact Answer Script:**

"As a fresher, my priority is the role, the mentorship at HashedIn University, and the quality of projects. I am open to the standard compensation package that HashedIn by Deloitte offers to freshers with my qualification level, as I believe it will be fair and competitive with the market standards."`
    },
    {
        id: 'hi-hr-011',
        question: 'Are you willing to relocate?',
        answer: `**Exact Answer Script:**

"Yes, absolutely. I am fully prepared to relocate to Bangalore, Gurgaon, or any location where the team needs me. I see relocation as an opportunity to build a new network, learn from my seniors in person, and immerse myself fully in the corporate culture."`
    },
    {
        id: 'hi-hr-012',
        question: 'What do you know about HashedIn?',
        answer: `**Exact Answer Script:**

"HashedIn was founded in 2010 and acquired by Deloitte in 2020. Ideally, it works as a high-end product development shop.
You are famous for your **SaaS** expertise and cloud-native application development.
I also know about **HashedIn University**, which is your rigorous bootcamp for new hires.
Your values include 'Trust', 'Respect', and 'Customer Success'.
I also recently saw on LinkedIn that HashedIn hosted a major hackathon for GenAI, which shows the company is pushing boundaries in AI, an area I have experience in with my DeepSeek project."`
    },
    {
        id: 'hi-hr-013',
        question: 'Do you have any questions for us?',
        answer: `**Exact Answer Script:**

"Yes, I have two questions:

1.  'I read about HashedIn University—could you tell me a bit more about how the evaluation happens there? Is it project-based?'
2.  'Given my background in Next.js and React, what kind of projects would a fresher typically start with? Would it be internal tools or client-facing applications?'"`
    },
    {
        id: 'hi-hr-014',
        question: 'Describe your ideal work culture.',
        answer: `**Exact Answer Script:**

"My ideal culture is one that balances **Autonomy** and **Collaboration**.
I thrive when I'm given a clear goal (like 'Build this parser') but the freedom to choose the implementation (like 'Using Web Workers').
At the same time, I want a culture where asking questions is encouraged. In my internship, we had 'No Judgement' Fridays where we could ask 'dumb' questions. That psychological safety made us learn 10x faster. I hope to find that at HashedIn."`
    },
    {
        id: 'hi-hr-015',
        question: 'How do you keep yourself updated?',
        answer: `**Exact Answer Script:**

"I don't just consume content; I try to build with it.
1.  **Newsletters:** I subscribe to 'Bytes' and 'This Week in React'.
2.  **Implementation:** When **Next.js 15** came out recently, I didn't just read the docs. I tried to upgrade my WebForge project to use the new \`use cache\` directive to understand how it breaks existing code.
3.  **Community:** I follow engineering blogs of companies like Uber, Netflix, and of course, Deloitte to understand system design at scale."`
    },
    {
        id: 'hi-hr-016',
        question: 'If you were an animal, which one would you be?',
        answer: `**Exact Answer Script:**

"I would be an **Ant**.
Individually, an ant can carry 50x its body weight—meaning I work hard and pull my weight.
But more importantly, ants are the ultimate **team players**. They build massive, complex colonies (architectures) through perfect collaboration and communication. They don't have ego; they just care about the colony's success. That’s how I view my role in a software team."`
    },
    {
        id: 'hi-hr-017',
        question: 'What differentiates you from other candidates?',
        answer: `**Exact Answer Script:**

"Two things: **Deployments** and **Complexity**.
Many candidates have 'ToDo' apps on their resume. I have a production-grade **Visual Website Builder** that deals with AST parsing and a **Banking System** that handles transactions.
I haven't just watched tutorials; I've faced the 'Why is this not working?' frustration at 2 AM and solved it. I come with the grit to debug complex systems, which I believe makes me 'project-ready' faster than others."`
    },
    {
        id: 'hi-hr-018',
        question: 'How would you explain an API to a non-technical person?',
        answer: `**Exact Answer Script:**

"I would use the **Restaurant** analogy.
Imagine you (the User) are sitting at a table in a restaurant. The Kitchen (the Server) is where the food is prepared.
You cannot just walk into the kitchen and start cooking. You need a messenger.
The **Waiter** is the **API**.
You give the waiter your Order (Request). He takes it to the kitchen. The kitchen cooks it. He brings you the Food (Response).
You don't need to know how the stove works; you just need to know how to order from the menu. That menu is the API Documentation."`
    },
    {
        id: 'hi-hr-019',
        question: 'Tell me about a time you made a mistake.',
        answer: `**Exact Answer Script:**

"In my GST project, I initially calculated tax on the client-side using standard JavaScript floating point math (\`0.1 + 0.2\`).
I didn't realize that in JS, this equals \`0.300000004\`.
This caused a rounding error of 1 rupee in a total of 10 Lakhs. For a tax app, this is unacceptable.
**The Fix:** I learned about the \`Decimal.js\` library for precise financial calculations.
**The Lesson:** Never trust standard floating-point math for money. I now always double-check edge cases involving currency."`
    },
    {
        id: 'hi-hr-020',
        question: 'What is your opinion on Hustle Culture?',
        answer: `**Exact Answer Script:**

"I believe in **Hard Work**, not Burnout.
There are times—like before a release or a hackathon—where we need to sprint and hustle. I enjoy that adrenaline.
However, sustainable code requires a clear mind. 'Hustle culture' that glorifies working 18 hours every day usually leads to bugs and technical debt. I prefer 'Focused Work'—6 hours of deep, uninterrupted coding is valuable than 12 hours of distracted work."`
    },
    {
        id: 'hi-hr-021',
        question: 'How would you handle a boring task?',
        answer: `**Exact Answer Script:**

"I try to **Automate** it.
In my internship, we had to manually format JSON files for testing every day. It was boring and took 30 mins.
I spent a weekend writing a Python script to do it automatically.
If I can't automate it, I try to understand the 'Why'. Knowing that writing unit tests (which can be boring) prevents my code from breaking in production (which is stressful) gives meaning to the boring task. I just put on my headphones and get it done."`
    },
    {
        id: 'hi-hr-022',
        question: 'What motivates you?',
        answer: `**Exact Answer Script:**

"Seeing someone **use** what I built.
When I built the 'Focus Flow' app and saw my friends actually using it to manage their assignments, it was the best feeling.
It’s not just about the code; it’s about the impact. Knowing that my code at HashedIn could be used by millions of Deloitte's clients is a huge motivation for me."`
    },
    {
        id: 'hi-hr-023',
        question: 'Describe your family background.',
        answer: `**Exact Answer Script:**

"I come from a middle-class family rooted in [Your City, e.g., Coimbatore]. My father is a [Father's Occupation] and my mother is a [Mother's Occupation].
They taught me the value of education and integrity. My dad always emphasized 'doing things the right way even if it takes longer', which translates to how I write clean code today."`
    },
    {
        id: 'hi-hr-024',
        question: 'Why should we hire you?',
        answer: `**Exact Answer Script:**

"You should hire me because I am **Low Maintenance** and **High ROI**.
1.  **Technical:** I already know your stack (Next.js, Java). You won't have to train me on the basics. I can start contributing to sprints in Week 1.
2.  **Cultural:** I have internship experience, so I know how corporate communication, git flow, and standups work.
I am hungry to learn, I have proof of my skills (my projects), and I am ready to work hard."`
    },
    {
        id: 'hi-hr-025',
        question: 'Who is your role model?',
        answer: `**Exact Answer Script:**

"In the tech world, I look up to **Guillermo Rauch** (CEO of Vercel).
He didn't just build a company; he focused on 'Developer Experience'. He made the web faster for everyone.
I admire his ability to simplify complex problems (like making serverless easy with Next.js). I try to bring that same clarity and user-focus to my own projects."`
    },
    {
        id: 'hi-hr-026',
        question: 'What is HashedIn University?',
        answer: `**Exact Answer Script:**
"From my research, I understand HashedIn University (HU) is your flagship 2-month bootcamp for campus hires.
It differentiates HashedIn from other companies because it's not just generic training—it simulates a real project environment.
I know there are 'Milestones' we have to clear, and it covers the full stack (Back-end, Front-end, DevOps). I am really excited about the 'Shadow Mode' phase where we get to observe live projects."`
    }
];
