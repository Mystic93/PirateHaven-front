import { RouterProvider } from "react-router-dom";
import { renderWithProviders } from "../../utils/testUtils";
import appRouter from "./appRouter";
import { screen } from "@testing-library/react";
import { userTokenMock } from "../../mocks/user/userMocks";

localStorage.setItem("token", userTokenMock);

describe("Given an appRouter router", () => {
  describe("When it's rendered and a token exist in the local storage", () => {
    test("Then it should show the 'Create' and 'Pirates' links", () => {
      const links = ["Create", "Pirates"];

      renderWithProviders(<RouterProvider router={appRouter} />);

      links.forEach((link) => {
        const navlink = screen.getByRole("link", { name: link });

        expect(navlink).toBeInTheDocument();
      });
    });
  });
});
