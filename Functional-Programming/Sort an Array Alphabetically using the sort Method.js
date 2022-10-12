// Sort an Array Alphabetically using the sort Method
// example: Order in numbers
// ascending order
const arr3 = [3, 5, 1, 0, 9, 3, 2, 7, 3, 9];
function ascendingOrder(arr) {
    return arr.sort(function(a,b){
        return a - b;
    });
}
console.log(ascendingOrder(arr3));//[0, 1, 2, 3, 3, 3, 5, 7, 9, 9]
//  descending order
function descendingOrder(arr){
    return arr.sort(function(a, b){
        return b - a;
    });
}
console.log(descendingOrder(arr3));//[9, 9, 7, 5, 3, 3, 3, 2, 1, 0]

// sorting string literals
// ascending
const arr4 = ['a', 'z', 'b', 'y', 'e', 'b', 'k', 'o', 'l', 'e', 'd', 'w', 'c'];
function aStrOrder(arr){
    return arr.sort(function(a, b){
        return a === b ? 0 : a < b ? -1 : 1;
    });
}
console.log(aStrOrder(arr4));//['a', 'b', 'b', 'c', 'd', 'e', 'e', 'k', 'l', 'o', 'w', 'y', 'z']
// descending
function dStrOrder(arr) {
    return arr.sort(function(a, b){
        return a === b ? 0 : a < b ? 1 : -1;
    });
}
console.log(dStrOrder(arr4));//['z', 'y', 'w', 'o', 'l', 'k', 'e', 'e', 'd', 'c', 'b', 'b', 'a']

