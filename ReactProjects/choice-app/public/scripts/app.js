"use strict";

console.log("App.js is running");

var app = {
  title: "Choice App!",
  subtitle: "This is some info!"
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  React.createElement(
    "p",
    null,
    app.subtitle
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
  age: 42
};

function getLocation(location) {
  if (location) {
    return location;
  } else {
    return "Unknown";
  }
}

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
    getLocation(user.location)
  )
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
