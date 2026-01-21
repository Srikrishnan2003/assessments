// Cognizant GenC - Web Competency: DOM Manipulation Questions

export const webDomQuestions = [
    {
        id: 'ctsta-dom-001',
        question: 'Write JavaScript code to disable a Submit button until user enters text in an input field.',
        answer: `### Problem: Enable button only when input has content

### Solution Code
\`\`\`javascript
// HTML:
// <input type="text" id="user" placeholder="Enter text">
// <button id="btn" disabled>Submit</button>

const input = document.getElementById('user');
const btn = document.getElementById('btn');

// Initially disabled
btn.disabled = true;

// Enable when input has text
input.addEventListener('input', () => {
    btn.disabled = input.value.trim().length === 0;
});

// Alternative: Enable only with minimum characters
input.addEventListener('input', () => {
    btn.disabled = input.value.trim().length < 3;
});
\`\`\`

### Key Concepts
| Event | Use Case |
|-------|----------|
| \`input\` | Fires on every character change |
| \`change\` | Fires when input loses focus |
| \`keyup\` | Fires after key release |`
    },
    {
        id: 'ctsta-dom-002',
        question: 'Write code to dynamically add items to a list when user clicks a button.',
        answer: `### Dynamic List Creation

\`\`\`javascript
// HTML:
// <input type="text" id="itemInput">
// <button id="addBtn">Add Item</button>
// <ul id="itemList"></ul>

const input = document.getElementById('itemInput');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('itemList');

addBtn.addEventListener('click', () => {
    const text = input.value.trim();
    
    if (text === '') {
        alert('Please enter an item');
        return;
    }
    
    // Create new list item
    const li = document.createElement('li');
    li.textContent = text;
    
    // Add delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => li.remove();
    li.appendChild(deleteBtn);
    
    // Add to list
    list.appendChild(li);
    
    // Clear input
    input.value = '';
    input.focus();
});

// Allow Enter key to add item
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addBtn.click();
    }
});
\`\`\``
    },
    {
        id: 'ctsta-dom-003',
        question: 'Write code to toggle visibility of a div when clicking a button.',
        answer: `### Toggle Visibility

\`\`\`javascript
// HTML:
// <button id="toggleBtn">Toggle Content</button>
// <div id="content">This content can be toggled</div>

const toggleBtn = document.getElementById('toggleBtn');
const content = document.getElementById('content');

// Method 1: Using style.display
toggleBtn.addEventListener('click', () => {
    if (content.style.display === 'none') {
        content.style.display = 'block';
        toggleBtn.textContent = 'Hide Content';
    } else {
        content.style.display = 'none';
        toggleBtn.textContent = 'Show Content';
    }
});

// Method 2: Using classList (Recommended)
// CSS: .hidden { display: none; }
toggleBtn.addEventListener('click', () => {
    content.classList.toggle('hidden');
    toggleBtn.textContent = content.classList.contains('hidden') 
        ? 'Show Content' 
        : 'Hide Content';
});

// Method 3: Using hidden attribute
toggleBtn.addEventListener('click', () => {
    content.hidden = !content.hidden;
});
\`\`\``
    },
    {
        id: 'ctsta-dom-004',
        question: 'Explain different DOM selection methods with examples.',
        answer: `### DOM Selection Methods

\`\`\`javascript
// By ID (returns single element)
const header = document.getElementById('header');

// By Class Name (returns HTMLCollection - live)
const buttons = document.getElementsByClassName('btn');
console.log(buttons.length);  // Number of elements
console.log(buttons[0]);      // First element

// By Tag Name (returns HTMLCollection)
const paragraphs = document.getElementsByTagName('p');

// Query Selector (returns first match)
const firstBtn = document.querySelector('.btn');
const submitBtn = document.querySelector('#submitBtn');
const firstInput = document.querySelector('input[type="text"]');

// Query Selector All (returns NodeList - static)
const allBtns = document.querySelectorAll('.btn');
allBtns.forEach(btn => btn.style.color = 'blue');

// Parent/Child navigation
const parent = element.parentElement;
const children = element.children;
const firstChild = element.firstElementChild;
const lastChild = element.lastElementChild;
const nextSib = element.nextElementSibling;
const prevSib = element.previousElementSibling;

// Closest ancestor matching selector
const card = element.closest('.card');
\`\`\`

### Comparison
| Method | Returns | Live? |
|--------|---------|-------|
| getElementById | Element | N/A |
| getElementsByClassName | HTMLCollection | Yes |
| querySelector | Element | N/A |
| querySelectorAll | NodeList | No |`
    },
    {
        id: 'ctsta-dom-005',
        question: 'Write code to implement a character counter for a textarea.',
        answer: `### Character Counter

\`\`\`javascript
// HTML:
// <textarea id="message" maxlength="200" rows="4"></textarea>
// <div id="counter">0/200 characters</div>

const textarea = document.getElementById('message');
const counter = document.getElementById('counter');
const maxLength = textarea.maxLength;

function updateCounter() {
    const current = textarea.value.length;
    counter.textContent = \`\${current}/\${maxLength} characters\`;
    
    // Change color when near limit
    if (current > maxLength * 0.9) {
        counter.style.color = 'red';
    } else if (current > maxLength * 0.7) {
        counter.style.color = 'orange';
    } else {
        counter.style.color = 'green';
    }
}

textarea.addEventListener('input', updateCounter);

// Initial update
updateCounter();

// With remaining characters
function updateRemaining() {
    const remaining = maxLength - textarea.value.length;
    counter.textContent = \`\${remaining} characters remaining\`;
}
\`\`\``
    },
    {
        id: 'ctsta-dom-006',
        question: 'Write code to implement event delegation for dynamically added elements.',
        answer: `### Event Delegation Pattern

\`\`\`javascript
// HTML:
// <ul id="todoList">
//   <li>Task 1 <button class="delete">X</button></li>
//   <li>Task 2 <button class="delete">X</button></li>
// </ul>

// BAD: Attaching to each button doesn't work for new items
// document.querySelectorAll('.delete').forEach(btn => {...});

// GOOD: Event delegation - attach to parent
const todoList = document.getElementById('todoList');

todoList.addEventListener('click', (e) => {
    // Check if clicked element is a delete button
    if (e.target.classList.contains('delete')) {
        // Remove the parent li
        e.target.closest('li').remove();
    }
    
    // Check for edit button
    if (e.target.classList.contains('edit')) {
        const li = e.target.closest('li');
        const text = li.firstChild.textContent;
        const newText = prompt('Edit task:', text);
        if (newText) {
            li.firstChild.textContent = newText;
        }
    }
});

// Adding new items works automatically
function addTask(text) {
    const li = document.createElement('li');
    li.innerHTML = \`\${text} <button class="delete">X</button>\`;
    todoList.appendChild(li);
}
\`\`\`

### Benefits
- Works for dynamically added elements
- Better performance (single listener vs many)
- Cleaner code`
    },
    {
        id: 'ctsta-dom-007',
        question: 'Write code to create a simple tab component.',
        answer: `### Tab Component

\`\`\`javascript
// HTML:
// <div class="tabs">
//   <button class="tab-btn active" data-tab="tab1">Tab 1</button>
//   <button class="tab-btn" data-tab="tab2">Tab 2</button>
//   <button class="tab-btn" data-tab="tab3">Tab 3</button>
// </div>
// <div id="tab1" class="tab-content active">Content 1</div>
// <div id="tab2" class="tab-content">Content 2</div>
// <div id="tab3" class="tab-content">Content 3</div>

// CSS:
// .tab-content { display: none; }
// .tab-content.active { display: block; }
// .tab-btn.active { background: blue; color: white; }

const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.dataset.tab;
        
        // Remove active from all buttons
        tabButtons.forEach(btn => btn.classList.remove('active'));
        // Add active to clicked button
        button.classList.add('active');
        
        // Hide all content
        tabContents.forEach(content => content.classList.remove('active'));
        // Show selected content
        document.getElementById(tabId).classList.add('active');
    });
});
\`\`\``
    },
    {
        id: 'ctsta-dom-008',
        question: 'Write code to implement form validation with real-time feedback.',
        answer: `### Real-time Form Validation

\`\`\`javascript
// HTML:
// <form id="signupForm">
//   <input type="text" id="username" placeholder="Username">
//   <span id="usernameError" class="error"></span>
//   <input type="email" id="email" placeholder="Email">
//   <span id="emailError" class="error"></span>
//   <input type="password" id="password" placeholder="Password">
//   <span id="passwordError" class="error"></span>
//   <button type="submit">Sign Up</button>
// </form>

const form = document.getElementById('signupForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');

// Validation functions
function validateUsername() {
    const value = username.value.trim();
    const error = document.getElementById('usernameError');
    
    if (value.length < 3) {
        error.textContent = 'Username must be at least 3 characters';
        return false;
    }
    if (!/^[a-zA-Z0-9_]+$/.test(value)) {
        error.textContent = 'Only letters, numbers, and underscores';
        return false;
    }
    error.textContent = '';
    return true;
}

function validateEmail() {
    const value = email.value.trim();
    const error = document.getElementById('emailError');
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    
    if (!emailRegex.test(value)) {
        error.textContent = 'Please enter a valid email';
        return false;
    }
    error.textContent = '';
    return true;
}

function validatePassword() {
    const value = password.value;
    const error = document.getElementById('passwordError');
    
    if (value.length < 8) {
        error.textContent = 'Password must be at least 8 characters';
        return false;
    }
    error.textContent = '';
    return true;
}

// Real-time validation
username.addEventListener('input', validateUsername);
email.addEventListener('input', validateEmail);
password.addEventListener('input', validatePassword);

// Submit validation
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const isValid = validateUsername() && validateEmail() && validatePassword();
    
    if (isValid) {
        console.log('Form is valid, submitting...');
        // form.submit();
    }
});
\`\`\``
    },
    {
        id: 'ctsta-dom-009',
        question: 'Write code to copy text to clipboard when clicking a button.',
        answer: `### Copy to Clipboard

\`\`\`javascript
// HTML:
// <input type="text" id="textToCopy" value="Copy this text!">
// <button id="copyBtn">Copy</button>
// <span id="copyStatus"></span>

const textInput = document.getElementById('textToCopy');
const copyBtn = document.getElementById('copyBtn');
const status = document.getElementById('copyStatus');

// Modern approach (recommended)
copyBtn.addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText(textInput.value);
        status.textContent = 'Copied!';
        status.style.color = 'green';
        
        // Clear status after 2 seconds
        setTimeout(() => {
            status.textContent = '';
        }, 2000);
    } catch (err) {
        status.textContent = 'Failed to copy';
        status.style.color = 'red';
    }
});

// Fallback for older browsers
function copyTextFallback(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';  // Prevent scroll
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}

// Copy from any element
function copyElementText(elementId) {
    const element = document.getElementById(elementId);
    navigator.clipboard.writeText(element.textContent || element.value);
}
\`\`\``
    },
    {
        id: 'ctsta-dom-010',
        question: 'Write code to implement a search filter for a list.',
        answer: `### Search Filter

\`\`\`javascript
// HTML:
// <input type="text" id="searchInput" placeholder="Search...">
// <ul id="itemList">
//   <li>Apple</li>
//   <li>Banana</li>
//   <li>Cherry</li>
//   <li>Date</li>
// </ul>

const searchInput = document.getElementById('searchInput');
const itemList = document.getElementById('itemList');
const items = itemList.getElementsByTagName('li');

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    
    Array.from(items).forEach(item => {
        const text = item.textContent.toLowerCase();
        
        if (text.includes(searchTerm)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});

// With highlight matching text
function searchWithHighlight() {
    const searchTerm = searchInput.value.toLowerCase();
    
    Array.from(items).forEach(item => {
        const originalText = item.dataset.original || item.textContent;
        item.dataset.original = originalText;
        
        if (searchTerm === '') {
            item.innerHTML = originalText;
            item.style.display = '';
            return;
        }
        
        const lowerText = originalText.toLowerCase();
        if (lowerText.includes(searchTerm)) {
            const index = lowerText.indexOf(searchTerm);
            const highlighted = originalText.substring(0, index) +
                '<mark>' + originalText.substring(index, index + searchTerm.length) + '</mark>' +
                originalText.substring(index + searchTerm.length);
            item.innerHTML = highlighted;
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}
\`\`\``
    }
];

export default webDomQuestions;
