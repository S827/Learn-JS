/**
 * Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known 
as a shift cipher. In a shift cipher the meanings of the letters are shifted by 
some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are 
shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a 
decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character 
(i.e. spaces, punctuation), but do pass them on.
 */



function rot13(str) {
    const arr = [];
    const array = [];
    const newArr = [];
    const x = str.split('');
    for(let i = 0; i < x.length; i++){
      const y = x[i].charCodeAt(0);
      
      if((y+13) > 90){
        const d = y + 13 - 90;
        arr.push(64 + d);
      } else if(y == 32){
        arr.push(y);
      } else if(y < 64 || y > 90) {
        arr.push(y);
      } else {
        arr.push(y+13);
      }
    }
    for(let i = 0; i < arr.length; i++){
      newArr.push(String.fromCharCode(arr[i]));
    }
    // console.log();
    return newArr.join('');
  }
  
  console.log(rot13("SERR PBQR PNZC"));
  console.log(rot13("SERR CVMMN!"));
  console.log(rot13("SERR YBIR?"));
  console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));