import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../Components/Login";
import Body from "./Body";
import Feed from "../Components/Feed";
import Profile from "../Components/Profile";
import Error from "../Components/Error";
const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Feed />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <Error />,
    },
  ]);
  return <RouterProvider router={appRouter} />;
};

export default App;
