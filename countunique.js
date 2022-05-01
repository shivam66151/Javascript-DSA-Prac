// Problem => Count Unique Numbers
//        i j
// Input [1,1,2,2,3,4,4,5,6,7,8,8]    // Sorted array

// Output => 8

function countUnique(arr) {
    if(arr.length > 0) {
        let i = 0;
        for(let j = 1; j < arr.length; j++) {
            if(arr[i]!==arr[j])  {
                i++;
                arr[i] = arr[j]
            }
        } return i + 1
    } else {
        throw new Error("Array is empty");
    }

}

const result = countUnique([1,1,2,2,3,4,4,5,6,7,8,8,9,9,9])
console.log(result)


// O(n)  linear time complexity

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Second Method

// function countUnique(arr) {
//     let uniquenum = {};

//     for(number of arr) {
//         uniquenum[number] = number;
//     }

//     return Object.values(uniquenum);
// }

// const result = countUnique([1,1,2,2,3,4,4,5,6,7,8,8,9,9,9])
//  console.log(result)

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Third method using map function 


// const findUnique = (arr) => {

//     const map = new Map();

//     for(let elem of arr) {
//         if(!map.has(elem))map.set(elem,elem)
//     }
//     return map
// }

// console.log(findUnique([1,1,2,2,3,4,4,5,6,7,8,8,9,9,9]))
