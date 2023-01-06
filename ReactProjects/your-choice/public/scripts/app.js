"use strict";

var square = function square(x) {
  return x * x;
};

var squareArrow = function squareArrow(x) {
  return x * x;
};

console.log(squareArrow(8));

var getFirstName = function getFirstName(fullName) {
  return fullName.split(" ")[0];
};

var user = {
  name: "Andrew",
  cities: ["Philly", "New York", "Dublin"],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    return this.cities.map(function (city) {
      return _this.name + " has lived in " + city;
    });
  }
};

console.log(user.printPlacesLived());

var multiplier = {
  numbers: [1, 2, 3],
  multiplyBy: 2,
  multiply: function multiply() {
    var _this2 = this;

    return this.numbers.map(function (number) {
      return number * _this2.multiplyBy;
    });
  }
};
console.log(multiplier.multiply());
