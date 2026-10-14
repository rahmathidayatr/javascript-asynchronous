// Problem 1: Catch a rejected promise with try...catch
async function getData() {
    try {
        await Promise.reject("Failed to get data");
    } catch (error) {
        console.log("Error:", error);
    }
}

getData();

// Problem 2: Use try...catch around a resolved await
async function getProduct() {
    try {
        const product = await Promise.resolve("Laptop");
        console.log("Product:", product);
    } catch (error) {
        console.log("Error:", error);
    }
}

getProduct();

// Problem 3: Catch a rejection from a returned await
async function getName() {
    try {
        return await Promise.reject("Name not found")
    } catch (error){
        console.log("Error:", error)
    }
}

getName()