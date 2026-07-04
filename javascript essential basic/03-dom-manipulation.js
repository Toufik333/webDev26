/*
  Purpose: DOM Manipulation
  Learn to select, modify, and interact with HTML elements
*/

// Different ways to select elements
function getElementsExample() {
    // By ID
    const element1 = document.getElementById('dom-output');
    
    // By class name
    const elements2 = document.getElementsByClassName('button');
    
    // By tag name
    const elements3 = document.getElementsByTagName('div');
    
    // Using querySelector (most modern and flexible)
    const element4 = document.querySelector('.section');
    const elements5 = document.querySelectorAll('.section');
    
    return {
        byId: element1,
        byClass: elements2,
        byTag: elements3,
        queryOne: element4,
        queryAll: elements5
    };
}

// Function to demonstrate DOM manipulation
function runDOMExample() {
    const output = document.getElementById('dom-output');
    
    let result = `
        <h3>DOM Selection Methods:</h3>
        <div class="code">
        document.getElementById('id')<br>
        document.getElementsByClassName('class')<br>
        document.getElementsByTagName('tag')<br>
        document.querySelector('.class')<br>
        document.querySelectorAll('.class')<br>
        </div>
        
        <h3>DOM Modification Methods:</h3>
        <div class="code">
        element.textContent = "new text"<br>
        element.innerHTML = "&lt;strong&gt;bold&lt;/strong&gt;"<br>
        element.setAttribute('attr', 'value')<br>
        element.classList.add('className')<br>
        element.style.color = "red"<br>
        element.appendChild(newElement)<br>
        element.removeChild(element)<br>
        </div>
    `;
    
    output.innerHTML = result;
}

// Update DOM based on user input
function updateDOM() {
    const userInput = document.getElementById('userInput');
    const output = document.getElementById('dom-output');
    
    if (userInput.value.trim() === '') {
        output.innerHTML = '<div class="output">Please enter some text</div>';
        return;
    }
    
    // Different ways to modify the DOM
    const upperCase = userInput.value.toUpperCase();
    const lowerCase = userInput.value.toLowerCase();
    const reversed = userInput.value.split('').reverse().join('');
    
    output.innerHTML = `
        <div class="output">
            <strong>Original:</strong> ${userInput.value}<br>
            <strong>Upper Case:</strong> ${upperCase}<br>
            <strong>Lower Case:</strong> ${lowerCase}<br>
            <strong>Reversed:</strong> ${reversed}
        </div>
    `;
}
