// Problem 1: Trace a nested function call on the call stack
function one() {
    console.log("One");
}

function two() {
    one();
    console.log("Two");
}

two();

// Problem 2: Trace the order of calls between two functions
function A() {
    console.log("A started");
    B();
    console.log("A finished");
}

function B() {
    console.log("B started");
    console.log("B finished");
}

A();

// Problem 3: Trace a chain of three nested function calls
function eat() {
    console.log("Eat");
}

function cook() {
    eat();
    console.log("Cook");
}

function shop() {
    cook();
    console.log("Shop");
}

shop();