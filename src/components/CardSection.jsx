import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const CardSection = ({ searchResults, searchTerm }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex items-center p-12 gap-8 justify-around flex-wrap bg-[#ffffff]">
          {[1, 2, 3, 4, 5, 6].map((placeholderId) => (
            <div
              key={placeholderId}
              className="w-[364.59px] h-[278.15px] flex flex-col justify-center bg-[#F0F0F0] animate-pulse"
            />
          ))}
        </div>
      ) : searchResults.length === 0 ? (
        <div className="text-center w-full flex items-center justify-center mt-16">
          <p className="p-8 w-[30%] rounded-lg backdrop-blur-xl bg-[#D9D9D91D] border-[#B6B6B66E] border-[4px] text-[#ffffff] text-3xl">
            {" "}
            No results found!
          </p>
        </div>
      ) : (
        <div className="flex items-center p-12 gap-8 justify-evenly flex-wrap bg-[#ffffff]">
          {searchResults.map((results) => (
            <Link to={`/search/${searchTerm}/${results.id}`} key={results.id}>
              <div className="w-[364.59px] h-[278.15px] flex flex-col justify-center cursor-pointer">
                <img
                  src={results.webformatURL}
                  alt={`Image number: ${results.id}`}
                  className="h-[242.61px]"
                />
                <div className="flex h-full w-full items-center gap-[7.1px]">
                  {results.tags.split(",").map((tag) => (
                    <span
                      className="rounded-[1.78px] p-1 mt-2 bg-[#F5F5F5] text-sm"
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
      )}
    </>
  );
};

export default CardSection;
