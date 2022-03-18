
//Falsy is something which evaluates to FALSE. 
// There are only six falsy values in JavaScript:
//  undefined, null, NaN, 0, “” (empty string), and false of course.

//Here we are removing all the falsy values from an array

//Using for loop

// function bouncer(arr) {
    //     let newArray = [];
    //     for (let i = 0; i < arr.length; i++) {
        //       if (arr[i]) newArray.push(arr[i]);
        //     }
        //     return newArray;
        //   }
   
        
//Using high order function
    function bouncer(arr) {
        return arr.filter(Boolean);
          }
          
    console.log(bouncer([7, "ate", "", false, 9]))

    