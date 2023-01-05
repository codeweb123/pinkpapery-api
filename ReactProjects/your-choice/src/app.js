console.log("App.js is running!");

var user = {
  name: "Andrew",
  age: 26,
  location: "Philly",
};

var userName = "Maddie";
var userAge = 27;
var userLocation = "Phily";

var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location} </p>
  </div>
);

var appRoot = document.getElementById("app");
ReactDOM.render(templateTwo, appRoot);
