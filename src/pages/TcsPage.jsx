import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';
import tcsTopics, { getTcsTotalQuestionCount } from '../data/questions/tcs';
import MarkdownRenderer from '../components/MarkdownRenderer';

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

// TCS Question Card Component with Markdown Rendering
function TcsQuestionCard({ question, index, isExpanded, onToggle, isMobile }) {
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
                    <span style={{ color: '#7c3aed', marginRight: isMobile ? '8px' : '12px', fontWeight: '600' }}>Q{index + 1}.</span>
                    {question.question}
                </div>
                <button style={{ color: '#71717a', padding: '4px', background: 'transparent', border: 'none', cursor: 'pointer', flexShrink: 0 }}>
                    {isExpanded ? <ChevronUp size={isMobile ? 20 : 24} /> : <ChevronDown size={isMobile ? 20 : 24} />}
                </button>
            </div>

            {isExpanded && (
                <div style={{
                    padding: isMobile ? '16px' : '24px 32px 32px',
                    borderTop: '1px solid #f4f4f5',
                    backgroundColor: '#fafafa'
                }}>
                    <MarkdownRenderer content={question.answer} isMobile={isMobile} />
                </div>
            )}
        </div>
    );
}

// TCS Interview Prep Page
function TcsPage() {
    const [activeCategory, setActiveCategory] = useState(tcsTopics[0]?.id || '');
    const [expandedId, setExpandedId] = useState(null);
    const { width } = useWindowSize();

    const isMobile = width < 640;
    const totalQuestions = getTcsTotalQuestionCount();
    const activeCategory_ = tcsTopics.find(t => t.id === activeCategory);
    const questions = activeCategory_?.questions || [];

    const handleToggle = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    const handleCategoryChange = (categoryId) => {
        setActiveCategory(categoryId);
        setExpandedId(null);
    };

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#faf5ff', display: 'flex', flexDirection: 'column' }}>
            {/* Header */}
            <header style={{ backgroundColor: 'white', borderBottom: '1px solid #e9d5ff', padding: isMobile ? '16px' : '24px' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <h1 style={{ fontSize: isMobile ? '18px' : '24px', fontWeight: '700', color: '#581c87', margin: 0 }}>
                            TCS Interview Prep
                        </h1>
                        <p style={{ fontSize: isMobile ? '12px' : '14px', color: '#9333ea', margin: '4px 0 0 0' }}>
                            Prime Interview • {totalQuestions} Questions
                        </p>
                    </div>
                    <Link
                        to="/barcoa"
                        style={{
                            padding: isMobile ? '8px 16px' : '10px 20px',
                            fontSize: isMobile ? '12px' : '14px',
                            fontWeight: '600',
                            borderRadius: '8px',
                            backgroundColor: '#18181b',
                            color: 'white',
                            textDecoration: 'none',
                            transition: 'all 0.2s ease'
                        }}
                    >
                        ← BARC Bank
                    </Link>
                </div>
            </header>

            {/* Category Navigation */}
            <nav style={{ backgroundColor: 'white', borderBottom: '1px solid #e9d5ff', position: 'sticky', top: 0, zIndex: 10 }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', padding: isMobile ? '12px' : '16px 24px' }}>
                    <div style={{ display: 'flex', gap: isMobile ? '8px' : '12px', overflowX: 'auto', scrollbarWidth: 'none', paddingBottom: '4px' }}>
                        {tcsTopics.map((topic) => (
                            <button
                                key={topic.id}
                                onClick={() => handleCategoryChange(topic.id)}
                                style={{
                                    padding: isMobile ? '8px 14px' : '12px 20px',
                                    fontSize: isMobile ? '12px' : '13px',
                                    fontWeight: '500',
                                    borderRadius: '8px',
                                    whiteSpace: 'nowrap',
                                    flexShrink: 0,
                                    border: activeCategory === topic.id ? 'none' : '1px solid #e9d5ff',
                                    backgroundColor: activeCategory === topic.id ? '#7c3aed' : 'white',
                                    color: activeCategory === topic.id ? 'white' : '#6b21a8',
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
                    <h2 style={{ fontSize: isMobile ? '14px' : '18px', fontWeight: '600', color: '#6b21a8', marginBottom: isMobile ? '24px' : '40px', textAlign: 'center' }}>
                        {activeCategory_?.name} — {questions.length} Questions
                    </h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '16px' : '32px' }}>
                        {questions.map((question, idx) => (
                            <TcsQuestionCard
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

export default TcsPage;
