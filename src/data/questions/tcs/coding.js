// TCS Prime Interview - Coding Problem Questions

export const codingQuestions = [
    {
        id: 'tcs136',
        question: 'Write a function to reverse a string',
        answer: `\`\`\`javascript
// Method 1: Built-in methods
function reverse(str) {
  return str.split('').reverse().join('');
}

// Method 2: Loop
function reverse(str) {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

// Method 3: Reduce
function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}
\`\`\``
    },
    {
        id: 'tcs137',
        question: 'Find the largest number in an array',
        answer: `\`\`\`javascript
// Method 1: Math.max
function findMax(arr) {
  return Math.max(...arr);
}

// Method 2: Reduce
function findMax(arr) {
  return arr.reduce((max, num) => num > max ? num : max, arr[0]);
}

// Method 3: Loop
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}
\`\`\``
    },
    {
        id: 'tcs138',
        question: 'Check if a string is a palindrome',
        answer: `\`\`\`javascript
function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}

// Alternative: Two pointers
function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  let left = 0, right = cleaned.length - 1;
  while (left < right) {
    if (cleaned[left] !== cleaned[right]) return false;
    left++;
    right--;
  }
  return true;
}
\`\`\``
    },
    {
        id: 'tcs139',
        question: 'Remove duplicates from an array',
        answer: `\`\`\`javascript
// Method 1: Set
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// Method 2: Filter
function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

// Method 3: Reduce
function removeDuplicates(arr) {
  return arr.reduce((unique, item) => 
    unique.includes(item) ? unique : [...unique, item], []);
}
\`\`\``
    },
    {
        id: 'tcs140',
        question: 'Find the factorial of a number',
        answer: `\`\`\`javascript
// Recursive
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

// Iterative
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
\`\`\``
    },
    {
        id: 'tcs141',
        question: 'Check if two strings are anagrams',
        answer: `\`\`\`javascript
function areAnagrams(str1, str2) {
  const sort = str => str.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');
  return sort(str1) === sort(str2);
}

// Example
areAnagrams('listen', 'silent'); // true
\`\`\``
    },
    {
        id: 'tcs142',
        question: 'Find the first non-repeating character',
        answer: `\`\`\`javascript
function firstNonRepeating(str) {
  const charCount = {};
  
  // Count occurrences
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  
  // Find first with count 1
  for (let char of str) {
    if (charCount[char] === 1) return char;
  }
  
  return null;
}
\`\`\``
    },
    {
        id: 'tcs143',
        question: 'Implement a function to flatten a nested array',
        answer: `\`\`\`javascript
// Method 1: Built-in
function flatten(arr) {
  return arr.flat(Infinity);
}

// Method 2: Recursive
function flatten(arr) {
  return arr.reduce((flat, item) => 
    Array.isArray(item) ? flat.concat(flatten(item)) : flat.concat(item), []);
}

// Example
flatten([1, [2, [3, [4]], 5]]); // [1, 2, 3, 4, 5]
\`\`\``
    },
    {
        id: 'tcs144',
        question: 'Find the sum of array elements',
        answer: `\`\`\`javascript
// Method 1: Reduce
function sum(arr) {
  return arr.reduce((total, num) => total + num, 0);
}

// Method 2: Loop
function sum(arr) {
  let total = 0;
  for (let num of arr) {
    total += num;
  }
  return total;
}
\`\`\``
    },
    {
        id: 'tcs145',
        question: 'Implement debounce function',
        answer: `\`\`\`javascript
function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

// Usage
const debouncedSearch = debounce((query) => {
  console.log('Searching for:', query);
}, 300);
\`\`\``
    },
];

export default codingQuestions;
