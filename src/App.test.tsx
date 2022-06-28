import { render, screen } from "@testing-library/react";
import { withTheme } from "./test/utils";

import App from "./App";

describe("App", () => {
  it("renders correctly", () => {
    render(withTheme(<App />));

    expect(screen.queryByTestId("header")).toBeInTheDocument();
    expect(screen.queryByTestId("footer")).toBeInTheDocument();
  });
});
