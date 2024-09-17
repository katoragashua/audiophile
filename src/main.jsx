import React from "react";
import ReactDOM from "react-dom/client";
import RootLayout from "./layouts/RootLayout";
import Home, { loader as HomeLoader } from "./pages/Home";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import { ContextProvider } from "./Context";
import CategoryPage, {
  loader as CategoryPageLoader,
} from "./pages/CategoryPage";
import ProductDetailPage, {loader as ProductDetailPageLoader} from "./pages/ProductDetailPage";
import CheckoutPage from "./pages/CheckoutPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route
        index
        element={<Home />}
        loader={HomeLoader}
        errorElement={<ErrorPage />}
        // action={}
      />
      <Route
        element={<CategoryPage />}
        path={"/:category"}
        loader={CategoryPageLoader}
        errorElement={<ErrorPage />}
      />
      <Route
        element={<ProductDetailPage/>}
        path={"/products/:productName"}
        loader={ProductDetailPageLoader}
        errorElement={<ErrorPage />}
      />
      <Route path="checkout" element={<CheckoutPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
);
