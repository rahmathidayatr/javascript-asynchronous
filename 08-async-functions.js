// Problem 1: Return a value from an async function
async function learn() {
    return "Learning JavaScript";
}

learn().then((result) => {
    console.log(result);
});

// Problem 2: Return a number from an async function
async function getNumber() {
    return 25;
}

getNumber().then((number) => {
    console.log(number);
});

// Problem 3: Return a product from an async function
async function getProduct() {
    return "Laptop"
}

getProduct().then((product) => {
    console.log("Product:", product);
});
