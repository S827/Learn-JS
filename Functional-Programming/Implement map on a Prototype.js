// Implement map on a Prototype.js
/**
 * Write your own Array.prototype.myMap(), which should behave exactly like 
 * Array.prototype.map(). You should not use the built-in map method. The 
 * Array instance can be accessed in the myMap method using this.
 */
const arr = [12, 24, 48, 96];

Array.prototype.myMap = function(){
    const newArray = [];
    for(let i = 0; i < arr.length; i++){
        newArray.push(arr[i] * 10);
    }
    return newArray;
};
const newArr = arr.myMap(function(item){
    return item * 100;
});
console.log(newArr);//[120, 240, 480, 960]

// return array of even numbers from arr = [12, 24, 48, 96, 21, 82, 17, 23, 91, 90, 18];
const arr1 = [12, 24, 48, 96, 21, 82, 17, 23, 91, 90, 18];

Array.prototype.myMap = function(){
    const newArr = [];
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] % 2 === 0){
            newArr.push(arr1[i]);
        }
    }
    return newArr;
};
const newArray1 = arr1.myMap(function(){});
console.log(newArray1); //[12, 24, 48, 96, 82, 90, 18]

const n = arr1.map(item => item * 100);
console.log(n);