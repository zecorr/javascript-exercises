const palindromes = function (str) {
    const regex = /\W/ // filter non word characters
    const forward = str.split(regex).join('').toLowerCase()
    const reverse = str.split(regex).join('').split('').reverse().join('').toLowerCase()
    return forward === reverse
};

// Do not edit below this line
module.exports = palindromes;
