// Objects-the-basics

// object references and copying
user = { name: 'eto'};
let admin = user;//here admin is copying the reference of user object
admin.name = 'svn';//here changing value of name property which gets applied in the object
console.log(user);//{name: 'svn'}
console.log(admin);//{name: 'svn'}
// comparison by reference
let a = {};
let b = a;
// here a and b both referencing to the same object, so they are equal
console.log(a === b);//true
console.log(a == b);//true
let c = {};
console.log(a == c);//false both a and c are empty object but both are referencing
// to diff objects at diff memory addresses.

// Cloning and merging objects
// can create a new object and replicate the structure of the existing one
// by iterating over its properties and copying them on the primitive level
user = {
    name: 'eto',
    age: 31
};
let cloneOfUser = {};
for(let key in user){
    cloneOfUser[key] = user[key];
}
// here object cloneOfUser value of a key is changed and no change to the real object user
console.log(cloneOfUser);//{name: 'eto', age: 31}
cloneOfUser.name = 'svn';
console.log(cloneOfUser);//{name: 'svn', age: 31}
console.log(user);//{name: 'eto', age: 31}

// merging objects 
user = {name: 'eto',};
let per1 = {canLogin: true};
let per2 = {canLogout: true};
// here Object.assign(dest, ...sources)
// dest is user and sources are per1 and per2
Object.assign(user, per1, per2);
console.log(user);//{name: 'eto', canLogin: true, canLogout: true}
console.log(JSON.stringify(user));//{"name":"eto","canLogin":true,"canLogout":true}
// if sources property is in dest object, value gets overwritten and will contain
// value of sources
let per3 = {name: 'svn'};
Object.assign(user, per3);
console.log(user);//{name: 'svn', canLogin: true, canLogout: true}

// we can also use object.assign(dest, source) to clone 
let ni = {};
Object.assign(ni, user);
console.log(ni);//{name: 'svn', canLogin: true, canLogout: true}
ni.name = 'eto';
console.log(ni);//{name: 'eto', canLogin: true, canLogout: true}
console.log(user);//{name: 'svn', canLogin: true, canLogout: true}

// clone = {...spread}; spread syntax is also used for cloning

// Nested cloning
// properties of objects can also be references to other objects
// in that case, cloning will return the reference of that object which is a
// property of source object, so modifying cloned object will modify the sources
// property(objects too)
// example:
user = {
    name: 'eto',
    age: 31,
    size: {
        height: 165,
        weight: 62
    }
};
let clone1 = {};
Object.assign(clone1, user);
console.log(user.size === clone1.size);//true same objects
console.log(clone1);
clone1.size.height = 173;
console.log(user.size.height);//173

// to fix that cloning of objects which are properties,w e should use loop to iterate
// over each properties of source object to check what type it is and if type is
// object, replicate the structures as well, it is called deep/structured cloning
// structuredClone(obj) method

// working on the same user object as above
let clone2 = structuredClone(user);
console.log(clone2);
// try modify clone2 and check if user object is also modified
console.log(user.size === clone2.size);//false different objects
clone2.size.height = 191;
console.log(clone2.size.height);//191 clone2 obj modified
console.log(user.size.height);//173 no modification in user object 

// structuredClone method can clone most data types such as object, arrays, 
// primitive values.
// Also support circular references,when an object property references itself
// examples:
user = {};
// create circular reference
user.me = user;//user.me references the user itself
let clone3 = structuredClone(user);
console.log(clone3.me === clone3);//true clone3 references itself not user
console.log(clone3.me === user);//false

// there are cases where structuredClone fails
// like when an object has function property
// example:
user = {f: function(){}};
// let clone4 = user.structuredClone(user);//Uncaught TypeError: user.structuredClone is not a function

// structuredClone does not support function properties



