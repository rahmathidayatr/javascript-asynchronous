// Problem 1: Create a promise and handle it with then()
const promise = new Promise((resolve) => {
    resolve("Hello JavaScript!");
});

promise.then((result) => {
    console.log(result);
});

// Problem 2: Return a promise from a function
function getName() {
    return new Promise((resolve) => {
        const name = "Budi";
        resolve(name);
    });
}

getName().then((result) => {
    console.log("Name:", result);
});

// Problem 3: Return a promise that resolves with a product
function requestProduct() {
    return new Promise((resolve) => {
        const product = "Laptop"
        resolve(product)
    })
}

requestProduct().then((product) => {
    console.log("Product received:", product);
});