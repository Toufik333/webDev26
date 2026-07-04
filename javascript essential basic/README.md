# JavaScript Essentials - Quick Reference Guide

## Files Overview

This folder contains essential JavaScript files for learning and practicing basic web development. Open `index.html` in your browser to interact with all examples.

### 📁 File Structure

```
javascript essential basic/
├── index.html                          # Main HTML file with interactive UI
├── 01-variables-types.js               # Variables (var, let, const) and data types
├── 02-functions.js                     # Function declarations, expressions, arrow functions
├── 03-dom-manipulation.js              # Selecting and modifying HTML elements
├── 04-events.js                        # Event handling and listeners
├── 05-arrays.js                        # Array creation and methods (map, filter, etc)
├── 06-objects.js                       # Object literals and methods
├── 07-strings.js                       # String methods and manipulation
├── 08-conditionals-loops.js            # if/else, switch, for, while loops
├── 09-localStorage.js                  # Browser storage API
└── 10-async-promises.js                # Promises, async/await, callbacks
```

## Quick Reference

### 1. Variables & Data Types
- `var` - function-scoped (older)
- `let` - block-scoped (modern)
- `const` - block-scoped and immutable (preferred)
- Data types: String, Number, Boolean, Null, Undefined, Array, Object

### 2. Functions
```javascript
// Declaration
function greet(name) { return 'Hello ' + name; }

// Expression
const add = function(a, b) { return a + b; }

// Arrow function
const multiply = (a, b) => a * b;
```

### 3. DOM Methods
- `getElementById()`, `querySelector()`
- `textContent`, `innerHTML`, `setAttribute()`
- `addEventListener()`, `classList.add()`

### 4. Common Events
- Mouse: `click`, `mouseover`, `mouseout`
- Keyboard: `keydown`, `keyup`
- Form: `submit`, `change`, `focus`

### 5. Array Methods
- `map()`, `filter()`, `reduce()`
- `forEach()`, `find()`, `some()`, `every()`
- `push()`, `pop()`, `shift()`, `unshift()`

### 6. Object Syntax
```javascript
const obj = {
    name: 'John',
    age: 30,
    greet: function() { return 'Hello'; }
};

obj.name;  // access property
obj['age']; // bracket notation
```

### 7. String Methods
- `toUpperCase()`, `toLowerCase()`
- `includes()`, `startsWith()`, `endsWith()`
- `split()`, `join()`, `replace()`
- `slice()`, `substring()`, `trim()`

### 8. Control Flow
```javascript
// If/Else
if (condition) { } else { }

// Switch
switch(value) { case 1: break; default: }

// Loops
for (let i = 0; i < 10; i++) { }
while (condition) { }
```

### 9. LocalStorage
```javascript
localStorage.setItem('key', 'value');
const value = localStorage.getItem('key');
localStorage.removeItem('key');
localStorage.clear();
```

### 10. Promises & Async
```javascript
// Promise
new Promise((resolve, reject) => {
    resolve(data);
});

// Async/Await
async function getData() {
    const data = await fetch(url);
}
```

## How to Use

1. Open `index.html` in a web browser
2. Click on "Run Example" buttons to see each concept in action
3. Check the browser's Developer Tools (F12) Console for more details
4. Modify the code to experiment and learn

## Common Patterns

### Fetching Data
```javascript
// Using Promises
fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

// Using Async/Await
async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
```

### Array Manipulation
```javascript
const numbers = [1, 2, 3, 4, 5];

// Filter even numbers
const evens = numbers.filter(n => n % 2 === 0);

// Double each number
const doubled = numbers.map(n => n * 2);

// Sum all numbers
const sum = numbers.reduce((a, b) => a + b, 0);
```

### DOM Updates
```javascript
const btn = document.getElementById('myBtn');

btn.addEventListener('click', function() {
    btn.textContent = 'Clicked!';
    btn.classList.add('active');
});
```

## Tips

- Use `const` by default, `let` when variable needs to change
- Use arrow functions for short callbacks
- Use template literals `` `Hello ${name}` `` for string interpolation
- Use destructuring: `const { name, age } = person;`
- Use spread operator: `const arr2 = [...arr1, 4, 5];`

## Resources

- MDN Web Docs: https://developer.mozilla.org/
- JavaScript.info: https://javascript.info/
- W3Schools: https://www.w3schools.com/js/

---

**Last Updated:** July 2026
