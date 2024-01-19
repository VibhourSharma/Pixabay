import React from "react";

const SimilarTags = () => {
  const names = [
    "digital",
    "computer",
    "tech",
    "coding",
    "netz",
    "code",
    "finanzieren",
    "marketing",
    "business",
    "merchant",
    "shopkeeper",
  ];

  return (
    <div className="flex items-center w-full h-[80px] p-8 bg-[#F5F5F5] overflow-hidden">
      {names.map((name, index) => {
        return (
          <ul key={name}>
            <li className="w-[151.14px] h-[42.48px] flex justify-center items-center font-[500] border-[#D1D1D1] border-[2px] leading-[14.8px] rounded-md cursor-pointer mr-4 ">
              {name}
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default SimilarTags;
