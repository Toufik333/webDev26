/*
  Purpose: String Methods
  Learn about string manipulation and useful string methods
*/

// Function to demonstrate string methods
function runStringsExample() {
    const output = document.getElementById('strings-output');
    
    const text = "Hello World";
    const sentence = "JavaScript is awesome and fun";
    
    // String properties and methods
    const length = text.length; // 11
    const upper = text.toUpperCase(); // "HELLO WORLD"
    const lower = text.toLowerCase(); // "hello world"
    const charAt = text.charAt(0); // "H"
    const charCode = text.charCodeAt(0); // 72
    
    // String search methods
    const indexOf = text.indexOf("o"); // 4
    const lastIndexOf = text.lastIndexOf("o"); // 7
    const includes = text.includes("World"); // true
    const startsWith = text.startsWith("Hello"); // true
    const endsWith = text.endsWith("World"); // true
    
    // String extraction methods
    const slice = text.slice(0, 5); // "Hello"
    const substring = text.substring(0, 5); // "Hello"
    const substr = text.substr(0, 5); // "Hello" (deprecated)
    
    // String replacement and splitting
    const replace = sentence.replace("awesome", "amazing"); // first occurrence
    const replaceAll = sentence.replaceAll("and", "&"); // all occurrences (ES2021)
    const split = sentence.split(" "); // ["JavaScript", "is", "awesome", ...]
    const trim = "  hello  ".trim(); // "hello"
    
    // String padding
    const padStart = "5".padStart(3, "0"); // "005"
    const padEnd = "5".padEnd(3, "0"); // "500"
    
    // Template literals
    const name = "John";
    const greeting = `Hello, ${name}!`; // "Hello, John!"
    
    let result = `
        <h3>String Properties & Basic Methods:</h3>
        <div class="code">
        text = "${text}"<br>
        text.length = ${length}<br>
        text.toUpperCase() = "${upper}"<br>
        text.toLowerCase() = "${lower}"<br>
        text.charAt(0) = "${charAt}"<br>
        </div>
        
        <h3>String Search Methods:</h3>
        <div class="code">
        text.indexOf("o") = ${indexOf}<br>
        text.lastIndexOf("o") = ${lastIndexOf}<br>
        text.includes("World") = ${includes}<br>
        text.startsWith("Hello") = ${startsWith}<br>
        text.endsWith("World") = ${endsWith}<br>
        </div>
        
        <h3>String Extraction Methods:</h3>
        <div class="code">
        text.slice(0, 5) = "${slice}"<br>
        text.substring(0, 5) = "${substring}"<br>
        </div>
        
        <h3>String Replacement & Splitting:</h3>
        <div class="code">
        sentence.replace("awesome", "amazing") = "${replace}"<br>
        sentence.split(" ") = ${JSON.stringify(split)}<br>
        "  hello  ".trim() = "${trim}"<br>
        </div>
        
        <h3>Template Literals:</h3>
        <div class="code">
        const name = "${name}";<br>
        \`Hello, \${name}!\` = "${greeting}"<br>
        </div>
    `;
    
    output.innerHTML = result;
}

// Additional string examples
const stringExamples = {
    // Repeat string
    repeat: function() {
        return "ab".repeat(3); // "ababab"
    },
    
    // Concatenation
    concat: function() {
        const str1 = "Hello";
        const str2 = "World";
        return str1.concat(" ", str2); // "Hello World"
    },
    
    // Match and regex
    match: function() {
        const text = "The year is 2026";
        const matches = text.match(/\d+/g); // ["2026"]
    },
    
    // Search (returns index)
    search: function() {
        const text = "Hello World";
        const index = text.search(/World/); // 6
    },
    
    // String comparison
    localeCompare: function() {
        const result = "a".localeCompare("b"); // -1 (less than)
    },
    
    // Convert to array
    split: function() {
        const arr = "hello".split(""); // ["h", "e", "l", "l", "o"]
    }
};
