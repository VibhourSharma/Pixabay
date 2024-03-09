import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CardSection from "../components/Search/CardSection";
import ImageDetail from "./ImageDetail";
import Navbar from "../components/Dashboard/Navbar";
import Search from "../components/Dashboard/Search";
import SearchName from "../components/Search/SearchName";

const SearchResult = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");
  const openModalId = searchParams.get("openModalId");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = "https://pixabay.com/api/";
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
  }, [search]);

  return (
    <div className="bg-black">
      <Navbar />
      <div className="mt-[-49px] mb-4">
        <Search />
      </div>
      <SearchName search={search} />
      <CardSection searchResults={searchResults} search={search} />
      {openModalId && <ImageDetail id={openModalId} />}
    </div>
  );
};

export default SearchResult;
