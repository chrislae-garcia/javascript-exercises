const fibonacci = number => {

  if (number < 0) return "OOPS";

  let array = [];

  index = parseInt(number) - 1;

  for (i = 0; i <= index; i++) {
    if (i <= 1) 
      array.push(1);
    else 
      array.push(array.at(-2) + array.at(-1));
  }

  return array[index];
};

// Do not edit below this line
module.exports = fibonacci;
