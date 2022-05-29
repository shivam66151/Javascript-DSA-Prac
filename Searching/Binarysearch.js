// Divide and Conquerer -> Binary Search
// FInd the Index of given number in a sorted array 7
// [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] => index 6 -> output

// min=0 , element = 1
// max = array.length - 1 , element = 15
// first work -> midindex = min + max / 2 -> (0 + 14) / 2 => 7(index), element = 8
// if array[midindex] < number(7)
// min = midIndex + 1;
// array[midindex] > number(7)
// max = midindex - 1 , min = 0 , max = 6 {1,2,3,4,5,6,7}
// {min + max}/2 -> 3
// index + 1 -> 4(min) , max = 6 {5,6,7}     using 4th line condition
// {min + max} / 2 => 5  as it is less than 7, 5 + 1 => 6, now min =6,max=6
// {min + max }/2 => 6 
// else midindex -> output => 7

function binsearch(array,number) {
    let min = 0 
    let max = array.length -1
    while(min <= max) {
        let midIndex = Math.floor((min + max) /2);
        //console.log("midindex"  +  midIndex  + "min"  +  min  +  "max"  +  max)
        if(array[midIndex] < number) {
            min = midIndex + 1;
        } else if(array[midIndex] > number) {
            max = midIndex -1 
        } else {
            return midIndex
        }

    }
    return -1 ;
}
const result = binsearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],7)
console.log(result)

// Binary time complexity O(log(n))
