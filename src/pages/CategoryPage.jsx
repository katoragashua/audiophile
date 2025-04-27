import React from "react";
import CategoryHeader from "../components/CategoryHeader";
import Footer from "../components/Footer";
import Categories from "../components/Categories";
import { useParams } from "react-router-dom";
import AudiogearGuy from "../components/AudiogearGuy";
import { getProducts } from "../api";
import CategoryProduct from "../components/CategoryProduct";
import { useLoaderData } from "react-router-dom";

export const loader = async ({ params }) => {
  try {
    const products = await getProducts();
    const categoryProducts = products.filter((c) => c.category === params.category);
    return { categoryProducts };
  } catch (error) {
    return null;
  }
};

const CategoryPage = () => {
  const { categoryProducts } = useLoaderData();
  const { category } = useParams();
  
  return (
    <div className="home grid gap-28 xl:gap-40 ">
      <CategoryHeader category={category} />
      <main className="grid gap-28 xl:gap-40 mb-20">
        {categoryProducts.map((product, index) => (
          <CategoryProduct key={product.id} index={index} {...product} />
        ))}
      </main>
      
      <Categories />
      <AudiogearGuy />
      <Footer />
      {/* src/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg */}
    </div>
  );
};

export default CategoryPage;
