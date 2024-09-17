import React, { useContext } from "react";
import { Context } from "../Context";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { cart, total, toggleOverlay, shipping, vat } = useContext(Context);
  
  return (
    <div className="grid gap-10  items-start xl:grid-cols-6">
      <div className=" grid gap-20 col-span-4 bg-white py-16 px-12 rounded-lg">
        <h3>CHECKOUT</h3>
        <div>
          <form action="" className="grid gap-20">
            <div className="billing-details grid gap-6 grid-cols-2">
              <h6 className="col-span-2 text-raw-sienna">BILLING DETAILS</h6>
              <div className="grid gap-2 col-span-2">
                <label htmlFor="name">Name</label>
                <input
                  className="rounded-md py-2 px-6"
                  type="text"
                  placeholder="Name"
                  name="name"
                  id="name"
                />
              </div>
              <div className="grid gap-2 col-span-1">
                <label htmlFor="email">Email</label>
                <input
                  className="rounded-md py-2 px-6"
                  type="text"
                  placeholder="Email"
                  name="email"
                  id="email"
                />
              </div>
              <div className="grid gap-2 col-span-1">
                <label htmlFor="phone">Phone Number</label>
                <input
                  className="rounded-md py-2 px-6"
                  type="text"
                  placeholder="Phone Number"
                  name="phone"
                  id="phone"
                />
              </div>
            </div>
            <div className="shipping-info grid gap-6">
              <h6 className="col-span-2 text-raw-sienna">SHIPPING INFO</h6>
              <div className="grid gap-2 col-span-2">
                <label htmlFor="address">Your Address</label>
                <input
                  className="rounded-md py-2 px-6"
                  type="text"
                  placeholder="Address"
                  name="address"
                  id="address"
                />
              </div>
              <div className="grid gap-2 col-span-1">
                <label htmlFor="zip">ZIP Code</label>
                <input
                  className="rounded-md py-2 px-6"
                  type="text"
                  placeholder="ZIP Code"
                  name="zip"
                  id="zip"
                />
              </div>
              <div className="grid gap-2 col-span-1">
                <label htmlFor="city">City</label>
                <input
                  className="rounded-md py-2 px-6"
                  type="text"
                  placeholder="City"
                  name="city"
                  id="city"
                />
              </div>
              <div className="grid gap-2 col-span-1">
                <label htmlFor="country">Country</label>
                <input
                  className="rounded-md py-2 px-6"
                  type="text"
                  placeholder="Country"
                  name="country"
                  id="country"
                />
              </div>
            </div>
            <div className="payment-details grid gap-6 grid-cols-2">
              <h6 className="col-span-2 text-raw-sienna">PAYMENT INFO</h6>
              <label htmlFor="payment-method col-span-1">Payment Method</label>
              <div className="payment-method col-span-1 flex flex-col gap-4">
                <label
                  htmlFor="e-money"
                  className="rounded-md py-2 px-6 border has-[:checked]:border-raw-sienna has-[:checked]:bg-[#d97e4a1a]"
                >
                  <input
                    type="radio"
                    name="payment-method"
                    id="e-money"
                    value="e-money"
                    className="checked:border border"
                  />
                </label>
                <label
                  htmlFor="cash"
                  className="rounded-md py-2 px-6 border has-[:checked]:border-raw-sienna has-[:checked]:bg-[#d97e4a1a]"
                >
                  <input
                    type="radio"
                    name="payment-method"
                    id="cash"
                    value="cash"
                    className="checked:border border"
                  />
                </label>
              </div>

              <div className="grid gap-2">
                <label htmlFor="e-number">e-Money Number</label>
                <input
                  className="rounded-md py-2 px-6"
                  type="text"
                  placeholder="E-Money Number"
                  name="e-number"
                  id="e-number"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="e-pin">e-Money-pin</label>
                <input
                  className="rounded-md py-2 px-6"
                  type="text"
                  placeholder="E-Money PIN"
                  name="e-pin"
                  id="e-pin"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="summary grid gap-6 col-span-2 bg-white py-10 px-8 rounded-lg">
        <h6>SUMMARY</h6>

        {cart.map((cartItem) => (
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
            <span>x{cartItem?.orderQuantity}</span>
          </div>
        ))}
        <div className="cart-total flex justify-between">
          <span>TOTAL</span>
          <span className="font-bold">${total.toLocaleString()}</span>
        </div>
        <div className="cart-total flex justify-between">
          <span>SHIPPING</span>
          <span className="font-bold">${shipping}</span>
        </div>
        <div className="cart-total flex justify-between">
          <span>VAT</span>
          <span className="font-bold">${vat}</span>
        </div>
        <div className="cart-total flex justify-between">
          <span className="">GRAND TOTAL</span>
          <span className="text-raw-sienna font-bold">
            ${(total + shipping + vat).toLocaleString()}
          </span>
        </div>
        <Link
          to="#"
          className="text-center btn bg-raw-sienna inline-block text-snow font-extrabold"
          onClick={() => toggleOverlay("checkout")}
        >
          <span>CONTINUE & PAY</span>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
