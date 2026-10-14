// Problem 1: Simulate a request with a callback
function requestData(callback) {
    setTimeout(() => {
        callback("Data fetched successfully")
    }, 1000);
}

requestData(function() {
    console.log("Request finished");
});

// Problem 2: Pass a value to a callback
function getName(callback) {
    setTimeout(() => {
        const name = "Budi";

        callback(name)
    }, 1000);
}

getName(function(result) {
    console.log("Name:", result);
});

// Problem 3: Receive a product through a callback
function requestProduct(callback){
    setTimeout(() => {
        const product = "Laptop"
        callback(product)
    }, 1000);
}


requestProduct(function(product) {
    console.log("Product received:", product);
});