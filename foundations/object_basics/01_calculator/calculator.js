const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	let result = a - b;
  return result;
};

const sum = function(arr = []) {
	let result = arr.reduce((accumulator, item) => {
    return accumulator + item;
  }, 0)
  return result;
};

const multiply = function(arr = []) {
  	let result = arr.reduce((accumulator, item) => {
    return accumulator * item;
  }, 1)
  return result;
};

const power = function(base, exponent) {
  return Math.pow(base, exponent);
};

const factorial = function(num) {
	if(num === 0){
    return 1;
  } else if(num === 1){
    return 1;
  } else {
    let result = 1;
    for (let i = 0; i < num; i++) {
      result *= num - i;
    }
    return result;
  }
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
