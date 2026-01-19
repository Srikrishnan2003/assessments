// TCS Prime Interview - Internship Questions

export const internshipQuestions = [
    {
        id: 'tcs036',
        question: 'Tell me about your internship at Accenture',
        answer: `### Accenture Internship Summary

**Duration**: 3 months (Remote)
**Role**: Full-Stack Development Intern
**Team**: Innovation & AI Tools

---

#### Project: GenAI Developer Assistant

**Problem Solved**:
Developers spend significant time on repetitive tasks - writing boilerplate code, understanding unfamiliar codebases, generating documentation. We built an AI-powered assistant to accelerate these workflows.

**My Contributions**:
| Component | Technology | My Role |
|-----------|------------|---------|
| Frontend UI | React, TypeScript | Built the chat interface and code display |
| AI Integration | Hugging Face, OpenAI API | Integrated code generation models |
| Prompt Engineering | Custom prompts | Designed prompts for better code output |
| Context Management | Vector embeddings | Maintained conversation history for coherent responses |

**Technical Highlights**:
\`\`\`javascript
// Example: Context-aware code generation
const generateCode = async (prompt, context) => {
  // Include relevant file context for better suggestions
  const enrichedPrompt = \`
    Context: \${context.currentFile}
    Previous code: \${context.recentChanges}
    Request: \${prompt}
  \`;
  
  const response = await aiModel.generate(enrichedPrompt);
  return formatCodeResponse(response);
};
\`\`\`

**Results**:
- ✅ Working prototype demonstrated to stakeholders
- ✅ Received positive feedback on usability
- ✅ Learned AI integration patterns firsthand

**Key Learnings**:
1. Prompt engineering dramatically affects AI output quality
2. Enterprise projects require extensive documentation
3. Working with senior developers accelerates learning
4. Remote collaboration requires proactive communication`
    },
    {
        id: 'tcs037',
        question: 'Tell me about your internship at Virtusa',
        answer: `### Virtusa Internship Summary

**Duration**: Ongoing (6 months)
**Role**: Full-Stack Developer Intern
**Client**: Major Banking Institution
**Project**: Charge Management System

---

#### What Is the Project?

A system for managing banking charges and fees:
- Configure different charge types and rules
- Calculate charges based on transaction data
- Generate reports for reconciliation
- Admin dashboard for charge management

**My Contributions**:
| Area | Technology | What I Built |
|------|------------|--------------|
| Frontend | React, Redux | Dashboard components, data tables, form validation |
| Backend | Spring Boot, Java | REST APIs for CRUD operations |
| Database | PostgreSQL | Query optimization, stored procedures |
| Testing | JUnit, React Testing Library | Unit and integration tests |

**Technical Challenges Solved**:

**1. Complex Data Tables**
\`\`\`javascript
// Built performant tables with 10,000+ rows
// Used virtualization to render only visible rows
<VirtualizedTable
  data={chargeData}
  rowHeight={40}
  onRowClick={handleEdit}
  sortable
  filterable
/>
\`\`\`

**2. Real-time Validation**
\`\`\`javascript
// Charge rule validation with complex business logic
const validateChargeRule = (rule) => {
  if (rule.minAmount >= rule.maxAmount) {
    return { valid: false, error: 'Min must be less than max' };
  }
  if (rule.effectiveDate < new Date()) {
    return { valid: false, error: 'Date must be in future' };
  }
  return { valid: true };
};
\`\`\`

**Impact**:
- 🎯 Reduced charge configuration time by 40%
- 🎯 Improved data accuracy with validation
- 🎯 Enabled audit trail for compliance

**Key Learnings**:
1. Enterprise apps require extensive error handling
2. Banking systems demand strict security practices
3. Agile ceremonies (standup, sprint planning) keep teams aligned
4. Code reviews improve code quality significantly`
    },
    {
        id: 'tcs038',
        question: 'What did you learn from your internships?',
        answer: `### Key Internship Learnings

#### Technical Skills

**1. Enterprise Development Practices**
| Practice | What I Learned |
|----------|----------------|
| Code Reviews | How to give and receive constructive feedback |
| Git Workflow | Feature branches, pull requests, CI/CD |
| Testing | Writing meaningful tests, not just for coverage |
| Documentation | Importance of clear, maintainable docs |

**2. Full-Stack Integration**
\`\`\`
Frontend (React) ↔ API (REST) ↔ Backend (Spring/Node) ↔ Database
       │                                                    │
       └──────────── End-to-end understanding ──────────────┘
\`\`\`

**3. AI Integration (Accenture)**
- Prompt engineering techniques
- Handling AI model responses
- Building conversational UIs
- Managing context in AI applications

---

#### Professional Skills

**1. Communication**
- Explaining technical decisions to non-technical stakeholders
- Writing clear JIRA tickets and documentation
- Presenting demos to clients

**2. Time Management**
- Estimating task effort realistically
- Prioritizing when multiple requests come in
- Asking for help before deadlines are at risk

**3. Collaboration**
- Working with remote team members across time zones
- Participating in agile ceremonies effectively
- Building rapport with teammates virtually

---

#### Mindset Shifts

| Before Internship | After Internship |
|-------------------|------------------|
| "Done means it works" | "Done means tested, reviewed, documented" |
| "I'll figure it out alone" | "Asking for help is efficient, not weak" |
| "My way is the right way" | "There are tradeoffs to every approach" |
| "Code is the product" | "Working software is the product" |

---

#### What I'd Do Differently Next Time
- Ask more questions upfront to clarify requirements
- Set up regular check-ins rather than waiting for blockers
- Document my learnings in real-time, not retrospectively`
    },
    {
        id: 'tcs039',
        question: 'How did you handle challenges during your internship?',
        answer: `### Handling Internship Challenges

#### Challenge 1: Unfamiliar Technology Stack

**Situation**: At Virtusa, I was assigned to a Spring Boot backend project despite having primarily Node.js experience.

**Approach**:
1. **Acknowledged the gap** - Told my mentor honestly that I needed ramp-up time
2. **Structured learning** - Spent first week on documentation and tutorials
3. **Paired programming** - Worked with senior developer on first few tasks
4. **Built confidence** - Took on increasingly complex tasks

**Result**: By week 3, I was contributing independently. By the end, I owned a complete API module.

---

#### Challenge 2: Vague Requirements

**Situation**: At Accenture, initial requirements for the AI assistant were unclear - "make it useful for developers."

**Approach**:
1. **Asked clarifying questions**: What tasks? For which developers? What success looks like?
2. **Created prototype**: Built quick MVP to show and gather feedback
3. **Iterated based on feedback**: Adjusted features based on reactions
4. **Documented decisions**: Recorded why we built what we built

**Result**: Final product aligned with stakeholder expectations because we validated early and often.

---

#### Challenge 3: Remote Communication

**Situation**: Working remotely, I sometimes felt disconnected and unsure if I was on track.

**Approach**:
1. **Over-communicated status**: Daily brief updates to manager
2. **Asked for feedback proactively**: "Am I on the right track?"
3. **Set up regular 1:1s**: Weekly check-ins with mentor
4. **Used async tools effectively**: Slack for quick questions, email for detailed updates

**Result**: Manager appreciated the visibility, and I never had surprise feedback.

---

### Key Takeaway
*"Challenges are opportunities to demonstrate problem-solving ability. The how matters as much as the outcome."*`
    },
    {
        id: 'tcs040',
        question: 'Describe a significant contribution during your internship',
        answer: `### Most Significant Contribution

#### Project: Charge Configuration Dashboard (Virtusa)

**The Problem**:
The existing charge configuration process was manual and error-prone:
- Admins used spreadsheets to track charge rules
- No validation before activating rules
- Audit trail was minimal for compliance

**My Solution**:
I designed and built a complete charge configuration dashboard:

\`\`\`
┌─────────────────────────────────────────────────────────┐
│           Charge Configuration Dashboard                │
├──────────────────┬──────────────────────────────────────┤
│ Charge Types     │  [Search] [+ New Charge]            │
│ ─────────────    │                                      │
│ > Transaction    │  ID    | Name         | Status      │
│ > Service        │  001   | Wire Fee     | Active      │
│ > Penalty        │  002   | Late Fee     | Draft       │
│ > Custom         │  003   | ATM Charge   | Pending     │
└──────────────────┴──────────────────────────────────────┘
\`\`\`

**Technical Implementation**:
| Component | What I Built |
|-----------|--------------|
| Data Grid | Sortable, filterable table with 10K+ rows |
| Form Builder | Dynamic forms for different charge types |
| Validation Engine | Real-time business rule validation |
| Audit Log | Tracked all configuration changes |
| Role-Based Access | Different views for Admin vs Viewer |

**Key Code Contribution**:
\`\`\`javascript
// Charge rule validation with complex business rules
const ChargeValidator = {
  validateRule: (rule) => {
    const errors = [];
    
    if (!rule.name || rule.name.length < 3) {
      errors.push('Name must be at least 3 characters');
    }
    
    if (rule.minAmount >= rule.maxAmount) {
      errors.push('Minimum amount must be less than maximum');
    }
    
    if (rule.effectiveDate <= new Date()) {
      errors.push('Effective date must be in the future');
    }
    
    return { isValid: errors.length === 0, errors };
  }
};
\`\`\`

**Impact**:
- ⏱️ Reduced configuration time from 2 hours to 15 minutes
- ✅ Eliminated data entry errors with validation
- 📋 Full audit trail for compliance requirements
- 👥 Multiple admins can work simultaneously

**Recognition**:
My manager highlighted this feature in the sprint demo, and the client specifically appreciated the usability improvements.`
    },
];

export default internshipQuestions;
