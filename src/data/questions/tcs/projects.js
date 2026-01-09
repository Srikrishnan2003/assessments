// TCS Prime Interview - Project-Based Questions

export const projectQuestions = [
    {
        id: 'tcs036',
        question: 'Explain your WebForge project',
        answer: `"WebForge is a visual Next.js builder I created for my final year project. It allows developers to build production-ready Next.js applications using a drag-and-drop interface combined with live code editing. I built a Figma-style canvas with a Monaco editor (like VS Code) that synchronizes visual design with code. The system implements a procedural Next.js workflow with file-system navigation, layout control, and reusable components. The goal was to minimize the design-development mismatch by generating clean, production-ready Next.js code directly from visual designs."

**Key Technical Points:**
• Built with Next.js and React
• Integrated Monaco editor for live code editing
• Implemented drag-and-drop UI with React DnD
• Real-time synchronization between visual and code views
• File-system based routing generation`
    },
    {
        id: 'tcs037',
        question: 'Tell me about your GST Filing Software',
        answer: `"I built a Next.js 16 web application for processing GST invoices and generating GSTR-1 compliant JSON files for upload to the Indian GST Portal. The app accepts Excel or JSON files, validates invoices using Zod schemas, and outputs portal-ready JSON. It includes a comprehensive HSN/SAC code master with 680+ headings for tax calculations and a step-by-step workflow for upload → validate → review → download."

**Key Technical Points:**
• Built with **Next.js 16** (App Router) and **TypeScript**
• **Zod** schemas for strict invoice validation (GSTIN, dates, tax rates)
• **Zustand** for state management with mode-aware selectors
• **ExcelJS** for parsing Excel files with header normalization
• HSN code lookup system with hierarchical data (chapter → heading → sub-heading)
• Generates GSTR-1 JSON matching GST Portal specifications`
    },
    {
        id: 'tcs038',
        question: 'Explain your GenAI Software Developer Assistant',
        answer: `"I created this chatbot using Next.js and Hugging Face's DeepSeek Coder R1 model during my Accenture internship. It helps developers with code generation, testing, and documentation. I engineered custom prompts tailored to each task type - whether writing code, creating tests, or generating documentation. The system includes a memory mechanism that saves the last 5 messages to maintain context across conversations. This project demonstrated how AI can automate repetitive development tasks and boost productivity."`
    },
    {
        id: 'tcs039',
        question: 'What is Focus Flow?',
        answer: `"Focus Flow is an all-in-one productivity web app I built for students. It includes note-taking with Speech-to-Text and Text-to-Speech, task management, and a collaborative whiteboard. I designed a Kanban-style task manager using Next.js and Tailwind CSS with visual status tracking and calendar integration for real-time notifications. The interface is lightweight and mobile-responsive, making it accessible across devices. This project taught me about building cohesive user experiences and integrating multiple features into a single application."`
    },
    {
        id: 'tcs040',
        question: 'What challenges did you face in WebForge?',
        answer: `"The biggest challenge was synchronizing the visual canvas with code in real-time without performance issues. I had to implement efficient state management to track component positions, styles, and properties. Another challenge was generating clean, idiomatic Next.js code from visual designs - I had to ensure proper file structure, routing, and component composition. I solved this by creating a code generation engine that follows Next.js conventions and best practices."`
    },
    {
        id: 'tcs041',
        question: 'How did you implement authentication in your projects?',
        answer: `"In my projects, I used **Clerk** for authentication - a modern auth solution that handles user management, sessions, and security. For the GST Filing Software, it's a local-first application designed to run without authentication since it handles sensitive tax data locally. I also have experience with **JWT tokens** for stateless authentication in API-based systems."`
    },
    {
        id: 'tcs091',
        question: 'How did you implement real-time synchronization in WebForge?',
        answer: `"I used React state management to maintain a single source of truth for component data. When users drag elements on the canvas, state updates trigger code generation. Similarly, when code is edited in Monaco, parsing updates the visual canvas. I implemented a debounced update mechanism to avoid performance issues from frequent updates. The synchronization layer uses a data structure that maps visual components to their code representations."`
    },
    {
        id: 'tcs092',
        question: 'What file structure does WebForge generate?',
        answer: `"WebForge generates a standard Next.js project structure:
• \`app/\` or \`pages/\` directory for routes
• \`components/\` for reusable components
• \`styles/\` for global styles and Tailwind config
• \`public/\` for static assets
• \`layout.tsx\` for shared layouts
• Each component gets its own file with proper imports and exports"`
    },
    {
        id: 'tcs093',
        question: 'How did you handle component reusability in WebForge?',
        answer: `"I created a component library with predefined elements (buttons, cards, forms). When users drag these onto the canvas, the system generates React components with proper props. I implemented a props panel where users can customize properties. The code generator ensures components are extracted to separate files if used multiple times, promoting DRY principles."`
    },
    {
        id: 'tcs094',
        question: 'Explain the architecture of your GST Filing Software',
        answer: `"The GST Filing Software uses a layered architecture:

• **App Layer** (\`app/page.tsx\`): Main dashboard with metric cards, invoice table, and download modal
• **Components Layer**: Modular React components for invoice-table, tax-summary, error-editor, JSON comparator
• **Services Layer**: Business logic in \`excel-processor.ts\`, \`json-parser.ts\`, and processors for B2B/CDNR
• **Schemas Layer**: Zod validation schemas for invoice validation
• **Data Layer**: HSN master with 680+ headings, SAC codes for services
• **Store Layer**: Zustand global state with mode-aware selectors

\`\`\`typescript
// Workflow: Upload → Parse → Validate → Group → Download
processExcelFile(file, type: 'B2B' | 'CDNR')
  → parseExcel()           // Read with ExcelJS
  → normalizeHeaders()     // Map headers to schema
  → processor.validate()   // Zod validation
  → processor.group()      // Group into invoices
  → return { invoices, errors, summary }
\`\`\``
    },
    {
        id: 'tcs095',
        question: 'How did you implement validation in the GST Filing Software?',
        answer: `"I used **Zod** for strict schema validation. Each invoice row is validated against comprehensive rules:

\`\`\`typescript
B2BInvoiceRowSchema = z.object({
  gstin: z.string().regex(GSTIN_REGEX),     // 15-char GSTIN format
  invoiceNumber: z.string().max(16),
  invoiceDate: z.string().regex(/DD-MM-YYYY/),
  invoiceValue: z.number().positive(),
  placeOfSupply: z.string().regex(/^\\d{2}$/), // State code
  rate: z.number().refine(val => [0,5,12,18,28].includes(val)),
  taxableValue: z.number().positive(),
  // ... tax amounts, HSN, etc.
})
\`\`\`

Invalid rows are captured with specific error messages, and users can **edit** errors inline and re-validate or **discard** invalid rows."`
    },
    {
        id: 'tcs096',
        question: 'What is the HSN Master system in your GST app?',
        answer: `"I built a hierarchical HSN (Harmonized System Nomenclature) code lookup system with:

| Level | Digits | Example | Description |
|-------|--------|---------|-------------|
| Chapter | 2 | \`84\` | Machinery |
| Heading | 4 | \`8471\` | Computers |
| Sub-heading | 6 | \`847130\` | Laptops |
| Tariff | 8 | \`84713010\` | Personal computers |

**Key Functions:**
\`\`\`typescript
getHSNDescription("84821090")  // "Other ball bearings"
getHSNGSTRate("870321")        // 28
getHSNHierarchy("847130")      // { chapter, heading, subheading, gstRate }
\`\`\`

The master data includes 99 chapters and 680+ headings with GST rate mappings."`
    },
    {
        id: 'tcs097',
        question: 'How did you manage context in your GenAI Assistant?',
        answer: `"I implemented a conversation memory system that stores the last 5 messages. Each API call includes this context in the prompt. I structured it as:

\`\`\`
Previous conversation:
User: [message 1]
Assistant: [response 1]
...
Current query: [new message]
\`\`\`

This allows the model to maintain context for follow-up questions. I used a circular buffer to keep memory bounded and prevent token limit issues."`
    },
    {
        id: 'tcs098',
        question: 'What challenges did you face with the Hugging Face model integration?',
        answer: `"The main challenges were:
1. **Response time**: Model inference can be slow. I added loading indicators and streaming responses where possible.
2. **Prompt engineering**: Getting consistent output format required iterative prompt refinement
3. **Token limits**: Had to balance context window with conversation history
4. **Error handling**: Model sometimes generates incomplete code. I added validation and retry logic
5. **Cost management**: Implemented request throttling and caching for common queries"`
    },
    {
        id: 'tcs099',
        question: 'How did you implement Speech-to-Text and Text-to-Speech in Focus Flow?',
        answer: `"I used the Web Speech API:
• **STT**: \`SpeechRecognition\` API to convert voice to text in notes
• **TTS**: \`SpeechSynthesis\` API to read notes aloud

\`\`\`javascript
// STT
const recognition = new webkitSpeechRecognition();
recognition.onresult = (event) => {
  const transcript = event.results[0][0].transcript;
  setNote(transcript);
};

// TTS
const utterance = new SpeechSynthesisUtterance(text);
speechSynthesis.speak(utterance);
\`\`\`

I added error handling for browser compatibility and microphone permissions."`
    },
    {
        id: 'tcs100',
        question: 'Explain the Kanban implementation in Focus Flow',
        answer: `"I created a Kanban board with three columns: To Do, In Progress, Done. Each task is a draggable card. I used React DnD or a similar library for drag-and-drop. State management tracks task positions and status. When a task is dropped in a new column, its status updates and the UI re-renders. I added visual status indicators, due dates, and priority flags. The calendar integration uses a date library like date-fns to show tasks by deadline."`
    },
    {
        id: 'tcs101',
        question: 'How did you make Focus Flow mobile-responsive?',
        answer: `"I used Tailwind CSS's responsive utilities:
• Mobile-first approach starting with small screens
• Flexbox and Grid for fluid layouts
• Responsive breakpoints (sm, md, lg, xl)
• Collapsible navigation menu on mobile
• Touch-friendly button sizes (min 44x44px)
• Tested on multiple devices using Chrome DevTools

\`\`\`javascript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
\`\`\`"`
    },
    {
        id: 'tcs102',
        question: 'How does the JSON generation work in your GST app?',
        answer: `"The GST Filing Software generates GSTR-1 compliant JSON that can be directly uploaded to the GST Portal:

\`\`\`typescript
// store/gst-store.ts → downloadJSON()
generateGSTR1JSON(gstin, filingPeriod)
\`\`\`

The output includes:
• **B2B Section**: Invoices grouped by recipient GSTIN
• **HSN Summary**: Aggregated by HSN code and tax rate
• **Document Issue Summary**: Invoice range statistics

I ensured the JSON structure matches the exact format required by the GST Portal, including proper field names, date formats, and numeric precision."`
    },
    {
        id: 'tcs103',
        question: 'What challenges did you face building the GST Filing Software?',
        answer: `"The main challenges were:
1. **Header normalization**: Excel files from different sources have varying column names. I built a flexible header mapping system.
2. **Validation complexity**: GST rules are intricate (GSTIN format, state codes, tax rate validation). Zod schemas helped enforce strict rules.
3. **HSN code hierarchy**: Building a lookup system for 680+ codes with chapter/heading/sub-heading relationships required careful data structuring.
4. **Error UX**: Making it easy for users to fix validation errors inline rather than re-uploading files.
5. **Portal compatibility**: Ensuring the generated JSON matches the exact format expected by the GST Portal."`
    },
    {
        id: 'tcs104',
        question: 'Explain state management in your GST app with Zustand',
        answer: `"I used Zustand for global state management with mode-aware selectors:

\`\`\`typescript
interface GSTStore {
  currentStep: 1 | 2 | 3 | 4          // Workflow step
  returnType: 'B2B' | 'CDNR'          // Current mode
  b2bInvoices: B2BInvoice[]           // Valid B2B invoices
  cdnrInvoices: CDNRInvoice[]         // Valid CDNR invoices
  b2bErrors: ErrorRow[]               // B2B validation errors
  cdnrErrors: ErrorRow[]              // CDNR validation errors
  
  // Actions
  addFiles(files: File[])
  processFiles(): Promise<void>
  downloadJSON(gstin, period)
  updateErrorRow(index, data): boolean
  reset()
}
\`\`\`

**Selector Hooks** provide mode-aware access:
\`\`\`typescript
useCurrentStep()        // Current workflow step
useReturnType()         // 'B2B' or 'CDNR'
useCurrentInvoices()    // Invoices for current mode
useErrors()             // Errors for current mode
useValidationSummary()  // { total, valid, error }
\`\`\`"`
    },
];

export default projectQuestions;
