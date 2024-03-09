import React from "react";

const SearchName = ({ search }) => {
  return (
    <div className="w-full bg-white px-10 pt-8 pb-4 flex-wrap">
      <p className="text-4xl font-[800]">HD Wallpaper Images & Pictures</p>
      <p className="mt-2 text-gray-600">
        300,000+ royalty free wallpaper images or photos. Download & use the
        best wallpapers on your phone, desktop background, website & more.
      </p>
      <p className="mt-10 font-semibold">
        Showing Results for "{search}" and similar Tags:
      </p>
    </div>
  );
};

export default SearchName;
