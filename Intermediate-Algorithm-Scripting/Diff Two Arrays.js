// Diff Two Arrays
/**
 * Compare two arrays and return a new array with any items only found in 
 * one of the two given arrays, but not both. In other words, return the 
 * symmetric difference of the two arrays.
 * Note: You can return the array with its elements in any order.
 */
/**
 * check arr1 and arr2 items if it is equal or not
 * store those array items which are not equal to any of the items and return it
 * 
 * Algorithm-1
 * a function diffArray taking 2 parameters arr1 and arr2
  * an empty array newArr
  * loop arr1 items
  *    check arr2 length if it is empty
  *        if not empty, loop arr2 items
  *            if arr1 item is equal to arr2 item
  *                stop the operation and loop arr2 next item
  *            if arr1 item is not equal to arr2 item
  *                check if arr2 item is last, it means arr1 item is not found in arr2
  *                    add arr1 item in the empty array newArr
  *        if arr2 is empty
  *            add arr1 item in the ampty array newArr
  * 
  * repeat the above for arr2 items
  * 
  * return array newArr
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


/**
 * Algorithm-2
 * Merge arr1 and arr2
 * filter the items which are not repeated in the array
 */
// function uniqueItems(arr1, arr2){
//   const newArr = [];
//   const arr = arr1.concat(arr2);
//   console.log(arr);//[1, 2, 4, 5, 1, 2, 3, 4, 5, 6]
//   const fArr = arr.filter(item => arr.indexOf(item) === 0 );
//   console.log(fArr);
//   // newArr = [...fArr];
//   return newArr;
// }
// uniqueItems([1,2,4,5],[1,2,3,4,5,6]);