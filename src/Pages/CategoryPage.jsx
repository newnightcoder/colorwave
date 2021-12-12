import React, { useEffect, useState } from "react";
import { ArrowLeft } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Product } from "../Components";

const CategoryPage = () => {
  const location = useLocation();
  const categoryName = location.pathname.split("/")[2];
  const variants = location.state?.variants || undefined;
  const item = location.state?.item || undefined;
  const items = useSelector((state) => state?.shop);
  const [isLoading, setIsLoading] = useState(true);
  const [subCategories, setSubCategories] = useState([]);
  const [categoryItems, setCategoryItems] = useState([]);
  let subCategoriesArray = [];

  const filterItemsOfCategory = () => {
    const filteredItems = items
      .map((item) => {
        const categories = item.categories;
        const matchingCategory = categories.find((category) => category.name === categoryName);
        if (matchingCategory) return { ...item };
      })
      .filter((item) => item !== undefined);
    setCategoryItems(filteredItems);
  };

  const createSubCategoriesArray = () => {
    categoryItems.forEach((item) => {
      const { categories } = item;
      const subCategory = categories.filter((category) => {
        if (categoryName === "gaming") return category.name !== categoryName && category.name !== "accessories";
        if (categoryName === "accessories") return category.name !== categoryName && category.name !== "gaming";
        return category.name !== categoryName;
      });
      const [{ name }, _] = subCategory;
      subCategoriesArray.push(name);
    });
    return subCategoriesArray;
  };

  const getSubCategories = () => {
    return setSubCategories([...new Set(subCategoriesArray)]);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (items.length !== 0) setIsLoading(false);
    filterItemsOfCategory();
    createSubCategoriesArray();
    getSubCategories();
    return () => {
      setIsLoading(true);
    };
  }, [isLoading, items]);

  return (
    <div className="h-full w-screen flex flex-col items-center justify-center text-white pt-4 pb-12">
      <span className="w-full flex items-center justify-center relative mt-4">
        <Link to="/" className="absolute left-10 top-50">
          <ArrowLeft size={28} className="fw-bold" />{" "}
        </Link>{" "}
        {categoryName.toUpperCase()}
      </span>
      <>
        {!variants
          ? subCategories.map((cat, i) => (
              <div className="py-8" key={i + 1}>
                <div className="h-min w-full text-left text-xl capitalize px-8 py-3">{cat}</div>
                <div className="h-full w-screen grid place-items-center gap-4 md:gap-10 grid-cols-2  lg:grid-cols-3 2xl:grid-cols-4 px-6">
                  {categoryItems.map((item, i) => {
                    const { categories } = item;
                    if (categories.find((category) => category.name === cat)) {
                      return <Product item={item} variants={item.variant_groups} key={i + 1} />;
                    }
                  })}
                </div>
              </div>
            ))
          : item.variant_groups[0].options.map((product, i) => {
              return (
                <div item={product} key={i + 1}>
                  <div>
                    <img src={product.assets[0]} />
                  </div>
                  <div>{product.name}</div>
                </div>
              );
            })}
      </>
    </div>
  );
};

export default CategoryPage;
