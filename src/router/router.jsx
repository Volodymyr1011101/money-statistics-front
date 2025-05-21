import { createBrowserRouter } from "react-router";

import { lazy } from "react";
import RestrictedRoute from "./RestrictedRoute";
import PrivateRoute from "./PrivateRoute";

const CurrencyPage = lazy(() => import("../pages/CurrencyPage"));
const Layout = lazy(() =>
  import("../components/UserAcountLayout/Layout/Layout")
);
const Home = lazy(() => import("../pages/Home"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));

// export const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Home />
//     },
// ]);

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute redirectTo="/login">
        <Layout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "currency",
        element: <CurrencyPage />,
      },
    ],
  },
  {
    path: "/login",
    element: (
      //TODO: when DashboardPage will be ready add path to redirectTo
      <RestrictedRoute redirectTo="/">
        <LoginPage />
      </RestrictedRoute>
    ),
  },
  {
    path: "/register",
    element: <LoginPage isRegister={true} />,
  },
]);
