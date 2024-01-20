import React from "react";

const SearchName = ({ search }) => {
  return (
    <div className="flex items-center justify-center text-[#ffffff]">
      <div className="w-[401px] h-[77px]">
        <p className="font-[700] text-[35px] text-center bg-transparent leading-[2.2]">
          Results: {search}
        </p>
      </div>
    </div>
  );
};

export default SearchName;
