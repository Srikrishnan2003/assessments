// Cognizant GenC - Web Competency: CSS Layout Questions

export const webCssQuestions = [
    {
        id: 'ctsta-css-001',
        question: 'Write CSS to center a div horizontally and vertically using Flexbox.',
        answer: `### Flexbox Centering

\`\`\`css
/* Method 1: Flexbox (Recommended) */
.container {
    display: flex;
    justify-content: center;  /* Horizontal */
    align-items: center;      /* Vertical */
    height: 100vh;            /* Full viewport height */
}

/* Method 2: Using flex on child */
.container {
    display: flex;
    height: 100vh;
}
.child {
    margin: auto;  /* Auto margin centers in flex container */
}

/* Method 3: Grid alternative */
.container {
    display: grid;
    place-items: center;  /* Shorthand for align + justify */
    height: 100vh;
}

/* Method 4: Position + Transform (older method) */
.container {
    position: relative;
    height: 100vh;
}
.child {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
\`\`\`

### Common Centering Scenarios
| Scenario | Property |
|----------|----------|
| Horizontal only | \`margin: 0 auto\` or \`justify-content: center\` |
| Vertical only | \`align-items: center\` |
| Both | \`place-items: center\` or flex + justify + align |`
    },
    {
        id: 'ctsta-css-002',
        question: 'Create a responsive navigation bar using Flexbox.',
        answer: `### Responsive Navbar

\`\`\`css
/* Navigation Container */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background: #333;
}

/* Logo */
.logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
}

/* Navigation Links */
.nav-links {
    display: flex;
    gap: 2rem;
    list-style: none;
}

.nav-links a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;
}

.nav-links a:hover {
    color: #00bcd4;
}

/* Hamburger Menu (hidden by default) */
.hamburger {
    display: none;
    cursor: pointer;
}

/* Mobile Responsive */
@media (max-width: 768px) {
    .nav-links {
        display: none;
        position: absolute;
        top: 60px;
        left: 0;
        right: 0;
        flex-direction: column;
        background: #333;
        padding: 1rem;
    }
    
    .nav-links.active {
        display: flex;
    }
    
    .hamburger {
        display: block;
    }
}
\`\`\`

\`\`\`html
<nav class="navbar">
    <div class="logo">Brand</div>
    <ul class="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
    <div class="hamburger">☰</div>
</nav>
\`\`\``
    },
    {
        id: 'ctsta-css-003',
        question: 'Create a card grid layout using CSS Grid.',
        answer: `### Responsive Card Grid

\`\`\`css
/* Grid Container */
.card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 2rem;
}

/* Card Styling */
.card {
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
}

.card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.card-content {
    padding: 1.5rem;
}

.card-title {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
}

.card-text {
    color: #666;
    line-height: 1.6;
}

/* Fixed column layout */
.card-grid-fixed {
    display: grid;
    grid-template-columns: repeat(3, 1fr);  /* 3 columns */
    gap: 1rem;
}

/* Responsive breakpoints */
@media (max-width: 900px) {
    .card-grid-fixed {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 600px) {
    .card-grid-fixed {
        grid-template-columns: 1fr;
    }
}
\`\`\``
    },
    {
        id: 'ctsta-css-004',
        question: 'Explain CSS specificity with examples.',
        answer: `### CSS Specificity Hierarchy

\`\`\`css
/* Specificity calculated as: (inline, ID, Class, Element) */

/* Element selectors: (0,0,0,1) */
p { color: black; }
div { color: black; }

/* Class selectors: (0,0,1,0) */
.text { color: blue; }
.highlight { color: yellow; }

/* ID selectors: (0,1,0,0) */
#header { color: red; }

/* Inline styles: (1,0,0,0) */
/* <p style="color: green">Text</p> */

/* Combinators add up */
div p { }                /* (0,0,0,2) */
div.container p { }      /* (0,0,1,2) */
#main .text { }          /* (0,1,1,0) */
#main div.text p { }     /* (0,1,1,2) */

/* Which wins? Higher specificity */
p { color: black; }                  /* (0,0,0,1) */
.text { color: blue; }               /* (0,0,1,0) ← Wins over element */
#intro { color: red; }               /* (0,1,0,0) ← Wins over class */
<p style="color: green">            /* (1,0,0,0) ← Wins over ID */

/* !important overrides everything (avoid if possible) */
p { color: purple !important; }
\`\`\`

### Specificity Chart
| Selector | Specificity |
|----------|-------------|
| \`*\` | (0,0,0,0) |
| \`div\` | (0,0,0,1) |
| \`.class\` | (0,0,1,0) |
| \`#id\` | (0,1,0,0) |
| \`inline style\` | (1,0,0,0) |
| \`!important\` | Overrides all |`
    },
    {
        id: 'ctsta-css-005',
        question: 'Write CSS media queries for different screen sizes.',
        answer: `### Responsive Media Queries

\`\`\`css
/* Mobile First Approach (Recommended) */

/* Base styles for mobile */
.container {
    padding: 1rem;
    font-size: 14px;
}

/* Tablets (768px and up) */
@media (min-width: 768px) {
    .container {
        padding: 2rem;
        font-size: 16px;
    }
    
    .grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Laptops (1024px and up) */
@media (min-width: 1024px) {
    .container {
        max-width: 1200px;
        margin: 0 auto;
    }
    
    .grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

/* Desktops (1280px and up) */
@media (min-width: 1280px) {
    .grid {
        grid-template-columns: repeat(4, 1fr);
    }
}

/* Desktop First Approach */
@media (max-width: 1024px) { /* Tablet */ }
@media (max-width: 768px) { /* Mobile */ }

/* Orientation */
@media (orientation: landscape) {
    .video-player { height: 100vh; }
}

/* Print styles */
@media print {
    .no-print { display: none; }
    body { font-size: 12pt; }
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
    body { background: #1a1a1a; color: white; }
}
\`\`\``
    },
    {
        id: 'ctsta-css-006',
        question: 'Explain the difference between position relative, absolute, and fixed.',
        answer: `### CSS Position Property

\`\`\`css
/* STATIC (default) - normal document flow */
.static {
    position: static;
    /* top, left, right, bottom have no effect */
}

/* RELATIVE - offset from normal position */
.relative {
    position: relative;
    top: 20px;      /* Moves down 20px from normal position */
    left: 20px;     /* Moves right 20px */
    /* Still occupies original space in document flow */
}

/* ABSOLUTE - positioned relative to nearest positioned ancestor */
.parent {
    position: relative;  /* Create positioning context */
}
.absolute-child {
    position: absolute;
    top: 0;
    right: 0;
    /* Removed from document flow */
    /* Positioned relative to .parent */
}

/* FIXED - positioned relative to viewport */
.fixed-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    /* Stays in place when scrolling */
}

/* STICKY - hybrid of relative and fixed */
.sticky-nav {
    position: sticky;
    top: 0;
    /* Acts relative until scroll reaches top: 0 */
    /* Then acts fixed */
}
\`\`\`

### Comparison Table
| Position | In Flow? | Positioned To |
|----------|----------|---------------|
| static | Yes | N/A |
| relative | Yes | Its normal position |
| absolute | No | Nearest positioned ancestor |
| fixed | No | Viewport |
| sticky | Hybrid | Normal → Viewport |`
    },
    {
        id: 'ctsta-css-007',
        question: 'Create a CSS animation for a loading spinner.',
        answer: `### Loading Spinner Animation

\`\`\`css
/* Simple Rotating Spinner */
.spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/* Dots Spinner */
.dots-spinner {
    display: flex;
    gap: 8px;
}

.dots-spinner span {
    width: 12px;
    height: 12px;
    background: #3498db;
    border-radius: 50%;
    animation: bounce 0.6s ease-in-out infinite;
}

.dots-spinner span:nth-child(2) { animation-delay: 0.1s; }
.dots-spinner span:nth-child(3) { animation-delay: 0.2s; }

@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
}

/* Pulse Animation */
.pulse {
    width: 50px;
    height: 50px;
    background: #3498db;
    border-radius: 50%;
    animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
    0% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.3); opacity: 0.5; }
    100% { transform: scale(1); opacity: 1; }
}
\`\`\`

\`\`\`html
<!-- Usage -->
<div class="spinner"></div>

<div class="dots-spinner">
    <span></span><span></span><span></span>
</div>
\`\`\``
    },
    {
        id: 'ctsta-css-008',
        question: 'Explain Flexbox align-items vs justify-content.',
        answer: `### Flexbox Alignment

\`\`\`css
.container {
    display: flex;
    height: 300px;
}

/* JUSTIFY-CONTENT: Alignment along MAIN axis (default: horizontal) */
.container {
    justify-content: flex-start;   /* Items at start (default) */
    justify-content: flex-end;     /* Items at end */
    justify-content: center;       /* Items centered */
    justify-content: space-between; /* Even space between items */
    justify-content: space-around;  /* Even space around items */
    justify-content: space-evenly;  /* Equal space everywhere */
}

/* ALIGN-ITEMS: Alignment along CROSS axis (default: vertical) */
.container {
    align-items: stretch;      /* Stretch to fill (default) */
    align-items: flex-start;   /* Items at top */
    align-items: flex-end;     /* Items at bottom */
    align-items: center;       /* Items vertically centered */
    align-items: baseline;     /* Align text baselines */
}

/* When flex-direction is column, axes swap */
.container {
    flex-direction: column;
    /* Now justify-content = vertical, align-items = horizontal */
}

/* ALIGN-SELF: Override align-items for single item */
.special-item {
    align-self: flex-end;
}

/* GAP: Space between items (modern) */
.container {
    gap: 20px;           /* All directions */
    row-gap: 20px;       /* Vertical only */
    column-gap: 10px;    /* Horizontal only */
}
\`\`\`

### Visual Summary
| Property | Main Axis | Cross Axis |
|----------|-----------|------------|
| flex-direction: row | justify-content ↔ | align-items ↕ |
| flex-direction: column | justify-content ↕ | align-items ↔ |`
    },
    {
        id: 'ctsta-css-009',
        question: 'Create a tooltip using pure CSS.',
        answer: `### CSS Tooltip

\`\`\`css
/* Tooltip Container */
.tooltip {
    position: relative;
    display: inline-block;
    cursor: pointer;
}

/* Tooltip Text */
.tooltip::after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: 125%;
    left: 50%;
    transform: translateX(-50%);
    background: #333;
    color: white;
    padding: 8px 12px;
    border-radius: 4px;
    font-size: 14px;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s, visibility 0.3s;
}

/* Arrow */
.tooltip::before {
    content: '';
    position: absolute;
    bottom: 115%;
    left: 50%;
    transform: translateX(-50%);
    border: 8px solid transparent;
    border-top-color: #333;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s, visibility 0.3s;
}

/* Show on hover */
.tooltip:hover::after,
.tooltip:hover::before {
    opacity: 1;
    visibility: visible;
}

/* Different positions */
.tooltip.right::after {
    bottom: auto;
    left: 125%;
    top: 50%;
    transform: translateY(-50%);
}
\`\`\`

\`\`\`html
<!-- Usage -->
<span class="tooltip" data-tooltip="This is a tooltip">Hover me</span>
\`\`\``
    },
    {
        id: 'ctsta-css-010',
        question: 'Create a hamburger menu icon using pure CSS.',
        answer: `### CSS Hamburger Menu

\`\`\`css
/* Hamburger Icon */
.hamburger {
    width: 30px;
    height: 20px;
    position: relative;
    cursor: pointer;
}

.hamburger span {
    position: absolute;
    left: 0;
    width: 100%;
    height: 3px;
    background: #333;
    border-radius: 2px;
    transition: all 0.3s;
}

.hamburger span:nth-child(1) { top: 0; }
.hamburger span:nth-child(2) { top: 50%; transform: translateY(-50%); }
.hamburger span:nth-child(3) { bottom: 0; }

/* Transform to X when active */
.hamburger.active span:nth-child(1) {
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
}

.hamburger.active span:nth-child(2) {
    opacity: 0;
}

.hamburger.active span:nth-child(3) {
    bottom: 50%;
    transform: translateY(50%) rotate(-45deg);
}

/* Alternative: Single element with pseudo-elements */
.hamburger-single {
    width: 30px;
    height: 3px;
    background: #333;
    position: relative;
}

.hamburger-single::before,
.hamburger-single::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    background: #333;
    left: 0;
}

.hamburger-single::before { top: -8px; }
.hamburger-single::after { top: 8px; }
\`\`\`

\`\`\`html
<div class="hamburger">
    <span></span>
    <span></span>
    <span></span>
</div>
\`\`\``
    }
];

export default webCssQuestions;
