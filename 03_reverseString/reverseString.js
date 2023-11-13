const reverseString = function(str) {
    let splitStr = str.split("")
    let reverseStr = splitStr.reverse()
    let joinStr = reverseStr.join("")
    return joinStr
};


// Do not edit below this line
module.exports = reverseString;
