// Recursion : When Function call itself
// otherwise it will get called for infinite time
// If a function call itself then there must be an end point

let counter  = 1
function recur(number) {   // function with definition
    if (counter > number) {
        return;
    }
    console.log("Keep Going Shivam" + counter)
    counter++
    recur(number)  // recursion function
}

recur(10)  // calling

