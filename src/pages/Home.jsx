import React, { useState, useEffect, useContext } from "react";
import Hero from "../components/Hero.jsx";
import Btn from "../components/Btn.jsx";
import { useLoaderData } from "react-router-dom";
import { getProducts } from "../api.js";
import data from "../data.json";
// import yx1Desktop from "../assets/home/desktop/image-earphones-yx1.jpg";
// import yx1Mobile from "../assets/home/mobile/image-earphones-yx1.jpg";
// import yx1Tablet from "../assets/home/tablet/image-earphones-yx1.jpg";
import zx9 from "../assets/home/desktop/image-speaker-zx9.png";
// import zx7Desktop from "../assets/home/desktop/image-speaker-zx7.jpg";
// import zx7Tablet from "../assets/home/tablet/image-speaker-zx7.jpg";
// import zx7Mobile from "../assets/home/mobile/image-speaker-zx7.jpg";
import circles from "../assets/home/desktop/pattern-circles.svg";
import Categories from "../components/Categories.jsx";

import Footer from "../components/Footer.jsx";
import { Context } from "../Context.jsx";
import AudiogearGuy from "../components/AudiogearGuy.jsx";

export const loader = async () => {
  try {
    const products = await getProducts();
    const newProducts = products.filter((product) => product.new);
    // const categories = products.reduce((acc, product) => {
    //   const { category } = product;
    //   if (!acc.includes(category)) {
    //     acc.push(category);
    //   }
    //   return acc;
    // }, []);
    return { products, newProducts };
  } catch (error) {
    return null;
  }
};

const Home = () => {
  const { newProducts, products } = useLoaderData();
  const { viewport } = useContext(Context);
  return (
    <div className="home">
      <Hero newProducts={newProducts} />
      <div className="grid gap-32 md:gap-40">
        <Categories />
        <section>
          <div className="container grid gap-12">
            <div>
              <div className="home-zx9 flex flex-col justify-end items-center gap-24 py-16 xl:px-20 xl:py-40 xl:gap-20 rounded-lg text-snow bg-raw-sienna relative overflow-hidden z-20 xl:flex-row">
                {/* <div className=""> */}
                {/* <img src={zx9} alt="" className="w-[20%] m-auto" /> */}
                <img
                  src={zx9}
                  alt=""
                  className="w-[25%] m-auto xl:w-[33%] xl:absolute xl:bottom-0 xl:left-[7rem] scale-1"
                />
                {/* </div> */}
                {/* <svg
                className="absolute top-0 -left-[15%] -z-10"
                width="944"
                height="944"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g stroke="#FFF" fill="none" fillRule="evenodd" opacity=".202">
                  <circle cx="472" cy="472" r="235.5" />
                  <circle cx="472" cy="472" r="270.5" />
                  <circle cx="472" cy="472" r="471.5" />
                </g>
              </svg> */}
                <img
                  src={circles}
                  alt=""
                  className="  absolute -z-10 md:scale-[1.5] md:-top-[30%] xl:top-0 xl:-left-[15%] xl:transform-none"
                />
                <div className="flex flex-col items-center justify-center gap-12  z-10 xl:w-[40%] xl:items-start">
                  <h2 className="text-snow w-[40%] text-center xl:w-full xl:text-left">
                    zx9 Speaker
                  </h2>
                  <p className="w-[50%] text-center xl:text-left xl:w-full">
                    Upgrade to premium speakers that are phenomenally built to
                    deliver truly remarkable sound.
                  </p>
                  <Btn
                    className={`bg-chinese-black text-white hover:bg-quartz`}
                  />
                </div>
              </div>
            </div>
            <div className=" rounded-lg bg-zx bg-cover relative">
              {/* <div className="flex flex-col gap-8 rounded-lg bg-zx7 px-20 py-20  bg-cover relative"></div> */}
              {
                <img
                  src={`./src/assets/home/${viewport}/image-speaker-zx7.jpg`}
                  alt=""
                  className="absolute object-cover w-full h-full -z-10"
                />
              }
              <div className="flex flex-col gap-12 px-20 py-28 ">
                <h5>ZX7 Speaker</h5>
                <Btn
                  className={`bg-transparent border-solid border-black text-chinese-black hover:text-snow hover:bg-black`}
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-12 xl:gap-8">
              <div className="rounded-lg overflow-auto w-full md:w-1/2">
                {
                  <img
                    src={`./src/assets/home/${viewport}/image-earphones-yx1.jpg`}
                    alt=""
                    className="object-cover"
                  />
                }
              </div>
              <div className="flex flex-col text-start py-12 px-8  md:justify-center gap-8 rounded-lg bg-snow md:px-20 w-full md:w-1/2">
                <h5>YX1 Earphones</h5>
                <Btn
                  className={`bg-transparent border-solid border-black text-chinese-black hover:text-snow hover:bg-black`}
                />
              </div>
            </div>
          </div>
        </section>
        <AudiogearGuy viewport={viewport} />
        <Footer />
      </div>
    </div>
  );
};

export default Home;

// const [count, setCount] = useState(() => 0);

// const increment = () => {
//   setCount((prev) => {
//     if (prev === 3) {
//       return (prev = 0);
//     }
//     return prev + 1;
//   });
// };

// useEffect(() => {
//   const intervalId = setTimeout(() => {
//     increment();
//   }, 2000);

//   // Clean up the Timeout when the component unmounts
//   return () => clearTimeout(intervalId);
// }, [count]); // Empty dependency array ensures that the effect runs only once, similar to componentDidMount

//// if (!acc[product.category]) {
//   acc[product.category] = [];
// }
// acc[product.category].push(product);
// return acc;
