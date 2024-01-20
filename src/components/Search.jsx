import searchIcon from "../assets/search-icon.png";
import searchLine from "../assets/search-line.png";
import { Link } from "react-router-dom";

const Search = ({ search, setSearch, handleSearch }) => {
  return (
    <div className="flex items-center justify-center mt-12 text-[#ffffff]">
      <div className="w-[757.03px] h-[58px] rounded-[8.91px] bg-[#D9D9D91D] backdrop-blur-lg border-[#B6B6B66E] border-[4px] flex items-center">
        <div className="flex items-center p-2.5 min-w-[90%]">
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
            className="bg-transparent focus:outline-none ml-3 w-full placeholder:text-[#ffffff] placeholder:font-[600] placeholder:leading-[19.95px] placeholder:text-[17.81px] py-2"
          />
        </div>
        <Link to={`/search?search=${search}`}>
          <button
            onClick={handleSearch}
            className="w-[70.36px] h-[34.73px] border-[2.67px] rounded-[8.91px] mr-4"
          >
            GO!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Search;
