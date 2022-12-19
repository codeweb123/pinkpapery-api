console.log("App.js is running");

var template = (
  <div>
    <h1>Choice App</h1>
    <p>This is some info.</p>
  </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
