const sumAll = function (low, high) {
  let temp;

  let sum = 0;

  if (low < 0 || high < 0) {
    
    return 'ERROR';

  } else if (typeof (low) != 'number' || typeof (high) != 'number') {
    
    return 'ERROR';

  } else {

    if (low > high) {
      temp = low;
      low = high;
      high = temp;
    }

    for (i = low; i <= high; i++) {
      sum = sum + i;
    }

    return sum;
  }

};

// Do not edit below this line
module.exports = sumAll;
