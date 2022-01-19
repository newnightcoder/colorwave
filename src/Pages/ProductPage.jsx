import React, { useEffect } from "react";
import { ChevronDoubleRight } from "react-bootstrap-icons";
import ImageGallery from "react-image-gallery";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Footer } from "../Components";
import { addToCart, toggleCartDrawer } from "../Redux/Actions/cart.action";
import "../Styles/page.css";
import "../Styles/productGallery.css";
import "../Styles/_variables.css";
import useWindowSize from "../utils/useWindowSize";

const ProductPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();
  const shop = useSelector((state) => state.shop.shop);
  const { item } = location?.state || undefined;
  const { height, width } = useWindowSize();

  const itemImages = item?.assets.map((asset) => ({
    original: asset.url,
    thumbnail: asset.url,
    originalHeight: 500,
  }));

  console.log("itemImg", itemImages);

  const getRelatedItem = (id) => {
    const relatedProduct = shop.find((product) => product.id === id);
    console.log("relatedItem", relatedProduct);
    return relatedProduct;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [getRelatedItem]);

  const handleAddToCart = () => {
    const qty = 1;
    dispatch(addToCart(item, qty));
    dispatch(toggleCartDrawer());
  };

  const getFullVersionRelatedProduct = (product) => {
    let relatedProduct = shop.find((item) => item.id === product.id);
    return relatedProduct;
  };

  const bgColor = item?.categories[0]?.name === "gaming" ? "black" : "white";
  const descriptionBgColor = item?.categories[0]?.name === "gaming" ? "lightgray" : "rgb(209 213 219)";
  const textColor = item?.categories[0]?.name === "gaming" ? "rgb(209 213 219)" : "rgb(17 24 39)";

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

  return (
    <div className="font-cabin overflow-x-hidden relative">
      <div className="breadcrumb w-full flex items-center justify-start gap-1 whitespace-nowrap text-gray-900 pl-2 md:pl-10 pt-4 pb-3">
        {/* {"Home \u00BB "} */}
        <Link to="/" className="w-max flex items-center justify-center gap-1 capitalize hover:underline">
          home <ChevronDoubleRight size={12} className="transform translate-y-px" />
        </Link>
        <Link to="/" className="w-max flex items-center justify-center gap-1 capitalize hover:underline">
          <span>{item?.categories[0]?.name}</span> <ChevronDoubleRight size={12} className="transform translate-y-px" />
        </Link>
        <span className="w-max capitalize underline">{item?.name}</span>
      </div>

      <div
        className="product w-full flex flex-col md:flex-row items-center justify-center bg-black"
        style={{ height: "calc(100vh - 64px)", background: bgColor, color: textColor }}
      >
        <div className="h-max w-full md:w-1/2 flex items-center justify-center pt-4 px-2">
          {/* <img className="object-cover" src={item?.media.source} width="450" height="300" alt="" /> */}
          <ImageGallery
            items={itemImages}
            showFullscreenButton={false}
            showPlayButton={false}
            autoPlay={false}
            showNav={false}
            slideInterval={3000}
            showThumbnails={true}
            thumbnailPosition={width < 768 ? "top" : "left"}
          />
        </div>

        <div className="product-info h-full w-full md:w-1/2 flex flex-col md:justify-start border-l border-gray-600 border-opacity-60 text-left px-8 md:pt-8 gap-2">
          <div className="h-max w-full flex items-center justify-between pt-2">
            <h2 className="text-2xl text-bold">{item?.name}</h2>
            <span className="text-bold text-xl ">{item?.price.formatted_with_code} </span>
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-blue-600 text-white whitespace-nowrap w-36 uppercase py-2 self-end"
          >
            add to cart
          </button>
          <div
            // style={{ background: descriptionBgColor }}
            className="h-max max-h-40 w-full text-gray-900 md:w-10/12 md:h-48 overflow-auto p-4 border border-gray-100 rounded-sm"
            //❌ DOMPURIFY OR SANITIZER NEEDED!!! OR REACT-HTML-PARSER!!
            dangerouslySetInnerHTML={{ __html: item?.description }}
          ></div>
        </div>
      </div>
      <div className="related-product border-t border-gray-600 border-opacity-60 bg-black text-gray-300 text-center pt-5">
        <h2 className="whitespace-nowrap underline uppercase">Related Products</h2>
        <Carousel responsive={responsive} containerClass="" className="pb-8">
          {item?.related_products.map((related, i) => (
            <div
              key={i + 1}
              className="h-36 md:h-60 cursor-pointer"
              onClick={() => {
                if (getFullVersionRelatedProduct(related).variant_groups.length !== 0) {
                  history.push({
                    pathname: `/categories/${getRelatedItem(related.id).name}`,
                    state: { variants: true, item: getFullVersionRelatedProduct(related) },
                  });
                  return;
                }
                console.log(getFullVersionRelatedProduct(related));
                history.push({
                  pathname: `/product/${getRelatedItem(related.id).name}`,
                  state: { item: getFullVersionRelatedProduct(related) },
                });
              }}
            >
              <img className="object-contain h-full w-full" src={related.media.source} alt={related.name} />
              <div>{related.name}</div>
            </div>
          ))}
        </Carousel>
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
