console.log("App.js is running!!!!!");

const app = {
  title: "Choice App!",
  subtitle: "This is some info!",
};

const template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

const user = {
  name: "Jiyon",
  age: "42",
  location: "Sugar Land",
};

function getLocation(location) {
  if (location) {
    return <p> Location: {location}</p>;
  }
}

const templateTwo = (
  <div>
    <h1>{user.name ? user.name : "anonymous"}</h1>
    {user.age && user.age >= 18 && <p>Age: {user.age} </p>}
    {getLocation(user.location)}
  </div>
);

const appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
