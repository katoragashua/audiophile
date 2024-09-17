import React, { useContext } from "react";
import { Context } from "../Context";
import CartItems from "./CartItems";
import Overlay from "./Overlay";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, toggleOverlay } = useContext(Context);
  return (
    <div className="absolute pt-12 top-0 left-0 right-0 bottom-0 z-50">
      <Overlay />
      <div className="container relative">
        <div className="flex flex-col gap-6 font-semibold w-[40%] p-8 border rounded-lg bg-snow absolute right-0">
          <div className="flex justify-between items-center">
            <span className="text-chinese-black text-lg">
              CART({cart.length})
            </span>
            <a href="">
              <span>Remove all</span>
            </a>
          </div>
          <CartItems cart={cart} />
          <div className="cart-total flex justify-between">
            <span>TOTAL</span>
            <span>
              $
              {cart
                .reduce((acc, cur) => {
                  const { orderQuantity, price } = cur;
                  acc += orderQuantity * price;
                  return acc;
                }, 0)
                .toLocaleString()}
            </span>
          </div>

          <Link
            to="checkout"
            className="text-center btn bg-raw-sienna inline-block text-snow font-extrabold"
            onClick={() => toggleOverlay("cart")}
          >
            <span>CHECKOUT</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
