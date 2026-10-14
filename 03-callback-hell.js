// Problem 1: Nest two setTimeout() callbacks
setTimeout(() => {
    console.log("Hello");

    setTimeout(() => {
        console.log("JavaScript");
    }, 1000);
}, 1000);

// Problem 2: Nest three setTimeout() callbacks (callback hell)
setTimeout(() => {
    console.log("A");

    setTimeout(() => {
        console.log("B");

        setTimeout(() => {
            console.log("C");
        }, 1000);

    }, 1000);
}, 1000);

// Problem 3: Call functions in sequence
function findMaterial(){
    console.log("Finding material");
}

function createReport(){
    console.log("Creating report");
}

function present(){
    console.log("Presentation");
}

findMaterial()
createReport()
present()