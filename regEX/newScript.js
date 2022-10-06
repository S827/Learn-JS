// regex
// start with small letters
// look for the character a in a string
console.log(/a/.test("abc"));//true
console.log(/a/.test("bcd"));//false
console.log(/a/.test("cba"));//true

//multi characters
//put them in sequence as substring
console.log(/ab/.test("abacus"));//true
console.log(/bac/.test("abacus"));//true
console.log(/abc/.test("abacus"));//false
console.log(/abas/.test("abacus"));//false

// /pattern in numbers
let e = /0|1|2|3|4|5|6|7|8|9/;
console.log(e.test("42")); //true
console.log(e.test("the answeer is 42")); //true

e = /[0123456789]/ //inside [] means either this or the next
console.log(e.test("answer is 42"));//true

e = /[0-9]/; //like a range including 0 and 9.
console.log(e.test("answer is 98"));//true

//prefix and suffix patterns
// ^ means the start of the string.
// $ means the end of the string.
// ^ prefix
console.log(/^a/.test("abc"));//true
console.log(/^a/.test("bca"));//false because string starts with b not a, doesnt matter if a is present anywhere else, ^ specifically looks at the start
console.log(/^http/.test("https://pineboat.in"));//true as http is present at the start

// $ suffix
console.log(/js$/.test("script.js"));//true
console.log(/js$/.test("script.sj"));//false as $ makes it start looking at the end for js character, and here it found sj which is not js, so failed


// pattern match end to end
e = /^[0-9]$/; //here regex will look for a number fromt he char set, check if the string ends right there.
console.log(e.test("42"));//false
console.log(e.test("answer is 42"));//false
console.log(e.test("9"));//true single number start to end that is why returned true

// ? : none or 1
// + : 1 or more
// * : none, 1 or more

// ?:
console.log(/a?/.test(""));//true matches empty string as ? stand o or 1
console.log(/a?/.test("a"));//true one match
console.log(/a?/.test("b"));//true o match so still true
console.log(/a?/.test("aa"));//true 1 match and 2nd a is not part of the pattern
console.log(/^a?$/.test("aa")); //false it looks 0 or 1 a start to end, but here we have another a so returned false

// + :
console.log(/a+/.test("a"));//true as it checks for 1 or more a's which is available in the string
console.log(/a+/.test("aa"));//true as it checks for 1 or more a's and here 2 a's are available in the string
console.log(/a+/.test("ba"));//true as it checks for 1 or more a's which is available in the string
console.log(/^a+$/.test("aa"));//true as it start and ends with a, if stng is ab, it would return false as start with a and ends with b
console.log(/a+/.test(""));//false as no a is availabke and + looks for 1 or more.
console.log(/a+/.test("b")); //false as no a is available.
console.log(/^a+$/.test("ab"));//false as it starts with a but ends with b

//  * :
console.log(/a*/.test("a"));//true as it finds 1 a
console.log(/a*/.test("aa"));//true as it finds 2 a
console.log(/a*/.test("ba"));//true as it finds 1 a at the end
console.log(/a*/.test(""));//true as it finds 0 a
console.log(/a*/.test("b"));//true 0 a
console.log(/^a*$/.test("aa"));//true
console.log(/^a*$/.test(""));//true
console.log(/^a*$/.test("ba"));//false as it doesnt starts with a but end at the string, start made it false

// few more with +:
e = /^[0-9]+$/ //means starts and ends with number
console.log(e.test("4"));//true starts and ends with 1 number
console.log(e.test("42"));//true starts with a number and ends with a number
console.log(e.test("asnwer is 44")); //false as it doesnt starts with a number and only ends with number

// Practice Patterns
// Can you try to write a pattern for hexadecimal numbers (consisting of numerals 0–9 and letters a-f, with an optional # in front)?
e = /^#(([a-f0-9]{6})|([a-f0-9]{3}))$/; //check with 6 or| 3 chars for hex numbers, 
console.log(e.test("#324333")); //true
console.log(e.test("#43def4")); //true
console.log(e.test("#34rfde")); //false as r is in the string

// How about a binary number? Can you test if a string is full of just 0 and 1?
e = /^(0|1)+$/;//starts and ends with 0 or 1
console.log(e.test(""));//false
console.log(e.test("1"));//true
console.log(e.test("0"));//true
console.log(e.test("10"));//true
console.log(e.test("12324"));//false
console.log(e.test("1010"));//true
console.log(e.test("1010101010101"));//true
console.log(e.test("101010p1090990"));//false

/*
Review
[123]
The expression within square brackets are a character set
Any one of the characters match will pass the test. Just ONE character.
[0-9]
Looks for a single numeric digit between 0 to 9
[0-5]
Looks for a single numeric digit between 0 to 5
[a-z]
Looks for a single letter between a to z
[A-F]
Looks for a single letter between A to F
[123]+
Plus (+) looks for one or more occurrence of the characters within the set This one matches a 
“23132” sub-string that consists of 1, 2 and 3 within a larger string “abc23132”.
|
Pipe symbol stands for or
\d
A shorthand for numerals
Matches a single numeric digit.
\D
A shorthand for non-numeric characters
Anything other than numerals that’ll be matched by \d
*/

// Recurrence match to find duplicates
// duplicate characters appear immediately after an occurrence
// meaning Match any alpha-numeric character on a given string. 
// Remember it as \1. Check if that character appears right next to the first occurrence.
e = /(\w)\1/;
console.log(e.test("abc"));//false
console.log(e.test("abb")); //true
console.log(e.test("babba1b2bbba"));//true

// Reverse Pairs
// find two characters appearing in reverse order right next to each other. 
// That is like abba. ab is reversed as ba and is right next to each other.
e = /(\w)(\w)\2\1/; //1st w matches a and remember it as \1, 2nd w matches b and remember it as \2, then expression expects next char to be \2 then \1
console.log(e.test("aaaa"));//true a\1 a\2 
console.log(e.test("abba"));//true a\1 b\2
console.log(e.test("abab"));//false a\1 b\2
console.log(e.test("cbbc"));//true c\1 b\2
console.log(e.test("abbabbabbbbabbbbbbabbbbb")); //true
console.log(e.test("babba1b2bbba"));//true a\1 b\2 of abba


// no duplicates
// No character should be followed by the same character
e = /^(\w)(?!\1)$/;
console.log(e.test("a"));//true
console.log(e.test("ab"));//false
console.log(e.test("aa"));//false

// ?! is negative look ahead
// a(?!b) matches a only if it is not followed by b
e = /a(?!b)/;
console.log(e.test("ababa"));//true

// (?=) : positive look ahead
// a(?=b) matches a only if it is followed by b
e = /a(?=b)/;
console.log(e.test("babaa"));//true
console.log(e.test("bbbbbba"));//false