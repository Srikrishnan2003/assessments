
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';
import hashedInTopics, { getTotalHashedInQuestionCount, getHashedInModules } from '../data/questions/hashedin';
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

// Question Card Component
function QuestionCard({ question, index, isExpanded, onToggle, isMobile }) {
    const cardStyle = {
        backgroundColor: 'white',
        borderRadius: isMobile ? '12px' : '16px',
        border: '2px solid #e0f2fe',
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
                    <span style={{ color: '#0284c7', marginRight: isMobile ? '8px' : '12px', fontWeight: '600' }}>Q{index + 1}.</span>
                    {question.question}
                </div>
                <button style={{ color: '#71717a', padding: '4px', background: 'transparent', border: 'none', cursor: 'pointer', flexShrink: 0 }}>
                    {isExpanded ? <ChevronUp size={isMobile ? 20 : 24} /> : <ChevronDown size={isMobile ? 20 : 24} />}
                </button>
            </div>

            {isExpanded && (
                <div style={{
                    padding: isMobile ? '16px' : '24px 32px 32px',
                    borderTop: '1px solid #e0f2fe',
                    backgroundColor: '#f0f9ff'
                }}>
                    <MarkdownRenderer content={question.answer} isMobile={isMobile} />
                </div>
            )}
        </div>
    );
}

// HashedIn Prep Page
function HashedInPage() {
    const [activeCategory, setActiveCategory] = useState(hashedInTopics[0]?.id || '');
    const [expandedId, setExpandedId] = useState(null);
    const { width } = useWindowSize();

    const isMobile = width < 640;
    const totalQuestions = getTotalHashedInQuestionCount();
    const activeCategory_ = hashedInTopics.find(t => t.id === activeCategory);
    const questions = activeCategory_?.questions || [];
    const modules = getHashedInModules();

    const handleToggle = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    const handleCategoryChange = (categoryId) => {
        setActiveCategory(categoryId);
        setExpandedId(null);
    };

    // Get module color
    const getModuleColor = (module) => {
        switch (module) {
            case 'Round 1': return '#0284c7'; // Sky Blue
            case 'Round 2': return '#7c3aed'; // Violet
            case 'HR Round': return '#db2777'; // Pink
            default: return '#0284c7';
        }
    };

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#f0f9ff', display: 'flex', flexDirection: 'column' }}>
            {/* Header */}
            <header style={{ backgroundColor: 'white', borderBottom: '1px solid #bae6fd', padding: isMobile ? '16px' : '24px' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <h1 style={{ fontSize: isMobile ? '18px' : '28px', fontWeight: '800', color: '#0369a1', margin: 0, letterSpacing: '-0.5px' }}>
                            HashedIn <span style={{ opacity: 0.7, fontWeight: '400' }}>By Deloitte</span>
                        </h1>
                        <p style={{ fontSize: isMobile ? '11px' : '14px', color: '#0284c7', margin: '4px 0 0 0' }}>
                            Interview Preparation • {totalQuestions} Questions
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

            {/* Module Tabs */}
            <div style={{ backgroundColor: '#e0f2fe', borderBottom: '1px solid #bae6fd', padding: isMobile ? '8px 12px' : '12px 24px' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {modules.map(module => (
                        <span
                            key={module}
                            style={{
                                padding: '4px 12px',
                                fontSize: isMobile ? '10px' : '12px',
                                fontWeight: '600',
                                borderRadius: '20px',
                                backgroundColor: getModuleColor(module),
                                color: 'white',
                            }}
                        >
                            {module}
                        </span>
                    ))}
                </div>
            </div>

            {/* Category Navigation */}
            <nav style={{ backgroundColor: 'white', borderBottom: '1px solid #bae6fd', position: 'sticky', top: 0, zIndex: 10 }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', padding: isMobile ? '12px' : '16px 24px' }}>
                    <div style={{ display: 'flex', gap: isMobile ? '8px' : '12px', overflowX: 'auto', scrollbarWidth: 'none', paddingBottom: '4px' }}>
                        {hashedInTopics.map((topic) => (
                            <button
                                key={topic.id}
                                onClick={() => handleCategoryChange(topic.id)}
                                style={{
                                    padding: isMobile ? '8px 14px' : '12px 20px',
                                    fontSize: isMobile ? '11px' : '13px',
                                    fontWeight: '500',
                                    borderRadius: '8px',
                                    whiteSpace: 'nowrap',
                                    flexShrink: 0,
                                    border: activeCategory === topic.id ? 'none' : '1px solid #bae6fd',
                                    backgroundColor: activeCategory === topic.id ? '#0284c7' : 'white',
                                    color: activeCategory === topic.id ? 'white' : '#0369a1',
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
                    <div style={{ textAlign: 'center', marginBottom: isMobile ? '24px' : '40px' }}>
                        <span style={{
                            display: 'inline-block',
                            padding: '4px 12px',
                            fontSize: '11px',
                            fontWeight: '600',
                            borderRadius: '20px',
                            backgroundColor: getModuleColor(activeCategory_?.module),
                            color: 'white',
                            marginBottom: '8px'
                        }}>
                            {activeCategory_?.module}
                        </span>
                        <h2 style={{ fontSize: isMobile ? '14px' : '18px', fontWeight: '600', color: '#0369a1', margin: 0 }}>
                            {activeCategory_?.name} — {questions.length} Questions
                        </h2>
                    </div>

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

export default HashedInPage;
