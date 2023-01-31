const App = () => {
  const pets = [
    {
      id: 1,
      name: "Bear",
      img:
    }
  ];

  return (
    <div className="login-container">
        <div className="pets">
          {pets.map(({name})=> (
            <div className="pet-container">
            {/* <img />*/}
            <h2>{title}</h2>
            </div>)
          )}
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
      <button></button>
    </div>
  );
};

export default App;
