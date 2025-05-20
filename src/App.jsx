import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";

import { selectIsRefreshing } from "./redux/auth/selectors";
import { refreshUserThunk } from "./redux/auth/operations";
import { Suspense } from "react";

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  return isRefreshing ? null : (
    // TODO: add PageLoader
    <Suspense fallback={<p>Loading .......</p>}>
      <div className="App">
        <RouterProvider router={router} />;
      </div>
    </Suspense>
  );
}

export default App;
