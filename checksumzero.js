//Checking sum zero -- Problem 1
//[-5,-4,-3,-2,0,2,4,6,8] => input
// [?,?] => output

function SumZeroPair(arr) {
    for(let number of arr) {
        console.log("Outer loop traversing")
        for(let j = 1; j < arr.length; j++) {
            console.log("Inner loop traversing")
            if(number + arr[j] === 0) {
                return [number, arr[j]]
            }
        }
    }
}

const result = SumZeroPair([-5,-4,-3,-2,0,2,4,6,8])
console.log(result)

// O(n^2)  quadratic time complexity