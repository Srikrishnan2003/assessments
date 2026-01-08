// TCS Prime Interview - Testing & CI/CD Questions

export const testingQuestions = [
    {
        id: 'tcs118',
        question: 'What types of testing are you familiar with?',
        answer: `• **Unit testing**: Test individual functions/components (Jest, React Testing Library)
• **Integration testing**: Test component interactions
• **E2E testing**: Test complete user flows (Cypress, Playwright)
• **Performance testing**: Load testing, stress testing
• **Manual testing**: Exploratory testing`
    },
    {
        id: 'tcs119',
        question: 'How do you write unit tests in React?',
        answer: `\`\`\`javascript
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('increments counter', () => {
  render(<Counter />);
  const button = screen.getByText('+');
  fireEvent.click(button);
  expect(screen.getByText('Count: 1')).toBeInTheDocument();
});
\`\`\`

**Best practices**:
• Test behavior, not implementation
• Use meaningful test descriptions
• Arrange-Act-Assert pattern
• Mock external dependencies`
    },
    {
        id: 'tcs120',
        question: 'What is CI/CD?',
        answer: `**Continuous Integration/Continuous Deployment** automates testing and deployment:
• **CI**: Automatically test code on each commit
• **CD**: Automatically deploy passing builds

**Pipeline**:
1. Developer pushes code
2. Automated tests run
3. Build artifact created
4. Deploy to staging
5. Deploy to production

**Tools**: GitHub Actions, Jenkins, CircleCI`
    },
    {
        id: 'tcs121',
        question: 'How do you optimize React application performance?',
        answer: `1. **Code splitting**: Lazy load components
2. **Memoization**: React.memo, useMemo, useCallback
3. **Virtual scrolling**: For long lists
4. **Debounce/throttle**: For frequent events
5. **Image optimization**: Next.js Image, lazy loading
6. **Bundle size**: Tree shaking, analyze bundle
7. **Avoid inline functions**: In render
8. **Key props**: Proper keys in lists
9. **Production build**: Minification, compression`
    },
    {
        id: 'tcs122',
        question: 'How do you optimize API calls?',
        answer: `1. **Caching**: Cache responses in memory or Redis
2. **Pagination**: Load data in chunks
3. **Debouncing**: Delay search requests
4. **Parallel requests**: Use Promise.all for independent calls
5. **Request cancellation**: Cancel outdated requests (AbortController)
6. **GraphQL**: Fetch only needed fields
7. **Compression**: Gzip responses
8. **CDN**: Cache API responses at edge`
    },
    {
        id: 'tcs123',
        question: 'How do you measure web performance?',
        answer: `**Metrics**:
• **FCP**: First Contentful Paint
• **LCP**: Largest Contentful Paint
• **FID**: First Input Delay
• **CLS**: Cumulative Layout Shift
• **TTI**: Time to Interactive

**Tools**:
• Lighthouse
• Chrome DevTools Performance tab
• WebPageTest
• Web Vitals library`
    },
];

export default testingQuestions;
