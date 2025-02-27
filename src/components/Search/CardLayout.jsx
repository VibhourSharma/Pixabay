import React, { useState } from "react";
import SimilarTags from "./SimilarTags";
import ImageDetail from "../Modal/ImageDetail";

const CardLayout = ({ searchResults, isHomePage }) => {
  const [modalData, setModalData] = useState({ id: null, type: null });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const allTagsArray = searchResults.reduce((accumulator, results) => {
    results.tags.split(",").forEach((tag) => {
      const trimmedTag = tag.trim();
      if (!accumulator.includes(trimmedTag)) {
        accumulator.push(trimmedTag);
      }
    });
    return accumulator;
  }, []);

  const handleDataClick = (id, type) => {
    setModalData({ id, type });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const allTags = Array.from(allTagsArray).slice(0, 10);

  return (
    <>
      {!isHomePage && <SimilarTags tags={allTags} />}
      <div className="flex items-center p-8 gap-4 flex-wrap justify-center bg-[#ffffff]">
        {searchResults.map((results) => (
          <div
            className="w-[350px] flex flex-col justify-center bg-cover rounded-xl"
            key={results.id}
          >
            {results.type === "animation" || results.type === "film" ? (
              <video
                src={results.videos?.tiny?.url}
                alt={`Video number: ${results.id}`}
                className="h-[242.61px] cursor-pointer rounded-xl object-fill object-center"
                onClick={() => handleDataClick(results.id, results.type)}
                controls
              />
            ) : (
              <img
                src={results.webformatURL}
                alt={`Image number: ${results.id}`}
                className="h-[242.61px] object-fill object-center cursor-pointer rounded-xl"
                onClick={() => handleDataClick(results.id, results.type)}
              />
            )}
            <div className="flex items-center w-full gap-2 overflow-hidden">
              {results.tags
                .split(",")
                .slice(0, 4)
                .map((tag) => (
                  <span
                    className="rounded-md p-1.5 mt-2 min-w-fit bg-[#F5F5F5] text-[13px]"
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
        <ImageDetail
          id={modalData.id}
          type={modalData.type}
          handleCloseModal={handleCloseModal}
        />
      )}
    </>
  );
};

export default CardLayout;
