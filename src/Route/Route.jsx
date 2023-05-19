import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from "../page/Home/Home/Home";
import Main from "../layout/Main";
import Register from "../page/Register/Register";
import Login from "../page/Login/Login";
import AllToys from "../page/AllToys/AllToys";
import FourZeroFour from "../page/FourZeroFour/FourZeroFour";
import Blog from "../page/Blog/Blog";
import SingleProduct from "../page/SingleProduct/SingleProduct";
import PrivateRoute from "./PrivateRoute";
import AddToy from "../page/AddToy/AddToy";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <FourZeroFour></FourZeroFour>,
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
          path: '/products/:id',
          element: <PrivateRoute><SingleProduct></SingleProduct></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
        },
        {
          path: '/add-toy',
          element: <AddToy></AddToy>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
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