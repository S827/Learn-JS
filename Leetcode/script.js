// 2442. Count Number of Distinct Integers After Reverse Operations
/**
 * You are given an array nums consisting of positive integers.

You have to take each integer in the array, reverse its digits, and add it to the end of the array. You should apply this operation to the original integers in nums.

Return the number of distinct integers in the final array.

 

Example 1:

Input: nums = [1,13,10,12,31]
Output: 6
Explanation: After including the reverse of each number, the resulting array is 
[1,13,10,12,31,1,31,1,21,13].
The reversed integers that were added to the end of the array are underlined. 
Note that for the integer 10, after reversing it, it becomes 01 which is just 1.
The number of distinct integers in this array is 6 (The numbers 1, 10, 12, 13, 
    21, and 31).
Example 2:

Input: nums = [2,2,2]
Output: 1
Explanation: After including the reverse of each number, the resulting array is 
[2,2,2,2,2,2].
The number of distinct integers in this array is 1 (The number 2).
 */
let arr2 = [2,2,2,2,2,2];   
let arr1 = [1,13,10,12,31];
function uniqueReversedNum(nums){
    let arr = [...nums];
    let nArr = [];
    const y = reverse(arr);
    arr = arr.concat(y);
    for(let i = 0; i < arr.length; i++){
        if(!nArr.includes(arr[i])){
            nArr.push(arr[i]);
        }
    }
    return nArr.length;
}
function reverse(arr){
    let y = [];
    for(let i = 0; i < arr.length; i++){
        const x = parseInt(arr[i]/10);
        let c;
        if(x < 10){
            c = 1;
        }
        else if(x < 100){
            c = 2;
        }
        else if(x < 1000){
            c = 3;
        }
        else if(x < 10000){
            c = 4;
        }
        else if(x < 100000){
            c = 5;
        }else if(x < 1000000){
            c = 6;
        }

        if(x == 0){ //for single digit number
            y.push(arr[i]);
        } else {
            let rem = arr[i];
                
                let d = 0;let n = 0;let sum = 0;let j = c; let quo;
                for(let k = 0; k < c; k++){
                    quo = parseInt(rem / (Math.pow(10, j)));
                    sum += quo * Math.pow(10, d);
                    rem = rem % (Math.pow(10, j));
                    j--;
                    d++;
                }
                const revNum = rem * Math.pow(10, d) + sum;
                y.push(revNum);
        }
        
        
    }
    return y;
}
console.log(uniqueReversedNum(arr1));
// console.log(reverse([1234, 23, 789, 9991, 12394]));