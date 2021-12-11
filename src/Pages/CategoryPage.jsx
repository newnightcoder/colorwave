import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Product } from "../Components";

const CategoryPage = () => {
  const location = useLocation();
  const categoryName = location.pathname.split("/")[2];
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
        return category.name !== categoryName && category.name !== "accessories";
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
    <div className="h-full w-screen flex flex-col items-center justify-center text-white pt-4">
      <span>{categoryName.toUpperCase()}</span>
      <>
        {subCategories.map((cat, i) => (
          <div key={i + 1}>
            <div>{cat}</div>
            <div className="h-full w-full grid place-items-center gap-4 grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
              {categoryItems.map((item, i) => {
                const { categories } = item;
                if (categories.find((category) => category.name === cat)) {
                  return <Product item={item} key={i + 1} />;
                }
              })}
            </div>
          </div>
        ))}
      </>
    </div>
  );
};

export default CategoryPage;
