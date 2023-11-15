const fibonacci = function(num) {
    const arr = [1, 1]
    let newNum
    if (num < 1) return "OOPS"
    else if(num == 1) return 1
    else if (num == 2) return 1
    else {
        while(arr.length < num){
            newNum = arr[arr.length - 1] + arr[arr.length - 2]
            arr.push(newNum)
        }
    }
    return newNum
};

// Do not edit below this line
module.exports = fibonacci;
