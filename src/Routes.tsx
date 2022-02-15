import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Map from "./components/Map";

console.log("Routes");

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/kaart" element={<Map />} />
    </Routes>
  );
}

export default App;
