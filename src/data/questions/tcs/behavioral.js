// TCS Prime Interview - Behavioral Questions

export const behavioralQuestions = [
    {
        id: 'tcs124',
        question: 'Describe a time you had to learn a new technology quickly',
        answer: `"When I started building WebForge, I had limited experience with Monaco Editor integration. I had a week to create a working prototype. I approached it systematically: first read the official documentation, then studied examples from VS Code's implementation, built a minimal working version, and iteratively added features. I used GitHub Copilot to understand complex patterns faster. Within a week, I had a functioning code editor with syntax highlighting and auto-complete. This taught me how to break down complex problems and leverage available resources effectively."`
    },
    {
        id: 'tcs125',
        question: 'Tell me about a time you disagreed with a team member',
        answer: `"During the Charge Management System project at Virtusa, a team member suggested storing sensitive charge configurations in localStorage for faster access. I disagreed due to security concerns - localStorage is vulnerable to XSS attacks. I explained the risks and proposed using encrypted session tokens with server-side storage instead. I backed my suggestion with security best practices documentation. We discussed the trade-offs and agreed on the more secure approach. This taught me the importance of constructive disagreement and backing opinions with facts."`
    },
    {
        id: 'tcs126',
        question: 'How do you handle tight deadlines?',
        answer: `"I prioritize tasks using the MIP framework - Most Important Problem first. I break projects into smaller milestones and focus on MVP features first. During my Accenture internship, I had to deliver the GenAI Assistant in a tight timeframe. I identified core features (code generation, basic memory), implemented those first, then added enhancements. I communicated progress regularly and set realistic expectations. I also use my Focus Flow app's Kanban board to visualize and track tasks. This approach helps me deliver working solutions on time."`
    },
    {
        id: 'tcs127',
        question: 'Describe a project that didn\'t go as planned',
        answer: `"In an early version of Focus Flow, I tried to build the whiteboard feature from scratch, which took much longer than expected. I realized I was reinventing the wheel. I pivoted to using an existing library (like React-Canvas or Excalidraw), customized it for our needs, and saved significant time. This taught me to evaluate build vs. buy decisions and leverage existing solutions when appropriate. It's about solving problems efficiently, not building everything from zero."`
    },
    {
        id: 'tcs128',
        question: 'How do you keep your code maintainable?',
        answer: `1. **Clear naming**: Descriptive variable and function names
2. **Single responsibility**: Functions do one thing
3. **DRY principle**: Don't Repeat Yourself
4. **Comments**: Explain 'why', not 'what'
5. **Consistent formatting**: ESLint, Prettier
6. **TypeScript**: Type safety prevents bugs
7. **Modular structure**: Organized folder structure
8. **Documentation**: README, API docs
9. **Tests**: Ensure code works as expected`
    },
    {
        id: 'tcs129',
        question: 'What motivates you in software development?',
        answer: `"I'm motivated by solving real problems and seeing people use what I build. Creating WebForge and watching it streamline the development process is incredibly satisfying. I love the continuous learning aspect - there's always new technologies and patterns to explore. The immediate feedback loop in coding is also rewarding - write code, see results. Contributing to open-source and helping other developers through my tools gives me a sense of community contribution."`
    },
    {
        id: 'tcs130',
        question: 'How do you handle constructive criticism?',
        answer: `"I view criticism as a learning opportunity. During code reviews at Virtusa, I received feedback about improving error handling in my API endpoints. Instead of being defensive, I asked for specific examples and best practices. I researched proper error handling patterns, updated my code, and now apply those principles in all my projects. I believe good developers are always learning, and feedback from experienced developers is invaluable for growth."`
    },
];

export default behavioralQuestions;
