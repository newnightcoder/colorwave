import { useEffect, useState } from "react";
import { ChevronLeft } from "react-bootstrap-icons";
import { use100vh } from "react-div-100vh";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { CartDrawer, Footer, Loader, Navbar, ProductCard, SearchModal } from "../Components";
import "../Styles/_globals.css";
import { animateProducts } from "../utils/animateProducts";
import useWindowSize from "../utils/useWindowSize";

const TextLoader = () => {
  const { width } = useWindowSize();
  const responsiveHeight = use100vh();
  const { pathname } = useLocation();
  const categoryName = pathname.split("/")[2];
  return (
    <div style={{ height: "calc(100vh - 200px)" }} className="h-full w-full flex flex-col items-center justify-center">
      <span className="uppercase text-2xl">{`${categoryName.toUpperCase()} `}</span>
      <div className="w-48 h-1 bg-transparent">
        <div className={` animate-barLoadIn h-full bg-white transform scale-x-0 origin-left`}></div>
      </div>
    </div>
  );
};

const CategoryPage = () => {
  const location = useLocation();
  const item = location?.state?.item || undefined;
  const variants = location?.state?.variants || undefined;
  const categoryName = location.pathname.split("/")[2];
  const shop = useSelector((state) => state?.shop.shop);
  const limitedItems = shop.filter((item) => item?.categories?.find((cat) => cat.name === "limited"));
  const [isLoading, setIsLoading] = useState(true);
  const [subCategories, setSubCategories] = useState([]);
  const [categoryItems, setCategoryItems] = useState([]);
  const [itemVariants, setItemVariants] = useState([]);
  let subCategoriesArray = [];

  const pageConditionalStyle = {
    colors: {
      backgroundColor:
        categoryName === "gaming"
          ? "#333"
          : categoryName === "sound"
          ? "lightgray"
          : categoryName === "limited"
          ? "#171717"
          : "#ebebeb",
      color:
        categoryName === "gaming"
          ? "#ebebeb"
          : categoryName === "sound"
          ? "black"
          : categoryName === "limited"
          ? "#ebebeb"
          : "black",
    },
    titleAfterElement: {
      backgroundColor:
        categoryName === "gaming"
          ? "#ebebeb"
          : categoryName === "sound"
          ? "black"
          : categoryName === "limited"
          ? "#ebebeb"
          : "black",
    },
  };
  const findProductVariants = () => {
    if (variants === undefined) return;
    let variantsArray = item?.variant_groups[0]?.options;
    let variantItems = variantsArray?.map((variant) => {
      return variant.name;
    });
    return variantItems;
  };

  const filterItemsOfCategory = () => {
    const filteredItems = shop
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
    setIsLoading(true);
  }, [location]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (variants) {
      const products = findProductVariants();
      setItemVariants(products);
    }
    if (shop.length > 0) {
      filterItemsOfCategory();
      createSubCategoriesArray();
      getSubCategories();
    }
    setTimeout(() => {
      setIsLoading(false);
      animateProducts(".category");
    }, 800);
  }, [shop, item, variants, isLoading]);

  useEffect(() => {
    return () => {
      setIsLoading(true);
    };
  }, [location]);

  return (
    <div className="relative w-full">
      <div
        className="pt-16 min-h-screen w-full flex flex-col items-center justify-start font-cabin space-y-6 pb-12"
        style={pageConditionalStyle.colors}
      >
        <Navbar />
        <div
          className={`${
            isLoading ? "opacity-0" : "opacity-100"
          } w-full relative flex items-center justify-center md:justify-start relative  pt-4 md:pt-10 mb-4`}
        >
          <Link
            to={{
              pathname: location?.state?.from === "/shop" || location.hash === "#mics" ? "/shop" : "/",
            }}
            className="absolute left-5 md:left-10 top-50"
          >
            <ChevronLeft size={38} className="fw-bold hover:text-white transition duration-300" />
          </Link>
          <span
            className={`${
              isLoading ? "opacity-0" : "opacity-100"
            } w-min max-w-64 relative text-2xl font-bold px-4 md:px-6 md:ml-32 md:whitespace-nowrap`}
          >
            {categoryName.toUpperCase()}
            <span
              style={pageConditionalStyle.titleAfterElement}
              className="h-px w-full absolute inset-x-0 mx-auto left-0 bottom-1 md:bottom-0.5"
            ></span>
          </span>
        </div>

        <div className="category w-full h-full">
          {location.pathname === "/categories/limited" ? (
            <div>
              {isLoading ? (
                <TextLoader />
              ) : (
                <div className="section-grid h-full w-full grid place-items-center gap-3 md:gap-8 grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 px-2 md:px-6 py-12">
                  {shop.length === 0 ? (
                    <Loader color="yellow" />
                  ) : (
                    limitedItems.map((item, i) => (
                      <ProductCard key={i + 1} item={item} variants={item.variant_groups} bgColor={"rgba(0,0,0,1)"} />
                    ))
                  )}
                </div>
              )}
            </div>
          ) : variants === undefined ? (
            isLoading ? (
              <TextLoader />
            ) : shop.length === 0 ? (
              <div className="section-grid grid h-max w-full grid place-items-center gap-3 md:gap-8 grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 px-3 md:px-6">
                <Loader
                  color={
                    categoryName === "sound" || categoryName === "skins" || categoryName === "accessories"
                      ? "blue"
                      : "yellow"
                  }
                  bg={
                    categoryName === "sound" || categoryName === "skins" || categoryName === "accessories"
                      ? "white"
                      : ""
                  }
                />
              </div>
            ) : (
              subCategories.map((cat, i) => (
                <div id={cat} className="h-full flex flex-col items-center justify-center py-3 md:py-8" key={i + 1}>
                  <div
                    style={{ animation: `750ms fadeIn ${400 * i}ms forwards` }}
                    className="h-min w-max relative text-center text-2xl capitalize px-4 md:px-8 mb-6 md:mb-8 opacity-0 transform translate-y-100"
                  >
                    <h2 className="text-xl md:text-3xl relative z-10 whitespace-nowrap">{cat}</h2>
                    <span className="h-0.5 md:h-1 w-full absolute inset-x-0 mx-auto left-0 bottom-1 md:bottom-0.5 bg-yellow-300"></span>
                  </div>
                  <div className="section-grid h-max w-full grid place-items-center gap-3 md:gap-8 grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 px-3 md:px-6">
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
            )
          ) : (
            <div>
              {isLoading ? (
                <TextLoader />
              ) : (
                <div className="section-grid h-full w-full grid place-items-center gap-4 md:gap-10 grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 px-6">
                  {itemVariants?.map((variant, i) => {
                    let matchingItem = shop.find((item) => item.name === variant);
                    return <ProductCard item={matchingItem} key={i + 1} variants={undefined} parentProduct={item} />;
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <Footer />
      <CartDrawer />
      <SearchModal />
    </div>
  );
};

export default CategoryPage;
