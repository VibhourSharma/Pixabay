import React from "react";
import Search from "./Search";

const Hero = () => {
  return (
    <div className="flex flex-col items-start justify-center min-h-[176px] mt-8 text-[#FFFFFF] flex-wrap p-8 sm:p-6 z-10 ">
      <p className="font-[800] text-[33px] my-2">
        Stunning royalty-free images & royalty-free stock
      </p>
      <p className="text-[14px] font-[400] sm:hidden">
        Over 4.4 million+ high quality stock images and videos shared by our
        talented community.
      </p>
      <Search />
    </div>
  );
};

export default Hero;
