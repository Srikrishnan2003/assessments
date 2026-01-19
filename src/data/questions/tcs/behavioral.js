// TCS Prime Interview - Behavioral Questions

export const behavioralQuestions = [
  {
    id: 'tcs124',
    question: 'Describe a time you had to learn a new technology quickly',
    answer: `### Using STAR Format

**Situation**: When building WebForge, I needed to integrate Monaco Editor (the code editor used in VS Code) for real-time code editing. I had limited experience with this library, and the deadline was tight - one week to create a working prototype.

**Task**: I needed to implement a functional code editor with syntax highlighting, auto-complete, and multi-file support. This was a core feature that would make or break the project.

**Action**: I approached systematically:
1. **Day 1-2**: Read official Monaco documentation and understood the API structure
2. **Day 3**: Studied VS Code implementation on GitHub to see real-world patterns
3. **Day 4-5**: Built a minimal working version with basic features
4. **Day 6-7**: Iteratively added features - syntax highlighting, multiple languages, auto-save
5. Throughout, I used GitHub Copilot to understand complex patterns faster

**Result**: Delivered a fully functional code editor in one week. The component is now the heart of WebForge and handles syntax highlighting for 10+ languages. This taught me to:
- Break complex problems into smaller, daily goals
- Leverage official documentation first
- Use AI tools to accelerate learning
- Start simple, iterate to add features

### Key Takeaway
*"Fast learning isn't about rushing - it's about structured progress and knowing which resources to use."*`
  },
  {
    id: 'tcs125',
    question: 'Tell me about a time you disagreed with a team member',
    answer: `### Using STAR Format

**Situation**: During the Charge Management System project at Virtusa, a team member suggested storing sensitive charge configurations in localStorage for faster access. I disagreed with this approach due to security concerns.

**Task**: I needed to voice my concerns professionally while maintaining a positive working relationship. The technical decision could have security implications for our banking client.

**Action**:
1. **Listened fully** to understand their reasoning - they wanted faster page loads
2. **Researched** XSS vulnerabilities and localStorage security issues
3. **Prepared evidence** - OWASP guidelines, security best practices documentation
4. **Proposed alternative**: Encrypted session tokens with server-side storage, which addressed both speed (cached on server) and security (not exposed to client)
5. **Presented both options** to the team with pros/cons of each

**Result**: The team agreed on the more secure approach. The colleague appreciated that I:
- Didn't dismiss their idea outright
- Backed my suggestion with facts, not opinions
- Offered a solution that addressed their concern (speed) too

The feature was implemented securely, and we passed the security audit without issues.

### Key Takeaway
*"Constructive disagreement with evidence leads to better solutions. It's about solving the problem together, not winning an argument."*`
  },
  {
    id: 'tcs126',
    question: 'How do you handle tight deadlines?',
    answer: `### Using STAR Format

**Situation**: During my Accenture internship, I was assigned to deliver the GenAI Developer Assistant in a compressed timeframe. The original timeline was cut by 30% due to a client demo schedule change.

**Task**: Deliver a working AI assistant that could generate code, maintain conversation context, and handle multiple programming languages - in just 2 weeks instead of 3.

**Action**: I used my **MIP framework** (Most Important Problem first):
1. **Prioritized ruthlessly**: Identified MVP features (code generation, basic memory) vs nice-to-haves (syntax themes, export)
2. **Daily milestones**: Broke the project into daily deliverables with clear completion criteria
3. **Communicated proactively**: Informed the manager about realistic scope and potential trade-offs
4. **Focused sessions**: Used Pomodoro technique (25-min focused work + 5-min break)
5. **Leveraged tools**: Used GitHub Copilot to accelerate boilerplate code

**Result**: Delivered the core assistant on time. The demo was successful. Nice-to-have features were added in the following week. 

Key outcomes:
- Client was impressed with the working prototype
- I learned that clear scope management prevents burnout
- The manager appreciated transparent communication about trade-offs

### Key Takeaway
*"Tight deadlines require clear priorities. Deliver a working solution first, then iterate."*`
  },
  {
    id: 'tcs127',
    question: "Describe a project that didn't go as planned",
    answer: `### Using STAR Format

**Situation**: In an early version of Focus Flow (my productivity app), I decided to build the whiteboard/canvas feature from scratch instead of using an existing library.

**Task**: Create an infinite canvas for brainstorming and note-taking that would integrate seamlessly with the rest of the app.

**Action** (What went wrong):
1. Started building custom canvas handling - pan, zoom, draw functionality
2. Spent 2 weeks implementing features that libraries solve in hours
3. Realized I was solving problems already solved by Excalidraw, React-Canvas, etc.
4. The custom implementation had performance issues with many elements

**Pivot** (What I did to fix it):
1. Stopped building from scratch after honest self-assessment
2. Evaluated existing libraries (Excalidraw, React-Canvas, Fabric.js)
3. Integrated Excalidraw with custom styling to match Focus Flow's design
4. Saved 3+ weeks of development time

**Result**: The whiteboard feature shipped faster and with better performance than my custom version would have had. 

Lessons learned:
- **Build vs Buy**: Evaluate existing solutions before building custom
- **Sunk cost fallacy**: It's okay to throw away work that isn't serving the goal
- **Time is finite**: Use it on problems unique to your product

### Key Takeaway
*"Not every problem needs to be solved from scratch. Know when to leverage existing tools."*`
  },
  {
    id: 'tcs128',
    question: 'How do you keep your code maintainable?',
    answer: `### My Code Quality Principles

I follow a set of practices that make code easy to read, modify, and extend:

**1. Clear Naming**
\`\`\`javascript
// ❌ Bad
const d = calcD(u, p);

// ✅ Good
const discountedPrice = calculateDiscount(userTier, basePrice);
\`\`\`

**2. Single Responsibility**
Each function/class does ONE thing well
\`\`\`javascript
// ❌ Bad - Does too much
function handleUserLogin(email, password) {
  validateEmail(email);
  hashPassword(password);
  checkDatabase();
  createSession();
  sendWelcomeEmail();
  logAnalytics();
}

// ✅ Good - Separated concerns
function handleLogin(email, password) {
  const user = authenticate(email, password);
  createSession(user);
  onLoginSuccess(user);  // Handles email, analytics, etc.
}
\`\`\`

**3. DRY Principle** (Don't Repeat Yourself)
Extract common logic into reusable functions

**4. Meaningful Comments**
Explain WHY, not WHAT
\`\`\`javascript
// ❌ Bad
i++; // increment i

// ✅ Good
// Using insertion sort here because array is nearly sorted (benchmark showed 3x faster than quicksort)
insertionSort(nearlyOrderedArray);
\`\`\`

**5. Consistent Formatting**
ESLint + Prettier ensure everyone's code looks the same

**6. TypeScript for Type Safety**
Catches errors at compile time, provides better autocomplete

**7. Modular Structure**
Organized folders: components, hooks, utils, services

**8. Documentation**
README, API docs, JSDoc comments for complex functions

**9. Tests**
Unit tests ensure code works as expected and prevents regressions

### Why This Matters
*"Code is read far more often than it's written. Write for your future self and your teammates."*`
  },
  {
    id: 'tcs129',
    question: 'What motivates you in software development?',
    answer: `### What Drives Me

**1. Solving Real Problems**
There's deep satisfaction in seeing people use something I built. When WebForge helps a developer prototype faster, or when my GST software saves hours of manual work - that's the payoff.

**2. The Building Process**
I love the cycle of: idea → design → code → working product. Taking an abstract concept and making it tangible through code is creatively fulfilling.

**3. Continuous Learning**
Technology evolves constantly. Last year I learned:
- Next.js App Router and Server Components
- AI integration with Hugging Face models
- Prompt engineering for code generation

There's always something new to master, which keeps the work exciting.

**4. Immediate Feedback**
Unlike many professions, programming gives instant feedback. Write code → run it → see results. This tight feedback loop is addictive.

**5. Community and Sharing**
Contributing to open-source, helping on Stack Overflow, building tools that others can use - there's a sense of giving back to the community that taught me.

**6. Impact at Scale**
One line of code can impact thousands of users. Few professions offer that leverage.

### Why TCS Fits
TCS offers:
- Complex enterprise problems to solve
- Exposure to diverse industries and technologies
- Structured growth path with learning opportunities
- Collaborative environment with experienced developers

*"I'm motivated by meaningful work that challenges me and helps others."*`
  },
  {
    id: 'tcs130',
    question: 'How do you handle constructive criticism?',
    answer: `### My Approach to Feedback

**I view criticism as free advice for improvement.** Here's how I handle it:

**Real Example from Virtusa:**
During code reviews, I received feedback that my API endpoints lacked proper error handling. Instead of being defensive:

**1. Listened Actively**
I asked for specific examples: "Could you show me where the error handling is insufficient?"

**2. Sought to Understand**
I asked about best practices: "What error handling patterns do you recommend for this scenario?"

**3. Researched**
I studied proper error handling patterns:
- Centralized error middleware
- Custom error classes
- Consistent error response format
- Proper HTTP status codes

**4. Implemented Improvements**
\`\`\`javascript
// Before (no handling)
app.get('/users/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

// After (proper handling)
app.get('/users/:id', async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) throw new NotFoundError('User not found');
    res.json(user);
  } catch (err) {
    next(err);  // Centralized error handler
  }
});
\`\`\`

**5. Applied Learning Forward**
Now I apply these patterns in all my projects, including WebForge and personal work.

### Key Takeaway
*"The best developers I know actively seek criticism. It's faster than learning from mistakes."*

**What I don't do:**
- Get defensive or make excuses
- Take it personally
- Dismiss feedback without consideration

**What I do:**
- Thank the reviewer for taking time
- Ask clarifying questions
- Apply feedback consistently going forward`
  },
];

export default behavioralQuestions;
