import "../matchMedia.mock";
import { render } from "@testing-library/react";
import { withTheme } from "../test/utils";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders correctly", () => {
    render(withTheme(<Footer />));

    // expect(screen.getByTestId("footer")).toBeInTheDocument();

    // expect(screen.getByText("Home")).toBeInTheDocument();
    // expect(screen.getByText("Kaart")).toBeInTheDocument();
  });
});
