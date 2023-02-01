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
      <h2>Petpal Land</h2>
      <div className="pets-choice-container">
        {pets.map(({ name }) => (
          <div className="pet-container">
            <div className="background-image">
              <div className="pet-body-container">
                <h2>{name}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
