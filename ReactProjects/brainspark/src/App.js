import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
//|| Outlet renders out <Routes> </Routes>
//|| Navigation is top level component
const Shop = () => {
  return <h1> I am the shop page</h1>;
};
//|| Nested route
//|| Index pattern matches the path '/'
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
