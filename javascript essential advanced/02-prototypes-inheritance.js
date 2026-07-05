/*
  Purpose: Prototypes and Inheritance
  Learn about prototype-based inheritance and the prototype chain
*/

// Function to demonstrate prototypes
function runPrototypes() {
    const output = document.getElementById('output');
    
    // Constructor function
    function Animal(name) {
        this.name = name;
    }
    
    // Add methods to prototype
    Animal.prototype.speak = function() {
        return `${this.name} makes a sound`;
    };
    
    Animal.prototype.move = function() {
        return `${this.name} is moving`;
    };
    
    // Constructor function inheriting from Animal
    function Dog(name, breed) {
        Animal.call(this, name);
        this.breed = breed;
    }
    
    // Set up prototype chain
    Dog.prototype = Object.create(Animal.prototype);
    Dog.prototype.constructor = Dog;
    
    // Override method
    Dog.prototype.speak = function() {
        return `${this.name} barks`;
    };
    
    // Add Dog-specific method
    Dog.prototype.fetch = function() {
        return `${this.name} fetches the ball`;
    };
    
    const dog = new Dog('Buddy', 'Golden Retriever');
    
    // Object.create() pattern
    const personProto = {
        greet: function() {
            return `Hello, I'm ${this.name}`;
        }
    };
    
    const person = Object.create(personProto);
    person.name = 'John';
    
    // Prototype chain inspection
    function checkPrototypeChain() {
        let chain = [];
        let obj = dog;
        
        while (obj) {
            chain.push(obj.constructor.name);
            obj = Object.getPrototypeOf(obj);
        }
        
        return chain;
    }
    
    // Property lookup on prototype
    const hasOwnProperty = dog.hasOwnProperty('name'); // true (own property)
    const hasOwnSpeak = dog.hasOwnProperty('speak'); // false (inherited)
    const hasInSpeak = 'speak' in dog; // true (own or inherited)
    
    let result = `
        <h3>Prototype-Based Inheritance</h3>
        <div class="code">
        <strong>Constructor Function Pattern:</strong><br>
        dog.name = "${dog.name}"<br>
        dog.breed = "${dog.breed}"<br>
        dog.speak() = "${dog.speak()}"<br>
        dog.move() = "${dog.move()}"<br>
        dog.fetch() = "${dog.fetch()}"<br><br>
        
        <strong>Object.create() Pattern:</strong><br>
        person.name = "${person.name}"<br>
        person.greet() = "${person.greet()}"<br><br>
        
        <strong>Prototype Chain for dog:</strong><br>
        ${checkPrototypeChain().join(' → ')}<br><br>
        
        <strong>Property Checking:</strong><br>
        dog.hasOwnProperty('name') = ${hasOwnProperty}<br>
        dog.hasOwnProperty('speak') = ${hasOwnSpeak}<br>
        'speak' in dog = ${hasInSpeak}<br>
        </div>
    `;
    
    output.innerHTML = result;
}

// Prototype patterns
const prototypePatterns = {
    // Constructor function
    constructorFunction: function() {
        function Person(name, age) {
            this.name = name;
            this.age = age;
        }
        
        Person.prototype.getInfo = function() {
            return `${this.name} is ${this.age} years old`;
        };
        
        const person = new Person('Alice', 30);
        return person.getInfo();
    },
    
    // Prototype delegation
    prototypeDelegation: function() {
        const parent = {
            greet: function() {
                return 'Hello from parent';
            }
        };
        
        const child = Object.create(parent);
        child.greet = function() {
            return parent.greet() + ' and child';
        };
    },
    
    // Object.assign for shallow copy
    shallowCopy: function() {
        const original = { a: 1, b: { c: 2 } };
        const copy = Object.assign({}, original);
    },
    
    // Constructor stealing
    constructorStealing: function() {
        function Animal(name) {
            this.name = name;
        }
        
        function Dog(name, breed) {
            Animal.call(this, name); // Call parent constructor
            this.breed = breed;
        }
    },
    
    // Prototype chain
    prototypeChain: function() {
        function GrandParent() {}
        function Parent() {}
        function Child() {}
        
        Parent.prototype = Object.create(GrandParent.prototype);
        Parent.prototype.constructor = Parent;
        
        Child.prototype = Object.create(Parent.prototype);
        Child.prototype.constructor = Child;
    },
    
    // OLOO (Objects Linking to Other Objects)
    oloo: function() {
        const Task = {
            init: function(title) {
                this.title = title;
                return this;
            },
            output: function() {
                console.log(this.title);
            }
        };
        
        const XSSTask = Object.create(Task);
        XSSTask.init('Find XSS');
    }
};

// Prototype methods
const prototypeMethods = {
    objectCreate: 'Creates new object with specified prototype',
    objectGetPrototypeOf: 'Returns prototype of object',
    objectSetPrototypeOf: 'Sets prototype of object',
    prototypeProperty: 'Contains methods shared by instances',
    hasOwnProperty: 'Check if property is own (not inherited)',
    instanceofOperator: 'Check if object instanceof constructor',
    constructorProperty: 'Reference to constructor function'
};
