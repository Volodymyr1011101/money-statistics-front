import React from "react";
import ReactDOM from "react-dom/client";
import "modern-normalize";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
       <RouterProvider router={router}>
        <App />
        <Toaster position="top-right" toastOptions={{duration: 1000}} />
       </RouterProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
