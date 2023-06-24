import userEvent from "@testing-library/user-event";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import { UserStateStructure } from "../../store/user/types";
import App from "./App";
import { renderWithProviders, wrapWithProviders } from "../../utils/testUtils";
import { initialUserState } from "../../store/user/userSlice";
import { renderHook, screen } from "@testing-library/react";
import { userTokenMock } from "../../mocks/user/userMocks";
import { UiStateStructure } from "../../store/ui/types";
import { errorHandlers } from "../../mocks/handlers";
import { server } from "../../mocks/server";
import useApi from "../../hooks/useApi/useApi";

describe("Given an App component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an icon with alternative text 'logo'", async () => {
      const expectedTitle = "logo";
      const preloadedState: UserStateStructure = initialUserState;

      const routes: RouteObject[] = [
        {
          path: "/",
          element: <App />,
        },
      ];

      const mockRouter = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={mockRouter} />, {
        users: preloadedState,
      });

      const title = await screen.getByRole("img", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });

  describe("When it is rendered and there is a token in localStorage", () => {
    test("Then it should show a button with 'Logout' text", async () => {
      const expectedButtonText = "Logout";

      const token = userTokenMock;

      localStorage.setItem("token", token);

      const routes: RouteObject[] = [
        {
          path: "/",
          element: <App />,
        },
      ];

      const mockRouter = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={mockRouter} />);

      const button = await screen.getByRole("button", {
        name: expectedButtonText,
      });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it is rendered and there was an error getting the pirates", () => {
    test(`Then it should show a 'Unable to load pirates`, async () => {
      server.resetHandlers(...errorHandlers);

      const preloadedState: UiStateStructure = {
        isLoading: false,
        isError: true,
        showFeedback: true,
        message: "Unable to load pirates",
      };

      const expectedText = "error icon";

      const routes: RouteObject[] = [
        {
          path: "/",
          element: <App />,
        },
      ];

      const testRoutes: RouteObject[] = routes;

      const mockRouter = createMemoryRouter(testRoutes);

      renderWithProviders(<RouterProvider router={mockRouter} />, {
        ui: preloadedState,
      });

      const modal = await screen.getByRole("img", { name: expectedText });

      expect(modal).toBeInTheDocument();
    });
    describe("And the user clicks the Close button", () => {
      test("Then the modal should disappear", async () => {
        const preloadedState: UiStateStructure = {
          isLoading: false,
          isError: true,
          showFeedback: true,
          message: "Unable to load pirates",
        };

        const expectedText = "Unable to load pirates";

        const routes: RouteObject[] = [
          {
            path: "/",
            element: <App />,
          },
        ];

        const mockRouter = createMemoryRouter(routes);

        renderWithProviders(<RouterProvider router={mockRouter} />, {
          ui: preloadedState,
        });

        const {
          result: {
            current: { getPirates },
          },
        } = renderHook(() => useApi(), { wrapper: wrapWithProviders });

        await getPirates();

        const modal = screen.getByText(expectedText);
        const expectedButtonText = "Close";
        const button = screen.getByRole("button", { name: expectedButtonText });

        await userEvent.click(button);

        expect(modal).not.toBeInTheDocument();
      });
    });
  });
});
