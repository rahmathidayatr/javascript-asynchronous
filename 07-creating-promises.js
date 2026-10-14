// Problem 1: Create a promise that resolves
const promise = new Promise((resolve, reject) => {
    resolve("Hello Promise!");
});

promise.then((result) => {
    console.log(result);
});

// Problem 2: Create a promise that resolves with a value
const promise2 = new Promise((resolve, reject) => {
    resolve("Budi")
})

promise2.then((result) => {
    console.log("Name:", result);
});

// Problem 3: Create a promise that rejects
const promise3 = new Promise((resolve, reject) => {
    reject("Failed to fetch data")
});

promise3
    .catch((error) => {
        console.log("Error:",error);
    });