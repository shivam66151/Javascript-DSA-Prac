function reversestring(str) {
    return str
             .split('')
             .reverse()
             .join('');
}

console.log(reversestring("Hello"))