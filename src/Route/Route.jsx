import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from "../page/Home/Home/Home";
import Main from "../layout/Main";
import Register from "../page/Register/Register";
import Login from "../page/Login/Login";
import AllToys from "../page/AllToys/AllToys";

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
          path: '/all-toys',
          element: <AllToys></AllToys>,
          loader: () => fetch('http://localhost:5000/products')
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