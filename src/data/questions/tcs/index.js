// TCS Prime Interview Questions - Main Index File
// Combines all question categories for scalability

import hrQuestions from './hr-intro.js';
import javascriptQuestions from './javascript.js';
import reactQuestions from './react-nextjs.js';
import backendQuestions from './backend.js';
import dsaQuestions from './dsa.js';
import projectQuestions from './projects.js';
import scenarioQuestions from './scenarios.js';
import aiModernQuestions from './ai-modern.js';
import systemDesignQuestions from './system-design.js';
import internshipQuestions from './internship.js';
import javaQuestions from './java.js';
import testingQuestions from './testing.js';
import behavioralQuestions from './behavioral.js';
import toolsQuestions from './tools.js';
import codingQuestions from './coding.js';
import industryQuestions from './industry.js';
import interviewerQuestions from './interviewer-questions.js';

// All TCS Topics with their questions
export const tcsTopics = [
    {
        id: 'hr-intro',
        name: 'HR & Introduction',
        questions: hrQuestions
    },
    {
        id: 'javascript',
        name: 'JavaScript & TypeScript',
        questions: javascriptQuestions
    },
    {
        id: 'react',
        name: 'React & Next.js',
        questions: reactQuestions
    },
    {
        id: 'backend',
        name: 'Backend & APIs',
        questions: backendQuestions
    },
    {
        id: 'dsa',
        name: 'Data Structures & Algorithms',
        questions: dsaQuestions
    },
    {
        id: 'projects',
        name: 'Project-Based',
        questions: projectQuestions
    },
    {
        id: 'scenarios',
        name: 'Scenario-Based',
        questions: scenarioQuestions
    },
    {
        id: 'ai-modern',
        name: 'AI & Modern Development',
        questions: aiModernQuestions
    },
    {
        id: 'system-design',
        name: 'System Design & Architecture',
        questions: systemDesignQuestions
    },
    {
        id: 'internship',
        name: 'Internship Experience',
        questions: internshipQuestions
    },
    {
        id: 'java',
        name: 'Java',
        questions: javaQuestions
    },
    {
        id: 'testing',
        name: 'Testing & CI/CD',
        questions: testingQuestions
    },
    {
        id: 'behavioral',
        name: 'Behavioral',
        questions: behavioralQuestions
    },
    {
        id: 'tools',
        name: 'Tools & Technologies',
        questions: toolsQuestions
    },
    {
        id: 'coding',
        name: 'Coding Problems',
        questions: codingQuestions
    },
    {
        id: 'industry',
        name: 'Industry Knowledge',
        questions: industryQuestions
    },
    {
        id: 'interviewer',
        name: 'Questions to Ask',
        questions: interviewerQuestions
    },
];

// Exam info
export const tcsExamInfo = {
    examType: 'TCS Prime Interview',
    rounds: 'HR + Technical',
    format: 'Virtual/In-person',
    duration: '45-60 minutes per round',
    topics: 'HR, JavaScript, React, Node.js, DSA, Projects, System Design, Java'
};

// Get total question count
export const getTcsTotalQuestionCount = () => {
    return tcsTopics.reduce((acc, topic) => acc + topic.questions.length, 0);
};

// Get questions by category ID
export const getQuestionsByCategory = (categoryId) => {
    const topic = tcsTopics.find(t => t.id === categoryId);
    return topic ? topic.questions : [];
};

// Get all categories
export const getAllCategories = () => {
    return tcsTopics.map(t => ({ id: t.id, name: t.name, count: t.questions.length }));
};

export default tcsTopics;
