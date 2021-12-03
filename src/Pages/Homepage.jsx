import React from "react";
import ImageGallery from "react-image-gallery";
import img1 from "../Assets/sliderImg/1.png";
import img2 from "../Assets/sliderImg/2.png";
import img3 from "../Assets/sliderImg/3.png";
import { Footer, Navbar } from "../Components";
import "../Styles/_variables.css";
const images = [
  {
    original: img1,
  },
  {
    original: img2,
  },
  {
    original: img3,
  },
];

const Homepage = () => {
  return (
    <div className="h-screen w-screen relative flex flex-col space-y-8 items-center justify-center text-blue-500 font-cabin">
      <Navbar />
      Homepage
      <ImageGallery items={images} />
      {/* <Categories /> */}
      <Footer />
    </div>
  );
};

export default Homepage;
