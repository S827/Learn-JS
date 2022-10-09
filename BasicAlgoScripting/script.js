// Convert Celsius to Fahrenheit
/*
The formula to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit 
already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. 
Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit.
*/

function celsiusToFahrenheitCovert(celsius){
    return fahrenheit = (celsius)*9/5 + 32;
}
console.log(celsiusToFahrenheitCovert(35)); //95

// Reverse a String
/*
Reverse the provided string.
You may need to turn the string into an array before you can reverse it.
Your result must be a string.
*/
function reverseString(str){
    let x = str.split('');
    let a = [];
    console.log(x);
    for(let i = 0; i < x.length; i++) {
        let y = x.pop();
        a.push(y);
        i--;
        console.log(y);
        console.log(a);
    }
    str = [...a];
    return str.join('');
}

console.log(reverseString("hello")); //olleh
console.log(reverseString("eto svn"));//nvs ote
console.log(reverseString("i am not in love"));//evol ni ton ma i
console.log(reverseString("Day24 of #100DaysOfCode"));//edoCfOsyaD001# fo 42yaD
console.log(reverseString(`The formula to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit 
already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. 
Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit.`)) 
// returns .tiehnerhaF ot erutarepmet suisleC eht trevnoc pleh ot evoba denoitnem alumrof eht esU
// .erutarepmet suisleC nevig eht ot tnelaviuqe erutarepmet tiehnerhaF eht ti ngissa dna denifed ydaerla
// tiehnerhaf elbairav eht esU .suisleC ni erutarepmet a gnitneserper suislec elbairav a nevig era uoY
// .23 sulp ,5/9 semit suisleC ni erutarepmet eht si tiehnerhaF ot suisleC morf trevnoc ot alumrof ehT


// Factorialize a Number
// 0! = 1, 1! = 1, 2! = 2, 3!= 6, 4! =24, 5! = 120..... 

function factorial(num) {
    if(num === 0 || num === 1) {
        return 1;
    } else {
        for(let i = num; i > 1; i--){
            num *= (i - 1);
        }
        return num;
    }
    
}

console.log(factorial(12));//479001600
console.log(factorial(5));//120
console.log(factorial(8));//40320
console.log(factorial(0));//1
console.log(factorial(1));//1


// Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.
// Your response should be a number.
function findLongestWordLength(str){
    let len = 0;
    let x = str.split(' ');
    for(let i = 0; i < x.length; i++){
        for(let j = i + 1; j < x.length; j++){
            if(x[i].length > x[j].length && (x[i].length > len || x[i].length === len)){
                len = x[i].length;
            } else if(x[i].length < x[j].length && (x[j].length > len || x[j].length === len)) {
                len = x[j].length;
            } else continue;
        }
    }
    return len;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));//6-jumped
console.log(findLongestWordLength("May the force be with you"));//5
console.log(findLongestWordLength("Google do a barrel roll"));//6
console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow"));//8
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));//19


// Return Largest Numbers in Arrays
// Return an array consisting of the largest number from each provided sub-array. 
// For simplicity, the provided array will contain exactly 4 sub-arrays.
function largestOfFour(arr){
    let x = [];
    for(let i = 0; i < arr.length; i++){
        let value = arr[i][0];
        for(let j = 0; j < arr[i].length; j++){
            if(arr[i][j] > value){
                value = arr[i][j];
            } else continue;
            
        }x.push(value); 
    }
    return x;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])); //[5, 27, 39, 1001]
console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));//[27, 5, 39, 1001]
console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));//[9, 35, 97, 1000000]
console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));//[25, 48, 21, -3]


// Confirm the Ending
// Check if a string (first argument, str) ends with the given target string (second argument, target).
function confirmEnding(str, target){
    let len = str.length;
    let ind = len - 1;
    if(str[ind] === target && target.length == 1){
        return true;
    } else if(target.length > 1){
        let y = str.substring(len - target.length);
        if(y === target){
            return true;
        } else return false;
    } else return false;    
}

console.log(confirmEnding("Bastian", "n"));//true
console.log(confirmEnding("Congratulation", "on"));//true
console.log(confirmEnding("Connor", "n"));//false
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));//false
console.log(confirmEnding("He has to give me a new name", "name"));//true
console.log(confirmEnding("Open sesame", "same"));//true
console.log(confirmEnding("Open sesame", "sage"));//false
console.log(confirmEnding("Open sesame", "game"));//false
console.log(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"));//false
console.log(confirmEnding("Abstraction", "action"));//true
// console.log("best".length);
// str = "best";
// let leng = str.length;
// let index = leng -1;
// console.log(leng)
// console.log(str[index]);
let news = "HelloWorld";
let n = news.substring(news.length - 2);
console.log(n);
console.log(news);


// Repeat a String Repeat a String
/*
Repeat a given string str (first argument) for num times (second argument). 
Return an empty string if num is not a positive number. For the purpose of this challenge, 
do not use the built-in .repeat() method.
*/
function repeatStringNumTimes(str, n){
    let x = "";
    if(n <= 0){
        return x;
    } else {
        for(let i = 0; i < n; i++){
            x += str;
        }
        return x;
    }
}

console.log(repeatStringNumTimes("abc", 3));
console.log(repeatStringNumTimes("*", 3));
console.log(repeatStringNumTimes("abc", 4));
console.log(repeatStringNumTimes("abc", 1));
console.log(repeatStringNumTimes("*", 8));
console.log(repeatStringNumTimes("abc", -2));
console.log(repeatStringNumTimes("abc", 0));
console.log(repeatStringNumTimes("yolo", 100));
console.log(repeatStringNumTimes("yes", 10));


// Truncate a String
/*
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
Return the truncated string with a ... ending.
*/
function truncateString(str, n){
    if(n >= str.length){
        return str;
    } else{
        let x = str.slice(0, n);
        return `${x}...`;
    }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));//A-tisket...
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));//Peter Piper...
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));//A-tisket a-tasket A green and yellow basket
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));//A-tisket a-tasket A green and yellow basket
console.log(truncateString("A-", 1));//A...
console.log(truncateString("Absolutely Longer", 2));//Ab...
let bg = "tisket";
let cg = bg.slice(0, 2);
console.log(cg);//ti



// Finders Keepers
/*
Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. 
This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.
*/
function findElement(arr, func){
    let num = 0;
    for(let i = 0; i < arr.length; i++){
        if(func(arr[i])){
            return num = arr[i];
        } else {
            if(i === (arr.length - 1)){
                return undefined;
            } else continue;
        }
    }
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));//2
console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }));//undefined


// Function to test if it is boolean or not
// Check if a value is classified as a boolean primitive. Return true or false.

function checkBool(bool){
    let x = typeof bool;
    if(x === 'boolean'){
        return true;
    } else return false;
}

console.log(checkBool(true));//true
console.log(checkBool(false));//true
console.log(checkBool('hello'));//false
console.log(checkBool([1, 2]));//false
console.log(checkBool({ "a": 1 }));//false
console.log(checkBool(NaN));//false
console.log(checkBool('true'));//false
console.log(checkBool(undefined));//false
console.log(checkBool('%'));//false


// Title Case a Sentence
/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
*/
function titleCase(str){
    str = str.toLowerCase();
    for(let i = 0; i < str.length; i++){
        if(i === 0){
          str = str.charAt(i).toUpperCase() + str.slice(1);
        } else if(str[i] == ' '){
            let j = i + 1;
            str = str.slice(0, i+1) + str.charAt(j).toUpperCase() + str.slice(i+2);
        } else continue;
    }
 
    return str;
}



console.log(titleCase("I'm a little tea pot"));//I'm A Little Tea Pot
console.log(titleCase("sHoRt AnD sToUt"));//Short And Stout
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));//Here Is My Handle Here Is My Spout


let stri = "hello world"
console.log(stri[5]);


// Add Array 1 content to array 2 at specified index and pushing other elements of arr2
// push arr2 content till that position in x array.
// push arr1 coentent in x array
// push arr2 left content in x array

function modifyArray(arr1, arr2, n){
    let y = [];
    for(let i = 0; i < n; i++){
        y.push(arr2[i]);
    }
    for(let j = 0; j < arr1.length; j++){
        y.push(arr1[j]);
    }
    for(let k = n; k < arr2.length; k++){
        y.push(arr2[k]);
    }
    return y;
}

console.log(modifyArray([1,2,3], [4,5,6], 1));//[4, 1, 2, 3, 5, 6]
console.log(modifyArray([1, 2], ["a", "b"], 1));//['a', 1, 2, 'b']
console.log(modifyArray(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));//['head', 'shoulders', 'claw', 'tentacle', 'knees', 'toes']
console.log(modifyArray([1, 2, 3, 4], [], 0));//[1, 2, 3, 4]



// Falsy Bouncer
// remove falsy vallue from array and return array without falsy values
//convert each value to boolean first by Boolean(value) and if it is falsy remove it
function bouncer(arr){
    let x = [...arr];
    for(let i = 0; i < x.length; i++){
        if(Boolean(x[i])){
            continue;
        } else {
            x.splice(i, 1);
            i--;
        }
    }
    arr = [...x];
    return arr;
}
console.log(bouncer([7, "ate", "", false, 9]));//[7, 'ate', 9]
console.log(bouncer([false, null, 0, NaN, undefined, ""]))//[]
console.log(bouncer([null, NaN, 1, 2, undefined]));//[1, 2]



//Where to add element to keep it at sorted position
// array is given and the num is given, need to compare the numbers and find out the position where number fits.
function getIndexToIns(arr, num) {
    let x = 0;
    let c = 0;
    let d = 0;
    arr.sort();
    for(let i = 0; i < arr.length; i++){
      c++;
      if(arr[i] >= num){
        d++;
        if(c === (arr.length)){
          x = arr.length - d;
        }
        
      } else if(d === 0){
         x = arr.length;
      } else {
        continue;
      }
    }
    return x;
  }
  
  console.log(getIndexToIns([40, 60], 50));//1
  console.log(getIndexToIns([10, 20, 30, 40, 50], 35));//3
  console.log(getIndexToIns([10, 20, 30, 40, 50], 30));//2
  console.log(getIndexToIns([5, 3, 20, 3], 5));//2
  console.log(getIndexToIns([2, 5, 10], 15));//3