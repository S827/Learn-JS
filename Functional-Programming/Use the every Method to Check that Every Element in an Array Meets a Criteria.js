// Use the every Method to Check that Every Element in an Array Meets a Criteria
/**
 * every method works with arrays to check if every element passes a particular test
 * returns Boolean true or false
 */
// problem: check if every element in below array is > 10
const arr5 = [11, 15, 1, -19, 12];
const arr6 = [11, 12, 19, 99, 21, 22];
function checkCondition(arr){
    const check = arr.every(function(item){
        return item > 10;
    });
    return check;
}
console.log(checkCondition(arr5));//false
console.log(checkCondition(arr6));//true

// problem: check if array has all etosvn in it
const arr7 = ['etosvn', 'etosvn', 'etosvn', 'etosvn', 'etosvn'];
function checkTheString(arr, str){
    const check = arr7.every(function(item){
        return item === str;
    });
    return check;
}
console.log(checkTheString(arr7, 'etosvn')); //true

// problem: check if all number are positive numbers in the array
const arr8 = [23, 0, 1, 10, 10];
const arr9 = [23, 0, 1, 10, -10];
function checkPositiveInteger(arr){
    const check = arr.every(function(item){
        return item >= 0;
    });
    return check;
}
console.log(checkPositiveInteger(arr8));//true
console.log(checkPositiveInteger(arr9));//false
