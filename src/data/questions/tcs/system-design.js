// TCS Prime Interview - System Design & Architecture Questions

export const systemDesignQuestions = [
    {
        id: 'tcs085',
        question: 'Explain MVC architecture',
        answer: `Model-View-Controller separates application into three components:
• **Model**: Data and business logic
• **View**: User interface
• **Controller**: Handles input, updates model, selects view`
    },
    {
        id: 'tcs086',
        question: 'What is microservices architecture?',
        answer: `Application built as collection of small, independent services. Each service:
• Runs in its own process
• Communicates via APIs
• Can be deployed independently
• Has its own database

**Benefits**: Scalability, flexibility, easier maintenance
**Challenges**: Complexity, network latency, data consistency`
    },
    {
        id: 'tcs087',
        question: 'Explain monolithic vs microservices',
        answer: `**Monolithic**:
• Single codebase, deployed as one unit
• Simpler to develop initially
• Harder to scale and maintain
• Technology stack is fixed

**Microservices**:
• Multiple independent services
• Complex to develop initially
• Easy to scale specific services
• Can use different technologies`
    },
    {
        id: 'tcs088',
        question: 'What is load balancing?',
        answer: `Distributing traffic across multiple servers to ensure reliability and performance. Types:
• **Round Robin**: Sequential distribution
• **Least Connections**: Routes to server with fewest connections
• **IP Hash**: Routes based on client IP`
    },
    {
        id: 'tcs089',
        question: 'Explain caching strategies',
        answer: `• **Cache-aside**: Application checks cache first, then database
• **Write-through**: Write to cache and database simultaneously
• **Write-back**: Write to cache, async write to database
• **Refresh-ahead**: Preemptively refresh before expiration`
    },
    {
        id: 'tcs090',
        question: 'What is CDN?',
        answer: `**Content Delivery Network** distributes static content across geographically distributed servers. Reduces latency by serving content from nearest server. Used for images, CSS, JavaScript files.`
    },
];

export default systemDesignQuestions;
