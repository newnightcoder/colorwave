import React, { useEffect } from "react";
import ImageGallery from "react-image-gallery";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import img1 from "../Assets/sliderImg/1.png";
import img2 from "../Assets/sliderImg/2.png";
import img3 from "../Assets/sliderImg/3.png";
import img4 from "../Assets/sliderImg/4.png";
import { CartDrawer, CategoriesGrid, Footer, Navbar, SearchModal } from "../Components";
import "../Styles/_variables.css";

const HomePage = () => {
  const history = useHistory();
  const shop = useSelector((state) => state?.shop.shop);
  const airpods = shop.find((item) => item.name === "Apple AirPods 3rd Gen");
  const magicKeyboard = shop.find((item) => item.name === "Apple Magic Keyboards");

  console.log(airpods);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = [{ original: img1 }, { original: img2 }, { original: img3 }, { original: img4 }];

  const linkTo = (e) => {
    switch (e.currentTarget.firstChild.src) {
      case `http://localhost:3001${img1}`:
        return history.push({
          pathname: `/product/${airpods.name}`,
          state: { item: airpods },
        });
      case `http://localhost:3001${img2}`:
        return history.push({
          pathname: `/categories/${magicKeyboard.name}`,
          state: { item: magicKeyboard, variants: true },
        });

      default:
        return;
    }
  };

  return (
    <div className="min-h-screen w-screen relative flex flex-col items-center gap-1 font-cabin bg-black">
      <Navbar />

      <ImageGallery
        items={images}
        showFullscreenButton={false}
        showPlayButton={true}
        autoPlay={true}
        slideInterval={3000}
        onClick={(e) => linkTo(e)}
      />
      <CategoriesGrid />
      <div
        className="h-48 w-full flex items-center justify-center py-16"
        // style={{ background: `url("${img}") no-repeat center/cover`, height: "70vh" }}
      >
        <Link
          to="/shop"
          className="w-1/4 h-max flex items-center justify-center py-2 border border-2 border-black shadow-md hover:shadow-sm rounded text-white bg-black"
        >
          see all products
        </Link>
      </div>
      <CartDrawer />
      <SearchModal />
      <Footer />
    </div>
  );
};

export default HomePage;
