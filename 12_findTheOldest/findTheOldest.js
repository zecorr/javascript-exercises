const findTheOldest = function(arr) {
    const ages = []
    // Push ages of all people into ages array
    arr.forEach( obj => {
        if(obj.yearOfDeath == undefined){obj.yearOfDeath = new Date().getFullYear()} // add current year if still alive
        ages.push(obj.yearOfDeath - obj.yearOfBirth) // calculate current age in years and push to ages array
    })
    
    // Copy and sort contents of ages array because sort() will manipulate the original ages array
    newAges = [...ages] // now only newAges array gets manipulated after copying everything from ages array
    const sorted = newAges.sort((a, b) => a - b) // sort numerically 
    const highest = sorted[sorted.length - 1] // get highest age

    // Get index number from oldest person
    let newIndex
    ages.forEach((age, index) => {
        if(age == highest){newIndex = index}
    })
    return arr[newIndex]
};

// Do not edit below this line
module.exports = findTheOldest;
