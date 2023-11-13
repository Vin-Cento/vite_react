import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./router/root";
import Calculator from "./router/calculator";
import User from "./router/user";
import { BrowserRouter } from "react-router-dom";

const routerpath = [
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/calculator",
    element: <Calculator />,
  },
  {
    path: "/user",
    element: <User />,
  },
];
const router = createBrowserRouter(routerpath);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
