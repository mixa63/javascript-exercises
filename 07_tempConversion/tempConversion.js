const convertToCelsius = function(temp) {
  conversion = (temp - 32) * 5/9;
  return parseFloat(conversion.toFixed(1));
};

const convertToFahrenheit = function(temp) {
  conversion = temp * 9/5 + 32;
  return parseFloat(conversion.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
