
// array of fibonacci numbers
function fibonacci(num){
    const arr = [1, 1];
    for(let i = 2; i <= num; i++){
        arr.push(arr[i-2]+ arr[i-1]);
        // console.log(arr)
    }
    return arr;
}
console.log(fibonacci(10));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7));
//sum of fibonacci numbers
function sumOfFibonacci(num){
    let sum = 0;
    const arr = fibonacci(num);
    console.log(arr);
    const a = arr.map(function(item){
        sum += item;
        return sum;
    });
    return sum;
}
console.log(sumOfFibonacci(10));
console.log(sumOfFibonacci(15));

// sum of even fibbonacci nums
function sumOfEvenFibonacci(num){
    let sum = 0;
    const arr = fibonacci(num);
    // console.log(arr);
    const a = arr.map(function(item) {
        if(item % 2 === 0 && item <= num){
            sum += item;
            return sum;
        }
    });
    // console.log(a);
    return sum;
}
console.log(sumOfEvenFibonacci(10));
console.log(sumOfEvenFibonacci(15));
console.log(sumOfEvenFibonacci(20));
console.log(sumOfEvenFibonacci(34));
// sum of odd fibonacci
function sumOfOddFibonacci(num){
    let sum = 0;
    const arr = fibonacci(num);
    const a = arr.map(function(item){
        if(item % 2 !== 0 && item <= num){
            sum += item;
            return sum;
        } 
    });
    // console.log(a);
    return sum;
}
console.log(sumOfOddFibonacci(10));
console.log(sumOfOddFibonacci(100));
// console.log(sumOfOddFibonacci(4000000));