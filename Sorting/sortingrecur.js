// Sorting using recursion
// [2,3,1,4]  => Default case
// [2,1,3,4] => case 1
// [1,2,3,4] => case 2

let myArray = [2,3,1,4];
myNewList = []
let i = 0;
let j = 1;

function isSorted(array) {
    for(let i =0; i < array.length;i++) {
        if(array[i] > array[i + 1]) {
            return false;
        }
    }
    return true;
}


function sortedcheck(array) {
     if(isSorted(array)) {
         myNewList = array;
         return;
     }
     else if(array[i] < array[j]) {
         i++;
         j++;
         sortedcheck(array);
     }
     else {
         [array[i],array[j]] = [array[j], array[i]]
         i = 0;
         j = 1;
         sortedcheck(array)
     }
}

sortedcheck(myArray)
console.log(myNewList)


