import { screen } from "@testing-library/dom";
import { fullPiratesStateMock } from "../../mocks/pirate/pirateMocks";
import { renderWithProviders } from "../../utils/testUtils";
import PiratesList from "./PiratesList";
import userEvent from "@testing-library/user-event";
import { loggedUserMock } from "../../mocks/user/userMocks";

describe("Given a PiratesList component", () => {
  describe("Whent it's rendered", () => {
    test("Then it should show a two headings with the text 'Roronoa Zoro' and 'Monkey D. Luffy'", () => {
      const firstTitle = fullPiratesStateMock[0].name;
      const secondTitle = fullPiratesStateMock[1].name;

      renderWithProviders(<PiratesList />, { pirate: fullPiratesStateMock });

      const expectedFirstTitle = screen.getByRole("heading", {
        name: firstTitle,
      });
      const expectedSecondTitle = screen.getByRole("heading", {
        name: secondTitle,
      });

      expect(expectedFirstTitle).toBeInTheDocument();
      expect(expectedSecondTitle).toBeInTheDocument();
    });
  });
  describe("When it's rendered with a list of 2 pirates and the user clicks the delete button of it's own card", () => {
    test("Then it should a list without the deleted pirate", async () => {
      const buttonAriaLabel = "delete";
      const pirateName = fullPiratesStateMock[0].name;

      renderWithProviders(<PiratesList />, {
        pirate: fullPiratesStateMock,
        users: loggedUserMock,
      });

      const heading = screen.getByRole("heading", { name: pirateName });
      const deleteButton = screen.getAllByLabelText(buttonAriaLabel);

      await userEvent.click(deleteButton[0]);

      expect(heading).not.toBeInTheDocument();
    });
  });
});
