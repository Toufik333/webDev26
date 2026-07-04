/*
  Purpose: Async & Promises
  Learn about asynchronous JavaScript, Promises, and async/await
*/

// Function to demonstrate async operations
function runAsyncExample() {
    const output = document.getElementById('async-output');
    
    // Simulate an API call
    const fetchData = new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { id: 1, name: 'John', email: 'john@example.com' };
            resolve(data); // successful
            // reject(new Error('Failed to fetch')); // error
        }, 2000);
    });
    
    // Using .then() and .catch()
    fetchData
        .then(data => {
            output.innerHTML = `
                <div class="output">
                    <strong>✓ Promise Resolved (after 2 seconds):</strong><br>
                    ${JSON.stringify(data, null, 2)}<br><br>
                    <strong>Methods Used:</strong><br>
                    .then() - handles success<br>
                    .catch() - handles error<br>
                    .finally() - runs regardless of result
                </div>
            `;
        })
        .catch(error => {
            output.innerHTML = `<div class="output"><strong>✗ Error:</strong> ${error.message}</div>`;
        });
}

// Promises with .then() and .catch()
const promiseExample1 = () => {
    const promise = new Promise((resolve, reject) => {
        // resolve(value); // success
        // reject(error); // failure
    });
    
    promise
        .then(result => {
            // Handle success
        })
        .catch(error => {
            // Handle error
        })
        .finally(() => {
            // Run regardless of result
        });
};

// Async/Await syntax (modern and cleaner)
async function fetchUserData() {
    try {
        // Simulating API call
        const response = await new Promise((resolve) => {
            setTimeout(() => {
                resolve({ user: 'John', role: 'Admin' });
            }, 1000);
        });
        
        return response;
    } catch (error) {
        console.error('Error:', error);
    }
}

// Promise.all() - wait for all promises
const promiseAll = () => {
    const promise1 = Promise.resolve(3);
    const promise2 = new Promise(resolve => setTimeout(() => resolve('foo'), 100));
    const promise3 = fetch(url).then(r => r.json());
    
    Promise.all([promise1, promise2, promise3])
        .then(values => {
            // [3, 'foo', data]
        });
};

// Promise.race() - return first resolved promise
const promiseRace = () => {
    const promise1 = new Promise(resolve => setTimeout(() => resolve('first'), 500));
    const promise2 = new Promise(resolve => setTimeout(() => resolve('second'), 100));
    
    Promise.race([promise1, promise2])
        .then(value => {
            // 'second' (fastest)
        });
};

// Promise.allSettled() - wait for all to settle
const promiseSettled = () => {
    Promise.allSettled([promise1, promise2])
        .then(results => {
            // [{ status: 'fulfilled', value: ... }, { status: 'rejected', reason: ... }]
        });
};

// Chaining Promises
const chainedPromises = () => {
    fetch('https://api.example.com/user')
        .then(response => response.json())
        .then(data => {
            // Process data
            return data.id;
        })
        .then(id => {
            // Use result from previous then
            return fetch(`https://api.example.com/user/${id}`);
        })
        .catch(error => {
            // Handles any error in the chain
        });
};

// Modern Async/Await example
async function getUser() {
    try {
        const response = await fetch('https://api.example.com/user');
        const data = await response.json();
        
        // Can use data synchronously here
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching user:', error);
    } finally {
        console.log('Request complete');
    }
}

// Async function with multiple awaits
async function fetchMultipleData() {
    try {
        const user = await fetch('api/user').then(r => r.json());
        const posts = await fetch('api/posts').then(r => r.json());
        const comments = await fetch('api/comments').then(r => r.json());
        
        return { user, posts, comments };
    } catch (error) {
        console.error('Error:', error);
    }
}

// Parallel async operations
async function parallelRequests() {
    try {
        // Runs all in parallel (faster)
        const results = await Promise.all([
            fetch('api/data1').then(r => r.json()),
            fetch('api/data2').then(r => r.json()),
            fetch('api/data3').then(r => r.json())
        ]);
        
        return results;
    } catch (error) {
        console.error('Error:', error);
    }
}

// Callback example (old way - avoid)
const callbackExample = () => {
    function fetchData(callback) {
        setTimeout(() => {
            const data = { id: 1, name: 'John' };
            callback(data); // callback hell
        }, 1000);
    }
    
    fetchData((data) => {
        console.log(data);
    });
};

// Async concepts summary
const asyncConcepts = {
    promise: 'Object representing eventual completion of async operation',
    resolve: 'Successfully complete promise with a value',
    reject: 'Failed promise with error reason',
    then: 'Handle successful promise result',
    catch: 'Handle promise error',
    finally: 'Execute code regardless of promise outcome',
    async: 'Keyword to make function return promise',
    await: 'Pause execution until promise settles',
    promiseAll: 'Wait for all promises to resolve',
    promiseRace: 'Return first promise to settle'
};
