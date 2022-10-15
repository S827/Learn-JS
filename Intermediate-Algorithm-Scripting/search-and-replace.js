// Search and Replace
/**
 * Perform a search and replace on the sentence using the arguments provided and 
 * return the new sentence.
 * First argument is the sentence to perform the search and replace on.
 * Second argument is the word that you will be replacing (before).
 * Third argument is what you will be replacing the second argument with (after).
 * Note: Preserve the case of the first character in the original word when you 
 * are replacing it. For example if you mean to replace the word Book with the 
 * word dog, it should be replaced as Dog
 */
/**
 * convert string to array
 * find the index of before
 * replace at the index of before with after
 */
 function myReplace(str, before, after) {
    
    // function main(){
    //     define();
    //     splitArr(str);
    //     splitArgs(before);
    //     splitArgs(after);
    // }
    // function define(){
    //     const nArr = [];
    // }
    // function splitArgs(args){
    //     args.split('');
    // }
    // function splitArr(arr){
    //     arr.split(' ');
    // }
    // function checkUpperOrLower(args){
        
    // }
    const sArr = str.split(' ');
    
    const b = before.split('');
    const a = after.split('');
    if(b[0] === b[0].toUpperCase()){
      const x = a.splice(1);
      x.unshift(a[0].toUpperCase());
      after = x.join('');
      console.log(after);
    } else if(b[0] === b[0].toLowerCase()){
      const x = a.splice(1);
      x.unshift(a[0].toLowerCase());
      after = x.join('');
    }
    // console.log(sArr);
    const indexOfBefore = sArr.indexOf(before);
    console.log(indexOfBefore);
    sArr.splice(indexOfBefore, 1, after);
    console.log(sArr.join(' '));
  
    return sArr.join(' ');
  }
  
  console.log(myReplace("A quick brown fox jumped over the lazy dog", "Jumped", "leaped"));
//   A quick brown fox leaped over the lazy dog
  console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));