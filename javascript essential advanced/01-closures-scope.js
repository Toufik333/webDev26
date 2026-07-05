/*
  Purpose: Closures and Scope
  Learn about lexical scope, closures, and variable retention
*/

// Function to demonstrate closures
function runClosure() {
    const output = document.getElementById('output');
    
    // Simple closure example
    function createCounter() {
        let count = 0; // This variable is "closed over"
        
        return {
            increment: function() {
                return ++count;
            },
            decrement: function() {
                return --count;
            },
            getCount: function() {
                return count;
            }
        };
    }
    
    const counter = createCounter();
    
    // Closure with private variables
    function createBankAccount(initialBalance) {
        let balance = initialBalance;
        
        return {
            deposit: function(amount) {
                balance += amount;
                return `Deposited: $${amount}, Balance: $${balance}`;
            },
            withdraw: function(amount) {
                if (amount > balance) return "Insufficient funds";
                balance -= amount;
                return `Withdrew: $${amount}, Balance: $${balance}`;
            },
            getBalance: function() {
                return balance;
            }
        };
    }
    
    const account = createBankAccount(1000);
    
    // Function factory with closure
    function makeMultiplier(multiplier) {
        return function(number) {
            return number * multiplier;
        };
    }
    
    const double = makeMultiplier(2);
    const triple = makeMultiplier(3);
    
    // Closure with loop
    function createFunctions() {
        const functions = [];
        for (let i = 0; i < 3; i++) {
            functions.push(() => i); // Closure captures 'i'
        }
        return functions;
    }
    
    const funcs = createFunctions();
    
    let result = `
        <h3>Understanding Closures</h3>
        <div class="code">
        <strong>What is a closure?</strong><br>
        A closure is a function that has access to variables from its outer scope,<br>
        even after the outer function has returned.<br><br>
        
        <strong>Example 1: Counter Closure</strong><br>
        counter.increment() = ${counter.increment()}<br>
        counter.increment() = ${counter.increment()}<br>
        counter.getCount() = ${counter.getCount()}<br><br>
        
        <strong>Example 2: Private Variables (Bank Account)</strong><br>
        ${account.deposit(500)}<br>
        ${account.withdraw(200)}<br>
        Balance: $${account.getBalance()}<br><br>
        
        <strong>Example 3: Function Factories</strong><br>
        double(5) = ${double(5)}<br>
        triple(5) = ${triple(5)}<br><br>
        
        <strong>Example 4: Closure with let in loop</strong><br>
        Using 'let' captures 'i' for each iteration:<br>
        funcs[0]() = ${funcs[0]()}, funcs[1]() = ${funcs[1]()}, funcs[2]() = ${funcs[2]()}<br>
        </div>
    `;
    
    output.innerHTML = result;
}

// Advanced closure patterns
const closurePatterns = {
    // Module pattern
    modulePattern: (function() {
        let privateVar = "private";
        
        return {
            getPrivate: function() {
                return privateVar;
            },
            setPrivate: function(val) {
                privateVar = val;
            }
        };
    })(),
    
    // Currying with closures
    curry: function(fn) {
        return function curried(...args) {
            if (args.length >= fn.length) {
                return fn.apply(this, args);
            } else {
                return function(...args2) {
                    return curried.apply(this, args.concat(args2));
                };
            }
        };
    },
    
    // Memoization with closure
    memoize: function(fn) {
        const cache = {};
        
        return function(...args) {
            const key = JSON.stringify(args);
            if (key in cache) {
                return cache[key];
            }
            const result = fn.apply(this, args);
            cache[key] = result;
            return result;
        };
    },
    
    // Debounce with closure
    debounce: function(fn, delay) {
        let timeoutId;
        return function(...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => fn.apply(this, args), delay);
        };
    },
    
    // Throttle with closure
    throttle: function(fn, interval) {
        let lastRun = 0;
        return function(...args) {
            const now = Date.now();
            if (now - lastRun >= interval) {
                fn.apply(this, args);
                lastRun = now;
            }
        };
    }
};

// Scope examples
const scopeExamples = {
    globalScope: 'Accessible everywhere',
    
    blockScope: function() {
        if (true) {
            let x = 5; // block-scoped
            const y = 10; // block-scoped
            var z = 15; // function-scoped
        }
        // x and y are not accessible here
        // z is accessible (function-scoped)
    },
    
    lexicalScope: function() {
        const x = 'outer';
        
        function inner() {
            return x; // Accesses outer scope
        }
        
        return inner();
    }
};
