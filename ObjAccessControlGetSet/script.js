// Use getters and setters to Control Access to an Object
// can obtain values from an object and set the value of a property within an object.
// Getter functions are meant to simply return (get) the value of an object's private 
// variable to the user without the user directly accessing the private variable.

// Setter functions are meant to modify (set) the value of an object's private variable based 
// on the value passed into the setter function. 
// This change could involve calculations, or even overwriting the previous value completely.

class Book {
    constructor(author){
        this._author = author;
    }
    //getter
    get writer() {
        return this._author;
    }
    //setter
    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }
}
const novel = new Book("Anonymous");
console.log(novel.writer);
novel.writer = "newAuthor";
console.log(novel.writer);


class Thermostat {
    constructor(F){
            this._F = F;
    }
    get temperature(){
        return (this._F - 32)*5/9.0;
    }
    set temperature(temp) {
        this._F = temp * 9.0/5 + 32;
    }
}
const thermos = new Thermostat(76);// setting in F scale
let temp = thermos.temperature; //24.44 in C
console.log(temp);
thermos.temperature = 27;
temp = thermos.temperature; //27 in C
console.log(temp);