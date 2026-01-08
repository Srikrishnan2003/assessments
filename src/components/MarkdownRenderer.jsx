import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';

// Sophisticated Markdown Renderer with Syntax Highlighting
function MarkdownRenderer({ content, isMobile }) {
    useEffect(() => {
        Prism.highlightAll();
    }, [content]);

    // Parse and render markdown content
    const renderContent = () => {
        const lines = content.split('\n');
        const elements = [];
        let i = 0;

        while (i < lines.length) {
            const line = lines[i];
            const trimmed = line.trim();

            // Handle code fences ```javascript ... ```
            if (trimmed.startsWith('```')) {
                const lang = trimmed.replace('```', '').trim() || 'javascript';
                const codeLines = [];
                i++;

                // Collect all lines until closing ```
                while (i < lines.length && !lines[i].trim().startsWith('```')) {
                    codeLines.push(lines[i]);
                    i++;
                }

                elements.push(
                    <CodeBlock
                        key={`code-${i}`}
                        code={codeLines.join('\n')}
                        language={lang}
                        isMobile={isMobile}
                    />
                );
                i++; // Skip closing ```
                continue;
            }

            // Handle empty lines
            if (trimmed === '') {
                elements.push(<div key={`space-${i}`} style={{ height: '8px' }} />);
                i++;
                continue;
            }

            // Handle bullet points
            if (trimmed.startsWith('•') || (trimmed.startsWith('-') && !trimmed.startsWith('--')) || (trimmed.startsWith('*') && !trimmed.startsWith('**'))) {
                const bulletContent = trimmed.replace(/^[•\-\*]\s*/, '');
                elements.push(
                    <div key={`bullet-${i}`} style={{
                        display: 'flex',
                        gap: '12px',
                        marginBottom: '10px',
                        padding: '10px 14px',
                        backgroundColor: 'white',
                        borderRadius: '8px',
                        borderLeft: '4px solid #7c3aed',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
                    }}>
                        <span style={{ color: '#7c3aed', fontWeight: '700', fontSize: '16px' }}>•</span>
                        <span style={{ flex: 1 }}>{renderInlineMarkdown(bulletContent)}</span>
                    </div>
                );
                i++;
                continue;
            }

            // Handle numbered lists
            const numberedMatch = trimmed.match(/^(\d+)\.\s+(.+)/);
            if (numberedMatch) {
                elements.push(
                    <div key={`num-${i}`} style={{
                        display: 'flex',
                        gap: '12px',
                        marginBottom: '10px',
                        padding: '10px 14px',
                        backgroundColor: 'white',
                        borderRadius: '8px',
                        borderLeft: '4px solid #6366f1',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
                    }}>
                        <span style={{
                            color: 'white',
                            fontWeight: '700',
                            fontSize: '12px',
                            backgroundColor: '#6366f1',
                            borderRadius: '50%',
                            width: '24px',
                            height: '24px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                        }}>
                            {numberedMatch[1]}
                        </span>
                        <span style={{ flex: 1 }}>{renderInlineMarkdown(numberedMatch[2])}</span>
                    </div>
                );
                i++;
                continue;
            }

            // Handle quoted text (interview answers starting with ")
            if (trimmed.startsWith('"')) {
                elements.push(
                    <div key={`quote-${i}`} style={{
                        padding: isMobile ? '16px' : '20px',
                        background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
                        borderRadius: '12px',
                        borderLeft: '4px solid #0ea5e9',
                        marginBottom: '12px',
                        fontStyle: 'italic',
                        color: '#0369a1',
                        lineHeight: '1.7'
                    }}>
                        {renderInlineMarkdown(trimmed)}
                    </div>
                );
                i++;
                continue;
            }

            // Handle key-value headers (Benefits:, Key Technical Points:, etc)
            const keyValueMatch = trimmed.match(/^\*\*([^*]+)\*\*:?\s*$/);
            if (keyValueMatch) {
                elements.push(
                    <div key={`header-${i}`} style={{
                        fontWeight: '700',
                        color: '#1f2937',
                        marginTop: '16px',
                        marginBottom: '8px',
                        fontSize: isMobile ? '14px' : '15px'
                    }}>
                        {keyValueMatch[1]}
                    </div>
                );
                i++;
                continue;
            }

            // Regular paragraph
            elements.push(
                <p key={`p-${i}`} style={{ margin: '0 0 10px 0', color: '#374151', lineHeight: '1.7' }}>
                    {renderInlineMarkdown(line)}
                </p>
            );
            i++;
        }

        return elements;
    };

    // Render inline formatting (bold, code, etc)
    const renderInlineMarkdown = (text) => {
        const parts = [];
        let remaining = text;
        let keyCounter = 0;

        while (remaining.length > 0) {
            // Find inline code `code`
            const codeMatch = remaining.match(/`([^`]+)`/);
            // Find bold **text**
            const boldMatch = remaining.match(/\*\*([^*]+)\*\*/);

            const matches = [
                codeMatch ? { type: 'code', match: codeMatch, index: remaining.indexOf(codeMatch[0]) } : null,
                boldMatch ? { type: 'bold', match: boldMatch, index: remaining.indexOf(boldMatch[0]) } : null,
            ].filter(Boolean).sort((a, b) => a.index - b.index);

            if (matches.length === 0) {
                parts.push(remaining);
                break;
            }

            const firstMatch = matches[0];

            if (firstMatch.index > 0) {
                parts.push(remaining.substring(0, firstMatch.index));
            }

            if (firstMatch.type === 'code') {
                parts.push(
                    <code key={keyCounter++} style={{
                        backgroundColor: '#1e1e1e',
                        color: '#f97316',
                        padding: '3px 8px',
                        borderRadius: '6px',
                        fontSize: '0.9em',
                        fontFamily: "'Fira Code', 'Monaco', monospace",
                        fontWeight: '500'
                    }}>
                        {firstMatch.match[1]}
                    </code>
                );
            } else if (firstMatch.type === 'bold') {
                parts.push(
                    <strong key={keyCounter++} style={{ fontWeight: '700', color: '#111827' }}>
                        {firstMatch.match[1]}
                    </strong>
                );
            }

            remaining = remaining.substring(firstMatch.index + firstMatch.match[0].length);
        }

        return parts.length === 1 && typeof parts[0] === 'string' ? parts[0] : parts;
    };

    return (
        <div style={{ fontSize: isMobile ? '14px' : '15px', lineHeight: '1.7', color: '#374151' }}>
            {renderContent()}
        </div>
    );
}

// Code Block Component with Syntax Highlighting
function CodeBlock({ code, language = 'javascript', isMobile }) {
    useEffect(() => {
        Prism.highlightAll();
    }, [code]);

    const langDisplay = {
        'javascript': 'JavaScript',
        'js': 'JavaScript',
        'typescript': 'TypeScript',
        'ts': 'TypeScript',
        'jsx': 'JSX',
        'tsx': 'TSX',
        'python': 'Python',
        'sql': 'SQL',
        'bash': 'Bash',
        'json': 'JSON'
    };

    return (
        <div style={{
            margin: isMobile ? '12px 0' : '16px 0',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)'
        }}>
            {/* macOS-style Window Header */}
            <div style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                padding: '10px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
            }}>
                <div style={{ display: 'flex', gap: '6px' }}>
                    <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ff5f56' }}></span>
                    <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ffbd2e' }}></span>
                    <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#27ca3f' }}></span>
                </div>
                <span style={{
                    color: 'rgba(255,255,255,0.95)',
                    fontSize: '12px',
                    fontWeight: '600',
                    letterSpacing: '0.5px'
                }}>
                    {langDisplay[language] || language.toUpperCase()}
                </span>
            </div>
            {/* Code Content */}
            <pre style={{
                margin: 0,
                padding: isMobile ? '16px' : '20px',
                backgroundColor: '#2d2d2d',
                overflowX: 'auto',
                fontSize: isMobile ? '12px' : '13px',
                lineHeight: '1.6'
            }}>
                <code className={`language-${language}`} style={{ fontFamily: "'Fira Code', 'Monaco', 'Consolas', monospace" }}>
                    {code}
                </code>
            </pre>
        </div>
    );
}

export default MarkdownRenderer;
