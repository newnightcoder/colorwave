import React, { useState } from "react";
import { Search, XLg } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { ProductCard } from ".";
import { toggleSearchModal } from "../Redux/Actions/shop.action";

const SearchModal = () => {
  const open = useSelector((state) => state?.shop.searchModalOpen);
  const items = useSelector((state) => state?.shop.shop);
  const [searchTerm, setSearchTerm] = useState("");
  const searchedItems = items.filter((item) => item.name.toLowerCase().includes(searchTerm));
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    setSearchTerm(e.currentTarget.value);
  };

  return (
    <div
      style={{ visibility: open ? "visible" : "hidden", zIndex: 10000 }}
      className="h-screen w-screen fixed top-0 left-0 bg-black text-white pt-2 pb-8 px-2 md:px-8 overflow-y-auto"
    >
      <div className="h-max w-full fixed top-0 left-0 bg-black py-4">
        <div className="h-max w-full flex items-center justify-between px-4">
          <h1 className="uppercase">search a brand or product</h1>
          <button
            onClick={() => {
              dispatch(toggleSearchModal());
            }}
            className="h-max w-min flex flex-col items-center gap-2 group transition duration-300 hover:text-blue-400"
          >
            <span className="text-sm">close</span>
            <XLg
              size={window.innerWidth > 500 ? 36 : 20}
              className="text-white transition duration-300 group-hover:text-blue-400"
            />
          </button>
        </div>
        <div className="h-1/6 w-full flex flex-col items-center">
          <div className="h-full w-full flex items-center justify-center gap-2 text-gray-300">
            <input
              type="search"
              placeholder="Search here..."
              className="h-8 w-2/3 uppercase rounded-sm outline-none focus:ring-0 border-b border-t-0 border-l-0 border-r-0 border-2 border-white bg-transparent transition transition-border duration-300"
              value={searchTerm}
              onChange={handleSearch}
            />
            <button>
              <Search color="white" size={26} />
            </button>
          </div>
          <span
            style={{ visibility: open && searchTerm.length > 1 ? "visible" : "hidden" }}
            className="block text-sm uppercase text-gray-400"
          >
            {searchedItems.length} results
          </span>
        </div>
      </div>
      <div className="h-max w-full grid place-items-center gap-4 md:gap-10 grid-cols-2 lg:grid-cols-3 px-6 pb-6 pt-32">
        {searchTerm.length > 1 &&
          searchedItems.map((item, i) => (
            <ProductCard
              key={i + 1}
              item={item}
              // onClick={() => {
              //   // dispatch(openSearchModal());
              //   console.log("okqy");
              //   // history.push({
              //   //   pathname: `/product/${item.name}`,
              //   // });
              // }}
            />
          ))}
      </div>
    </div>
  );
};

export default SearchModal;
