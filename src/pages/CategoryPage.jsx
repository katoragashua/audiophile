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
    const categories = products.filter((c) => c.category === params.category);
    return { categories };
  } catch (error) {
    return null;
  }
};

const CategoryPage = () => {
  const { categories } = useLoaderData();
  const { category } = useParams();
  return (
    <div className="home grid gap-28 xl:gap-40 ">
      <CategoryHeader category={category} />
      <main className="grid gap-28 xl:gap-40 mb-20">
        {categories.map((category, index) => (
          <CategoryProduct key={category.id} index={index} {...category} />
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
