// Use an Array to Store a Collection of Data
let simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray.length);//7

// Access an Array's Contents Using Bracket Notation
simpleArray[2] = "notThree";
console.log(simpleArray); //['one', 2, 'notThree', true, false, undefined, null]

// Add Items to an Array with push() and unshift()
simpleArray.push("last");
simpleArray.unshift("start");
console.log(simpleArray); //['start', 'one', 2, 'notThree', true, false, undefined, null, 'last']

// Remove Items from an Array with pop() and shift()
// Modify the function, using pop() and shift(), to remove the first and last elements of the argument array, 
// and assign the removed elements to their corresponding variables, so that the returned array contains their values
function popShift(arr){
    let popped = arr.pop();
    let shifted = arr.shift();
    return [shifted, popped];
}
console.log(popShift(simpleArray));//['start', 'last']


// Remove Items Using splice()
//splice() can take up to 3 parameters, 1st 2 paramters are integers. 1st is for index, 2nd is for the number of elemebt to be removed
simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray.splice(2,2));// ['three', true]: these are removed elements. splice() not only modifies the array it's being called on, but it also returns a new array containing the value of the removed elements
console.log(simpleArray);//['one', 2, false, undefined, null]

// Add Items Using splice()
// Modify the function using splice() to remove the first two elements of the array and 
// add 'DarkSalmon' and 'BlanchedAlmond' in their respective places.
simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray.splice(0,2, "DarkSalmon", "BlanchedAlmond")); //['one', 2]
console.log(simpleArray);//['DarkSalmon', 'BlanchedAlmond', 'three', true, false, undefined, null]

// Copy Array Items Using slice() 1st index: start point of copy, 2nd para: stop index and excluded,
// slice() returns copied items in a new array and does not modify the actual array
console.log(simpleArray.slice(2,4));//['three', true]
console.log(simpleArray);//['DarkSalmon', 'BlanchedAlmond', 'three', true, false, undefined, null]