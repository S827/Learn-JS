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

// Copy an Array with the Spread Operator
// While slice() allows us to be selective about what elements of an array to copy, among several other useful tasks, 
// ES6's new spread operator allows us to easily copy all of an array's elements, in order, with a simple and highly readable syntax. 
// The spread syntax simply looks like this: ...
let newSimpleArray = [...simpleArray];
console.log(newSimpleArray);
console.log(simpleArray);

function copyMachine(arr, num){
    let newArr = [];
    while(num >= 1){
        let obj = [...arr];
        newArr.push(obj);
        num--;
    }
    //newArr = [...arr];
    return newArr;
}
console.log(copyMachine(['one', 'two', 'three'],2));


// Combine Arrays with the Spread Operator
console.log(simpleArray);
let sentence = ['i', ...simpleArray, 'am', 'done'];//['DarkSalmon', 'BlanchedAlmond', 'three', true, false, undefined, null]
console.log(sentence);//['i', 'DarkSalmon', 'BlanchedAlmond', 'three', true, false, undefined, null, 'am', 'done']


// Check For The Presence of an Element With indexOf()
console.log(simpleArray.indexOf(false)); //4
console.log(simpleArray.indexOf('two')); //-1 two not present in the array

// quickCheck, that takes an array and an element as arguments. 
// Modify the function using indexOf() so that it returns true if the passed element exists on the array, and false if it does not.

function quickCheck(arr, elem) {
    if(arr.indexOf(elem) >= 0){
        return true;
    } else return false;
}
console.log(quickCheck([1,2,3,4],3));//true
console.log(quickCheck([1,2,3,4],0));//false

// Iterate Through All an Array's Items Using For Loops
function greaterThanTen(arr) {
    let newArr = [];
    for(let i=0; i< arr.length; i++){
        if(arr[i] > 10){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(greaterThanTen([2, 12, 8, 14, 80, 0, 1]));//[12, 14, 80]
// sort array with less than ten
function lessThanTen(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 10){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(lessThanTen([2, 12, 8, 14, 80, 0, 1])) //[2, 8, 0, 1]

/*
We have defined a function, filteredArray, which takes arr, a nested array, and elem as arguments, 
and returns a new array. elem represents an element that may or may not be present on one or more 
of the arrays nested within arr. Modify the function, using a for loop, to return a filtered version 
of the passed array such that any array nested within arr containing elem has been removed.
*/
function filteredArray(arr, elem){
    let newArr =[];
    for(let i = 0; i < arr.length; i++){
        if(arr[i].indexOf(elem) == -1){ //checks the elem with array element inside array in array
            continue; //if no match go to the loop 
        } else{ //if matchs
            arr.splice(i,1); //remove the array inside array which has elem
            i--; //decrease i as next i will be 1 and one index is removed, to ensure the new element of the current possition contains elem or not
        }

    }
    newArr = [...arr];
    return newArr;
}
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3)); // []
console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));
console.log(filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 2));
console.log(filteredArray([["amy", "beth", "sam"], ["dave", "sean", "peter"]], "peter"));

