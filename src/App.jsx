import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';

import { selectIsRefreshing } from './redux/auth/selectors';
import { refreshUser } from './redux/auth/operations';

import Layout from './components/UserAcountLayout/Layout/Layout';
// import Loader from "./components/Loader/Loader";
import PrivateRoute from './components/UserAcountLayout/PrivateRoute/PrivateRoute';
import RestrictedRoute from './components/UserAcountLayout/RestrictedRoute/RestrictedRoute';

const HomePage = lazy(() => import('./pages/Home'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? (
        <Loader />
      ) : (
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/dashboard"
                  component={<RegisterPage />}
                />
              }
            />
          </Routes>
        </Layout>
      )}
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default App;
