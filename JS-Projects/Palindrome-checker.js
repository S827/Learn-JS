// chars not allowed: '_', '-','.'
/**
 * Palindrome Checker
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and 
backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces 
    and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR 
among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 
2_A3*3#A2.
 */
function palindrome(str) {
    // console.log(str);
    const y = [];
    const z = [];
    const x = str.toLowerCase().split('');
    // console.log(str);
    for(let i = 0; i < x.length; i++){
      // console.log(x[i]);
        if(/[a-z0-9]/.test(x[i])){
          // console.log(x[i]);
          y.unshift(x[i]);
          z.push(x[i]);
        } 
    }
    // console.log(y);
    // console.log(z);
    let check = false;
    for(let j = 0; j < y.length; j++){
        // console.log(y[j]);
        // console.log(z[j])
      if(y[j] === z[j]){
        
        check = true;
      } else {
        check = false;
        break;
      }
    }
    if(check){
      return true;
    } else return false;
  }
  console.log(palindrome("0_0 (: /-\\\ :) 0-0"));//true
  console.log(palindrome("race car"));//true
  console.log(palindrome("Eye"));//true
  console.log(palindrome("_eye"));//true
  console.log(palindrome("almostomla"));//false
  console.log(palindrome("A man, a plan, a canal. Panama"));//true
  