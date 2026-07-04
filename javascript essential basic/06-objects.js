/*
  Purpose: Objects
  Learn about object creation, properties, methods, and manipulation
*/

// Function to demonstrate objects
function runObjectsExample() {
    const output = document.getElementById('objects-output');
    
    // Object literal
    const person = {
        firstName: "John",
        lastName: "Doe",
        age: 30,
        email: "john@example.com",
        address: {
            street: "123 Main St",
            city: "New York",
            zipCode: "10001"
        },
        greet: function() {
            return `Hello, I'm ${this.firstName} ${this.lastName}`;
        }
    };
    
    // Accessing properties
    const name = person.firstName; // or person["firstName"]
    const city = person.address.city; // nested object
    
    // Modifying properties
    person.age = 31;
    person.phone = "555-1234"; // add new property
    
    // Object methods
    const keys = Object.keys(person); // ["firstName", "lastName", "age", ...]
    const values = Object.values(person); // ["John", "Doe", 30, ...]
    const entries = Object.entries(person); // [["firstName", "John"], ...]
    
    // Constructor function
    function Car(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.drive = function() {
            return `${this.brand} ${this.model} is driving`;
        };
    }
    
    const car = new Car("Toyota", "Camry", 2020);
    
    let result = `
        <h3>Object Literal:</h3>
        <div class="code">
        const person = {<br>
        &nbsp;firstName: "John",<br>
        &nbsp;lastName: "Doe",<br>
        &nbsp;age: 30,<br>
        &nbsp;greet: function() { ... }<br>
        }
        </div>
        
        <h3>Accessing Properties:</h3>
        <div class="code">
        person.firstName = "${person.firstName}"<br>
        person["age"] = ${person.age}<br>
        person.address.city = "${person.address.city}"<br>
        person.greet() = "${person.greet()}"<br>
        </div>
        
        <h3>Object Static Methods:</h3>
        <div class="code">
        Object.keys(person) = ${JSON.stringify(keys.slice(0, 4))}...<br>
        Object.values(person) = ${JSON.stringify(values.slice(0, 4))}...<br>
        </div>
        
        <h3>Constructor Function:</h3>
        <div class="code">
        const car = new Car("Toyota", "Camry", 2020)<br>
        car.brand = "${car.brand}"<br>
        car.drive() = "${car.drive()}"
        </div>
    `;
    
    output.innerHTML = result;
}

// Object examples
const objectExamples = {
    // Property shorthand
    createUser: function(name, email) {
        return { name, email }; // same as { name: name, email: email }
    },
    
    // Method shorthand
    userObject: {
        name: "John",
        greet() { // same as greet: function() {}
            return `Hello, ${this.name}`;
        }
    },
    
    // Destructuring
    destructuring: function() {
        const person = { firstName: "John", lastName: "Doe", age: 30 };
        const { firstName, lastName } = person; // extract properties
    },
    
    // Spread operator
    spread: function() {
        const obj1 = { a: 1, b: 2 };
        const obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }
    },
    
    // Object.assign()
    merge: function() {
        const target = {};
        const source = { a: 1, b: 2 };
        Object.assign(target, source); // target = { a: 1, b: 2 }
    },
    
    // Computed property names
    computed: function() {
        const key = "dynamicKey";
        const obj = { [key]: "value" }; // { dynamicKey: "value" }
    }
};
