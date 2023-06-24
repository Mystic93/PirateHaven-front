import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "./LoginForm";
import { renderWithProviders } from "../../utils/testUtils";
import { vi } from "vitest";

beforeEach(() => {
  vi.clearAllMocks();
});

const expectedInputUsername = "jordi";
const expectedInputPassword = "jordi";

describe("Given a LoginForm component", () => {
  const actionOnClick = vi.fn();
  const loginButtonText = "Login";
  const usernameLabel = "USERNAME";
  const passwordLabel = "PASSWORD";
  describe("When it's rendered", () => {
    test("Then it should show a 'USERNAME' and 'PASSWORD' inputs", () => {
      renderWithProviders(<LoginForm submitForm={actionOnClick} />);

      const usernameInput = screen.getByLabelText(usernameLabel);
      const passwordInput = screen.getByLabelText(passwordLabel);

      expect(usernameInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
    });

    test("Then it shoul show a 'Login' button", () => {
      renderWithProviders(<LoginForm submitForm={actionOnClick} />);

      const loginButton = screen.getByRole("button", {
        name: loginButtonText,
      });
      expect(loginButton).toBeInTheDocument();
    });
  });

  describe("When it's rendered and the user types 'jordi' in the username input and 'jordi' in the password input", () => {
    test("Then it should show both inputs with 'jordi'", async () => {
      renderWithProviders(<LoginForm submitForm={actionOnClick} />);

      const inputName = screen.getByLabelText("USERNAME");
      const inputPassword = screen.getByLabelText("PASSWORD");

      await userEvent.type(inputName, expectedInputUsername);
      await userEvent.type(inputPassword, expectedInputPassword);

      expect(inputName).toHaveValue(expectedInputUsername);
      expect(inputPassword).toHaveValue(expectedInputPassword);
    });
  });
  describe("When it's rendered and the username and the password aren't empty", () => {
    test("Then it should show the login button enabled", async () => {
      renderWithProviders(<LoginForm submitForm={actionOnClick} />);

      const inputName = screen.getByLabelText(usernameLabel);
      const inputPassword = screen.getByLabelText(passwordLabel);
      const loginButton = screen.getByRole("button", {
        name: loginButtonText,
      });

      await userEvent.type(inputName, expectedInputUsername);
      await userEvent.type(inputPassword, expectedInputPassword);

      expect(loginButton).toBeEnabled();
    });
  });
  describe("When it's rendered and the button is clicked", () => {
    test("Then it should invoke the function actionOnClick", async () => {
      renderWithProviders(<LoginForm submitForm={actionOnClick} />);

      const inputName = screen.getByLabelText(usernameLabel);
      const inputPassword = screen.getByLabelText(passwordLabel);
      const loginButton = screen.getByRole("button", {
        name: loginButtonText,
      });

      await userEvent.type(inputName, expectedInputUsername);
      await userEvent.type(inputPassword, expectedInputPassword);

      await userEvent.click(loginButton);

      expect(actionOnClick).toHaveBeenCalled();
    });
  });
});
