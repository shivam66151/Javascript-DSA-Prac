//Checking sum zero -- Problem 1
//[-5,-4,-3,-2,0,2,4,6,8] => input
// [?,?] => output


// Optimized solution

// function SumZeroPair(arr) {
//  let left = 0;
//  let right = arr.length - 1;
 
//  while(left < right) {
//      sum = arr[left] + arr[right];
//      if(sum===0) {
//          return [arr[left],arr[right]]
//      } else if(sum > 0) {
//          right--
//      } else {
//          left ++
//      }
//  }
// }

// let result = SumZeroPair([-5,-4,-3,-2,0,2,4,6,8])
// console.log(result)


// if arr is not sorted

let arr = [-5,-3,-1,0,2,4,6,8,-4]

function findPair(arr) {
    let pair = [];
    for (let i =0;i < arr.length;i++) {
        let x = -arr[i]
        if(pair[x]) {
            return [x,arr[i]];
        }
        pair[arr[i]] = 1
    }
    return [];
}

const pair = findPair(arr)
console.log(pair)
