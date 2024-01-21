import { Hero, Navbar, Search, Trending } from "../components";

function HomePage() {
  return (
    <div className="flex items-center justify-center flex-col w-full h-full">
      <Navbar />
      <Hero />
      <Search />
      <Trending />
    </div>
  );
}
export default HomePage;
