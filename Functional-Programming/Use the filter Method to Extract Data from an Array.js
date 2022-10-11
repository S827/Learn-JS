// Use the filter Method to Extract Data from an Array.js
// example:
const player = [
    { name:'virat', age: 32 },
    { name: 'rohit', age: 35},
    { name: 'dhawan', age: 30}
]
const under35Player = player.filter(player => player.age < 35);
console.log(JSON.stringify(under35Player));
/**
 * [{"name":"virat","age":32},{"name":"dhawan","age":30}]
 */
// problem
/**
 * The variable watchList holds an array of objects with information on several 
 * movies. Use a combination of filter and map on watchList to assign a new array 
 * of objects with only title and rating keys. The new array should only include 
 * objects where imdbRating is greater than or equal to 8.0. Note that the rating
 *  values are saved as strings in the object and you may need to convert them 
 * into numbers to perform mathematical operations on them.
 */
// The global variable

  let filteredList = watchList.filter(movies => parseFloat(movies.imdbRating) > 8.0);
  filteredList = filteredList.map(movies => ({
    title: movies.Title,
    rating: movies.imdbRating
  }));
  console.log(JSON.stringify(filteredList));
/**
 * returns
 * [{"title":"Inception","rating":"8.8"},{"title":"Interstellar","rating":"8.6"},
 * {"title":"The Dark Knight","rating":"9.0"},{"title":"Batman Begins","rating":"8.3"}]
 */
