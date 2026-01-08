// Question Bank Index - All BARC CSE Exam Questions (Pure Technical)
import { dataStructuresQuestions } from './data-structures';
import { algorithmsQuestions } from './algorithms';
import { operatingSystemsQuestions } from './operating-systems';
import { dbmsQuestions } from './dbms';
import { computerNetworksQuestions } from './computer-networks';
import { digitalLogicQuestions } from './digital-logic';
import { tocQuestions } from './theory-of-computation';
import { compilerDesignQuestions } from './compiler-design';
import { coaQuestions } from './computer-organization';
import { softwareEngineeringQuestions } from './software-engineering';

// Topic metadata - Pure CSE Technical Subjects (No Engineering Mathematics)
export const topics = [
    {
        id: 'data-structures',
        name: 'Data Structures',
        shortName: 'DS',
        icon: '🗂️',
        color: 'from-green-500 to-green-600',
        questions: dataStructuresQuestions,
        description: 'Arrays, Linked Lists, Trees, Graphs, Heaps, Hashing'
    },
    {
        id: 'algorithms',
        name: 'Algorithms',
        shortName: 'Algo',
        icon: '⚡',
        color: 'from-yellow-500 to-yellow-600',
        questions: algorithmsQuestions,
        description: 'Sorting, Searching, DP, Greedy, Time & Space Complexity'
    },
    {
        id: 'operating-systems',
        name: 'Operating Systems',
        shortName: 'OS',
        icon: '💻',
        color: 'from-purple-500 to-purple-600',
        questions: operatingSystemsQuestions,
        description: 'Processes, Scheduling, Memory Management, Deadlocks'
    },
    {
        id: 'dbms',
        name: 'Database Management',
        shortName: 'DBMS',
        icon: '🗄️',
        color: 'from-red-500 to-red-600',
        questions: dbmsQuestions,
        description: 'SQL, Normalization, Transactions, Indexing, ER Model'
    },
    {
        id: 'computer-networks',
        name: 'Computer Networks',
        shortName: 'CN',
        icon: '🌐',
        color: 'from-cyan-500 to-cyan-600',
        questions: computerNetworksQuestions,
        description: 'OSI/TCP-IP, Routing, Protocols, Security'
    },
    {
        id: 'digital-logic',
        name: 'Digital Logic',
        shortName: 'DL',
        icon: '🔌',
        color: 'from-orange-500 to-orange-600',
        questions: digitalLogicQuestions,
        description: 'Boolean Algebra, Gates, Flip-flops, Counters'
    },
    {
        id: 'theory-of-computation',
        name: 'Theory of Computation',
        shortName: 'TOC',
        icon: '🧮',
        color: 'from-pink-500 to-pink-600',
        questions: tocQuestions,
        description: 'Automata, Languages, Turing Machines, Complexity'
    },
    {
        id: 'compiler-design',
        name: 'Compiler Design',
        shortName: 'CD',
        icon: '🔧',
        color: 'from-indigo-500 to-indigo-600',
        questions: compilerDesignQuestions,
        description: 'Lexical, Parsing, Optimization, Code Generation'
    },
    {
        id: 'computer-organization',
        name: 'Computer Organization',
        shortName: 'COA',
        icon: '🖥️',
        color: 'from-teal-500 to-teal-600',
        questions: coaQuestions,
        description: 'CPU, Pipelining, Memory, Cache, I/O'
    },
    {
        id: 'software-engineering',
        name: 'Software Engineering',
        shortName: 'SE',
        icon: '📋',
        color: 'from-lime-500 to-lime-600',
        questions: softwareEngineeringQuestions,
        description: 'SDLC, Testing, Agile, Design, Maintenance'
    }
];


// Get all questions combined
export const getAllQuestions = () => {
    return topics.flatMap(topic =>
        topic.questions.map(q => ({ ...q, topicId: topic.id, topicName: topic.name }))
    );
};

// Get questions by topic
export const getQuestionsByTopic = (topicId) => {
    const topic = topics.find(t => t.id === topicId);
    return topic ? topic.questions : [];
};

// Get random questions for mock test
export const getRandomQuestions = (count = 100) => {
    const allQuestions = getAllQuestions();
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, shuffled.length));
};

// Get total question count
export const getTotalQuestionCount = () => {
    return topics.reduce((sum, topic) => sum + topic.questions.length, 0);
};

// Exam info
export const examInfo = {
    name: 'BARC Scientific Officer (CSE)',
    fullName: 'Bhabha Atomic Research Centre - OCES/DGFS',
    totalQuestions: 100,
    duration: 120, // minutes
    marksPerQuestion: 3,
    negativeMarking: 1,
    totalMarks: 300,
    passingCriteria: 'Based on Interview Performance',
    examMode: 'Online Computer Based Test (CBT)',
    calculator: 'Virtual calculator provided',
    pattern: 'Similar to GATE CSE (purely technical)'
};

export default topics;
