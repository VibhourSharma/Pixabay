import React from "react";
import { Link } from "react-router-dom";
import SimilarTags from "./SimilarTags";

const CardLayout = ({ searchResults, search, isHomePage }) => {
  console.log(searchResults);
  const allTagsSet = new Set();
  searchResults.forEach((results) => {
    results.tags.split(",").forEach((tag) => {
      allTagsSet.add(tag.trim());
    });
  });

  const allTags = Array.from(allTagsSet);
  const displayedTags = allTags.slice(0, 10);

  return (
    <>
      {isHomePage ? null : <SimilarTags tags={displayedTags} />}
      <div className="flex items-center p-8 gap-4 flex-wrap justify-center bg-[#ffffff]">
        {searchResults.map((results) => (
          <Link
            to={`/search?search=${search}&openModalId=${results.id}`}
            key={results.id}
          >
            <div className="w-[350px] flex flex-col justify-center cursor-pointer bg-cover">
              {results.type === "animation" || results.type === "film" ? (
                <video
                  src={results.videos?.tiny?.url}
                  alt={`Video number: ${results.id}`}
                  className="h-[242.61px]"
                  controls
                />
              ) : (
                <img
                  src={results.webformatURL}
                  alt={`Image number: ${results.id}`}
                  className="h-[242.61px] object-cover"
                />
              )}
              <div className="flex w-full items-center gap-2">
                {results.tags.split(",").map((tag) => (
                  <span
                    className="rounded-md p-1.5 mt-2 bg-[#F5F5F5] text-[13px]"
                    key={tag}
                  >
                    {tag.trim()}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default CardLayout;
