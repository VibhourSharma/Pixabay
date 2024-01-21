import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  CardSection,
  ImageDetail,
  Navbar,
  Search,
  SearchName,
  SimilarTags,
} from "../components";

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
    <>
      <Navbar />
      <Search />
      <SearchName search={search} />
      <SimilarTags searchResults={searchResults} />
      <CardSection searchResults={searchResults} search={search} />
      {openModalId && (
        <ImageDetail
          defaultValue={searchResults.filter(
            (value) => value.id == openModalId
          )}
          isModalOpen={true}
          id={openModalId}
        />
      )}
    </>
  );
};

export default SearchResult;
