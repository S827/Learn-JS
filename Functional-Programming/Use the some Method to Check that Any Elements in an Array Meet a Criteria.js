// Use the some Method to Check that Any Elements in an Array Meet a Criteria
/**
 * some method works with array and check if any array's element satisfies the condition
 * and return Boolean value true or false
 */
const arrX = ['svn', 'noone', 'etosvn', 'setosvn', 'eto'];
function checkUseOfSome(arr, str){
    const check = arr.some(function(item){
        return item === str;
    });
    return check;
}
console.log(checkUseOfSome(arrX, 'etosvn'));//true
console.log(checkUseOfSome(arrX, 'vn'));//false

// problem: use of some, check if the array has a number which is greater than 70
const arrY = [1, 0, -70, 71];
function checkGreater(arr, num){
    const check = arrY.some(function(item){
        return item > num;
    })
    return check;
}
console.log(checkGreater(arrY, 70));//true
console.log(checkGreater(arrY, 80));//false