import React, { useEffect } from "react";
import { ChevronDoubleRight } from "react-bootstrap-icons";
import ImageGallery from "react-image-gallery";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import img1 from "../Assets/sliderImg/1.png";
import img2 from "../Assets/sliderImg/2.png";
import imgPromote2 from "../Assets/sliderImg/3'.png";
import img3 from "../Assets/sliderImg/3.png";
import imgPromote1 from "../Assets/sliderImg/4'.png";
import img4 from "../Assets/sliderImg/4.png";
import { CartDrawer, CategoriesGrid, Footer, Navbar, SearchModal } from "../Components";
import "../Styles/homePage.css";
import "../Styles/_variables.css";

const HomePage = () => {
  const history = useHistory();
  const shop = useSelector((state) => state?.shop.shop);
  const airpods = shop.find((item) => item.name === "Apple AirPods 3rd Gen");
  const proController = shop.find((item) => item.name === "Nintendo Switch Pro Controller");
  const magicKeyboard = shop.find((item) => item.name === "Apple Magic Keyboards");
  const sennheiser = shop.find((item) => item.name === "Custom Sennheiser e 945 Microphone");
  const { pathname } = useLocation();

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
          pathname: `/product/${proController.name}`,
          state: { item: proController },
        });
      case `http://localhost:3001${img3}`:
        return history.push({
          pathname: `/categories/${magicKeyboard.name}`,
          state: { item: magicKeyboard, variants: true, from: pathname },
        });
      case `http://localhost:3001${img4}`:
        return history.push({
          pathname: `/product/${sennheiser.name}`,
          state: { item: sennheiser },
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
      <Link to="/promotional" className="h-max w-full">
        <img src={imgPromote1} alt="" className="w-full" />
      </Link>
      <div className="h-36 md:h-56 w-full flex items-center justify-center">
        <Link
          to="/shop"
          className="group relative w-max h-max flex items-center justify-center text-center transition duration-300 bg-black hover:bg-white border-2 border-yellow-300 hover:border-white rounded-lg py-2 pl-2 pr-4"
        >
          <span className="uppercase italic text-4xl md:text-7xl text-white transition duration-300 group-hover:text-blue-600 font-bold whitespace-nowrap">
            see all products
          </span>
          <ChevronDoubleRight className="hidden lg:block absolute -right-24 text-4xl md:text-7xl transition duration-300 text-yellow-300 group-hover:text-blue-600 bounce-right transform translate-x-50" />
        </Link>
      </div>
      <Link to="/promotional" className="h-max w-full">
        <img src={imgPromote2} alt="" className="w-full" />
      </Link>
      <CartDrawer />
      <SearchModal />
      <Footer />
    </div>
  );
};

export default HomePage;
