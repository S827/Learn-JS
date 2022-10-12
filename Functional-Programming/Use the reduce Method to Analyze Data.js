// Use the reduce Method to Analyze Data
/**
 * The reduce method iterates over each item in an array and returns a single value 
 * (i.e. string, number, object, array). This is achieved via a callback function that 
 * is called on each iteration.
 * 
 * The callback function accepts four arguments. The first argument is known as the 
 * accumulator, which gets assigned the return value of the callback function from 
 * the previous iteration, the second is the current element being processed, the 
 * third is the index of that element and the fourth is the array upon which reduce 
 * is called.
 * 
 * In addition to the callback function, reduce has an additional parameter which 
 * takes an initial value for the accumulator. If this second parameter is not used, 
 * then the first iteration is skipped and the second iteration gets passed the first 
 * element of the array as the accumulator.
 */
//example:
const players1 = [
    { name: 'rohit', age: 35},
    { name: 'kohli', age: 32},
    { name: 'dhawan', age: 30}
]
const sumOfAges = players1.reduce((sum, player) => sum + player.age, 0);
console.log(sumOfAges);//97


// In another example, see how an object can be returned containing the names of the 
// users as properties with their ages as values.
const playerObj = players1.reduce((obj, player) => {
    obj[player.name] = player.age;
    return obj;
}, {});
console.log(playerObj);//{rohit: 35, kohli: 32, dhawan: 30}

/**
 * The variable watchList holds an array of objects with information on several 
 * movies. Use reduce to find the average IMDB rating of the movies directed by 
 * Christopher Nolan. Recall from prior challenges how to filter data and map 
 * over it to pull what you need. You may need to create other variables, and 
 * return the average rating from getRating function. Note that the rating values 
 * are saved as strings in the object and need to be converted into numbers before 
 * they are used in any mathematical operations.
 */
function getRating(watchList) {
    let nolanList = watchList.filter(movie => movie.Director === 'Christopher Nolan');
    let averageRating = nolanList.reduce((sum, movie) => 
    (sum + parseFloat(movie.imdbRating)/nolanList.length), 0);
    return averageRating;
}
console.log(getRating(watchList));//8.675


