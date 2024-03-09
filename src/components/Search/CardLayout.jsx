import React, { useState } from "react";
import SimilarTags from "./SimilarTags";
import ImageDetail from "../../pages/ImageDetail";

const CardLayout = ({ searchResults, isHomePage }) => {
  const allTagsSet = new Set();
  searchResults.forEach((results) => {
    results.tags.split(",").forEach((tag) => {
      allTagsSet.add(tag.trim());
    });
  });

  const [modalOpenId, setModalOpenId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = (id) => {
    setModalOpenId(id);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const allTags = Array.from(allTagsSet).slice(0, 10);

  return (
    <>
      {isHomePage ? null : <SimilarTags tags={allTags} />}
      <div className="flex items-center p-8 gap-4 flex-wrap justify-center bg-[#ffffff]">
        {searchResults.map((results) => (
          <div className="w-[350px] flex flex-col justify-center bg-cover">
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
                className="h-[242.61px] object-cover cursor-pointer"
                onClick={() => handleImageClick(results.id)}
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
        ))}
      </div>
      {isModalOpen && (
        <ImageDetail id={modalOpenId} handleCloseModal={handleCloseModal} />
      )}
    </>
  );
};

export default CardLayout;
