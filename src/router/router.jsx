import { createBrowserRouter } from 'react-router';
import Home from '../pages/Home';
import Layout from '../components/UserAcountLayout/Layout/Layout';
import CurrencyPage from '../pages/CurrencyPage';
import PrivateRoute from '../routes/privateRoute';
import RestrictedRoute from '../routes/RestrictedRoute';

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
                element: (
                    <PrivateRoute redirectTo="/login">
                        <Home />
                    </PrivateRoute>
                ),
            },
            {
                path: 'currency',
                element: (
                    <PrivateRoute redirectTo="/login">
                        <CurrencyPage />
                    </PrivateRoute>
                ),
            },
            {
                //! don't exist
                path: 'currency',
                element: (
                    <RestrictedRoute redirectTo="/">
                        <CurrencyPage />
                    </RestrictedRoute>
                ),
            },
            {
                //! don't exist
                path: 'currency',
                element: (
                    <RestrictedRoute redirectTo="/">
                        <CurrencyPage />
                    </RestrictedRoute>
                ),
            },
        ],
    },
]);
