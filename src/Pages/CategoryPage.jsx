import React, { useEffect } from "react";
import { useLocation } from "react-router";

const CategoryPage = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="h-screen flex items-center justify-center">
      <span>{category.toUpperCase()}</span>
      <div>
        {/* {categoryProducts.map((product) => {
          <Product />;
        })} */}
      </div>
    </div>
  );
};

export default CategoryPage;
