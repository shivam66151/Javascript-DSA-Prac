// Using Map function

function titleCase(str) {
    return str
           .toLowerCase()
           .split(" ")
           .map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
           .join(" ")
}

console.log(titleCase("I'm a little tea pot"))


//Using for loop

const str = 'i have learned new things today'

const arr  = str.split(" ")

for (var i = 0; i <arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}

const str2 = arr.join(" ")
console.log(str2);