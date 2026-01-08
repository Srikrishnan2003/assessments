// Re-export from new modular structure
// This maintains backward compatibility with existing imports

export { tcsTopics, tcsExamInfo, getTcsTotalQuestionCount, getQuestionsByCategory, getAllCategories } from './tcs/index.js';
export { default } from './tcs/index.js';
