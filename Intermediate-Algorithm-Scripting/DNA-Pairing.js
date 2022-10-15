// DNA-Pairing
/**
 * Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the 
 * characters AT and CG, which form building blocks of the DNA double helix.
 * The DNA strand is missing the pairing element. Write a function to match the 
 * missing base pairs for the provided DNA strand. For each character in the provided 
 * string, find the base pair character. Return the results as a 2d array.
 * For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]
 * The character and its pair are paired up in an array, and all the arrays are 
 * grouped into one encapsulating array.
 */
 function pairElement(str) {
    const g = ['G', 'C'];
    const c = ['C', 'G'];
    const t = ['T', 'A'];
    const a = ['A', 'T'];
    const s = str.split('');
    const nArr = [];
    // console.log(sArr);
    for(let i = 0; i < s.length; i++){
      if(s[i] === 'G'){
        nArr.push(g);
      } else if(s[i] === 'C'){
        nArr.push(c);
      } else if(s[i] === 'T'){
        nArr.push(t);
      } else {
        nArr.push(a);
      }
    }
    return nArr;
  }
  
  console.log(pairElement("GCG"));
  console.log(pairElement("ATCGA"));