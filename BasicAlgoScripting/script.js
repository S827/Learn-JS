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
