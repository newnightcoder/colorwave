import { useEffect, useRef, useState } from "react";
import { ChevronDoubleRight } from "react-bootstrap-icons";
import ImageGallery from "react-image-gallery";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import { CartDrawer, Footer, Navbar, RelatedProduct, SearchModal } from "../Components";
import { addToCart, toggleCartDrawer } from "../Redux/Actions/cart.action";
import "../Styles/_globals.css";
import useWindowSize from "../utils/useWindowSize";

const ProductPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();
  const shop = useSelector((state) => state.shop.shop);
  const { item } = location?.state || undefined;
  const { parentProduct } = location?.state || undefined;
  const [related, setRelated] = useState(null);
  const { width } = useWindowSize();
  const [oneOrMoreImages, setOneOrMoreImages] = useState(null);
  const [ready, setReady] = useState(false);
  const ref = useRef(null);
  const style = {
    bgColor: item?.categories[0]?.name === "gaming" ? "black" : "#fefefe",
    descriptionBgColor: item?.categories[0]?.name === "gaming" ? "rgb(40,40,40)" : "rgba(240,240,240,.99)",
    textColor: item?.categories[0]?.name === "gaming" ? "rgba(250,250,250,.99)" : "rgb(40,40,40)",
  };
  const cloudinaryCdnPrefix = "https://my-cloud-cdn.mo.cloudinary.net/colorwave";
  const commercejsCdn = "https://cdn.chec.io";

  const galleryItems = {
    itemImages: item?.assets
      .filter((asset) => !asset.filename.includes("product"))
      .map((asset) => ({
        original: asset.url.replace(commercejsCdn, cloudinaryCdnPrefix),
        thumbnail: asset.url.replace(commercejsCdn, cloudinaryCdnPrefix),
      })),
    onlyOneImg: [
      {
        original: item?.assets[0].url.replace(commercejsCdn, cloudinaryCdnPrefix),
        thumbnail: item?.assets[0].url.replace(commercejsCdn, cloudinaryCdnPrefix),
      },
    ],
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const getRelatedItem = (id) => {
    const relatedProduct = shop.find((product) => product.id === id);
    return relatedProduct;
  };

  const getFullVersionRelatedProduct = (product) => {
    let relatedProduct = shop.find((item) => item.id === product.id);
    return relatedProduct;
  };

  const linkToRelatedProduct = (related, parentProduct) => {
    setReady(false);
    if (getFullVersionRelatedProduct(related).variant_groups.length !== 0) {
      setRelated(getRelatedItem(related.id).name);
      console.log("related item", getRelatedItem(related.id));
      history.push({
        pathname: `/categories/${getRelatedItem(related.id).name}`,
        state: { variants: true, item: getFullVersionRelatedProduct(related), parentProduct },
      });
      return;
    }
    console.log("related item", getRelatedItem(related.id));
    setRelated(getRelatedItem(related.id).name);
    history.push({
      pathname: `/product/${getRelatedItem(related.id).name}`,
      state: { item: getFullVersionRelatedProduct(related), parentProduct },
    });
  };

  const handleAddToCart = () => {
    const qty = 1;
    dispatch(addToCart(item, qty));
    dispatch(toggleCartDrawer());
  };

  useEffect(() => {
    setReady(false);
    window.scrollTo(0, 0);
  }, [related]);

  useEffect(() => {
    setOneOrMoreImages(item?.assets.length > 1 ? galleryItems.itemImages : galleryItems.onlyOneImg);
  }, [item, location]);

  useEffect(() => {
    const galleryImage = document.querySelector(".image-gallery-image");
    const displayProduct = () =>
      setTimeout(() => {
        setReady(true);
      }, 750);
    galleryImage?.addEventListener("load", displayProduct);
    return () => {
      galleryImage?.removeEventListener("load", displayProduct);
    };
  }, [oneOrMoreImages]);

  useEffect(() => {
    return () => {
      setOneOrMoreImages(null);
      setReady(false);
    };
  }, [location]);

  return (
    <div className="pt-16 md:pt-20 font-cabin overflow-x-hidden relative">
      <Navbar />
      <div className="breadcrumb relative h-16 md:h-20 w-full flex items-center justify-start space-x-1 whitespace-nowrap text-gray-900 bg-white px-2 md:pl-10 md:border-b border-gray-200">
        <Link to="/" className="w-max flex items-center justify-center space-x-1 capitalize hover:underline">
          home <ChevronDoubleRight size={12} className="transform translate-y-px" />
        </Link>
        <Link
          to={{
            pathname: `/categories/${parentProduct !== undefined ? parentProduct.name : item.categories[0]?.name}`,
            state: {
              variants: parentProduct !== undefined && true,
              item: parentProduct !== undefined && parentProduct,
            },
          }}
          className="w-max flex items-center justify-center space-x-1 capitalize hover:underline"
        >
          <span>{parentProduct !== undefined ? parentProduct.name : item.categories[0]?.name}</span>
          <ChevronDoubleRight size={12} className="transform translate-y-px" />
        </Link>
        <span className="w-max capitalize underline truncate">{item?.name}</span>
      </div>
      <div className={` z-50 w-full h-2 bg-transparent left-0 absolute top-32 md:top-40 group`}>
        <div
          className={`${
            ready ? " origin-right animate-barLoadOut" : " origin-left animate-barLoadIn"
          } h-full bg-gradient-to-r from-blue-500 to-blue-400 scale-x-0`}
        ></div>
      </div>

      <div
        className="product relative w-full max-w-8xl mx-auto flex flex-col lg:flex-row justify-start items-center space-y-8 lg:space-y-2 lg:space-x-2 lg:justify-center bg-black pb-16 lg:pb-0 2xl:px-10"
        style={{
          minHeight: "calc(100vh - 112px)",
          background: style.bgColor,
          color: style.textColor,
          visibility: ready ? "visible" : "hidden",
        }}
      >
        <div ref={ref} className="h-max w-full lg:w-2/3 flex flex-col items-center justify-center lg:px-2">
          <ImageGallery
            items={oneOrMoreImages ?? []}
            showFullscreenButton={ready ? true : false}
            showThumbnails={ready ? true : false}
            showPlayButton={false}
            autoPlay={false}
            showNav={false}
            slideInterval={3000}
            thumbnailPosition={"bottom"}
          />
        </div>

        <div className="product-info h-full w-full lg:w-1/3 flex flex-col items-center lg:justify-start border-l border-gray-600 border-opacity-60 text-left px-3 md:px-6 space-y-6">
          <div className="h-max w-11/12 lg:w-full max-w-lg flex items-center justify-between md:pt-2">
            <h2 className="w-1/2 lg:w-2/3 text-lg md:text-xl text-bold">{item?.name}</h2>
            <span className="text-bold text-md md:text-lg whitespace-nowrap">{item?.price.formatted}&nbsp;€ </span>
          </div>
          <button
            onClick={handleAddToCart}
            className="w-11/12 max-w-lg bg-blue-500 text-white whitespace-nowrap uppercase py-2"
          >
            add to cart
          </button>
          <div className="w-full flex flex-col items-center justify-center space-y-4 self-center">
            <div className="w-max relative px-3">
              <span className="capitalize text-lg md:text-xl">product info</span>
              <span
                style={{ backgroundColor: style.textColor }}
                className="h-px w-full absolute inset-x-0 mx-auto left-0 bottom-1"
              ></span>
            </div>

            <div
              style={{ backgroundColor: style.descriptionBgColor, color: style.textColor }}
              className="scrollbar-description h-max max-h-56 w-full max-w-lg md:h-auto overflow-auto p-4 rounded-sm"
              //❌ DOMPURIFY OR SANITIZER NEEDED!!! OR REACT-HTML-PARSER!!
              dangerouslySetInnerHTML={{ __html: item?.description }}
            ></div>
          </div>
        </div>
      </div>
      <div className="related-product border-t border-gray-600 border-opacity-60 bg-black text-gray-300 text-center py-5">
        <div className="w-max relative mx-auto">
          <h2 className="whitespace-nowrap text-lg md:text-xl uppercase px-3">Related Products</h2>
          <span className="h-px w-full absolute inset-x-0 mx-auto left-0 bottom-1 bg-gray-300"></span>
        </div>

        <Carousel responsive={responsive} infinite={true} className={`${ready ? "visible" : "hidden"} pb-8`}>
          {item?.related_products.map((related, i) => (
            <RelatedProduct
              key={related.id}
              linkToRelatedProduct={linkToRelatedProduct}
              related={related}
              parentProduct={parentProduct}
            />
          ))}
        </Carousel>
      </div>

      <Footer />
      <CartDrawer />
      <SearchModal />
    </div>
  );
};

export default ProductPage;
