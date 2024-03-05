import React, { useState, useEffect } from "react";
import { Hero, Navbar, Search, Trending } from "../components";
import bg1 from "../assets/bgImages/bg1.jpg";
import bg2 from "../assets/bgImages/bg2.jpg";
import bg3 from "../assets/bgImages/bg3.jpg";
import bg4 from "../assets/bgImages/bg4.jpg";
import bg5 from "../assets/bgImages/bg5.jpg";
import bg6 from "../assets/bgImages/bg6.jpg";

function HomePage() {
  const backgrounds = [bg1, bg2, bg3, bg4, bg5, bg6];
  const [currentBackground, setCurrentBackground] = useState(bg1);

  useEffect(() => {
    const interval = setInterval(changeBackground, 6000);
    return () => clearInterval(interval);
  }, []);

  const changeBackground = () => {
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    setCurrentBackground(backgrounds[randomIndex]);
  };

  return (
    <div
      className="flex items-center flex-col w-full bg-no-repeat bg-cover min-h-screen"
      style={{
        backgroundImage: `url(${currentBackground})`,
        transition: "background-image 2s ease",
      }}
    >
      <Navbar />
      <Hero />
      <Search />
      <Trending />
    </div>
  );
}
export default HomePage;
