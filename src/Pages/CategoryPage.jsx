import React, { useEffect, useState } from "react";
import { ChevronLeft } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { ProductCard } from "../Components";
import "../Styles/page.css";
import "../Styles/_variables.css";

const CategoryPage = () => {
  const location = useLocation();
  const categoryName = location.pathname.split("/")[2];
  const items = useSelector((state) => state?.shop.shop);
  const variants = location.state?.variants || undefined;
  const item = location.state?.item || undefined;
  const [isLoading, setIsLoading] = useState(true);
  const [subCategories, setSubCategories] = useState([]);
  const [categoryItems, setCategoryItems] = useState([]);
  const [itemVariants, setItemVariants] = useState([]);
  let subCategoriesArray = [];
  const { pathname } = useLocation();

  const findProductVariants = () => {
    if (variants === undefined) return;
    let variantsArray = item?.variant_groups[0]?.options;
    let variantItems = variantsArray.map((variant) => {
      return variant.name;
    });
    return variantItems;
  };

  const filterItemsOfCategory = () => {
    const filteredItems = items
      .map((item) => {
        const categories = item.categories;
        const matchingCategory = categories.find((category) => category.name === categoryName);
        if (matchingCategory) return { ...item };
      })
      .filter((item) => item !== undefined);
    return setCategoryItems(filteredItems);
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
    if (variants) {
      const products = findProductVariants();
      setItemVariants(products);
    }
    filterItemsOfCategory();
    createSubCategoriesArray();
    getSubCategories();
    return () => {
      setIsLoading(true);
    };
  }, [isLoading, items, item, variants]);

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center pt-4 pb-12 font-cabin"
      style={{
        backgroundColor: categoryName === "gaming" ? "#333" : categoryName === "sound" ? "lightgray" : "#ebebeb",
        color: categoryName === "gaming" ? "#ebebeb" : categoryName === "sound" ? "black" : "black",
      }}
    >
      <span className="w-full relative flex items-center justify-start relative mt-4">
        <Link
          to={{ pathname: location.state?.from.includes("shop") ? "/shop" : "/" }}
          className="absolute left-10 top-50"
        >
          <ChevronLeft size={28} className="fw-bold" />
        </Link>
        <span className="w-min relative text-2xl font-bold px-6 ml-32">
          {categoryName.toUpperCase()}
          <span
            style={{
              backgroundColor: categoryName === "gaming" ? "#ebebeb" : categoryName === "sound" ? "black" : "black",
            }}
            className="h-px w-full absolute inset-x-0 mx-auto left-0 -bottom-0.5"
          ></span>
        </span>
      </span>

      <div className="w-full">
        {!variants ? (
          subCategories.map((cat, i) => (
            <div id={cat} className="flex flex-col items-center justify-center py-8" key={i + 1}>
              <div className="h-min w-max relative text-center text-2xl capitalize px-8 mb-6">
                <h2 className="text-3xl relative z-10">{cat}</h2>
                <span className="h-1 w-full absolute inset-x-0 mx-auto left-0 bottom-0.5 bg-yellow-300"></span>
              </div>
              <div className="h-full w-full grid place-items-center gap-4 md:gap-10 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 px-6">
                {categoryItems.map((item, i) => {
                  const { categories } = item;
                  if (categories.find((category) => category.name === cat)) {
                    return (
                      <ProductCard
                        item={item}
                        variants={item.variant_groups}
                        key={i + 1}
                        bgColor={
                          categoryName === "sound" ? "white" : categoryName === "gaming" ? "rgba(0,0,0,1)" : "white"
                        }
                      />
                    );
                  }
                })}
              </div>
            </div>
          ))
        ) : (
          <div className="h-full w-full grid place-items-center gap-4 md:gap-10 grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 px-6">
            {itemVariants.map((variant, i) => {
              let matchingItem = items.find((item) => item.name === variant);
              return <ProductCard item={matchingItem} key={i + 1} variants={undefined} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
