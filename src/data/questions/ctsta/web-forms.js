// Cognizant GenC - Web Competency: Form Validation Questions

export const webFormsQuestions = [
    {
        id: 'ctsta-form-001',
        question: 'Write JavaScript to validate an email address using regex.',
        answer: `### Email Validation

\`\`\`javascript
// Basic email regex
function isValidEmail(email) {
    const regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    return regex.test(email);
}

// More comprehensive regex
function isValidEmailStrict(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

// Form validation usage
const emailInput = document.getElementById('email');
const errorSpan = document.getElementById('emailError');

emailInput.addEventListener('blur', () => {
    const email = emailInput.value.trim();
    
    if (email === '') {
        errorSpan.textContent = 'Email is required';
        emailInput.classList.add('error');
    } else if (!isValidEmail(email)) {
        errorSpan.textContent = 'Please enter a valid email';
        emailInput.classList.add('error');
    } else {
        errorSpan.textContent = '';
        emailInput.classList.remove('error');
    }
});

// Real-time validation
emailInput.addEventListener('input', () => {
    const email = emailInput.value.trim();
    if (email && isValidEmail(email)) {
        emailInput.classList.add('valid');
        emailInput.classList.remove('error');
    }
});
\`\`\`

### Common Email Regex Patterns
| Pattern | Use Case |
|---------|----------|
| \`/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/\` | Basic validation |
| \`/^[\\w.-]+@[\\w.-]+\\.\\w{2,}$/\` | Allow underscores |`
    },
    {
        id: 'ctsta-form-002',
        question: 'Write JavaScript to validate a phone number (10 digits).',
        answer: `### Phone Number Validation

\`\`\`javascript
// Basic 10 digit validation
function isValidPhone(phone) {
    // Remove all non-digits
    const digits = phone.replace(/\\D/g, '');
    return digits.length === 10;
}

// With format checking
function isValidPhoneFormat(phone) {
    // Accepts: 1234567890, 123-456-7890, (123) 456-7890
    const regex = /^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4}$/;
    return regex.test(phone);
}

// Auto-format phone number
function formatPhoneNumber(value) {
    const digits = value.replace(/\\D/g, '');
    
    if (digits.length <= 3) {
        return digits;
    } else if (digits.length <= 6) {
        return \`(\${digits.slice(0, 3)}) \${digits.slice(3)}\`;
    } else {
        return \`(\${digits.slice(0, 3)}) \${digits.slice(3, 6)}-\${digits.slice(6, 10)}\`;
    }
}

// Input masking
const phoneInput = document.getElementById('phone');

phoneInput.addEventListener('input', (e) => {
    const formatted = formatPhoneNumber(e.target.value);
    e.target.value = formatted;
});

// Validation
function validatePhone() {
    const phone = phoneInput.value;
    const digits = phone.replace(/\\D/g, '');
    
    if (digits.length !== 10) {
        return 'Phone number must be 10 digits';
    }
    return '';
}
\`\`\``
    },
    {
        id: 'ctsta-form-003',
        question: 'Write a password strength checker with visual feedback.',
        answer: `### Password Strength Checker

\`\`\`javascript
function checkPasswordStrength(password) {
    let strength = 0;
    const feedback = [];
    
    // Length check
    if (password.length >= 8) strength++;
    else feedback.push('At least 8 characters');
    
    if (password.length >= 12) strength++;
    
    // Lowercase
    if (/[a-z]/.test(password)) strength++;
    else feedback.push('Add lowercase letter');
    
    // Uppercase
    if (/[A-Z]/.test(password)) strength++;
    else feedback.push('Add uppercase letter');
    
    // Numbers
    if (/[0-9]/.test(password)) strength++;
    else feedback.push('Add a number');
    
    // Special characters
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength++;
    else feedback.push('Add special character');
    
    return {
        score: strength,
        level: strength <= 2 ? 'Weak' : strength <= 4 ? 'Medium' : 'Strong',
        feedback
    };
}

// Visual Implementation
const passwordInput = document.getElementById('password');
const strengthBar = document.getElementById('strengthBar');
const strengthText = document.getElementById('strengthText');

passwordInput.addEventListener('input', () => {
    const result = checkPasswordStrength(passwordInput.value);
    
    // Update progress bar
    const percentage = (result.score / 6) * 100;
    strengthBar.style.width = percentage + '%';
    
    // Update color
    if (result.level === 'Weak') {
        strengthBar.style.background = '#ff4444';
    } else if (result.level === 'Medium') {
        strengthBar.style.background = '#ffaa00';
    } else {
        strengthBar.style.background = '#00cc44';
    }
    
    strengthText.textContent = result.level;
});
\`\`\`

### HTML/CSS
\`\`\`html
<input type="password" id="password">
<div class="strength-container">
    <div id="strengthBar"></div>
</div>
<span id="strengthText"></span>
\`\`\``
    },
    {
        id: 'ctsta-form-004',
        question: 'Disable submit button until all required fields are filled.',
        answer: `### Form Completion Check

\`\`\`javascript
// HTML:
// <form id="myForm">
//   <input type="text" id="name" required>
//   <input type="email" id="email" required>
//   <input type="password" id="password" required>
//   <button type="submit" id="submitBtn" disabled>Submit</button>
// </form>

const form = document.getElementById('myForm');
const submitBtn = document.getElementById('submitBtn');
const requiredInputs = form.querySelectorAll('[required]');

function checkFormValidity() {
    let isValid = true;
    
    requiredInputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
        }
        
        // Additional validation
        if (input.type === 'email' && input.value) {
            const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
            if (!emailRegex.test(input.value)) {
                isValid = false;
            }
        }
    });
    
    submitBtn.disabled = !isValid;
    
    // Visual feedback
    if (isValid) {
        submitBtn.classList.add('active');
    } else {
        submitBtn.classList.remove('active');
    }
}

// Add listeners to all inputs
requiredInputs.forEach(input => {
    input.addEventListener('input', checkFormValidity);
    input.addEventListener('change', checkFormValidity);
});

// Initial check
checkFormValidity();

// Using HTML5 validation
form.addEventListener('input', () => {
    submitBtn.disabled = !form.checkValidity();
});
\`\`\``
    },
    {
        id: 'ctsta-form-005',
        question: 'Write JavaScript to prevent form submission and handle via AJAX.',
        answer: `### Prevent Default & AJAX Submit

\`\`\`javascript
const form = document.getElementById('contactForm');
const submitBtn = form.querySelector('button[type="submit"]');
const statusDiv = document.getElementById('status');

form.addEventListener('submit', async (e) => {
    e.preventDefault();  // Prevent default form submission
    
    // Disable button during submission
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting...';
    
    // Collect form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        
        if (response.ok) {
            statusDiv.textContent = 'Message sent successfully!';
            statusDiv.className = 'success';
            form.reset();
        } else {
            throw new Error('Server error');
        }
    } catch (error) {
        statusDiv.textContent = 'Error sending message. Please try again.';
        statusDiv.className = 'error';
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Submit';
    }
});

// Alternative: Using XMLHttpRequest
function submitFormXHR(form) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/api/contact');
    xhr.setRequestHeader('Content-Type', 'application/json');
    
    xhr.onload = function() {
        if (xhr.status === 200) {
            console.log('Success:', xhr.responseText);
        }
    };
    
    xhr.onerror = function() {
        console.error('Request failed');
    };
    
    xhr.send(JSON.stringify(Object.fromEntries(new FormData(form))));
}
\`\`\``
    },
    {
        id: 'ctsta-form-006',
        question: 'Implement confirm password validation.',
        answer: `### Confirm Password Validation

\`\`\`javascript
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const errorSpan = document.getElementById('confirmError');
const submitBtn = document.getElementById('submitBtn');

function validatePasswords() {
    const pwd = password.value;
    const confirmPwd = confirmPassword.value;
    
    // Don't validate if confirm is empty
    if (!confirmPwd) {
        errorSpan.textContent = '';
        return false;
    }
    
    if (pwd !== confirmPwd) {
        errorSpan.textContent = 'Passwords do not match';
        confirmPassword.classList.add('error');
        return false;
    }
    
    errorSpan.textContent = '';
    confirmPassword.classList.remove('error');
    confirmPassword.classList.add('valid');
    return true;
}

// Validate on both fields
password.addEventListener('input', validatePasswords);
confirmPassword.addEventListener('input', validatePasswords);

// Real-time matching indicator
confirmPassword.addEventListener('input', () => {
    if (confirmPassword.value === password.value && confirmPassword.value) {
        errorSpan.textContent = '✓ Passwords match';
        errorSpan.style.color = 'green';
    }
});

// Final form validation
document.getElementById('form').addEventListener('submit', (e) => {
    if (!validatePasswords()) {
        e.preventDefault();
        confirmPassword.focus();
    }
});
\`\`\`

### CSS
\`\`\`css
.error { border-color: red; }
.valid { border-color: green; }
\`\`\``
    },
    {
        id: 'ctsta-form-007',
        question: 'Create a date picker with age validation (must be 18+).',
        answer: `### Age Validation from Date

\`\`\`javascript
const dobInput = document.getElementById('dob');
const ageSpan = document.getElementById('age');
const errorSpan = document.getElementById('dobError');

// Set max date to today
const today = new Date().toISOString().split('T')[0];
dobInput.max = today;

function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    
    return age;
}

function validateAge() {
    const dob = dobInput.value;
    
    if (!dob) {
        errorSpan.textContent = 'Date of birth is required';
        return false;
    }
    
    const age = calculateAge(dob);
    ageSpan.textContent = \`Age: \${age} years\`;
    
    if (age < 18) {
        errorSpan.textContent = 'You must be at least 18 years old';
        dobInput.classList.add('error');
        return false;
    }
    
    if (age > 120) {
        errorSpan.textContent = 'Please enter a valid date';
        return false;
    }
    
    errorSpan.textContent = '';
    dobInput.classList.remove('error');
    return true;
}

dobInput.addEventListener('change', validateAge);
\`\`\`

### HTML
\`\`\`html
<label>Date of Birth:</label>
<input type="date" id="dob" required>
<span id="age"></span>
<span id="dobError" class="error"></span>
\`\`\``
    },
    {
        id: 'ctsta-form-008',
        question: 'Implement custom validation messages for HTML5 form validation.',
        answer: `### Custom Validation Messages

\`\`\`javascript
const form = document.getElementById('signupForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');

// Custom messages
const messages = {
    username: {
        valueMissing: 'Please enter your username',
        tooShort: 'Username must be at least 3 characters',
        patternMismatch: 'Username can only contain letters and numbers'
    },
    email: {
        valueMissing: 'Please enter your email',
        typeMismatch: 'Please enter a valid email address'
    },
    password: {
        valueMissing: 'Please enter a password',
        tooShort: 'Password must be at least 8 characters'
    }
};

function setCustomMessage(input) {
    const name = input.name;
    
    if (input.validity.valueMissing) {
        input.setCustomValidity(messages[name].valueMissing);
    } else if (input.validity.tooShort) {
        input.setCustomValidity(messages[name].tooShort);
    } else if (input.validity.typeMismatch) {
        input.setCustomValidity(messages[name].typeMismatch);
    } else if (input.validity.patternMismatch) {
        input.setCustomValidity(messages[name].patternMismatch);
    } else {
        input.setCustomValidity('');  // Clear custom message
    }
}

// Add listeners
[username, email, password].forEach(input => {
    input.addEventListener('invalid', () => setCustomMessage(input));
    input.addEventListener('input', () => input.setCustomValidity(''));
});
\`\`\`

### HTML
\`\`\`html
<input type="text" id="username" name="username" required 
       minlength="3" pattern="[a-zA-Z0-9]+">
<input type="email" id="email" name="email" required>
<input type="password" id="password" name="password" required minlength="8">
\`\`\``
    },
    {
        id: 'ctsta-form-009',
        question: 'Write JavaScript to validate a credit card number using Luhn algorithm.',
        answer: `### Credit Card Validation

\`\`\`javascript
// Luhn Algorithm for card validation
function isValidCardNumber(cardNumber) {
    // Remove spaces and dashes
    const digits = cardNumber.replace(/[\\s-]/g, '');
    
    // Check if all digits
    if (!/^\\d+$/.test(digits)) return false;
    
    // Must be 13-19 digits
    if (digits.length < 13 || digits.length > 19) return false;
    
    // Luhn algorithm
    let sum = 0;
    let isEven = false;
    
    for (let i = digits.length - 1; i >= 0; i--) {
        let digit = parseInt(digits[i]);
        
        if (isEven) {
            digit *= 2;
            if (digit > 9) digit -= 9;
        }
        
        sum += digit;
        isEven = !isEven;
    }
    
    return sum % 10 === 0;
}

// Detect card type
function getCardType(cardNumber) {
    const digits = cardNumber.replace(/\\D/g, '');
    
    const patterns = {
        visa: /^4/,
        mastercard: /^5[1-5]/,
        amex: /^3[47]/,
        discover: /^6011/
    };
    
    for (const [type, pattern] of Object.entries(patterns)) {
        if (pattern.test(digits)) return type;
    }
    return 'unknown';
}

// Format card number
function formatCardNumber(value) {
    const digits = value.replace(/\\D/g, '');
    return digits.replace(/(\\d{4})/g, '$1 ').trim();
}

// Usage
const cardInput = document.getElementById('cardNumber');

cardInput.addEventListener('input', (e) => {
    e.target.value = formatCardNumber(e.target.value);
    
    const isValid = isValidCardNumber(e.target.value);
    const cardType = getCardType(e.target.value);
    
    document.getElementById('cardType').textContent = cardType;
    e.target.classList.toggle('valid', isValid);
});
\`\`\``
    },
    {
        id: 'ctsta-form-010',
        question: 'Create a multi-step form with validation at each step.',
        answer: `### Multi-Step Form

\`\`\`javascript
const steps = document.querySelectorAll('.form-step');
const nextBtns = document.querySelectorAll('.btn-next');
const prevBtns = document.querySelectorAll('.btn-prev');
const progress = document.getElementById('progress');
let currentStep = 0;

function showStep(stepIndex) {
    steps.forEach((step, index) => {
        step.classList.toggle('active', index === stepIndex);
    });
    
    // Update progress bar
    const percent = ((stepIndex + 1) / steps.length) * 100;
    progress.style.width = percent + '%';
}

function validateStep(stepIndex) {
    const step = steps[stepIndex];
    const inputs = step.querySelectorAll('input[required], select[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
        
        // Custom validation per step
        if (stepIndex === 0 && input.type === 'email') {
            if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(input.value)) {
                isValid = false;
                input.classList.add('error');
            }
        }
    });
    
    return isValid;
}

nextBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (validateStep(currentStep)) {
            currentStep++;
            showStep(currentStep);
        }
    });
});

prevBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        currentStep--;
        showStep(currentStep);
    });
});

// Initial display
showStep(0);
\`\`\`

### HTML Structure
\`\`\`html
<div id="progress" class="progress-bar"></div>
<div class="form-step active">Step 1</div>
<div class="form-step">Step 2</div>
<div class="form-step">Step 3</div>
\`\`\``
    }
];

export default webFormsQuestions;
