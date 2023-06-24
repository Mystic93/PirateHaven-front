import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../../components/App/App";
import { Suspense } from "react";
import {
  LazyCreatePage,
  LazyListPage,
  LazyLoginPage,
  LazyNotFoundPage,
} from "../lazyComponents/lazyComponents";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: (
          <Suspense>
            <LazyLoginPage />
          </Suspense>
        ),
      },

      {
        index: true,
        element: <Navigate to={"/pirates"} replace />,
      },
      {
        path: "/pirates",
        element: (
          <Suspense>
            <LazyListPage />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense>
            <LazyNotFoundPage />
          </Suspense>
        ),
      },
      {
        path: "/create",
        element: (
          <Suspense>
            <LazyCreatePage />
          </Suspense>
        ),
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
