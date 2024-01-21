import { Link } from "react-router-dom";

const SimilarTags = ({ searchResults }) => {
  const categories = [
    "Marketing",
    "Business",
    "Code",
    "Tech",
    "Digital",
    "Netz",
    "Computer",
    "Tennis",
    "Shoes",
  ];

  return (
    <>
      {searchResults.length === 0 ? (
        ""
      ) : (
        <>
          <div className="flex items-center w-full h-[80px] p-8 bg-[#F5F5F5] overflow-hidden">
            {categories.map((name) => {
              return (
                <ul key={name}>
                  <Link to={`/search?search=${name}`}>
                    <li className="w-[151.14px] h-[42.48px] flex justify-center items-center font-[500] border-[#D1D1D1] border-[2px] leading-[14.8px] rounded-md cursor-pointer mr-4 ">
                      {name}
                    </li>
                  </Link>
                </ul>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default SimilarTags;
