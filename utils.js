function generateRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

function celsiusToFahrenheit(celsius) {
  return celsius * 1.8 + 32;
}

module.exports = {
  generateRandomNumber,
  celsiusToFahrenheit,
};
