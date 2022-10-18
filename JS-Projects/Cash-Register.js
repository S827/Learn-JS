/**
 * Cash Register
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins 
and bills, sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]
 */

function checkCashRegister(price, cash, cid){
    let change = cash - price;
    console.log(change);
    let arr = [...cid];
    let newObj = {};
    let newArr = [];
    let objArr = [];
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i][1];
    }
    caller(change);
    function hundred(change){
        if(arr[8][1] >= change){
            change = parseFloat(arr[8][1] - change).toFixed(2);
            newArr.push(arr[8][0]);
            newArr.push(arr[8][1]);
            objArr.push(newArr);
            newObj.status = 'OPEN';
            newObj.change = objArr;
            if(change != 0){
                caller(change);
            }
        }
        else {
            twenty(change);
        }
    }
    function twenty(change){
        let g = parseInt(change/20);
        console.log(g)
        for(let i = 0; i < g; i++){
            change -= 20;
        }
        change = parseFloat(change).toFixed(2);
        console.log(change);
        newArr.push(arr[7][0]);
        newArr.push(arr[7][1]);
        objArr.push(newArr);        
        if(change == 0){
            newObj.status = 'OPEN';
            newObj.change = objArr;
        } else {
            ten(change);
        }
    }
    function ten(change){
        let g = parseInt(change/10);
        for(let i = 0; i < g; i++){
            change -= 10;
        }
        change = parseFloat(change).toFixed(2);
        newArr.push(arr[6][0]);
        newArr.push(arr[6][1]);
        objArr.push(newArr);        
        if(change == 0){
            newObj.status = 'OPEN';
            newObj.change = objArr;
        } else {
            five(change);
        }
    }
    function five(change){
        let g = parseInt(change/5);
        for(let i = 0; i < g; i++){
            change -= 5;
        }
        change = parseFloat(change).toFixed(2);
        newArr.push(arr[5][0]);
        newArr.push(arr[5][1]);
        objArr.push(newArr);        
        if(change == 0){
            newObj.status = 'OPEN';
            newObj.change = objArr;
        } else {
            one(change);
        }
    }
    function one(change){
        let g = parseInt(change/1);
        for(let i = 0; i < g; i++){
            change -= 1;
        }
        change = parseFloat(change).toFixed(2);
        newArr.push(arr[4][0]);
        newArr.push(arr[4][1]);
        objArr.push(newArr);        
        if(change == 0){
            newObj.status = 'OPEN';
            newObj.change = objArr;
        } else {
            quarter(change);
        }
    }
    function quarter(change){
        let g = parseInt(change/0.25);
        for(let i = 0; i < g; i++){
            change -= 0.25;
        }
        change = parseFloat(change).toFixed(2);
        newArr.push(arr[3][0]);
        newArr.push(arr[3][1]);
        objArr.push(newArr);        
        if(change == 0){
            newObj.status = 'OPEN';
            newObj.change = objArr;
        } else {
            dime(change);
        }
    }
    function dime(change){
        let g = parseInt(change/0.1);
        for(let i = 0; i < g; i++){
            change -= 0.1;
        }
        change = parseFloat(change).toFixed(2);
        newArr.push(arr[2][0]);
        newArr.push(arr[2][1]);
        objArr.push(newArr);        
        if(change == 0){
            newObj.status = 'OPEN';
            newObj.change = objArr;
        } else {
            nickel(change);
        }
    }
    function nickel(change){
        let g = parseInt(change/0.05);
        for(let i = 0; i < g; i++){
            change -= 0.05;
        }
        change = parseFloat(change).toFixed(2);
        newArr.push(arr[1][0]);
        newArr.push(arr[1][1]);
        objArr.push(newArr);        
        if(change == 0){
            newObj.status = 'OPEN';
            newObj.change = objArr;
        } else {
            penny(change);
        }
    }
    function penny(change){
        let g = parseInt(change/0.01);
        for(let i = 0; i < g; i++){
            change -= 0.01;
        }
        change = parseFloat(change).toFixed(2);
        newArr.push(arr[0][0]);
        newArr.push(arr[0][1]);
        objArr.push(newArr);        
        if(change == 0){
            newObj.status = 'OPEN';
            newObj.change = objArr;
        } else {
            objArr.push(newArr);
            newObj.status = 'INSUFFICIENT_FUNDS';
            newObj.change = newArr;
          }
        }
        function caller(change){
            if(change >= 100){
                hundred(change);
            }
            else if(change >= 20){
                twenty(change);
            }
            else if(change >= 10){
                ten(change);
            }
            else if(change >= 5){
                five(change);
            }
            else if(change >= 1){
                one(change);
            }
            else if(change >= 0.25){
                quarter(change);
            }
            else if(change >= 0.1){
                dime(change);
            }
            else if(change >= 0.05){
                nickel(change);
            }
            else if(change >= 0.01){
                penny(change);
            }
        }
    
    console.log(sum);
    return newObj;
}
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))



// /
function checkCashRegister1(price, cash, cid){
    let change = cash - price;
    // console.log(change);
    let arr = [...cid];
    let newObj = {};
    let newArr = [];
    let objArr = [];
    
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i][1];
    }
    caller(change);
    console.log(sum);
    function hundred(change){
        if(arr[8][1] >= change){
            change = parseFloat(arr[8][1] - change).toFixed(2);
            newArr.push(arr[8][0]);
            newArr.push(arr[8][1]);
            objArr.push(newArr);
            newObj.status = 'OPEN';
            newObj.change = objArr;
            if(change != 0){
                caller(change);
            }
        }
        else {
            twenty(change);
        }
    }
    
    function twenty(change){
      
        let g = parseInt(parseInt(arr[7][1])/20);
        console.log(g)
        for(let i = 0; i < 3; i++){
            change -= 20;
        }
        change = parseFloat(change).toFixed(2);
        // console.log(change);
        newArr.push(arr[7][0]);
        newArr.push(20 * g);       
        if(change == 0){
            // objArr.push(newArr);
            newObj.status = 'OPEN';
            newObj.change = objArr;
        } else {
            ten(change);
        }
        // console.log(objArr);
    }
    
    function ten(change){
      // console.log(change)
        let g = parseInt((arr[6][1])/10);
        for(let i = 0; i < g; i++){
            change -= 10;
        }
        change = parseFloat(change).toFixed(2);
        // newArr.length = 0;
        
        newArr.push(arr[6][0]);
        newArr.push(10 * g);
        // console.log(newArr);
        if(change == 0){
            // objArr.push(newArr);
            newObj.status = 'OPEN';
            newObj.change = objArr;
        } else {
            five(change);
        }
    }
    function five(change){
        let g = parseInt(change/5);
        for(let i = 0; i < g; i++){
            change -= 5;
        }
        change = parseFloat(change).toFixed(2);
        // console.log(change);
        newArr.push(arr[5][0]);
        newArr.push(5 * g);       
        if(change == 0){
            // objArr.push(newArr);
            newObj.status = 'OPEN';
            newObj.change = objArr;
        } else {
            one(change);
        }
    }
    function one(change){
        let g = parseInt(change/1);
        for(let i = 0; i < g; i++){
            change -= 1;
        }
        change = parseFloat(change).toFixed(2);
        newArr.push(arr[4][0]);
        newArr.push(g * 1);
        // console.log(newArr)        
        if(change == 0){
            // objArr.push(newArr);
            newObj.status = 'OPEN';
            newObj.change = objArr;
        } else {
            quarter(change);
        }
    }
    function quarter(change){
      if(arr[3][1] < change){
        dime(change);
      } else {
        let g = parseInt(change/0.25);
        for(let i = 0; i < g; i++){
            change -= 0.25;
        }
        change = parseFloat(change).toFixed(2);
        newArr.push(arr[3][0]);
        newArr.push(0.25 * g); 
        console.log(newArr);       
        if(change == 0){
            // objArr.push(newArr);
            newObj.status = 'OPEN';
            newObj.change = objArr;
        } else {
            dime(change);
        }
      }
      // console.log(change);
        
    }
    function dime(change){
      if(arr[2][1] < change){
        nickel(change);
      }else {
        let g = parseInt(change/0.1);
        for(let i = 0; i < g; i++){
            change -= 0.1;
        }
        change = parseFloat(change).toFixed(2);
        newArr.push(arr[2][0]);
        newArr.push(0.1 * g);
        // console.log(newArr);      
        if(change == 0){
            // objArr.push(newArr);
            newObj.status = 'OPEN';
            newObj.change = objArr;
        } else {
            nickel(change);
        }
      }
        
    }
    function nickel(change){
      if(arr[1][1] < change){
        penny(change);
      } else {
        if(change > 0.05){
          let g = parseInt(change/0.05);
        for(let i = 0; i < g; i++){
            change -= 0.05;
        }
        change = parseFloat(change).toFixed(2);
        newArr.push(arr[1][0]);
        newArr.push(0.05 * g);       
        if(change == 0){
            objArr.push(newArr);
            newObj.status = 'OPEN';
            newObj.change = objArr;
        }
        }
         else {
            penny(change);
        }
      }
      // console.log(change);
      
      
    }
    function penny(change){
      if(arr[0][1] < change){
          broke();
      } else {
        let g = parseInt(change/0.01);
        for(let i = 0; i < g; i++){
            change -= 0.01;
        }
        change = parseFloat(change).toFixed(2);
        newArr.push(arr[0][0]);
        newArr.push(0.01 * g);
        // console.log(newArr);        
        if(change == 0){
          console.log()
            // objArr.push(newArr);
            newObj.status = 'OPEN';
            newObj.change = objArr;
        } else {
            objArr.push(newArr);
            newObj.status = 'INSUFFICIENT_FUNDS';
            newObj.change = newArr;
          }
      }
      // console.log(change)
        
        }
        function caller(change){
            if(change >= 100){
                hundred(change);
            }
            else if(change >= 20){
                twenty(change);
            }
            else if(change >= 10){
                ten(change);
            }
            else if(change >= 5){
                five(change);
            }
            else if(change >= 1){
                one(change);
            }
            else if(change >= 0.25){
                quarter(change);
            }
            else if(change >= 0.1){
                dime(change);
            }
            else if(change >= 0.05){
                nickel(change);
            }
            else if(change >= 0.01){
                penny(change);
            }
        }
    
    console.log(newArr.length);
    let b = [];
    for(let i = 0; i < newArr.length + 5; i+=1){
      b = newArr.splice(0,2);
      objArr.push(b);
    }
    let bin = [];
    for(let i = 0; i < objArr.length; i++){
      if(objArr[i].length == 0){
        bin = objArr.splice(i);
      }
    }
    newObj.change = objArr;
    // console.log(objArr);
    if(sum < change){
      newObj.status = 'INSUFFICIENT_FUNDS';
      newObj.change = [];
    }
    if(sum == change){
      newObj.status = "CLOSED";
      newObj.change = [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]
    }
    function broke(){
      newObj.status = 'INSUFFICIENT_FUNDS';
      newObj.change = [];
    }
    // console.log(newObj)
    return newObj;
}

console.log(checkCashRegister1(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log(checkCashRegister1(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
console.log(checkCashRegister1(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
console.log(checkCashRegister1(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
console.log(checkCashRegister1(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
console.log(checkCashRegister1(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
console.log(checkCashRegister1(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))