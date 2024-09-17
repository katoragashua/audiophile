import React, { useEffect } from "react";
import Btn from "./Btn";
import AOS from "aos";
import "aos/dist/aos.css";

const CategoryProduct = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Whether animation should happen only once
    });
  }, []);

  return (
    <div
      className={`container flex flex-col md:flex-row justify-between gap-8 items-center ${
        props?.new && "-order-1"
      } ${props?.index % 2 !== 0 && "flex-row-reverse"}`}
    >
      <img
        src={props?.categoryImage?.desktop}
        alt=""
        className="rounded-md md:max-w-[50%]"
        data-aos="zoom-in"
      />
      <div className="grid gap-8 justify-items-center text-center md:text-left md:p-12  md:justify-items-start">
        {props?.new && (
          <p className="overline-text" style={{color: "#D87D4A"}}>new product</p>
        )}
        <h4>{props?.name}</h4>
        <p>{props?.description}</p>
        <Btn
          className={`btn hover:bg-tacao bg-raw-sienna text-snow`}
          productName={props?.name}
          id={props?.id}
        />
      </div>
    </div>
  );
};

export default CategoryProduct;
