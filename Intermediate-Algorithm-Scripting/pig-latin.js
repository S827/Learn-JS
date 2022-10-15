// Pig Latin
/**
 * Pig Latin is a way of altering English Words. The rules are as follows:
- If a word begins with a consonant, take the first consonant or consonant 
cluster, move it to the end of the word, and add ay to it.
- If a word begins with a vowel, just add way at the end.
Translate the provided string to Pig Latin. Input strings are guaranteed to be 
English words in all lowercase.
 */

// Method1: own
function translatePigLatin(str) {
    const a = str.split('');
    // console.log(a);
    let c = 1;
    let arr = [];
    const fizz = ['a', 'y'];
    const buzz = ['w', 'a', 'y'];
    for(let i = 0; i < a.length; i++){
      // console.log(a[i])
      if(i === 0 && (a[i] == 'a'|| a[i] =='e'|| a[i] == 'i'|| a[i] == 'o'||a[i] == 'u')){
          for(let j = 0; j < buzz.length; j++){
            a.push(buzz[j]);
          }
          return a.join('');
      } else if(a[i] == 'a'|| a[i] =='e'|| a[i] == 'i'|| a[i] == 'o'||a[i] == 'u'){
        // console.log(arr);
        const u = a.splice(i);
        arr = u.concat(arr);
        const f = arr.concat(fizz);
        arr = [...f];
        return arr.join('');
      } else {
        if(i === a.length - 1){
          const b = a.concat(fizz);
          // console.log(b);
          arr = [...b];
          return arr.join('');
        } else {
          arr.push(a[i]);
        }
        
      }
    }  
  }
  console.log(translatePigLatin("rhythm"));
  console.log(translatePigLatin("consonant"));
  console.log(translatePigLatin("glove"));
  console.log(translatePigLatin("algorithm"));
  console.log(translatePigLatin("algorithm"));
  /**
   * rhythmay
   * onsonantcay
   * oveglay
   * algorithmway
   * algorithmway
   */