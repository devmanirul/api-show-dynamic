import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import MainLayout from "../LayOut";
import Products from "../pages/Products";
import SingleProduct from "../pages/SingleProduct";
import Cart from "../pages/Cart";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "single-product/:productID",
        element: <SingleProduct />,
        loader: ({ params }) =>
          fetch(`https://fakestoreapi.com/products/${params.productID}`).then(
            (res) => res.json()
          ),
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

export default routers;
