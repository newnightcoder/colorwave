import React from "react";
import img1 from "../../Assets/categories/banner-1000-controller.png";
import img3 from "../../Assets/categories/banner-1000-iphone.png";
import img2 from "../../Assets/categories/banner-1000-mic.png";
import img4 from "../../Assets/categories/banner-1000-mouse.png";
import CategoryCard from "./CategoryCard";

const CategoriesGrid = () => {
  return (
    <div className="h-3/4 w-screen grid grid-cols-2	border bg-sound">
      <CategoryCard title="gaming" img={img1} color="lightgray" />
      <CategoryCard title="sound" img={img2} color="deepskyblue" />
      <CategoryCard title="skins" img={img3} />
      <CategoryCard title="accessories" img={img4} />
    </div>
  );
};

export default CategoriesGrid;
