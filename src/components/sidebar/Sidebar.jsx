import React from "react";
import { Link } from "react-router-dom";
import { categoriesData } from "../../utils/data";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="container md:fixed md:w-56 md:h-screen flex flex-row md:flex-col gap-x-5 gap-y-5 py-5 md:py-10 overflow-y-scroll border-r border-gray-700 bg-black">
     
      {categoriesData.map((category) => (
        <button
        onClick={() => setSelectedCategory(category.name)}
          style={{
            background: category.name === selectedCategory && "#f71909",
            padding: "0.3rem",
            borderRadius: "5px",
            color: "white",
          }}
          key={category.name}
          className="flex items-center md:gap-x-4 text-gray-400"
        >
          <span
            style={{
              color: category.name === selectedCategory ? "white" : "red",
              marginRight: "10px",
            }}
            className=""
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? "1" : "0.3",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
