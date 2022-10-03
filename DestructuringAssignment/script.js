//Consider the following ES5 code:
const user = { name: "John Doe", age: 34};
const name2 = user.name;
const age2 = user.age;
console.log(name2 + " " + age2); //John Doe 34
//name would have a value of the string John Doe, and age would have the number 34.

//Here's an equivalent assignment statement using the ES6 destructuring syntax:
const user1 = { name1: "John Doe", age1: 34};
const {name1, age1} = user1;
console.log(name1 + " " + age1); //John Doe 34

//another example:
const HIGH_TEMPERATURES = {
    yesterday: 23,
    today: 36,
    tomorrow: -12
}

const {yesterday, today, tomorrow} = HIGH_TEMPERATURES;
console.log(`Yesterday's temperature: ${yesterday} degree celcius
\ntoday's temperature: ${today} degree celcius
\ntomorrow's temperature: ${tomorrow} degree celcius
`)

/*
Use Destructuring Assignment to Assign Variables from Objects
Destructuring allows you to assign a new variable name when extracting values. You can do this by putting the new name after a colon when assigning the value.

Using the same object from the last example:
*/
const user3 = {name3: "Hon Joe", age3: 12};
const {name3: userName, age3: userAge} = user3;

console.log(`Name is ${userName} and the age is ${userAge}`); //Name is Hon Joe and the age is 12

//Problem:
const HIGH_TEMPERATURES1 = {
    yesterday: 23,
    today: 14,
    tomorrow: 36
};
const {today: highToday1, tomorrow: highTomorrow1} = HIGH_TEMPERATURES1;
console.log(highToday1 + " " + highTomorrow1);

