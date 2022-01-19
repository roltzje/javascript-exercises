const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
	answer = 0;
  array.forEach( element => answer = answer + element);
  return answer;
};

const multiply = function(array) {
  answer = 1;
  array.forEach( element => answer = answer * element);
  return answer;
};

const power = function(a,b) {
  answer = 1;
  for (i = 0; i < b; i++) {
    answer = answer * a;
  }
  return answer;
};

const factorial = function(a) {
  answer = 1;
  if (a > 0) {
    for (i = 1; i < a+1; i++) {
      answer = answer * i;
    }
  }
  return answer;
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
