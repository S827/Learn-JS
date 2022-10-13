// Diff Two Arrays
/**
 * Compare two arrays and return a new array with any items only found in 
 * one of the two given arrays, but not both. In other words, return the 
 * symmetric difference of the two arrays.
 * Note: You can return the array with its elements in any order.
 */

 function diffArray(arr1, arr2) {
  const newArr = [];
  for(let i = 0; i < arr1.length; i++){
    if(arr2.length > 0){
      for(let j = 0; j < arr2.length; j++){
        if(arr1[i] === arr2[j]){
          break;
        } else {
            if(j === arr2.length -1){
            newArr.push(arr1[i]);
          }
        }
      }
      } else {
        newArr.push(arr1[i]);
      }
    }

    for(let i = 0; i < arr2.length; i++){
      if(arr1.length > 0){
        for(let j = 0; j < arr1.length; j++){
        if(arr2[i] === arr1[j]){
          break;
        } else {
          if(j === arr1.length -1){
            newArr.push(arr2[i])
          }
        }
      }
      } else {
        newArr.push(arr2[i]);
      }
  }

  
  
  return newArr;
}
console.log(diffArray(["snuffleupagus", "cookie monster", "elmo"],[]));
console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]));
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));