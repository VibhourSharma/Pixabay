import "./App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Search from "./components/Search";
import Trending from "./components/Trending";

function App() {
  const [search, setSearch] = useState("");
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (search) {
      const apiUrl = "https://pixabay.com/api/";
      const apiKey = import.meta.env.VITE_PIXABAY_API_KEY;

      try {
        const imageData = await fetch(`${apiUrl}?key=${apiKey}&q=${search}`);
        const data = await imageData.json();

        const searchedImages = data.hits.filter((image) =>
          image.tags.toLowerCase().includes(search.toLowerCase())
        );
        setSearch("");
        setImages(searchedImages);
        navigate(`/search/${search}`);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  return (
    <>
      <Navbar />
      <Hero />
      <Search
        search={search}
        handleSearch={handleSearch}
        setSearch={setSearch}
        setImages={setImages}
      />
      <Trending />
    </>
  );
}

export default App;
