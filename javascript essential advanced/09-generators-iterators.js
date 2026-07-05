/*
  Purpose: Generators and Iterators
  Learn generators, iterators, and lazy evaluation
*/

// Function to demonstrate generators
function runGenerators() {
    const output = document.getElementById('output');
    
    // Simple generator
    function* simpleGenerator() {
        yield 1;
        yield 2;
        yield 3;
    }
    
    const gen = simpleGenerator();
    const val1 = gen.next(); // { value: 1, done: false }
    const val2 = gen.next(); // { value: 2, done: false }
    const val3 = gen.next(); // { value: 3, done: false }
    const val4 = gen.next(); // { value: undefined, done: true }
    
    // Generator with for...of
    function* countTo(n) {
        for (let i = 1; i <= n; i++) {
            yield i;
        }
    }
    
    const counted = [];
    for (const num of countTo(5)) {
        counted.push(num);
    }
    
    // Generator with yield*
    function* delegatingGenerator() {
        yield* [1, 2, 3];
        yield* countTo(3);
    }
    
    const delegated = [...delegatingGenerator()];
    
    // Custom iterator
    const iterableObject = {
        data: [10, 20, 30],
        [Symbol.iterator]: function*() {
            for (const item of this.data) {
                yield item;
            }
        }
    };
    
    const iterated = [...iterableObject];
    
    // Generator expression (infinite sequence)
    function* infiniteSequence() {
        let n = 0;
        while (true) {
            yield n++;
        }
    }
    
    // Lazy evaluation
    function* lazyRange(start, end) {
        for (let i = start; i <= end; i++) {
            yield i;
        }
    }
    
    const lazySquares = function*(range) {
        for (const num of range) {
            yield num * num;
        }
    };
    
    const squares = [...lazySquares(lazyRange(1, 5))];
    
    let result = `
        <h3>Generators and Iterators</h3>
        <div class="code">
        <strong>Simple Generator:</strong><br>
        function* simpleGenerator() { yield 1; yield 2; yield 3; }<br>
        gen.next() = ${JSON.stringify(val1)}<br>
        gen.next() = ${JSON.stringify(val2)}<br>
        gen.next() = ${JSON.stringify(val3)}<br>
        gen.next() = ${JSON.stringify(val4)}<br><br>
        
        <strong>Generator with for...of:</strong><br>
        countTo(5) = ${JSON.stringify(counted)}<br><br>
        
        <strong>Yield* (Delegation):</strong><br>
        delegatingGenerator() = ${JSON.stringify(delegated)}<br><br>
        
        <strong>Custom Iterator:</strong><br>
        iterableObject = ${JSON.stringify(iterated)}<br><br>
        
        <strong>Lazy Evaluation:</strong><br>
        lazySquares(lazyRange(1, 5)) = ${JSON.stringify(squares)}<br><br>
        
        <strong>Use Cases:</strong><br>
        - Infinite sequences<br>
        - Lazy evaluation<br>
        - Custom iteration logic<br>
        - Async iteration with async generators<br>
        </div>
    `;
    
    output.innerHTML = result;
}

// Generator patterns
const generatorPatterns = {
    // Generator for unique IDs
    idGenerator: function* () {
        let id = 0;
        while (true) {
            yield ++id;
        }
    },
    
    // Generator for data fetching
    fetchGenerator: function* (urls) {
        for (const url of urls) {
            // Simulate fetch
            yield fetch(url);
        }
    },
    
    // Generator composition
    compose: function* (...generators) {
        for (const gen of generators) {
            yield* gen;
        }
    },
    
    // Generator for filter
    filter: function* (iterable, predicate) {
        for (const item of iterable) {
            if (predicate(item)) {
                yield item;
            }
        }
    },
    
    // Generator for map
    map: function* (iterable, fn) {
        for (const item of iterable) {
            yield fn(item);
        }
    },
    
    // Async generator
    asyncGenerator: async function* () {
        yield await Promise.resolve(1);
        yield await Promise.resolve(2);
        yield await Promise.resolve(3);
    }
};

// Iterator protocol
const iteratorProtocol = {
    '[Symbol.iterator]': 'Returns an iterator object',
    'next()': 'Returns { value, done }',
    'return()': 'Optional - for cleanup',
    'throw()': 'Optional - for error handling'
};

// Built-in iterables
const builtInIterables = {
    'String': 'Iterate over characters',
    'Array': 'Iterate over elements',
    'Map': 'Iterate over entries',
    'Set': 'Iterate over values',
    'TypedArray': 'Iterate over elements',
    'Arguments': 'Iterate over function arguments'
};

// Generator benefits
const generatorBenefits = [
    'Lazy evaluation - compute on demand',
    'Memory efficient - no need to store all values',
    'Infinite sequences - generators never end',
    'Stateful iteration - maintain state between yields',
    'Pausable execution - pause and resume',
    'Clean readable code for complex iteration'
];
