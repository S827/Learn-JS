/**
 * provided with an initial array (the first argument in the destroyer 
 * function), followed by one or more arguments. Remove all elements from 
 * the initial array that are of the same value as these arguments.
 */


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
