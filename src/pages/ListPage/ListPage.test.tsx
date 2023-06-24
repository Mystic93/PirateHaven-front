import { screen } from "@testing-library/react";
import ListPage from "./ListPage";
import { renderWithProviders } from "../../utils/testUtils";

describe("Given a ListPage component", () => {
  renderWithProviders(<ListPage />);
  describe("When it's rendered", () => {
    test("Then it should show 'Explore Pirates' in a heading", () => {
      const headingText = "Explore Pirates";

      const heading = screen.getByRole("heading", {
        name: headingText,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
