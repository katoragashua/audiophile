import React from "react";

const CartItems = ({ cart }) => {
  return (
    <>
      {cart?.map((cartItem) => (
        <div
          key={cartItem?.name}
          className="cart-item flex justify-between items-center"
        >
          <div className="flex gap-4 items-center">
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
          <div className="quantity-btn bg-white-smoke text-dark-gray py-2 ">
            <span className="px-4 py-2  cursor-pointer">+</span>
            <span className="px-4 py-2  text-chinese-black">
              {cartItem?.orderQuantity}
            </span>
            <span className="px-4 py-2  cursor-pointer">-</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default CartItems;
