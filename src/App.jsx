import React, { Children } from "react";
import HomePage from "./routes/homePage/homePage"
import ListPage from "./routes/listPage/listPage"; // Add this import
import Layout from "./routes/layout/layout";
import * as ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./routes/login/login";
import SinglePage from "./routes/singlePage/singlePage";

function App() {
  const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/list",
        element: <ListPage />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/:id",
        element: <SinglePage />
      }
    ],
  }
  ]);

  return (
    <RouterProvider router={router}/>  
  );
}

export default App