/*
  Purpose: Event Handling
  Learn about different types of events and how to handle them
*/

// Function to demonstrate event handling
function runEventExample() {
    const output = document.getElementById('events-output');
    
    let result = `
        <h3>Common Events:</h3>
        <div class="code">
        <strong>Mouse Events:</strong><br>
        click, dblclick, mouseover, mouseout, mouseenter, mouseleave<br><br>
        
        <strong>Keyboard Events:</strong><br>
        keydown, keyup, keypress<br><br>
        
        <strong>Form Events:</strong><br>
        submit, change, focus, blur, input<br><br>
        
        <strong>Window Events:</strong><br>
        load, unload, scroll, resize<br>
        </div>
        
        <h3>Event Methods:</h3>
        <div class="code">
        element.addEventListener('click', function() {})<br>
        element.removeEventListener('click', function() {})<br>
        element.onclick = function() {}<br>
        &lt;button onclick="functionName()"&gt;Click&lt;/button&gt;
        </div>
        
        <p>Try hovering over or clicking the buttons on this page to see events in action!</p>
    `;
    
    output.innerHTML = result;
}

// Event listener example - track mouse movements
document.addEventListener('mousemove', function(event) {
    // You can use event properties like:
    // event.clientX - mouse X coordinate
    // event.clientY - mouse Y coordinate
    // event.target - element that triggered the event
    // event.preventDefault() - cancel default action
});

// Keyboard event example
document.addEventListener('keydown', function(event) {
    // event.key - the key that was pressed
    // event.code - the code of the key
    // event.ctrlKey, event.shiftKey, event.altKey - modifier keys
});

// Event delegation example
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('button')) {
        // Handle button clicks
    }
});

// Custom event handling
function handleButtonClick(message) {
    alert(message);
}

function handleInputChange(input) {
    console.log('Input value: ' + input.value);
}

// Event object example
function handleEventObject(event) {
    console.log('Event type: ' + event.type);
    console.log('Event target: ' + event.target);
    console.log('Event timestamp: ' + event.timeStamp);
}
