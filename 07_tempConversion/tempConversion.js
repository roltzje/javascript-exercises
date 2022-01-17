const ftoc = function(f) {
  let c = (f-32) * 5 / 9;
  return +c.toFixed(1);
};

const ctof = function(c) {
  let f = (c * 9 / 5) + 32;
  return +f.toFixed(1);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
