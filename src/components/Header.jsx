import React, { useContext } from "react";
import Nav from "./Nav";
import audiophile from "../assets/audiophile.svg";
import cart from "../assets/shared/desktop/icon-cart.svg";
import { Link } from "react-router-dom";
import { Context } from "../Context";

const Header = () => {
  const { viewport, toggleOverlay } = useContext(Context);
  return (
    <header className="bg-black text-white relative">
      <div className="container flex items-center justify-between py-10 border-b border-dark-gray">
        {viewport !== "desktop" && (
          <div className="hamburger">
            <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
              <g fill="#FFF" fillRule="evenodd">
                <path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z" />
              </g>
            </svg>
          </div>
        )}
        <div className="flex justify-between items-center">
          <div className="logo md:pr-[50vw] xl:pr-0">
            <Link to={"/"}>
              <img src={audiophile} alt="logo" />
            </Link>
          </div>
        </div>
        {<Nav />}
        <div className="cart">
          <Link to={"#"} onClick={() => toggleOverlay("cart")}>
            <img src={cart} alt="cart icon" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
