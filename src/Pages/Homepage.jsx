import React from "react";
import ImageGallery from "react-image-gallery";
import { Link } from "react-router-dom";
import img from "../Assets/products.png";
import img1 from "../Assets/sliderImg/1.png";
import img2 from "../Assets/sliderImg/2.png";
import img3 from "../Assets/sliderImg/3.png";
import { Categories, Footer, Navbar } from "../Components";
import "../Styles/_variables.css";

const images = [
  { original: img1, originalHeight: "50", originalWidth: "100" },
  { original: img2, originalHeight: "50", originalWidth: "100" },
  { original: img3, originalHeight: "50", originalWidth: "100" },
];
const Homepage = () => {
  return (
    <div className="min-h-screen w-screen relative flex flex-col items-center font-cabin">
      <Navbar />

      <ImageGallery items={images} showFullscreenButton={false} showPlayButton={true} autoPlay={true} slideInterval={2500} />
      <div className="h-48 w-full flex items-center justify-center py-16" style={{ background: `url("${img}") no-repeat center/cover`, height: "70vh" }}>
        <Link to="/shop" className="w-1/4 h-max flex items-center justify-center py-2 border border-2 border-black shadow-md hover:shadow-sm rounded text-white bg-black">
          see all products
        </Link>
      </div>
      <Categories />
      <Footer />
    </div>
  );
};

export default Homepage;
