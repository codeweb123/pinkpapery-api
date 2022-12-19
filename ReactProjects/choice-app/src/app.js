console.log("App.js is running");

var template = (
  <div>
    <h1>Choice App</h1>
    <p>This is some info.</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

var user = {
  name: "Jiyon",
  age: 42,
  location: "Sugar Land, TX",
};

var userName = "Jiyon";
var userAge = 42;
var userLocation = "Sugar Land, TX";

var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
