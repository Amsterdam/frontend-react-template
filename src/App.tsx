import React from "react";
import { GlobalStyle, ThemeProvider, Row, Column, Heading } from "@amsterdam/asc-ui";

console.log(1);
function App() {
  return (
    <React.StrictMode>
      <ThemeProvider>
        <GlobalStyle />
        <Row>
          <Column span={12}>
            <Heading>Home</Heading>
          </Column>
        </Row>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
