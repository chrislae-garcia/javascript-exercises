const ftoc = function(f) {
  let c = ((f-32)*5)/9;

  return parseFloat(c.toFixed(1));
};

const ctof = function(c) {
  let f = (1.8 * c) + 32;

  return parseFloat(f.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
