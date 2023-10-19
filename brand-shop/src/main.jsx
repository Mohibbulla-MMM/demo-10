import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./component/Router.jsx";
import AuthProvaider from "./component/AuthProvaider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvaider>
      <RouterProvider router={Router} />
    </AuthProvaider>
  </React.StrictMode>
);
