/*
  Purpose: Variables and Data Types
  Learn about var, let, const, and different data types in JavaScript
*/

// Function to demonstrate variables and data types
function runVariablesExample() {
    const output = document.getElementById('variables-output');
    
    // Variables can be declared with var, let, or const
    // var - function-scoped (older way)
    // let - block-scoped (modern)
    // const - block-scoped and immutable
    
    var name = "JavaScript"; // String
    let age = 25; // Number
    const isLearning = true; // Boolean
    
    // Different data types
    const stringValue = "Hello"; // String
    const numberValue = 42; // Number (int and float)
    const booleanValue = false; // Boolean
    const nullValue = null; // Null
    const undefinedValue = undefined; // Undefined
    const arrayValue = [1, 2, 3]; // Array
    const objectValue = { name: "John", age: 30 }; // Object
    
    // typeof operator returns the data type
    let result = `
        <h3>Variable Examples:</h3>
        <div class="code">
        var name = "${name}";<br>
        let age = ${age};<br>
        const isLearning = ${isLearning};<br>
        </div>
        
        <h3>Data Types:</h3>
        <div class="code">
        String: "${stringValue}" | typeof: ${typeof stringValue}<br>
        Number: ${numberValue} | typeof: ${typeof numberValue}<br>
        Boolean: ${booleanValue} | typeof: ${typeof booleanValue}<br>
        Null: ${nullValue} | typeof: ${typeof nullValue}<br>
        Undefined: ${undefinedValue} | typeof: ${typeof undefinedValue}<br>
        Array: ${JSON.stringify(arrayValue)} | typeof: ${typeof arrayValue}<br>
        Object: ${JSON.stringify(objectValue)} | typeof: ${typeof objectValue}<br>
        </div>
    `;
    
    output.innerHTML = result;
}
