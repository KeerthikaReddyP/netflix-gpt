import React from "react";
import LoginPage from "./LoginPage";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MoviePage from "./MoviePage";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path:"/browse/:id",
      element:<MoviePage />,
    }
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
