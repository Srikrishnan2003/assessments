
import { dsaQuestions } from './dsa';
import { dsaAdvancedQuestions } from './dsa-advanced';
import { sqlQuestions } from './sql';
import { systemDesignQuestions } from './system-design';
import { javaCoreQuestions } from './java-core';
import { webTechQuestions } from './web-tech';
import { hrQuestions } from './hr-behavioral';
import { webForgeQuestions } from './project-webforge';
import { chargeProjectQuestions } from './project-charge';
import { gstProjectQuestions, genAiProjectQuestions } from './project-gst';

const hashedInTopics = [
    {
        id: 'hi-hr',
        name: 'HR & Behavioral',
        module: 'HR Round',
        questions: hrQuestions
    },
    {
        id: 'hi-java',
        name: 'Core Java',
        module: 'Round 1',
        questions: javaCoreQuestions
    },
    {
        id: 'hi-dsa',
        name: 'Basic DSA',
        module: 'Round 1',
        questions: dsaQuestions
    },
    {
        id: 'hi-dsa-adv',
        name: 'Advanced DSA',
        module: 'Round 1',
        questions: dsaAdvancedQuestions
    },
    {
        id: 'hi-sql',
        name: 'SQL & Database',
        module: 'Round 1',
        questions: sqlQuestions
    },
    {
        id: 'hi-web',
        name: 'Web Tech (React/JS)',
        module: 'Round 1',
        questions: webTechQuestions
    },
    {
        id: 'hi-sd',
        name: 'System Design',
        module: 'Round 1/2',
        questions: systemDesignQuestions
    },
    {
        id: 'hi-proj-wf',
        name: 'Project: WebForge',
        module: 'Round 2',
        questions: webForgeQuestions
    },
    {
        id: 'hi-proj-cms',
        name: 'Project: Charge Mgmt',
        module: 'Round 2',
        questions: chargeProjectQuestions
    },
    {
        id: 'hi-proj-gst',
        name: 'Project: GST & GenAI',
        module: 'Round 2',
        questions: [...gstProjectQuestions, ...genAiProjectQuestions]
    }
];

export const getHashedInModules = () => {
    return ['Round 1', 'Round 2', 'HR Round'];
};

export const getTotalHashedInQuestionCount = () => {
    return hashedInTopics.reduce((acc, topic) => acc + topic.questions.length, 0);
};

export default hashedInTopics;
