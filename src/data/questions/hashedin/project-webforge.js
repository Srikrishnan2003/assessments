
export const webForgeQuestions = [
    {
        id: 'hi-proj-wf-001',
        question: 'Explain the Architecture of WebForge.',
        answer: `### WebForge Architecture
**Type:** Visual Next.js Builder (Visual Canvas + Code Editor)
**Tech Stack:** Next.js 15, TypeScript, Tailwind CSS, Zustand, Babel (AST), Supabase.

**Core Components:**
1.  **Canvas State (Zustand):** The single source of truth for the UI. It stores a recursive tree of components (\`CanvasNode\`).
2.  **Sync Engine:** Bidirectional synchronization logic.
    *   *Canvas -> Code:* Traverses JSON tree -> Generates JSX string.
    *   *Code -> Canvas:* Parses Code (Babel) -> AST -> Updates JSON tree.
3.  **Supabase Backend:** Stores project metadata and file content (as text blobs) with Row Level Security (RLS).`
    },
    {
        id: 'hi-proj-wf-002',
        question: 'How did you implement Bidirectional Sync (Canvas <-> Code)?',
        answer: `### Bidirectional Sync Logic

This was the most complex part (Challenging).

**1. Code to Canvas (Parsing):**
*   I use \`@babel/parser\` to parse the code into an **AST (Abstract Syntax Tree)**.
*   I traverse the AST to find \`JSXElement\` nodes.
*   I map each JSX node to my internal \`ComponentNode\` structure (extracting props, children, logic).
*   This tree is then loaded into the Zustand store for rendering.

**2. Canvas to Code (Generation):**
*   When a component is dropped, I update the Zustand tree.
*   A generator function traverses this JSON tree recursively.
*   It constructs a valid JSX string (handling imports and props) to update the file content.`
    },
    {
        id: 'hi-proj-wf-003',
        question: 'How does the Drag-and-Drop system work?',
        answer: `### Drag and Drop Implementation
I used **dnd-kit** (sensor-based library).

**Logic:**
1.  **Draggables:** Sidebar components (Div, Button, Image).
2.  **Droppables:** The Canvas area and nested containers (Divs).
3.  **Validation:** I implemented a \`dragDropRules.ts\` engine.
    *   *Collision Detection:* Checks if mouse is Over, Above, or Below a component.
    *   *Constraint Checking:* Prevents illegal nesting (e.g., placing a \`div\` inside a \`button\`).
4.  **Feedback:** Shows valid drop zones (blue lines) to guide the user.`
    },
    {
        id: 'hi-proj-wf-004',
        question: 'Why did you use Zustand over Redux?',
        answer: `### Why Zustand?

1.  **Performance:** WebForge deals with large, deep trees. Redux boilerplate and Context API re-renders (whole subtree updates) were performance bottlenecks.
2.  **Transient Updates:** Zustand allows transient updates (updating state without re-rendering everything).
3.  **Immer Integration:** I used Immer middleware to handle deep immutable updates easily (like \`draft.children[0].props.style = ...\`) without spread hell.
4.  **Simplicity:** Less boilerplate than Redux.`
    },
    {
        id: 'hi-proj-wf-005',
        question: 'How would you scale this for real-time collaboration (like Figma)?',
        answer: `### Scaling to Real-Time Collaboration

Currently, it uses **Supabase**. To add collaboration:
1.  **Supabase Realtime:** specialized in PostgreSQL Change Data Capture (CDC).
2.  **Implementation:**
    *   Subscribe to \`postgres_changes\` on the \`files\` table.
    *   When User A edits, DB updates -> Supabase broadcasts event -> User B's React App receives payload -> Updates Zustand store.
3.  **Conflict Resolution:** Implement **CRDTs (Conflict-free Replicated Data Types)** or Last-Write-Wins (LWW) strategy to handle simultaneous edits.`
    }
];
