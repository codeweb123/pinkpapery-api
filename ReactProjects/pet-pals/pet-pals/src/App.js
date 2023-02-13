import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Pets from "./components/pets/pets.component";
import Authentication from "./routes/authentication/authentication.component";
import { Fragment } from "react";

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

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
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
