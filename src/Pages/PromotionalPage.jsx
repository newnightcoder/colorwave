import React, { useEffect, useState } from "react";
import img1 from "../Assets/promotional/1.png";
import img2 from "../Assets/promotional/2.png";
import img3 from "../Assets/promotional/3.png";
import img4 from "../Assets/promotional/4.png";
import { Footer } from "../Components";
import useWindowSize from "../utils/useWindowSize";

const promotionalImages = {
  img1,
  img2,
  img3,
  img4,
};

const PromotionalPage = () => {
  const { height, width } = useWindowSize();
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full min-h-screen relative bg-black font-cabin">
      <div
        style={{
          height: width < 640 ? "300px" : "450px",
          background: `url("${img1}") no-repeat center/cover`,
          // transform: `translateY(${-offsetY}px)`,
        }}
        className="relative border border-red-500"
      >
        <div
          style={{ transform: `translateY(${-offsetY}px)` }}
          className="absolute right-5 md:right-20 bottom-20 w-48 text-gray-100 text-right"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, magnam.
        </div>
      </div>
      <div
        style={{ height: width < 640 ? "300px" : "450px", background: `url("${img2}") no-repeat center/cover` }}
        className="border border-red-500"
      ></div>
      <div
        style={{ height: width < 640 ? "300px" : "450px", background: `url("${img3}") no-repeat center/cover` }}
        className="border border-red-500"
      ></div>
      <div
        style={{ height: width < 640 ? "300px" : "450px", background: `url("${img4}") no-repeat center/cover` }}
        className="border border-red-500"
      ></div>
      <Footer />
    </div>
  );
};

export default PromotionalPage;
