const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { class: "title", key: 3 }, "React IS rendered"),
    React.createElement(
      Person,
      { name: "Jiyon", occupation: "teacher", key: 4 },
      null
    ),
    React.createElement(
      Person,
      { name: "Eric", occupation: "teacher", key: 5 },
      null
    ),
    React.createElement(
      Person,
      { name: "Madi", occupation: "teacher", key: 6 },
      null
    ),
    React.createElement(
      Person,
      { name: "Claire", occupation: "teacher", key: 8 },
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
