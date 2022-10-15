// Convert HTML Entities

/**
 * Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string 
 * to their corresponding HTML entities.
 */
// Method 1: (self)
function convertHTML(str) {
    const arr = [];
    const sarr = str.split('');
    for(let i = 0; i < sarr.length; i++){
      if(sarr[i] === ('&')){
        arr.push('&amp;')
        // console.log(arr);
      }else if(sarr[i] === ('<')) {
        arr.push('&lt;');
      }else if(sarr[i] === ('>')) {
        arr.push('&gt;');
      }else if(sarr[i] === ('"')) {
        arr.push('&quot;');
      }else if(sarr[i] === ("'")) {
        arr.push('&apos;');
      }else{
        arr.push(sarr[i]);
      }
    }
    return arr.join('');
  }
  
  console.log(convertHTML("Dolce & Gabba&na"));
  console.log(convertHTML("Hamburgers < Pizza < Tacos"));
  console.log(convertHTML('Stuff in "quotation marks"'));
  console.log(convertHTML("Sixty > twelve"));