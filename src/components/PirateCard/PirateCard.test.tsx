import { screen } from "@testing-library/dom";
import { fullPiratesStateMock } from "../../mocks/pirate/pirateMocks";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import PirateCard from "./PirateCard";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";

describe("Given a PirateCard component", () => {
  const actionOnClick = vi.fn();
  const isLooged = false;
  describe("When it's rendered", () => {
    test("Then it should show a heading with 'Wanted' text, a heading with 'Dead or Alive' text and a heading with 'Roronoa Zoro' text", () => {
      const text = "WANTED";
      const subtitleText = "Dead or Alive";
      const name = "Roronoa Zoro";

      renderWithProviders(
        wrapWithRouter(
          <PirateCard
            showUserView={isLooged}
            actionOnClick={actionOnClick}
            pirate={fullPiratesStateMock[1]}
          />
        )
      );

      const expectedTitle = screen.getByRole("heading", {
        name: text,
      });

      const expectedSubtitle = screen.getByRole("heading", {
        name: subtitleText,
      });

      const expectedName = screen.getByRole("heading", {
        name: name,
      });

      expect(expectedTitle).toBeInTheDocument();
      expect(expectedSubtitle).toBeInTheDocument();
      expect(expectedName).toBeInTheDocument();
    });

    test("Then it should show a span with 320000000", () => {
      const bounty = 320000000;

      renderWithProviders(
        wrapWithRouter(
          <PirateCard
            showUserView={isLooged}
            actionOnClick={actionOnClick}
            pirate={fullPiratesStateMock[1]}
          />
        )
      );

      const expectedSpan = screen.getByText(bounty);

      expect(expectedSpan).toBeInTheDocument();
    });

    test("Then it should show a Pirate Roronoa Zoro image", () => {
      const image = "Pirate Roronoa Zoro";

      renderWithProviders(
        wrapWithRouter(
          <PirateCard
            showUserView={isLooged}
            actionOnClick={actionOnClick}
            pirate={fullPiratesStateMock[1]}
          />
        )
      );

      const expectedImage = screen.getByRole("img", {
        name: image,
      });

      expect(expectedImage).toBeInTheDocument();
    });

    test("Then it should call the action on click action", async () => {
      const isLogged = true;
      renderWithProviders(
        wrapWithRouter(
          <PirateCard
            showUserView={isLogged}
            actionOnClick={actionOnClick}
            pirate={fullPiratesStateMock[1]}
          />
        )
      );

      const buttonAriaLabel = "delete";

      const deleteButton = screen.getByLabelText(buttonAriaLabel);

      await userEvent.click(deleteButton);

      expect(deleteButton).toBeInTheDocument();
    });
  });
});
