import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalStyle, ThemeProvider, Row, Column } from "@amsterdam/asc-ui";
import Header from "./components/Header";

console.log(1);
function App() {
  return (
    <React.StrictMode>
      <ThemeProvider>
        <GlobalStyle />

        <Router>
          <Routes>
            <Route path="/home" element={<div />} />
            <Route path="/kaart" element={<div />} />
          </Routes>

          <Row>
            <Column span={12}>
              <Header />
            </Column>
          </Row>
        </Router>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
