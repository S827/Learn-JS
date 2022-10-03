//ES6 introduces the spread operator, which allows us to expand arrays and other expressions in places where 
//multiple parameters or elements are expected.

//The ES5 code below uses apply() to compute the maximum value in an array:
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);
console.log(maximus);
//maximus would have a value of 89.

//We had to use Math.max.apply(null, arr) because Math.max(arr) returns NaN. Math.max() expects 
//comma-separated arguments, but not an array. The spread operator makes this syntax much better to read and maintain.

const newArr = [3, 81, 90, 78, 82];
const newMaximus = Math.max(...newArr); //newMaximus would have a value of 90
console.log(newMaximus);

/*
...arr returns an unpacked array. In other words, it spreads the array. However, the spread operator only works in-place, 
like in an argument to a function or in an array literal. The following code will not work:
*/
// const spreaded = ...newArr; throws error 

// Copy all contents of arr1 into another array arr2 using the spread operator.

const arr1 = ['jan', 'feb', 'mar', 'apr', 'may', 'june', 'july'];
let arr2;
arr2 = [...arr1]; //items copied from arr1 to arr2 with the use of spread operator
console.log(arr2);

