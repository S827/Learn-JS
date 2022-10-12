// Introduction to Currying and Partial Application
/**
 * arity of a function is number of arguments it requires. 
 * Currying a function means to convert function of N arity into N functions of arity 1
 * takes 1 argument and returns another function that takes next argument
 */
//example:
function unCurried(x, y){
    return x + y;
}

function curried(x){
    return function(y){
        return x + y;
    }
}
const curriedNew = x => y => x + y;
console.log('he');
console.log(curriedNew(1)(2));//3
/**
 * This is useful in your program if you can't supply all the arguments to a function 
 * at one time. You can save each function call into a variable, which will hold the 
 * returned function reference that takes the next argument when it's available. 
 * Here's an example using the curried function in the example above:
 */
const funcForY = curriedNew(1);
console.log(funcForY(20));//21


/**
 * Similarly, partial application can be described as applying a few arguments to a 
 * function at a time and returning another function that is applied to more arguments. Here's an example:
 */
function impartial(x, y, z){
    return x + y + z;
}
const partialFn = impartial.bind(this, 1, 21);

console.log(partialFn(22));//44

// problem:Fill in the body of the add function so it uses currying to add 
// parameters x, y, and z.
function add(x){
    return function(y){
        return function(z){
            return x + y + z;
        }
    }
}
console.log(add(21)(2021)(-2028));//14