import React, { useEffect, useState } from "react";
import { ChevronDown } from "react-bootstrap-icons";
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
    <div style={{ height: "calc(100vh - 64px)" }} className="w-full relative bg-black text-right font-cabin">
      <div
        style={{ background: `url("${img1}") no-repeat fixed center/cover` }}
        className="h-full relative border border-red-500"
      >
        <h2 className="relative w-full right-10 md:right-40 top-10 text-gray-100 text-right text-6xl">Promotional</h2>
        <div
          // style={{ transform: `translateY(${offsetY * 1.5}px)` }}
          className="w-96 absolute right-10 md:right-20 top-24 text-gray-100 text-left text-sm pt-8"
        >
          ColorWare's corporate division is designed with you in mind. We open new doors with our groundbreaking ability
          to offer your company a unique custom designed product for any occasion. By using multiple application
          techniques, we turn everyday items into breathtaking displays of advertising for your company. Contact
          branding@colorware.com to discuss the nearly limitless possibilities.
        </div>
        <ChevronDown className="text-6xl absolute bottom-7 right-24 text-white animate-bounce" />
      </div>

      <div
        style={{ background: `url("${img2}") no-repeat fixed center/cover` }}
        className="h-full relative border border-red-500"
      >
        <h2 className="w-48 relative top-10 pl-12 text-gray-900 text-left text-6xl md:whitespace-nowrap">
          Cost Effective
        </h2>
        <div className="max-w-md text-sm z-10 absolute left-0 top-16 left-12 bg-white text-gray-900 text-left pt-4">
          When cost and timeliness play a factor in creating promotional products for your company, we offer inexpensive
          ways to advertise. Single color logo application starts at $25. Shorter lead times than full customization. We
          can print directly to a variety of surfaces.
        </div>
      </div>

      <div
        style={{ background: `url("${img3}") no-repeat fixed center/cover` }}
        className="h-full relative border border-red-500"
      >
        <h2 className="relative w-full right-10 md:right-40 top-10 text-gray-100 text-right text-6xl md:whitespace-nowrap">
          Custom Color Matching
        </h2>

        <div
          // style={{ transform: `translateY(${-offsetY}px)` }}
          className="max-w-md absolute right-5 md:right-20 bottom-20 text-gray-100 text-right"
        >
          ColorWare understands the importance of building a brand, which is why we offer custom color matching. We can
          help you express the core of your company on a variety of products. We match paint colors to pantone numbers
          or physical samples like fabric, wood, or metal.{" "}
        </div>
      </div>

      <div
        style={{ background: `url("${img4}") no-repeat fixed center/cover` }}
        className="h-full relative border border-red-500"
      >
        <h2 className="relative w-full right-10 md:right-40 top-10 text-gray-100 text-right text-6xl md:whitespace-nowrap">
          Art Application
        </h2>
        <div
          // style={{ transform: `translateY(${-offsetY}px)` }}
          className="max-w-md absolute right-5 md:right-20 bottom-20 text-gray-100 text-right"
        >
          ColorWare has the ability to create simple, one-color logos, or large, full-color artwork. So let us help you
          represent your company or team with the highest quality art application techniques. The art application
          process is completed in a temperature controlled clean room. with color corrected light bulbs and air
          filtration system.{" "}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PromotionalPage;
