// Problem 1: Run synchronous statements in order
console.log("Red");
console.log("Yellow");
console.log("Green");

// Problem 2: Observe setTimeout() with a 0 ms delay
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

console.log("C");

// Problem 3: Observe setTimeout() with a 1000 ms delay
console.log("Start");

setTimeout(() => {
    console.log("Waiting");
}, 1000);

console.log("Continue");
console.log("Done");