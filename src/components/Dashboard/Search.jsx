import searchIcon from "../../assets/search-icon.png";
import searchLine from "../../assets/search-line.png";
import { Link, useSearchParams } from "react-router-dom";
import { useState } from "react";

const Search = () => {
  const [searchParams] = useSearchParams();
  const defaultSearch = searchParams.get("search");
  const [search, setSearch] = useState(defaultSearch || "");
  const [searchType, setSearchType] = useState("Images");

  const handleSearchTypeChange = (e) => {
    setSearchType(e.target.value);
  };

  const placeholderText =
    searchType === "Images" ? "Search for Images..." : "Search for videos...";

  return (
    <div className="flex items-center justify-center mt-12 text-[#ffffff]">
      <div className="w-[757.03px] h-[54px] rounded-2xl bg-[#D9D9D91D] backdrop-blur-2xl border-[#B6B6B66E] border-[4px] flex items-center">
        <div className="flex items-center p-2.5 min-w-[90%]">
          <select
            value={searchType}
            onChange={handleSearchTypeChange}
            className="mr-3 bg-transparent  focus:outline-none"
          >
            <option value="Images" className="text-black">
              Images
            </option>
            <option value="videos" className="text-black">
              Videos
            </option>
          </select>
          {/* <img
            src={searchIcon}
            alt="searchIcon"
            className="w-[21.38px] h-[21.38px]"
          /> */}
          <img src={searchLine} alt="searchLine" />
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
          <button className="w-16 h-[34.73px] border-2 rounded-[8.91px]">
            Search
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Search;
