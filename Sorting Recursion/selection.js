// Selection sort using ascending order

// arr = [29, 72, 98, 13, 87, 66, 52, 51, 36]

// 1.Assume that the first element in the array is the smallest
// 2.From the other portion of the array,find the minimum value and swap it with first element
// First pass completed
// Repeat same procedure with rest of the array comparing the elements to the right,not the left

function selectionsort(arr) {
    let min;

    //start passes
    for (let i = 0;i < arr.length;i++) {

        // index of the smallest element to be the ith element.
        min = i;

        // Check through the rest of the array for a lesser element
        for(let j = i + 1; j < arr.length;j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }

        // compare the indexes
        if (min !== i) {
            // swap
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }

    return arr;
}

console.log(selectionsort([29, 72, 98, 13, 87, 66, 52, 51, 36]));
