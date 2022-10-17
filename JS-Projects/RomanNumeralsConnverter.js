function convertToRoman(num) {
    const numerals = {1000: 'M', 900: 'CM', 500: 'D', 400: 'CD', 100: 'C', 90: 'XC', 50: 'L', 40: 'XL', 10: 'X', 9: 'IX', 5: 'V', 4: 'IV', 1: 'I'};
    let checkQuotient;
    
    // console.log(checkQuotient);
    // console.log(numerals.I)
    const arr = (num.toString()).split('');
    // console.log(arr);
    const x = [];
    for(let i = 0; i < arr.length; i++){
      x.push(parseInt(arr[i]));
    }
    let checkLength = x.length;
    // console.log(x);
    const romArr = [];
    function single(num){
      // console.log(num);
      if(/[1-3]/.test(num)){
        for(let i = 0; i < num; i++){
          
          romArr.push(numerals[1]);
        }
      }
      else if(num == 4){
        romArr.push(numerals[4]);
      }
      else if(num == 5){
        romArr.push(numerals[5]);
      }
      else if(/[6-8]/.test(num)){
        for(let i = 5; i < num+1; i++){
          // console.log(numerals[i]);
          if(i == 5){
            romArr.push(numerals[5]);
          } else {
            // console.log()
            romArr.push(numerals[1]);
          }
        }
      }
      else if(num == 9){
        romArr.push(numerals[9]);
      }
    }
    function double(num){
      checkQuotient = parseInt(num/10);
      console.log(checkQuotient);
      if(num < 40){
        for(let i = 0; i < checkQuotient; i++){
          romArr.push(numerals[10]);
        }
        // console.log(x[2])
        if(checkLength == 2){
          single(x[1]);
        }
        else if(checkLength == 3){
          single(x[2]);
        }
        else if(checkLength == 4){
          // console.log(x[3])
          single(x[3]);
        }
      }
      else if(num >= 40 && num < 50){
        romArr.push(numerals[40]);
        if(checkLength == 2){
          single(x[1]);
        }
        else if(checkLength == 3){
          // console.log(x[2])
          single(x[2]);
        }
        else if(checkLength == 4){
          single(x[3]);
        }
      }
      else if(num >= 50 && num < 90){
        // console.log(checkQuotient);
        romArr.push(numerals[50]);
        for(let i = 0; i < checkQuotient - 5; i++){
          romArr.push(numerals[10]);
        }
        if(checkLength == 2){
          single(x[1]);
        }
        else if(checkLength == 3){
          single(x[2]);
        }
        else if(checkLength == 4){
          single(x[3]);
        }
      }
      else if(num >= 90 && num < 100){
        // console.log(num)
        romArr.push(numerals[90]);
        if(checkLength == 2){
          single(x[1]);
        }
        else if(checkLength == 3){
          single(x[2]);
        }
        else if(checkLength == 4){
          single(x[3]);
        }
      }
      
    }
    function triple(num) {
        checkQuotient = parseInt(num / 100);
        // console.log(checkQuotient);
        if(checkQuotient == 0){
          double(num);
        } else {
          if(checkQuotient >= 1 && checkQuotient < 4){
          // console.log(checkQuotient)
          for(let i = 0; i < checkQuotient; i++){
            romArr.push(numerals[100]);
          } 
        }
        else if(checkQuotient == 4){
          for(let i = 0; i < checkQuotient-3; i++){
            romArr.push(numerals[400]);
          }
        }
        else if(checkQuotient < 6){
          for(let i = 0; i < checkQuotient-4; i++){
            // console.log('u')
            romArr.push(numerals[500]);
          }
        }
        else if(checkQuotient < 9){
          romArr.push(numerals[500]);
          for(let i = 0; i < checkQuotient-5; i++){
            // console.log('u')
            
            romArr.push(numerals[100]);
          }
        } else if(checkQuotient < 10){
            romArr.push(numerals[900]);
        }  
        }
        if(checkLength == 4 && num > 100){
          for(let i = 0; i < checkQuotient; i++){
            // console.log(checkQuotient);
            double(num - 100*i)
          }
        }
        
        
    }
    function quadruple(num) {
        checkQuotient = parseInt(num / 1000);
        console.log(checkQuotient);
        for(let i = 0; i < checkQuotient; i++){
          romArr.push(numerals[1000]);
        }
    }
    let y = [];
    if(x.length == 1){
      // console.log('j')
      single(num);
    } else if(x.length == 2){
      double(num);
    } else if(x.length == 3){
        if(num < 110){
          triple(num);
          // x.push()
          single(num-100);
        }
        else if(num < 400){
          triple(num);
          console.log(checkQuotient);
          let checkQ = parseInt(num/100);
          for(let i = 1; i < checkQ+1; i++){
            if(i == checkQuotient){
              double(num - 100*i);
            }
          }   
        }
        else if(num < 500){
          triple(num);
          console.log(checkQuotient);
          let checkQ = parseInt(num/100);
          for(let i = 1; i < checkQ+1; i++){
            if(i == checkQuotient){
              double(num - 100*i);
            }
          } 
        }
        else if(num < 900){
          triple(num);
          console.log(checkQuotient);
          let checkQ = parseInt(num/100);
          for(let i = 1; i < checkQ+1; i++){
            if(i == checkQuotient){
              double(num - 100*i);
            }
          } 
        }
        else if(num < 1000){
          triple(num);
          console.log(checkQuotient);
          let checkQ = parseInt(num/100);
          for(let i = 1; i < checkQ+1; i++){
            if(i == checkQuotient){
              double(num - 100*i);
            }
          } 
        }
    } else if(x.length == 4){
        quadruple(num);
        console.log(checkQuotient);
        let checkQ = parseInt(num/1000);
          for(let i = 1; i < checkQ+1; i++){
            if(i == checkQuotient){
              triple(num - 1000*i);
            }
            else if(i == checkQuotient + 1){
              // triple(num - 1000*i);
            }
          }
    } else {
  
    }
    console.log(romArr);
    return romArr.join('');
  }
  console.log(convertToRoman(2014));