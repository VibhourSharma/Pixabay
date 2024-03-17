import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import searchLine from "../../assets/search-line.png";
import searchIcon from "../../assets/search-icon.png";

const Search = () => {
  const [searchParams] = useSearchParams();
  const defaultSearch = searchParams.get("search");
  const defaultType = searchParams.get("type");
  const [search, setSearch] = useState(defaultSearch || "");
  const [searchType, setSearchType] = useState(defaultType || "Images");

  const handleSearchTypeChange = (e) => {
    setSearchType(e.target.value);
  };

  useEffect(() => {
    setSearch(defaultSearch || "");
  }, [defaultSearch]);

  const placeholderText =
    searchType === "Images" ? "Search for Images..." : "Search for videos...";

  return (
    <div className="flex items-center justify-center mt-12 text-[#ffffff]">
      <div className="w-[757.03px] h-[54px] rounded-2xl bg-[#D9D9D91D] backdrop-blur-2xl border-[#B6B6B66E] border-[4px] flex items-center sm:w-[98%]">
        <div className="flex items-center p-2.5 min-w-[90%] sm:p-1 sm:min-w-[55%]">
          <select
            value={searchType}
            onChange={handleSearchTypeChange}
            className="mr-3 bg-transparent  focus:outline-none sm:mr-0 sm:text-xs"
          >
            <option value="Images" className="text-black">
              Images
            </option>
            <option value="videos" className="text-black">
              Videos
            </option>
          </select>
          <img src={searchLine} alt="searchLine" className="sm:hidden" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder={placeholderText}
            className="bg-transparent focus:outline-none ml-3 w-full placeholder:font-[600] py-2"
          />
        </div>

        <Link
          to={
            search.trim() === ""
              ? "/"
              : `/search?type=${searchType}&search=${search}`
          }
        >
          <button className="w-16 h-[34.73px] border-2 rounded-[8.91px] text-center sm:w-8 sm:p-1 sm:mr-2">
            <span className="sm:hidden block">Search</span>
            <img src={searchIcon} className="sm:block hidden" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Search;
