"use strict";

console.log("App.js is running");

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Choice App"
  ),
  React.createElement(
    "p",
    null,
    "This is some info."
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Item one"
    ),
    React.createElement(
      "li",
      null,
      "Item two"
    )
  )
);

var user = {
  name: "Jiyon",
  age: 42,
  location: "Sugar Land, TX"
};

var userName = "Jiyon";
var userAge = 42;
var userLocation = "Sugar Land, TX";

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
    user.location
  )
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
