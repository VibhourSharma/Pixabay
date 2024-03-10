import { useState, useEffect } from "react";
import CardLayout from "./CardLayout";
import sad from "../../assets/sad.svg";

const CardSection = ({ searchResults }) => {
  const [loading, setLoading] = useState(true);

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
        <div className="flex items-center p-8 gap-4 flex-wrap justify-center bg-white">
          {[...Array(8)].map((placeholderId) => (
            <div
              key={placeholderId}
              className="w-[350px] h-[250px] flex flex-col justify-center bg-gray-300 animate-pulse"
            />
          ))}
        </div>
      ) : searchResults.length === 0 ? (
        <div className="text-center bg-white w-full flex items-center text-black flex-col">
          <img src={sad} />
          <p className="text-xl font-semibold mt-4">No results found!</p>
        </div>
      ) : (
        <CardLayout searchResults={searchResults} />
      )}
    </>
  );
};

export default CardSection;
