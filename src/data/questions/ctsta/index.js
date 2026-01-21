// Cognizant GenC & GenC Pro Question Bank Index
// Aggregates all question files across 4 modules

// MODULE A: CORE JAVA (Coding & Logic)
import { javaStringsQuestions } from './java-strings.js';
import { javaArraysQuestions } from './java-arrays.js';
import { javaMathQuestions } from './java-math.js';
import { javaCollectionsQuestions } from './java-collections.js';
import { javaOopsQuestions } from './java-oops.js';

// MODULE B: DATABASE (SQL)
import { sqlBasicsQuestions } from './sql-basics.js';
import { sqlJoinsQuestions } from './sql-joins.js';
import { sqlFunctionsQuestions } from './sql-functions.js';

// MODULE C: WEB COMPETENCY (The "Maker" Section)
import { webDomQuestions } from './web-dom.js';
import { webCssQuestions } from './web-css.js';
import { webFormsQuestions } from './web-forms.js';
import { webEs6Questions } from './web-es6.js';

// MODULE D: INFRASTRUCTURE & CONCEPTS (MCQs)
import { infraHttpQuestions } from './infra-http.js';
import { infraCloudQuestions } from './infra-cloud.js';
import { infraSdlcQuestions } from './infra-sdlc.js';

// CTSTA Topics - Organized by Modules
export const ctstaTopics = [
    // MODULE A: CORE JAVA
    {
        id: 'java-strings',
        name: 'Java - String Manipulation',
        module: 'Core Java',
        questions: javaStringsQuestions
    },
    {
        id: 'java-arrays',
        name: 'Java - Arrays & Matrix',
        module: 'Core Java',
        questions: javaArraysQuestions
    },
    {
        id: 'java-math',
        name: 'Java - Mathematical',
        module: 'Core Java',
        questions: javaMathQuestions
    },
    {
        id: 'java-collections',
        name: 'Java - Collections',
        module: 'Core Java',
        questions: javaCollectionsQuestions
    },
    {
        id: 'java-oops',
        name: 'Java - OOPs & Design',
        module: 'Core Java',
        questions: javaOopsQuestions
    },

    // MODULE B: DATABASE (SQL)
    {
        id: 'sql-basics',
        name: 'SQL - Basics & Aggregates',
        module: 'Database',
        questions: sqlBasicsQuestions
    },
    {
        id: 'sql-joins',
        name: 'SQL - Joins & Subqueries',
        module: 'Database',
        questions: sqlJoinsQuestions
    },
    {
        id: 'sql-functions',
        name: 'SQL - Functions & Window',
        module: 'Database',
        questions: sqlFunctionsQuestions
    },

    // MODULE C: WEB COMPETENCY
    {
        id: 'web-dom',
        name: 'Web - DOM Manipulation',
        module: 'Web Competency',
        questions: webDomQuestions
    },
    {
        id: 'web-css',
        name: 'Web - CSS Layouts',
        module: 'Web Competency',
        questions: webCssQuestions
    },
    {
        id: 'web-forms',
        name: 'Web - Form Validation',
        module: 'Web Competency',
        questions: webFormsQuestions
    },
    {
        id: 'web-es6',
        name: 'Web - ES6+ Features',
        module: 'Web Competency',
        questions: webEs6Questions
    },

    // MODULE D: INFRASTRUCTURE & CONCEPTS
    {
        id: 'infra-http',
        name: 'HTTP & REST APIs',
        module: 'Infrastructure',
        questions: infraHttpQuestions
    },
    {
        id: 'infra-cloud',
        name: 'Cloud Computing',
        module: 'Infrastructure',
        questions: infraCloudQuestions
    },
    {
        id: 'infra-sdlc',
        name: 'SDLC, Agile & Git',
        module: 'Infrastructure',
        questions: infraSdlcQuestions
    }
];

// Utility functions
export const getAllCtstaQuestions = () => {
    return ctstaTopics.flatMap(topic => topic.questions);
};

export const getCtstaQuestionsByModule = (moduleName) => {
    return ctstaTopics
        .filter(topic => topic.module === moduleName)
        .flatMap(topic => topic.questions);
};

export const getCtstaTopicById = (topicId) => {
    return ctstaTopics.find(topic => topic.id === topicId);
};

export const getTotalCtstaQuestionCount = () => {
    return ctstaTopics.reduce((total, topic) => total + topic.questions.length, 0);
};

export const getCtstaModules = () => {
    return [...new Set(ctstaTopics.map(topic => topic.module))];
};

export default ctstaTopics;
