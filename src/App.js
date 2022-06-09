import "./App.css";

import { Route, Routes } from "react-router";
import Rockets from "./components/Rockets";
import RocketList from "./components/RocketList";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route strict exact path="/" element={<RocketList />} />
        <Route strict exact path="/:id" element={<Rockets />} />

      </Routes>
    </div>
  );
}

export default App;
