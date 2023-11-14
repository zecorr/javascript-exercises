const add = (a, b) => a + b

const subtract = (a, b) => a - b

const sum = num => num.reduce((acc, curr) => acc + curr, 0);

const multiply = num => num.reduce((acc, curr) => acc * curr, 1)

const power = function(a, b) {
	return Math.pow(a, b)
};

const factorial = num => {
  if (num < 0) return -1;
  else if (num == 0 ) return 1;
  else {return (num * factorial(num -1))}
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
