import "./pets.styles.scss";

const App = () => {
  const pets = [
    {
      id: 1,
      name: "Bear",
      imageUrl: "https://i.imgur.com/XX6jpgP.png",
    },
    {
      id: 2,
      name: "Bird",
    },
    {
      id: 3,
      name: "Cat",
    },
    {
      id: 4,
      name: "Rabbit",
    },
    {
      id: 5,
      name: "Dog",
    },
  ];

  return (
    <div className="login-container">
      <div className="pets-choice-container">
        {pets.map(({ name, id, imageUrl }) => (
          
        ))}
      </div>
      <div className="login-body-container">
        <h2>Petpal Land</h2>
      </div>
      <div className="input-container">
        <div>
          <input></input>
          <input></input>
        </div>
      </div>
      <button className="btn"></button>
    </div>
  );
};

export default App;
