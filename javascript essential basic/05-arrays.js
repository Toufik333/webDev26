/*
  Purpose: Arrays and Array Methods
  Learn about array creation, iteration, and useful methods
*/

// Function to demonstrate arrays and array methods
function runArraysExample() {
    const output = document.getElementById('arrays-output');
    
    // Creating arrays
    const numbers = [1, 2, 3, 4, 5];
    const mixed = [1, "hello", true, null, { name: "John" }];
    const fruits = new Array("apple", "banana", "orange");
    
    // Array methods
    const doubled = numbers.map(num => num * 2); // [2, 4, 6, 8, 10]
    const evens = numbers.filter(num => num % 2 === 0); // [2, 4]
    const sum = numbers.reduce((total, num) => total + num, 0); // 15
    
    // Other useful methods
    const allInclude5 = numbers.some(num => num === 5); // true
    const allAbove10 = numbers.every(num => num > 10); // false
    const indexOf3 = numbers.indexOf(3); // 2
    const joined = fruits.join(", "); // "apple, banana, orange"
    
    let result = `
        <h3>Array Creation:</h3>
        <div class="code">
        const numbers = [1, 2, 3, 4, 5]<br>
        const mixed = [1, "hello", true, null, {}]<br>
        const fruits = new Array("apple", "banana", "orange")
        </div>
        
        <h3>Array Methods:</h3>
        <div class="code">
        <strong>map():</strong> numbers.map(n => n * 2) = ${JSON.stringify(doubled)}<br>
        <strong>filter():</strong> numbers.filter(n => n % 2 === 0) = ${JSON.stringify(evens)}<br>
        <strong>reduce():</strong> numbers.reduce((a,b) => a+b, 0) = ${sum}<br>
        <strong>some():</strong> numbers.some(n => n === 5) = ${allInclude5}<br>
        <strong>every():</strong> numbers.every(n => n > 10) = ${allAbove10}<br>
        <strong>indexOf():</strong> numbers.indexOf(3) = ${indexOf3}<br>
        <strong>join():</strong> fruits.join(", ") = "${joined}"<br>
        </div>
        
        <h3>Array Iteration:</h3>
        <div class="code">
        <strong>forEach:</strong> Executes function for each element<br>
        <strong>map:</strong> Creates new array with transformed elements<br>
        <strong>filter:</strong> Creates new array with filtered elements<br>
        <strong>reduce:</strong> Reduces array to single value<br>
        <strong>find:</strong> Returns first element matching condition<br>
        <strong>findIndex:</strong> Returns index of first matching element<br>
        </div>
    `;
    
    output.innerHTML = result;
}

// Additional array examples
const arrayExamples = {
    // Push and Pop - add/remove from end
    push: function() {
        const arr = [1, 2, 3];
        arr.push(4); // [1, 2, 3, 4]
        arr.pop(); // [1, 2, 3]
    },
    
    // Shift and Unshift - add/remove from beginning
    shift: function() {
        const arr = [1, 2, 3];
        arr.unshift(0); // [0, 1, 2, 3]
        arr.shift(); // [1, 2, 3]
    },
    
    // Slice and Splice
    slice: function() {
        const arr = [1, 2, 3, 4, 5];
        const sliced = arr.slice(1, 4); // [2, 3, 4] - doesn't modify original
        // arr.splice(1, 2, 'a', 'b') - modifies original
    },
    
    // Find and FindIndex
    find: function() {
        const arr = [1, 5, 10, 15];
        const found = arr.find(num => num > 10); // 15
        const index = arr.findIndex(num => num > 10); // 3
    },
    
    // Spread operator
    spread: function() {
        const arr1 = [1, 2, 3];
        const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]
    }
};
