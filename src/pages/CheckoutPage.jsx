import React from "react";
import Checkout from "../components/Checkout";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  return (
    <div className="bg-white-smoke pt-4 pb-16">
      <div className="container">
        <Link to={"/"}>
          <span className="py-14 inline-block">Go back</span>
        </Link>
        <Checkout />
      </div>
    </div>
  );
};

export default CheckoutPage;
