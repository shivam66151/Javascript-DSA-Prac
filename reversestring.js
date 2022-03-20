function reversestring(str) {
    return str
             .split('')
             .reverse()
             .join('');
}

console.log(reversestring("Hello"))

// USing Loop


function reverse(str){
    var rtnStr = '';
    for(var i = str.length-1; i>=0;i--){
      rtnStr +=str[i];
    }
    return rtnStr;
  }

  console.log(reverse("Hello World"))
  
