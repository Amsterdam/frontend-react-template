import { render, screen } from "@testing-library/react";
import { withTheme } from "../test/utils";
import Header from "./Header";

describe("Header", () => {
  it("renders correctly", () => {
    render(withTheme(<Header />));

    expect(screen.getByTestId("header")).toBeInTheDocument();

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Kaart")).toBeInTheDocument();
  });
});
