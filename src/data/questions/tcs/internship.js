// TCS Prime Interview - Internship-Specific Questions

export const internshipQuestions = [
    {
        id: 'tcs103',
        question: 'What did you learn during your Accenture internship?',
        answer: `"At Accenture, I gained hands-on experience in:
1. **Generative AI**: Working with AI models for code generation
2. **API integration**: Connecting Hugging Face models to applications
3. **Java fundamentals**: Strengthened my backend development skills
4. **Enterprise workflows**: Understanding how large organizations develop software
5. **Collaboration**: Working in supervised settings with experienced developers
6. **Prompt engineering**: Crafting effective prompts for AI models

The highlight was building the GenAI Software Developer Assistant that automated development tasks."`
    },
    {
        id: 'tcs104',
        question: 'What are you working on at Virtusa?',
        answer: `"At Virtusa, I'm working on a full-stack project that involves:
• Building scalable web applications with modern frameworks
• Both frontend (React) and backend (Spring Boot) development
• Collaborative team practices like code reviews and agile sprints
• Real-world software development challenges
• Integration with enterprise systems

The Charge Management System capstone project is part of this internship, where I built a banking charge management platform from scratch."`
    },
    {
        id: 'tcs105',
        question: 'How did you collaborate with your team during internships?',
        answer: `"I used:
• **Git**: For version control and pull requests
• **Jira/Trello**: For task tracking
• **Daily standups**: To share progress and blockers
• **Code reviews**: Peer review before merging
• **Documentation**: Maintained clear documentation for my work
• **Slack/Teams**: For team communication

I learned the importance of clear communication, asking questions when stuck, and giving constructive feedback in code reviews."`
    },
    {
        id: 'tcs106',
        question: 'What was the most challenging task in your internships?',
        answer: `"The most challenging task was implementing the GenAI Assistant's context management at Accenture. Balancing conversation history with token limits while maintaining coherent responses required careful prompt design. I had to iterate multiple times to find the right approach. I solved it by implementing a sliding window of 5 messages and structuring prompts to include only relevant context. This taught me about working with constraints and iterative problem-solving."`
    },
];

export default internshipQuestions;
