import searchIcon from "../assets/search-icon.png";
import searchLine from "../assets/search-line.png";
import { Link, useSearchParams } from "react-router-dom";
import { useState } from "react";

const Search = () => {
  const [searchParams] = useSearchParams();
  const defaultSearch = searchParams.get("search");
  const [search, setSearch] = useState(defaultSearch || "");

  return (
    <div
      className="flex items-center justify-center mt-12 text-[#ffffff]"
      data-aos="fade-down"
    >
      <div className="w-[757.03px] h-[58px] rounded-[8.91px] bg-[#D9D9D91D] backdrop-blur-lg border-[#B6B6B66E] border-[4px] flex items-center sm:w-[300px] md:w-full md:justify-evenly md:items-center lg:w-[500px] xl:w-[600px] xxl:w-[600px]">
        <div className="flex items-center p-2.5 min-w-[90%] md:min-w-12">
          <img
            src={searchIcon}
            alt="searchIcon"
            className="w-[21.38px] h-[21.38px]"
          />
          <img src={searchLine} alt="searchLine" className="ml-3" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder="Search..."
            className="bg-transparent focus:outline-none ml-3 w-full placeholder:text-[#ffffff] placeholder:font-[600] placeholder:leading-[19.95px] placeholder:text-[17.81px] py-2 md:w-[70%] lg:w-[80%]"
          />
        </div>
        <Link to={search.trim() === "" ? "/" : `/search?search=${search}`}>
          <button className="w-[70.36px] h-[34.73px] border-[2.67px] rounded-[8.91px] sm:w-[30px] sm:text-[11px] md:w-8 md:text-[12px] lg:w-12 xl:w-[60px] xxl:w-[60px]">
            GO!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Search;
