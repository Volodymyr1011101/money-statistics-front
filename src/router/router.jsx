import {
    createBrowserRouter,
} from "react-router";
import Home from "../pages/Home";
import Layout from "../components/UserAcountLayout/Layout/Layout";

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
          element: <Home />
        },
      ]
    }
  ])