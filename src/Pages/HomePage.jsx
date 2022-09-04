import { Image, ImageEngineProvider } from "@imageengine/react";
import { useEffect } from "react";
import { ChevronDoubleRight } from "react-bootstrap-icons";
import ImageGallery from "react-image-gallery";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import img1 from "../Assets/sliderImg/1.png";
import imgMob1 from "../Assets/sliderImg/1mob.png";
import img2 from "../Assets/sliderImg/2.png";
import imgMob2 from "../Assets/sliderImg/2mob.png";
import img3 from "../Assets/sliderImg/3.png";
import imgMob3 from "../Assets/sliderImg/3mob.png";
import img4 from "../Assets/sliderImg/4.png";
import imgMob4 from "../Assets/sliderImg/4mob.png";
import imgPromote1 from "../Assets/sliderImg/5.png";
import imgPromote2 from "../Assets/sliderImg/6.png";
import { CartDrawer, CategoriesGrid, Footer, Navbar, SearchModal } from "../Components";
import "../Styles/_variables.css";
import useWindowSize from "../utils/useWindowSize";

const HomePage = () => {
  const history = useHistory();
  const shop = useSelector((state) => state?.shop?.shop);
  const airpods = shop?.find((item) => item.name === "Apple AirPods 3rd Gen");
  const proController = shop?.find((item) => item.name === "Nintendo Switch Pro Controller");
  const magicKeyboard = shop?.find((item) => item.name === "Apple Magic Keyboards");
  const sennheiser = shop?.find((item) => item.name === "Custom Sennheiser e 945 Microphone");
  const sennheiserMobile = shop?.find((item) => item.name === "Custom Shure MV7 microphone");
  const cdnPrefix = "https://6fm7ey8k.cdn.imgeng.in";

  const { pathname } = useLocation();
  const { height, width } = useWindowSize();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = [
    { original: `${cdnPrefix}${img1}` },
    { original: `${cdnPrefix}${img2}` },
    { original: `${cdnPrefix}${img3}` },
    { original: `${cdnPrefix}${img4}` },
  ];
  const imagesMob = [
    { original: `${cdnPrefix}${imgMob1}` },
    { original: `${cdnPrefix}${imgMob2}` },
    { original: `${cdnPrefix}${imgMob3}` },
    { original: `${cdnPrefix}${imgMob4}` },
  ];

  const linkTo = (e) => {
    console.log(e.currentTarget.firstChild.src);
    console.log(`${cdnPrefix}${img1}`);
    switch (e.currentTarget.firstChild.src) {
      case `${cdnPrefix}${img1}`:
      case `${cdnPrefix}${imgMob1}`: {
        return history.push({
          pathname: `/product/${airpods.name}`,
          state: { item: airpods },
        });
      }
      case `${cdnPrefix}${img2}`:
      case `${cdnPrefix}${imgMob2}`: {
        return history.push({
          pathname: `/product/${proController.name}`,
          state: { item: proController },
        });
      }
      case `${cdnPrefix}${img3}`:
      case `${cdnPrefix}${imgMob3}`: {
        return history.push({
          pathname: `/categories/${magicKeyboard.name}`,
          state: { item: magicKeyboard, variants: true, from: pathname },
        });
      }
      case `${cdnPrefix}${img4}`: {
        return history.push({
          pathname: `/product/${sennheiser.name}`,
          state: { item: sennheiser },
        });
      }
      case `${cdnPrefix}${imgMob4}`: {
        return history.push({
          pathname: `/product/${sennheiserMobile.name}`,
          state: { item: sennheiserMobile },
        });
      }
      default:
        return null;
    }
  };

  return (
    <div className="pt-16 md:pt-20 min-h-screen w-screen relative font-cabin bg-black">
      <Navbar />
      <ImageEngineProvider deliveryAddress="https://6fm7ey8k.cdn.imgeng.in">
        <div className="h-hull w-full flex flex-col items-center space-y-0.5">
          <div className="h-96 md:h-full w-full flex flex-col items-center justify-center">
            <ImageGallery
              items={width > 768 ? images : imagesMob}
              showFullscreenButton={false}
              showPlayButton={true}
              autoPlay={true}
              slideInterval={3000}
              onClick={(e) => linkTo(e)}
              additionalClass={"object-cover"}
            />
          </div>
          <CategoriesGrid />
          <Link to="/promotional" className="w-full">
            <Image src={imgPromote1} alt="" className="object-cover h-full w-full" />
          </Link>
          <Link
            to="/shop"
            className="h-36 md:h-56 w-full  relative w-max h-max flex items-center justify-center text-center "
          >
            <div className="flex items-center justify-center group transition duration-300 bg-white md:bg-black md:hover:bg-white md:border-2 md:border-yellow-300 hover:border-white rounded-lg py-2 pl-2 pr-4">
              <span className="uppercase italic text-4xl md:text-7xl text-blue-600 md:text-white transition duration-300 md:group-hover:text-blue-600 font-bold whitespace-nowrap">
                see all products
              </span>
              <ChevronDoubleRight className="hidden lg:block absolute -right-24 text-4xl md:text-7xl transition duration-300 text-yellow-300 group-hover:text-blue-600 bounce-right transform translate-x-50" />
            </div>
          </Link>
          <Link to="/promotional" className="w-full">
            <Image src={imgPromote2} alt="" className="w-full" />
          </Link>
        </div>
      </ImageEngineProvider>
      <CartDrawer />
      <SearchModal />
      <Footer />
    </div>
  );
};

export default HomePage;
