console.log("App.js is running!");

var app = {
  title: "Hello",
  subtitle: "There",
};

var user = {
  name: "Jiyon",
  age: 42,
  location: "Philly",
};

var userName = "Maddie";
var userAge = 27;
var userLocation = "Phily";

var template = (
  <div>
    <h1>Choice App</h1>
    <p>This is some info</p>
    <ol>
      <li>{app.title}</li>
      <li>{app.subtitle}</li>
    </ol>
  </div>
);

function getLocation(location) {
  if (location) {
    return <p>Location: {location} </p>;
  }
}

var templateTwo = (
  <div>
    <h1>{user.name ? user.name : "Anonyous"}</h1>
    {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

var appRoot = document.getElementById("app");
ReactDOM.render(templateTwo, appRoot);
