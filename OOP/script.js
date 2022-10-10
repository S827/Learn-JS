/*
Create a Basic JavaScript Object
*/
let myDog = {
    name: 'Dogya',
    speaks: 'Bhoo Bhoo'
}
console.log(myDog);



// Create a Method on an Object
let duck = {
    name: 'yoyo',
    numLegs: 2,
    sayName: function() {return `Name of this beautiful bird is ${duck.name.toUpperCase()}.`;}
};
console.log(duck.sayName());


// Make Code More Reusable with the this Keyword
// use this in above problem
duck = {
    name: 'yoyo',
    numLegs: 4,
    sayLegs: function() {return `${this.name} has ${this.numLegs} legs.`;}
};
console.log(duck.sayLegs()); // yoyo has 4 legs.




// Define a Constructor Function, a blueprint of object
function Bird() { //constructor function name starts with capital letter, creates new object
    this.name = 'crow'; //variable defined with this keywork
    this.color = 'black';
    this.legs = 2;
}
// console.log(Bird.name);
// Use a Constructor to Create Objects
let myBird = new Bird(); // create a new object called myBird which has all the properties of Bird
console.log(`name of bird is ${myBird.name} and it's ${myBird.color} and and and it has ${myBird.legs} legs.`);//name of bird is crow and it's black and and and it has 2 legs.


// Extend Constructors to Receive Arguments
function Car(name, color){
    this.name = name;
    this.color = color;
    this.make = 'tesla';
}
let firstCar = new Car('827', 'shiny black');
console.log(`${firstCar.name}
${firstCar.color}
${firstCar.make}`);


// Verify an Object's Constructor with instanceof
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  
  // Only change code below this line
  let myHouse = new House(10);
  console.log(myHouse instanceof House);//return true


//   Understand Own Properties
// Add the own properties of canary to the array ownProps.
function Bird(name){
    this.name = name;
    this.numLegs = 2;
    this.no = 1;
}
let canary = new Bird('Tweeter');
let ownProps = [];
for(let prop in canary){
    if(canary.hasOwnProperty(prop)){
        ownProps.push(prop);
    }
}
console.log(ownProps);//['name', 'numLegs', 'no']


// Use Prototype Properties to Reduce Duplicate Code
// in the above constructor Bird add a new property to prototype
Bird.prototype.yes = 1;
console.log(canary.yes);//1


// Iterate Over All Properties
// Add all of the own properties of beagle to the array ownProps. Add all of the prototype properties of Dog to the array prototypeProps.
let ownProp = [];
let protoProp = [];
for(let prop in canary){
    if(canary.hasOwnProperty(prop)){
        ownProp.push(prop);
    } else {
        protoProp.push(prop);
    }
}
console.log(ownProp);//['name', 'numLegs', 'no']
console.log(protoProp);//['yes']


// Understand the Constructor Property
// write a function that takes candidate parameter check if it belongs to the constructor using constructor poroperty
function checkCons(candidate){
    if(candidate.constructor === Bird){
        return true;
    } else return false;
}


// Change the Prototype to a New Object
// by settings lot of prototypes one by one is not a smart process, set prototype 
// to a new object that already contains all the properties
// add property travelled and 2 methods eat and sing
function Birdie(name){
    this.name = name;
    this.numLegs = 2;
    this.no = 1;
}
Birdie.prototype = {
    constructor: Birdie,
    travelled: 123,
    eat: function(){
        console.log('chi chi chi');
    },
    sing: function(){
        console.log('chi chu che cho chi');
    }
}

// Remember to Set the Constructor Property when Changing the Prototype
// while setting the prorotype object, constructor property is overwritten
//  to fix this we need to define contructor property in prototype obejct

// Understand Where an Object’s Prototype Comes From
// isPrototypeOf()
// Use isPrototypeOf to check the prototype of beagle.
let beagle = new Birdie('huha');
let result = Birdie.prototype.isPrototypeOf(beagle);//true
console.log(result);

// Understand the Prototype Chain
// Modify the code to show the correct prototype chain. 
// Object >>> Birdie >>> beagle
result = Birdie.prototype.isPrototypeOf(beagle);//true
resultNew = Object.prototype.isPrototypeOf(Birdie.prototype);//true
console.log(resultNew);//true


// Use Inheritance So You Don't Repeat Yourself
// if method is repeated in 2 objects, create a supertype 
function Birdie(name){
    this.name = name;
    this.numLegs = 2;
    this.no = 1;
}
Birdie.prototype = {
    no: 1,
    // eat: function(){
    //     console.log('hfff');
    // }
}
function Bird(name){
    this.name = name;
    this.numLegs = 2;
    this.no = 1;
}
Bird.prototype = {
    yes: 2,
    // eat: function(){
    //     console.log('hfff');
    // }
}
// here same method is repeated in 2 objects, make a supertype and that method in it and remove where it was
function BirdSpecies(){ }
BirdSpecies.prototype = {
    constructor: BirdSpecies,
    eat: function(){
        console.log('hfff');
    }
}