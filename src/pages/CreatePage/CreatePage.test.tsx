import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import CreatePage from "./CreatePage";
import userEvent from "@testing-library/user-event";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import ListPage from "../ListPage/ListPage";
import { store } from "../../store";

describe("Given a CreatePage page component", () => {
  describe("When it's rendered", () => {
    test("Then it should show 'Create a Pirate' in a heading", () => {
      const headingText = "Create a Pirate";

      renderWithProviders(wrapWithRouter(<CreatePage />));

      const heading = screen.getByRole("heading", {
        name: headingText,
      });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When it's rendered and the user creates a new pirate", () => {
    test("Then it should show a positive feedback with the message 'Pirate succesfully created'", async () => {
      const expectedMessage = "Pirate succesfully created";

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

      const routes: RouteObject[] = [
        {
          path: "/",
          element: <CreatePage />,
        },
        {
          path: "/characters",
          element: <ListPage />,
        },
      ];
      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />);

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

      const createButton = screen.getByRole("button");

      await userEvent.click(createButton);

      const message = store.getState().ui.message;

      expect(message).toBe(expectedMessage);
    });
  });
});
