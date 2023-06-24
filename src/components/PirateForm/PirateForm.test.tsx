import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import PirateForm from "./PirateForm";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

const pirateFormLabels = [
  "Name",
  "Bounty",
  "Has Devil Fruit",
  "Is Alive",
  "Image",
  "Crew",
  "Position",
  "Dream",
];

const userText = "test";

const submitForm = vi.fn();

describe("Given a PirateForm component", () => {
  pirateFormLabels.forEach((expectedText) => {
    describe("When it is rendered", () => {
      test(`Then it should show a text field with the label '${expectedText}'`, () => {
        renderWithProviders(<PirateForm submitPirateForm={submitForm} />);

        const textField = screen.getByLabelText(expectedText);

        expect(textField).toBeInTheDocument();
      });
    });
  });

  describe("When it is rendered", () => {
    test("Then it should show a button with the text 'Create'", () => {
      const expectedText = "Create";

      renderWithProviders(<PirateForm submitPirateForm={submitForm} />);

      const textField = screen.getByRole("button", { name: expectedText });

      expect(textField).toBeInTheDocument();
    });
  });

  describe("When it's rendered but the inputs fields are empty", () => {
    test("Then it should show a disabled button with the text 'Create'", () => {
      const expectedText = "Create";

      renderWithProviders(<PirateForm submitPirateForm={submitForm} />);

      const createButton = screen.getByRole("button", { name: expectedText });

      expect(createButton).toBeDisabled();
    });
  });
  pirateFormLabels.slice(6).forEach((expectedText) => {
    describe(`When it's rendered and the user writes the text '${userText}' on the field '${expectedText[0]}'`, () => {
      test(`Then it should show the text '${userText}' in the field`, async () => {
        renderWithProviders(<PirateForm submitPirateForm={submitForm} />);

        const textField = screen.getByLabelText(expectedText);

        await userEvent.type(textField, userText);

        expect(textField).toHaveValue(userText);
      });
    });
  });

  describe("When it's rendered and the user clicks the Is Alive, Has Devil Fruit allowed checkbox", () => {
    test("Then it's checkbox shoulb be checked", async () => {
      const isAliveAllowedLabel = "Is Alive";
      const hasDevilFruitAllowedLabel = "Has Devil Fruit";

      renderWithProviders(<PirateForm submitPirateForm={submitForm} />);
      const isAliveAllowedCheckbox = screen.getByLabelText(isAliveAllowedLabel);
      const hasDevilFruitCheckbox = screen.getByLabelText(
        hasDevilFruitAllowedLabel
      );

      await userEvent.click(isAliveAllowedCheckbox);
      await userEvent.click(hasDevilFruitCheckbox);

      expect(isAliveAllowedCheckbox).toBeChecked();
      expect(hasDevilFruitCheckbox).toBeChecked();
    });
  });

  describe("When it's rendered and all the inputs fields are filled in", () => {
    test("Then it should show an enabled button with the text 'create'", async () => {
      renderWithProviders(<PirateForm submitPirateForm={submitForm} />);

      const nameImputField = screen.getByLabelText(pirateFormLabels[0]);
      const bountyImputField = screen.getByLabelText(pirateFormLabels[1]);
      const imageImputField = screen.getByLabelText(pirateFormLabels[4]);
      const crewImputField = screen.getByLabelText(pirateFormLabels[5]);
      const positionImputField = screen.getByLabelText(pirateFormLabels[6]);
      const dreamImputField = screen.getByLabelText(pirateFormLabels[7]);

      const nameTextField = "joseluis";
      const bountyTextField = 50;
      const imageTextField = "http://human.img.com";
      const crewTextField = "straw hat pirates";
      const positionTextField = "chef";
      const dreamTextField = "become the greatest chef";

      await userEvent.type(nameImputField, nameTextField);
      await userEvent.type(bountyImputField, bountyTextField.toString());
      await userEvent.type(imageImputField, imageTextField);
      await userEvent.type(crewImputField, crewTextField);
      await userEvent.type(positionImputField, positionTextField);
      await userEvent.type(dreamImputField, dreamTextField);

      const createButton = screen.getByRole("button", { name: "Create" });

      expect(createButton).toBeEnabled();
    });
  });

  describe("When it's rendered and all the inputs fields are filled in", () => {
    test("Then it should show an enabled button with the text 'create'", async () => {
      renderWithProviders(<PirateForm submitPirateForm={submitForm} />);

      const nameImputField = screen.getByLabelText(pirateFormLabels[0]);
      const bountyImputField = screen.getByLabelText(pirateFormLabels[1]);
      const imageImputField = screen.getByLabelText(pirateFormLabels[4]);
      const crewImputField = screen.getByLabelText(pirateFormLabels[5]);
      const positionImputField = screen.getByLabelText(pirateFormLabels[6]);
      const dreamImputField = screen.getByLabelText(pirateFormLabels[7]);

      const nameTextField = "joseluis";
      const bountyTextField = 50;
      const imageTextField = "http://human.img.com";
      const crewTextField = "straw hat pirates";
      const positionTextField = "chef";
      const dreamTextField = "become the greatest chef";

      await userEvent.type(nameImputField, nameTextField);
      await userEvent.type(bountyImputField, bountyTextField.toString());
      await userEvent.type(imageImputField, imageTextField);
      await userEvent.type(crewImputField, crewTextField);
      await userEvent.type(positionImputField, positionTextField);
      await userEvent.type(dreamImputField, dreamTextField);

      const createButton = screen.getByRole("button", { name: "Create" });

      await userEvent.click(createButton);

      expect(submitForm).toHaveBeenCalled();
    });
  });
});
