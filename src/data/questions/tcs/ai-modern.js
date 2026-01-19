// TCS Prime Interview - AI & Modern Development Questions

export const aiModernQuestions = [
    {
        id: 'tcs049',
        question: 'How do you use AI tools in development?',
        answer: `### My AI-Assisted Development Workflow

#### Tools I Use Daily

| Tool | Purpose | How I Use It |
|------|---------|--------------|
| **GitHub Copilot** | Code completion | Autocomplete, function generation |
| **ChatGPT/Claude** | Problem solving | Debug help, architecture ideas |
| **v0.dev** | UI generation | Quick component prototypes |

---

#### Practical Examples

**1. Boilerplate Generation**
\`\`\`javascript
// I type a comment describing what I need:
// Create a React hook for debounced search with cleanup

// Copilot generates:
function useDebouncedSearch(searchTerm, delay = 300) {
  const [debouncedValue, setDebouncedValue] = useState(searchTerm);
  
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(searchTerm);
    }, delay);
    
    return () => clearTimeout(handler);
  }, [searchTerm, delay]);
  
  return debouncedValue;
}
\`\`\`

**2. Understanding Unfamiliar Code**
\`\`\`
Me: "Explain this regex: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$]).{8,}$/"

AI: "This validates passwords requiring:
- At least one uppercase letter (?=.*[A-Z])
- At least one digit (?=.*[0-9])
- At least one special character (?=.*[!@#$])
- Minimum 8 characters {8,}"
\`\`\`

**3. Debugging Assistance**
\`\`\`
Me: "Why is this React component re-rendering infinitely?"
[paste code]

AI: "The issue is your useEffect dependency includes 'data'
which you're also setting inside the effect. This creates a loop.
Solution: Use a ref for 'data' or restructure the effect."
\`\`\`

---

#### What I DON'T Do

❌ Copy-paste without understanding
❌ Rely on AI for architecture decisions
❌ Skip testing AI-generated code
❌ Use AI for sensitive business logic without review

---

#### My Prompt Engineering Techniques
1. **Be specific**: "JavaScript ES6, no jQuery" not just "write code"
2. **Provide context**: Include error messages, expected behavior
3. **Iterate**: Ask follow-up questions to refine output
4. **Verify**: Test AI code before committing

---

### Why This Matters
*"AI tools are force multipliers. The developers who learn to use them effectively will be significantly more productive."*`
    },
    {
        id: 'tcs050',
        question: 'Explain Agile methodology and your experience with it',
        answer: `### Agile Development Experience

#### What Is Agile?
Agile is an iterative approach to software development that emphasizes:
- **Short cycles** (sprints of 1-2 weeks)
- **Working software** over extensive documentation
- **Customer collaboration** over contract negotiation
- **Responding to change** over following a rigid plan

---

#### My Agile Experience

**At Virtusa - Scrum Framework**:
| Ceremony | Frequency | My Role |
|----------|-----------|---------|
| Daily Standup | Daily, 15 min | Share progress, blockers |
| Sprint Planning | Start of sprint | Estimate tasks, commit to work |
| Sprint Review | End of sprint | Demo completed features |
| Retrospective | End of sprint | Discuss improvements |

**Typical Sprint Flow**:
\`\`\`
Week 1:
- Day 1: Sprint planning, pick user stories
- Day 2-5: Development, daily standups

Week 2:
- Day 6-9: Continue development, testing
- Day 10: Sprint review, retrospective
\`\`\`

---

#### Key Agile Concepts I Practice

**1. User Stories**
\`\`\`
"As a [bank admin], I want to [configure charge rules],
so that [I can apply correct fees to transactions]"

Acceptance Criteria:
- Can create new charge rule
- Can set effective date
- Can preview calculated charges
\`\`\`

**2. Story Points & Estimation**
| Points | Meaning | Example |
|--------|---------|---------|
| 1 | Trivial | Fix typo, update copy |
| 2-3 | Simple | Add new field to form |
| 5 | Medium | New CRUD feature |
| 8 | Complex | Integration with external API |
| 13+ | Should be broken down | Full new module |

**3. Definition of Done**
- Code complete and working
- Unit tests passing
- Code reviewed
- Deployed to staging
- QA approved

---

#### Benefits I've Seen
- ✅ Regular feedback prevents going in wrong direction
- ✅ Short sprints create accountability
- ✅ Retrospectives drive continuous improvement
- ✅ Daily standups catch blockers early`
    },
    {
        id: 'tcs051',
        question: 'What is prompt engineering?',
        answer: `### Prompt Engineering Explained

#### Simple Definition
Prompt engineering is crafting inputs to AI systems that produce the best possible outputs. It's about asking the right questions in the right way.

#### Real-World Analogy
Like asking directions:
- ❌ "How do I get there?" (vague)
- ✅ "What's the fastest walking route from Central Station to the Art Museum?" (specific, contextual)

---

#### Key Techniques

**1. Be Specific and Contextual**
\`\`\`
❌ Bad: "Write a function to sort"

✅ Good: "Write a JavaScript function that sorts an array of 
user objects by lastName (ascending), then firstName (ascending).
Handle null values by placing them at the end."
\`\`\`

**2. Provide Examples (Few-Shot)**
\`\`\`
"Format these items as a table:
Input: Apple, 5, Red
Output: | Apple | 5 | Red |

Now format: Banana, 3, Yellow"
\`\`\`

**3. Chain of Thought**
\`\`\`
"Explain your reasoning step by step before giving the answer:"
"Let's think through this problem systematically..."
\`\`\`

**4. Role Assignment**
\`\`\`
"You are a senior React developer conducting a code review.
Identify issues in this component and suggest improvements..."
\`\`\`

---

#### My Application in Development

**At Accenture's GenAI Project**:
\`\`\`javascript
// I designed prompts for code generation:
const codeGenerationPrompt = \`
You are an expert JavaScript developer.
Context: Building a React component library.
Current file: \${context.currentFile}
Recent changes: \${context.recentChanges}

User request: \${userRequest}

Generate code that:
1. Follows React best practices
2. Uses TypeScript
3. Includes proper error handling
4. Is well-commented
\`;
\`\`\`

**Result**: Quality of AI-generated code improved significantly with structured prompts.

---

#### Why It Matters
*"The gap between getting useless AI output and excellent AI output is often just the prompt. Good prompt engineering is becoming an essential developer skill."*`
    },
    {
        id: 'tcs052',
        question: 'Explain Git workflow and version control',
        answer: `### Git Workflow & Best Practices

#### Simple Explanation
Git tracks changes to code over time. It lets multiple developers work on the same project without overwriting each other's work.

---

#### Branching Strategy (Git Flow)

\`\`\`
main        ─────────────●───────────────●─────────────
             \\         / \\             /
release      \\───●────/   \\───●───────/
               \\   /       \\   /
develop    ─●───●───●───────●───●───●───────●───
            \\   /         \\   /   
feature     \\─●─/           \\─●─/
\`\`\`

| Branch | Purpose | Lifetime |
|--------|---------|----------|
| **main** | Production code | Permanent |
| **develop** | Integration branch | Permanent |
| **feature/xxx** | New features | Until merged |
| **release/x.x** | Release preparation | Until deployed |
| **hotfix/xxx** | Urgent production fixes | Until merged |

---

#### My Daily Git Commands

\`\`\`bash
# Start new feature
git checkout develop
git pull origin develop
git checkout -b feature/user-dashboard

# Make changes, commit frequently
git add .
git commit -m "feat: add dashboard layout with sidebar"

# Push and create PR
git push -u origin feature/user-dashboard
# Create pull request in GitHub

# After PR approved
git checkout develop
git pull origin develop
git merge feature/user-dashboard
git push origin develop

# Cleanup
git branch -d feature/user-dashboard
\`\`\`

---

#### Commit Message Convention
\`\`\`
type(scope): subject

Types:
- feat: New feature
- fix: Bug fix
- docs: Documentation
- style: Formatting
- refactor: Code restructure
- test: Adding tests
- chore: Maintenance

Examples:
feat(auth): add password reset functionality
fix(cart): resolve quantity update bug
docs: update API documentation
\`\`\`

---

#### Code Review Process
1. **Open PR** with clear description
2. **Reviewer checks**: Logic, style, tests, edge cases
3. **Address feedback**: Make changes, re-request review
4. **Merge** after approval
5. **Delete feature branch**

---

#### Handling Merge Conflicts
\`\`\`bash
# When you have conflicts:
git merge develop  # Shows conflict

# Open conflicted files, look for:
<<<<<<< HEAD
your changes
=======
their changes
>>>>>>> develop

# Resolve manually, then:
git add .
git commit -m "resolve merge conflict in user.js"
\`\`\``
    },
    {
        id: 'tcs053',
        question: 'How do you approach code reviews?',
        answer: `### My Code Review Approach

#### As a Reviewer

**What I Look For**:
| Category | Checks |
|----------|--------|
| **Correctness** | Does it do what it's supposed to? |
| **Readability** | Can I understand it without explanation? |
| **Maintainability** | Will this be easy to modify later? |
| **Performance** | Any obvious inefficiencies? |
| **Security** | Input validation, SQL injection, XSS? |
| **Tests** | Are there tests? Do they cover edge cases? |

---

**How I Give Feedback**:

\`\`\`javascript
// ❌ Unhelpful
"This is wrong"

// ✅ Constructive
"Consider using useMemo here. Since this filter operation runs on
every render and the products array is large, memoizing could 
improve performance. Example:

const filtered = useMemo(() => 
  products.filter(p => p.active), 
  [products]
);"
\`\`\`

**Tone Guidelines**:
- Use questions over commands: "Could we consider..." vs "Change this to..."
- Explain the why, not just the what
- Acknowledge good work: "Nice handling of edge cases here!"
- Prefix with severity: \`nit:\` for minor suggestions

---

#### As the Author

**Before Requesting Review**:
- Self-review first (read your own diff)
- Run tests locally
- Check for obvious issues (console.logs, commented code)
- Write clear PR description

**Handling Feedback**:
- Assume positive intent
- Ask clarifying questions if unsure
- Explain your reasoning if you disagree
- Thank reviewers for their time

---

#### Code Review Checklist I Use
\`\`\`
□ Logic is correct and handles edge cases
□ No hardcoded values that should be config
□ Error handling is proper
□ Functions are focused and well-named
□ No unnecessary complexity
□ Tests cover the new functionality
□ No security vulnerabilities
□ Performance is acceptable
□ Documentation updated if needed
\`\`\`

---

### Why Reviews Matter
*"Code reviews aren't about finding faults - they're about making the codebase better and sharing knowledge across the team."*`
    },
];

export default aiModernQuestions;
