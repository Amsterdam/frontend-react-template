import "../test/matchMedia.mock";
import { render, screen } from "@testing-library/react";
import { withTheme } from "../test/utils";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders correctly", () => {
    render(withTheme(<Footer />));

    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});
