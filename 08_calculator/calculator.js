const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {
  let sum = 0;
	numbers.forEach(number => {
    sum += number;
  });
  return sum;
};

const multiply = function(numbers) {
  if (numbers.length == 0) return 0;
  let product = 1;
	numbers.forEach(number => {
    product *= number;
  });
  return product;
};

const power = function(num1, num2) {
  let pow = 1;
	for (let i = 0; i < num2; i++)
  {
    pow *= num1;
  }
  return pow;
};

const factorial = function(num1) {
	let pow = 1;
	for (let i = 1; i <= num1; i++)
  {
    pow *= i;
  }
  return pow;
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
