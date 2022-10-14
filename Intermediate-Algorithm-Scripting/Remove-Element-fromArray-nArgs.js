/**
 * provided with an initial array (the first argument in the destroyer 
 * function), followed by one or more arguments. Remove all elements from 
 * the initial array that are of the same value as these arguments.
 */

// METHOD:1
 function destroyer(arr, args) {
    const y = []
    args = [...arguments].splice(1);//arguments object
    const x = arr.map(function(item){//map arr
      args.map(item1 => {//map item
        if(item === item1){
          y.push(item);//get the arrays which equals to the arguments
        }
      })
    });
    // use the arr and y in diffArray function to return the number which
    // are not equal to y
    return diffArray(arr, y);//using diffArray function from "Diff Two Arrays.js"
  }
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));//[1,1]
  console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));
console.log(destroyer([2, 3, 2, 3], 2, 3));
console.log(destroyer(["tree", "hamburger", 53], "tree", 53));
console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"));


// METHOD: 2
/**
 * store arguments in an array 
 * define empty array
 * loop to arr length
 *    define checker with false variable
 *    loop to args array
 *        check if arr item equals args item
 *            if equals then make checker true
 *    out of loop of args
 *    check if checker is false
 *        if check false then push the arr item to empty array
 */

function destroyer1(arr){
  const argsArr = Object.values(arguments).slice(1);
  const newArr = [];
  for(let i = 0; i < arr.length; i++){
    let check = false;
    for(let j = 0; j < argsArr.length; j++){
      if(arr[i] === argsArr[j]){
        check = true;
      }
    }
    if(!check){ //this will execute only when check is false so !false is true
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(destroyer1([1,2,3,4,5], 2,3,4));//[1, 5]
console.log(destroyer1([1, 2, 3, 5, 1, 2, 3], 2, 3));//[1, 5, 1]
console.log(destroyer1([3, 5, 1, 2, 2], 2, 3, 5));//[1]
console.log(destroyer1([2, 3, 2, 3], 2, 3));//[]
console.log(destroyer1(["tree", "hamburger", 53], "tree", 53));//['hamburger']
console.log(destroyer1(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"));
// [12, 92, 65]


// METHOD:3
/**
 * store args items in an array with Object.from(arguments) method
 * 
 * return the filter array arr and iterate its values
 *    make function which should return the values which are not equal to
 *    args array items, using includes method and return the array
 */
function destroyer2(arr){
  const argsArr = Array.from(arguments).slice(1);
  return arr.filter(function(value){
    return !argsArr.includes(value);//here we want the values which does not include argsArr
  })
}
console.log(destroyer2([1,2,3,4,5], 2,3,4));//[1, 5]

//METHOD: 4
/**
 * return the filter array which does not iclude arguments
 */
function destroyer3(arr, ...args){
  return arr.filter(item => !args.includes(item));
}
console.log(destroyer2([1,2,3,4,5], 2,3,4));//[1, 5]



