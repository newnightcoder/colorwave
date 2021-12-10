import React from "react";
import { CategoryLink } from ".";
import { default as img1, default as img4, default as img6 } from "../Assets/categories/banner-1000-controller.png";
import img3 from "../Assets/categories/banner-1000-iphone.png";
import img2 from "../Assets/categories/banner-1000-mic.png";
import img5 from "../Assets/categories/banner-1000-p5.png";

const Categories = () => {
  return (
    <div className="h-3/4 w-screen grid grid-cols-2	border bg-sound">
      <CategoryLink title="gaming" img={img1} color="lightgray" />
      <CategoryLink title="sound" img={img2} color="deepskyblue" />
      <CategoryLink title="iphones" img={img3} />
      <CategoryLink title="ipads" img={img4} />
      <CategoryLink title="playstation" img={img5} />
      <CategoryLink title="accessories" img={img6} />
    </div>
  );
};

export default Categories;
