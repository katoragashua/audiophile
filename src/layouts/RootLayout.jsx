import React, { useContext } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Cart from "../components/Cart";
import { Context } from "../Context";
import CheckoutModal from "../components/CheckoutModal";

const RootLayout = () => {
  const {overlay} = useContext(Context)

  return (
    <>
      <Header />
      <div className="relative">
        <Outlet />
        {overlay?.cart && <Cart />}
        {overlay?.checkout && <CheckoutModal />}
      </div>
    </>
  );
};

export default RootLayout;
