const reverseString = function(str) {
    let newStr = "";
    for (i = -1; i >= -str.length; i--) {
        let char = str.substr(i,1);
        newStr = newStr + char;
    }
    return (newStr);
}

// Do not edit below this line
module.exports = reverseString;