// Avoid Mutations and Side Effects Using Functional Programming
// global variable can be modified, so does the whole script
// its good idea to pass the input in arguments and get the output where no other variables
// are involved.
const fixedValue = 5; //global variable

function incrementer() { //in this function, no variables, used only arguments is passed
    return fixedValue + 1;
}// with this practice, mutation can be minimised
console.log(incrementer(fixedValue));//6


// Pass Arguments to Avoid External Dependence in a Function
function decrementer(num) { //here no variables are used just argument is passed and input
    return num - 1;
}
console.log(decrementer(10));//9 

