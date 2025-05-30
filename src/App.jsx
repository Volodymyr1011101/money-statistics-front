import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";

import { selectIsRefreshing } from "./redux/auth/selectors";
import { refreshUserThunk } from "./redux/auth/operations";
import { Suspense } from "react";
import { Loader } from "./components/Loader/Loader";
const CustomLoader = () => {
  const isLoading = useSelector((state) => state.isLoading);
  return isLoading && <Loader />;
};

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUserThunk());

  }, [dispatch]);

  return isRefreshing ? null : (
    // TODO: add PageLoader
    <>
      <CustomLoader />
      <Suspense fallback={<Loader />}>
        <div className="App">
          <RouterProvider router={router} />
        </div>
      </Suspense>
    </>
  );
}

export default App;
