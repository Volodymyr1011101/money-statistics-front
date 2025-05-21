import { createBrowserRouter } from 'react-router';
import Home from '../pages/Home';
import Layout from '../components/UserAcountLayout/Layout/Layout';
import CurrencyPage from '../pages/CurrencyPage';
import RegistrationPage from '../pages/RegistrationPage';
import { lazy } from "react";
import RestrictedRoute from "./RestrictedRoute";
import PrivateRoute from "./PrivateRoute";

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
      {
        path: 'register',
        element: <RegistrationPage />,
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
]);
