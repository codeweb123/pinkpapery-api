import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Pets from "./components/pets/pets.component";
import Authentication from "./routes/authentication/authentication.component";
import { Fragment } from "react";
import PickAPet from "./routes/pick-a-pet/pick-a-pet.component";
import PickALand from "./routes/pick-a-land/pick-a-land.component";
import Game from "./routes/game/game.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route
          index
          element={
            <>
              {" "}
              <Pets /> <Authentication />{" "}
            </>
          }
        />
        <Route path="pet" element={<PickAPet />} />
        <Route path="land" element={<PickALand />} />
        <Route path="game" element={<Game />} />
      </Route>
    </Routes>
  );
};

export default App;
