import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import { UserCredentials } from "../../store/user/types";
import { RouteObject, RouterProvider, createMemoryRouter } from "react-router";
import { LazyLoginPage } from "../../routers/lazyComponents/lazyComponents";
import ListPage from "../ListPage/ListPage";

describe("Given a LoginPage component", () => {
  const routes: RouteObject[] = [
    { path: "/", element: <LazyLoginPage /> },
    { path: "/pirates", element: <ListPage /> },
  ];
  describe("When it's rendered", () => {
    test("Then it should show 'Login' in a heading", async () => {
      const headingText = "Login";

      renderWithProviders(wrapWithRouter(<LazyLoginPage />));

      const heading = await waitFor(() =>
        screen.getByRole("heading", {
          name: headingText,
        })
      );

      expect(heading).toBeInTheDocument();
    });
  });
  describe("When it receives a valid userCredentials", () => {
    test("Then it should redirect to '/pirates' path and return a token", async () => {
      const mockUserCredentials: UserCredentials = {
        username: "pol",
        password: "pol",
      };

      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />);

      const usernameLabelText = "USERNAME";
      const passwordLabelText = "PASSWORD";
      const usernameTextField = await screen.getByLabelText(usernameLabelText);
      const passwordTextField = await screen.getByLabelText(passwordLabelText);
      const button = screen.getByRole("button", { name: "Login" });

      await userEvent.type(usernameTextField, mockUserCredentials.username);
      await userEvent.type(passwordTextField, mockUserCredentials.password);
      await userEvent.click(button);

      expect(router.state.location.pathname).toBe("/pirates");
    });
  });
});
