import { render, screen } from "@testing-library/react";
import { withTheme } from "../test/utils";
import Home from "./Home";

describe("Home", () => {
  it("renders correctly", () => {
    render(withTheme(<Home />));

    expect(screen.queryByTestId("home")).toBeInTheDocument();
    expect(screen.queryByText("Home")).toBeInTheDocument();
  });
});
