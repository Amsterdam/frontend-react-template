import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalStyle, ThemeProvider, Row, Column } from "@amsterdam/asc-ui";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Map from "./components/Map";

console.log(1);
function App() {
  return (
    <React.StrictMode>
      <ThemeProvider>
        <GlobalStyle />

        <Router>
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
        </Router>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
