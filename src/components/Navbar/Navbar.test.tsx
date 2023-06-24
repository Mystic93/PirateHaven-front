import Navbar from "./Navbar";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import { loggedUserMock } from "../../mocks/user/userMocks";

describe("Given a Navbar component", () => {
  describe("When it's rendered", () => {
    renderWithProviders(wrapWithRouter(<Navbar />));

    test("Then it should show two links", () => {
      expect(screen.getByRole("link", { name: "Login" })).toBeInTheDocument();
      expect(screen.getByRole("link", { name: "Pirates" })).toBeInTheDocument();
    });

    test("Then it should show the logout button", () => {
      renderWithProviders(wrapWithRouter(<Navbar />), {
        users: loggedUserMock,
      });

      const logoutButton = screen.getByRole("button", { name: "Logout" });

      expect(logoutButton).toBeInTheDocument();
    });
    describe("When it's rendered and the user clicks logout button", () => {
      test("Then it shouldn't show de Logout button", async () => {
        renderWithProviders(wrapWithRouter(<Navbar />), {
          users: loggedUserMock,
        });

        const logoutButton = screen.getByRole("button", { name: "Logout" });

        await userEvent.click(logoutButton);

        expect(logoutButton).not.toBeInTheDocument();
      });
    });
  });
});
