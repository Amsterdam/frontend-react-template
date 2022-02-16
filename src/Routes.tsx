import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Map from "./pages/Map";


function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/kaart" element={<Map />} />
    </Routes>
  );
}

export default App;
