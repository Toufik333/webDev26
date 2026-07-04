/*
  Purpose: Functions
  Learn about function declarations, expressions, arrow functions, and parameters
*/

// Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Function Expression
const add = function(a, b) {
    return a + b;
};

// Arrow Function (modern ES6 syntax)
const multiply = (a, b) => a * b;

// Function with multiple parameters and default values
const calculateTotal = (price, tax = 0.1, discount = 0) => {
    return (price * (1 + tax)) - discount;
};

// Function that returns an object
function createUser(firstName, lastName, email) {
    return {
        firstName: firstName,
        lastName: lastName,
        email: email,
        fullName: function() {
            return `${this.firstName} ${this.lastName}`;
        }
    };
}

// Function to demonstrate all function types
function runFunctionsExample() {
    const output = document.getElementById('functions-output');
    
    // Call different types of functions
    const greeting = greet("Alice");
    const sum = add(10, 20);
    const product = multiply(5, 4);
    const total = calculateTotal(100, 0.15, 10);
    const user = createUser("John", "Doe", "john@example.com");
    
    let result = `
        <h3>Function Declaration:</h3>
        <div class="code">greet("Alice") = "${greeting}"</div>
        
        <h3>Function Expression:</h3>
        <div class="code">add(10, 20) = ${sum}</div>
        
        <h3>Arrow Function:</h3>
        <div class="code">multiply(5, 4) = ${product}</div>
        
        <h3>Function with Default Parameters:</h3>
        <div class="code">calculateTotal(100, 0.15, 10) = $${total.toFixed(2)}</div>
        
        <h3>Function Returning Object:</h3>
        <div class="code">
        User: ${user.fullName()}<br>
        Email: ${user.email}
        </div>
    `;
    
    output.innerHTML = result;
}
