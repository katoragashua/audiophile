import React from "react";
import CategoryCard from "./CategoryCard";

const categories = [
  {
    category: "headphones",
    img: "/src/assets/shared/desktop/image-category-thumbnail-headphones.png",
  },
  {
    category: "speakers",
    img: "/src/assets/shared/desktop/image-category-thumbnail-speakers.png",
  },
  {
    category: "earphones",
    img: "/src/assets/shared/desktop/image-category-thumbnail-earphones.png",
  },
];

const Categories = () => {
  return (
    <section className="mt-[15vh] xl:mt-[28vh]">
      <div className="container">
        <div className="categories grid gap-20 xl:gap-8 ">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
