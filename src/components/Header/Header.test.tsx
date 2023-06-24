import Header from "./Header";
import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";

describe("Given a Header Component", () => {
  describe("When it's rendered' ", () => {
    test("Then it should show an image with alternative text 'logo' and a text 'Pirate Haven' ", () => {
      renderWithProviders(wrapWithRouter(<Header />));

      const logo = screen.getByRole("img", { name: "logo" });

      expect(screen.getByText("Pirate Haven")).toBeInTheDocument();
      expect(logo).toBeInTheDocument();
    });
  });
});
