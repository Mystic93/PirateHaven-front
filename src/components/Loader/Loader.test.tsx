import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Loader from "./Loader";

describe("Given a Loader component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a loader", () => {
      const expectedAltText = "spinner";

      renderWithProviders(wrapWithRouter(<Loader />));

      const loader = screen.getByRole("img", { name: expectedAltText });

      expect(loader).toBeInTheDocument();
    });
  });
});
