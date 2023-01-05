"use strict";

console.log("App.js is running!");

var app = {
  title: "Hello",
  subtitle: "There"
};

var user = {
  name: "Andrew",
  age: 26,
  location: "New York"
};

var userName = "Maddie";
var userAge = 27;
var userLocation = "Phily";

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
    "This is some info"
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      app.title
    ),
    React.createElement(
      "li",
      null,
      app.subtitle
    )
  )
);

function getLocation(location) {
  if (location) {
    return React.createElement(
      "p",
      null,
      "Location: ",
      location,
      " "
    );
  }
}

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name ? user.name : "Anonyous"
  ),
  React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById("app");
ReactDOM.render(templateTwo, appRoot);
