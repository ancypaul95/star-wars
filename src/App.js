import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Film from "./components/films";
import People from "./components/people";
import Planets from "./components/planets";
import Species from "./components/species";
import Starships from "./components/starships";
import Vehicles from "./components/vehicles";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/films" element={<Film />} />
        <Route path="/people" element={<People />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/species" element={<Species />} />
        <Route path="/starships" element={<Starships />} />
        <Route path="/vehicles" element={<Vehicles />} />
      </Routes>
    </>
  );
}

export default App;
