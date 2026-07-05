/*
  Purpose: Destructuring and Spread Operator
  Learn modern syntax for unpacking and combining data
*/

// Function to demonstrate destructuring and spread
function runDestructuring() {
    const output = document.getElementById('output');
    
    // Array destructuring
    const colors = ['red', 'green', 'blue'];
    const [primary, secondary, tertiary] = colors;
    
    // Destructuring with rest
    const [first, ...rest] = ['a', 'b', 'c', 'd'];
    
    // Skipping elements
    const [head, , third] = [1, 2, 3];
    
    // Object destructuring
    const person = {
        name: 'Alice',
        age: 30,
        city: 'NYC'
    };
    const { name, age, city } = person;
    
    // Renaming in destructuring
    const { name: fullName, age: years } = person;
    
    // Default values
    const { name: n = 'Anonymous', country = 'USA' } = person;
    
    // Nested destructuring
    const user = {
        id: 1,
        profile: {
            name: 'Bob',
            email: 'bob@example.com'
        }
    };
    const { profile: { name: profileName, email } } = user;
    
    // Spread operator for arrays
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    const combined = [...arr1, ...arr2];
    
    // Spread operator for objects
    const obj1 = { a: 1, b: 2 };
    const obj2 = { c: 3, d: 4 };
    const mergedObj = { ...obj1, ...obj2 };
    
    // Spread with override
    const defaults = { theme: 'light', size: 'medium' };
    const userSettings = { ...defaults, theme: 'dark' };
    
    // Rest parameters in functions
    function sum(...numbers) {
        return numbers.reduce((a, b) => a + b, 0);
    }
    
    let result = `
        <h3>Destructuring and Spread Operator</h3>
        <div class="code">
        <strong>Array Destructuring:</strong><br>
        const [primary, secondary, tertiary] = ${JSON.stringify(colors)}<br>
        primary = "${primary}", secondary = "${secondary}"<br><br>
        
        <strong>Destructuring with Rest:</strong><br>
        const [first, ...rest] = ['a', 'b', 'c', 'd']<br>
        first = "${first}", rest = ${JSON.stringify(rest)}<br><br>
        
        <strong>Object Destructuring:</strong><br>
        const { name, age, city } = ${JSON.stringify(person)}<br>
        name = "${name}", age = ${age}, city = "${city}"<br><br>
        
        <strong>Renaming in Destructuring:</strong><br>
        const { name: fullName, age: years } = person<br>
        fullName = "${fullName}", years = ${years}<br><br>
        
        <strong>Nested Destructuring:</strong><br>
        const { profile: { name: profileName, email } } = user<br>
        profileName = "${profileName}", email = "${email}"<br><br>
        
        <strong>Spread Operator for Arrays:</strong><br>
        [...${JSON.stringify(arr1)}, ...${JSON.stringify(arr2)}] = ${JSON.stringify(combined)}<br><br>
        
        <strong>Spread Operator for Objects:</strong><br>
        { ...obj1, ...obj2 } = ${JSON.stringify(mergedObj)}<br><br>
        
        <strong>Rest Parameters:</strong><br>
        sum(1, 2, 3, 4, 5) = ${sum(1, 2, 3, 4, 5)}<br>
        </div>
    `;
    
    output.innerHTML = result;
}

// Destructuring patterns
const destructuringPatterns = {
    // Function parameter destructuring
    functionParam: function({ name, age }) {
        return `${name} is ${age}`;
    },
    
    // Array swapping
    arraySwap: function() {
        let a = 1, b = 2;
        [a, b] = [b, a]; // Swap
    },
    
    // Object assignment with defaults
    objectDefaults: function(options = {}) {
        const {
            timeout = 5000,
            retries = 3,
            cache = false
        } = options;
    },
    
    // Extract from nested API response
    extractNested: function() {
        const response = {
            data: {
                user: {
                    id: 1,
                    name: 'John'
                }
            }
        };
        const { data: { user: { id, name } } } = response;
    },
    
    // Spread with push
    spreadPush: function() {
        const arr = [1, 2];
        const newArr = [0, ...arr, 3]; // [0, 1, 2, 3]
    },
    
    // Clone objects
    cloneObject: function(obj) {
        return { ...obj }; // Shallow copy
    },
    
    // Combine objects
    combineObjects: function(obj1, obj2) {
        return { ...obj1, ...obj2 };
    }
};

// Use cases
const usesCases = {
    'Function defaults': 'function(name = "John") {}',
    'Extracting values': 'const { x, y } = point',
    'Swapping values': '[a, b] = [b, a]',
    'Cloning arrays': 'const copy = [...original]',
    'Merging objects': 'const merged = { ...obj1, ...obj2 }',
    'Rest parameters': 'function foo(...args) {}',
    'Default destructuring': 'const { x = 0 } = obj'
};
