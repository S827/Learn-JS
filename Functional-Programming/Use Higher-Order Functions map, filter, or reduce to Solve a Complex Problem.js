// Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem
/**
 * Complete the code for the squareList function using any combination of map(), 
 * filter(), and reduce(). The function should return a new array containing the 
 * squares of only the positive integers (decimal numbers are not integers) when 
 * an array of real numbers is passed to it. An example of an array of real numbers 
 * is [-3, 4.8, 5, 3, -3.2].

Note: Your function should not use any kind of for or while loops or the forEach() 
function.
 */
const list1 = [-3, 4.8, 5, 4, 8, -3.2];

const squareList = arr => {
    const positiveIntegerlist = arr.filter(item => Number.isInteger(item) && item > 0);
    const squaredList = positiveIntegerlist.map(item => item * item);
    return squaredList;
}
const newSqauredList = squareList(list1);
console.log(newSqauredList);//[25, 16, 64]
