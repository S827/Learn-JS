// array-and-function-in-args.js
function dropElements(arr, func) {
    let x;
    for(let i = 0; i < arr.length; i++){
      console.log(func(i));
      if(func(arr[i])){
        x = arr.splice(i);
        console.log(x);
      } else {
        x = [];
      }
    }
    // console.log(x);
    return x;
  }
  
  console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));//[1,2,3]
  console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));//[1, 0, 1]
  console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}));//[3, 9, 2]
  console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));//[3, 4]