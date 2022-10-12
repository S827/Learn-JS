// INPUT -> PROCESS -> OUTPUT
// below is the simple example
// In the code editor, the prepareTea and getTea functions are already 
// defined for you. Call the getTea function to get 40 cups of tea for the team, 
// and store them in the tea4TeamFCC variable.
const prepareTea = () => 'Lemon Tea';
// get the tea
const getTea = (numOfCups) => {
    const teaCups = [];
    // now need to call prepareTea x times, need a loop of x times
    for(let cups = 1; cups < numOfCups; cups++){
        const teaCup = prepareTea();
        teaCups.push(`Person ${cups}: ${teaCup}`);
    }
    return teaCups;
}
//now order tea for 100 people
let order = getTea(100);
console.log(order);

// Understand Functional Programming Terminology
// Now 23 people wants herbal tea and 5 wants lemon tea
// Callbacks are the that are passed into another function to decide the invocation
// of the function
/* 
First class functions:
Functions that can be assigned to a variable, passed into a function or returned from 
a function are first class functions, In js all functions are first class functions.

Higher class functions:
the function that takes functions as argument ore return a function as return value
are higher class functions

lambda:
When functions are passed in to or returned from another function, then those functions
which are passed in or returned can be called lambda.
*/
const prepareGreenTea = () => 'GREEN TEA';
const prepareBlackTea = () => 'BLACK TEA';
const prepareCoffee = () => 'NESCAFE';

const getTeas = (tea, quantity) => {
    const container = [];
    for(let cup = 1; cup <= quantity; cup++){
        const servingTea = tea();
        container.push(servingTea);
    }
    return container;
}
console.log(`${getTeas(prepareGreenTea, 23)}****
${getTeas(prepareBlackTea, 17)}**************
${getTeas(prepareCoffee, 45)}`);
/*returns GREEN TEA,GREEN TEA,GREEN TEA,GREEN TEA,GREEN TEA,GREEN TEA,GREEN TEA,GREEN TEA,GREEN TEA,GREEN TEA,GREEN TEA,GREEN TEA,GREEN TEA,GREEN TEA,GREEN TEA,GREEN TEA,GREEN TEA,GREEN TEA,GREEN TEA,GREEN TEA,GREEN TEA,GREEN TEA,GREEN TEA****
BLACK TEA,BLACK TEA,BLACK TEA,BLACK TEA,BLACK TEA,BLACK TEA,BLACK TEA,BLACK TEA,BLACK TEA,BLACK TEA,BLACK TEA,BLACK TEA,BLACK TEA,BLACK TEA,BLACK TEA,BLACK TEA,BLACK TEA**************
NESCAFE,NESCAFE,NESCAFE,NESCAFE,NESCAFE,NESCAFE,NESCAFE,NESCAFE,NESCAFE,NESCAFE,NESCAFE,NESCAFE,NESCAFE,NESCAFE,NESCAFE,NESCAFE,NESCAFE,NESCAFE,NESCAFE,NESCAFE,NESCAFE,NESCAFE,NESCAFE,NESCAFE,NESCAFE,NESCAFE,NESCAFE,NESCAFE,NESCAFE,NESCAFE,NESCAFE,NESCAFE,NESCAFE,NESCAFE,NESCAFE,NESCAFE,NESCAFE,NESCAFE,NESCAFE,NESCAFE,NESCAFE,NESCAFE,NESCAFE,NESCAFE,NESCAFE */

// Return Part of an Array Using the slice Method
const array = ['never', 'give', 'up', 'bitches','try', 'hard'];
function sliceArray(array, startIndex, endIndex){
    let x = array.slice(startIndex, endIndex);
    return x;
}
const myArr = sliceArray(array, 2, 4);
console.log(myArr);//['up', 'bitches'];
console.log(sliceArray([0,1,2,3,4,5,6,7,8,9,10,11,12,12,13,14,15], 2, 10));
//[2, 3, 4, 5, 6, 7, 8, 9]

// Remove Elements from an Array Using slice Instead of splice
function nonMutating(citiesName){
    const x = citiesName.slice(0, 3);
    return x;
}
let y = nonMutating(array);
console.log(y);//['never', 'give', 'up']
console.log(array);//['never', 'give', 'up', 'bitches', 'try', 'hard']

// Combine Two Arrays Using the concat Method
function nonMutatingConcat(before, after){
    return before.concat(after);
}
const arr11 = [1,2,3,4,5];
const arr2 = [11,12,13,14,15];
console.log(nonMutatingConcat(arr11, arr2));//[1, 2, 3, 4, 5, 11, 12, 13, 14, 15]
console.log(arr11);//[1, 2, 3, 4, 5]
console.log(arr2);//[11,12,13,14,15]

// Add Elements to the End of an Array Using concat Instead of push to ignore mutation
function nonMutatingPush(before, after){
    return before.concat(after);
    // return before.push(after);
}
const l1 = nonMutatingPush(array, arr11);
console.log(l1);//['never', 'give', 'up', 'bitches', 'try', 'hard', 1, 2, 3, 4, 5]


// Split a String into an Array Using the split Method
str = "hello world";
console.log(str.split(' '));//['hello', 'world']
console.log(str.split(/\s/));//['hello', 'world']
str = "hello1world";
console.log(str.split(/\d/));//['hello', 'world']

// Use the split method inside the splitify function to split str into an array of words. 
// The function should return the array
function splitify(str){
    return str.split(/\W/); //arrays separated with any chars but alphanumeric chars
}
console.log(splitify("Hello World,I-am code")); //['Hello', 'World', 'I', 'am', 'code']
console.log(splitify("This.is.a-sentence"));//['This', 'is', 'a', 'sentence']


// Combine an Array into a String Using the join Method
const str12 = "-hello world-no,problem";
const x2 = str12.split(/\W/);//returns array without any symbol chars and spaces
const x3 = x2.join(' ');//returns string separated with spaces
console.log(x3);//hello world no problem

