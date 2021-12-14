import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { addToCart } from "../Redux/Actions/cart.action";
import "../Styles/_variables.css";

const ProductPage = () => {
  const location = useLocation();
  const [state, setState] = useState(location.state);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // setState(location.state);
  const { item } = location.state;

  console.log("location", location);
  console.log("item du location.state", item);

  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const history = useHistory();

  const shop = useSelector((state) => state.shop);

  const getRelatedItem = (id) => {
    const relatedProduct = shop.find((product) => product.id === id);
    console.log("relatedItem", relatedProduct);
    return relatedProduct;
  };

  const handleAddToCart = () => {
    dispatch(addToCart(item, qty));
  };

  const imgBgColor =
    item?.categories[0]?.name === "gaming" ? { backgroundColor: "black" } : { backgroundColor: "white" };

  return (
    <div className="bg-black font-cabin">
      <div className="text-gray-300 ml-10">
        {"Home \u00BB "}
        <span className="capitalize">{item?.categories[0]?.name}</span> {"\u00BB "}
        {item?.name}
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
        <div className="border-b border-gray-600 border-opacity-60 w-full flex items-center justify-evenly font-cabin pb-4 md:pb-8">
          {item?.related_products.map((related, i) => (
            <div
              key={i}
              className="cursor-pointer"
              onClick={() =>
                history.replace({
                  path: `/product/${getRelatedItem(related.id).name}`,
                  state: getRelatedItem(related.id),
                })
              }
            >
              <img className="object-cover" src={related.media.source} alt={related.name} />
              <div>{related.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
