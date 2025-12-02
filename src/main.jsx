import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App.jsx";
import Projects from "./sites/Projects.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SiteNotFound from "./sites/SiteNotFound.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/projects", element: <Projects /> },
  { path: "*", element: <SiteNotFound /> },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
