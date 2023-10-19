import { createBrowserRouter, useParams } from "react-router-dom";
import Root from "./Root";
import NotFound from "../Pages/NotFound";
import AddProduct from "../Pages/AddProduct";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home";
import MyCard from "../Pages/MyCard";
import ProductDetails from "./Product/ProductDetails";
import ProductUpdate from "../Pages/ProductUpdate";
import PrivteRoute from "./PrivteRoute";
import BrandDetails from "./BrandDetails";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/add_product",
        element: (
          <PrivteRoute>
            <AddProduct></AddProduct>
          </PrivteRoute>
        ),
      },
      {
        path: "/my_card",

        element: (
          <PrivteRoute>
            <MyCard></MyCard>
          </PrivteRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },

      {
        path: "/product/:id",
        element: (
          <PrivteRoute>
            <ProductDetails></ProductDetails>
          </PrivteRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },
      {
        path: "/product_update/:id",
        element: (
          <PrivteRoute>
            <ProductUpdate></ProductUpdate>
          </PrivteRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/brand_details/:id",
        element: <BrandDetails></BrandDetails>,
        loader: () => fetch(`./supporton.json`),
      },
    ],
  },
]);

export default Router;
