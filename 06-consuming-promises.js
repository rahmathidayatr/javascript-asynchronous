// Problem 1: Handle a resolved promise with then()
const promise = new Promise((resolve) => {
    resolve("Learning Promises");
});

promise.then((result) => {
    console.log(result);
});

// Problem 2: Handle a rejected promise with catch()
const promise2 = new Promise((resolve, reject) => {
    reject("An error occurred");
});

promise2
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

// Problem 3: Return a promise that can resolve or reject
// Create the getProduct function here
function getProduct(){
    return new Promise((resolve, reject) => {
        const product = "Laptop"
        if (product) {
            resolve(product);
        } else {
            reject("Failed to fetch data");
        }
    })
}

getProduct()
    .then((product) => {
        console.log("Product:", product);
    })
    .catch((error) => {
        console.log("Error:", error);
    });