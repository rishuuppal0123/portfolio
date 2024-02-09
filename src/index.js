import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from "./components/Layout";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout/>,
      children: [
        {index: true, element: <App/>}
      ]
    }
  ]
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
