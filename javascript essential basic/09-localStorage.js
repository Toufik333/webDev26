/*
  Purpose: LocalStorage
  Learn about storing and retrieving data in the browser
*/

// Function to save data to localStorage
function saveToStorage() {
    const output = document.getElementById('storage-output');
    
    // Storing different types of data
    localStorage.setItem('username', 'John Doe');
    localStorage.setItem('theme', 'dark');
    localStorage.setItem('visits', '5');
    
    // Storing objects (must convert to JSON)
    const user = {
        name: 'Jane Smith',
        email: 'jane@example.com',
        age: 28
    };
    localStorage.setItem('user', JSON.stringify(user));
    
    // Storing arrays
    const favoriteColors = ['red', 'blue', 'green'];
    localStorage.setItem('colors', JSON.stringify(favoriteColors));
    
    output.innerHTML = `
        <div class="output">
            <strong>✓ Data Saved to LocalStorage:</strong><br>
            username: "John Doe"<br>
            theme: "dark"<br>
            visits: "5"<br>
            user: ${JSON.stringify(user)}<br>
            colors: ${JSON.stringify(favoriteColors)}<br>
        </div>
    `;
}

// Function to retrieve data from localStorage
function retrieveFromStorage() {
    const output = document.getElementById('storage-output');
    
    // Retrieving data
    const username = localStorage.getItem('username');
    const theme = localStorage.getItem('theme');
    const visits = localStorage.getItem('visits');
    
    // Retrieving and parsing objects
    const userString = localStorage.getItem('user');
    const user = userString ? JSON.parse(userString) : null;
    
    // Retrieving and parsing arrays
    const colorsString = localStorage.getItem('colors');
    const colors = colorsString ? JSON.parse(colorsString) : [];
    
    output.innerHTML = `
        <div class="output">
            <strong>✓ Data Retrieved from LocalStorage:</strong><br>
            username: "${username}"<br>
            theme: "${theme}"<br>
            visits: ${visits}<br>
            ${user ? `user.name: "${user.name}"<br>` : ''}
            ${user ? `user.email: "${user.email}"<br>` : ''}
            ${colors.length > 0 ? `colors: ${JSON.stringify(colors)}<br>` : ''}
        </div>
    `;
}

// LocalStorage methods
const localStorageExamples = {
    // Set item
    set: function() {
        localStorage.setItem('key', 'value');
    },
    
    // Get item
    get: function() {
        const value = localStorage.getItem('key');
    },
    
    // Remove item
    remove: function() {
        localStorage.removeItem('key');
    },
    
    // Clear all
    clear: function() {
        localStorage.clear(); // removes everything
    },
    
    // Get key by index
    getKey: function() {
        const key = localStorage.key(0); // first key
    },
    
    // Get length
    getLength: function() {
        const length = localStorage.length;
    }
};

// Session Storage (similar to localStorage but clears on browser close)
const sessionStorageExample = {
    set: function() {
        sessionStorage.setItem('tempData', 'temporary value');
    },
    
    get: function() {
        const data = sessionStorage.getItem('tempData');
    },
    
    clear: function() {
        sessionStorage.clear();
    }
};

// Practical example: counting visits
function trackVisits() {
    let visits = parseInt(localStorage.getItem('visits')) || 0;
    visits++;
    localStorage.setItem('visits', visits);
    
    // Log timestamp of last visit
    const lastVisit = new Date().toLocaleString();
    localStorage.setItem('lastVisit', lastVisit);
}

// Run on page load
window.addEventListener('load', function() {
    trackVisits();
});
