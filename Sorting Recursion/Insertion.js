//Insertion sort using recursion technique
// Input -> [23,1,10,5,2]

// 1.Start by comparing the second element of the array with first element assuming the first element
//    is the sorted portion.Swap if the second element is samller than the first element
// 2. Iterate through comparing the first element with each element of the unsorted portion.
//    if the element form the unsorted portion is smaller than the first element,swap.
// 3.After iterating through the entire array,increment the sorted portion to the next index and recursively
//   compare the value of the last index of the sorted portion with each value of the unsorted portion.
//   Swap where the value of the unsorted portion is smaller.
// 4.The sorted portion shall increase until it covers the entire array yielding a sorted array.

function insertionSort(arr) {
    //Start from the second element
    for(let i = 1; i < arr.length;i++) {
        
        //Go through the elements behind it.
        for(let j = i - 1;j > -1;j--) {

            //value comparison using ascending order
            if(arr[j + 1] < arr[j]) {

                //swap
                [arr[j + 1],arr[j]] = [arr[j],arr[j + 1]]
            }
        }
    };
    return arr;
}

console.log(insertionSort([23,1,10,5,2]))

// Output -> [1,2,5,10,23]

// Performance Cases
// Worst-case time complexity -> O(n^2)

// Space complexity -> O(1)