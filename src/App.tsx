import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalStyle, ThemeProvider, Row, Column } from "@amsterdam/asc-ui";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Kaart from "./components/Kaart";

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
                <Route path="/kaart" element={<Kaart />} />
              </Routes>
            </Column>
          </Row>

          <Row>
            <Column span={12}>
              <Footer />
            </Column>
          </Row>
        </Router>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
