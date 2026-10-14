// Problem 1: Wait for a promise with await
async function greet() {
    const result = await Promise.resolve("Hello JavaScript!");
    console.log(result);
}

greet();

// Problem 2: Await a function that returns a promise
function getName() {
    return Promise.resolve("Budi");
}

async function displayName() {
    const name = await getName();
    console.log("Name:", name);
}

displayName();

// Problem 3: Await a product from a promise-returning function
function getProduct(){
    return Promise.resolve("Laptop")
}

async function displayProduct(){
    const product = await getProduct()
    console.log("Product:", product)
}

displayProduct()