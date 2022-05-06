//Bubble sort using recursion technique
// Input -> [5,3,8,4,6]

// 1.Start by comparing the first two elements in an array
// 2.swap them if required
// 3.Continue till the end of the array.At this point,you have made a series of
//   inner passes and completed an outer pass.
// 4.Repeat the process until the entire array is sorted


function bubbleSort(arr) {

    //Outer Pass
    for(let i = 0; i < arr.length; i++) {
        //console.log("Outer loop")
        //Inner Pass
        for(let j = 0; j < arr.length - i - 1;j++) {
           //console.log("Inner Loop")
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

// Space complexity -> O(1)
