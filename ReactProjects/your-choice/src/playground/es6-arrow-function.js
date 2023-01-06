const square = function (x) {
  return x * x;
};

const squareArrow = (x) => x * x;

console.log(squareArrow(8));

const getFirstName = (fullName) => {
  return fullName.split(" ")[0];
};

const user = {
  name: "Andrew",
  cities: ["Philly", "New York", "Dublin"],
  printPlacesLived() {
    return this.cities.map((city) => this.name + " has lived in " + city);
  },
};

console.log(user.printPlacesLived());

const multiplier = {
  numbers: [1, 2, 3],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  },
};
console.log(multiplier.multiply());
