import React, { useEffect } from "react";
import { ChevronDoubleRight } from "react-bootstrap-icons";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Footer } from "../Components";
import { addToCart, toggleCartDrawer } from "../Redux/Actions/cart.action";
import "../Styles/_variables.css";

const ProductPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();
  const shop = useSelector((state) => state.shop);
  const { item } = location?.state || undefined;

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

  const imgBgColor =
    item?.categories[0]?.name === "gaming" ? { backgroundColor: "black" } : { backgroundColor: "white" };

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
      <div className="breadcrumb w-full flex items-center justify-start gap-1 whitespace-nowrap text-gray-900 ml-10 mt-4">
        {/* {"Home \u00BB "} */}
        <Link to="/" className="w-max flex items-center justify-center gap-1 capitalize hover:underline">
          home <ChevronDoubleRight size={12} className="transform translate-y-px" />
        </Link>
        <Link to="/" className="w-max flex items-center justify-center gap-1 capitalize hover:underline">
          {item?.categories[0]?.name} <ChevronDoubleRight size={12} className="transform translate-y-px" />
        </Link>
        <span className="w-max capitalize underline">{item?.name}</span>
      </div>
      <div
        className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center bg-black text-gray-300"
        style={imgBgColor}
      >
        <div className="w-full md:w-1/2 h-full flex items-center justify-center">
          <img className="object-cover" src={item?.media.source} width="450" height="300" alt="" />
        </div>

        <div className="h-full w-full md:w-1/2 flex flex-col  justify-center border-l border-gray-600 border-opacity-60 text-left px-8 pt-8 space-y-8">
          <h2 className="text-2xl text-bold">{item?.name}</h2>
          <span className="text-bold text-xl ">{item?.price.formatted_with_code} </span>
          <button onClick={handleAddToCart} className="bg-sound text-black whitespace-nowrap w-36 uppercase py-1">
            add to cart
          </button>
          <div
            className="text-left pr-20"
            //❌ DOMPURIFY OR SANITIZER NEEDED!!! OR REACT-HTML-PARSER!!
            dangerouslySetInnerHTML={{ __html: item?.description }}
          ></div>
        </div>
      </div>
      <div className="border-t border-gray-600 border-opacity-60 bg-black text-gray-300 text-center pt-5">
        <h2 className="whitespace-nowrap underline uppercase">Related Products</h2>
        {/* <div className="border-b border-gray-600 border-opacity-60 w-full flex items-center justify-evenly font-cabin pb-4 md:pb-8"> */}
        <Carousel responsive={responsive} containerClass="">
          {item?.related_products.map((related, i) => (
            <div
              // item={related}
              // variants={related.variant_groups}
              key={i + 1}
              className="cursor-pointer h-full border border-4 border-red-500 pb-8"
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
              <img className="object-cover h-full w-full" src={related.media.source} alt={related.name} />
              <div>{related.name}</div>
            </div>
          ))}
        </Carousel>
        {/* </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
