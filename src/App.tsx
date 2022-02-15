import React from "react";
import { Route, Routes } from "react-router-dom";
import { Row, Column } from "@amsterdam/asc-ui";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Map from "./components/Map";

console.log("App");

function App() {
  return (
    <>
      <Row>
        <Column span={12}>
          <Header />
        </Column>
      </Row>

      <Row>
        <Column span={12}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/kaart" element={<Map />} />
          </Routes>
        </Column>
      </Row>

      <Footer />
    </>
  );
}

export default App;
