const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = (numbers) => { 
  let sum = 0;
  for (let i = 0; i < [...numbers].length; i++) {
    sum += parseInt(numbers[i]);
  }
  return sum;
};

const multiply = (numbers) => {
  let product = 1;
  for (let i = 0; i < [...numbers].length; i++) {
    product *= parseInt(numbers[i]);
  }
  return product;
};

const power = (base, exponent) => base**exponent;

const factorial = (number) => {
	if (number < 0) return undefined;
  if (number == 0) return 1;

  let n = number-1;

  while(n > 1) {
    number*=n;
    n--;
  }

  return number;
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
