/*
  Purpose: Modules and Imports/Exports
  Learn ES6 modules and module patterns
*/

// Function to demonstrate modules
function runModules() {
    const output = document.getElementById('output');
    
    // Named exports example (conceptual - would be in separate files)
    const mathModule = {
        add: (a, b) => a + b,
        subtract: (a, b) => a - b,
        multiply: (a, b) => a * b,
        divide: (a, b) => b !== 0 ? a / b : 'Error: Division by zero'
    };
    
    // Using exported functions
    const result1 = mathModule.add(10, 5);
    const result2 = mathModule.multiply(4, 3);
    const result3 = mathModule.divide(20, 4);
    
    // CommonJS pattern (require/module.exports)
    // module.exports = { add, subtract };
    // const math = require('./math');
    
    // Default export conceptual
    const defaultExport = {
        name: 'Logger',
        log: (msg) => console.log(`[LOG] ${msg}`),
        error: (msg) => console.error(`[ERROR] ${msg}`)
    };
    
    // Module composition
    const utilsModule = {
        ...mathModule,
        ...defaultExport
    };
    
    // Lazy loading (dynamic imports)
    // import('./module').then(module => { ... });
    
    let result = `
        <h3>Modules and Imports/Exports</h3>
        <div class="code">
        <strong>ES6 Module Syntax:</strong><br>
        // Export<br>
        export { add, multiply };<br>
        export default logger;<br><br>
        
        // Import<br>
        import logger from './logger';<br>
        import { add, multiply } from './math';<br><br>
        
        <strong>Named Exports (Math Module):</strong><br>
        add(10, 5) = ${result1}<br>
        multiply(4, 3) = ${result2}<br>
        divide(20, 4) = ${result3}<br><br>
        
        <strong>Module Composition:</strong><br>
        Combining multiple modules with spread operator<br>
        utilsModule has both math and logging functions<br><br>
        
        <strong>Dynamic Imports:</strong><br>
        import('./module').then(m => { ... })<br>
        Allows lazy loading and conditional imports<br><br>
        
        <strong>CommonJS (Node.js):</strong><br>
        module.exports = { ... }<br>
        const mod = require('./module')<br>
        </div>
    `;
    
    output.innerHTML = result;
}

// Module patterns
const modulePatterns = {
    // Revealing module pattern
    revealingModule: (function() {
        let privateVar = 'private';
        let privateFunc = () => 'private function';
        
        return {
            publicFunc: () => privateVar,
            publicFunc2: () => privateFunc()
        };
    })(),
    
    // Singleton pattern
    singletonModule: (function() {
        let instance;
        
        function createInstance() {
            return {
                id: Math.random()
            };
        }
        
        return {
            getInstance: function() {
                if (!instance) {
                    instance = createInstance();
                }
                return instance;
            }
        };
    })(),
    
    // Namespace pattern
    namespace: {
        utils: {
            string: {
                toUpperCase: (str) => str.toUpperCase()
            },
            array: {
                flatten: (arr) => arr.flat()
            }
        }
    }
};

// Module systems
const moduleSystems = {
    'ES6 Modules': {
        syntax: 'import/export',
        environment: 'Modern browsers, Node.js',
        async: true,
        default: 'One per module'
    },
    'CommonJS': {
        syntax: 'require/module.exports',
        environment: 'Node.js',
        async: false,
        default: 'module.exports'
    },
    'AMD': {
        syntax: 'define/require',
        environment: 'Browser',
        async: true,
        default: 'Anonymous functions'
    },
    'UMD': {
        syntax: 'Universal',
        environment: 'Browser & Node.js',
        async: false,
        default: 'Works everywhere'
    }
};

// Import/Export types
const importExportTypes = {
    'Named Export': 'export { add }; import { add } from "module";',
    'Default Export': 'export default logger; import logger from "module";',
    'Namespace Import': 'import * as math from "module";',
    'Dynamic Import': 'import("module").then(...);',
    'Aggregate Exports': 'export { add } from "other";',
    'Mixed': 'Both default and named exports'
};

// Module benefits
const moduleBenefits = [
    'Encapsulation - hide implementation details',
    'Reusability - use same code in multiple places',
    'Maintainability - easier to debug and update',
    'Dependency management - explicit dependencies',
    'Namespace - avoid global pollution',
    'Testing - easier to mock and test'
];

// Best practices
const bestPractices = [
    'One responsibility per module',
    'Export only public API',
    'Use named exports for named things',
    'Use default export for main export',
    'Avoid circular dependencies',
    'Keep modules focused and small'
];
