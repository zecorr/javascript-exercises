const convertToCelsius = function(temp) {
  let num = (temp - 32) / 1.8
  let rounded = Math.round(num * 10) / 10
  return rounded
};

const convertToFahrenheit = function(temp) {
  let num = (temp * (9/5)) + 32
  let rounded = Math.round(num * 10) / 10
  return rounded

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
