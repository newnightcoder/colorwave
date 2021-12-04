import React from "react";
import { useLocation } from "react-router";

const Category = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];

  return (
    <div className="h-screen flex items-center justify-center">
      <span>{category.toUpperCase()}</span>
      <div>
        {categoryProducts.map((product) => {
          <Product />;
        })}
      </div>
    </div>
  );
};

export default Category;
