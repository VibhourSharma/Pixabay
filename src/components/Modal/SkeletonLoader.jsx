import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[#000000] bg-opacity-40 flex items-center justify-center z-20">
      <div className="w-[1150px] h-auto pb-4 bg-white z-10 rounded-[8.89px] sm:max-w-[90%]">
        <div className="flex items-center justify-between w-full h-[70px] bg-gray-200 p-8 rounded-[8.89px] animate-pulse"></div>
        <div className="w-full p-4 flex justify-evenly flex-wrap sm:flex-col sm:items-center">
          <div
            className="w-[780px] h-[480px] rounded-[7.11px] bg-gray-200 animate-pulse sm:h-[90%]
                xxl:w-[60%]
                sm:w-[55%] sm:p-1 lg:w-[50%] lg-h[50%] md:w-[40%] md:h-[40%]"
          />
          <div className="sm:w-[40%] flex flex-col justify-between items-center">
            <div className="flex justify-center gap-4 flex-col">
              <span className="text-lg font-semibold font-serif bg-gray-200 p-2 rounded-[8.89px] animate-pulse"></span>
              <button className="w-[274.67px] rounded-lg py-4 bg-gray-200 animate-pulse"></button>
              <button className="w-[274.67px] rounded-lg py-4 bg-gray-200 animate-pulse"></button>
            </div>
            <div className="w-full h-52 text-sm mt-2 sm:mt-0 sm:text-xs">
              <span className="text-lg font-semibold font-serif bg-gray-200 rounded-[8.89px] animate-pulse"></span>
              <div className="flex items-center justify-between mt-4 sm:mt-0">
                <span className="flex flex-col">
                  <span className="font-[600] text-sm bg-gray-200 rounded-[8.89px] animate-pulse"></span>
                </span>
                <span className="flex flex-col">
                  <span className="font-[600] text-sm bg-gray-200 rounded-[8.89px] animate-pulse"></span>
                </span>
                <span className="flex flex-col">
                  <span className="font-[600] text-sm bg-gray-200 rounded-[8.89px] animate-pulse"></span>
                </span>
              </div>
              <div className="flex items-center justify-between mt-4 sm:mt-0">
                <span className="flex flex-col">
                  <span className="font-[600] text-sm bg-gray-200 rounded-[8.89px] animate-pulse"></span>
                </span>
                <span className="flex flex-col">
                  <span className="font-[600] text-sm bg-gray-200 rounded-[8.89px] animate-pulse"></span>
                </span>
                <span className="flex flex-col">
                  <span className="font-[600] text-sm bg-gray-200 rounded-[8.89px] animate-pulse"></span>
                </span>
              </div>
            </div>
            <div className="flex w-full flex-col items-center gap-2">
              <button className="w-[274.67px] rounded-lg py-4 bg-gray-200 animate-pulse"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
