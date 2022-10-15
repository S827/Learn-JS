// prime numbers: 2,3,5,7,9, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47....
// should be divisible by 1 and itself
function Prime(num){
    arr = [];
    
    for(let i = 2; i <= num; i++){
        let flag = false;
        for(let j = 2; j <= i/2; j++){
            if(i % j == 0){
                flag = true;
                break;
            }
        }
        if(i > 1 && !flag){
            arr.push(i);
        }
    }
    return arr;
    
    
}
console.log(Prime(20));

// sum of prime number
function sumPrime(num){
    const arr = Prime(num);
    console.log(arr);
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }

    return sum;
}
console.log(sumPrime(10));