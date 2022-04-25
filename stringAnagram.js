// String Anagram
// 'hello' => 'elloh'

// conditions
//length check (for both string)
// String 'hello'
// {h:1,e:1.l:2,o:1}

function isAnagram(string1,string2) {
    if(string1.length!== string2.length) {
        console.log("Length not matched");
    }
    let counter ={}
    for(let letter of string1) {
        counter[letter] = (counter[letter] || 0) + 1;
        console.log(counter[letter])
    }
    
    for(let items of string2) {
        if(!counter[items]) {
            return false;
        }
        counter[items] -= 1
    }
    return true
}

const result = isAnagram('shivams','vamihss')
console.log(result)


// O(n) linear time complexity