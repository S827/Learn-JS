function curry(f){
    return function(a){
      return function(b){
        return f(a, b);
      }
    }
  }
function addTogether(a, b) {
  const arr = [];
  arr.push(a);
  arr.push(b);
  // console.log(arr);
  if(arr.length == 2){
    if(typeof a === 'number' && typeof b === 'number'){
      return a + b;
    } else {
      return undefined;
    }
  } else if(arr.length == 1){
    addTwo(arr[0]);
  } 
}
let curriedSum = curry(addTogether);
console.log(curriedSum(2)([3]));
console.log(curriedSum(5)(7));
// curriedSum(2, 3);
// console.log(curriedSum(23, 30));
// console.log(curriedSum("https://www.youtube.com/watch?v=dQw4w9WgXcQ"));
// console.log(curriedSum(2, "3"));

// console.log();
// console.log();

function addTogether1(){
    const [a, b] = arguments;
    console.log(arguments);
    if(typeof a !== 'number'){
        return undefined;
    } 
    
    else if(arguments.length === 1){
        function addSec(b){
          if(typeof b !== 'number'){
            return undefined;
          } 
          else {
            return a + b;
          }
          return addSec;
        }
    } else if(typeof b !== 'number'){
      return undefined;
    } else {
      return a + b;
    }
  }
  console.log(addTogether1(1,3));
  console.log(addTogether1(3));