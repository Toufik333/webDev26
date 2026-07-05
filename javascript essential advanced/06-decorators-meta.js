/*
  Purpose: Decorators and Meta Programming
  Learn advanced patterns with Proxy and meta-programming
*/

// Function to demonstrate decorators and meta-programming
function runDecorators() {
    const output = document.getElementById('output');
    
    // Simple decorator pattern
    function uppercase(str) {
        return str.toUpperCase();
    }
    
    function exclamation(str) {
        return str + '!!!';
    }
    
    // Decorator for timing function execution
    function timedExecution(fn) {
        return function(...args) {
            const start = performance.now();
            const result = fn(...args);
            const end = performance.now();
            return `${result} (took ${(end - start).toFixed(2)}ms)`;
        };
    }
    
    const expensiveOperation = timedExecution(function() {
        let sum = 0;
        for (let i = 0; i < 1000000; i++) sum += i;
        return `Sum calculated: ${sum}`;
    });
    
    // Proxy for validation
    const userValidator = {
        set: (target, property, value) => {
            if (property === 'age' && typeof value !== 'number') {
                throw new TypeError('Age must be a number');
            }
            if (property === 'email' && !value.includes('@')) {
                throw new Error('Invalid email');
            }
            target[property] = value;
            return true;
        }
    };
    
    const user = new Proxy({}, userValidator);
    
    // Proxy for logging
    function createLoggingProxy(target) {
        return new Proxy(target, {
            get(target, property) {
                console.log(`Getting ${property}`);
                return target[property];
            },
            set(target, property, value) {
                console.log(`Setting ${property} to ${value}`);
                target[property] = value;
                return true;
            }
        });
    }
    
    // Reflect API
    const obj = { x: 1, y: 2 };
    const keys = Reflect.ownKeys(obj);
    
    // Method decorator pattern
    class Calculator {
        multiply(a, b) {
            return a * b;
        }
    }
    
    // Memoization decorator
    function memoize(fn) {
        const cache = new Map();
        return function(...args) {
            const key = JSON.stringify(args);
            if (cache.has(key)) {
                return cache.get(key);
            }
            const result = fn(...args);
            cache.set(key, result);
            return result;
        };
    }
    
    const expensiveFn = memoize((n) => {
        console.log(`Computing ${n}...`);
        return n * n;
    });
    
    // Logging decorator
    function log(fn) {
        return function(...args) {
            console.log(`Calling ${fn.name} with args:`, args);
            return fn(...args);
        };
    }
    
    let result = `
        <h3>Decorators & Meta Programming</h3>
        <div class="code">
        <strong>Decorator Pattern:</strong><br>
        uppercase(exclamation("hello")) = "${exclamation(uppercase("hello"))}"<br><br>
        
        <strong>Timed Execution Decorator:</strong><br>
        ${expensiveOperation()}<br><br>
        
        <strong>Proxy for Validation:</strong><br>
        user = new Proxy({}, userValidator)<br>
        user.age = 30; ✓ (Valid)<br>
        user.email = "john@example.com"; ✓ (Valid)<br><br>
        
        <strong>Reflect API:</strong><br>
        Reflect.ownKeys(obj) = ${JSON.stringify(keys)}<br><br>
        
        <strong>Memoization:</strong><br>
        First call: expensiveFn(5)<br>
        Second call: expensiveFn(5) [Cached]<br><br>
        
        <strong>Meta Programming:</strong><br>
        - Proxy objects intercept operations<br>
        - Reflect provides meta-operations<br>
        - Symbols for privacy<br>
        </div>
    `;
    
    output.innerHTML = result;
}

// Decorator patterns
const decoratorPatterns = {
    // Function decorator
    functionDecorator: function(fn) {
        return function(...args) {
            console.log(`Called with: ${args}`);
            return fn(...args);
        };
    },
    
    // Class decorator
    classDecorator: function(constructor) {
        return function(...args) {
            console.log(`Creating instance of ${constructor.name}`);
            return new constructor(...args);
        };
    },
    
    // Property decorator
    propertyDecorator: function(target, key, descriptor) {
        return descriptor;
    },
    
    // Validation decorator
    validation: function(fn) {
        return function(...args) {
            if (args.length === 0) throw new Error('No arguments');
            return fn(...args);
        };
    }
};

// Proxy handlers
const proxyHandlers = {
    get: 'Intercept property read',
    set: 'Intercept property write',
    has: 'Intercept in operator',
    deleteProperty: 'Intercept delete',
    ownKeys: 'Intercept Object.keys()',
    getPrototypeOf: 'Intercept prototype access',
    apply: 'Intercept function call'
};

// Reflect methods
const reflectMethods = {
    'Reflect.apply': 'Call function with this and args',
    'Reflect.get': 'Get property value',
    'Reflect.set': 'Set property value',
    'Reflect.has': 'Check property exists',
    'Reflect.deleteProperty': 'Delete property',
    'Reflect.ownKeys': 'Get all property keys'
};

// Symbol usage
const symbolUsage = {
    privateKey: Symbol('private'),
    iterator: Symbol.iterator,
    hasInstance: Symbol.hasInstance
};
