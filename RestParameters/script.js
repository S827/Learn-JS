//The console would display the strings You have passed 3 arguments. and You have passed 4 arguments.
function howMany(...args) {
    return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0,1,2));
console.log(howMany("string", [1,2,3], {}, null));


//The rest parameter eliminates the need to check the args array and allows us to 
//apply map(), filter() and reduce() on the parameters array.

//take any number of arguments and return their sum.
const sum = (...args) => {
    return args.reduce((a,b) => a + b, 0);
}
console.log(sum(1,2,3)); //returns 6