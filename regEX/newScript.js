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
console.log(/a?/.test("b"));//true 0 match so still true
console.log(/a?/.test("aa"));//true 1 match and 2nd a is not part of the pattern
console.log(/^a?$/.test("aa")); //false it looks 0 or 1 'a' start to end, but here we have another a so returned false

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

// (/w)(?!\1) looks fot a character without recurrence, but only for 1 character
e = /^((\w)(?!\1))+$/;
console.log(e.test("madam"))//false, regex doesnot work, because of \1 does not represent \w, it represents higher level bracket pair
console.log(e.test("maam"));//false

// ?: to forget the memory of brackets
// Look for a character. Look ahead to ensure it is not followed by the same character. Do this from start to end for all characters.
e = /^(?:(\w)(?!\1))+$/; //this time 1st level of () are not remembered because of '?:' hence \1 remembers the match returned by \w
console.log(e.test("madam")); //true  '+' added for overall grouping to find similar pairs of chars end to end
console.log(e.test("maam")); //false

/*
Review
\w represents all the alpha-numeric characters
If you capitalize ‘w’ and use \W', that would mean all characters other than alpha-numeric
( )
The expression within a bracket is remembered for later use
\1 remembers and uses the match from first expression that is within brackets
\2 from second set of brackets. And so on.
a(?!b)
A combination of brackets, question mark and exclamation mark (?!), is called a look ahead
This matches a only if it is not followed by b
a(?=b)
The other side of the coin
Match a only if it is followed by b. (?:a)
Forgetful grouping
Look for a but don’t remember it
You can’t use \1 pattern to reuse this match
*/

// Alternating Sequence like abababab, ioioioio, *7*7*7*7 etc.
e = /^(\S)(?!\1)(\S)(\1\2)*$/; //^ start, $ end, \S anything other than white space,?!\1 \S is remembered as \1 
// and next char shouldnt be \1, then next char other then whitespace \S and remembered as \2, now the patter should be \1\2, 
// with * pattern became \1\2\1\2\1\2....
console.log(e.test("ababab"));//true a:\1 b:\2  \1\2\1\2 format is allowed only
console.log(e.test(" a a"));//false as it contains whitespace
console.log(e.test("babba"));//false as patters \1\2\1\2 does not fit
console.log(e.test(".g.g"));//true
console.log(e.test("xyxyx"));//false as current patters is \1\2\1\2 and in this example, pattern is something like this \1\2\1\2...\1 ends with the first remembered character
e = /^(\S)(?!\1)(\S)(\1\2)*\1?$/;
// question mark ? after a character or pattern means 0 or 1 match for the preceding pattern. It is non-greedy in gobbling up characters.
console.log(e.test("abababa"));//true
console.log(e.test("xyxyx"));//true

e = /^(\S)(?!\1)(\S)(?!\1\2)(\S)(\1\2\3)*$/; //here it looks for pattern \1\2\3 at start and end, no other chars in between is allowed
console.log(e.test("abcabcabc"));//true
console.log(e.test("abcab"));//false
// here we want to match with string "abcabcabcab" means \1\2 should be in the last
e = /^(\S)(?!\1)(\S)(?!\1\2)(\S)(\1\2\3)*\1\2?$/;
// question mark ? after a character or pattern means 0 or 1 match for the preceding pattern. It is non-greedy in gobbling up characters.
console.log(e.test("abcabcabcab")); //true
console.log(e.test("abcabca"));//false as ending is not \1\2 and is \1 only.

e = /a?/;
console.log(e.test("a"));//true
console.log(e.test(""));//true
console.log(e.test("bb"));//true
console.log(e.test("ab"));


/*
Review
\S
Represents all characters excluding white space such as a space and new lines
Note that it is capital S
a*
The asterisk or star, looks for 0 or more occurrences of the preceding character. In this case, it is 0 or more a
Remember plus (+) which looks for 1 or more? Yeah, these guys are cousins.
a(?!b)
This combination of brackets, question mark and exclamation mark (?!) is called a look ahead.
This matches a only if it is not followed by b.
For example, it matches a in aa, ax, a$ but does not match ab
Though it uses bracket, it does not remember the matching character after a.
\s
Small caps s matches a single white space character such as a space or new line.
a(?=b)
This matches a that is followed by b.
^ab*$
You may think this translates to 0 or more occurrences of ab, but it matches a followed by 0 or more b
For example: This matches abbb, aand ab, but does not match abab
^(ab)*$
This matches 0 or more pairs of ab
That means it will match empty string "", aband abab, but not abb
a?
? matches 0 or 1 occurrence of preceding character or pattern
\1? matches 0 or 1 recurrence of first remembered match
*/


/*
Match a strong password
The password should:

have a minimum of 4 characters
contain lowercase
contain uppercase
contain a number
contain a symbol
*/
// length of the string
//espression with just lookahead
// won't consume any character
e = /^(?=.{4,})$/;
console.log(e.test("abcd")); //false, pattern didnt work
// analysis: ?=  lookahead, it does not consume any character
// .  any char
//  {4,} means at least 4 preceding chars with no max limit
//  \d{4} means 4 numbers
// \w{4,20} means any alphanumeric char with at least 4 char and max 20 chars.

// after lookahead
//  pattern to consume character is needed
// It reads like this, “Start from the beginning. Look ahead for 4 characters. 
// Don’t remember the match. Come back to the beginning. Consume all the characters using .* and see if you reach the end of the string.”
e = /^(?=.{4,}).*$/;
console.log(e.test("abcd"));//true
console.log(e.test("abc"));//false
console.log(e.test("abcde"));//true

// AT LEAST ONE NUMBER
e = /^(?=.*\d+).*$/;
//pattern explaination: ^: start, ?=.*: look ahead for 0 or more chars, \d+: check 1 or more number follows. Once it matches,
// come back to the start bc we were in look ahead. With .*$ consume all the chars in the string untile the end of the string.
console.log(e.test("4"));//true
console.log(e.test("4a4"));//true
console.log(e.test("ert"));//false
console.log(e.test("eleph7ant"));//true

// ATLEAST ONE LOWERCASE LETTERS
e = /^(?=.*[a-z]+).*$/ //?=.*: lookahead for any chars, [a-z]+: one or more lower case letters, come back at the start bc of lookahead, with .* consume all the chars int he string until end of the string.
console.log(e.test("ABcAB"));//true
console.log(e.test("ABABAB"));//false
console.log(e.test("32423"));//false
console.log(e.test("21321n34321"));//true
console.log(e.test("AJSAJSkjasAKAsad"));//true

// ONE UPPERCASE LETTER
e = /^(?=.*[A-Z]+).*$/;
console.log(e.test("aBcab"));//true
console.log(e.test("ABABAB"));//true
console.log(e.test("32423"));//false
console.log(e.test("21321N34321"));//true
console.log(e.test("AJSAJSkjasAKAsad"));//true


// AT LEAST ONE SYMBOL
e = /^(?=.*[^a-zA-Z0-9])[ -~]+$/; //considers space as symbol
console.log(e.test("_"));//true
console.log(e.test(" "));//true

e = /^(?=.*[^a-zA-Z0-9])[!-~]+$/; //does not take space
console.log(e.test("_"));//true
console.log(e.test(" "));//false

e = /^(?=.*[\W])[!-~]+$/; //underscore exception
console.log(e.test("_"));//false
console.log(e.test(" "));//false

// [!-~] : Charset range: it covers all the symbols, letters and numbers we need.
let passwordRegEx = /^(?=.{4,})(?=.*\d+)(?=.*[a-z]+)(?=.*[A-Z]+)(?=.*\W)[!-~]$/;
console.log(passwordRegEx.test("abc123"));
console.log(passwordRegEx.test("nameaB3$"));
console.log(passwordRegEx.test("#kK8"));
console.log(passwordRegEx.test("no89Name*"));
console.log(passwordRegEx.test("LlLl9)"));



// apttern to find 2 consecutive numbers
e = /^(?=.*\d\1).*$/;
console.log(e.test("22"));


// Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, and have two consecutive digits.
let sampleWord = "astronaut12";
/* 
Your regex should use two positive lookaheads.
Passed:Your regex should not match the string astronaut
Passed:Your regex should not match the string banan1
Passed:Your regex should match the string bana12
Passed:Your regex should match the string abc123
Passed:Your regex should not match the string 12345
Passed:Your regex should match the string 8pass99
Passed:Your regex should not match the string 1a2bcde
Passed:Your regex should match the string astr1on11aut
*/
let pwRegex = /(^(?=.{5,})(?=.*\D\d{2,}).*$)/; // Change this line
let result = pwRegex.test(sampleWord);
console.log(result);//true