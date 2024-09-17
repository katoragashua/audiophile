import React from "react";
import { Link } from "react-router-dom";

const Btn = ({ className, productName }) => {
  
  return (
    <Link to={`/products/${productName}`} className="w-max" >
      <button className={className}>SEE PRODUCT</button>
    </Link>
  );
};

export default Btn;
