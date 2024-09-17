import React from "react";

const CategoryHeader = ({ category }) => {
  return (
    <div className="text-center bg-black p-20">
      <h4 className=" text-snow">{category}</h4>
    </div>
  );
};

export default CategoryHeader;
