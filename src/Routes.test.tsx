import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { ThemeProvider } from "@amsterdam/asc-ui";

import Routes from "./Routes";

describe("App", () => {
  it("redirect from / to home is defined", () => {
    render(
      <ThemeProvider>
        <MemoryRouter initialEntries={["/"]}>
          <Routes />
        </MemoryRouter>
      </ThemeProvider>,
    );

    expect(screen.queryByTestId("home")).toBeInTheDocument();

    expect(screen.queryByTestId("map")).not.toBeInTheDocument();
  });

  it("route to home is defined", () => {
    render(
      <ThemeProvider>
        <MemoryRouter initialEntries={["/home"]}>
          <Routes />
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
          <Routes />
        </MemoryRouter>
      </ThemeProvider>,
    );

    expect(screen.queryByTestId("map")).toBeInTheDocument();

    expect(screen.queryByTestId("home")).not.toBeInTheDocument();
  });
});
