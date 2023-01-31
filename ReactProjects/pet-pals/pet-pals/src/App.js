import "./pets.styles.scss";

const App = () => {
  const pets = [
    {
      id: 1,
      name: "Bear",
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
        {pets.map(({ name, id }) => (
          <div key={id} className="pet-container">
            <div className="pet-body-container">
              {/* <img />*/}
              <h2>{name}</h2>
            </div>
          </div>
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
