const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { class: "title" }, "React IS rendered"),
    React.createElement(Person, { name: "Jiyon", occupation: "teacher" }, null),
    React.createElement(Person, { name: "Eric", occupation: "teacher" }, null),
    React.createElement(Person, { name: "Madi", occupation: "teacher" }, null),
    React.createElement(
      Person,
      { name: "Claire", occupation: "teacher" },
      null
    ),
  ]);
};

const Person = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.occupation),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
