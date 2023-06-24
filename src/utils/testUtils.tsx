import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { RootState, setupStore, store } from "../store";
import { PropsWithChildren } from "react";

import theme from "../styles/theme/theme";
import { Provider } from "react-redux";
import { PreloadedState } from "redux";
import { render } from "@testing-library/react";
import GlobalStyle from "../styles/GlobalStyles/GlobalStyles";

export const renderWithProviders = (
  ui: React.ReactElement,
  preloadedState?: PreloadedState<RootState>
) => {
  const testStore = preloadedState ? setupStore(preloadedState) : store;

  const Wrapper = ({ children }: PropsWithChildren): React.ReactElement => {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Provider store={testStore}>{children}</Provider>
      </ThemeProvider>
    );
  };

  render(ui, { wrapper: Wrapper });
};

export const wrapWithRouter = (ui: React.ReactElement) => {
  const routes = [
    {
      path: "/",
      element: ui,
    },
  ];

  const router = createMemoryRouter(routes);

  return <RouterProvider router={router} />;
};

export const wrapWithProviders = ({
  children,
}: PropsWithChildren): React.ReactElement => (
  <Provider store={store}>{children}</Provider>
);
