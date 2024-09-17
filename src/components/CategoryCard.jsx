import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import arrowIcon from "../assets/shared/desktop/icon-arrow-right.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const CategoryCard = ({ category, img }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-end text-center text-black bg-snow p-6 pt-24 md:pt-28 rounded-lg gap-4 relative">
      <img
        src={img}
        alt={category + "img"}
        className="w-[45%] md:w-[55%] absolute top-[-30%] md:top-[-20%] xl:top-[-38%]"
        data-aos="zoom-out-up"
      />
      <h6>{category}</h6>
      <Link
        to={`/${category}`}
        className="flex items-center justify-center gap-2"
      >
        <span className="sub-title hover:text-raw-sienna text-chinese-black">
          SHOP
        </span>
        <img src={arrowIcon} alt="arrow icon" />
      </Link>
    </div>
  );
};

export default CategoryCard;
