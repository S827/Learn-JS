// Regular expressions are used in programming languages to match parts of strings. 
// You create patterns to help you do that matching.
/*
If you want to find the word the in the string The dog chased the cat, you could use the following regular expression: /the/.
*/

// JavaScript has multiple ways to use regexes. One way to test a regex is using the .test() method
// The .test() method takes the regex, applies it to a string (which is placed inside the parentheses),
//  and returns true or false

let testStr = "ETo svn";
let testRegEx = /svn/;
let x = testRegEx.test(testStr);
console.log(`It is ${x} that testStr contains testRegEx with the help of test() method`);//It is true that testStr contains testRegEx with the help of test() method


// Match Literal Strings
let testRegEx1 = /Svn/;
let y = testRegEx1.test(testStr);
console.log(`It will return ${y} when trying to match with different literals, uppercase or lowercase`);//returns It will return false when trying to match with different literals, uppercase or lowercase


// Match a Literal String with Different Possibilities
// can search for multiple expresions, like /a|b/; here it will look for a or b and returns true if any one of them is available in the string
// for 2+ ex, /a|b|c|d/
// Problem:
// check if dog, cat, bird or fish is matching with the string "James has a pet cat."

let str = "James has a pet cat.";
let regStr = /dog|cat|bird|fish/;
let z = regStr.test(str);
console.log(`It is ${z} that string has sog or cat or bird or fish`); //returns It is true that string has sog or cat or bird or fish

// Ignore Case While Matching
// add i to ignore lower or uppercase matching, eg, testRegEx = /happy/i
// problem, above str has James with caps J, need to check the matching with lowercase name.
let regStr1 = /james/i;
let a = regStr1.test(str);
console.log(`It is ${a} that with regex case can be ingored`); //returns It is true that with regex case can be ingored

// Extract Matches
// can also extract the actual matches you found with the .match() method.
// To use the .match() method, apply the method on a string and pass in the regex inside the parentheses.
// example:
"Hello, World".match(/Hello/);
let ourStr = "Seven Dumb People";
let ourRegEx = /Seven/;
let b = ourStr.match(ourRegEx);
console.log(`The matching string is ${b} `); // returns The matching string is Seven 
console.log(typeof b); //returns object

// Find More Than the First Match
// so far we have been able to extract or search a pattern once, but with g flag, we can get exact number of matched strings.
// example:
let str1 = "mary mary mary come here";
let regExstr = /mary/g;
let c = str1.match(regExstr);
console.log(`c is ${c}`); //returns c is mary,mary,mary, because we use g flag.

// another example:
let str2 = "mary Mary maRy dont come";
let regExstr1 = /mary/ig;
let d = str2.match(regExstr1);
console.log(`d is ${d}`);  // returns d is mary,Mary,maRy, because we used gi/ig flag to ingore the case and look for each occurrences.
console.log(typeof d);

// Match Anything with Wildcard Period '.'
// suppose the string has pona, poni, pono, ponu etc, we can use regex to be /pon./ it will return true for all the strings which has pon character.
// example: 
let str3 = "it is fun";
let str4 = "let's run";
let str5 = "where is my gu?";
let regExWildCard = /.un/;
let e = regExWildCard.test(str3);
let f = regExWildCard.test(str4);
let g = regExWildCard.test(str5)
console.log(`e is ${e}, f is ${f} and g is ${g}`); //returns e is true, f is true and g is false

// Match Single Character with Multiple Possibilities
// can search for a literal pattern with some flexibility with character classes
// Character classes allow you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets.
// For example, you want to match bag, big, and bug but not bog. You can create the regex /b[aiu]g/ to do this. 
// The [aiu] is the character class that will only match the characters a, i, or u.

// example:
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";//dont want to match bog, so in regex, o not included in the classes with [iau]
let bgRegEx = /b[iau]g/; 
a = bigStr.match(bgRegEx);
b = bagStr.match(bgRegEx);
c = bugStr.match(bgRegEx);
d = bogStr.match(bgRegEx);
console.log(`a is ${a}, b is ${b}, c is ${c} and d is ${d}`); //returns a is big, b is bag, c is bug and d is null

//problem: Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to find all the vowels in the string quoteSample.
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let quoteRegEx = /[aeiou]/ig; // here ig inlcuded, because all the vowels are wanted irrespective of the case
let result = quoteSample.match(quoteRegEx);
console.log(`the matching result is: ${result}`); //returns the matching result is: e,a,e,o,u,i,e,a,o,e,o,e,I,a,e,o,o,e,i,o,e,o,i,e,i

// Match Letters of the Alphabet
// Inside a character set, you can define a range of characters to match using a hyphen character: -.
// example: match lowercase letters a through e you would use [a-e]
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let rangeRegEx = /[a-e]at/;
result1 = catStr.match(rangeRegEx);
result2 = batStr.match(rangeRegEx);
result3= matStr.match(rangeRegEx);

console.log(`result1 is ${result1}, result2 is ${result2} and result3 is ${result3}`);// returns result1 is cat, result2 is bat and result3 is null

// Problem: Match all the letters in the string quoteSample.
quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphaRegEx = /[a-z]/ig;
result = quoteSample.match(alphaRegEx);
console.log(`result is: ${result}`);// returns result is: T,h,e,q,u,i,c,k,b,r,o,w,n,f,o,x,j,u,m,p,s,o,v,e,r,t,h,e,l,a,z,y,d,o,g

// Match Numbers and Letters of the Alphabet
// can be done with hyphen -, eg- [a-z0-9]
//example: 
let jennyStr = "Jenny8743283";
let jennyRegEx = /[a-z0-9]/ig;
result = jennyStr.match(jennyRegEx);
console.log(`result is ${result}`); // returns result is J,e,n,n,y,8,7,4,3,2,8,3

// problem: Create a single regex that matches a range of letters between h and s, 
// and a range of numbers between 2 and 6. Remember to include the appropriate flags in the regex.
quoteSample = "Blueberry 3.141592653s are delicious.";
regExstr = /[h-s2-6]/ig;
result = quoteSample.match(regExstr);
console.log(`result is ${result}`); //returns result is l,r,r,3,4,5,2,6,5,3,s,r,l,i,i,o,s

// Match Single Characters Not Specified
// we will use caret character ^ followed by the characters which we want to exclude, eg: regEx = /[^a-e3-9]/ig
// example: we want all the characters excluding vowels
let vRegEx = /[^aeiou]/ig;
result = quoteSample.match(vRegEx);
console.log(`result is ${result}`); // returns result is B,l,b,r,r,y, ,3,.,1,4,1,5,9,2,6,5,3,s, ,r, ,d,l,c,s,.

//problem: Create a single regex that matches all characters that are not a number or a vowel. Remember to include the appropriate flags in the regex.
let vnRegEx = /[^aeiou0-9]/ig;
result = quoteSample.match(vnRegEx);
console.log(`result is ${result}`);//returns result is B,l,b,r,r,y, ,.,s, ,r, ,d,l,c,s,.

// Match Characters that Occur One or More Times
// with + we can do that, For example, /a+/g would find one match in abc and return ["a"]. 
// Because of the +, it would also find a single match in aabc and return ["aa"].
// abab, will return ["a", "a"], bcd null
// problem: find matches when the letter s occurs one or more times in Mississippi. Write a regex that uses the + sign.
let pStr = "Mississippi";
let pRegEx = /[s+]/ig;
result = pStr.match(pRegEx);
console.log(`result is ${result}`);// returns result is ['ss','ss']

// Match Characters that Occur Zero or More Times
// with asterisk * character, can find matches that occurs 0 or n times.
//examples:
let scoreWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let nPhr = "titanic";
let nRegEx = /t[a-z]*i/; //returns titani
let zRegEx = /go*/;
result1 = scoreWord.match(zRegEx);
result2 = gPhrase.match(zRegEx);
result3 = oPhrase.match(zRegEx);
result4 = nPhr.match(nRegEx);

console.log(`result is ${result1}, ${result2} and ${result3}, ${result4}`); //returns result is goooooooo, g and null

//Problem: Create a regex chewieRegex that uses the * character to match an uppercase A character immediately followed 
// by zero or more lowercase a characters in chewieQuote
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let cRegEx = /Aa*/;
result = chewieQuote.match(cRegEx);
console.log(`result is ${result}`); //returns result is Aaaaaaaaaaaaaaaa


// Find Characters with Lazy Matching
// apply the regex /t[a-z]*i/ to the string "titanic". This regex is basically a pattern that starts with t, 
// ends with i, and has some letters in between
nPhr = "titanic";
let lRegEx = /t[a-z]*i/;
result = nPhr.match(lRegEx);
console.log(`result is ${result}`); //result is titani, it's a greedy match, longest possible
//with lazy match, we can short it. ?
let lazyRegEx = /t[a-z]*?i/;
result = nPhr.match(lazyRegEx);
console.log(`result is ${result}`); //returns result is ti

//problem: Fix the regex /<.*>/ to return the HTML tag <h1> and not the text "<h1>Winter is coming</h1>". 
// Remember the wildcard . in a regular expression matches any character.
let text = "<h1>Winter is coming</h1>";
let myRegEx = /<.*?>/; // with /<.*>/ returns whole text "<h1>Winter is coming</h1>"
result = text.match(myRegEx);
console.log(`result is ${result}`); //result is <h1>

// Find One or More Criminals in a Hunt
// Write a greedy regex that finds one or more criminals within a group of other people. 
// A criminal is represented by the capital letter C.
let tStr = "P1P5P4CCCcP2P6P3";
let tRegEx = /C+/g; //one or more: use +, capital C: use g
result = tStr.match(tRegEx);
console.log(`result is ${result}`); //returns result is CCC

// Match Beginning String Patterns
// caret character (^) inside a character set to create a negated character set in the form [^thingsThatWillNotBeMatched]. 
// Outside of a character set, the caret is used to search for patterns at the beginning of strings.
// example: 
let fstr = "Ricky is first and can be found.";
let fRegEx = /^Ricky/;
result = fRegEx.test(fstr);
console.log(`result is ${result}`); //result is true

let sStr = "You can't find Ricky now.";
result = fRegEx.test(sStr);
console.log(`result is ${result}`); // result is false because caret character is used to search the patterns at the beginning of the strings and here Ricky is not at the beginning.

// Match Ending String Patterns
// ^char is used to search pattern at beginning, and char$ is used to search pattern at the end.
// example:
let theEnding = "This is a never ending story";
let storyRegEx = /story$/;
result = storyRegEx.test(theEnding);
console.log(`result is ${result}`); //returns result is true

let noEnding = "This is a story that is not in the end";
result = storyRegEx.test(noEnding);
console.log(`result is ${result}`); //returns result is false

// Problem : Use the anchor character ($) to match the string caboose at the end of the string caboose.
let nStr = "The last car on a train is the caboose";
let cRegExs = /caboose$/;  //end : need to use $
result = cRegExs.test(nStr);
console.log(`result is ${result}`); // returns result is true


// Match All Letters and Numbers
// to search for a-z, A-Z, 0-9 and _ we have a shortcut which is "\w", we can say [a-zA-Z0-9] ~ \w

// problem: Use the shorthand character class \w to count the number of alphanumeric characters in various quotes and strings.
quoteSample = "The five boxing wizards jump quickly.";
let wRegEx = /\w/g; // we use \w to search a-z, A-Z, 0-9, _, and g : global flag
result = quoteSample.match(wRegEx);
console.log(`result is ${result}`); // returns result is T,h,e,f,i,v,e,b,o,x,i,n,g,w,i,z,a,r,d,s,j,u,m,p,q,u,i,c,k,l,y
result = result.length;
console.log(`length is ${result}`); //reutrns length is 31


// Match Everything But Letters and Numbers
// when we dont want alphanumeric chars, we have a shorthand of \W, similar to [^A-Za-z0-9_]
// example: Use the shorthand character class \W to count the number of non-alphanumeric characters in various quotes and strings.
let nRegEXe = /\W/g;
result = quoteSample.match(nRegEXe);
console.log(`result is ${result}`); //returns result is  , , , , ,.
result = result.length;
console.log(`length is ${result}`); //returns length is 6


// Match All Numbers
// we cna search for alphanumeric, now we want to search only digital pattern which is [0-9], shorthand is "\d"
//pronlem: Use the shorthand character class \d to count how many digits are in movie titles. Written out numbers ("six" instead of 6) do not count.
let str6 = "hey You 1 guy is going to buy 123 beers and 23 smokes";
let numRegEx = /\d/g;
result = str6.match(numRegEx);
console.log(`result is ${result}`); //returns result is 1,1,2,3,2,3
result = result.length;
console.log(`result s ${result}`); //returns result is 6


// Match All Non-Numbers
// to search for non-numbers we can do this by "\D" similar to [^0-9]
// problem: Use the shorthand character class for non-digits \D to count how many non-digits are in movie titles.
let stre = "2001: A Space Odyssey";
let nonRegEx = /\D/g;
result = stre.match(nonRegEx);
console.log(`result is ${result}`); //returns result is :, ,A, ,S,p,a,c,e, ,O,d,y,s,s,e,y
result = result.length;
console.log(`result is ${result}`); //reutrns result is 17

// problems:

let pString = "Oceans11";
RegEx = /\w*/;
console.log(pString.match(RegEx));

// number at end only
let numStr = "123phob";
let numStr1 = "pho12b123";
let numStr2 = "phob123";
let reg = /[a-z][^0-9][a-z]/;
console.log(numStr.match(reg));
console.log(reg.test(numStr));
console.log(numStr1.match(reg));
console.log(reg.test(numStr1));
console.log(numStr2.match(reg));
console.log(reg.test(numStr2));


// numbers allowed only at the end and no numbers in front and in between the chars.
let numStr4 = "BadUs3rnam12";
let reg1 = /\w/ig;
console.log(reg1.test(numStr4));
console.log(numStr4.match(reg1));

// Match Whitespace
// with \s we can match whitespaces .This pattern not only matches whitespace, but also carriage return, tab, form feed, and new line characters.
//  \s similar to [ \r\t\f\n\v]
// problem:
x = "whitespace whitepace, whitespace   whi\ntespace";
regex = /\s/g;
console.log(x.match(regex)); //reutrns [' ', ' ', ' ', ' ', ' ', '\n']
console.log(regex.test(x));
console.log(`result is ${regex.test(y)}`); //reutrns false
// Match Non-Whitespace Characters with \S similar to [^ \r\t\f\n\v]
//prblem:
regex = /\S/g;
console.log(x.match(regex)); //reutrns (40) ['w', 'h', 'i', 't', 'e', 's', 'p', 'a', 'c', 'e', 'w', 'h', 'i', 't', 'e', 'p', 'a', 'c', 'e', ',', 'w', 'h', 'i', 't', 'e', 's', 'p', 'a', 'c', 'e', 'w', 'h', 'i', 't', 'e', 's', 'p', 'a', 'c', 'e']
console.log(regex.test(x)); //reutrns true
y = "abnbdnsadbjsadjajsdjksahdkjahs";
console.log(regex.test(y));


// Specify Upper and Lower Number of Matches
//example:
let a4 = "aaaah";
let a2 = "aah";
let a3 = "aaah"
let a1 = "ah";
let regex1 = /a{2,5}h/;
console.log(a4.match(regex1));
console.log(regex1.test(a4));
console.log(a3.match(regex1));
console.log(regex1.test(a3));
console.log(a2.match(regex1));
console.log(regex1.test(a2));
console.log(a1.match(regex1));
console.log(regex1.test(a1));

// problem: Change the regex ohRegex to match the entire phrase Oh no only when it has 3 to 6 letter h's.
let ohStr = "Ohhh no";
let ohRegEx = /Oh{3,6} no/;
console.log(ohStr.match(ohRegEx));


// Specify Only the Lower Number of Matches
// You can specify the lower and upper number of patterns with quantity specifiers using curly brackets. 
// Sometimes you only want to specify the lower number of patterns with no upper limit.
// To only specify the lower number of patterns, keep the first number followed by a comma.
// For example, to match only the string hah with the letter a appearing at least 3 times, your regex would be /ha{3,}h/.
a4 = "haaaah";
a2 = "haah";
a3 = "haaah"
let a100 = "h" + "a".repeat(100) + "h";
regex = /ha{3,}h/;
console.log(regex.test(a4))//true
console.log(regex.test(a2))//false
console.log(regex.test(a100))//true
console.log(regex.test(a3))//true

//problem: Change the regex haRegex to match the word Hazzah only when it has four or more letter z's.
let haStr = "Hazzzzah";
let hasStr1 = "Hazzzah"
regex = /Haz{4,}ah/;
console.log(regex.test(haStr)); //true
console.log(regex.test(hasStr1)); //false
regex = /Haz{3,}ah/;
console.log(regex.test(hasStr1)); //true


// Specify Exact Number of Matches with {n}
// example:
a4 = "haaaah";
a3 = "haaah";
a100 = "h" + "a".repeat(100) + "h";
regex = /ha{3}h/;  //only 3 a's allowed between h and h, so haaah.
console.log(regex.test(a4)); //false
console.log(regex.test(a3)); //true
console.log(regex.test(a100));//false

//problem: Change the regex timRegex to match the word Timber only when it has four letter m's.
let timStr = "Timmmmber";
regex = /Tim{4}ber/;
console.log(regex.test(timStr)); //true


// Check for All or None
//You can specify the possible existence of an element with a question mark, ?. This checks for zero or one of the preceding element. 
// You can think of this symbol as saying the previous element is optional.
//For example, there are slight differences in American and British English and you can use the question mark to match both spellings.
let american = "color";
let british = "colour";
regex = /colou?r/;
console.log(regex.test(american));//true
console.log(regex.test(british));//true

//problem: Change the regex favRegex to match both the American English (favorite) and the British English (favourite) version of the word.
let favWord = "favorite";
regex = /favou?rite/;
console.log(regex.test(favWord)); //true
