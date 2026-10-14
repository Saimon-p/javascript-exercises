const convertToCelsius = function(fahrenheit) {
  let n = (fahrenheit - 32) * (5/9);
  return Math.round(n * 10) /10;
};

const convertToFahrenheit = function(celsius) {
  let n = (celsius * (9/5)) + 32;
  return Math.round(n * 10) /10;
};

console.log(convertToCelsius(-20));
console.log(convertToFahrenheit(121));


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
