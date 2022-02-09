import { render, screen } from "@testing-library/react";
import { withTheme } from "../test/utils";
import Map from "./Map";

describe("Map", () => {
  it("renders correctly", () => {
    const { container } = render(withTheme(<Map />));

    expect(screen.getByTestId("map")).toBeInTheDocument();

    expect(container.querySelectorAll(".leaflet-pane").length).toEqual(7);
    expect(container.querySelector(".leaflet-control-container")).toBeInTheDocument();
  });
});
