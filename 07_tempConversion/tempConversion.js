const ftoc = function(f) {
  let c = ((f-32)*5)/9;

  return parseFloat(c.toFixed(1));
};

const ctof = function() {

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
