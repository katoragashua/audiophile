import React, { useContext } from "react";
import Overlay from "./Overlay";
import { Link } from "react-router-dom";
import { Context } from "../Context";
import tick from "/src/assets/shared/desktop/tick.svg";

const CheckoutModal = () => {
  const { cart, toggleOverlay, total, shipping, vat } = useContext(Context);
  return (
    <>
      <Overlay />
      <div className="checkout-modal flex flex-col gap-8 justify-center  absolute xl:w-[40%]  bg-white p-8 rounded-lg">
        <div className="p-6 rounded-full bg-raw-sienna self-start">
          <img src={tick} alt="checkout tick" className="aspect-square" width="24px" />
        </div>
        <div >
          <h5 className="text-uppercase m-0 p-0">Thank you</h5>
          <h5 className="text-uppercase m-0 p-0">for your order</h5>
        </div>

        <span>You will receive an email confirmation shortly.</span>
        <div className="grid grid-cols-12 rounded-lg overflow-hidden">
          <div className="col-span-7 p-6 grid gap-2 bg-white-smoke">
            {cart
              ?.filter((item, index) => index === 0)
              .map((cartItem) => (
                <div
                  key={cartItem?.name}
                  className="cart-item flex justify-between items-start gap-2"
                >
                  <div className="flex gap-4 items-start">
                    <div className="cart-img rounded-lg overflow-hidden">
                      <img
                        src={`/src/assets/cart/image-${cartItem?.slug}.jpg`}
                        width="60px"
                        alt={cartItem?.slug}
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-chinese-black font-semibold">
                        {cartItem?.name
                          .toLowerCase()
                          .replace(cartItem?.category, "")
                          .trim()
                          .toUpperCase()}
                      </span>
                      <span className="font-semibold">
                        ${cartItem?.price.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <span>x{cartItem?.orderQuantity}</span>
                </div>
              ))}
            <hr />
            <small className="text-center">and {cart?.length - 1} others item(s)</small>
          </div>
          <div className="flex flex-col bg-chinese-black col-span-5 p-10 gap-4">
            <span className="">GRAND TOTAL</span>
            <span className="font-bold text-white">${(total +shipping + vat).toLocaleString()}</span>
          </div>
        </div>
        <Link
          to="/"
          className="text-center btn bg-raw-sienna inline-block text-snow font-extrabold"
          onClick={() => toggleOverlay("checkout")}
        >
          <span className="text-uppercase">BACK TO HOME</span>
        </Link>
      </div>
    </>
  );
};

export default CheckoutModal;
