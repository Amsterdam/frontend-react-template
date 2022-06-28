import React from "react";
import { Row, Column } from "@amsterdam/asc-ui";
import Routes from "./Routes";
import Header from "./components/Header";
import Footer from "./components/Footer";

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

      <Row>
        <Column span={12}>
          <Footer />
        </Column>
      </Row>
    </>
  );
}

export default App;
