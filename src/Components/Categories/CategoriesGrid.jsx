import React from "react";
import { default as img1, default as img2, default as img4 } from "../../Assets/categories/banner-1000-controller.png";
import img3 from "../../Assets/categories/banner-1000-iphone.png";
import { default as img5, default as img6 } from "../../Assets/categories/banner-1000-p5.png";
import CategoryCard from "./CategoryCard";

const CategoriesGrid = () => {
  return (
    <div className="h-3/4 w-screen grid grid-cols-2	border bg-sound">
      <CategoryCard title="gaming" img={img1} color="lightgray" />
      <CategoryCard title="sound" img={img2} color="deepskyblue" />
      <CategoryCard title="iphones" img={img3} />
      <CategoryCard title="ipads" img={img4} />
      <CategoryCard title="playstation" img={img5} />
      <CategoryCard title="accessories" img={img6} />
    </div>
  );
};

export default CategoriesGrid;
