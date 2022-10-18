/**
 * Telephone Number Validator
Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the 
format of a valid US number. The following are examples of valid formats for US 
numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
For this challenge you will be presented with a string such as 800-692-7753 or 
8oo-six427676;laskdjf. Your job is to validate or reject the US phone number 
based on any combination of the formats provided above. The area code is required. 
If the country code is provided, you must confirm that the country code is 1. 
Return true if the string is a valid US phone number; otherwise return false.
 */

function telephoneCheck(str) {
  let check = true;
  let c = 0;
  let d = 0;
  const y = [];
  const x = str.split('');
  // console.log(x);
  for(let i = 0; i < x.length; i++){
    if(x[i] !== ' '){
      y.push((x[i]));
    }
  }
  // console.log(y)
  for(let i = 0; i < y.length; i++){
    const z = y[i].charCodeAt(0);
    // console.log(z);
    if(y.length < 10){
      check = false;
      break;
    }
    // console.log(parseInt(y[i]));
    if(!isNaN(parseInt(y[i]))){
      c += 1;
      // console.log('u')
    }
    // console.log(c)
    
    let j = i + 4;
    if((z < 48 || z > 57) && (z!= 40 && z!= 41 && z != 45)){
      // console.log(z != 40);
      check = false;
      break;
    }
    else if( z >= 48 && z <= 57 && y.length == 11){
      // console.log('u')
      if(y[0] != 1){
        check = false;
        break;
      } else {
        // console.log('u')
        check = true;
      }
    }
    else if(z >= 48 || z <= 57 || z == 40 || z == 41 || z == 45){
      // console.log(z);
      if(z >= 48 && z <= 57){
        // console.log(z);
        continue;
      }
      else if(z == 40){
        // console.log('u');
        if(y[j].charCodeAt(0) != 41){
          // console.log(y[j])
          check = false;
          break;
        } 
      }
      else if(z == 41){
        // console.log(y[i]);
        if(!y.includes('(')){
          // console.log(y[j])
          check = false;
          break;
        } 
      }
      else if(z == 45){
        d += 1;
        // console.log(d);
        if(d == 1){
            if(y.indexOf(y[i]) == y.length-5 || y.indexOf(y[i]) == y.length-9){
              check = true;
            } else{
                check = false;
                break;
            }
        }
        else if(d > 2) {
          check = false;
          break;
        }
        
      }
      
      // console.log(z);
    }
  }
  // console.log(y[0]);
  // console.log(c);
  if(c == 11){
      if(parseInt(y[0]) !== 1){
        check = false;
      }else {
        check = true;
      }
    }
  else if(c == 12){
    check = false;
  }
  // console.log(c)
  // console.log(y) 
    return check;
  }
console.log(telephoneCheck("55 55-55-555-5"));
console.log(telephoneCheck("2 (757) 622-7382"))
console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("1(555)555-5555"));
console.log(telephoneCheck("5555555555"));
console.log(telephoneCheck("1 555)555-5555"));
console.log(telephoneCheck("1 555 555 5555"));