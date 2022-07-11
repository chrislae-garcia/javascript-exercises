const palindromes = function (string) {
  let reversedString = "";
  let originalString = "";
  let loweredString = string.toLowerCase();
  
  // Ommit special characters and spaces of the original string
  for (let i = 0; i < loweredString.length; i++){
    // Check if each character is between 'a' to 'z'
    if ((loweredString.charCodeAt(i) > 96) && (loweredString.charCodeAt(i) < 123)) {
      // Build the reversed string
      reversedString = loweredString.charAt(i) + reversedString;
      
      // Build the original string
      originalString += loweredString.charAt(i);
    }
  }

  // Validate if there is at least one character that is not 
  //    equal between the reversed and original strings
  for (let i = 0; i < reversedString.length; i++) {
    if (reversedString.charCodeAt(i) != originalString.charCodeAt(i)) return false;
  }

  return true;
};

// Do not edit below this line
module.exports = palindromes;
