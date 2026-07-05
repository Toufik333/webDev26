/*
  Purpose: Higher-Order Functions
  Learn functions that operate on other functions
*/

// Function to demonstrate higher-order functions
function runHigherOrder() {
    const output = document.getElementById('output');
    
    // Function that returns a function
    function makeAdder(x) {
        return function(y) {
            return x + y;
        };
    }
    
    const add5 = makeAdder(5);
    const add10 = makeAdder(10);
    
    // Function that accepts a function as parameter
    function processArray(arr, fn) {
        return arr.map(fn);
    }
    
    const numbers = [1, 2, 3, 4, 5];
    const doubled = processArray(numbers, x => x * 2);
    const squared = processArray(numbers, x => x * x);
    
    // Compose function
    function compose(...fns) {
        return (value) => fns.reduceRight((acc, fn) => fn(acc), value);
    }
    
    const addOne = x => x + 1;
    const double = x => x * 2;
    const addOneThenDouble = compose(double, addOne);
    
    // Pipe function (opposite of compose)
    function pipe(...fns) {
        return (value) => fns.reduce((acc, fn) => fn(acc), value);
    }
    
    const doubleThenAddOne = pipe(double, addOne);
    
    // Filter, map, reduce
    const data = [10, 20, 30, 40, 50];
    const evenNumbers = data.filter(n => n % 2 === 0);
    const doubled2 = data.map(n => n * 2);
    const sum = data.reduce((acc, n) => acc + n, 0);
    
    // Find
    const found = data.find(n => n > 25);
    
    // Memoization
    function fibonacci(n, memo = {}) {
        if (n in memo) return memo[n];
        if (n <= 1) return n;
        
        memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
        return memo[n];
    }
    
    let result = `
        <h3>Higher-Order Functions</h3>
        <div class="code">
        <strong>Function Factories (Returns Function):</strong><br>
        const add5 = makeAdder(5);<br>
        add5(3) = ${add5(3)}<br>
        add5(7) = ${add5(7)}<br><br>
        
        <strong>Array Processing (Accepts Function):</strong><br>
        numbers = ${JSON.stringify(numbers)}<br>
        doubled = ${JSON.stringify(doubled)}<br>
        squared = ${JSON.stringify(squared)}<br><br>
        
        <strong>Function Composition:</strong><br>
        addOneThenDouble(5) = ${addOneThenDouble(5)}<br>
        doubleThenAddOne(5) = ${doubleThenAddOne(5)}<br><br>
        
        <strong>Array Methods:</strong><br>
        data = ${JSON.stringify(data)}<br>
        filter(even) = ${JSON.stringify(evenNumbers)}<br>
        map(double) = ${JSON.stringify(doubled2)}<br>
        reduce(sum) = ${sum}<br>
        find(>25) = ${found}<br><br>
        
        <strong>Memoization:</strong><br>
        fibonacci(10) = ${fibonacci(10)}<br>
        </div>
    `;
    
    output.innerHTML = result;
}

// Higher-order function patterns
const higherOrderPatterns = {
    // Curry function
    curry: function(fn) {
        return function curried(...args) {
            if (args.length >= fn.length) {
                return fn(...args);
            }
            return (...nextArgs) => curried(...args, ...nextArgs);
        };
    },
    
    // Partial application
    partial: function(fn, ...partialArgs) {
        return (...restArgs) => fn(...partialArgs, ...restArgs);
    },
    
    // Compose functions
    compose: function(...fns) {
        return (value) => fns.reduceRight((v, f) => f(v), value);
    },
    
    // Pipe functions
    pipe: function(...fns) {
        return (value) => fns.reduce((v, f) => f(v), value);
    },
    
    // Debounce
    debounce: function(fn, delay) {
        let timeoutId;
        return (...args) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => fn(...args), delay);
        };
    },
    
    // Throttle
    throttle: function(fn, interval) {
        let lastRun = 0;
        return (...args) => {
            const now = Date.now();
            if (now - lastRun >= interval) {
                fn(...args);
                lastRun = now;
            }
        };
    },
    
    // Retry on failure
    retry: function(fn, maxRetries = 3) {
        return async (...args) => {
            for (let i = 0; i < maxRetries; i++) {
                try {
                    return await fn(...args);
                } catch (error) {
                    if (i === maxRetries - 1) throw error;
                }
            }
        };
    }
};

// Array methods are higher-order functions
const arrayMethods = {
    map: 'Transform each element',
    filter: 'Select elements matching condition',
    reduce: 'Combine elements into single value',
    forEach: 'Execute function for each element',
    find: 'Find first matching element',
    findIndex: 'Find index of first match',
    some: 'Check if any element matches',
    every: 'Check if all elements match',
    sort: 'Sort using comparison function'
};
