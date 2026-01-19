// TCS Prime Interview - Scenario-Based Questions

export const scenarioQuestions = [
  {
    id: 'tcs091',
    question: 'How would you approach building a new feature from scratch?',
    answer: `### My Feature Development Process

**Real Example**: Building the drag-and-drop component system in WebForge

#### Phase 1: Understanding (Day 1)
- **Clarify requirements** with stakeholders
- **Identify users** and their needs
- **Research** similar implementations (Figma, Framer)
- **Document scope**: What's in v1 vs future phases

#### Phase 2: Design (Day 2-3)
- **Technical design** document with architecture
- **Component breakdown**: What pieces are needed?
- **API design**: How will components interact?
- **Database schema** if data storage is involved
- **Review with senior dev** for feedback

#### Phase 3: Implementation (Day 4-10)
- **Start with the core**: Basic drag-drop without edge cases
- **Add complexity incrementally**: Snap-to-grid, collision detection
- **Write tests alongside code**: Unit tests for utilities
- **Commit frequently**: Small, focused commits

#### Phase 4: Testing & Polish (Day 11-12)
- **Integration testing**: Full user flows
- **Edge cases**: What if user drags off-screen? Mobile touch?
- **Performance testing**: Works with 100+ components?
- **Accessibility**: Keyboard navigation support

#### Phase 5: Deploy & Monitor
- **Feature flag**: Release to 10% of users first
- **Monitor errors**: Check error tracking tools
- **Gather feedback**: User behavior analytics
- **Iterate**: Fix issues, add improvements

### Key Principles
- **Start simple, iterate**: Working MVP before perfect solution
- **Get feedback early**: Don't build in isolation
- **Document decisions**: Future you will thank you`
  },
  {
    id: 'tcs092',
    question: 'How would you optimize a slow React application?',
    answer: `### Step-by-Step Optimization Process

**Problem**: Users report slow page loads and laggy interactions

#### Step 1: Measure First
Before fixing, identify what's actually slow:
\`\`\`javascript
// React DevTools Profiler
// Chrome DevTools Performance tab
// Web Vitals measurement
import { getCLS, getFID, getLCP } from 'web-vitals';
\`\`\`

#### Step 2: Common Fixes

**1. Reduce Unnecessary Re-renders**
\`\`\`jsx
// Use React.memo for expensive components
const ExpensiveList = React.memo(({ items }) => {
  return items.map(item => <Item key={item.id} {...item} />);
});

// Use useMemo for expensive calculations
const sortedData = useMemo(() => 
  data.sort((a, b) => a.name.localeCompare(b.name)), 
  [data]
);

// Use useCallback for stable function references
const handleClick = useCallback(() => {
  doSomething(id);
}, [id]);
\`\`\`

**2. Code Splitting / Lazy Loading**
\`\`\`jsx
// Load components only when needed
const HeavyChart = lazy(() => import('./HeavyChart'));
const AdminPanel = lazy(() => import('./AdminPanel'));

<Suspense fallback={<Loading />}>
  <Routes>
    <Route path="/chart" element={<HeavyChart />} />
  </Routes>
</Suspense>
\`\`\`

**3. Virtual Scrolling for Long Lists**
\`\`\`jsx
// Instead of rendering 10,000 items
import { FixedSizeList } from 'react-window';

<FixedSizeList height={400} itemCount={10000} itemSize={50}>
  {({ index, style }) => <Row style={style} data={data[index]} />}
</FixedSizeList>
\`\`\`

**4. Optimize Images**
\`\`\`jsx
// Use Next.js Image component
<Image src="/hero.jpg" width={1200} height={600} priority />
// Automatic lazy loading, WebP conversion, responsive sizes
\`\`\`

**5. Debounce API Calls**
\`\`\`jsx
// Don't call API on every keystroke
const debouncedSearch = useMemo(
  () => debounce((query) => searchAPI(query), 300),
  []
);
\`\`\`

#### Step 3: Bundle Analysis
\`\`\`bash
npx next build --analyze
# Shows what's making your bundle large
\`\`\`

### Checklist
- [ ] Profiled with DevTools first
- [ ] Added React.memo where appropriate
- [ ] Implemented code splitting
- [ ] Used virtual scrolling for lists
- [ ] Optimized images
- [ ] Debounced user inputs
- [ ] Analyzed bundle size`
  },
  {
    id: 'tcs093',
    question: 'How would you debug a production issue?',
    answer: `### Production Debugging Approach

**Scenario**: Users report 500 errors on the checkout page

#### Step 1: Assess Severity (5 mins)
- **How many users affected?** Check error rate in monitoring
- **Is it complete outage or partial?** Some users or all?
- **When did it start?** Correlate with recent deployments

#### Step 2: Gather Information (10 mins)
\`\`\`javascript
// Check error tracking (Sentry, LogRocket)
// Error: "Cannot read property 'price' of undefined"
// Stack trace points to: checkout.js line 45

// Check logs
// "Payment service returned 503"
// Timestamp: Matches when errors started
\`\`\`

#### Step 3: Reproduce (if safe)
- **Staging environment**: Try to reproduce with same data
- **Add logging** if needed: Instrument the path with more details

#### Step 4: Root Cause Analysis
\`\`\`javascript
// Found: Payment service deployment changed response format
// Before: { product: { price: 100 } }
// After:  { items: [{ price: 100 }] }

// Our code expected old format:
const price = response.product.price;  // Undefined!
\`\`\`

#### Step 5: Fix and Verify
\`\`\`javascript
// Hotfix: Handle both formats
const price = response.product?.price ?? response.items?.[0]?.price;

// Or rollback the payment service deployment
\`\`\`

#### Step 6: Deploy Fix
- **Quick fix first**: Rollback or hotfix to stop bleeding
- **Proper fix later**: Discuss long-term solution

#### Step 7: Post-Mortem
Write a document answering:
1. What happened?
2. What was the impact?
3. How was it detected?
4. How was it resolved?
5. How do we prevent this?

### Prevention Strategies
- **Error monitoring**: Sentry, Datadog alerts
- **Health checks**: Verify services before deployment
- **Feature flags**: Gradual rollout to catch issues early
- **Contract testing**: Verify API responses match expectations`
  },
  {
    id: 'tcs094',
    question: 'How do you handle conflicting priorities?',
    answer: `### Prioritization Framework

**Scenario**: Three urgent requests arrive simultaneously
1. Critical bug affecting 5% of users
2. CEO wants a demo feature ready for tomorrow
3. Sprint deadline for a planned feature

#### My Approach

**Step 1: Clarify Impact**
| Task | Impact | Urgency | Effort |
|------|--------|---------|--------|
| Critical bug | 5% users blocked | Immediate | 2 hours |
| CEO demo | Business relationship | Tomorrow | 4 hours |
| Sprint feature | Team commitment | End of week | 8 hours |

**Step 2: Communicate**
- **Don't silently switch**: Inform all stakeholders of the situation
- **Explain trade-offs**: "If I fix the bug now, the demo feature may have to be simplified"
- **Get explicit priority**: Let stakeholders decide, not assumptions

**Step 3: Execute**
In this case:
1. **Bug first** (2 hours) - Users are actively blocked
2. **Demo feature** (4 hours) - Business critical, simplified scope
3. **Sprint feature** - Communicate delay, ask for help, or negotiate scope

**Step 4: Learn**
- Why did three things become urgent at once?
- Could better planning have prevented this?
- Document for next sprint planning

### Real Example
At Virtusa, I once had a bug report during a demo preparation. I:
1. Assessed the bug severity (cosmetic, not blocking)
2. Communicated to the manager: "Bug exists but demo path isn't affected"
3. Completed demo prep, fixed bug afterward
4. Nobody was upset because expectations were managed

### Key Principles
- **Impact over urgency**: Loud doesn't mean important
- **Communicate proactively**: Silence creates anxiety
- **Document trade-offs**: CYA (Cover Your Assumptions)
- **Don't be a hero**: Ask for help if needed`
  },
  {
    id: 'tcs095',
    question: 'How would you design a URL shortener?',
    answer: `### System Design: URL Shortener (like bit.ly)

#### Requirements
**Functional**:
- Create short URL from long URL
- Redirect short URL to original
- Optional: Custom short URLs, analytics, expiration

**Non-Functional**:
- High availability (99.9%)
- Low latency (< 100ms redirect)
- Handle 100M URLs, 1B redirects/month

#### High-Level Design
\`\`\`
User → Load Balancer → API Servers → Database
                          ↓
                        Cache (Redis)
\`\`\`

#### Database Schema
\`\`\`sql
CREATE TABLE urls (
  id BIGINT PRIMARY KEY,
  short_code VARCHAR(7) UNIQUE,
  long_url TEXT NOT NULL,
  created_at TIMESTAMP,
  expires_at TIMESTAMP,
  click_count INT DEFAULT 0
);

-- Index for fast lookup
CREATE INDEX idx_short_code ON urls(short_code);
\`\`\`

#### URL Shortening Algorithm
\`\`\`javascript
// Option 1: Base62 encoding of ID
function encode(id) {
  const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  while (id > 0) {
    result = chars[id % 62] + result;
    id = Math.floor(id / 62);
  }
  return result.padStart(7, '0');
}

// ID 1234567 → "4c91"
// 62^7 = 3.5 trillion unique URLs

// Option 2: Random string (check for collisions)
function generateShortCode() {
  return crypto.randomBytes(5).toString('base64url').slice(0, 7);
}
\`\`\`

#### API Endpoints
\`\`\`javascript
// Create short URL
POST /api/shorten
{ "url": "https://very-long-url..." }
→ { "shortUrl": "https://short.ly/abc123" }

// Redirect
GET /:shortCode
→ 301 Redirect to original URL
\`\`\`

#### Optimizations
- **Caching**: Redis for hot URLs (cache aside pattern)
- **Rate limiting**: Prevent abuse
- **Analytics**: Async queue for click tracking
- **CDN**: Cache redirects at edge

#### Scale Considerations
- **Read-heavy**: 100:1 read/write ratio → optimize for reads
- **Database**: NoSQL (DynamoDB) or sharded SQL
- **Distributed ID**: Snowflake ID generator for unique IDs`
  },
  {
    id: 'tcs096',
    question: 'What would you do if you found a security vulnerability?',
    answer: `### Security Vulnerability Response

**Scenario**: While reviewing code, I notice user passwords are being logged in plain text.

#### Immediate Actions

**Step 1: Assess Severity**
| Question | Answer |
|----------|--------|
| What data is exposed? | User passwords |
| Who has access to logs? | All developers, ops team |
| How long has this been happening? | Check git blame |
| Is it in production? | Yes |

**Step 2: Document**
- Screenshot the issue
- Note file, line number, when discovered
- Don't share in public channels (Slack, email to big groups)

**Step 3: Escalate Properly**
\`\`\`
Report to: Security team / Senior developer / Manager
NOT to: Public channels, external parties (yet)
\`\`\`

**Step 4: Implement Fix**
\`\`\`javascript
// ❌ Before
console.log('User login:', { email, password });

// ✅ After
console.log('User login:', { email, password: '[REDACTED]' });

// Better: Use structured logging that auto-redacts
logger.info('User login', { 
  email, 
  password  // Logger config redacts password fields
});
\`\`\`

**Step 5: Cleanup**
- Rotate affected credentials if they may have been compromised
- Purge logs containing sensitive data
- Audit who accessed the logs during exposure period

**Step 6: Prevention**
- Add linting rules to detect sensitive data logging
- Code review checklist for security
- Security training for the team

#### What I Would NOT Do
- ❌ Keep it to myself hoping no one notices
- ❌ Announce it in public channels
- ❌ Try to cover it up
- ❌ Exploit it (obviously)

### Real-World Context
At TCS, security incidents have formal protocols. I would:
1. Follow company security incident response procedure
2. Report to designated security contact
3. Document for compliance/audit purposes`
  },
  {
    id: 'tcs097',
    question: 'How would you mentor a junior developer?',
    answer: `### Mentorship Approach

**Goal**: Help junior developers become self-sufficient, not dependent on me.

#### Week 1-2: Onboarding
- **Pair programming**: Work together on a real task
- **Code walkthrough**: Explain the codebase architecture
- **Environment setup**: Ensure they can run, test, deploy
- **Point to resources**: Documentation, wikis, Slack channels

#### Ongoing: Teaching Habits

**1. Code Reviews as Teaching Moments**
\`\`\`javascript
// Instead of just fixing:
// ❌ "Change this to use map instead of forEach"

// Explain why:
// ✅ "Consider using map() here. Since you're transforming 
//    each item into something new, map() expresses that intent 
//    more clearly than forEach. It also lets you chain operations.
//    Here's an example: [link to docs]"
\`\`\`

**2. The "Why" Behind Decisions**
- Don't just say "do it this way"
- Explain: "We do it this way because..."
- Let them question: "What would happen if we did X instead?"

**3. Encourage Questions**
- "There are no stupid questions"
- Create safe space for not knowing things
- I publicly admit what I don't know

**4. Progressive Autonomy**
| Stage | Approach |
|-------|----------|
| Week 1 | I do, you watch |
| Week 2 | I do, you help |
| Week 3 | You do, I help |
| Week 4+ | You do, I review |

**5. Debugging Guidance**
\`\`\`javascript
// Instead of fixing their bug, ask:
// - "What have you tried so far?"
// - "What does the error message say?"
// - "Can you reproduce it consistently?"
// - "What changed since it last worked?"

// Teach the process, not just the answer
\`\`\`

#### Success Metrics
- They stop asking the same questions
- They start answering others' questions
- They propose solutions, not just problems
- They contribute independently

### Key Philosophy
"Give a developer a fix, they ship today. Teach them to debug, they ship for a career."`
  },
  {
    id: 'tcs098',
    question: 'How would you approach migrating a legacy system?',
    answer: `### Legacy Migration Strategy

**Scenario**: Migrate a monolithic PHP application to microservices with React frontend

#### Phase 1: Assessment (2-4 weeks)
**Understand what exists:**
- Document all features and user flows
- Map database schema and relationships
- Identify integrations (APIs, third-party services)
- Find undocumented "tribal knowledge"

**Risk assessment:**
| Component | Complexity | Business Criticality | Migration Risk |
|-----------|------------|---------------------|----------------|
| Auth system | High | Critical | Start here (foundational) |
| Payment | Medium | Critical | Careful testing required |
| Reports | Low | Medium | Can migrate later |

#### Phase 2: Strangler Fig Pattern
Gradually replace parts while keeping the system running:
\`\`\`
[ Legacy System ]
       ↓
[ API Gateway / Proxy ]
       ↓
[ New Service ] ← Start with one feature
       ↓
[ Legacy for everything else ]
\`\`\`

**Implementation:**
\`\`\`javascript
// Nginx proxy routes traffic
// /api/users → new Node.js service
// /api/* → legacy PHP (everything else)

location /api/users {
    proxy_pass http://new-user-service;
}

location /api {
    proxy_pass http://legacy-php;
}
\`\`\`

#### Phase 3: Incremental Migration
1. **Migrate one feature completely** (e.g., user authentication)
2. **Test thoroughly** in production with real traffic
3. **Monitor** for issues, performance regression
4. **Repeat** for next feature
5. **Decommission** legacy parts as they empty out

#### Phase 4: Data Migration
\`\`\`sql
-- Strategy: Dual-write during transition
-- 1. Write to both old and new database
-- 2. Read from new, fallback to old
-- 3. Verify consistency
-- 4. Switch to new only
-- 5. Decommission old
\`\`\`

### Key Principles
- **Never big bang**: Gradual is safer than rewrite-all
- **Keep it running**: Users shouldn't notice the migration
- **Excellent tests**: Critical for preventing regressions
- **Rollback plan**: Every change must be reversible
- **Business alignment**: Migrate high-value features first`
  },
  {
    id: 'tcs099',
    question: 'How do you stay updated with new technologies?',
    answer: `### My Learning System

#### Daily Habits (30 mins)
- **Morning**: Scan tech Twitter/X, HN, dev.to headlines
- **Lunch**: Read one in-depth article
- **Before sleep**: Watch a tech video (2x speed)

#### Weekly Practice
| Day | Activity |
|-----|----------|
| Saturday | Build something small with new tech |
| Sunday | Reflect, document what I learned |

#### Resources I Follow
**Newsletters:**
- JavaScript Weekly
- React Status
- Node Weekly
- TLDR (daily tech summary)

**YouTube Channels:**
- Fireship (quick overviews)
- Theo - t3.gg (React/Next.js)
- Web Dev Simplified
- ThePrimeagen (performance, opinions)

**Podcasts:**
- Syntax.fm
- JS Party
- Software Engineering Daily

**Communities:**
- Reddit: r/reactjs, r/node, r/webdev
- Discord servers for frameworks I use

#### Deep Dives
When I need to learn something seriously:

1. **Official Documentation First**
   - Actually read the getting started guide
   - Build the example projects

2. **Build Something Real**
   - Not just tutorials - apply it to my projects
   - WebForge: learned Monaco Editor integration
   - Focus Flow: learned fabric.js for canvas

3. **Teach It**
   - Write notes explaining to myself
   - Help others on Stack Overflow
   - "If you can't explain it simply, you don't understand it"

#### Current Learning (2024-2025)
- ✅ Next.js App Router, Server Components
- ✅ AI integration (Hugging Face, OpenAI APIs)
- ✅ Prompt engineering
- 🔄 Rust basics for performance-critical code
- 🔄 System design patterns for interviews

### Philosophy
*"Stay curious, but don't chase every shiny thing. Deep knowledge in core areas beats surface knowledge in everything."*`
  },
  {
    id: 'tcs100',
    question: 'How would you handle a disagreement about technical approach?',
    answer: `### Handling Technical Disagreements

**Scenario**: I want to use TypeScript, a colleague prefers JavaScript

#### My Approach

**Step 1: Understand Their Perspective**
Instead of arguing immediately:
- "Help me understand your reasoning for JavaScript"
- "What concerns do you have about TypeScript?"

Listen for valid points:
- Learning curve for team
- Build time overhead
- Existing codebase is JS

**Step 2: Separate Facts from Preferences**
| Statement | Type |
|-----------|------|
| "TypeScript catches bugs at compile time" | Fact |
| "TypeScript feels slower to write" | Preference |
| "Our team doesn't know TypeScript" | Fact (can change) |

**Step 3: Find Common Ground**
What do we both want?
- ✅ Fewer bugs in production
- ✅ Maintainable code
- ✅ Team productivity

**Step 4: Propose Experiment**
\`\`\`javascript
// Instead of all-or-nothing:
// "Let's try TypeScript on one module for 2 weeks"
// - Measure: Bug rate, development speed, team feedback
// - Decide based on data, not opinions
\`\`\`

**Step 5: Escalate if Needed**
If we can't agree after genuine discussion:
- Bring in a senior/tech lead for tie-breaker
- Document both positions for the decision-maker
- Accept the decision gracefully

#### Real Example
At Virtusa, there was debate about state management (Redux vs Zustand). I:
1. Listened to Redux advocates' concerns (predictability, tooling)
2. Showed Zustand's simpler API with a quick demo
3. Proposed: "Let's use Zustand for the new module. If it creates problems, we switch to Redux"
4. Result: Team loved Zustand's simplicity, adopted it project-wide

### Key Principles
- **Facts over feels**: Back positions with evidence
- **Assume good intent**: They want what's best too
- **Experiments beats debates**: Try it and see
- **Accept outcomes**: You won't win every decision`
  },
  {
    id: 'tcs101',
    question: 'What would you do on your first day at TCS?',
    answer: `### First Day Action Plan

#### Morning: Setup & Orientation
| Time | Activity |
|------|----------|
| 9:00 | Complete HR formalities, receive credentials |
| 10:00 | Setup workstation, install required tools |
| 11:00 | Attend orientation / watch onboarding videos |
| 12:00 | Lunch with team (if possible) |

#### Afternoon: Connect & Learn
**Meet Key People:**
- Manager: Understand expectations, current priorities
- Buddy/Mentor: Ask where to find things, team norms
- Teammates: Learn about their roles, current projects

**Questions I'd Ask:**
1. What's the most important project right now?
2. What should I focus on in my first week?
3. Where's the documentation / wiki?
4. What tools does the team use (Slack, Jira, etc.)?
5. What's the code review process?
6. Any team norms I should know?

#### Technical Setup Checklist
\`\`\`bash
# Typical first-day setup
□ Clone main repositories
□ Get credentials for services (AWS, databases, etc.)
□ Join relevant Slack/Teams channels
□ Get VPN / access to internal tools
□ Run the project locally - verify it works
□ Read the README and architecture docs
\`\`\`

#### First Week Goals
- [ ] Understand the codebase at a high level
- [ ] Complete any required training modules
- [ ] Make first small contribution (fix a typo, small bug)
- [ ] Build relationships with team members
- [ ] Identify one area I can help with

#### Mindset
- **Ask questions**: Better to ask than assume wrong
- **Take notes**: Write down everything (names, processes, passwords)
- **Be patient**: Understanding takes time
- **Observe first**: Understand the culture before suggesting changes

### What I'd Avoid
- ❌ Suggesting major changes on day 1
- ❌ Being overconfident about what I know
- ❌ Working in isolation
- ❌ Waiting to be told what to do (be proactive)`
  },
  {
    id: 'tcs102',
    question: 'How would you explain a technical concept to non-technical stakeholders?',
    answer: `### Communicating Technical Concepts

#### Golden Rule
**Use analogies they already understand.** Connect the unknown to the known.

#### Example: Explaining API to a Business Person
\`\`\`
❌ Technical explanation:
"An API is a set of protocols and tools that allows different 
software applications to communicate using HTTP requests and 
JSON responses..."

✅ Business analogy:
"An API is like a waiter in a restaurant. 
You (the app) tell the waiter (API) what you want from the menu.
The waiter goes to the kitchen (server/database), gets your order,
and brings it back to you.
You never go to the kitchen directly - the waiter handles all that."
\`\`\`

#### Framework: ELI5 → Then Add Detail
**Level 1**: Simple analogy (explain like I'm 5)
**Level 2**: Add relevant business impact
**Level 3**: Only add technical details if they ask

#### More Examples

**Microservices:**
"Instead of one chef cooking everything, we have specialized stations - 
one for salads, one for grills, one for desserts. If the dessert station 
is overwhelmed, we can add another dessert chef without affecting salads."

**Caching:**
"It's like keeping frequently used items on your desk instead of walking 
to the filing cabinet every time. The first fetch takes time, but subsequent 
access is instant."

**Database Indexing:**
"Like a book's index. Instead of reading every page to find 'JavaScript', 
you look in the index which tells you exactly which pages to go to."

#### Presentation Tips
- **Visual aids**: Diagrams > words
- **Avoid jargon**: Or define it immediately
- **Check understanding**: "Does that make sense?"
- **Accept questions**: They indicate engagement

#### Real Example
When explaining to a client why their website was slow:
\`\`\`
Instead of:
"The database queries lack proper indexes causing O(n) full table scans"

I said:
"Imagine a library without an organization system. Every time you want 
a book, you'd check every shelf. We're adding a card catalog so the 
system knows exactly where each book is."
\`\`\``
  },
  {
    id: 'tcs103',
    question: 'Describe your ideal development environment',
    answer: `### My Development Setup

#### Hardware
| Component | What I Use | Why |
|-----------|------------|-----|
| Monitor | 27" 4K or dual monitors | More screen = more productivity |
| Keyboard | Mechanical (low profile) | Better typing feel |
| Mouse | Ergonomic | Long hours of use |
| Standing desk | Adjustable | Alternate sitting/standing |

#### Software Stack
**Editor:** VS Code with extensions
\`\`\`json
{
  "essential_extensions": [
    "ESLint",
    "Prettier",
    "GitLens",
    "GitHub Copilot",
    "Error Lens",
    "Auto Rename Tag",
    "Path Intellisense"
  ]
}
\`\`\`

**Terminal:** Windows Terminal + PowerShell
**Version Control:** Git with GitHub
**Package Manager:** pnpm (faster than npm)
**Node Version Manager:** nvm-windows

#### Browser & DevTools
- Chrome for development (DevTools, React DevTools)
- Firefox for testing cross-browser
- Lighthouse for performance audits

#### Collaboration Tools
- Slack/Teams for communication
- Jira/Linear for task management
- Figma for design handoff
- Notion for documentation

#### Key Principles

**1. Automation First**
\`\`\`bash
# Lint on save, format on save
# Pre-commit hooks for quality gates
# CI/CD for deployment - no manual steps
\`\`\`

**2. Consistent Environment**
- Same Node version across team (nvmrc file)
- Same formatting rules (Prettier config in repo)
- Docker for complex dependencies

**3. Fast Feedback Loops**
- Hot reload for instant changes
- Fast test runs with watch mode
- Error highlighting in editor (not just at build time)

**4. Minimal Distractions**
- Focused work blocks (Pomodoro)
- Notifications off during deep work
- Clean desktop, organized files

#### Ideal Team Environment
- Code review culture (learn from each other)
- Psychological safety to ask questions
- Clear documentation
- Automated CI/CD pipeline
- Regular knowledge sharing sessions`
  },
];

export default scenarioQuestions;
