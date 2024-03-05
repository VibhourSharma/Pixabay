import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/HomePage.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SearchResult from "./pages/SearchResult.jsx";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/search",
    element: <SearchResult />,
    children: [
      {
        path: ":search/:openModalId",
        element: <SearchResult />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
