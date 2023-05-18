import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from "../page/Home/Home/Home";
import Main from "../layout/Main";
import Register from "../page/Register/Register";
import Login from "../page/Login/Login";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/login',
          element: <Login></Login>
        }
      ]
    },
  ]);