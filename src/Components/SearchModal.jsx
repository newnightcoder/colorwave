import React from "react";
import { useSelector } from "react-redux";

const SearchModal = () => {
  const open = useSelector((state) => state?.shop.openSearchModal);
  return (
    <div
      style={{ visibility: open ? "visible" : "hidden" }}
      className="h-screen w-screen fixed top-0 left-0 bg-white z-50"
    >
      SEARCH MODAL
    </div>
  );
};

export default SearchModal;
