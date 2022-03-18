//Here We'll pass an array of two numbers. 
//Return the sum of those two numbers plus the sum of all the numbers between them. 
//Note: The lowest number will not always come first.

function sumAll(arr) {
    let max  = Math.max(arr[0], arr[1]);    // Variables to store max and min number between two
    let min  = Math.min(arr[0], arr[1]);
    let sumBetween = 0;

    for(let i = min; i <= max; i++) {
        sumBetween += i
    }
    return sumBetween
}

console.log(sumAll([4,1]))

//sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10