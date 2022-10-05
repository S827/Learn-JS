// ES6 adds some nice support for easily defining object literals.
// ES5 code:
const getMousePosition = (x, y) => ({
    x: x,
    y: y
});

console.log(getMousePosition(2, 3));

// ES6 code:
const getMousePosition1 = (x, y) => ({x, y});
console.log(getMousePosition1(2, 12));


// Write Concise Declarative Functions with ES6

// ES5 code:
const person = {
    name: "Taylor",
    sayHello: function() {
        return `Hello! My name is ${this.name}`;
    }
};
console.log(person.sayHello());

// ES6 code:
const person1 = {
    name: "ETO",
    sayHello(){
        return `Hi! My name is ${this.name}`;
    }
};
console.log(person1.sayHello());

// one more:
const bicycle = {
    gear: 2,
    setGear(newGear){
        this.gear = newGear;
    }
}
bicycle.setGear(4);
console.log(bicycle.gear); //returns 4

// Use class Syntax to Define a Constructor Function

// ES5 code:
var spaceShuttle = function(targetPlanet) {
    this.targetPlanet = targetPlanet;
}
var zeus = new spaceShuttle('Jupiter');
console.log(zeus);

// ES6 code:
// class syntax is just syntax, and not a full-fledged class-based implementation of an object-oriented paradigm
class SpaceShuttle {  
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
}
const shiva = new SpaceShuttle('Mars');
console.log(shiva);

// question: Use the class keyword and write a constructor to create the Vegetable class.

// The Vegetable class allows you to create a vegetable object with a property name that gets passed to the constructor.

class Vegetable {
    constructor(name){
        this.name = name;
    }
}
const spinach = new Vegetable('Spinach');
console.log(spinach);
console.log(typeof spinach); //object