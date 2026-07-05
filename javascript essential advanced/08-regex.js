/*
  Purpose: Regular Expressions
  Learn regex patterns, matching, and validation
*/

// Function to demonstrate regex
function runRegex() {
    const output = document.getElementById('output');
    
    // Basic patterns
    const text = "The year is 2026";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    const urlRegex = /^https?:\/\/[^\s]+$/;
    
    // Test method
    const isValidEmail = emailRegex.test('user@example.com');
    const isInvalidEmail = emailRegex.test('invalid-email');
    
    // Match method
    const numberMatches = text.match(/\d+/g); // All numbers
    const wordMatches = text.match(/\b\w+\b/g); // All words
    
    // Replace method
    const replaced = text.replace(/2026/, '2027');
    const replaceAll = "cat cat cat".replace(/cat/g, 'dog');
    
    // Split method
    const parts = "apple,banana,cherry".split(/,/);
    
    // Character classes
    const hasDigit = /\d/.test("abc123");
    const hasSpace = /\s/.test("hello world");
    const hasWord = /\w/.test("test");
    
    // Quantifiers
    const pattern1 = /a{3}/; // Exactly 3
    const pattern2 = /a+/; // One or more
    const pattern3 = /a*/; // Zero or more
    const pattern4 = /a?/; // Zero or one
    
    // Groups and capture
    const dateRegex = /(\d{4})-(\d{2})-(\d{2})/;
    const dateMatch = "2026-07-05".match(dateRegex);
    
    // Named groups
    const namedDateRegex = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
    const namedMatch = "2026-07-05".match(namedDateRegex);
    
    let result = `
        <h3>Regular Expressions</h3>
        <div class="code">
        <strong>Basic Patterns:</strong><br>
        Text: "${text}"<br>
        Numbers found: ${JSON.stringify(numberMatches)}<br>
        Words found: ${JSON.stringify(wordMatches)}<br><br>
        
        <strong>Test & Match:</strong><br>
        emailRegex.test('user@example.com') = ${isValidEmail}<br>
        emailRegex.test('invalid-email') = ${isInvalidEmail}<br><br>
        
        <strong>Replace:</strong><br>
        "2026" → "2027" = "${replaced}"<br>
        "cat cat cat" → "dog dog dog" = "${replaceAll}"<br><br>
        
        <strong>Split:</strong><br>
        "apple,banana,cherry".split(/,/) = ${JSON.stringify(parts)}<br><br>
        
        <strong>Character Classes:</strong><br>
        /\\d/.test("abc123") = ${hasDigit}<br>
        /\\s/.test("hello world") = ${hasSpace}<br>
        /\\w/.test("test") = ${hasWord}<br><br>
        
        <strong>Capture Groups:</strong><br>
        Date: "2026-07-05"<br>
        Match: ${JSON.stringify(dateMatch)}<br>
        </div>
    `;
    
    output.innerHTML = result;
}

// Regex patterns collection
const regexPatterns = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    url: /^https?:\/\/[^\s]+$/,
    phone: /^\d{3}-\d{3}-\d{4}$/,
    ipAddress: /^(\d{1,3}\.){3}\d{1,3}$/,
    hexColor: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
    date: /^\d{4}-\d{2}-\d{2}$/,
    time: /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/,
    username: /^[a-zA-Z0-9_]{3,16}$/,
    zipCode: /^\d{5}(-\d{4})?$/,
    creditCard: /^\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}$/
};

// Regex methods
const regexMethods = {
    test: 'Returns true/false if pattern matches',
    exec: 'Returns match details or null',
    match: 'Returns matches in string',
    matchAll: 'Returns all matches with groups',
    search: 'Returns index of match',
    replace: 'Replace first match',
    replaceAll: 'Replace all matches',
    split: 'Split string by pattern',
    includes: 'Check if pattern exists'
};

// Regex modifiers
const regexModifiers = {
    'g': 'Global - find all matches',
    'i': 'Ignore case',
    'm': 'Multi-line mode',
    's': 'Dotall - . matches newline',
    'd': 'Has indices - return index info',
    'u': 'Unicode mode',
    'y': 'Sticky - start from lastIndex'
};

// Character classes
const characterClasses = {
    '\\d': 'Digit [0-9]',
    '\\D': 'Non-digit',
    '\\w': 'Word character [a-zA-Z0-9_]',
    '\\W': 'Non-word character',
    '\\s': 'Whitespace',
    '\\S': 'Non-whitespace',
    '.': 'Any character except newline',
    '[abc]': 'a or b or c',
    '[^abc]': 'Not a, b, or c',
    '[a-z]': 'a to z',
    '[0-9]': 'Any digit'
};
