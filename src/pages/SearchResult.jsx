import Navbar from "../components/Navbar";
import Search from "../components/Search";
import SearchName from "../components/SearchName";
import SimilarTags from "../components/SimilarTags";
import CardSection from "../components/CardSection";

const SearchResult = () => {
  return (
    <>
      <Navbar />
      <Search />
      <SearchName />
      <SimilarTags />
      <CardSection />
    </>
  );
};

export default SearchResult;
