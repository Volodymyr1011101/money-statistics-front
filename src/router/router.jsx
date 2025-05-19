import { createBrowserRouter } from 'react-router';
import Home from '../pages/Home';
import Layout from '../components/UserAcountLayout/Layout/Layout';
import CurrencyPage from '../pages/CurrencyPage';
import RegistrationPage from '../pages/RegistrationPage';

// export const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Home />
//     },
// ]);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'currency',
        element: <CurrencyPage />,
      },
      {
        path: 'register',
        element: <RegistrationPage />,
      },
    ],
  },
]);
