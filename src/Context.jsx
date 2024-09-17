import React, { useEffect, useState } from "react";
import { getProduct } from "./api";
export const Context = React.createContext();
const { Provider } = Context;

export const ContextProvider = ({ children }) => {
  const [viewport, setViewport] = useState(() => "");

  const [cart, setCart] = useState(
    () => JSON.parse(localStorage.getItem("cart")) || []
  );
  const [overlay, setOverlay] = useState(() => ({
    cart: false,
    checkout: false,
  }));

  const toggleOverlay = (type) => {
    setOverlay((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  const resetOverlay = () => {
    setOverlay((prev) => ({
      cart: false,
      checkout: false,
    }));
  };

  const addToCart = async (id, quantity) => {
    let product = await getProduct(id);
    product = { ...product, orderQuantity: quantity };
    setCart((prev) => [...prev, product]);
  };

  const [total, setTotal] = useState(() => 0);
  const calculateTotal = () =>
    cart?.reduce((acc, cur) => {
      const { orderQuantity, price } = cur;
      acc += orderQuantity * price;
      setTotal(acc);
      return acc;
    }, 0);

  const getTotal = () => setTotal((prev) => calculateTotal());

  const removeFromCart = async (id) => {
    setCart((prev) => prev.filter((product) => product.id !== id));
  };

  const shipping = total > 500 ? 100 : 50;
  const vat = total * (5 / 100);

  useEffect(() => {
    // setCart(localStorage.getItem("cart") || []);
    localStorage.setItem("cart", JSON.stringify(cart));
    getTotal();
  }, [cart]);
  

  useEffect(() => {
    const handleResize = () => {
      let width = window.innerWidth;
      switch (true) {
        case width < 600:
          setViewport("mobile");
          break;
        case width < 1200:
          setViewport("tablet");
          break;
        default:
          setViewport("desktop");
          break;
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Provider
      value={{
        viewport,
        cart,
        addToCart,
        removeFromCart,
        overlay,
        toggleOverlay,
        total,
        calculateTotal,
        getTotal,
        shipping,
        vat,
        resetOverlay
      }}
    >
      {children}
    </Provider>
  );
};

export default ContextProvider;
