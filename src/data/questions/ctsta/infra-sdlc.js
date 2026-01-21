// Cognizant GenC - Infrastructure: SDLC, Agile & Git Questions

export const infraSdlcQuestions = [
    {
        id: 'ctsta-sdlc-001',
        question: 'Explain the Software Development Life Cycle (SDLC) phases.',
        answer: `### SDLC Phases

### 1. Planning/Requirements
- Gather business requirements
- Feasibility study
- Resource estimation
- Project plan

### 2. Analysis
- Detailed requirement analysis
- Create SRS (Software Requirements Specification)
- Identify risks

### 3. Design
- System architecture
- Database design
- UI/UX design
- Create design documents

### 4. Development/Coding
- Write code
- Follow coding standards
- Code reviews
- Version control

### 5. Testing
- Unit testing
- Integration testing
- System testing
- User acceptance testing (UAT)

### 6. Deployment
- Release to production
- User training
- Documentation

### 7. Maintenance
- Bug fixes
- Updates and enhancements
- Performance monitoring

### SDLC Models
| Model | Best For |
|-------|----------|
| Waterfall | Fixed requirements |
| Agile | Evolving requirements |
| Spiral | Risk-heavy projects |
| V-Model | Testing-focused |
| Iterative | Large projects |`
    },
    {
        id: 'ctsta-sdlc-002',
        question: 'Explain Agile methodology and its principles.',
        answer: `### Agile Methodology

### Agile Manifesto Values
1. **Individuals and interactions** over processes and tools
2. **Working software** over comprehensive documentation
3. **Customer collaboration** over contract negotiation
4. **Responding to change** over following a plan

### 12 Agile Principles (Summary)
1. Satisfy customer through early and continuous delivery
2. Welcome changing requirements
3. Deliver working software frequently
4. Business and dev work together daily
5. Build projects around motivated individuals
6. Face-to-face conversation is best
7. Working software is primary measure of progress
8. Maintain sustainable development pace
9. Continuous attention to technical excellence
10. Simplicity - maximize work not done
11. Self-organizing teams
12. Regular reflection and adjustment

### Agile Frameworks
| Framework | Key Feature |
|-----------|-------------|
| Scrum | Sprints, roles, ceremonies |
| Kanban | Visual boards, flow |
| XP | Technical practices |
| SAFe | Enterprise scaling |

### Agile vs Waterfall
| Aspect | Agile | Waterfall |
|--------|-------|-----------|
| Approach | Iterative | Sequential |
| Requirements | Flexible | Fixed upfront |
| Delivery | Incremental | Single release |
| Customer | Continuous involvement | End involvement |
| Changes | Welcomed | Discouraged |`
    },
    {
        id: 'ctsta-sdlc-003',
        question: 'Explain Scrum framework: roles, ceremonies, and artifacts.',
        answer: `### Scrum Framework

### Scrum Roles
| Role | Responsibility |
|------|----------------|
| Product Owner | Define backlog, priorities, requirements |
| Scrum Master | Facilitate process, remove blockers |
| Development Team | Build the product (cross-functional) |

### Scrum Ceremonies

**Sprint Planning**
- Start of sprint
- Select items from backlog
- Define sprint goal

**Daily Standup (15 min)**
- What did I do yesterday?
- What will I do today?
- Any blockers?

**Sprint Review**
- Demo completed work
- Get stakeholder feedback
- End of sprint

**Sprint Retrospective**
- What went well?
- What to improve?
- Action items for next sprint

### Scrum Artifacts

**Product Backlog**
- Prioritized list of features
- Managed by Product Owner
- Living document

**Sprint Backlog**
- Items committed for current sprint
- Owned by dev team

**Increment**
- Sum of all completed items
- Must be "Done" and releasable

### Sprint Timeline
- Length: 1-4 weeks (commonly 2 weeks)
- Fixed duration (timeboxed)
- No changes mid-sprint`
    },
    {
        id: 'ctsta-sdlc-004',
        question: 'Explain Git basics: branches, commits, merge.',
        answer: `### Git Fundamentals

### Basic Concepts
- **Repository**: Project folder with version history
- **Commit**: Snapshot of changes
- **Branch**: Independent line of development
- **Merge**: Combine branches
- **Remote**: Server-hosted repository

### Essential Commands
\`\`\`bash
# Setup
git init                    # Initialize repo
git clone <url>             # Clone remote repo

# Daily workflow
git status                  # Check status
git add .                   # Stage all changes
git commit -m "message"     # Commit changes
git push                    # Push to remote
git pull                    # Get latest changes

# Branches
git branch                  # List branches
git branch feature-x        # Create branch
git checkout feature-x      # Switch branch
git checkout -b feature-x   # Create and switch

# Merge
git checkout main
git merge feature-x         # Merge feature into main
\`\`\`

### Common Workflow
1. \`git pull\` - Get latest
2. \`git checkout -b feature\` - Create branch
3. Make changes
4. \`git add .\` - Stage changes
5. \`git commit -m "msg"\` - Commit
6. \`git push origin feature\` - Push
7. Create Pull Request
8. Merge after review`
    },
    {
        id: 'ctsta-sdlc-005',
        question: 'Explain Git merge vs rebase.',
        answer: `### Merge vs Rebase

### Git Merge
- Combines branches with a merge commit
- Preserves complete history
- Non-destructive

\`\`\`bash
git checkout main
git merge feature
# Creates merge commit
\`\`\`

**History:**
\`\`\`
      A---B---C feature
     /         \\
D---E---F---G---M main (merge commit)
\`\`\`

### Git Rebase
- Moves/rewrites commits to new base
- Creates linear history
- Rewrites commit history

\`\`\`bash
git checkout feature
git rebase main
# Replays feature commits on top of main
\`\`\`

**History:**
\`\`\`
              A'--B'--C' feature
             /
D---E---F---G main
\`\`\`

### Comparison
| Aspect | Merge | Rebase |
|--------|-------|--------|
| History | Preserves all | Linear |
| Commits | Merge commit added | Rewritten |
| Conflicts | Once at merge | Per commit |
| Safe | Yes | Only on private branches |

### Best Practices
- **Merge**: For shared branches, PRs
- **Rebase**: For local feature branches
- **Never rebase** public/shared branches
- Use \`rebase\` for clean history before PR`
    },
    {
        id: 'ctsta-sdlc-006',
        question: 'Explain CI/CD (Continuous Integration/Continuous Deployment).',
        answer: `### CI/CD Pipeline

### Continuous Integration (CI)
- Developers frequently merge code
- Automated build on each commit
- Automated tests run
- Quick feedback on issues

**CI Steps:**
1. Code commit
2. Trigger build
3. Run unit tests
4. Run code analysis
5. Report results

### Continuous Delivery (CD)
- Automated deployment to staging
- Manual approval for production
- Always in deployable state

### Continuous Deployment
- Fully automated to production
- Every passing build is deployed
- No manual intervention

### CI/CD Tools
| Tool | Type |
|------|------|
| Jenkins | Self-hosted |
| GitHub Actions | GitHub native |
| GitLab CI | GitLab native |
| CircleCI | Cloud |
| Azure DevOps | Microsoft |

### Example Pipeline
\`\`\`yaml
# GitHub Actions example
name: CI/CD
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - run: npm install
      - run: npm test
      - run: npm run build
      - run: npm run deploy
\`\`\`

### Benefits
- Early bug detection
- Faster releases
- Reduced manual errors
- Consistent deployments`
    },
    {
        id: 'ctsta-sdlc-007',
        question: 'What is code review and why is it important?',
        answer: `### Code Review

### What is Code Review?
- Process of examining code changes
- By team members (not the author)
- Before merging to main branch

### Benefits
| Benefit | Description |
|---------|-------------|
| Quality | Catch bugs early |
| Knowledge sharing | Team learns codebase |
| Standards | Ensure consistency |
| Security | Identify vulnerabilities |
| Mentorship | Junior developers learn |

### Code Review Checklist
- [ ] Does it work correctly?
- [ ] Is code readable and maintainable?
- [ ] Are there unit tests?
- [ ] Does it follow coding standards?
- [ ] Any security concerns?
- [ ] Is error handling proper?
- [ ] Documentation updated?

### Best Practices

**For Authors:**
- Keep changes small
- Write clear PR descriptions
- Self-review before submitting
- Respond to feedback promptly

**For Reviewers:**
- Be constructive, not critical
- Focus on code, not person
- Explain the "why"
- Approve when good enough

### Review Comment Examples
\`\`\`
❌ "This is wrong"
✅ "Consider using .map() here for better readability"

❌ "Why did you do this?"
✅ "Could you explain the reasoning behind this approach?"
\`\`\``
    },
    {
        id: 'ctsta-sdlc-008',
        question: 'Explain different testing types in software development.',
        answer: `### Testing Types

### Testing Pyramid
\`\`\`
        /\\
       /  \\  E2E Tests (Few)
      /----\\
     /      \\ Integration Tests
    /--------\\
   /          \\ Unit Tests (Many)
  /______________\\
\`\`\`

### Unit Testing
- Test individual functions/methods
- Isolated from dependencies (mocking)
- Fast, run frequently
- Example: Jest, JUnit

### Integration Testing
- Test component interactions
- Database, API integrations
- Slower than unit tests
- Example: Testing API endpoints

### End-to-End (E2E) Testing
- Test complete user workflows
- Browser automation
- Slowest, most brittle
- Example: Selenium, Cypress

### Other Testing Types
| Type | Purpose |
|------|---------|
| Smoke | Basic functionality check |
| Regression | Ensure existing features work |
| Performance | Speed and load testing |
| Security | Vulnerability testing |
| UAT | User acceptance testing |

### Test Coverage
- Percentage of code tested
- Aim for 70-80%
- 100% not always practical

### TDD (Test-Driven Development)
1. Write failing test
2. Write minimum code to pass
3. Refactor
4. Repeat`
    },
    {
        id: 'ctsta-sdlc-009',
        question: 'Explain Git branching strategies.',
        answer: `### Git Branching Strategies

### 1. GitFlow
- **main**: Production code
- **develop**: Integration branch
- **feature/**: New features
- **release/**: Prepare releases
- **hotfix/**: Production fixes

\`\`\`
feature/* → develop → release/* → main
                           ↓
                       hotfix/* → main
\`\`\`

**Best for:** Scheduled releases, versioning

### 2. GitHub Flow
- **main**: Always deployable
- **feature/**: All development

\`\`\`
main ← feature branches ← deploy immediately
\`\`\`

**Best for:** Continuous deployment

### 3. Trunk-Based Development
- Everyone commits to main
- Short-lived branches (< 1 day)
- Feature flags for incomplete work

**Best for:** CI/CD, small teams

### Branch Naming Conventions
\`\`\`
feature/add-login
bugfix/fix-header
hotfix/security-patch
release/v1.2.0
\`\`\`

### Comparison
| Strategy | Complexity | Release |
|----------|------------|---------|
| GitFlow | High | Scheduled |
| GitHub Flow | Low | Continuous |
| Trunk-Based | Medium | Continuous |

### Best Practices
- Delete merged branches
- Keep branches short-lived
- Protected main branch
- Require code reviews`
    },
    {
        id: 'ctsta-sdlc-010',
        question: 'Explain DevOps principles and practices.',
        answer: `### DevOps

### What is DevOps?
- Culture + Practices + Tools
- Bridge between Dev and Ops
- Enable faster, reliable deliveries

### DevOps Principles
1. **Collaboration**: Dev + Ops work together
2. **Automation**: Reduce manual work
3. **Continuous Improvement**: Learn and adapt
4. **Customer Focus**: Deliver value
5. **Fast Feedback**: Quick error detection

### DevOps Practices
| Practice | Description |
|----------|-------------|
| CI/CD | Automated build and deploy |
| IaC | Infrastructure as Code |
| Monitoring | Track performance |
| Automation | Scripts, pipelines |
| Containerization | Docker, Kubernetes |

### DevOps Tools
| Category | Tools |
|----------|-------|
| CI/CD | Jenkins, GitHub Actions |
| Containers | Docker, Kubernetes |
| IaC | Terraform, Ansible |
| Monitoring | Prometheus, Grafana |
| Logging | ELK Stack, Splunk |

### DevOps Lifecycle
\`\`\`
Plan → Code → Build → Test → Release → Deploy → Operate → Monitor
  ↑__________________________________________________|
\`\`\`

### Benefits
- Faster time to market
- Improved collaboration
- Higher quality software
- Faster recovery from failures
- More stable environments

### Key Metrics
- **Deployment frequency**: How often you deploy
- **Lead time**: Code to production time
- **MTTR**: Mean time to recovery
- **Change failure rate**: Failed deployments`
    }
];

export default infraSdlcQuestions;
