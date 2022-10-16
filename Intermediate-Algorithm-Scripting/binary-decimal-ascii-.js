// binary-decimal-ascii-.js

function binaryAgent(str) {
    const arr = str.split(' ');
    const nArr = [];
    // console.log(arr);
    console.log(parseInt("01000001", 2));
    for(let i = 0; i < arr.length; i++){
      const a = (parseInt(arr[i], 2));
      nArr.push(String.fromCharCode(a));
    }
    // console.log(nArr);
    return nArr.join('');
  }
  
  console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));