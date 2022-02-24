import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { withTheme } from "./test/utils";
import { ThemeProvider } from "@amsterdam/asc-ui";

import App from "./App";

describe("App", () => {
  it("renders correctly", () => {
    render(withTheme(<App />));

    expect(screen.queryByTestId("header")).toBeInTheDocument();
    expect(screen.queryByTestId("footer")).toBeInTheDocument();
  });

  it("route to home is defined", () => {
    render(
      <ThemeProvider>
        <MemoryRouter initialEntries={["/home"]}>
          <App />
        </MemoryRouter>
      </ThemeProvider>,
    );

    expect(screen.queryByTestId("home")).toBeInTheDocument();

    expect(screen.queryByTestId("map")).not.toBeInTheDocument();
  });

  it("route to map is defined", () => {
    render(
      <ThemeProvider>
        <MemoryRouter initialEntries={["/kaart"]}>
          <App />
        </MemoryRouter>
      </ThemeProvider>,
    );

    expect(screen.queryByTestId("map")).toBeInTheDocument();

    expect(screen.queryByTestId("home")).not.toBeInTheDocument();
  });
});
