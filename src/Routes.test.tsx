import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Routes from "./Routes";

describe("Routes", () => {
  it("route to home is defined", () => {
    render(
      <MemoryRouter initialEntries={["/home"]}>
        <Routes />
      </MemoryRouter>,
    );

    expect(screen.queryByTestId("home")).toBeInTheDocument();

    expect(screen.queryByTestId("map")).not.toBeInTheDocument();
  });

  it("route to map is defined", () => {
    render(
      <MemoryRouter initialEntries={["/kaart"]}>
        <Routes />
      </MemoryRouter>,
    );

    expect(screen.queryByTestId("map")).toBeInTheDocument();

    expect(screen.queryByTestId("home")).not.toBeInTheDocument();
  });
});
