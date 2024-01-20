import { useState } from "react";
import { Link } from "react-router-dom";
import ImageDetail from "../pages/ImageDetail";

const CardSection = ({ searchResults, search }) => {
  return (
    <div className="flex items-center p-12 gap-8 justify-around flex-wrap bg-[#ffffff]">
      {searchResults.map((results) => {
        return (
          <>
            <Link to={`/search/${search}/${results.id}`}>
              <div
                className="w-[364.59px] h-[278.15px] flex flex-col justify-center cursor-pointer"
                key={results.id}
              >
                <img
                  src={results.webformatURL}
                  alt={`Image number: ${results.id}`}
                  className="h-[242.61px]"
                />
                <div className="flex h-full w-full items-center gap-[7.1px]">
                  {results.tags.split(",").map((tag) => {
                    return (
                      <span
                        className="rounded-[1.78px] pr-[15.8px] pl-[7.1px] mt-2 bg-[#F5F5F5]"
                        key={tag}
                      >
                        {tag.trim()}
                      </span>
                    );
                  })}
                </div>
              </div>
            </Link>
          </>
        );
      })}
    </div>
  );
};

export default CardSection;
