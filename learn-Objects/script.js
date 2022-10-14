// create empty object
let user = new Object();//object costructor syntax
user = {};//obejct literal syntax
console.log(user);//returns empty object

//Literals and properties
user = {        //an object
    name: 'eto',//by key 'name' store value of 'eto'
    age: 31     //by key 'age' store value of 31
};

//get properties values of the object
console.log(user.name);//eto
console.log(user.age);//31
console.log(typeof user.age);//number

// add property of boolean type
user.admin = true;
console.log(user);//{name: 'eto', age: 31, admin: true}
console.log(typeof user.admin) //boolean


// delete operator to remove a propery
delete(user.admin);
console.log(user);//{name: 'eto', age: 31}

//properties separated with spaces must be quoted
user = {
    name: 'eto',
    age: 31,
    'like Space': true,//last property can have comma to make it easier to add/remove/move around properties
}
console.log(user);//{name: 'eto', age: 31, like Space: true}

// Square brackets
// for properties sepatated with spaces, dot access doesn't work
// dot requires key to be valid variable identifier: no spaces, doesn't start with 
// number and doesn't include special chars. $ and _ are allowed.
user["like twitter"] = true;
console.log(user['like twitter']);//true
console.log(user);//{name: 'eto', age: 31, like Space: true, like twitter: true}
delete(user['like twitter']);
console.log(user);//{name: 'eto', age: 31, like Space: true}

let key = 'like Space';
console.log(user);
console.log(user[key]);//true

//example:
// key = prompt("What do you want to know about the user?", "name");
console.log(user[key]);//whatever property we input for key, their value will be displayed
// but dot notation can't be used in the same way
// console.log(user.key);//undefined
console.log(typeof key);//string

// computed properties
// can use sq brackets in an object literal, when creating an object, thats computer
// /properties
//exmple:
// let fruit = prompt("which fruit to buy", 'apple');
let bag = {
    // [fruit]: 5,//name of property taken from variable fruit
};
// console.log(bag[fruit]);//5
// this works same as above
bag = {};
// bag[fruit] = 5;
console.log(bag);//{apple: 5}

// we can use more complex expression inside sq brackets
bag = {
    // [fruit + "Vegetables"]: 10,
};
console.log(bag);//{appleVegetables: 10}
console.log(bag.appleVegetables);//10

// Property value shorthand
// example:
function makeUser(name, age){
    return {
        name: name,
        age: age,
    };
}
user = makeUser('eto', 31);
console.log(user);//{name: 'eto', age: 31}
console.log(user.age);//31
// shorthand-1
function newMakeUser(name, age){
    return {
        name,
        age,
    };
}
console.log(newMakeUser());//{name: undefined, age: undefined}
user = newMakeUser('eto', 31);
console.log(user);//{name: 'eto', age: 31}
// shorthand-2
function newestMakeUser(name, age){
    return {
        name,
        age: 31,
    };
}
console.log(newestMakeUser());//{name: undefined, age: 31}
user = newestMakeUser('eto');
console.log(user);//{name: 'eto', age: 31}

// Property name limitations
// reserved keywords cant be used as variable which is not the case
// in objects
// example:
let obj = {
    for: 1,
    let: 2,
    return: 20,
    0: 99,
};
console.log(`${obj.for}, ${obj.let} & ${obj.return}`);//1, 2 & 20
// Other types are automatically converted to strings.
obj = {
    0: 'test',//same as '0': 'test
};
console.log(obj[0]);//test
console.log(obj['0']);//test

// we can't set a special property named '__proto__' to a non-object value
obj ={};
obj.__proto__ = 5;
// alert(obj.__proto__);//[object Object]

// Property existence test, "in" operator
// In JS, any property can be accessed in Objects, no error if property doesn't exis
// reading a non-existing property returns undefined

// noSuchProperty:
user = {};
console.log(user.noSuchProperty === undefined);//true means no such undefined property

// in:
// syntax: 'key' in object
// example:
let player = {
    name: 'virat',
    age: 31,
}
console.log('name' in player);//true
console.log(player.name in player);//false
console.log('age' in player);//true
// left to the in keyword, property should be used inside quotes or variable without wuotes
user = {
    age: 30,
};
key = 'age';
console.log(key in user);//true

// we can compare to undefined to check if property exists or not
// but with limitation, there is a case where this method fails
// when? when property is available and its value isn't.
user = {
    age: undefined,
}
console.log(user.age)//undefined but property is available
console.log('age' in user);//true

// The "for..in" loop
// syntax: for(key in object){

// }
//example:
user = {
    name: 'eto',
    age: 31,
    isAdmin: true,
};
for(let key in user){
    console.log(key);
    // console.log(user.key);//undefined
    console.log(user[key]);//eto; 31; true
}

// Ordered like an object
// order of object does not remain the same like they were defined, their order
// changes and ordered in a special fashion: integer prop are sorted, others
// appear in creation order
// example:
let codes = {
    "91": 'india',
    "49": 'germany',
    '44': 'switzerland',
    "41": 'Great Britain',
    '1': 'USA',
};
console.log(codes);//{1: 'USA', 41: 'Great Britain', 44: 'switzerland', 49: 'germany', 91: 'india'}
for(let prop in codes){
    console.log(prop);//1;41;44;49;91
}
// Integer properties? What’s that?
// The “integer property” term here means a string that can be converted to-and-from 
// an integer without a change.
// So, "49" is an integer property name, because when it’s transformed to an integer 
// number and back, it’s still the same. But "+49" and "1.2" are not:

// if the keys are non integer, object order will be the same when created
// example:
user = {
    name: 'jo',
    age: 30,
};
user.hello = false;
for(let prop in user){
    console.log(prop);//name; age; hello as the same as creation order
}
// order changes if prop name is integer value
// so country codes comes with + as prefix and now the prop is not integer
// and we want to see india prop to be on the top or objects order should be the same
codes = {
    "+91": 'india',
    "+49": 'germany',
    '+44': 'switzerland',
    "+41": 'Great Britain',
    '+1': 'USA',
};
for(let prop in codes){
    console.log(+prop);//91; 49; 44; 41; 1
    console.log(prop);//+91; +49; +44; +41; +1
}



// *****PROBLEMS*****
/**
 * Hello, object
importance: 5
Write the code, one line for each action:

Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.
 */
user = {};
console.log(user);//{}
user.name = 'John';
console.log(user);//{name: 'John'}
user.surname = 'Smith';
console.log(user);//{name: 'John', surname: 'Smith'}
user.name = 'Pete';
console.log(user);//{name: 'Pete', surname: 'Smith'}
delete(user.name);
console.log(user);//{surname: 'Smith'}

/**
 * Check for emptiness
importance: 5
Write the function isEmpty(obj) which returns true if the object has 
no properties, false otherwise.
Should work like that:
let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false
 */
let nplayer = {};
function isEmpty(obj){
    for(let key in obj){
        return false;
    }
    return true;
}
console.log( isEmpty(nplayer) );//true
console.log(nplayer);//{}
nplayer["name"] = 'divya';
console.log(nplayer);//{name: 'divya'}
console.log( isEmpty(nplayer) );//false
console.log(nplayer.noSuchProperty === 'name')//false
console.log(nplayer.noSuchProperty === undefined);//true


/**
 * Sum object properties
importance: 5
We have an object storing salaries of our team:
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Write the code to sum all salaries and store in the variable sum. 
Should be 390 in the example above.
If salaries is empty, then the result must be 0.
 */
 let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
  let dueSalaries = {};
  function salarySum(obj){
    let sum = 0;
    for(let prop in obj){
        sum += parseInt(obj[prop]);
    }
    return sum;
  }
  console.log(salarySum(salaries));//390
  console.log(salarySum(dueSalaries));//0

  /**
   * Multiply numeric property values by 2
importance: 3
Create a function multiplyNumeric(obj) that multiplies all numeric property values 
of obj by 2.
For instance:
// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
multiplyNumeric(menu);
// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
Please note that multiplyNumeric does not need to return anything. 
It should modify the object in-place.
P.S. Use typeof to check for a number here.
   */
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  function multiplyNumeric(obj){

    for(let key in obj){
        let val = obj[key];
        if(typeof (val) === "number"){
            obj[key] = val * 20;
        } else if(typeof (val) !== "number"){
            obj[key] = val + " " + val;
        }
    }
  }
  multiplyNumeric(menu);
  console.log(menu);

  