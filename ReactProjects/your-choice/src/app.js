console.log("App.js is running!");

var templateTwo = (
  <div>
    <h1>Jiyon Trammell</h1>
    <p>Age: 42</p>
    <p>Location: Sugar Land</p>
  </div>
);
var appRoot = document.getElementById("app");
ReactDOM.render(templateTwo, appRoot);
