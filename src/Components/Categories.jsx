import React from "react";
import { CategoryLink } from ".";

const Categories = () => {
  // const [title, setTitle] = useState("test");

  // const displayTitle = (str) => {
  //   switch (str) {
  //     case "gaming":
  //       return setTitle("gaming");
  //     case "sound":
  //       return setTitle("sound");
  //     default:
  //       return setTitle("test");
  //   }
  // };

  return (
    <div className="h-3/4 w-screen grid grid-cols-2	border border-2 border-red-500">
      <CategoryLink title="gaming" />
      <CategoryLink title="sound" />
      <CategoryLink title="iphones" />
      <CategoryLink title="ipads" />
      <CategoryLink title="accessories" />
    </div>
  );
};

export default Categories;
