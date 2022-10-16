// lots Of Nested Arr Return Arr With Literals.js

function steamrollArray(arr) {
    const a = [];
    for(let i = 0; i < arr.length; i++){
      if(typeof arr[i] !== 'object'){
        a.push(arr[i]);
      } else {
        console.log(arr[i].length);
        if(arr[i].length === undefined){
          a.push(arr[i]);
        }
        for(let j = 0; j < arr[i].length; j++){
          if(typeof arr[i][j] !== 'object'){
            a.push(arr[i][j]);
          } else{
            console.log(arr[i][j].length);
            for(let k = 0; k < arr[i][j].length; k++){
              if(typeof arr[i][j][k] !== 'object'){
                a.push(arr[i][j][k]);
              } else {
                console.log(arr[i][j][k].length);
                for(let l = 0; l < arr[i][j][k].length; l++){
                  if(typeof arr[i][j][k][l] !== 'object'){
                    a.push(arr[i][j][k][l])
                  }
                }
              }
            }
          }
        }
      }
    }
    return a;
  }
  
  // console.log(steamrollArray([1, [2], [3, [[4]]]]));
  console.log(steamrollArray([1, {}, [3, [[4]]]]))