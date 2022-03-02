import { render, screen } from "@testing-library/react";
import { withTheme } from "../test/utils";
import Map from "./Map";

describe("Map", () => {
  it("renders correctly", () => {
    const { container } = render(withTheme(<Map />));

    expect(screen.queryByTestId("map")).toBeInTheDocument();

    // should have zoom controls
    expect(screen.queryByTestId("zoom")).toBeInTheDocument();

    // should have multiple leaflet panes
    expect(container.querySelectorAll(".leaflet-pane").length).toEqual(7);
    expect(container.querySelector(".leaflet-control-container")).toBeInTheDocument();
  });
});
