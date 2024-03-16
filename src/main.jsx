import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import HomePage from "./pages/HomePage.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SearchResult from "./pages/SearchResult.jsx";
import Favourites from "./pages/Favourites.jsx";
import Downloads from "./pages/Downloads.jsx";
import { FirebaseProvider } from "./context/Firebase.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/search",
    element: <SearchResult />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/favourites",
    element: <Favourites />,
  },
  {
    path: "/downloads",
    element: <Downloads />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <FirebaseProvider>
    <RouterProvider router={router} />
  </FirebaseProvider>
);
