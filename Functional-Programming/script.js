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
