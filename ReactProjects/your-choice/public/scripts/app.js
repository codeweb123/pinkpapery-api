"use strict";

console.log("App.js is running!");

var user = {
  name: "Andrew",
  age: 26,
  location: "Philly"
};

var userName = "Maddie";
var userAge = 27;
var userLocation = "Phily";

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name
  ),
  React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  React.createElement(
    "p",
    null,
    "Location: ",
    user.location,
    " "
  )
);

var appRoot = document.getElementById("app");
ReactDOM.render(templateTwo, appRoot);
