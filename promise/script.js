// Create a JavaScript Promise
/*
Promise is a constructor function, so you need to use the new keyword to create one. 
It takes a function, as its argument, with two parameters - resolve and reject. 
These are methods used to determine the outcome of the promise.
*/
const makeServerRequest = new Promise((resolve, reject) => {
    let responseFromServer;
    if(responseFromServer){
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
    
});
makeServerRequest.then(result => {  //if resolve is true, then works
    console.log(result);
});
makeServerRequest.catch(error => {  //if reject, catch works
    console.log(error);
});

// The then method is executed immediately after your promise is fulfilled with resolve
// result comes from the argument given to the resolve method.

// Handle a Rejected Promise with catch
// catch is the method used when your promise has been rejected. It is executed immediately 
// after a promise's reject method is called. Here’s the syntax:

/*
myPromise.catch(error => {
  
});
*/