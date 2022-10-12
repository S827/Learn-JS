// Implement the filter Method on a Prototype
/**
 * Write your own Array.prototype.myFilter(), which should behave exactly like 
 * Array.prototype.filter(). You should not use the built-in filter method. The 
 * Array instance can be accessed in the myFilter method using this.
 */
const collection = [2,4,6,7,11,23,27,32,39,45,66,88,102,103];

// implement filter on prototype
Array.prototype.myFilter = function(fallback){
    const arr = [];
    for(let i = 0; i < this.length; i++){
        if(this[i] % 2 === 1){
            arr.push(this[i]);
        }
    }
    return arr;
}
const newCollection = collection.myFilter();
console.log(newCollection);//[7, 11, 23, 27, 39, 45, 103]

// return new array of collection with the values should be divisible by 3 and 5.
Array.prototype.newFilter = function() {
    const arr = [];
    for(let i = 0; i < this.length; i++){
        if(this[i] % 3 === 0 && this[i] % 5 === 0){
            arr.push(this[i]);
        }
    }
    return arr;
}
const collectionOf3And5 = collection.newFilter();
console.log(collectionOf3And5); //[45]

