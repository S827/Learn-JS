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


