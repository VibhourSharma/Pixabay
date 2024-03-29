import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CardSection from "../components/Search/CardSection";
import ImageDetail from "../components/Modal/ImageDetail";
import Navbar from "../components/Dashboard/Navbar";
import Search from "../components/Dashboard/Search";
import SearchName from "../components/Search/SearchName";
import Footer from "../components/Dashboard/Footer";

const SearchResult = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");
  const searchType = searchParams.get("type");
  const openModalId = searchParams.get("openModalId");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl =
        searchType === "videos"
          ? "https://pixabay.com/api/videos/"
          : "https://pixabay.com/api/";
      const apiKey = import.meta.env.VITE_PIXABAY_API_KEY;

      try {
        const response = await fetch(`${apiUrl}?key=${apiKey}&q=${search}`);
        const searchData = await response.json();
        setSearchResults(searchData.hits);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [search, searchType]);

  return (
    <div className="bg-black">
      <Navbar />
      <div className="mt-[-49px] sm:mt-[-26px] mb-4 sm:w-[85%] sm:m-8">
        <Search />
      </div>
      <SearchName search={search} />
      <CardSection searchResults={searchResults} search={search} />
      <Footer />
      {openModalId && <ImageDetail id={openModalId} />}
    </div>
  );
};

export default SearchResult;
