import { useState, useCallback } from 'react';

export function useQuiz(questions = []) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [showAnswer, setShowAnswer] = useState(false);
    const [markedForReview, setMarkedForReview] = useState(new Set());
    const [isSubmitted, setIsSubmitted] = useState(false);

    const currentQuestion = questions[currentIndex] || null;

    const selectAnswer = useCallback((questionId, answer) => {
        setAnswers(prev => ({
            ...prev,
            [questionId]: answer
        }));
    }, []);

    const goToQuestion = useCallback((index) => {
        if (index >= 0 && index < questions.length) {
            setCurrentIndex(index);
            setShowAnswer(false);
        }
    }, [questions.length]);

    const goNext = useCallback(() => {
        goToQuestion(currentIndex + 1);
    }, [currentIndex, goToQuestion]);

    const goPrevious = useCallback(() => {
        goToQuestion(currentIndex - 1);
    }, [currentIndex, goToQuestion]);

    const toggleShowAnswer = useCallback(() => {
        setShowAnswer(prev => !prev);
    }, []);

    const toggleMarkForReview = useCallback((questionId) => {
        setMarkedForReview(prev => {
            const newSet = new Set(prev);
            if (newSet.has(questionId)) {
                newSet.delete(questionId);
            } else {
                newSet.add(questionId);
            }
            return newSet;
        });
    }, []);

    const submitQuiz = useCallback(() => {
        setIsSubmitted(true);
    }, []);

    const resetQuiz = useCallback(() => {
        setCurrentIndex(0);
        setAnswers({});
        setShowAnswer(false);
        setMarkedForReview(new Set());
        setIsSubmitted(false);
    }, []);

    const calculateScore = useCallback(() => {
        let correct = 0;
        let wrong = 0;
        let unanswered = 0;

        questions.forEach(q => {
            const userAnswer = answers[q.id];
            if (!userAnswer) {
                unanswered++;
            } else if (userAnswer === q.answer) {
                correct++;
            } else {
                wrong++;
            }
        });

        // BARC scoring: +3 for correct, -1 for wrong
        const score = (correct * 3) - (wrong * 1);
        const maxScore = questions.length * 3;
        const percentage = (score / maxScore) * 100;

        return {
            correct,
            wrong,
            unanswered,
            score,
            maxScore,
            percentage: Math.max(0, percentage).toFixed(2)
        };
    }, [questions, answers]);

    const getQuestionStatus = useCallback((questionId) => {
        const isAnswered = !!answers[questionId];
        const isMarked = markedForReview.has(questionId);

        if (isSubmitted) {
            const question = questions.find(q => q.id === questionId);
            const isCorrect = answers[questionId] === question?.answer;
            return { isAnswered, isMarked, isCorrect, isSubmitted: true };
        }

        return { isAnswered, isMarked, isSubmitted: false };
    }, [answers, markedForReview, questions, isSubmitted]);

    return {
        currentQuestion,
        currentIndex,
        answers,
        showAnswer,
        markedForReview,
        isSubmitted,
        totalQuestions: questions.length,
        answeredCount: Object.keys(answers).length,
        selectAnswer,
        goToQuestion,
        goNext,
        goPrevious,
        toggleShowAnswer,
        toggleMarkForReview,
        submitQuiz,
        resetQuiz,
        calculateScore,
        getQuestionStatus,
        hasNext: currentIndex < questions.length - 1,
        hasPrevious: currentIndex > 0
    };
}

export default useQuiz;
