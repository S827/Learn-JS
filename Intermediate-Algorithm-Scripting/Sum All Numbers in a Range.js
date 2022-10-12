// Sum All Numbers in a Range
function sumAll(arr) {
    const x = arr[0] + arr[1];
    const y = arr[0] - arr[1];
    // console.log(y)
    let sum = x;
    const z = function(){
      if(y > 0){
        for(let i = arr[1]+1; i < arr[1] + y; i++){
        sum += i;
        }
      } else {
        for(let i = arr[0]+1; i < arr[0] - y; i++){
        sum += i;
        }
      }
      return sum;
    };
    return z();
  }
  
  console.log(sumAll([1, 4]));//10
  console.log(sumAll([5, 10]));//45
  console.log(sumAll([4, 1]));//10
  