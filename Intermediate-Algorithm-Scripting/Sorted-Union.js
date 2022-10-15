// Sorted-Union.js
/*Write a function that takes two or more arrays and returns a new array of unique 
values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their 
original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array 
should not be sorted in numerical order.

Check the assertion tests for examples. */
function uniteUnique(arr) {
    const argsArr = Array.from(arguments);
    console.log(argsArr);
    const nArr = [];
    for(let i = 0; i < argsArr.length; i++){
      const x = argsArr[i];
      // console.log(x);
      for(let j = 0; j < x.length; j++){
        if(i === 0 && j === 0){
          nArr.push(x[j]);
          console.log(nArr);
        } else if(!nArr.includes(x[j])){
          nArr.push(x[j]);
          console.log(nArr);
        }
      }
    }
    return nArr;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);