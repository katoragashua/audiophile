import React, {useContext} from "react";
import { Link } from "react-router-dom";
import Btn from "./Btn";
import { Context } from "../Context";


const Hero = ({ newProducts }) => {
  // console.log(newProducts);
  const {viewport} = useContext(Context)
  console.log(viewport);
  

  const heroProducts = newProducts.map((product) => (
    <div key={product.id}>
      <img src={product.image.desktop} alt={product.name} />
      <h3>{product.name}</h3>
      <p>
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>
    </div>
  ));

  return (
    <section className="hero relative h-[80vh] md:h-[60vh] xl:h-[100vh] text-white flex">
      <div className="container flex">
        <div className="hero-text relative  md:w-[45%] flex flex-col gap-6 md:gap-8 xl:gap-10 m-auto justify-center items-center md:text-center xl:max-w-[40%] xl:items-start xl:m-0 xl:text-left z-10">
          <p className="overline-text">NEW PRODUCT</p>
          <h1 className="text-snow">XX99 Mark II Headphones</h1>
          <p className="text-center xl:w-auto xl:text-left">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Btn className={`btn hover:bg-tacao bg-raw-sienna md:m-auto self-start `} />
        </div>
        {/* <img src={`/src/assets/home/${viewport}/image-hero.jpg`} alt="" className="hero-img absolute object-cover -z-10 top-0 left-0 right-0 bottom-0" /> */}
      </div>
    </section>
  );
};


export default Hero;
