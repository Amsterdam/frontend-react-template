import React from "react";
import { Row, Column } from "@amsterdam/asc-ui";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Routes from "./Routes";

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
          <Routes />
        </Column>
      </Row>

      <Footer />
    </>
  );
}

export default App;
