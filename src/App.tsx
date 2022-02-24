import React from "react";
import { Row, Column } from "@amsterdam/asc-ui";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Map from "./pages/Map";

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
