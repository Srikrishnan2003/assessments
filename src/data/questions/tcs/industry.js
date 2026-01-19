// TCS Prime Interview - Industry & Company Knowledge Questions

export const industryQuestions = [
    {
        id: 'tcs041',
        question: 'What do you know about TCS?',
        answer: `### TCS Overview

**Company Profile**:
| Attribute | Details |
|-----------|---------|
| **Full Name** | Tata Consultancy Services |
| **Founded** | 1968 (Part of Tata Group since founding) |
| **Headquarters** | Mumbai, India |
| **Employees** | 600,000+ worldwide |
| **Revenue** | $25+ billion annually |
| **Global Presence** | 50+ countries, 150+ nationalities |

---

#### Core Business
TCS is a global IT services, consulting, and business solutions company:
- **IT Services**: Application development, maintenance, cloud services
- **Consulting**: Digital transformation, business strategy
- **Infrastructure**: Cloud, data centers, managed services
- **BPO**: Business process outsourcing

#### Key Clients
Fortune 500 companies across:
- Banking & Financial Services (BFSI)
- Retail & Consumer Goods
- Manufacturing
- Healthcare & Life Sciences
- Communications & Media

---

#### Notable Initiatives

**TCS Pace**: Innovation labs exploring emerging technologies
- AI/ML, Blockchain, IoT, Cloud

**TCS Interactive**: Digital marketing and customer experience

**TCS Digital**: Focus on digital transformation projects

**TCS Xplore**: Training and development program for employees

---

#### Why TCS Stands Out
1. **Stability**: Part of Tata Group, one of India's most trusted conglomerates
2. **Scale**: Handles massive enterprise projects
3. **Growth**: Consistent revenue growth over decades
4. **Culture**: Known for employee welfare and retention
5. **Innovation**: Investing heavily in AI, cloud, and emerging tech

---

#### Recent News (Research Before Interview)
- Major partnerships or acquisitions
- New technology initiatives
- Awards or recognition
- Expansion into new markets

*"I follow TCS news through LinkedIn and tech publications to stay current."*`
    },
    {
        id: 'tcs042',
        question: 'What are current technology trends you follow?',
        answer: `### Technology Trends I'm Tracking

#### 1. AI & Large Language Models
**What's Happening**:
- ChatGPT, Claude, Gemini transforming developer workflows
- AI code assistants (GitHub Copilot) becoming standard
- LLMs integrated into products for smarter features

**My Experience**:
\`\`\`javascript
// I've built AI-powered features:
// - GenAI Developer Assistant (Accenture)
// - Prompt engineering for code generation
// - AI integration in WebForge for component suggestions
\`\`\`

---

#### 2. Full-Stack JavaScript Evolution
**What's Happening**:
- Next.js 14+ with Server Components and Server Actions
- Edge computing for faster global performance
- React Server Components changing how we think about data fetching

**My Experience**:
- WebForge built on Next.js App Router
- Exploring React Server Components patterns

---

#### 3. Cloud-Native Development
**What's Happening**:
- Serverless (AWS Lambda, Vercel Edge Functions)
- Containerization (Docker, Kubernetes)
- Infrastructure as Code (Terraform)

**What I'm Learning**:
- Docker for local development environments
- Serverless deployment with Vercel

---

#### 4. Developer Experience Tools
**What's Happening**:
- AI pair programming (Copilot, Cursor)
- Faster build tools (Turbopack, Vite)
- Type-safe full-stack (tRPC, Prisma)

**What I Use**:
- GitHub Copilot daily for code suggestions
- TypeScript for type safety
- Prisma for database access

---

#### How I Stay Updated
| Source | Frequency |
|--------|-----------|
| JavaScript Weekly newsletter | Weekly |
| Fireship YouTube | Weekly |
| Hacker News | Daily scan |
| Tech Twitter/X | Daily |
| Personal projects | Apply learnings |

*"Following trends is one thing - I ensure I apply them in projects to truly understand."*`
    },
    {
        id: 'tcs043',
        question: 'What challenges do you see in enterprise software development?',
        answer: `### Enterprise Development Challenges

#### 1. Legacy System Integration
**The Challenge**:
Most enterprises have decades-old systems that can't be discarded but must work with modern applications.

**My Understanding**:
- Strangler fig pattern for gradual migration
- API wrappers around legacy systems
- Data synchronization between old and new

---

#### 2. Scale and Performance
**The Challenge**:
Enterprise systems serve millions of users with strict uptime requirements.

**Considerations**:
\`\`\`
- Load balancing across regions
- Database sharding for large datasets
- Caching strategies (Redis, CDN)
- Asynchronous processing for heavy operations
\`\`\`

---

#### 3. Security and Compliance
**The Challenge**:
Banking, healthcare, and government clients have strict regulatory requirements.

**Key Areas**:
| Concern | Approach |
|---------|----------|
| Data Protection | Encryption at rest and in transit |
| Access Control | Role-based permissions, audit logs |
| Compliance | GDPR, HIPAA, SOX depending on industry |
| Testing | Security scanning in CI/CD pipeline |

---

#### 4. Team Coordination
**The Challenge**:
Large projects involve multiple teams across time zones with different expertise.

**What Helps**:
- Clear API contracts between teams
- Strong documentation habits
- Agile ceremonies for alignment
- Async communication tools

---

#### 5. Technical Debt
**The Challenge**:
Pressure to deliver fast creates shortcuts that compound over time.

**Balanced Approach**:
- Dedicate time for refactoring in sprints
- Maintain test coverage to catch regressions
- Document known issues for future addressing

---

### Why This Matters for TCS
TCS handles exactly these challenges for Fortune 500 clients. Understanding them shows I'm prepared for enterprise-scale work.`
    },
    {
        id: 'tcs044',
        question: 'How do you see AI impacting software development?',
        answer: `### AI's Impact on Development

#### Current Impact

**1. Coding Assistance**
\`\`\`
GitHub Copilot, ChatGPT, Claude:
- Autocomplete entire functions
- Explain unfamiliar code
- Generate boilerplate
- Suggest optimizations

I use Copilot daily - it's like having a junior developer who knows every library.
\`\`\`

**2. Testing & Quality**
- AI generates test cases from code
- Identifies potential bugs through static analysis
- Suggests security vulnerabilities

**3. Documentation**
- Auto-generates README, API docs
- Explains legacy code
- Creates user guides from code comments

---

#### Future Evolution
| Area | Current | Future |
|------|---------|--------|
| Code Writing | Suggestions | Full feature from spec |
| Debugging | Explanation | Autonomous fixing |
| Architecture | Recommendations | Design from requirements |
| Testing | Test generation | Self-healing tests |

---

#### What Won't Change
1. **System Design**: AI assists but humans decide architecture
2. **Business Logic**: Understanding domain problems is human
3. **User Empathy**: Knowing what users actually need
4. **Ethical Decisions**: AI can't decide what should be built

---

#### My Perspective
\`\`\`
AI won't replace developers, but developers using AI
will replace developers who don't.

My approach:
1. Learn AI tools thoroughly
2. Focus on what AI can't do (design, empathy, architecture)
3. Use AI to accelerate, not to avoid learning
\`\`\`

---

#### For TCS Specifically
TCS's AI.Cloud and machine learning practices show the company is investing heavily here. I'm excited to work on AI-integrated enterprise solutions.`
    },
];

export default industryQuestions;
