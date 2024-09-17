import React, { useContext, useState } from "react";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import AudiogearGuy from "../components/AudiogearGuy";
import { useLoaderData, useParams, Link } from "react-router-dom";
import { getProducts } from "../api";
import Btn from "../components/Btn";
import { Context } from "../Context";

export const loader = async ({ params }) => {
  try {
    const products = await getProducts();
    const product = products.find(
      (product) => product.name === params.productName
    );
    return product;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const ProductDetailPage = (props) => {
  const product = useLoaderData();
  const [quantity, setQuantity] = useState(() => 1);
  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => {
      if (prev <= 1) return (prev = 1);
      return prev - 1;
    });

  console.log(quantity);
  const { addToCart, cart, removeFromCart, viewport } = useContext(Context);
  const {
    id,
    price,
    includes,
    features,
    description,
    image,
    name,
    new: newproduct,
    others,
    gallery,
  } = product;

  return (
    <div className="grid gap-40">
      <section className="container product-intro">
        <Link to={"/"}>
          <span className="py-14 inline-block">Go back</span>
        </Link>
        <div className="flex flex-col md:flex-row justify-between md:gap-24 xl:gap-28 items-center">
          <img
            src={`/${image[viewport]}`}
            alt={name + " image"}
            className="rounded-lg md:max-w-[43%] xl:max-w-[50%]"
          />
          <div className="grid gap-8">
            <span className="overline-text inline-block"></span>
            <h2>{name}</h2>
            <p>{description}</p>
            <h6>${price.toLocaleString()}</h6>
            <div className="flex gap-4">
              <div className="flex items-center gap-6 bg-white-smoke text-chinese-black px-[1rem]">
                <span
                  className="text-dark-gray cursor-pointer px-2 w-full"
                  onClick={decrementQuantity}
                >
                  -
                </span>
                <span className="font-medium">{quantity}</span>
                <span
                  className="text-dark-gray cursor-pointer px-2 w-full"
                  onClick={incrementQuantity}
                >
                  +
                </span>
              </div>

              {cart.some((product) => product.id === id) ? (
                <Link
                  to={"#"}
                  className="uppercase btn hover:bg-tacao bg-raw-sienna text-snow"
                  onClick={async () => removeFromCart(id)}
                >
                  Remove from cart
                </Link>
              ) : (
                <Link
                  to={"#"}
                  className="uppercase btn hover:bg-tacao bg-raw-sienna text-snow"
                  onClick={async () => addToCart(id, quantity)}
                >
                  Add to cart
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="container flex flex-col xl:flex-row justify-start gap-28  product-features-and-box-content ">
        <div className="flex flex-col items-start md:items-center gap-6 xl:flex-col xl:items-start xl:max-w-[57%] ">
          <h5>FEATURES</h5>
          <p className="text-dark-gray">{features}</p>
        </div>
        <div className="flex  xl:flex-col gap-6  justify-self-center ">
          <h5 className="w-[50%] xl:w-full">IN THE BOX</h5>
          <ul className="">
            {includes.map((item, index) => (
              <li key={index} className="flex gap-4 pb-2">
                <span className="text-raw-sienna">{item?.quantity}x</span>
                <span>{item?.item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="container product-masonry-gallery">
        <div>
          <img
            src={`/${gallery?.first?.desktop}`}
            alt=""
            className="object-cover hover:scale-[1.1] ease-in-out duration-200 "
          />
        </div>
        <div>
          <img
            src={`/${gallery?.second?.desktop}`}
            alt=""
            className="object-cover hover:scale-[1.1] ease-in-out duration-200 "
          />
        </div>
        <div>
          <img
            src={`/${gallery?.third?.desktop}`}
            alt=""
            className="hover:scale-[1.2] ease-in-out duration-200 "
          />
        </div>
      </section>
      <section className="container others flex flex-col gap-8 text-center pb-20">
        <h4>YOU MAY ALSO LIKE</h4>
        <div className="flex flex-col gap-8 md:flex-row">
          {others.map((product) => (
            <div
              key={product.slug}
              className="flex flex-col gap-8 items-center"
            >
              <img
                src={`/${product?.image[viewport]}`}
                alt={product?.name}
                className="rounded-lg"
              />
              <h5>{product?.name}</h5>
              <Btn
                className={`btn hover:bg-tacao bg-raw-sienna text-snow`}
                productName={product?.name}
              />
            </div>
          ))}
        </div>
      </section>
      <Categories />
      <AudiogearGuy />
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
