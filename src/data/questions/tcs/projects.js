// TCS Prime Interview - Project Questions

export const projectQuestions = [
    {
        id: 'tcs054',
        question: 'Tell me about WebForge project',
        answer: `### WebForge - Visual Next.js Application Builder

#### Project Overview
| Aspect | Details |
|--------|---------|
| **Type** | Personal/Portfolio Project |
| **Role** | Sole Developer |
| **Duration** | 3+ months |
| **Status** | Active Development |
| **Tech Stack** | Next.js, React, TypeScript, Monaco Editor, Tailwind CSS |

---

#### What It Does
WebForge is a visual development environment that lets users build Next.js applications through drag-and-drop without writing code manually.

**Core Features**:
1. **Visual Component Builder**: Drag-drop UI components onto canvas
2. **Real-time Preview**: See changes instantly in split view
3. **Code Editor**: Monaco-powered editor for advanced users
4. **Project Export**: Generate clean, production-ready Next.js code
5. **Component Library**: Pre-built components (buttons, cards, forms)

---

#### Technical Architecture
\`\`\`
┌─────────────────────────────────────────────────────────┐
│                    WebForge Architecture                │
├──────────────────┬──────────────────┬───────────────────┤
│   Visual Editor  │   Code Editor    │    Preview        │
│   (React DnD)    │   (Monaco)       │    (iframe)       │
├──────────────────┴──────────────────┴───────────────────┤
│                    State Management (Zustand)            │
├──────────────────────────────────────────────────────────┤
│                    Code Generation Engine                │
│       (AST manipulation → Clean React/Next.js code)     │
├──────────────────────────────────────────────────────────┤
│                    Storage (Local/Cloud)                 │
└──────────────────────────────────────────────────────────┘
\`\`\`

---

#### Key Technical Challenges Solved

**1. Drag-and-Drop System**
\`\`\`typescript
// Custom hook for component drag-drop
const useDragComponent = (component: Component) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'COMPONENT',
    item: { id: component.id, type: component.type },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  return { isDragging, drag };
};
\`\`\`

**2. Code Generation**
\`\`\`typescript
// Convert visual tree to React code
const generateCode = (component: ComponentTree): string => {
  const props = Object.entries(component.props)
    .map(([key, value]) => \`\${key}={\${JSON.stringify(value)}}\`)
    .join(' ');
  
  const children = component.children
    .map(child => generateCode(child))
    .join('\\n');
  
  return \`<\${component.type} \${props}>\${children}</\${component.type}>\`;
};
\`\`\`

---

#### Impact & Learning
- Deepened understanding of AST and code generation
- Mastered Monaco Editor integration
- Learned complex state management patterns
- Built a tool I would actually want to use`
    },
    {
        id: 'tcs055',
        question: 'Tell me about the GST Filing Software',
        answer: `### GST Filing Software

#### Project Overview
| Aspect | Details |
|--------|---------|
| **Type** | Client Project / Freelance |
| **Problem** | Manual GST filing is time-consuming and error-prone |
| **Solution** | Automated invoice processing → GSTR-1 JSON generation |
| **Users** | Small businesses, accountants |
| **Tech Stack** | Electron, React, Node.js, XLSX processing |

---

#### What It Does
Converts Excel invoices into GST-compliant JSON format ready for upload to the GST Portal.

**Workflow**:
\`\`\`
Excel Invoice Data → Validation → Tax Calculation → GSTR-1 JSON → Ready for Portal
\`\`\`

---

#### Key Features

**1. Excel Template Processing**
- Reads standardized Excel template with invoice data
- Validates required fields (GSTIN, dates, amounts)
- Handles multiple invoice types (B2B, B2C, Exports)

**2. HSN/SAC Code Management**
- Hierarchical HSN code lookup
- Tooltip descriptions for codes
- Auto-suggest based on product category

**3. Automatic Tax Calculation**
\`\`\`javascript
const calculateGST = (item: InvoiceItem, type: 'IGST' | 'CGST_SGST') => {
  const taxableValue = item.quantity * item.rate;
  const gstRate = item.gstRate / 100;
  
  if (type === 'IGST') {
    return {
      taxableValue,
      igst: taxableValue * gstRate,
      cgst: 0,
      sgst: 0,
    };
  }
  
  // CGST + SGST split for intra-state
  return {
    taxableValue,
    igst: 0,
    cgst: taxableValue * (gstRate / 2),
    sgst: taxableValue * (gstRate / 2),
  };
};
\`\`\`

**4. GSTR-1 JSON Generation**
- Follows exact GST Portal JSON schema
- Categorizes invoices by type
- Ready for direct upload

---

#### Desktop Distribution
- **Electron** for cross-platform desktop app
- Works offline (sensitive financial data stays local)
- No server costs for clients

---

#### Impact
- Reduces filing time from hours to minutes
- Eliminates manual calculation errors
- Simplifies compliance for small businesses`
    },
    {
        id: 'tcs056',
        question: 'Tell me about the Charge Management System',
        answer: `### Charge Management System (Virtusa)

#### Project Overview
| Aspect | Details |
|--------|---------|
| **Company** | Virtusa (Client: Major Bank) |
| **Role** | Full-Stack Developer Intern |
| **Duration** | 6 months ongoing |
| **Tech Stack** | React, Redux, Spring Boot, PostgreSQL |
| **Domain** | Banking - Fees & Charges |

---

#### What It Does
A system for banking operations to:
- Configure various charge types (wire fees, penalties, service charges)
- Set rules for when charges apply
- Calculate charges on transactions
- Generate reports for reconciliation

---

#### My Contributions

**1. Frontend Dashboard**
\`\`\`jsx
// Charge configuration form with validation
function ChargeConfigForm({ initialData, onSave }) {
  const [form, setForm] = useState(initialData);
  const [errors, setErrors] = useState({});
  
  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = 'Required';
    if (form.minAmount >= form.maxAmount) {
      newErrors.range = 'Min must be less than max';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  return (
    <Form onSubmit={() => validate() && onSave(form)}>
      <Input label="Charge Name" value={form.name} error={errors.name} />
      <RangeInputs min={form.minAmount} max={form.maxAmount} error={errors.range} />
      <DatePicker label="Effective Date" value={form.effectiveDate} />
    </Form>
  );
}
\`\`\`

**2. Data Table with Virtualization**
- Handles 10,000+ charge records
- Sortable, filterable columns
- Inline editing for quick updates

**3. Backend APIs**
\`\`\`java
// Spring Boot REST controller
@RestController
@RequestMapping("/api/charges")
public class ChargeController {
    
    @GetMapping
    public Page<Charge> listCharges(Pageable pageable) {
        return chargeService.findAll(pageable);
    }
    
    @PostMapping
    public Charge createCharge(@Valid @RequestBody ChargeDTO dto) {
        return chargeService.create(dto);
    }
    
    @PutMapping("/{id}")
    public Charge updateCharge(@PathVariable Long id, @Valid @RequestBody ChargeDTO dto) {
        return chargeService.update(id, dto);
    }
}
\`\`\`

---

#### Impact
- 40% reduction in configuration time
- Zero data entry errors (validation)
- Full audit trail for compliance`
    },
    {
        id: 'tcs057',
        question: 'Tell me about Focus Flow',
        answer: `### Focus Flow - Productivity Application

#### Project Overview
| Aspect | Details |
|--------|---------|
| **Type** | Personal Project |
| **Purpose** | All-in-one productivity tool |
| **Tech Stack** | Next.js, Convex, Clerk, Tailwind CSS |
| **Status** | In Development |

---

#### Core Features

**1. Task Management**
- Kanban boards for project organization
- Due dates, priorities, labels
- Subtasks and checklists

**2. Note Taking**
- Rich text editor with markdown support
- Links between notes (wiki-style)
- Quick capture for ideas

**3. Whiteboard/Canvas**
- Infinite canvas for brainstorming
- Draw, add sticky notes, images
- Collaborative (planned)

**4. Focus Timer**
- Pomodoro technique support
- Session tracking
- Integration with tasks

---

#### Technical Highlights

**Real-time Sync with Convex**
\`\`\`typescript
// Tasks auto-sync across devices
const tasks = useQuery(api.tasks.list, { projectId });
const updateTask = useMutation(api.tasks.update);

// Updates appear instantly on all connected clients
<TaskCard 
  task={task}
  onComplete={() => updateTask({ id: task._id, completed: true })}
/>
\`\`\`

**Authentication with Clerk**
\`\`\`tsx
// Protected app with clerk middleware
export default authMiddleware({
  publicRoutes: ["/", "/pricing"],
  ignoredRoutes: ["/api/webhooks"],
});
\`\`\`

**Canvas with Excalidraw**
- Decided to use Excalidraw after evaluating custom implementation
- Customized styling to match app theme
- Integrated with note-taking system

---

#### Learning Outcomes
- Real-time database patterns
- Third-party library integration
- Feature prioritization (what's MVP vs nice-to-have)`
    },
    {
        id: 'tcs058',
        question: 'How do you choose technologies for a project?',
        answer: `### Technology Selection Framework

#### My Decision Process

**Step 1: Requirements Analysis**
| Question | Considerations |
|----------|----------------|
| What's the scale? | Prototype vs production |
| Who's the team? | Solo vs team, experience levels |
| What's the timeline? | Quick MVP vs long-term project |
| What's the domain? | E-commerce, banking, consumer |

---

**Step 2: Evaluation Criteria**

\`\`\`
For each technology option, I evaluate:

1. MATURITY: Is it stable? Active maintenance?
2. ECOSYSTEM: Libraries, tools, integrations?
3. LEARNING CURVE: How fast can team be productive?
4. PERFORMANCE: Does it meet requirements?
5. HIRING: Can we find developers if needed?
6. FUTURE: Will it be relevant in 2-3 years?
\`\`\`

---

**Step 3: Real Examples from My Projects**

**WebForge Technology Choices**:
| Decision | Options Considered | Choice | Why |
|----------|-------------------|--------|-----|
| Framework | React, Vue, Svelte | Next.js | SSR, routing, ecosystem |
| State | Redux, Zustand, Jotai | Zustand | Simpler API, sufficient for needs |
| Editor | CodeMirror, Ace, Monaco | Monaco | VS Code familiarity, features |
| Styling | CSS, Sass, Tailwind | Tailwind | Speed, consistency |

**GST Software**:
| Decision | Choice | Why |
|----------|--------|-----|
| Desktop | Electron | Cross-platform, web skills reusable |
| Excel | xlsx library | Best Node.js Excel support |
| Offline-first | Local storage | Sensitive data, no server costs |

---

**Step 4: Prototype When Uncertain**
\`\`\`
If two options seem equal:
1. Build a small proof-of-concept with each
2. Compare: developer experience, performance, edge cases
3. Decide based on hands-on experience, not just docs
\`\`\`

---

#### Key Principle
*"Choose boring technology for crucial paths, experiment on edges."*
- Core: Proven, stable technologies
- Non-critical features: Try new things, learn`
    },
];

export default projectQuestions;
