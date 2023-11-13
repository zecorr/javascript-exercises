const sumAll = function(...args) {
    let first, last

    if (args[0] < 0 || args[1] < 0){return "ERROR"}
    if (!Number.isInteger(args[0]) || !Number.isInteger(args[1])){return "ERROR"}

    if(args[1] > args[0]){
        last = args[1]
        first = args[0]
    } else if (args [0] > args[1]){
        last = args[0]
        first = args[1]
    }
    
    let arr = []
    while (arr[arr.length - 1] != last){
        arr.push(first ++)
    }

    let sum = 0
    arr.forEach(item => sum += item)
    return sum

};

// Do not edit below this line
module.exports = sumAll;
