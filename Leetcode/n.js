// console.log(uniqueReversedNum(arr1));

function newReverse(num){
    let newArr = [];
    let y = num.toString().split('');
    let numOfDigit = y.length;
    for(let i = 0; i < y.length; i++){
        newArr.unshift(y[i]);
    }
    let z = newArr.join('');
    let numOfZ = parseInt(z);
    console.log(numOfZ);
}

newReverse(1239234);
function arrReverse(array){
    let reversedArr = [];
    let x1 = [...array];
    for(let i = 0; i < x1.length; i++){
        let newArra = [];
        let y1 = x1[i].toString().split('');
        // console.log(y1);
        for(let j = 0; j < y1.length; j++){
            newArra.unshift(y1[j]);
        }
        let z1 = newArra.join('');
        reversedArr.push(parseInt(z1));
        console.log(z1);
    }
    console.log(reversedArr);
    
}
arrReverse([21, 33, 41, 8912434324, 112]);