"use strict";

console.log("App.js is running!");

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Jiyon Trammell"
  ),
  React.createElement(
    "p",
    null,
    "Age: 42"
  ),
  React.createElement(
    "p",
    null,
    "Location: Sugar Land"
  )
);
var appRoot = document.getElementById("app");
ReactDOM.render(templateTwo, appRoot);
