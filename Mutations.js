function mutation(arr) {
    return arr[1]
            .toLowerCase()
            .split("")
            .every(function(letter) {
                return arr[0].toLowerCase().indexOf(letter) !== -1;
            });
}

console.log(mutation(["hello", "hey"]))


//In FUnctional Programming changing or altering things is mutation and the outcome of mutation is called a side effect


