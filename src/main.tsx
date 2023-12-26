import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Compeleted from "./Components/Compeleted.tsx";
import Active from "./Components/Active.tsx";
import All from "./Components/All.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <All />,
      },
      {
        path: "/act",
        element: <Active />,
      },
      {
        path: "/com",
        element: <Compeleted />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
