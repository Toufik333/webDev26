/*
  Purpose: Conditionals and Loops
  Learn about control flow: if/else, switch, and different loop types
*/

// Function to demonstrate conditionals and loops
function runConditionalsExample() {
    const output = document.getElementById('conditionals-output');
    
    // Conditional examples
    const age = 25;
    let ageGroup = "";
    
    if (age < 13) {
        ageGroup = "Child";
    } else if (age < 18) {
        ageGroup = "Teenager";
    } else if (age < 65) {
        ageGroup = "Adult";
    } else {
        ageGroup = "Senior";
    }
    
    // Switch statement
    const day = 3; // 0-6
    let dayName = "";
    
    switch(day) {
        case 0:
            dayName = "Sunday";
            break;
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        default:
            dayName = "Other day";
    }
    
    // Ternary operator
    const status = age >= 18 ? "Adult" : "Minor";
    
    // Loop examples
    let forLoop = "";
    for (let i = 1; i <= 5; i++) {
        forLoop += i + " ";
    }
    
    let whileLoop = "";
    let count = 1;
    while (count <= 5) {
        whileLoop += count + " ";
        count++;
    }
    
    let doWhileLoop = "";
    let num = 1;
    do {
        doWhileLoop += num + " ";
        num++;
    } while (num <= 5);
    
    // Array iteration
    const numbers = [1, 2, 3, 4, 5];
    let forOfLoop = "";
    for (const number of numbers) {
        forOfLoop += number + " ";
    }
    
    let forInLoop = "";
    const obj = { a: 1, b: 2, c: 3 };
    for (const key in obj) {
        forInLoop += `${key}:${obj[key]} `;
    }
    
    let result = `
        <h3>If/Else Statement:</h3>
        <div class="code">
        if (age < 13) { ageGroup = "Child" }<br>
        else if (age < 18) { ageGroup = "Teenager" }<br>
        else { ageGroup = "Adult" }<br><br>
        Age ${age} → "${ageGroup}"
        </div>
        
        <h3>Switch Statement:</h3>
        <div class="code">
        Day ${day} → "${dayName}"<br>
        Uses break to prevent fall-through
        </div>
        
        <h3>Ternary Operator:</h3>
        <div class="code">
        age >= 18 ? "Adult" : "Minor" = "${status}"
        </div>
        
        <h3>Loop Types:</h3>
        <div class="code">
        <strong>for loop:</strong> 1 2 3 4 5<br>
        <strong>while loop:</strong> 1 2 3 4 5<br>
        <strong>do/while loop:</strong> 1 2 3 4 5<br>
        <strong>for...of loop:</strong> ${forOfLoop}<br>
        <strong>for...in loop:</strong> ${forInLoop}<br>
        </div>
        
        <h3>Loop Control:</h3>
        <div class="code">
        <strong>break:</strong> Exit loop immediately<br>
        <strong>continue:</strong> Skip to next iteration<br>
        </div>
    `;
    
    output.innerHTML = result;
}

// Additional conditional and loop examples
const controlFlowExamples = {
    // Logical operators
    logicalOperators: function() {
        const x = 5;
        // && (AND), || (OR), ! (NOT)
        const result1 = x > 0 && x < 10; // true
        const result2 = x > 10 || x < 20; // true
        const result3 = !(x === 5); // false
    },
    
    // Break and continue
    breakContinue: function() {
        // Break - exits loop
        for (let i = 0; i < 10; i++) {
            if (i === 5) break; // exits when i = 5
        }
        
        // Continue - skips to next iteration
        for (let i = 0; i < 10; i++) {
            if (i === 5) continue; // skips i = 5
        }
    },
    
    // Nested loops
    nestedLoops: function() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                // 9 iterations total
            }
        }
    },
    
    // forEach with array
    forEach: function() {
        const arr = [1, 2, 3];
        arr.forEach((num, index) => {
            // index is optional
        });
    },
    
    // Nullish coalescing
    nullishCoalescing: function() {
        const value = null;
        const result = value ?? "default"; // "default"
    }
};
