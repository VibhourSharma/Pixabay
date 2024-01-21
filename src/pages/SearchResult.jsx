import { useParams, useSearchParams } from "react-router-dom";
import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import SearchName from "../components/SearchName";
import SimilarTags from "../components/SimilarTags";
import CardSection from "../components/CardSection";

const SearchResult = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");
  console.log(search);
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
    </>
  );
};

export default SearchResult;
