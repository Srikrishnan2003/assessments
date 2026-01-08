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
        question: 'Tell me about your Charge Management System',
        answer: `"I built this as a capstone project at Virtusa. It's a banking platform for managing charges for customers and admin users. I created a Spring Boot backend handling authentication, charge configuration, transaction history, and billing logic. The frontend is a React dashboard with role-based access control, allowing users to view, apply, and audit charges. I designed modular REST APIs with structured data models that integrate seamlessly with banking workflows. This project taught me about enterprise-level security, role-based permissions, and building scalable financial systems."`
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
        answer: `"In my projects, I used **Clerk** for authentication - a modern auth solution that handles user management, sessions, and security. For the Charge Management System, I implemented **Spring Boot Security** with **JWT tokens** for stateless authentication. I also ensured role-based access control to restrict features based on user roles (customer vs admin)."`
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
        question: 'Explain the architecture of your Charge Management System',
        answer: `"The backend uses Spring Boot with a layered architecture:
• **Controller layer**: REST endpoints for CRUD operations
• **Service layer**: Business logic for charge calculations and billing
• **Repository layer**: JPA for database operations
• **Security layer**: JWT authentication and role-based authorization

The frontend React application makes API calls to these endpoints. I used Spring Security for authentication and implemented custom filters for JWT validation. The database schema includes tables for users, charges, transactions, and audit logs."`
    },
    {
        id: 'tcs095',
        question: 'How did you implement role-based access in Charge Management System?',
        answer: `"I used Spring Security with custom UserDetailsService. Each user has roles (CUSTOMER, ADMIN). Endpoints are annotated with \`@PreAuthorize\` to restrict access. For example, charge configuration endpoints are admin-only. The frontend conditionally renders UI elements based on user roles stored in the authentication token. I also implemented audit logging to track who performs what actions."`
    },
    {
        id: 'tcs096',
        question: 'What billing logic did you implement in Charge Management System?',
        answer: `"The system calculates charges based on transaction types and amounts. I implemented:
• Fixed charges for specific transaction types
• Percentage-based charges
• Tiered pricing based on volume
• Monthly aggregation for billing cycles
• Transaction history with charge breakdowns

The service layer contains the calculation engine that applies relevant charges based on configured rules."`
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
        question: 'What desktop automation scripts have you built?',
        answer: `"I've built several productivity scripts:
1. **File organizer**: Automatically sorts downloads by file type
2. **Window manager**: Keyboard shortcuts for window positioning
3. **Text expander**: Custom snippets for frequently used code
4. **Batch renamer**: Renames files based on patterns
5. **Backup automation**: Scheduled backups of project folders

I used Node.js for file operations and AHK for system-level interactions and hotkeys. These save me significant time daily."`
    },
];

export default projectQuestions;
