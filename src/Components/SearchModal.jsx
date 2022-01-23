import React, { useState } from "react";
import { Search, XLg } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { ProductCard } from ".";
import { toggleSearchModal } from "../Redux/Actions/shop.action";
import useWindowSize from "../utils/useWindowSize";

const SearchModal = () => {
  const open = useSelector((state) => state?.shop.searchModalOpen);
  const items = useSelector((state) => state?.shop.shop);
  const [searchTerm, setSearchTerm] = useState("");
  const { height, width } = useWindowSize();
  const searchedItems = items.filter((item) => item.name.toLowerCase().includes(searchTerm));
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    setSearchTerm(e.currentTarget.value);
  };

  return (
    <div
      style={{ opacity: open ? 1 : 0, zIndex: open ? 1000 : -1, backgroundColor: "rgba(0,0,0,.9)" }}
      className="h-screen w-screen fixed inset-0 overflow-hidden text-white pt-2 pb-8 px-2 md:px-8 overflow-y-auto transition-opacity duration-700 font-cabin"
    >
      <div className="h-max w-full flex flex-col items-center justify-start gap-8 py-4">
        <div className="h-max w-full flex items-center justify-between md:px-16">
          <div className="w-max relative text-center ">
            <h1 className="capitalize text-2xl md:text-5xl px-2 md:px-6 whitespace-nowrap">
              search a brand or product
            </h1>
            <span className="h-px w-full absolute inset-x-0 mx-auto left-0 bottom-0.5 bg-white"></span>
          </div>

          <button
            onClick={() => {
              dispatch(toggleSearchModal());
            }}
            className="h-max w-min flex flex-col items-center gap-2 group transition duration-300 hover:text-blue-400"
          >
            <div className="flex flex-col items-center justify-center gap-1">
              <span className="text-xs">close</span>
              <XLg
                size={width > 500 ? 36 : 24}
                className="text-white transition duration-300 group-hover:text-blue-400"
              />
            </div>
          </button>
        </div>

        <div className="h-1/6 w-full flex flex-col items-center">
          <div className="h-full w-full flex items-center justify-center gap-2 text-gray-300 px-2">
            <input
              type="search"
              placeholder="Type your search here..."
              className="h-8 w-full md:w-2/3 uppercase rounded-sm outline-none focus:ring-0 border-b border-t-0 border-l-0 border-r-0 border-2 border-white bg-transparent transition transition-border duration-300"
              value={searchTerm}
              onChange={handleSearch}
            />
            <button>
              <Search color="white" size={26} />
            </button>
          </div>
          <span
            style={{ visibility: open && searchTerm.length > 1 ? "visible" : "hidden" }}
            className="block text-sm uppercase text-blue-500"
          >
            {searchedItems.length} results
          </span>
        </div>
      </div>

      <div className="h-max w-full grid place-items-center gap-4 md:gap-10 grid-cols-2 lg:grid-cols-3 px-6 pb-6">
        {searchTerm.length > 1 && searchedItems.map((item, i) => <ProductCard key={i + 1} item={item} />)}
      </div>
    </div>
  );
};

export default SearchModal;
