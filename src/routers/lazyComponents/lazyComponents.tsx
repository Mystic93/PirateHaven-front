import { lazy } from "react";

export const LazyLoginPage = lazy(
  () => import("../../pages/LoginPage/LoginPage")
);

export const LazyListPage = lazy(() => import("../../pages/ListPage/ListPage"));

export const LazyNotFoundPage = lazy(
  () => import("../../pages/NotFoundPage/NotFoundPage")
);

export const LazyCreatePage = lazy(
  () => import("../../pages/CreatePage/CreatePage")
);
