import React, { useState, useEffect } from "react";
import All from "../../assets/home.svg";
import Illustrations from "../../assets/illustrations.svg";
import Vector from "../../assets/vectors.svg";
import Photos from "../../assets/photos.svg";
import Videos from "../../assets/videos.svg";
import CardLayout from "../Search/CardLayout";
import CategorySearch from "./CategorySearch";

const imageTypes = [
  { name: "Home", image: All },
  { name: "Photo", image: Photos },
  { name: "Illustration", image: Illustrations },
  { name: "Vector", image: Vector },
  { name: "Videos", image: Videos },
];

const ImageType = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedType, setSelectedType] = useState("Home");

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = "https://pixabay.com/api/";
      const apiKey = import.meta.env.VITE_PIXABAY_API_KEY;
      let apiEndpoint = apiUrl;
      let imageType = "all";
      if (selectedType === "Videos") {
        apiEndpoint = `${apiUrl}/videos/`;
      } else {
        imageType =
          selectedType === "Home" ? "all" : selectedType.toLowerCase();
      }

      try {
        const response = await fetch(
          `${apiEndpoint}?key=${apiKey}&image_type=${imageType}`
        );
        const searchData = await response.json();
        setSearchResults(searchData.hits);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [selectedType]);

  const handleTypeClick = (type) => {
    setSelectedType(type);
  };

  return (
    <>
      <div className="flex items-center justify-center w-full h-16 bg-transparent text-gray-500 overflow-hidden gap-2">
        {imageTypes.map((imageType) => (
          <ul key={imageType.name}>
            <li
              className={`h-9 flex justify-center items-center font-[500] leading-[14.8px] rounded-2xl cursor-pointer mr-2 text-sm p-3 ${
                selectedType === imageType.name ? "text-black bg-gray-200" : ""
              }`}
              onClick={() => handleTypeClick(imageType.name)}
            >
              <img
                src={imageType.image}
                className="h-4 w-6"
                alt={imageType.name}
              />
              {imageType.name}
            </li>
          </ul>
        ))}
      </div>
      <CategorySearch />
      <CardLayout
        searchResults={searchResults}
        selectedType={selectedType}
        imageTypes={imageTypes.names}
        isHomePage={true}
      />
    </>
  );
};

export default ImageType;
