// Return a Sorted Array Without Changing the Original Array
/**
 * Use the sort method in the nonMutatingSort function to sort the elements of an 
 * array in ascending order. The function should return a new array, and not mutate 
 * the globalArray variable.
 */
const array5 = [10, 0, 21, 7, -7, 8, -80];

function nonMutatingSort(arr){
    const x = [...arr];
    return x.sort(function(a, b){
        return a - b;
    });
}
console.log(nonMutatingSort(array5));//[-80, -7, 0, 7, 8, 10, 21]
function nonMutatingDSort(arr){
    const x = [...arr];
    return x.sort(function(a, b) {
        return b - a;
    });
}
console.log(nonMutatingDSort(array5));//[21, 10, 8, 7, 0, -7, -80]
