//Consider the following ES5 code:
const user = { name: "John Doe", age: 34};
const name2 = user.name;
const age2 = user.age;
console.log(name2 + " " + age2); //John Doe 34
//name would have a value of the string John Doe, and age would have the number 34.

//Here's an equivalent assignment statement using the ES6 destructuring syntax:
const user1 = { name1: "John Doe", age1: 34};
const {name1, age1} = user1;
console.log(name1 + " " + age1); //John Doe 34

//another example:
const HIGH_TEMPERATURES = {
    yesterday: 23,
    today: 36,
    tomorrow: -12
}

const {yesterday, today, tomorrow} = HIGH_TEMPERATURES;
console.log(`Yesterday's temperature: ${yesterday} degree celcius
\ntoday's temperature: ${today} degree celcius
\ntomorrow's temperature: ${tomorrow} degree celcius
`)

/*
Use Destructuring Assignment to Assign Variables from Objects
Destructuring allows you to assign a new variable name when extracting values. You can do this by putting the new name after a colon when assigning the value.

Using the same object from the last example:
*/
const user3 = {name3: "Hon Joe", age3: 12};
const {name3: userName, age3: userAge} = user3;

console.log(`Name is ${userName} and the age is ${userAge}`); //Name is Hon Joe and the age is 12

//Problem:
const HIGH_TEMPERATURES1 = {
    yesterday: 23,
    today: 14,
    tomorrow: 36
};
const {today: highToday1, tomorrow: highTomorrow1} = HIGH_TEMPERATURES1;
console.log(highToday1 + " " + highTomorrow1);


// Use Destructuring Assignment to Assign Variables from Nested Objects

const user4 = {
    johnDoe: {
        age: 32,
        email: 'abc@gmail.com'
    }
};
// extract the values of object properties and assign them to variables with the same name:
const {johnDoe: {age, email}} = user4;
console.log(age + " " + email);
//assign an object properties' values to variables with different names:
const {johnDoe: {age: userAge1, email: userEmail}} = user4;
console.log(userAge1 + " " + userEmail);

// problem:
// assign the variables lowToday and highToday the values of today.low and today.high from the LOCAL_FORECAST object.

const LOCAL_FORECAST1 = {
    yesterday1 : { low1 : 45, high1 : 75},
    today1 : { low1: 23, high1 : 49 },
    tomorrow1: { low1: 12, high1 : 90}
}

const { today1 : { low1, high1 } } = LOCAL_FORECAST1;
console.log(low1 + " " + high1);
const { yesterday1 : {low1:low2, high1: high2}} = LOCAL_FORECAST1;
console.log(low2 + " " + high2);
const { tomorrow1 : { low1: low3, high1: high3}} = LOCAL_FORECAST1;
console.log(low3 + " " + high3);


// Use Destructuring Assignment to Assign Variables from Arrays
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); //cant pick the position of the values with spread operator, which destructuring allows

const [d, e,,, f] = [11, 12, 13, 14, 15, 16]; //returns 11, 12 and 15
console.log(d, e, f)

//some examples:
const x = [1, 2, 3, 4, 5];
const[y, z] = x;
console.log(y, z); //returns 1, 2

// Array destructuring
// Basic variable assignment
const foo = ['a', 'b', 'c'];
const [x1, y1, z1] = foo;
console.log(`x1 is ${x1}, y1 is ${y1} and z1 is ${z1}`); //x1 is a, y1 is b and z1 is c

// Destructuring with more elements than the source
const foo1 = ['one', 'two'];
const [x2, y2, z2, u2, v2] = foo1;
console.log(`x2 is ${x2}, y2 is ${y2}, z2 is ${z2}, u2 is ${u2} and v2 is ${v2}`); //returns x2 is one, y2 is two, z2 is undefined, u2 is undefined and v2 is undefined


// Swapping variables
// Without destructuring assignment, swapping two values requires a temporary variable (or, in some low-level languages, the XOR-swap trick).

let a2 = 1; let b2 = 2;
[a2, b2] = [b2, a2];
console.log(`a2 is ${a2} and b2 is ${b2}`); //returns a2 is 2 and b2 is 1

const arr3 = [1,2,3];
[arr3[0], arr3[2]] = [arr3[2], arr3[0]];
console.log(`arr[0] is ${arr3[0]} and arr[2] is ${arr3[2]}`); //returns arr[0] is 3 and arr[2] is 1

// Parsing an array returned from a function
function f1() {
    return [1, 2, 3, 4];
}

const [a3, b3, c, d1] = f1();  //returns a3 is 1, b3 is 2, c is 3 and d1 is 4
console.log(`a3 is ${a3}, b3 is ${b3}, c is ${c} and d1 is ${d1}`); 

// Ignoring some returned values
const [a4, b4,, d2] = f1(); //returns a4 is 1, b4 is 2 and d2 is 4
console.log(`a4 is ${a4}, b4 is ${b4} and d2 is ${d2}`);  

// can also ignore all returned values:
[,,] = f1();

// Using a binding pattern as the rest property
const [a5, b5, ...{pop, push}] = [1, 2];
console.log(`a5 and b5 is ${a5}, ${b5}`);
console.log(`pop, push is ${pop}, ${push}`);

const [a6, b6, ...[c1, d3]] = [1 ,2, 3, 4];
console.log(a6, b6, c1, d3); // 1 2 3 4

// These binding patterns can even be nested, as long as each rest property is the last in the list.
const [a7, b7, ...[c2, d4, ...[e1, f2]]] = [1, 2, 3, 4, 5, 6]; //returns a7, b7, c2, d4, e1 and f2 is 1, 2, 3, 4, 5 and 6
console.log(`a7, b7, c2, d4, e1 and f2 is ${a7}, ${b7}, ${c2}, ${d4}, ${e1} and ${f2}`);

// Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
// cannot use the rest parameter to catch a subarray that leaves out the last element of the original array
const [a8, b8, ...arr4] = [1, 2, 3, 4, 5, 6, 7];   //result is similar to Array.prototype.slice()
console.log(`a8 and b8 is ${a8}, ${b8}`); //arr4 is sliced out by assigning a8 and b8, and the rest belongs to the arr4.
console.log(`arr4 is ${arr4}`);

/*
Use destructuring assignment with the rest parameter to perform an effective Array.prototype.slice() so that arr is a 
sub-array of the original array source with the first two elements omitted.
*/
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
    const [,, ...arr5] = list;
    return arr5;
}
const arr5 = removeFirstTwo(source);
console.log(`arr5 is ${arr5}`);
console.log(Array.isArray(arr5));
console.log(arr5); // returns [3, 4, 5, 6, 7, 8, 9, 10]

// Object Destructuring
// basic assignment
const user5 = {
    id: 42,
    isVerified: true
};
const { id, isVerified} = user5;
console.log(`id is ${id} and is it verified? ${isVerified}`); //id is 42 and is it verified? true

// Assigning to new variable names
const o = { p: 42, q: true};
const { p: foo2, q: bar} = o;
console.log(`foo2 is ${foo2} and bar is ${bar}`); //foo2 is 42 and bar is true


// Use destructuring assignment within the argument to the function half to send only max and min inside the function.
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
const half = ({max, min}) => (max + min)/2.0; //used destructuring to get the value of max and min only.
console.log(half(stats)); // returns 28.015