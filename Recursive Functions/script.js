        //  write a recursive function that returns an array containing the numbers 1 through n.
        function countUp(n) {
            if(n < 1) {
              return [];
            } else {
              const nArr = countUp(n-1);
              nArr.push(n);
              return nArr;
            }
          }
          console.log(countUp(13));