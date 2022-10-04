// Create Strings using Template Literals

const person = {
    name: "eto svn",
    age: 31
}

const greeting = `Hello, my name is ${person.name}!  
and I am ${person.age} years old.`// no need to use \n for new lines. variables inside $ and curly braces.
console.log(greeting); /* returns Hello, my name is eto svn!  
and I am 31 years old. */

/*
Use template literal syntax with backticks to create an array of list element (li) strings. 
Each list element's text should be one of the array elements from the failure property on the result object 
and have a class attribute with the value text-warning. 
The makeList function should return the array of list item strings.
*/
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };

  function makeList(arr) {
    const failureItems =[];
    for(let i = 0; i < 3; i++) {
        const x = `<li class="text-warning">${arr[i]}</li>`;
        failureItems.push(x);
    }
    return failureItems;
  }
  const failuresList = makeList(result.failure);
  console.log(failuresList);