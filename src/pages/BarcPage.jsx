import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    ChevronDown,
    ChevronUp,
    CheckCircle2,
    Brain
} from 'lucide-react';
import topics, { getTotalQuestionCount } from '../data/questions';

// Custom hook for responsive breakpoints
function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({ width: window.innerWidth });
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
}

// Question Card Component
function QuestionCard({ question, index, isExpanded, onToggle, isMobile }) {
    const cardStyle = {
        backgroundColor: 'white',
        borderRadius: isMobile ? '12px' : '16px',
        border: '2px solid #e4e4e7',
        boxShadow: isExpanded ? '0 10px 25px -5px rgba(0,0,0,0.1)' : '0 1px 3px rgba(0,0,0,0.1)',
        transition: 'all 0.2s ease',
    };

    const headerStyle = {
        padding: isMobile ? '16px 16px' : '24px 32px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: isMobile ? '12px' : '24px'
    };

    return (
        <div style={cardStyle}>
            <div style={headerStyle} onClick={onToggle}>
                <div style={{ flex: 1, color: '#27272a', fontSize: isMobile ? '14px' : '16px', lineHeight: '1.6' }}>
                    <span style={{ color: '#a1a1aa', marginRight: isMobile ? '8px' : '12px', fontWeight: '500' }}>Q{index + 1}.</span>
                    {question.question}
                </div>
                <button style={{ color: '#71717a', padding: '4px', background: 'transparent', border: 'none', cursor: 'pointer', flexShrink: 0 }}>
                    {isExpanded ? <ChevronUp size={isMobile ? 20 : 24} /> : <ChevronDown size={isMobile ? 20 : 24} />}
                </button>
            </div>

            {isExpanded && (
                <div style={{ padding: isMobile ? '12px 16px 20px' : '16px 32px 32px', borderTop: '1px solid #f4f4f5' }}>
                    {/* Metadata */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: isMobile ? '16px' : '24px', flexWrap: 'wrap' }}>
                        <span style={{
                            fontSize: isMobile ? '11px' : '12px',
                            fontWeight: '600',
                            padding: isMobile ? '4px 12px' : '6px 16px',
                            borderRadius: '9999px',
                            backgroundColor: question.difficulty === 'Easy' ? '#ecfdf5' : question.difficulty === 'Medium' ? '#fffbeb' : '#fef2f2',
                            color: question.difficulty === 'Easy' ? '#047857' : question.difficulty === 'Medium' ? '#b45309' : '#b91c1c',
                            border: `1px solid ${question.difficulty === 'Easy' ? '#a7f3d0' : question.difficulty === 'Medium' ? '#fde68a' : '#fecaca'}`
                        }}>
                            {question.difficulty}
                        </span>
                        <span style={{ fontSize: isMobile ? '11px' : '12px', color: '#71717a', backgroundColor: '#f4f4f5', padding: isMobile ? '4px 12px' : '6px 16px', borderRadius: '9999px' }}>
                            {question.subtopic}
                        </span>
                    </div>

                    {/* Options */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '8px' : '12px', marginBottom: isMobile ? '16px' : '24px' }}>
                        {question.options.map((option, idx) => {
                            const optionLetter = option.charAt(0);
                            const isCorrect = question.answer === optionLetter;

                            return (
                                <div
                                    key={idx}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px',
                                        padding: isMobile ? '12px' : '16px',
                                        borderRadius: '12px',
                                        backgroundColor: isCorrect ? '#ecfdf5' : '#fafafa',
                                        border: isCorrect ? '2px solid #6ee7b7' : '1px solid #e4e4e7',
                                        color: isCorrect ? '#065f46' : '#52525b',
                                        fontSize: isMobile ? '13px' : '15px'
                                    }}
                                >
                                    {isCorrect && <CheckCircle2 size={isMobile ? 18 : 20} style={{ color: '#059669', flexShrink: 0 }} />}
                                    <span style={{ fontWeight: isCorrect ? '600' : '400' }}>{option}</span>
                                </div>
                            );
                        })}
                    </div>

                    {/* Explanation */}
                    <div style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: isMobile ? '14px' : '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                            <Brain size={isMobile ? 18 : 20} style={{ color: '#2563eb', flexShrink: 0, marginTop: '2px' }} />
                            <div>
                                <h4 style={{ fontWeight: '600', color: '#1e3a8a', marginBottom: '4px', fontSize: isMobile ? '13px' : '15px' }}>Explanation</h4>
                                <p style={{ color: '#1e40af', fontSize: isMobile ? '12px' : '14px', lineHeight: '1.6', margin: 0 }}>
                                    <strong>Answer: {question.answer} — </strong>
                                    {question.explanation}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

// BARC Question Bank Page
function BarcPage() {
    const [activeSubject, setActiveSubject] = useState(topics[0]?.id || '');
    const [expandedId, setExpandedId] = useState(null);
    const { width } = useWindowSize();

    const isMobile = width < 640;
    const totalQuestions = getTotalQuestionCount();
    const activeTopic = topics.find(t => t.id === activeSubject);
    const questions = activeTopic?.questions || [];

    const handleToggle = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    const handleSubjectChange = (subjectId) => {
        setActiveSubject(subjectId);
        setExpandedId(null);
    };

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#f4f4f5', display: 'flex', flexDirection: 'column' }}>
            {/* Header */}
            <header style={{ backgroundColor: 'white', borderBottom: '1px solid #e4e4e7', padding: isMobile ? '16px' : '24px' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <h1 style={{ fontSize: isMobile ? '18px' : '24px', fontWeight: '700', color: '#18181b', margin: 0 }}>
                            BARC Question Bank
                        </h1>
                        <p style={{ fontSize: isMobile ? '12px' : '14px', color: '#71717a', margin: '4px 0 0 0' }}>
                            Scientific Officer (CSE) • {totalQuestions} Questions
                        </p>
                    </div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                        <Link
                            to="/"
                            style={{
                                padding: isMobile ? '8px 12px' : '10px 16px',
                                fontSize: isMobile ? '11px' : '13px',
                                fontWeight: '600',
                                borderRadius: '8px',
                                backgroundColor: '#0f172a',
                                color: 'white',
                                textDecoration: 'none',
                                transition: 'all 0.2s ease',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px'
                            }}
                        >
                            <span>Home</span>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Subject Navigation */}
            <nav style={{ backgroundColor: 'white', borderBottom: '1px solid #e4e4e7', position: 'sticky', top: 0, zIndex: 10 }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', padding: isMobile ? '12px' : '16px 24px' }}>
                    <div style={{ display: 'flex', gap: isMobile ? '8px' : '12px', overflowX: 'auto', scrollbarWidth: 'none', paddingBottom: '4px' }}>
                        {topics.map((topic) => (
                            <button
                                key={topic.id}
                                onClick={() => handleSubjectChange(topic.id)}
                                style={{
                                    padding: isMobile ? '8px 14px' : '12px 20px',
                                    fontSize: isMobile ? '12px' : '13px',
                                    fontWeight: '500',
                                    borderRadius: '8px',
                                    whiteSpace: 'nowrap',
                                    flexShrink: 0,
                                    border: activeSubject === topic.id ? 'none' : '1px solid #e4e4e7',
                                    backgroundColor: activeSubject === topic.id ? '#18181b' : 'white',
                                    color: activeSubject === topic.id ? 'white' : '#52525b',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease'
                                }}
                            >
                                {topic.name}
                            </button>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Questions List */}
            <main style={{ flex: 1, overflowY: 'auto' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto', padding: isMobile ? '24px 12px' : '48px 24px' }}>
                    <h2 style={{ fontSize: isMobile ? '14px' : '18px', fontWeight: '600', color: '#52525b', marginBottom: isMobile ? '24px' : '40px', textAlign: 'center' }}>
                        {activeTopic?.name} — {questions.length} Questions
                    </h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '16px' : '32px' }}>
                        {questions.map((question, idx) => (
                            <QuestionCard
                                key={question.id}
                                question={question}
                                index={idx}
                                isExpanded={expandedId === question.id}
                                onToggle={() => handleToggle(question.id)}
                                isMobile={isMobile}
                            />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default BarcPage;
