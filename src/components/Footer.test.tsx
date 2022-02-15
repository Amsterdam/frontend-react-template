import { render } from "@testing-library/react";
import { withTheme } from "../test/utils";
import Footer from "./Footer";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});


describe("Footer", () => {
  it("renders correctly", () => {
    render(withTheme(<Footer />));

    // expect(screen.getByTestId("footer")).toBeInTheDocument();

    // expect(screen.getByText("Home")).toBeInTheDocument();
    // expect(screen.getByText("Kaart")).toBeInTheDocument();
  });
});
