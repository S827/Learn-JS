// Refactor Global Variables Out of Functions

/*
Rewrite the code so the global array bookList is not changed inside either function. 
The add function should add the given bookName to the end of the array passed to it 
and return a new array (list). The remove function should remove the given bookName 
from the array passed to it.
Note: Both functions should return an array, and any new parameters should be added 
before the bookName parameter.
*/
const wishList = ['paragliding', 'swimming', 'antarctica', 'top of eifel tower',
'moon', 'mars', 'make flying vehicle', 'floating house']; //it should not change

//function to add the wish into the array and return the array after addition
function add(list, wishName){
    list = [...wishList];
    list.push(wishName);
    return list;
}
console.log(add(wishList, 'Play IPL match'));
//returns ['paragliding', 'swimming', 'antarctica', 'top of eifel tower', 'moon', '
// mars', 'make flying vehicle', 'floating house', 'Play IPL match']
function remove(list, wishName){
    list = [...list]
    const wishIndex = list.indexOf(wishName);
    if(wishIndex >= 0){
        const before = list.splice(0, wishIndex);
        const after = list.splice(1);
        list = before.concat(after);
        return list;
    }
    
}
console.log(remove(wishList, 'floating house'));
/*
returns
['paragliding', 'swimming', 'antarctica', 'top of eifel tower', 
'moon', 'mars', 'make flying vehicle']
*/
// add and remove in same statement
console.log(remove(add(wishList, 'make a robot'), 'swimming'));
/*
returns
['paragliding', 'antarctica', 'top of eifel tower', 'moon', 'mars', 
'make flying vehicle', 'floating house', 'make a robot']
*/