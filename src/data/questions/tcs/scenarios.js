// TCS Prime Interview - Scenario-Based & Problem-Solving Questions

export const scenarioQuestions = [
    {
        id: 'tcs042',
        question: 'How would you optimize a slow React application?',
        answer: `1. **Code splitting**: Lazy load components with \`React.lazy()\`
2. **Memoization**: Use \`React.memo\`, \`useMemo\`, \`useCallback\`
3. **Virtual scrolling**: For long lists (react-window)
4. **Image optimization**: Use Next.js Image component
5. **Reduce re-renders**: Proper state management, avoid inline functions
6. **Bundle analysis**: Use webpack-bundle-analyzer
7. **API optimization**: Debounce, throttle, caching`
    },
    {
        id: 'tcs043',
        question: 'How do you handle errors in JavaScript?',
        answer: `\`\`\`javascript
// Try-catch for synchronous code
try {
  JSON.parse(data);
} catch (error) {
  console.error('Parse error:', error);
}

// Promise error handling
fetch('/api')
  .catch(err => console.error(err));

// Async/await error handling
async function fetchData() {
  try {
    const data = await fetch('/api');
  } catch (err) {
    console.error(err);
  }
}

// React Error Boundaries for component errors
\`\`\``
    },
    {
        id: 'tcs044',
        question: 'How would you debug a production issue?',
        answer: `1. **Check error logs**: Console, server logs, error tracking (Sentry)
2. **Reproduce**: Try to replicate the issue
3. **Isolate**: Use console.log, debugger, or Chrome DevTools
4. **Check recent changes**: Git history, deployment logs
5. **Monitor**: Use APM tools to track performance
6. **Fix and test**: Deploy fix with proper testing
7. **Post-mortem**: Document issue and prevention steps`
    },
    {
        id: 'tcs045',
        question: 'How do you ensure code quality?',
        answer: `1. **Write clean, readable code**: Follow naming conventions
2. **Code reviews**: Peer review before merging
3. **Testing**: Unit tests, integration tests, E2E tests
4. **Linting**: ESLint for JavaScript/TypeScript
5. **Type checking**: TypeScript for type safety
6. **Documentation**: Comment complex logic, maintain README
7. **Version control**: Meaningful commit messages`
    },
    {
        id: 'tcs046',
        question: 'Explain your approach to learning new technologies',
        answer: `"I follow a structured approach: First, I go through official documentation to understand core concepts. Then I build small projects to apply what I learned. I also take LinkedIn Learning courses like the ones I completed for Next.js, Node.js, and React. I use AI tools like ChatGPT and GitHub Copilot to accelerate learning and clarify doubts. Finally, I read articles, watch tutorials, and participate in developer communities to stay updated."`
    },
    {
        id: 'tcs047',
        question: 'How do you manage your time on multiple projects?',
        answer: `"I use task management tools and break projects into smaller milestones. I prioritize based on deadlines and impact. I also use my Focus Flow app's Kanban board to track tasks visually. I dedicate specific time blocks to each project and use the Pomodoro technique to maintain focus. Regular communication with stakeholders helps me stay aligned with expectations."`
    },
    {
        id: 'tcs048',
        question: 'How would you implement a feature with unclear requirements?',
        answer: `"I would first clarify requirements by asking specific questions to stakeholders. I'd create mockups or wireframes to visualize the feature. Then I'd break it into smaller, manageable tasks and develop an MVP (Minimum Viable Product) to get early feedback. I'd iterate based on feedback and document decisions made along the way."`
    },
    {
        id: 'tcs112',
        question: 'How would you scale a web application to handle millions of users?',
        answer: `1. **Horizontal scaling**: Add more servers with load balancer
2. **Database optimization**: Indexing, query optimization, read replicas
3. **Caching**: Redis for frequently accessed data
4. **CDN**: For static assets
5. **Database sharding**: Distribute data across databases
6. **Microservices**: Break into smaller, independently scalable services
7. **Async processing**: Message queues for heavy tasks
8. **Auto-scaling**: Cloud infrastructure that scales based on demand`
    },
    {
        id: 'tcs113',
        question: 'You have a memory leak in production. How do you identify and fix it?',
        answer: `1. **Monitor**: Use tools like Chrome DevTools Memory Profiler, Node.js memory monitoring
2. **Identify patterns**: Check if memory grows continuously
3. **Common causes**:
   - Event listeners not removed
   - Global variables accumulating data
   - Closures holding references
   - Intervals/timeouts not cleared
4. **Fix**: Remove listeners, clear intervals, use weak references
5. **Test**: Verify fix with memory profiling
6. **Deploy**: Gradual rollout with monitoring`
    },
    {
        id: 'tcs114',
        question: 'How would you implement real-time features in a web app?',
        answer: `1. **WebSockets**: Bidirectional communication (Socket.io)
2. **Server-Sent Events (SSE)**: Server to client updates
3. **Long Polling**: Fallback for older browsers
4. **Consider**: Scaling with Redis for pub/sub, connection management

\`\`\`javascript
// Server (Socket.io)
io.on('connection', (socket) => {
  socket.on('message', (data) => {
    io.emit('message', data); // Broadcast
  });
});

// Client
const socket = io();
socket.on('message', (data) => {
  updateUI(data);
});
\`\`\``
    },
    {
        id: 'tcs115',
        question: 'Design a URL shortener like bit.ly',
        answer: `**Requirements**: Shorten URL, redirect, track clicks

**Design**:
1. **Database**: Store mapping (shortCode → originalURL, clicks)
2. **Algorithm**: Generate unique short code (base62 encoding of ID or hash)
3. **API**:
   - POST /shorten - create short URL
   - GET /:code - redirect to original
4. **Scale**: Cache popular URLs, use distributed ID generator
5. **Analytics**: Track clicks, referrers, timestamps`
    },
    {
        id: 'tcs116',
        question: 'How would you implement authentication in a React app?',
        answer: `1. **Login**: Send credentials to backend, receive JWT token
2. **Store**: Save token in memory or httpOnly cookie (NOT localStorage for sensitive apps)
3. **Protect routes**: Check authentication before rendering
4. **API calls**: Include token in Authorization header
5. **Refresh**: Implement token refresh mechanism
6. **Logout**: Clear token and redirect

\`\`\`javascript
// Context for auth
const AuthContext = createContext();

function ProtectedRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}

// API call with token
fetch('/api/data', {
  headers: {
    'Authorization': \`Bearer \${token}\`
  }
});
\`\`\``
    },
    {
        id: 'tcs117',
        question: 'How do you handle version control conflicts?',
        answer: `1. **Pull latest**: Always pull before making changes
2. **Communicate**: Coordinate with team on file ownership
3. **Resolve conflicts**:
   - Review both changes
   - Keep necessary code from both versions
   - Test after resolution
4. **Best practices**:
   - Small, frequent commits
   - Feature branches
   - Code reviews
5. **Tools**: Git merge tools, VS Code merge editor`
    },
];

export default scenarioQuestions;
