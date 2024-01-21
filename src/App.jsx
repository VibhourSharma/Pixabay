import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Search from "./components/Search";
import Trending from "./components/Trending";

function App() {
  return (
    <div className="flex items-center justify-center flex-col w-full h-full">
      <Navbar />
      <Hero />
      <Search />
      <Trending />
    </div>
  );
}
export default App;
