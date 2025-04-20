import React, { useContext, useEffect } from "react";
import headphoneGuy from "../assets/shared/desktop/image-best-gear.jpg";
import { Context } from "../Context";
import AOS from "aos";
import "aos/dist/aos.css";

const AudiogearGuy = (props) => {
  const { viewport } = useContext(Context);
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Whether animation should happen only once
    });
  }, []);
  return (
    <section>
      <div className="container flex flex-col-reverse  items-center justify-center gap-16 xl:gap-8 xl:flex-row">
        <div className=" xl:w-1/2">
          <div className="flex flex-col m-auto  gap-12 xl:gap-8  xl:m-0">
            <h4 className=" m-auto text-center w-[90%] md:max-w-[60%] xl:max-w-[70%] xl:text-left xl:m-0">
              Bringing you the{" "}
              <span className="text-raw-sienna inline-block text-3xl">
                best
              </span>{" "}
              audio gear
            </h4>
            <p className="m-auto text-center max-w-[90%] md:max-w-[75%] xl:text-left xl:m-0">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
        </div>
        <div className="overflow-auto rounded-lg">
          <img
            src={`/src/assets/shared/${viewport}/image-best-gear.jpg`}
            alt="Guy with headphones"
            data-aos="zoom-in"
          />
        </div>
      </div>
    </section>
  );
};

export default AudiogearGuy;
