/*
  Purpose: Error Handling
  Learn custom errors, try/catch, and error recovery
*/

// Function to demonstrate error handling
function runErrorHandling() {
    const output = document.getElementById('output');
    
    // Custom error class
    class ValidationError extends Error {
        constructor(message) {
            super(message);
            this.name = 'ValidationError';
        }
    }
    
    class NetworkError extends Error {
        constructor(message, statusCode) {
            super(message);
            this.name = 'NetworkError';
            this.statusCode = statusCode;
        }
    }
    
    // Try/Catch example
    function divide(a, b) {
        try {
            if (b === 0) throw new Error('Division by zero');
            return a / b;
        } catch (error) {
            return `Error: ${error.message}`;
        } finally {
            console.log('Division attempt complete');
        }
    }
    
    // Error handling with recovery
    function validateEmail(email) {
        try {
            if (!email.includes('@')) {
                throw new ValidationError('Invalid email format');
            }
            return 'Valid email';
        } catch (error) {
            if (error instanceof ValidationError) {
                return `Validation failed: ${error.message}`;
            }
            throw error;
        }
    }
    
    // Async error handling
    async function fetchData(url) {
        try {
            // Simulated fetch
            throw new NetworkError('Network timeout', 408);
        } catch (error) {
            if (error instanceof NetworkError) {
                return `Network error (${error.statusCode}): ${error.message}`;
            }
            throw error;
        }
    }
    
    // Error chaining
    class AppError extends Error {
        constructor(message, originalError) {
            super(message);
            this.name = 'AppError';
            this.originalError = originalError;
        }
    }
    
    // Safe operation
    function safeOperation() {
        try {
            const result = 10 / 2;
            return `Success: ${result}`;
        } catch (error) {
            return `Operation failed: ${error.message}`;
        } finally {
            console.log('Operation completed');
        }
    }
    
    // Error handling patterns
    const validateForm = (data) => {
        const errors = [];
        if (!data.name) errors.push('Name required');
        if (!data.email) errors.push('Email required');
        if (data.age < 18) errors.push('Must be 18+');
        
        if (errors.length > 0) {
            throw new ValidationError(errors.join(', '));
        }
        return true;
    };
    
    let result = `
        <h3>Error Handling Patterns</h3>
        <div class="code">
        <strong>Try/Catch/Finally:</strong><br>
        divide(10, 2) = ${divide(10, 2)}<br>
        divide(10, 0) = ${divide(10, 0)}<br><br>
        
        <strong>Custom Errors:</strong><br>
        validateEmail("valid@example.com") = ${validateEmail('valid@example.com')}<br>
        validateEmail("invalid-email") = ${validateEmail('invalid-email')}<br><br>
        
        <strong>Error Instanceof Checks:</strong><br>
        Catch specific error types and handle accordingly<br><br>
        
        <strong>Async Error Handling:</strong><br>
        Fetch operations with try/catch in async functions<br><br>
        
        <strong>Safe Operations:</strong><br>
        ${safeOperation()}<br>
        </div>
    `;
    
    output.innerHTML = result;
}

// Error patterns
const errorPatterns = {
    // Custom error class
    customError: class CustomError extends Error {
        constructor(message, code) {
            super(message);
            this.code = code;
        }
    },
    
    // Error wrapping
    wrapError: function(error, context) {
        const wrappedError = new Error(`${context}: ${error.message}`);
        wrappedError.original = error;
        return wrappedError;
    },
    
    // Retry pattern
    retry: async function(fn, maxRetries = 3) {
        for (let i = 0; i < maxRetries; i++) {
            try {
                return await fn();
            } catch (error) {
                if (i === maxRetries - 1) throw error;
                console.log(`Retry ${i + 1}/${maxRetries}`);
            }
        }
    },
    
    // Graceful degradation
    gracefulDegradation: function(primaryFn, fallbackFn) {
        try {
            return primaryFn();
        } catch (error) {
            console.warn('Primary function failed, using fallback');
            return fallbackFn();
        }
    }
};

// Error types
const errorTypes = {
    'Error': 'Generic error',
    'SyntaxError': 'Invalid syntax',
    'TypeError': 'Wrong type',
    'ReferenceError': 'Undefined variable',
    'RangeError': 'Out of range',
    'URIError': 'Invalid URI',
    'Custom': 'User-defined'
};

// Try/Catch best practices
const bestPractices = [
    'Throw specific errors for different conditions',
    'Use instanceof to check error types',
    'Clean up resources in finally block',
    'Provide context in error messages',
    'Log errors for debugging',
    'Handle known errors, let others propagate',
    'Use async/await with try/catch for promises'
];
