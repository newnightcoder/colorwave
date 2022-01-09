import React, { useEffect, useState } from "react";
import { ArrowLeft } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { ProductCard } from "../Components";
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
      className="h-full w-screen flex flex-col items-center justify-center pt-4 pb-12 font-cabin"
      style={{
        backgroundColor: categoryName === "gaming" ? "#333" : categoryName === "sound" ? "lightgray" : "#ebebeb",
        color: categoryName === "gaming" ? "#ebebeb" : categoryName === "sound" ? "black" : "black",
      }}
    >
      <span className="w-full flex items-center justify-center relative mt-4">
        <Link to="/" className="absolute left-10 top-50">
          <ArrowLeft size={28} className="fw-bold" />
        </Link>
        {categoryName.toUpperCase()}
      </span>
      <>
        {!variants
          ? subCategories.map((cat, i) => (
              <div className="py-8" key={i + 1}>
                <div className="h-min w-full text-center text-xl capitalize px-8 py-3">{cat}</div>
                <div className="h-full w-screen grid place-items-center gap-4 md:gap-10 grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 px-6">
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
          : itemVariants.map((variant, i) => {
              let matchingItem = items.find((item) => item.name === variant);
              return <ProductCard item={matchingItem} key={i + 1} variants={undefined} />;
            })}
      </>
    </div>
  );
};

export default CategoryPage;
