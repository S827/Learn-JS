// LCM
// find lcm of 2 numbers 
function findLCM2(num1, num2){
    if(num1 % num2 == 0 || num2 % num1 == 0){
        if(num1 >  num2){
            return num1;
        } else return num2;
    } else {
        for(let i = 2; i <= num1 * num2; i++){
            for(let j = 2; j <= num1 * num2; j++){
                if(num1 * i == num2 * j){
                    return num1 * i;
                }
            }
        }
    }
}
console.log(findLCM2(4, 6));//12
console.log(findLCM2(5, 10));//10
console.log(findLCM2(3, 7));//21
console.log(findLCM2(6, 15));//30
console.log(findLCM2(18, 31));//558

// find LCM of 3 numbers
function findLCM3(...arr){
    const argsArr = Array.from(arguments);
    const gcd = (a, b) => {
        if(!b) return b === 0 ? a : NaN;
        return gcd2(b, a%b);
    };
    console.log(gcd());
}
findLCM3(2,5,10);
// find LCM of range of numbers
function rangeLCM(arr){
    const [min, max] = arr.sort((a, b) => a - b);
    console.log([min, max]);
    const numOfDivisors = max - min + 1;
    console.log(numOfDivisors);//6
    // Largest possible value for LCM
    let mul = 1;
    for(let i = min; i <= max; i++){
        mul *= i;
    }
    console.log(mul);//151200
    for(let j = max; j <= mul; j += max){
        let divScore = 0;
        for(let k = min; k <= max; k++){
            if(j % k === 0){
                divScore += 1;
            }
        }
        if(divScore === numOfDivisors){
            return j;
        }
    }
}
console.log(rangeLCM([1, 5]));

// 
function lcmCheck(a,b){
    let mul = 1;
    let c = true;
    while(c){
        if(a % 2 == 0){
            a = a/2;
            mul = mul * 2;
        }else if(b % 2 == 0){
            b = b/2;
            mul = mul * 2;
        } else if(a % 3 == 0){
            a = a/3;
            mul = mul * 3;
        }else if(b % 3 == 0){
            b = b/3;
            mul = mul * 3;
        }else {
            c = false;
        }
    }
    return mul;
}
console.log(lcmCheck(4, 6));