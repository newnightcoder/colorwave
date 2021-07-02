import React from "react";
import Gaming from "./Products-Categories/Gaming";
import Sound from "./Products-Categories/Sound";

const Products = () => {
  return (
    <div className="h-full w-full space-y-4">
      <Gaming />
      <Sound />
    </div>
  );
};

export default Products;
