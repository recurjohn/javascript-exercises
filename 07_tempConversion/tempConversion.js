const ftoc = function(fahrenheit) {
  fahrenheit = ((fahrenheit - 32) * (5/9));

  if (Number.isInteger(fahrenheit) == false) {
    fahrenheit = Number(fahrenheit.toFixed(1));
  }
  return fahrenheit;
};

const ctof = function(celsius) {
  celsius = (celsius * (9/5) + 32);

  if (Number.isInteger(celsius) == false) {
    celsius = Number(celsius.toFixed(1));
  }
  return celsius;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
