const reverseString = function(string) {
  let reversed = '';

  for (let i = 0; i < string.length; i++){
    reversed = string.charAt(i) + reversed;
  }
  return reversed;
};

// Do not edit below this line
module.exports = reverseString;
