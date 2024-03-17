import React from "react";
import { Link } from "react-router-dom";

const categories = [
  "backgrounds",
  "fashion",
  "nature",
  "science",
  "education",
  "feelings",
  "health",
  "people",
  "religion",
  "places",
  "animals",
  "industry",
  "computer",
  "food",
  "sports",
  "transportation",
  "travel",
  "buildings",
  "business",
  "music",
];

const CategorySearch = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center px-9 gap-2 py-2 w-[90%] overflow-x-scroll no-scrollbar sm:px-2 sm:w-full">
        {categories.map((category) => {
          return (
            <ul key={category}>
              <Link to={`/search?search=${category}`}>
                <li className="h-[30px] flex justify-center items-center p-2 border-[#D1D1D1] border hover:border-black rounded-md cursor-pointer text-sm transition-all">
                  {category}
                </li>
              </Link>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default CategorySearch;
