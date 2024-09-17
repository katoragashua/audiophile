import React, { useContext } from "react";
import { Context } from "../Context";

const Overlay = () => {
  const { resetOverlay } = useContext(Context);
  return <div className="overlay" onClick={resetOverlay}></div>;
};

export default Overlay;
