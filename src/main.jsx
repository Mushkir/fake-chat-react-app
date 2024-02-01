import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import TheNavBar from "./components/TheNavBar.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GuestLayout from "./Guest/Guest.jsx";
import HomePage from "./pages/HomePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
