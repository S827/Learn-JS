// missing-letters
/*Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.
*/


function fearNotLetter(str) {
    for(let i = 0; i < str.length; i++){
      let d = str.charCodeAt(0);
      d += i;
      let g = str.charCodeAt(i);
      if(i === 0){
        continue;
      } else if(i > 0 && str.charCodeAt(i) === d){
        if(i === str.length - 1){
          return undefined;
        }
      } else {
        return String.fromCharCode(d);
      }
    }
  }
  
  console.log(fearNotLetter("abce"));
  