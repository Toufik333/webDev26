/*
  Purpose: ES6 Classes
  Learn about modern class syntax and class-based OOP
*/

// Function to demonstrate classes
function runClasses() {
    const output = document.getElementById('output');
    
    // Basic class
    class Vehicle {
        constructor(brand, model) {
            this.brand = brand;
            this.model = model;
        }
        
        getInfo() {
            return `${this.brand} ${this.model}`;
        }
    }
    
    // Class inheritance
    class Car extends Vehicle {
        constructor(brand, model, doors) {
            super(brand, model);
            this.doors = doors;
        }
        
        getInfo() {
            return `${super.getInfo()} - ${this.doors} doors`;
        }
        
        drive() {
            return `Driving ${this.brand}...`;
        }
    }
    
    const car = new Car('Toyota', 'Camry', 4);
    
    // Static methods and properties
    class MathUtils {
        static PI = 3.14159;
        
        static calculateArea(radius) {
            return this.PI * radius * radius;
        }
        
        static calculateCircumference(radius) {
            return 2 * this.PI * radius;
        }
    }
    
    // Getters and setters
    class Person {
        constructor(firstName, lastName) {
            this._firstName = firstName;
            this._lastName = lastName;
        }
        
        get fullName() {
            return `${this._firstName} ${this._lastName}`;
        }
        
        set fullName(name) {
            const parts = name.split(' ');
            this._firstName = parts[0];
            this._lastName = parts[1];
        }
    }
    
    const person = new Person('John', 'Doe');
    
    // Private fields (ES2022)
    class BankAccount {
        #balance = 0; // Private field
        
        constructor(initialBalance) {
            this.#balance = initialBalance;
        }
        
        deposit(amount) {
            this.#balance += amount;
            return this.#balance;
        }
        
        getBalance() {
            return this.#balance;
        }
    }
    
    const account = new BankAccount(1000);
    
    let result = `
        <h3>ES6 Classes</h3>
        <div class="code">
        <strong>Basic Class Example:</strong><br>
        const car = new Car('Toyota', 'Camry', 4);<br>
        car.brand = "${car.brand}"<br>
        car.getInfo() = "${car.getInfo()}"<br>
        car.drive() = "${car.drive()}"<br><br>
        
        <strong>Static Methods:</strong><br>
        MathUtils.PI = ${MathUtils.PI}<br>
        MathUtils.calculateArea(5) = ${MathUtils.calculateArea(5).toFixed(2)}<br>
        MathUtils.calculateCircumference(5) = ${MathUtils.calculateCircumference(5).toFixed(2)}<br><br>
        
        <strong>Getters and Setters:</strong><br>
        person.fullName = "${person.fullName}"<br>
        person.fullName = "Jane Smith"<br>
        person.fullName = "${person.fullName = 'Jane Smith'; person.fullName}"<br><br>
        
        <strong>Private Fields:</strong><br>
        account.getBalance() = $${account.getBalance()}<br>
        account.deposit(500) = $${account.deposit(500)}<br>
        </div>
    `;
    
    output.innerHTML = result;
}

// Class patterns
const classPatterns = {
    // Abstract class pattern
    abstractClass: class AbstractClass {
        constructor() {
            if (new.target === AbstractClass) {
                throw new TypeError("Cannot instantiate abstract class");
            }
        }
        
        abstractMethod() {
            throw new Error("abstractMethod() must be implemented");
        }
    },
    
    // Mixin pattern
    mixin: {
        canEat: {
            eat() {
                return 'eating...';
            }
        },
        canWalk: {
            walk() {
                return 'walking...';
            }
        },
        applyMixins: function(targetClass, ...mixins) {
            Object.assign(targetClass.prototype, ...mixins);
        }
    },
    
    // Singleton pattern
    singleton: (function() {
        let instance;
        
        class Singleton {
            constructor() {
                if (instance) return instance;
                this.id = Math.random();
                instance = this;
            }
        }
        
        return Singleton;
    })(),
    
    // Factory pattern
    factory: function() {
        class ShapeFactory {
            static createShape(type) {
                switch(type) {
                    case 'circle':
                        return new Circle();
                    case 'square':
                        return new Square();
                    default:
                        return null;
                }
            }
        }
    }
};

// Advanced class features
const classFeatures = {
    constructor: 'Called when new instance is created',
    super: 'Call parent constructor or method',
    extends: 'Inherit from another class',
    static: 'Class method, not instance method',
    getters: 'Computed property accessors',
    setters: 'Computed property mutators',
    privateFields: 'Truly private data with #',
    staticProperties: 'Properties on class itself'
};
