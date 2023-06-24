import { screen } from "@testing-library/react";
import Layout from "./Layout";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";

describe("Given a Layout component", () => {
  describe("When it's rendered", () => {
    test("Then it should two links", () => {
      renderWithProviders(wrapWithRouter(<Layout />));

      expect(screen.getByText("Login")).toBeInTheDocument();
      expect(screen.getByText("Pirates")).toBeInTheDocument();
    });
  });

  describe("When it was rendered, but it's experiencing significant delays to charge the page", () => {
    test("Then it should show a spinner", () => {
      const expectedLabelText = "spinner";

      renderWithProviders(wrapWithRouter(<Layout />), {
        ui: { isLoading: true },
      });

      const loadingSpinner = screen.getByAltText(expectedLabelText);

      expect(loadingSpinner).toBeInTheDocument();
    });
  });

  describe("When it was rendered with a feedback modal", () => {
    test("Then it should show a feedback modal with an icon with the text 'successful icon'", () => {
      const expectedLabelText = "successful icon";

      renderWithProviders(wrapWithRouter(<Layout />), {
        ui: { showFeedback: true },
      });

      const showFeedback = screen.getByAltText(expectedLabelText);

      expect(showFeedback).toBeInTheDocument();
    });
  });
});
