import React, { useState, useEffect } from "react";
import Navbar from "../components/Dashboard/Navbar";
import Hero from "../components/Dashboard/Hero";
import { bg1, bg2, bg4, bg5, bg6, bg7, bg8 } from "../assets/bgImages/bgImage";
import ImageType from "../components/Dashboard/ImageType";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import Footer from "../components/Dashboard/Footer";

function HomePage() {
  const backgrounds = [bg1, bg2, bg4, bg5, bg6, bg7, bg8];
  const [currentBackground, setCurrentBackground] = useState(bg1);

  useEffect(() => {
    const preloadedImages = backgrounds.map((bg) => {
      const img = new Image();
      img.src = bg;
      return img;
    });

    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * preloadedImages.length);
      setCurrentBackground(preloadedImages[randomIndex].src);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div
        className="flex items-center flex-col w-full bg-no-repeat bg-cover h-[28rem]"
        style={{
          backgroundImage: `url(${currentBackground})`,
          transition: "background-image 2s ease, background-position 0s ease",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-[28rem] bg-black opacity-40"></div>
        <Navbar />
        <Hero />
      </div>
      <ImageType />
      <Footer />
    </>
  );
}

export default HomePage;
