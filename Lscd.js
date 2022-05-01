// Problem -> Largest sum of consecutive digits
// Input -> [1,2,3,4,3,5,4,6,7,8] -> Total elements - 20
// num =4
// sum = 25

// conditions
// num > array -> error msg
// 10 - 4 + 1 -> 7   loop counting formula -< totakl elem - how many number + 1

function findlargest(arr,num) 
{
    if(num > arr) 
    {
        throw new Error("num is not greater than array")
    } 
    else 
    {
        let max  = 0;
        for(let i = 0; i< arr.length - num + 1; i++) 
        {
            let tmp = 0;
            for(let j = 0;j< num;j++) 
            {
                tmp += arr[i + j]
            }
            if(tmp > max) 
            {
                max = tmp;
            }
        }
        return max
    }
}

 const result = findlargest([1,2,3,4,3,5,4,6,7,8],4)
 console.log("result =>",result)


