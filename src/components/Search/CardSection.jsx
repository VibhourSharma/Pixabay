import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CardLayout from "./CardLayout";

const CardSection = ({ searchResults }) => {
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    };
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex items-center p-8 gap-4 flex-wrap justify-center bg-[#ffffff]">
          {[1, 2, 3, 4, 5, 6].map((placeholderId) => (
            <div
              key={placeholderId}
              className="w-[364.59px] h-[278.15px] flex flex-col justify-center bg-gray-300 animate-pulse"
            />
          ))}
        </div>
      ) : searchResults.length === 0 ? (
        <div className="text-center w-full flex items-center justify-center mt-16">
          <p className="p-8 w-[30%] rounded-lg backdrop-blur-xl bg-[#D9D9D91D] border-[#B6B6B66E] border-[4px] text-[#ffffff] text-3xl">
            No results found!
          </p>
        </div>
      ) : (
        <CardLayout searchResults={searchResults} search={search} />
      )}
    </>
  );
};

export default CardSection;
