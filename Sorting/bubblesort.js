//Bubble sort using recursion technique
// Input -> [5,3,8,4,6]

// Start by comparing the first two elements in an array
// swap them if required
// Continue till the end of the array.At this point,you have made a series of
// inner passes and completed an outer pass.
// Repeat the process until the entire array is sorted


function bubbleSort(arr) {

    //Outer Pass
    for(let i = 0; i < arr.length; i++) {

        //Inner Pass
        for(let j = 0; j < arr.length - i - 1;j++) {

            //Value Comparison using ascending order
            if(arr[j + 1] < arr[j]) {

                //Swapping
                [arr[j + 1],arr[j]] = [arr[j],arr[j+1]]

            }

        };

    };
    return arr;
}

console.log(bubbleSort([5,3,8,4,6]))

// Output -> [3,4,5,6,8]

// Performance Cases

// Worst-case time complexity -> O(n^2)
// Average-case time complexity -> theta(n^2)
// Best-case time complexity -> omega(n)
// Space complexity -> O(1)
