import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <div className="container">
        <List people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
      </div>
    </main>
  );
}

export default App;
