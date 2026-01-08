// TCS Prime Interview - Tools & Technologies Questions

export const toolsQuestions = [
    {
        id: 'tcs131',
        question: 'Explain your experience with Tailwind CSS',
        answer: `"I use Tailwind extensively in my projects - WebForge, Focus Flow, and Charge Management System frontend. I appreciate the utility-first approach that speeds up development. Key features I use:
• Responsive utilities (sm, md, lg prefixes)
• Flexbox and Grid utilities for layouts
• Custom color schemes
• JIT compiler for smaller bundles
• Component extraction with @apply

I find it faster than writing custom CSS while maintaining design consistency."`
    },
    {
        id: 'tcs132',
        question: 'How do you use GitHub Copilot in your workflow?',
        answer: `"GitHub Copilot accelerates my development significantly:
• Boilerplate code generation (API routes, components)
• Suggesting implementation patterns
• Writing repetitive code (CRUD operations)
• Test case generation
• Documentation comments

However, I always review suggestions carefully, ensure code quality, and understand what Copilot generates. It's a productivity multiplier, not a replacement for understanding code. I estimate it saves me 30-40% of coding time on routine tasks."`
    },
    {
        id: 'tcs133',
        question: 'What is Convex? How did you use it?',
        answer: `"Convex is a backend-as-a-service platform that replaces traditional backends. It provides:
• Real-time database with automatic subscriptions
• Serverless functions
• TypeScript support with type safety
• Built-in authentication
• Automatic API generation

I used it in projects requiring real-time updates. Instead of setting up Express, database, and WebSockets separately, Convex handles everything. Writing queries and mutations in TypeScript with automatic type inference is very productive. It's particularly good for rapid prototyping."`
    },
    {
        id: 'tcs134',
        question: 'Explain your experience with Clerk',
        answer: `"Clerk is a modern authentication solution I've used for user management. Features:
• Drop-in authentication components
• Social login (Google, GitHub)
• Multi-factor authentication
• User management dashboard
• Session management
• Webhooks for user events

It saved me weeks of authentication implementation time. I integrated it by adding Clerk components to my Next.js app, wrapping the app with ClerkProvider, and using useUser() hook for auth state. Much simpler than building authentication from scratch."`
    },
    {
        id: 'tcs135',
        question: 'What is your experience with Spring Boot?',
        answer: `"I used Spring Boot for the Charge Management System backend at Virtusa. Key features I implemented:
• RESTful APIs with @RestController
• JPA repositories for database operations
• Spring Security for JWT authentication
• @Service layer for business logic
• Exception handling with @ControllerAdvice
• Application properties configuration

Spring Boot's convention-over-configuration approach and auto-configuration made it easy to build a production-ready backend quickly."`
    },
];

export default toolsQuestions;
