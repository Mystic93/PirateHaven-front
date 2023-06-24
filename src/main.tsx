import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import "@fontsource/pirata-one";
import "@fontsource/sail";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme/theme";
import GlobalStyle from "./styles/GlobalStyles/GlobalStyles";
import { RouterProvider } from "react-router-dom";
import appRouter from "./routers/appRouter/appRouter";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={appRouter} />
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
