/**
 * Make a function that looks through an array of objects (first argument) and 
 * returns an array of all objects that have matching name and value pairs 
 * (second argument). Each name and value pair of the source object has to be 
 * present in the object from the collection if it is to be included in the 
 * returned array.
 * For example, if the first argument is [{ first: "Romeo", last: "Montague" }, 
 * { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and 
 * the second argument is { last: "Capulet" }, then you must return the third object 
 * from the array (the first argument), because it contains the name and its value, 
 * that was passed on as the second argument.
 */

// Method 1: 
// Method i used
function whatIsInAName(collection, source) {
    const arr = [];
    const arr1 = [];
    // Only change code below this line
    const src = source;
    for(let key in src){
      arr.push(key);
      arr.push(src[key])   
      console.log(key);
    }
    // console.log(arr);
    // console.log(arr);
    for(let key in collection){
      let count = arr.length;
      const x = collection[key];
      if(typeof collection[key] === 'object'){
        for(let key in x){
          // console.log(x[key]);
          // console.log(key);
          if(arr.includes(x[key]) && arr.includes(key)){
            // console.log(x);
            count -= 2;
            if(count === 0){
              arr1.push(x);
            }
          }
        }
      }
    }
  
    // Only change code above this line
    return arr1;
  }
  
  // console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
  console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }))